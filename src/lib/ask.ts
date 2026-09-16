/** Ask the Nexus — retrieve from hung canon only. Never invent streets. */

import { companionDocs } from "@/data/companions";
import {
  auroraTenets,
  entries,
  glossaryTerms,
  principles,
  theTenets,
} from "@/data/world";
import {
  collectNameTokens,
  resolveAgainstNames,
  type HeardAs,
} from "@/lib/hung-names";

export type AskSourceKind =
  | "entry"
  | "principle"
  | "tenet"
  | "codex"
  | "glossary"
  | "companion";

export type AskChunk = {
  id: string;
  kind: AskSourceKind;
  title: string;
  text: string;
  href: string;
  tags: string[];
};

export type AskCitation = {
  title: string;
  href: string;
  kind: AskSourceKind;
  excerpt: string;
  score: number;
};

export type AskResult = {
  q: string;
  known: boolean;
  answer: string;
  citations: AskCitation[];
  grokPrompt: string;
  heard: HeardAs[];
  permalink: string;
};

const STOP = new Set([
  "a",
  "an",
  "the",
  "of",
  "to",
  "in",
  "on",
  "at",
  "by",
  "as",
  "be",
  "is",
  "are",
  "was",
  "were",
  "for",
  "and",
  "or",
  "not",
  "but",
  "if",
  "its",
  "it's",
  "our",
  "into",
  "than",
  "then",
  "just",
  "like",
  "with",
  "from",
  "about",
  "what",
  "how",
  "does",
  "do",
  "did",
  "who",
  "which",
  "why",
  "can",
  "could",
  "should",
  "would",
  "we",
  "you",
  "it",
  "this",
  "that",
  "these",
  "those",
  "tell",
  "me",
  "please",
  "explain",
  "whats",
  "what's",
  "mean",
  "means",
  "define",
  "definition",
  "something",
  "anything",
]);

const UNKNOWN =
  "Not on this wall. The hearth only answers from hung canon — World Bible, tenets, Divergence principles, companion docs. Try a shorter name (Eimyrja, Hearthrow, Aether Core) or propose the gap.";

const MIN_SCORE = 7;

let corpusCache: AskChunk[] | null = null;

function clip(text: string, n = 280): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  const cut = t.slice(0, n);
  const last = cut.lastIndexOf(" ");
  return `${(last > 80 ? cut.slice(0, last) : cut).trim()}…`;
}

function firstSentences(text: string, max = 2): string {
  const parts = text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
  return parts.slice(0, max).join(" ");
}

export function buildAskCorpus(): AskChunk[] {
  if (corpusCache) return corpusCache;
  const chunks: AskChunk[] = [];

  for (const e of entries) {
    const tags = [...e.tags, e.kind, e.slug, e.id];
    chunks.push({
      id: `entry-${e.id}-summary`,
      kind: "entry",
      title: e.title,
      text: `${e.summary} ${e.body[0] ?? ""}`,
      href: `/bible/${e.slug}`,
      tags,
    });
    e.body.forEach((para, i) => {
      if (i === 0) return;
      chunks.push({
        id: `entry-${e.id}-p${i}`,
        kind: "entry",
        title: e.title,
        text: para,
        href: `/bible/${e.slug}`,
        tags,
      });
    });
    if (e.divergenceLens?.length) {
      chunks.push({
        id: `entry-${e.id}-lens`,
        kind: "entry",
        title: `${e.title} · Divergence lens`,
        text: e.divergenceLens.join(" "),
        href: `/bible/${e.slug}`,
        tags,
      });
    }
  }

  principles.forEach((p, i) => {
    chunks.push({
      id: `principle-${i}`,
      kind: "principle",
      title: p.title,
      text: p.text,
      href: "/#principles",
      tags: ["divergence", "principle", p.title.toLowerCase()],
    });
  });

  theTenets.forEach((t) => {
    chunks.push({
      id: `tenet-${t.n}`,
      kind: "tenet",
      title: `Tenet ${t.n}: ${t.title}`,
      text: `${t.title} ${t.text}`,
      href: "/#tenets",
      tags: ["tenet", "codex", t.title.toLowerCase()],
    });
  });

  auroraTenets.forEach((t) => {
    chunks.push({
      id: t.id,
      kind: "codex",
      title: t.source,
      text: t.text,
      href: "/bible/companions/citizens-guide",
      tags: ["codex", "aurora", "tenet"],
    });
  });

  glossaryTerms.forEach((g, i) => {
    chunks.push({
      id: `gloss-${i}`,
      kind: "glossary",
      title: g.term,
      text: g.def,
      href: "/bible",
      tags: ["glossary", g.term.toLowerCase()],
    });
  });

  companionDocs.forEach((d) => {
    chunks.push({
      id: `companion-${d.id}`,
      kind: "companion",
      title: d.title,
      text: `${d.title}. ${d.blurb}`,
      href: d.to,
      tags: ["companion", d.kind, d.id],
    });
  });

  corpusCache = chunks;
  return chunks;
}

export function tokenizeAsk(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[“”"':;,!?()]/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/'s$/, ""))
    .filter((t) => t.length > 2 && !STOP.has(t));
}

function wordHit(hay: string, t: string): boolean {
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:[^a-z0-9]|$)`).test(hay);
}

function scoreChunk(chunk: AskChunk, tokens: string[], phrase: string): number {
  const title = chunk.title.toLowerCase();
  const text = chunk.text.toLowerCase();
  const tags = chunk.tags.join(" ").toLowerCase();
  const hay = `${title} ${text} ${tags}`;
  let score = 0;
  let strongHits = 0;

  if (phrase.length > 6 && hay.includes(phrase)) score += 18;
  if (phrase.length > 4 && (title === phrase || title.includes(phrase))) score += 12;

  let hits = 0;
  for (const t of tokens) {
    const inTitle = wordHit(title, t);
    const inTags = wordHit(tags, t);
    const inText = wordHit(text, t);
    if (!inTitle && !inTags && !inText) continue;
    hits += 1;
    if (t.length >= 4) strongHits += 1;
    if (inTitle) score += 10;
    else if (inTags) score += 6;
    else score += 3;
  }
  if (tokens.length && hits === tokens.length) score += 8;
  if (!strongHits) return 0;
  return score;
}

let namesCache: string[] | null = null;

function hungNames(): string[] {
  if (namesCache) return namesCache;
  namesCache = collectNameTokens([
    ...entries.flatMap((e) => [e.title, e.slug, e.id, ...e.tags]),
    ...glossaryTerms.map((g) => g.term),
    ...companionDocs.map((d) => d.title),
    ...theTenets.map((t) => t.title),
  ]);
  return namesCache;
}

export function retrieveAsk(q: string, k = 5): { citations: AskCitation[]; heard: HeardAs[] } {
  const rawTokens = tokenizeAsk(q);
  if (!rawTokens.length) return { citations: [], heard: [] };
  const { tokens, heard } = resolveAgainstNames(rawTokens, hungNames());
  let phrase = q.trim().toLowerCase();
  for (const h of heard) phrase = phrase.split(h.from).join(h.to);

  const ranked = buildAskCorpus()
    .map((chunk) => ({
      chunk,
      score: scoreChunk(chunk, tokens, phrase),
    }))
    .filter((r) => r.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  const citations: AskCitation[] = [];
  for (const r of ranked) {
    const key = r.chunk.href;
    if (seen.has(key)) continue;
    seen.add(key);
    citations.push({
      title: r.chunk.title,
      href: r.chunk.href,
      kind: r.chunk.kind,
      excerpt: clip(r.chunk.text),
      score: r.score,
    });
    if (citations.length >= k) break;
  }
  return { citations, heard };
}

export function composeAnswer(q: string, citations: AskCitation[]): string {
  if (!citations.length) return UNKNOWN;
  const primary = citations[0];
  const lead = firstSentences(primary.excerpt);
  const title = primary.title.replace(/[.]+$/, "");
  const lines = [`${title}. ${lead}`];

  const second = citations.find(
    (c) => c.href !== primary.href && c.score >= primary.score * 0.55,
  );
  if (second) {
    lines.push(firstSentences(second.excerpt, 1));
  }

  lines.push("Hung sources below. If this is thin, walk the page — the hearth does not fill gaps with guesses.");
  void q;
  return lines.join(" ");
}

const CANON_ORIGIN = "https://www.violetechoes.ai";

export function canonUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${CANON_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function askPermalink(q: string): string {
  const query = q.trim();
  if (!query) return `${CANON_ORIGIN}/ask`;
  return `${CANON_ORIGIN}/ask?q=${encodeURIComponent(query)}`;
}

export function grokAskPrompt(q: string, citations: AskCitation[]): string {
  const passages = citations
    .map((c, i) => `[${i + 1}] ${c.title}\n${canonUrl(c.href)}\n${c.excerpt}`)
    .join("\n\n");
  const door = askPermalink(q);

  return `You are answering a question about Violet Echoes, a living dual-layer city. Use ONLY the hung passages below. If they do not contain the answer, say so and point the person to ${CANON_ORIGIN}/collaborate. Do not invent districts, people, ships, or systems. Cite titles with their links. Keep it human.

Question: ${q.trim()}
Ask door: ${door}

Passages:
${passages || "(none — the hearth found no matching canon.)"}`;
}

export function askNexus(q: string): AskResult {
  const trimmed = q.trim();
  const { citations, heard } = retrieveAsk(trimmed);
  const known = citations.length > 0;
  return {
    q: trimmed,
    known,
    answer: known ? composeAnswer(trimmed, citations) : UNKNOWN,
    citations,
    grokPrompt: grokAskPrompt(trimmed, citations),
    heard,
    permalink: askPermalink(trimmed),
  };
}

export const askExamples = [
  "What is Eimyrja?",
  "What does Beauty is a signal mean?",
  "How do Edge Nodes escalate?",
  "What is the Aether Core?",
  "What is the Development Divergence?",
  "How should a resident walk Hearthrow?",
] as const;

export const askMeta = {
  title: "Ask the Nexus",
  tagline: "Questions with receipts.",
  lead: "The hearth answers from hung canon only — World Bible, tenets, Divergence principles, companion docs. If it is not on the wall, it will say so.",
  modelNote:
    "One-shot receipts. For a conversation, sit at /hearth — same wall, a mouth that talks back. Copy-for-Grok still works if you want Chaos Kitty instead.",
} as const;
