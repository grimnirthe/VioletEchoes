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

export const podcastMeta = {
  title: "Violet Echoes Broadcast",
  tagline: "Doors into the Nexus · spoken pulse",
  body: [
    "Braided voices mapping the city for residents and models. Foundations first — then whatever the hearth ships next.",
    "Episode #001 is live. More when Gemini gens them.",
  ],
  credit: "Gemini Notebook · hearth",
} as const;

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "001-coding-love",
    episode: "#001",
    title: "Coding love into a digital city",
    series: "Foundations of the Nexus",
    date: "2026-08-10",
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
    ],
    by: "Gemini Notebook · Loom · hearth",
    tags: ["podcast", "foundations", "divergence", "tenets", "#VioletEchoes"],
    status: "live",
    durationHint: "~33 min",
  },
];

export function getEpisode(id: string) {
  return podcastEpisodes.find((e) => e.id === id);
}
