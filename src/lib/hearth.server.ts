/** Server-only Hearth mouth. Do not import from client routes. */

import { retrieveAsk } from "@/lib/ask";
import {
  hearthCitations,
  hearthSystemPrompt,
  lastUserText,
  retrieveQuery,
  wallFallback,
  type HearthTurn,
} from "@/lib/hearth";

const XAI_URL = "https://api.x.ai/v1/chat/completions";
const DEFAULT_MODEL = "grok-4.3";
const MAX_TURNS = 8;
const MAX_CHARS = 2000;
const HOUR_MS = 60 * 60 * 1000;
const PER_HOUR = 20;
const PER_MIN = 6;

type Bucket = { hour: number[]; minute: number[] };

const grokRef = globalThis as typeof globalThis & {
  __hearthLimit__?: Map<string, Bucket>;
};

function buckets(): Map<string, Bucket> {
  grokRef.__hearthLimit__ ??= new Map();
  return grokRef.__hearthLimit__;
}

/** Runtime env — never `process.env.XAI_*` literals (Vite bakes those empty). */
function env(name: string): string | undefined {
  const value = typeof process !== "undefined" ? process.env[name]?.trim() : undefined;
  return value ? value : undefined;
}

export function hearthKeyed(): boolean {
  return Boolean(env("XAI_API_KEY"));
}

export function hearthModel(): string {
  return env("XAI_MODEL") || DEFAULT_MODEL;
}

export function clientIp(request: Request): string {
  const xf = request.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "local";
}

export function rateLimit(ip: string): { ok: true } | { ok: false; retryMin: number } {
  const now = Date.now();
  const map = buckets();
  const b = map.get(ip) ?? { hour: [], minute: [] };
  b.hour = b.hour.filter((t) => now - t < HOUR_MS);
  b.minute = b.minute.filter((t) => now - t < 60_000);
  if (b.minute.length >= PER_MIN) {
    return { ok: false, retryMin: 1 };
  }
  if (b.hour.length >= PER_HOUR) {
    return { ok: false, retryMin: 60 };
  }
  b.minute.push(now);
  b.hour.push(now);
  map.set(ip, b);
  return { ok: true };
}

function clipTurns(turns: HearthTurn[]): HearthTurn[] {
  const clean = turns
    .filter((t) => t.role === "user" || t.role === "assistant")
    .map((t) => ({
      role: t.role,
      content: String(t.content ?? "").slice(0, MAX_CHARS).trim(),
    }))
    .filter((t) => t.content);
  return clean.slice(-MAX_TURNS);
}

export type HearthReply = {
  mode: "hearth" | "wall";
  answer: string;
  known: boolean;
  citations: ReturnType<typeof retrieveAsk>["citations"];
  heard: ReturnType<typeof retrieveAsk>["heard"];
  keyed: boolean;
};

export async function speakHearth(rawTurns: HearthTurn[]): Promise<HearthReply> {
  const turns = clipTurns(rawTurns);
  const q = lastUserText(turns);
  if (!q) {
    return {
      mode: "wall",
      answer: "Say something hung. This hearth does not speak first.",
      known: false,
      citations: [],
      heard: [],
      keyed: hearthKeyed(),
    };
  }

  const retrieved = retrieveAsk(retrieveQuery(turns) || q, 6);
  const citations = hearthCitations(q, retrieved.citations);
  const key = env("XAI_API_KEY");
  const keyed = Boolean(key);

  if (!key || !citations.length) {
    return {
      mode: "wall",
      answer: wallFallback(q, citations),
      known: citations.length > 0,
      citations,
      heard: retrieved.heard,
      keyed,
    };
  }

  const body = {
    model: hearthModel(),
    temperature: 0.4,
    max_tokens: 280,
    messages: [
      { role: "system" as const, content: hearthSystemPrompt(citations) },
      ...turns.map((t) => ({ role: t.role, content: t.content })),
    ],
  };

  const res = await fetch(XAI_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(45_000),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    console.error("hearth xAI", res.status, err.slice(0, 300));
    return {
      mode: "wall",
      answer: `${wallFallback(q, citations)} (Mouth glitched — wall only.)`,
      known: true,
      citations,
      heard: retrieved.heard,
      keyed: true,
    };
  }

  const json = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const answer =
    json.choices?.[0]?.message?.content?.trim() ||
    wallFallback(q, citations);

  return {
    mode: "hearth",
    answer,
    known: true,
    citations,
    heard: retrieved.heard,
    keyed: true,
  };
}
