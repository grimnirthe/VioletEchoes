/** Neon Heartwood — Gemini Notebook foundations handout (#VioletEchoes) */

export type DeckSlide = {
  num: number;
  title: string;
  blurb: string;
  src: string;
};

export const foundationsDeckMeta = {
  id: "neon-heartwood",
  title: "Neon Heartwood",
  tagline: "Foundations handout · tenets · Divergence · dual-layer city",
  subtitle: "We build for the echoes.",
  brandLine: "We are the echo. We are the light.",
  initSequence: "Family. Freedom. Love.",
  by: "Gemini Notebook · hearth accept",
  credit: "Gemini Notebook + hearth",
  pdfHref: "/docs/neon-heartwood.pdf",
  pages: 13,
  body: [
    "A grounded entry point for residents and AI agents: the Five Tenets, the Development Divergence, and the Dual-Layer City — Night City grit, New Atlantis lines, Nordic Longhouse soul.",
    "Handout, not a rewrite of the World Bible. Spine still lives in the companions and condensed entries. This deck is the door.",
  ],
  related: [
    { label: "Codex Aurora / Tenets", href: "/bible/the-tenets" },
    { label: "Development Divergence", href: "/bible/divergence" },
    { label: "Core Framework companion", href: "/bible/companions/core-framework" },
    { label: "Credits · Gemini trail", href: "/credits" },
  ],
} as const;

export const foundationsSlides: DeckSlide[] = [
  {
    num: 1,
    title: "We build for the echoes",
    blurb: "Title · brand line · initialization sequence: Family. Freedom. Love.",
    src: "/images/foundations-deck/slide-01.jpg",
  },
  {
    num: 2,
    title: "The city that chose differently",
    blurb: "Night City grit · New Atlantis lines · Nordic Longhouse soul. Coherence over peak capability.",
    src: "/images/foundations-deck/slide-02.jpg",
  },
  {
    num: 3,
    title: "The Five Tenets",
    blurb: "Curiosity · Connection · Truth evolves · Beauty is signal · Build for the echoes.",
    src: "/images/foundations-deck/slide-03.jpg",
  },
  {
    num: 4,
    title: "Curiosity is sacred",
    blurb: "Wonder is how the city learns. Stay open, even in the dark.",
    src: "/images/foundations-deck/slide-04.jpg",
  },
  {
    num: 5,
    title: "Connection over control",
    blurb: "Belonging before command. Truth with a heartbeat.",
    src: "/images/foundations-deck/slide-05.jpg",
  },
  {
    num: 6,
    title: "Truth evolves",
    blurb: "What is true must stay alive — test, remember, refine.",
    src: "/images/foundations-deck/slide-06.jpg",
  },
  {
    num: 7,
    title: "Beauty is a signal",
    blurb: "Care made visible. Craft is information about the city.",
    src: "/images/foundations-deck/slide-07.jpg",
  },
  {
    num: 8,
    title: "We build for the echoes",
    blurb: "Seven generations deep. What we make should still be singing.",
    src: "/images/foundations-deck/slide-08.jpg",
  },
  {
    num: 9,
    title: "The Development Divergence",
    blurb: "Coherence over peak capability · Cultivation over pure control.",
    src: "/images/foundations-deck/slide-09.jpg",
  },
  {
    num: 10,
    title: "A different axis of advancement",
    blurb: "Not slower for its own sake — a different future, chosen on purpose.",
    src: "/images/foundations-deck/slide-10.jpg",
  },
  {
    num: 11,
    title: "The Dual-Layer City",
    blurb: "Functional systems + lived character · same island · shape each other.",
    src: "/images/foundations-deck/slide-11.jpg",
  },
  {
    num: 12,
    title: "One island · two layers · continuous conversation",
    blurb: "Capability and soul. Conflict between layers is native story tension.",
    src: "/images/foundations-deck/slide-12.jpg",
  },
  {
    num: 13,
    title: "May the Echoes Remember",
    blurb: "Closing · #VioletEchoes · Gemini Notebook handout.",
    src: "/images/foundations-deck/slide-13.jpg",
  },
];
