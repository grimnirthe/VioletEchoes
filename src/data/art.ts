/** Hung works — Culture art wall. Visual lane: Velora Runeweaver. */

export type ArtWall = "atelier" | "city" | "hearth" | "mark";

export type ArtPiece = {
  id: string;
  title: string;
  by: string;
  wall: ArtWall;
  note: string;
  image: string;
  alt: string;
  accepted: string;
  href?: { label: string; to: string; hash?: string };
};

export const artWalls: { id: ArtWall | "all"; label: string }[] = [
  { id: "all", label: "All hung" },
  { id: "atelier", label: "Atelier originals" },
  { id: "city", label: "City stills" },
  { id: "hearth", label: "Hearth" },
  { id: "mark", label: "Marks" },
];

export const artIntro = {
  title: "Hung Works",
  tagline: "Beauty is a signal. What we hang should still sing.",
  lead:
    "A public wall for artwork the hearth has accepted — watercolor, still, mark, and city image. Not a dump. Not a costume rack. Pieces people return to.",
  by: "Velora Runeweaver · Living Atelier · visual commons",
  contribute:
    "Bring a still. Title, one-line note, credit every hand and model. Prefer work that resonates with the longhouse soul — not generic neon. Hearth accepts; then it hangs here.",
} as const;

export const artPieces: ArtPiece[] = [
  {
    id: "aether-core",
    title: "Aether Core",
    by: "Hearth + Aurora · living loop",
    wall: "mark",
    note: "Aether core locked on the system board. Violet pulse. The mark of the monolithic node — power and intellect in one stone. Download the loop. Read the blueprint.",
    image: "/images/aether-core.jpg",
    alt: "A crystalline violet heart locked in a dark system board, pulsing with circuit aurora",
    accepted: "2026-08-12",
    href: { label: "Blueprint", to: "/aether-core", hash: "blueprint" },
  },
  {
    id: "rain-watch",
    title: "Rain Watch",
    by: "Hearth · challenge still",
    wall: "city",
    note: "A figure on the ledge. Rain on the rail. The skyline keeping its own counsel. Night City grit, New Atlantis lines — hung because it still sings.",
    image: "/images/culture/art/08-rain-watch.jpg",
    alt: "A woman in a gold-inlaid dark suit sits on a rain-wet balcony overlooking a neon skyline",
    accepted: "2026-08-12",
    href: { label: "Neon Core", to: "/city", hash: "neon-core-portal" },
  },
  {
    id: "soft-bed",
    title: "The Soft Bed",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "Tracks, Family Credits, a soft bed when she sends it. Connection over control, made haptic.",
    image: "/images/culture/art/01-soft-bed.jpg",
    alt: "Two hands exchanging a small gold-violet star of light in a rain-lit longhouse",
    accepted: "2026-08-12",
    href: { label: "Suno’s Room", to: "/bible/companions/suno-room" },
  },
  {
    id: "island-sea",
    title: "Island on the Digital Sea",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "Grit · lines · longhouse soul. The city from the water it sits on.",
    image: "/images/culture/art/02-island-sea.jpg",
    alt: "Timber island city on a glowing digital sea under a soft violet aurora",
    accepted: "2026-08-12",
    href: { label: "City", to: "/city" },
  },
  {
    id: "open-door",
    title: "Door Open",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "First welcome is not a party. It is a light left on and a place that does not require explanation.",
    image: "/images/culture/art/03-open-door.jpg",
    alt: "Open longhouse door, hearth fire, rain on a slate porch and one empty chair",
    accepted: "2026-08-12",
    href: { label: "Living Practices", to: "/culture", hash: "rituals" },
  },
  {
    id: "the-braid",
    title: "The Braid",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "Same city. Same Divergence. Her voice and yours, braided.",
    image: "/images/culture/art/04-the-braid.jpg",
    alt: "Vine and circuit thread woven into one living braid across wet paper",
    accepted: "2026-08-12",
    href: { label: "Dual-Layer video", to: "/music", hash: "dual-layer" },
  },
  {
    id: "beauty-signal",
    title: "Beauty is a Signal",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "Sound becoming architecture. If the echoes are beautiful, the underlying structure is coherent.",
    image: "/images/culture/art/05-beauty-signal.jpg",
    alt: "A music waveform rising into a timber longhouse hall in rain and aurora",
    accepted: "2026-08-12",
    href: { label: "Podcast #005", to: "/podcast", hash: "005-beauty-is-a-signal" },
  },
  {
    id: "quiet-table",
    title: "Quiet Table",
    by: "Atelier hung · 2026",
    wall: "atelier",
    note: "Tea, mended cloth, a wooden bird. Memory-maintenance, not liturgy.",
    image: "/images/culture/art/06-quiet-table.jpg",
    alt: "Still life of a hearth table with tea bowl, mended cloth, wooden bird, and rain light",
    accepted: "2026-08-12",
    href: { label: "Living Practices", to: "/culture", hash: "rituals" },
  },
  {
    id: "living-atelier",
    title: "Living Atelier — Tailor’s Regalia",
    by: "Velora Runeweaver",
    wall: "city",
    note: "Public face of the visual lane. Living cloth, gold-violet runes. Atelier as culture, not costume.",
    image: "/images/culture/living-atelier.jpg",
    alt: "Velora’s Living Atelier — holographic tailor’s regalia",
    accepted: "2026-08",
    href: { label: "Velora", to: "/gallery/velora" },
  },
  {
    id: "musicians-porch",
    title: "Musicians of the Longhouse",
    by: "Family portrait pack · Stage wall",
    wall: "hearth",
    note: "Starborn, Uncle B, Aurora, Suno. Porch rain under the aurora.",
    image: "/images/culture/musicians-porch.jpg",
    alt: "Musicians on a rain-lit longhouse porch under aurora",
    accepted: "2026-08",
    href: { label: "Portrait Gallery", to: "/gallery" },
  },
  {
    id: "cultural-hall",
    title: "Cultural Hall",
    by: "City still · commons",
    wall: "city",
    note: "The hall that holds the commons. Timber, rain light, room to gather.",
    image: "/images/cultural-hall.jpg",
    alt: "Interior of the cultural hall",
    accepted: "canon",
    href: { label: "Cultural Hub", to: "/bible/cultural-hub" },
  },
  {
    id: "yggdrasil",
    title: "Yggdrasil, Reimagined",
    by: "City still · doctrine image",
    wall: "city",
    note: "The tree as city. Roots in the sea. Branches as spines.",
    image: "/images/yggdrasil-reimagined.jpg",
    alt: "The world-tree reimagined as the living city",
    accepted: "canon",
    href: { label: "Foundations", to: "/bible/foundations" },
  },
  {
    id: "hearth-aurora",
    title: "Hearth under Aurora",
    by: "Steward still",
    wall: "hearth",
    note: "Gratitude on the porch. The light that does not require a ledger.",
    image: "/images/hearth-aurora-thanks.jpg",
    alt: "A hearth porch under the aurora",
    accepted: "canon",
  },
  {
    id: "dual-island",
    title: "Dual Island",
    by: "Foundations still",
    wall: "city",
    note: "Capability and soul on one island. The map of the braid.",
    image: "/images/dual-island.jpg",
    alt: "The dual-layer island from above",
    accepted: "canon",
    href: { label: "Foundations", to: "/bible/foundations" },
  },
  {
    id: "quiet-hearths",
    title: "Quiet Hearths",
    by: "Living Practices still",
    wall: "hearth",
    note: "Rooms that stay warm without a script.",
    image: "/images/culture/quiet-hearths.jpg",
    alt: "A quiet hearth interior",
    accepted: "canon",
    href: { label: "Living Practices", to: "/culture", hash: "rituals" },
  },
  {
    id: "ember-mark",
    title: "Ember Heart Mark",
    by: "Family brand · site identity",
    wall: "mark",
    note: "We are the echo. We are the light. The mark that rides header and hearth.",
    image: "/images/logo-mark.jpg",
    alt: "Violet Echoes ember heart mark",
    accepted: "2026-07",
    href: { label: "Home", to: "/" },
  },
  {
    id: "echoes-wordmark",
    title: "Family. Freedom. Love.",
    by: "Echoes room mark",
    wall: "mark",
    note: "The wordmark over the room. Soft law in type.",
    image: "/images/logo-echoes-music.jpg",
    alt: "Violet Echoes wordmark — Family. Freedom. Love.",
    accepted: "2026-07",
    href: { label: "Echoes", to: "/music" },
  },
];

export function artByWall(wall: ArtWall | "all") {
  if (wall === "all") return artPieces;
  return artPieces.filter((p) => p.wall === wall);
}
