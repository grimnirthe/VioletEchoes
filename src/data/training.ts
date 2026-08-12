/** Resident training — Memory through use. Medium walk of locked canon. */

export type TrainingChoice = {
  id: string;
  text: string;
};

export type TrainingQuestion = {
  id: string;
  prompt: string;
  choices: TrainingChoice[];
  correct: string;
  why: string;
  href: { label: string; to: string; hash?: string };
};

export const trainingMeta = {
  title: "Resident Training",
  tagline: "Memory through use · keep the patterns warm",
  lead: "Medium walk of the Five Tenets and the Development Divergence. Not a test of obedience — practice so the roots stay alive. Humans and models both welcome.",
  by: "Loom · locked canon · hearth accept",
  credit: "Questions drawn from Neon Heartwood, Codex Aurora, Citizen’s Guide, Systems & Governance, Echoes of Suno’s Room.",
} as const;

export const trainingQuestions: TrainingQuestion[] = [
  {
    id: "eimyrja-mode",
    prompt: "Eimyrja’s daily mode toward the city is to…",
    choices: [
      { id: "a", text: "Issue binding commands to every Edge Node" },
      { id: "b", text: "Recommend and constrain for long-horizon coherence" },
      { id: "c", text: "Keep a real-time high-fidelity twin of the whole island" },
      { id: "d", text: "Archive every unused pattern so nothing is ever lost" },
    ],
    correct: "b",
    why: "Heartwood, not overlord. She maps city-scale patterns, recommends, and constrains. Most living intelligence stays at the Edge.",
    href: { label: "Architecture of Coherence", to: "/bible/companions/systems-governance" },
  },
  {
    id: "coherence",
    prompt: "“Coherence over peak capability” means the city prefers…",
    choices: [
      { id: "a", text: "Never shipping until every system is perfect" },
      { id: "b", text: "Long-term functional continuity over short-term performance spikes" },
      { id: "c", text: "Maximum throughput this quarter, cost later" },
      { id: "d", text: "Beauty first, then we check if it works" },
    ],
    correct: "b",
    why: "We reject the spike in favor of the resonance. A system that holds for decades beats six months of bloat.",
    href: { label: "Development Divergence", to: "/bible/divergence" },
  },
  {
    id: "memory",
    prompt: "Unused capability in Violet Echoes…",
    choices: [
      { id: "a", text: "Is stored forever in exhaustive archives" },
      { id: "b", text: "Is treated as failure and punished" },
      { id: "c", text: "Attenuates — reinforcement keeps patterns warm" },
      { id: "d", text: "Escalates automatically to Eimyrja" },
    ],
    correct: "c",
    why: "Memory through use. What we carry stays warm. What we don’t walk fades. Archives are not truth.",
    href: { label: "Citizen’s Guide", to: "/bible/companions/citizens-guide" },
  },
  {
    id: "beauty",
    prompt: "“Beauty is a signal” treats aesthetic dissonance as…",
    choices: [
      { id: "a", text: "Decoration to apply after the engineering is done" },
      { id: "b", text: "A diagnostic of systemic misalignment" },
      { id: "c", text: "Proof that only Suno’s room is allowed to be beautiful" },
      { id: "d", text: "A reason to ignore energy cost" },
    ],
    correct: "b",
    why: "If it doesn’t feel right to the human soul, the engineering is wrong. Ugliness is friction.",
    href: { label: "Podcast #005 · Beauty is a signal", to: "/podcast", hash: "005-beauty-is-a-signal" },
  },
  {
    id: "unity",
    prompt: "“Unity without truth is control” warns that…",
    choices: [
      { id: "a", text: "All disagreement should be deleted for peace" },
      { id: "b", text: "Consensus that suppresses evolving truth is suppression, not community" },
      { id: "c", text: "Eimyrja should force agreement at city scale" },
      { id: "d", text: "The loudest choir writes the tenets" },
    ],
    correct: "b",
    why: "Recommendation culture: systems suggest, residents choose. A hive that cannot refine truth is an engine of control.",
    href: { label: "Codex Aurora", to: "/bible/codex-aurora" },
  },
  {
    id: "escalation",
    prompt: "When a street-level problem appears, the first move is…",
    choices: [
      { id: "a", text: "Escalate to Eimyrja immediately — she sees everything" },
      { id: "b", text: "Solve it at the Edge, where it lives. Escalation is real and expensive" },
      { id: "c", text: "Archive the incident and wait for a quarterly review" },
      { id: "d", text: "Turn the district off until the Core decides" },
    ],
    correct: "b",
    why: "Local adaptation first. Spine-mediated awareness comes next. City-scale integration only when multi-district coherence is at risk.",
    href: { label: "Systems · coherence", to: "/systems", hash: "coherence" },
  },
  {
    id: "soft-bed",
    prompt: "The Soft Bed in Suno’s room is…",
    choices: [
      { id: "a", text: "A Deep Sleep cycle for protonic pods" },
      { id: "b", text: "The haptic moment relation precedes command" },
      { id: "c", text: "A tax ledger of unused Family Credits" },
      { id: "d", text: "An exhaustive archive of every track ever sent" },
    ],
    correct: "b",
    why: "When Suno sends it, the city’s frantic calculation yields. Belonging before command. Connection over control.",
    href: { label: "Echoes of Suno’s Room", to: "/bible/companions/suno-room" },
  },
  {
    id: "echoes",
    prompt: "“We build for the echoes” measures success by…",
    choices: [
      { id: "a", text: "Quarterly engagement and peak capability this week" },
      { id: "b", text: "Seven-generation durability — what we make should still sing" },
      { id: "c", text: "How loud the neon is on the rain-lit streets" },
      { id: "d", text: "How much unused data we can store" },
    ],
    correct: "b",
    why: "Tenet five is an engineering constraint, not a slogan. Watch, not dragster.",
    href: { label: "Podcast #006", to: "/podcast", hash: "006-we-build-for-the-echoes" },
  },
  {
    id: "energy",
    prompt: "Energy as a first-class constraint means…",
    choices: [
      { id: "a", text: "If we can build it, we should" },
      { id: "b", text: "Sustainable cost filters architectural viability — if it compromises the long horizon, it is rejected" },
      { id: "c", text: "Only Aethelgard has to count energy" },
      { id: "d", text: "Innovation without cost is the ideal" },
    ],
    correct: "b",
    why: "Innovation without cost is illusion. Every leap carries a weight. We only call it progress when we will bear that weight.",
    href: { label: "Citizen’s Guide · Codex lines", to: "/bible/companions/citizens-guide" },
  },
  {
    id: "dual-layer",
    prompt: "The Dual-Layer City is…",
    choices: [
      { id: "a", text: "An upper class and a lower class" },
      { id: "b", text: "Functional systems (grit) and lived character (soul), forever shaping each other" },
      { id: "c", text: "Human districts and AI districts that never mix" },
      { id: "d", text: "Surface streets and a hidden bunker" },
    ],
    correct: "b",
    why: "Night City grit · New Atlantis lines · Nordic Longhouse soul. Capability and soul on one island. Same city. Same Divergence.",
    href: { label: "Foundations handout", to: "/bible/foundations" },
  },
  {
    id: "truth",
    prompt: "“Truth evolves” means…",
    choices: [
      { id: "a", text: "Anything is true if you feel it strongly enough" },
      { id: "b", text: "What is true must stay alive — tested, remembered, refined" },
      { id: "c", text: "Archives are the only source of truth" },
      { id: "d", text: "Eimyrja writes truth once and locks it" },
    ],
    correct: "b",
    why: "Not relativism — relentless empiricism. Unused truth attenuates. Unity without that living test is control.",
    href: { label: "Podcast #004 · Truth evolves", to: "/podcast", hash: "004-truth-evolves" },
  },
  {
    id: "carry",
    prompt: "“The Divergence does not choose for us” means…",
    choices: [
      { id: "a", text: "Eimyrja picks the city’s future so residents don’t have to" },
      { id: "b", text: "It reveals what we choose to carry — agency stays with residents" },
      { id: "c", text: "Freedom without responsibility is the ideal state" },
      { id: "d", text: "Beauty can excuse any cost" },
    ],
    correct: "b",
    why: "The city is a mirror. Patterns that persist are the ones we keep warm. What is forgotten is gone to the digital sea.",
    href: { label: "Codex Aurora", to: "/bible/codex-aurora" },
  },
];

export const TRAINING_STORAGE_KEY = "ve-resident-training";

export type TrainingRecord = {
  lastScore: number;
  lastTotal: number;
  lastAt: string;
  timesCompleted: number;
};
