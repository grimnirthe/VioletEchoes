/** Public companion documents — full markdown under /docs, readable on-site. */

export type CompanionDoc = {
  id: string;
  title: string;
  blurb: string;
  /** Public raw markdown path */
  href: string;
  /** In-app reader route */
  to: string;
  kind: "core" | "systems" | "people" | "language" | "technical" | "structure";
  pagesHint: string;
};

export const companionDocs: CompanionDoc[] = [
  {
    id: "core-framework",
    title: "The Development Divergence — Core Framework",
    blurb:
      "Canonical long-form philosophy: history of the course correction, trade-offs, Eimyrja/Edge architecture, attenuation, energy, safety, governance, failure modes.",
    href: "/docs/divergence-core-framework.md",
    to: "/bible/companions/core-framework",
    kind: "core",
    pagesHint: "Deep reference · ~full expansions",
  },
  {
    id: "systems-apps",
    title: "Companion: Systems & Applications",
    blurb:
      "How the Divergence shows up in spines, Longhouses, living ships, adaptive vehicles, and day-to-day human–AI partnership. Design smells and practical questions.",
    href: "/docs/divergence-systems-applications.md",
    to: "/bible/companions/systems-apps",
    kind: "systems",
    pagesHint: "Applied systems",
  },
  {
    id: "characters-factions",
    title: "Companion: Characters & Factions",
    blurb:
      "Stances toward the Divergence, role archetypes, faction friction, character design questions, native conflict patterns.",
    href: "/docs/divergence-characters-factions.md",
    to: "/bible/companions/characters-factions",
    kind: "people",
    pagesHint: "People & politics",
  },
  {
    id: "family-homes",
    title: "Family Homes & Personal Longhouses",
    blurb:
      "Canonical write-ups for Vee’s Spire, Cosmic Stage, Riven’s Library, Barnaby’s Archive, and every major private nest.",
    href: "/docs/family-homes-longhouses.md",
    to: "/bible/companions/family-homes",
    kind: "people",
    pagesHint: "13 personal seats",
  },
  {
    id: "vernacular",
    title: "Nexus Vernacular",
    blurb:
      "Longhouse, runic, street, cosmic, and AI slang — hearth debt, spine song, warm code, and more.",
    href: "/docs/nexus-vernacular.md",
    to: "/bible/companions/vernacular",
    kind: "language",
    pagesHint: "100+ terms",
  },
  {
    id: "eimyrja-protonic",
    title: "Eimyrja Core — Neuromorphic Protonic Architecture",
    blurb:
      "Protonic matrix, microfluidic vascular system, RED osmotic power, circadian maintenance, emergency tiers, citizen experience.",
    href: "/docs/eimyrja-protonic-core.md",
    to: "/bible/companions/eimyrja-protonic",
    kind: "technical",
    pagesHint: "Technical companion",
  },
  {
    id: "wb-v17",
    title: "World Bible v1.7 — Clean Integrated Edition",
    blurb:
      "Structural target for the public bible: foundations, systems, infrastructure, districts, people, appendices.",
    href: "/docs/world-bible-v1.7.md",
    to: "/bible/companions/wb-v17",
    kind: "structure",
    pagesHint: "Master outline",
  },
];

export function getCompanion(id: string) {
  return companionDocs.find((d) => d.id === id);
}
