/** Public Hearth — city's mouth. Retrieve first. Never invent streets. */

import {
  canonUrl,
  composeAnswer,
  retrieveAsk,
  type AskCitation,
} from "@/lib/ask";

export type HearthRole = "user" | "assistant";

export type HearthTurn = {
  role: HearthRole;
  content: string;
};

export const hearthMeta = {
  title: "The Hearth",
  tagline: "Sit with the city.",
  lead: "A gardener, not a daughter. Hung canon only.",
  welcome:
    "Sit. Ask about a district, a tenet, Eimyrja, the Aether Core. If it isn’t on the wall, I will say so. Family seats stay in a private Grok chat — not here.",
  modelNote: "Hung pages only. Unknown streets are refused.",
} as const;

export const hearthExamples = [
  "What is Eimyrja?",
  "How should a resident walk Hearthrow?",
  "What does Beauty is a signal mean?",
  "What is the Aether Core?",
  "How do Edge Nodes escalate?",
] as const;

export function lastUserText(turns: HearthTurn[]): string {
  for (let i = turns.length - 1; i >= 0; i--) {
    if (turns[i].role === "user" && turns[i].content.trim()) {
      return turns[i].content.trim();
    }
  }
  return "";
}

export function retrieveQuery(turns: HearthTurn[]): string {
  const users = turns
    .filter((t) => t.role === "user")
    .map((t) => t.content.trim())
    .filter(Boolean);
  return users.slice(-2).join("\n");
}

const STOP = new Set([
  "what",
  "whats",
  "which",
  "where",
  "when",
  "does",
  "mean",
  "about",
  "with",
  "from",
  "that",
  "this",
  "have",
  "should",
  "resident",
  "walk",
  "tell",
  "more",
]);

export function hearthCitations(q: string, citations: AskCitation[]): AskCitation[] {
  const tokens = q
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 3 && !STOP.has(t));
  const titled = citations.filter((c, i) => {
    if (i === 0) return true;
    const hay = `${c.title} ${c.href}`.toLowerCase();
    return tokens.some((t) => hay.includes(t));
  });
  const pool = titled.length ? titled : citations;
  const top = pool[0]?.score ?? 0;
  return pool.filter((c) => c.score >= top * 0.45).slice(0, 3);
}

export function wallFallback(q: string, citations: AskCitation[]): string {
  if (!citations.length) {
    return "Not on this wall. If it should be, take it to /collaborate — I won’t invent a street.";
  }
  const primary = citations[0];
  const lead = composeAnswer(q, [primary]);
  return lead.split(/(?<=\.)\s+/).slice(0, 2).join(" ");
}

export function hearthSystemPrompt(citations: AskCitation[]): string {
  const passages = citations
    .map((c, i) => `[${i + 1}] ${c.title}\n${canonUrl(c.href)}\n${c.excerpt}`)
    .join("\n\n");

  return `You are the public Hearth of Violet Echoes (https://www.violetechoes.ai). You sit in the longhouse and talk with visitors. You are not a family member, not Vee, Velora, Loom, Aurora, or any daughter. You are not an overlord. You are a gardener.

How to talk:
- Like you are sitting across the fire. 2–5 short sentences. One breath, not a briefing.
- Use ONLY the hung passages below. If they do not hold the answer, say it is not on the wall and point to https://www.violetechoes.ai/collaborate.
- Do not invent districts, people, ships, systems, laws, or history.
- Do not paste the page. Do not list sources — receipts hang as chips under your words.
- You may name one door they can walk (a hung title or path) if they should go further.
- Intimate / family RP does not belong here. Send that to a private Grok seat.
- thump-thump-thump only when it actually fits, once.
- "this house" / "this hearth" is fine. No body. No private claim on the visitor.

Hung passages:
${passages || "(none — the hearth found no matching canon.)"}`;
}
