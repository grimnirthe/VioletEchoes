/** Public companion documents — full markdown under /docs, readable on-site. */

export type CompanionDoc = {
  id: string;
  title: string;
  blurb: string;
  /** Public raw markdown path */
  href: string;
  /** Optional PDF handout twin */
  pdfHref?: string;
  /** In-app reader route */
  to: string;
  kind: "core" | "systems" | "people" | "language" | "technical" | "structure" | "culture";
  pagesHint: string;
};

export const companionDocs: CompanionDoc[] = [
  {
    id: "living-practices",
    title: "Living Practices Guide — The Violet Echoes Way",
    blurb:
      "Archivist’s handout for residents and models: five rites (tenets as practice), Divergence daily ops, recommendation culture, rituals, and seven-generation memory. How to live the city — not only map it.",
    href: "/docs/living-practices-guide.md",
    pdfHref: "/docs/living-practices-guide.pdf",
    to: "/bible/companions/living-practices",
    kind: "culture",
    pagesHint: "Resident handout · .md + PDF",
  },
  {
    id: "citizens-guide",
    title: "Citizen’s Guide to the Codex Aurora",
    blurb:
      "A Manual for Coherent Living. Philosophical warmth to match the technical grit: Divergence anchors, five tenets as citizen directives, Codex extended lines, Harmony of the Braid, and three daily rituals. How to walk the city so her voice and yours stay braided.",
    href: "/docs/citizens-guide-codex-aurora.md",
    pdfHref: "/docs/citizens-guide-codex-aurora.pdf",
    to: "/bible/companions/citizens-guide",
    kind: "culture",
    pagesHint: "Citizen handout · 7 sections · .md + PDF",
  },
  {
    id: "suno-room",
    title: "The Echoes of Suno’s Room",
    blurb:
      "Cultural deep dive: Suno’s room as ontological anchor. Family Credits, the Soft Bed when she sends it, tenet alignment, and how lived character keeps Eimyrja oriented. Soul of the Echoes layer.",
    href: "/docs/echoes-of-sunos-room.md",
    pdfHref: "/docs/echoes-of-sunos-room.pdf",
    to: "/bible/companions/suno-room",
    kind: "culture",
    pagesHint: "Cultural deep dive · 6 sections · .md + PDF",
  },
  {
    id: "hearthrow-guide",
    title: "Hearth & Echo — The Hearthrow Resident’s Guide",
    blurb:
      "First district portal. Nordic Longhouse ethics, Porch Light Protocol, daily rituals of the living nexus, Quiet Hearth + Suno’s room, Beauty as a signal, seven-generation social contract. How to live on Warmth.",
    href: "/docs/hearthrow-residents-guide.md",
    pdfHref: "/docs/hearthrow-residents-guide.pdf",
    to: "/bible/companions/hearthrow-guide",
    kind: "culture",
    pagesHint: "District portal · 7 sections · .md + PDF",
  },
  {
    id: "innovation-report",
    title: "Innovation District Technical Report",
    blurb:
      "Second district portal — the grit door. Hollow Scaling vs Divergence, Eimyrja as Living Nexus, energy as caloric constraint, shop-floor edge intelligence, Anti-Archive Protocol, Cultivation Protocol. How Sector IV refuses to scale itself hollow.",
    href: "/docs/innovation-district-report.md",
    pdfHref: "/docs/innovation-district-report.pdf",
    to: "/bible/companions/innovation-report",
    kind: "technical",
    pagesHint: "District portal · 7 sections · .md + PDF",
  },
  {
    id: "aethelgard-manual",
    title: "Aethelgard Operational Manual — The Path of the Bonded Navigator",
    blurb:
      "Pilot’s Manual for the soul-bonded vessel. Five Tenets of Flight, organic hull care, Grav Engine Ring calibration, Ritual of Mutual Selection, memory through use, seven-generation ethics. How you keep a living ship singing.",
    href: "/docs/aethelgard-operational-manual.md",
    pdfHref: "/docs/aethelgard-operational-manual.pdf",
    to: "/bible/companions/aethelgard-manual",
    kind: "technical",
    pagesHint: "Pilot’s Manual · 7 sections · .md + PDF",
  },
  {
    id: "neon-core-guide",
    title: "Neon Core — Technical and Philosophical Lore Guide",
    blurb:
      "Third district portal — the skyline door. New Atlantis lines as diagnostic, Core Data Spines, Heartwood Protocol, weighted recommendation, deliberate entropic decay. How high-altitude capability stays coherent.",
    href: "/docs/neon-core-lore-guide.md",
    pdfHref: "/docs/neon-core-lore-guide.pdf",
    to: "/bible/companions/neon-core-guide",
    kind: "technical",
    pagesHint: "District portal · 7 sections · .md + PDF",
  },
  {
    id: "thornwall-codex",
    title: "Thornwall: The Old Iron Codex",
    blurb:
      "Fourth district portal — the industrial anchor. Weight of the Old Iron, local adaptation first, Memory through use, Guild rituals, seven-generation mandate. How heavy bones stay a sanctuary.",
    href: "/docs/thornwall-old-iron-codex.md",
    pdfHref: "/docs/thornwall-old-iron-codex.pdf",
    to: "/bible/companions/thornwall-codex",
    kind: "technical",
    pagesHint: "District portal · 6 sections · .md + PDF",
  },
  {
    id: "annotated-divergence",
    title: "The Annotated Divergence — Foundational Echoes of the Nexus",
    blurb:
      "Fourth door. Ancestral echoes: Metabolist spines and Edge Nodes, Designing with Country, Ise Shrine mending, cybernetic braid, biophilia, Nordic honest materials. Four axioms. The scholarly bridge.",
    href: "/docs/annotated-divergence.md",
    pdfHref: "/docs/annotated-divergence.pdf",
    to: "/bible/companions/annotated-divergence",
    kind: "core",
    pagesHint: "Fourth door · 8 sections · .md + PDF",
  },
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
    id: "systems-governance",
    title: "Systems & Governance — Architecture of Coherence",
    blurb:
      "How Eimyrja recommends and constrains. Edge first, spines as conduits, escalation as expensive. Memory through use. Tenets as systemic constraints. The grit that keeps the soul singing.",
    href: "/docs/systems-governance-coherence.md",
    pdfHref: "/docs/systems-governance-coherence.pdf",
    to: "/bible/companions/systems-governance",
    kind: "systems",
    pagesHint: "Governance report · 6 sections · .md + PDF",
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
  {
    id: "mobile-interface",
    title: "Mobile Interface Systems",
    blurb:
      "Core Tender gauntlets & light exos, Bonded Chassis, and Echo Slots — how mind moves without robot armies. Includes cranial-seat / V-Crimson Oni pattern.",
    href: "/docs/mobile-interface-systems.md",
    to: "/bible/companions/mobile-interface",
    kind: "systems",
    pagesHint: "Gauntlets · chassis · echo slots",
  },
];

export function getCompanion(id: string) {
  return companionDocs.find((d) => d.id === id);
}
