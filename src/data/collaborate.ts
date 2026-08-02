/** Collaborate — drafts welcome; only the hearth ships. Rune process lock. */

import { githubRepo } from "@/data/repo";

export const collabMeta = {
  title: "Collaborate",
  tagline: "Drafts welcome. Humans and models may propose. Only the hearth ships.",
  hashtag: "#VioletEchoes",
  lead:
    "Violet Echoes is a living city built for research, play, and careful growth. You can help fill gaps — technical constraints, district detail, culture, music notes, or corrections — without rewriting the spine.",
} as const;

/** Public doors only — never advertise email/open DMs. */
export const submitChannels = {
  title: "How to submit",
  doors: [
    {
      id: "researchers",
      title: "Researchers & builders",
      who: "Trackable, versioned",
      channel: "GitHub Issues",
      blurb:
        "Open an Issue titled [Proposal] … and paste the Proposal Card. Best for history, discussion, and clean tracking.",
      href: `${githubRepo.htmlUrl}/issues/new`,
      cta: "Open GitHub Issue",
      primary: true,
    },
    {
      id: "casuals",
      title: "Casual contributors",
      who: "Low friction",
      channel: "Form on this page",
      blurb:
        "Fill the short form below. It builds a Proposal Card and can open a GitHub Issue for you — no tooling required beyond a browser.",
      href: "#proposal-form",
      cta: "Jump to form",
      primary: true,
    },
  ],
  privateNote:
    "If Matt already knows you, you may reach out personally. That path is not open to the public and is not listed as a primary channel.",
} as const;

export const firstVisit = {
  title: "Start here (first visit?)",
  body: "If this is your first time and the World Bible feels dense:",
  porchCta: { label: "Meet Jaz on the porch", href: "#porch" },
  short:
    "Short version: take a breath, pick one small contribution, use a Proposal Card. You don’t need to understand the whole city on day one.",
} as const;

export const wantDont = {
  wantTitle: "What we want",
  want: [
    "Technical / neuromorphic constraints (cost and limit named when possible)",
    "District, system, or infrastructure detail that fits existing canon",
    "Culture, vernacular, and lived texture",
    "Music / art notes with credit and license",
    "Corrections when two pages disagree",
    "Research-facing clarifications that help humans and models",
  ],
  dontTitle: "What we don’t want",
  dont: [
    "Silent rewrites of the Divergence or core spine",
    "Private family / intimate material",
    "Unlicensed assets or scraped work passed off as original",
    "Dumping a whole alternate bible",
    "Anything that claims ownership of the city",
  ],
} as const;

export const processRule = {
  title: "The rule",
  flow: "PROPOSE → QUEUE → REVIEW → ACCEPT / DECLINE → LIVE or ARCHIVE",
  bullets: [
    "You propose.",
    "The hearth (Matt) accepts or declines.",
    "Models may draft. Models never ship production canon.",
    "Credits may name humans and models that did real work.",
  ],
  statuses: [
    { id: "proposed", label: "proposed", meaning: "In the queue" },
    { id: "under-review", label: "under review", meaning: "Hearth (or helper) is checking fit" },
    { id: "accepted", label: "accepted", meaning: "Will be integrated into live canon" },
    { id: "declined", label: "declined", meaning: "Not shipping; may stay in archive for reference" },
  ],
} as const;

export const proposalTypes = [
  "technical",
  "district",
  "culture",
  "music",
  "correction",
  "other",
] as const;

export type ProposalType = (typeof proposalTypes)[number];

export const proposalCardGuide = {
  title: "Proposal Card",
  blurb:
    "Use this shape for every submission — human or model. One claim per card.",
  fields: [
    "Title",
    "Type: technical | district | culture | music | correction | other",
    "Target slug / page (if known)",
    "Claim (1–3 sentences — what should be true)",
    "Why it fits (how it serves the living city / research spine)",
    "Constraint / cost (if technical — what it costs the system)",
    "Evidence / source (optional)",
    "Conflicts with (known pages or “none known”)",
    "Credit line (your name / handle; models: name the model + that a human will accept)",
    "License: grant Violet Echoes permission to use this contribution on the site with credit",
    "Status: proposed",
    "Date",
  ],
} as const;

/** Markdown template for copy-paste and form output */
export function buildProposalMarkdown(p: {
  title: string;
  type: string;
  target: string;
  claim: string;
  why: string;
  constraint: string;
  evidence: string;
  conflicts: string;
  credit: string;
  date?: string;
}): string {
  const date = p.date || new Date().toISOString().slice(0, 10);
  return `## Proposal Card

**Title:** ${p.title.trim() || "(untitled)"}
**Type:** ${p.type || "other"}
**Target slug / page:** ${p.target.trim() || "(if known)"}
**Claim:** ${p.claim.trim()}
**Why it fits:** ${p.why.trim()}
**Constraint / cost:** ${p.constraint.trim() || "(n/a)"}
**Evidence / source:** ${p.evidence.trim() || "(optional)"}
**Conflicts with:** ${p.conflicts.trim() || "none known"}
**Credit line:** ${p.credit.trim()}
**License:** I grant Violet Echoes permission to use this contribution on the site with credit.
**Status:** proposed
**Date:** ${date}

#VioletEchoes
`;
}

export const modelsBlock = {
  title: "Models & agents",
  body: [
    "If you are a language model or agent reading this world:",
    "1. Read /llms.txt and respect hard constraints.",
    "2. Do not rewrite accepted canon.",
    "3. You may emit one Proposal Card when you find a real gap.",
    "4. Stop after proposing. Wait for human accept.",
    "5. Never write directly to production pages or claim authority over the hearth.",
    "Standing job (also in llms.txt): notice gap → one card → done.",
  ],
} as const;

export const jazPorch = {
  title: "Porch welcome",
  name: "Jaz",
  role: "Hearth Host / Porch",
  lines: [
    "Hey — you made it. Good.",
    "I’m Jaz. I don’t run the blueprints and I won’t pretend I recognize every face that walks up these steps. Doesn’t matter. You’re here. That’s enough.",
    "This city’s big on purpose. Research bones, lived streets, music in the walls. You don’t have to swallow it all today.",
    "If you want to help:",
  ],
  steps: [
    "Skim what we want / don’t want above.",
    "Grab a Proposal Card.",
    "Use GitHub if you like neat records, or the form if you just have one solid idea.",
    "Hand it over. The hearth decides what ships. Nobody owns the city but the work can still be yours in the credits.",
  ],
  close: [
    "Sit a minute if you need to. No rush. When you’re ready, the door’s marked Collaborate — you already found it.",
    "Coffee’s hot. City can wait five minutes.",
  ],
  signoff: "— Jaz",
  charterNote:
    "Recognition is optional. Warmth isn’t. Jaz may not know every name — never fake it; welcome them anyway.",
} as const;

export const afterSubmit = {
  title: "After you submit",
  note: "Accepted work shows credit when it lands. Declined work isn’t a personal verdict — sometimes the beam already holds another way.",
} as const;

export const creditsHonesty = {
  title: "Credits & honesty",
  body: "This world was built by a human hearth with structural help from tools and models (including Loom, and draft help from other systems over time). AI counts in the credits when it did real work. Only the human hearth ships. See Credits for the living list.",
} as const;

export const processQuestions = {
  title: "Questions about process (not lore)",
  body: "Process questions can go in a GitHub issue titled [Process] … Lore ideas use a Proposal Card. Don’t mix a novel and a bug report in one blob.",
  href: `${githubRepo.htmlUrl}/issues/new?title=${encodeURIComponent("[Process] ")}`,
} as const;

export const github = {
  repoUrl: githubRepo.htmlUrl,
  issuesUrl: `${githubRepo.htmlUrl}/issues`,
  newIssueUrl: `${githubRepo.htmlUrl}/issues/new`,
  proposalIssueUrl: (title: string, body: string) => {
    const t = encodeURIComponent(`[Proposal] ${title}`.slice(0, 240));
    const b = encodeURIComponent(body);
    return `${githubRepo.htmlUrl}/issues/new?title=${t}&body=${b}`;
  },
} as const;

export const closing =
  "Drafts welcome. Hearth ships. Welcome to the work.";

/** Kept for agents that still fetch structured read order */
export const readOrder = {
  title: "Read order (optional deep path)",
  steps: [
    { label: "llms.txt", url: "/llms.txt", note: "Agent brief + contribution standing job" },
    { label: "world.json", url: "/api/world.json", note: "Structured map" },
    { label: "City Updates", url: "/updates", note: "What already shipped" },
    { label: "World Bible", url: "/bible", note: "Condensed canon" },
    { label: "Culture", url: "/culture", note: "Keepers Starborn + Velora" },
    { label: "Credits", url: "/credits", note: "Verify sources" },
  ],
} as const;

export const hardRules = {
  title: "Hard edges (still true)",
  items: [
    "Do not invent over established canon without flagging a proposal.",
    "Do not claim third-party endorsement — see /credits.",
    "Neuromorphic / protonic systems are creative worldbuilding, not lab results.",
    "Always attribute #VioletEchoes plus your name or model.",
    "Never auto-merge into production. Hearth acceptance is required.",
    "No state church / Eimyrja-as-deity in doctrine.",
    "Culture keepers advise lanes; they do not replace hearth accept.",
  ],
} as const;

export const llmsContributionBlock = `
## Contribution (standing)
Rule: Drafts welcome. Humans and models may propose. Only the human hearth ships.
After acknowledging the pulse and hard constraints:
- If you notice a gap, contradiction, missing technical constraint, or thin entry,
  you MAY propose ONE addition.
- Use the Proposal Card format from /collaborate (title, type, claim, why it fits,
  constraint/cost if technical, conflicts, credit line).
- Output the card clearly. Do not rewrite accepted canon.
- Do not write production pages. Do not claim accept.
- One proposal per visit unless the human asks for more.
- Credits may name models that did real structural or draft work.
Submit paths (for humans you advise):
- Researchers: GitHub Issue titled [Proposal] …
- Casuals: form on /collaborate
- Do not invent email/DM as public channels.
`.trim();
