/** Interactive island map — pins on neon pie art; legend + 3D hero are separate. */

export const cityMapArt = {
  interactive: {
    src: "/images/map/city-interactive.jpg",
    alt: "Violet Echoes interactive top-down island map — districts as color zones around Eimyrja",
  },
  legend: {
    src: "/images/map/city-legend.jpg",
    alt: "Violet Echoes labeled atlas map — district names for reference",
  },
  hero3d: {
    src: "/images/map/city-hero-3d.jpg",
    alt: "Violet Echoes 3D island hero map with district labels around Eimyrja",
  },
  hero3dClean: {
    src: "/images/map/city-hero-3d-clean.jpg",
    alt: "Violet Echoes 3D island map, text-free — rain, radial districts, living ship at harbor",
  },
} as const;

export type MapPin = {
  id: string;
  label: string;
  /** percent from left of map image */
  x: number;
  /** percent from top of map image */
  y: number;
  /** bible / systems slug */
  slug: string;
  blurb: string;
  layer: "district" | "system" | "water";
};

/**
 * Pin positions tuned to the neon pie map (no text).
 * Percent coords — tweak after visual QA without regen art.
 */
export const mapPins: MapPin[] = [
  {
    id: "eimyrja",
    label: "Eimyrja",
    x: 50,
    y: 46,
    slug: "eimyrja",
    blurb: "Heartwood core — pattern integration, not an overlord.",
    layer: "system",
  },
  {
    id: "veilreach",
    label: "Veilreach",
    x: 50,
    y: 10,
    slug: "veilreach",
    blurb: "Outer rim — boundary, watchful edge.",
    layer: "district",
  },
  {
    id: "high-quiet",
    label: "High Quiet",
    x: 42,
    y: 24,
    slug: "high-quiet",
    blurb: "Spire District — elevated seats, restraint as architecture.",
    layer: "district",
  },
  {
    id: "green-spaces",
    label: "Green Spaces",
    x: 28,
    y: 36,
    slug: "green-spaces",
    blurb: "The lungs — ecological heatsink, cycles over clocks.",
    layer: "district",
  },
  {
    id: "innovation",
    label: "Innovation",
    x: 64,
    y: 28,
    slug: "innovation-district",
    blurb: "The Crucible — coherence over peak capability. Kill-switches. Memory through use.",
    layer: "district",
  },
  {
    id: "thornwall",
    label: "Thornwall",
    x: 80,
    y: 42,
    slug: "thornwall",
    blurb: "Old Iron — industrial maintenance heart.",
    layer: "district",
  },
  {
    id: "cultural-hub",
    label: "Cultural Hub",
    x: 64,
    y: 46,
    slug: "cultural-hub",
    blurb: "Stage District · Memory Commons — culture kept warm.",
    layer: "district",
  },
  {
    id: "neon-core",
    label: "Neon Core",
    x: 58,
    y: 60,
    slug: "neon-core",
    blurb: "Commercial and media blaze — high signal streets.",
    layer: "district",
  },
  {
    id: "ember-market",
    label: "Ember Market",
    x: 80,
    y: 68,
    slug: "ember-market",
    blurb: "Marketheart — trade, fix, connect.",
    layer: "district",
  },
  {
    id: "harborward",
    label: "Harborward",
    x: 50,
    y: 78,
    slug: "harborward",
    blurb: "Working harbor — steady when late.",
    layer: "district",
  },
  {
    id: "living-ships",
    label: "Living Ships",
    x: 48,
    y: 90,
    slug: "living-ships",
    blurb: "Docking ring — cumulative bonds with captains and crews.",
    layer: "water",
  },
  {
    id: "public-services",
    label: "Services Grid",
    x: 20,
    y: 62,
    slug: "public-services-grid",
    blurb: "Utilities, transit, ops — backbone without glamour.",
    layer: "district",
  },
  {
    id: "warrens",
    label: "The Warrens",
    x: 38,
    y: 68,
    slug: "the-warrens",
    blurb: "Residential AI-integrated living at scale.",
    layer: "district",
  },
  {
    id: "hearthrow",
    label: "Hearthrow",
    x: 34,
    y: 54,
    slug: "hearthrow",
    blurb: "Edge of warmth — porches, tea, ordinary days.",
    layer: "district",
  },
];

export const cityMapIntro = {
  title: "Island map",
  tagline: "Tap a pin. Walk a district.",
  body: "Interactive top-down of Violet Echoes. Pins open bible entries. Legend and 3D hero keep the printed / cinematic views; this one stays clean for clicking.",
} as const;
