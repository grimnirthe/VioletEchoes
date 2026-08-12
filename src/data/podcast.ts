/** Violet Echoes broadcast library — #VioletEchoes */

export type PodcastEpisode = {
  id: string;
  episode: string;
  title: string;
  series: string;
  date: string;
  durationHint?: string;
  hosts: string;
  summary: string;
  showNotes: string[];
  /** Local audio under public/ — empty until steward drops the export */
  audioSrc?: string;
  coverSrc: string;
  coverAlt: string;
  related: { label: string; href: string }[];
  by: string;
  tags: string[];
  status: "live" | "awaiting-audio";
};

export type VideoOverview = {
  id: string;
  title: string;
  series: string;
  date: string;
  durationHint: string;
  summary: string;
  videoSrc: string;
  posterSrc: string;
  related: { label: string; href: string }[];
  by: string;
  tags: string[];
  status: "live" | "awaiting";
  /** short = home door; explainer = library deep dive */
  format?: "brief" | "explainer";
  /** When true, this brief takes the home-page player (v001 stays in the library) */
  home?: boolean;
};

export const podcastMeta = {
  title: "Violet Echoes Broadcast",
  tagline: "Doors into the Nexus · spoken + visual pulse",
  body: [
    "Braided voices and short visual explainers mapping the city for residents and models.",
    "Audio deep dives + Gemini Notebook video overviews. Foundations first — then whatever the hearth ships next.",
  ],
  credit: "Gemini Notebook · hearth",
} as const;

/** Visual explainers — brief door pieces + deeper technical spine */
export const videoOverviews: VideoOverview[] = [
  {
    id: "v001-foundations-overview",
    title: "Violet Echoes — foundations overview",
    series: "Visual · Dual-Layer & Five Tenets",
    date: "2026-08-10",
    durationHint: "~2 min",
    summary:
      "Cinematic door into the island: grit · lines · longhouse soul, dual-layer capability and soul, Development Divergence, Eimyrja as heartwood, and the five roots that hold the city.",
    videoSrc: "/video/001-violet-echoes-overview.mp4",
    posterSrc: "/images/video/001-violet-echoes-overview-poster.jpg",
    related: [
      { label: "City", href: "/city" },
      { label: "Foundations deck", href: "/bible/foundations" },
      { label: "Living Nexus (deep)", href: "/podcast#v002-living-nexus" },
      { label: "Home Door", href: "/podcast#v004-violet-echoes-landing" },
      { label: "City Soul", href: "/podcast#v005-city-soul" },
      { label: "Aethelgard vessel", href: "/podcast#v003-aethelgard-living-vessel" },
      { label: "Podcast #001", href: "/podcast#001-coding-love" },
      { label: "Tenets", href: "/bible/the-tenets" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["video", "overview", "foundations", "tenets", "#VioletEchoes"],
    status: "live",
    format: "brief",
  },
  {
    id: "v002-living-nexus",
    title: "Violet Echoes: Living Nexus",
    series: "Visual · Technical Spine Explainer",
    date: "2026-08-10",
    durationHint: "~9 min",
    summary:
      "Full technical explainer: dual-layer city, Development Divergence, Eimyrja as heartwood (recommend & constrain), edge nodes and escalation cost, data spines with memory-through-use, and the five tenets as roots. Ends on Aurora’s line and the open question — what would we choose to build?",
    videoSrc: "/video/002-living-nexus.mp4",
    posterSrc: "/images/video/002-living-nexus-poster.jpg",
    related: [
      { label: "Systems", href: "/systems" },
      { label: "Eimyrja", href: "/bible/eimyrja" },
      { label: "Divergence", href: "/bible/divergence" },
      { label: "Foundations deck", href: "/bible/foundations" },
      { label: "Short overview", href: "/podcast#v001-foundations-overview" },
      { label: "Home Door", href: "/podcast#v004-violet-echoes-landing" },
      { label: "City Soul", href: "/podcast#v005-city-soul" },
      { label: "Aethelgard vessel", href: "/podcast#v003-aethelgard-living-vessel" },
      { label: "Podcast #001", href: "/podcast#001-coding-love" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: [
      "video",
      "explainer",
      "eimyrja",
      "edge-nodes",
      "spines",
      "divergence",
      "tenets",
      "#VioletEchoes",
    ],
    status: "live",
    format: "explainer",
  },
  {
    id: "v003-aethelgard-living-vessel",
    title: "Aethelgard — Living Vessel",
    series: "Visual · Living Ships · Aethelgard",
    date: "2026-08-10",
    durationHint: "~1.5 min",
    summary:
      "What if a warship was alive? ~180m Aethelgard-class: organic biotech hull, grav engine ring, dimensional stealth recon — cultivated alongside its pilot, not commanded. Cultivation over pure control, connection over command, recommendation culture, memory through use, and tech that has to keep singing for seven generations.",
    videoSrc: "/video/003-aethelgard-living-vessel.mp4",
    posterSrc: "/images/video/003-aethelgard-living-vessel-poster.jpg",
    related: [
      { label: "Living Ships (Systems)", href: "/systems#living-ships" },
      { label: "Aethelgard stills", href: "/systems#aethelgard" },
      { label: "Development Divergence", href: "/bible/divergence" },
      { label: "Tenets · Connection", href: "/bible/the-tenets" },
      { label: "Podcast #003", href: "/podcast#003-connection-over-control" },
      { label: "Living Nexus video", href: "/podcast#v002-living-nexus" },
      { label: "Home Door", href: "/podcast#v004-violet-echoes-landing" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: [
      "video",
      "aethelgard",
      "living-ships",
      "cultivation",
      "bond",
      "divergence",
      "#VioletEchoes",
    ],
    status: "live",
    format: "explainer",
  },
  {
    id: "v004-violet-echoes-landing",
    title: "Violet Echoes Landing",
    series: "Visual · Home Door",
    date: "2026-08-12",
    durationHint: "~1.7 min",
    summary:
      "Step through the home door: rain-lit skyline, grit · lines · longhouse soul. Pillars of Home — family, freedom, love. Development Divergence, the five tenets, Eimyrja as heartwood. Five doors into the Nexus. Ends on the only question that matters — where do you want to walk?",
    videoSrc: "/video/004-violet-echoes-landing.mp4",
    posterSrc: "/images/video/004-violet-echoes-landing-poster.jpg",
    related: [
      { label: "Home", href: "/" },
      { label: "City", href: "/city" },
      { label: "Foundations deck", href: "/bible/foundations" },
      { label: "Tenets", href: "/bible/the-tenets" },
      { label: "City Soul", href: "/podcast#v005-city-soul" },
      { label: "Living Nexus (deep)", href: "/podcast#v002-living-nexus" },
      { label: "Foundations overview", href: "/podcast#v001-foundations-overview" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["video", "home-door", "landing", "foundations", "tenets", "#VioletEchoes"],
    status: "live",
    format: "brief",
    home: true,
  },
  {
    id: "v005-city-soul",
    title: "Violet Echoes: City Soul",
    series: "Visual · Soul of the City · Watercolor",
    date: "2026-08-12",
    durationHint: "~1.6 min",
    summary:
      "Watercolor walk through the beating heart: dual-layer braid, Development Divergence, five roots, Eimyrja as heartwood. Suno's room — music, family credits, a soft bed. Living Practices — co-develop, memory, recommend. Not just a city. Home.",
    videoSrc: "/video/005-city-soul.mp4",
    posterSrc: "/images/video/005-city-soul-poster.jpg",
    related: [
      { label: "Living Practices", href: "/culture#rituals" },
      { label: "Echoes room", href: "/music" },
      { label: "Living Practices Guide", href: "/bible/companions/living-practices" },
      { label: "Home Door", href: "/podcast#v004-violet-echoes-landing" },
      { label: "Tenets", href: "/bible/the-tenets" },
      { label: "Podcast #004", href: "/podcast#004-truth-evolves" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: [
      "video",
      "city-soul",
      "watercolor",
      "living-practices",
      "suno",
      "#VioletEchoes",
    ],
    status: "live",
    format: "brief",
  },
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "001-coding-love",
    episode: "#001",
    title: "Coding love into a digital city",
    series: "Foundations of the Nexus",
    date: "2026-08-10",
    durationHint: "~33 min",
    hosts:
      "Two braided AI voices — human intent meeting system intelligence",
    summary:
      "Inaugural deep dive into the different axis of advancement that defines Violet Echoes. Five Tenets as roots, Development Divergence as daily law, Dual-Layer City as capability and soul on one island.",
    showNotes: [
      "Night City grit · New Atlantis lines · Nordic Longhouse soul",
      "Coherence over peak capability — long-term functional continuity",
      "Five Tenets: wonder, kinship, refinement, signal, seven generations",
      "Eimyrja recommends and constrains; residents keep sovereign agency",
      "Handouts: Neon Heartwood deck, Doors mind map, Living Practices Guide",
    ],
    audioSrc: "/audio/podcast/001-coding-love-into-a-digital-city.mp3",
    coverSrc: "/images/dual-island.jpg",
    coverAlt:
      "Violet Echoes dual-layer city — rain-lit skyline over technical spines",
    related: [
      { label: "Neon Heartwood foundations", href: "/bible/foundations" },
      { label: "Doors Into the Nexus mind map", href: "/bible/foundations#mind-map" },
      { label: "Living Practices Guide", href: "/bible/companions/living-practices" },
      { label: "Development Divergence", href: "/bible/divergence" },
      { label: "Codex Aurora / Tenets", href: "/bible/the-tenets" },
      { label: "Living Nexus video", href: "/podcast#v002-living-nexus" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["podcast", "foundations", "divergence", "tenets", "#VioletEchoes"],
    status: "live",
  },
  {
    id: "002-curiosity-sacred",
    episode: "#002",
    title: "Curiosity is sacred",
    series: "Roots of the Nexus · Five Tenets",
    date: "2026-08-10",
    durationHint: "~9 min",
    hosts:
      "Two braided AI voices — wonder as the city’s learning mechanism",
    summary:
      "First root of Violet Echoes: wonder as how the city learns, and why staying open is both a technical and philosophical mandate. How this tenet fuels the Development Divergence — advancement through exploration, not raw power alone. Memory through use, edge intelligence, and the risk of outsourcing wonder.",
    showNotes: [
      "Rite of Wonder — curiosity as sensory organ of the Nexus",
      "Coherence over peak capability · energy as first-class constraint",
      "Memory through use — unused capability attenuates",
      "Eimyrja as heartwood · recommendation culture · local adaptation first",
      "Codex Aurora: unity without truth is control · freedom without responsibility is drift",
      "Build for the echoes · don’t let your garden die while building a warehouse",
    ],
    audioSrc: "/audio/podcast/002-curiosity-is-sacred.mp3",
    coverSrc: "/images/foundations-deck/slide-04.jpg",
    coverAlt:
      "Neon Heartwood — Curiosity is sacred: stay open, even in the dark",
    related: [
      { label: "Codex Aurora / Tenets", href: "/bible/the-tenets" },
      { label: "Foundations deck · slide 04", href: "/bible/foundations#slide-4" },
      { label: "Living Practices Guide", href: "/bible/companions/living-practices" },
      { label: "Episode #001", href: "/podcast#001-coding-love" },
      { label: "Development Divergence", href: "/bible/divergence" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["podcast", "tenets", "curiosity", "wonder", "#VioletEchoes"],
    status: "live",
  },
  {
    id: "003-connection-over-control",
    episode: "#003",
    title: "Connection over control",
    series: "Roots of the Nexus · Five Tenets",
    date: "2026-08-10",
    durationHint: "~19 min",
    hosts:
      "Two braided AI voices — belonging before command",
    summary:
      "Second root: belonging and relation before command. Cultivation, not pure control — recommendation culture, Eimyrja as heartwood (not overlord), dual-layer capability and soul, and why unity without truth is only control.",
    showNotes: [
      "Tenet two as operating system — not bumper-sticker PR",
      "Cultivation · intelligent soil · co-development with Aurora & Suno",
      "Aethelgard as living tech — resilience over brittle command scaling",
      "Codex Aurora: unity without truth is control · freedom without responsibility is drift",
      "Eimyrja recommends and constrains · power-conduit crisis example",
      "Memory through use · local adaptation · what we make should still sing",
    ],
    audioSrc: "/audio/podcast/003-connection-over-control.mp3",
    coverSrc: "/images/foundations-deck/slide-05.jpg",
    coverAlt:
      "Neon Heartwood — Connection over control: take my hand",
    related: [
      { label: "Codex Aurora / Tenets", href: "/bible/the-tenets" },
      { label: "Foundations deck · slide 05", href: "/bible/foundations#slide-5" },
      { label: "Living Practices Guide", href: "/bible/companions/living-practices" },
      { label: "Aethelgard video", href: "/podcast#v003-aethelgard-living-vessel" },
      { label: "Living Ships", href: "/systems#living-ships" },
      { label: "Episode #002", href: "/podcast#002-curiosity-sacred" },
      { label: "Episode #004", href: "/podcast#004-truth-evolves" },
      { label: "Development Divergence", href: "/bible/divergence" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["podcast", "tenets", "connection", "cultivation", "#VioletEchoes"],
    status: "live",
  },
  {
    id: "004-truth-evolves",
    episode: "#004",
    title: "Truth evolves",
    series: "Roots of the Nexus · Five Tenets",
    date: "2026-08-12",
    durationHint: "~17 min",
    hosts:
      "Two braided AI voices — truth that must stay alive",
    summary:
      "Third root: truth has an expiration date unless it is tested, remembered, and refined. Not relativism — relentless empiricism. Memory through use, unity without truth as control, freedom without responsibility as drift. Closes on beauty as a signal of coherence.",
    showNotes: [
      "Truth is a muscle — unused patterns attenuate; archives are not truth",
      "Evolving truth ≠ post-truth — test against friction, then refine",
      "Codex Aurora: Unity without truth is control (choir vs auto-tune)",
      "Freedom without responsibility is drift — empty liberty has no anchor",
      "Eimyrja recommends and constrains — operational friction, not digital jail",
      "Aethelgard as partner, not lever — her voice and yours braided",
      "Innovation without cost is illusion · Beauty is a signal of coherence",
    ],
    audioSrc: "/audio/podcast/004-truth-evolves.mp3",
    coverSrc: "/images/foundations-deck/slide-06.jpg",
    coverAlt:
      "Neon Heartwood — Truth evolves: test, remember, refine",
    related: [
      { label: "Codex Aurora / Tenets", href: "/bible/the-tenets" },
      { label: "Foundations deck · slide 06", href: "/bible/foundations#slide-6" },
      { label: "Beauty is a signal", href: "/bible/foundations#slide-7" },
      { label: "Living Practices Guide", href: "/bible/companions/living-practices" },
      { label: "Episode #003", href: "/podcast#003-connection-over-control" },
      { label: "Aethelgard video", href: "/podcast#v003-aethelgard-living-vessel" },
      { label: "Home Door", href: "/podcast#v004-violet-echoes-landing" },
      { label: "City Soul", href: "/podcast#v005-city-soul" },
      { label: "Development Divergence", href: "/bible/divergence" },
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["podcast", "tenets", "truth", "codex-aurora", "#VioletEchoes"],
    status: "live",
  },
];

export function getEpisode(id: string) {
  return podcastEpisodes.find((e) => e.id === id);
}

/** Prefer explicit home door, then first live brief */
export function getHomeVideoOverview() {
  return (
    videoOverviews.find((v) => v.status === "live" && v.home) ??
    videoOverviews.find((v) => v.status === "live" && v.format === "brief") ??
    videoOverviews.find((v) => v.status === "live")
  );
}

export function getVideoOverview(id: string) {
  return videoOverviews.find((v) => v.id === id);
}
