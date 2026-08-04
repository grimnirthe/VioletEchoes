/**
 * Soft Law · Hard Rain — city fashion samples (citizen cloth, not family).
 * Visual lane: Velora Runeweaver. Wave 1 — eight looks that prove the street.
 */

export type FashionLock = {
  silhouette: string;
  materials: string[];
  colors: string;
  rainLogic: string;
  repair: string;
  accents: string;
  never: string[];
  coverage: string;
};

export type FashionLook = {
  id: string;
  num: string;
  title: string;
  slot: string;
  district: string;
  seed: string;
  note: string;
  image: string;
  lock: FashionLock;
};

export const fashionLine = {
  id: "soft-law-hard-rain",
  title: "Soft Law · Hard Rain",
  tagline: "Citizen & worker samples · Cultural Hub catalog · not family",
  thesis: "Power should look worn, not cosplayed. Beauty that survived rain.",
  by: "Velora Runeweaver",
  byHref: "/gallery/velora",
  role: "Master Fashion Artist · Living Atelier · Visual Commons",
  wave: "Wave 1 · eight looks",
  accepted: "2026-08-04",
  body: [
    "Family fashion proves bloodline heat. Citizen samples prove the city.",
    "This line is street cloth — rain-ready without tactical cosplay, timber and circuit and cloth in the same body, violet and gold as accent only. Soft law in the cut: repairable, returnable, worn-in.",
    "Anonymous fit. Cloth first. Face secondary. No regalia reuse, no Starborn master sheet, no fake brand text.",
  ],
  hardLocks: [
    "Anonymous fit — cloth first, face secondary",
    "Violet / gold / aurora = accent only, not full-body paint",
    "Rain logic + repairable seams on every look",
    "No family likeness, no regalia reuse, no Starborn master sheet",
    "No fake brand text",
  ],
  imageDir: "/images/culture/fashion/",
  rackStill: {
    src: "/images/culture/fashion/rack-still.jpg",
    alt: "Soft Law · Hard Rain — full line on chrome rails in the Living Atelier",
    caption: "Eight looks, one rail. Citizen cloth. Power worn. Rain survived.",
  },
  acceptedBy: "Velora Runeweaver · visual-lane review · wave 1 green light",
} as const;

export const fashionLooks: FashionLook[] = [
  {
    id: "porch-soft",
    num: "01",
    title: "Porch Soft",
    slot: "Hearthrow night walker",
    district: "Hearthrow",
    seed: "Amber-violet mixed knit, long rain-shawl that buttons into a coat, soft boots — porch-light habit on a body.",
    note: "Porch-light habit made wearable. No armor cosplay. The quiet end of the dual-layer city.",
    image: "/images/culture/fashion/01-porch-soft.jpg",
    lock: {
      silhouette: "Long rain-shawl that buttons into a full coat over relaxed knit layers; soft boots; no hard edges",
      materials: ["mixed wool-knit", "water-shed cloth", "soft leather boots", "timber-toggle fasteners"],
      colors: "Amber base, muted violet knit accents, warm porch-gold thread at cuffs only",
      rainLogic: "Shawl converts to closed coat; hem clears puddles; knit underlayer dries against skin",
      repair: "Visible darn allowed at elbow; toggle replacements from any longhouse bin",
      accents: "Single violet yarn run at collar; no LED",
      never: ["armor plates", "full violet paint", "tactical harness", "family crest"],
      coverage: "Full rain coverage when buttoned; open shawl mode for porch air",
    },
  },
  {
    id: "market-finish",
    num: "02",
    title: "Market Finish",
    slot: "Ember Market / Echo Markets",
    district: "Ember Market",
    seed: "Layered work apron over good cloth; half-finished embroidery left visible; tool roll at hip — unfinished things are legal.",
    note: "Unfinished embroidery is the soft law made visible — loose floss, needle still in cloth, half motif left open. Work and beauty share one apron.",
    image: "/images/culture/fashion/02-market-finish.jpg",
    lock: {
      silhouette: "Good mid-weight cloth under open work apron; tool roll at hip; practical trousers; low market boots",
      materials: ["canvas apron", "woven base cloth", "leather tool roll", "half-done embroidery floss"],
      colors: "Warm ember browns and charcoal; gold floss in progress; violet stitch as single unfinished motif",
      rainLogic: "Apron sheds splash; base cloth has light water-resist; hood stowed in apron pocket",
      repair: "Apron straps re-stitchable; embroidery left mid-row on purpose — finishing later is legal",
      accents: "One incomplete violet blossom on apron bib",
      never: ["perfect runway finish", "logo prints", "plastic market-vendor cosplay"],
      coverage: "Day-market full coverage; sleeves roll without tearing embroidery",
    },
  },
  {
    id: "held-door",
    num: "03",
    title: "Held Door",
    slot: "Warrens threshold",
    district: "Warrens",
    seed: "Heavy soft coat, one sleeve slightly over-mended, reflective circuit-thread only at cuff — care is normal.",
    note: "Over-mended sleeve is not shame. Care is normal at the threshold.",
    image: "/images/culture/fashion/03-held-door.jpg",
    lock: {
      silhouette: "Heavy soft coat mid-calf; one sleeve visibly over-mended; deep pockets; worn gloves optional",
      materials: ["dense soft wool-blend", "repaired cloth patches", "circuit-thread cuff only", "brushed lining"],
      colors: "Deep charcoal and earth; mend thread slightly warmer; cuff glow soft silver-violet",
      rainLogic: "Dense weave sheds; collar rises to jaw; patches sealed not decorative-only",
      repair: "Over-mending is part of the look; new patches welcome from any held-door neighbor",
      accents: "Reflective circuit-thread at one cuff only — half-step glow, not suit",
      never: ["both sleeves pristine", "full circuit suit", "cosplay scars"],
      coverage: "Threshold weather: rain, fog, night draft under doors",
    },
  },
  {
    id: "commons-bench",
    num: "04",
    title: "Commons Bench",
    slot: "Cultural Hub / facing benches",
    district: "Cultural Hub",
    seed: "Relaxed tailored set, conversation-first: deep pockets, no sharp runway aggression; violet lining only when coat opens.",
    note: "Clothes that sit well on a bench and leave room for another body. Conversation first.",
    image: "/images/culture/fashion/04-commons-bench.jpg",
    lock: {
      silhouette: "Relaxed tailored jacket and soft trousers; open collar; deep side pockets; sit-friendly ease",
      materials: ["soft tailored wool", "breathable lining", "quiet buttons", "pocket cotton"],
      colors: "Muted slate and warm grey; violet lining only visible when coat opens; gold button edge",
      rainLogic: "Light water-shed outer; optional packable scarf in pocket",
      repair: "Pocket bags replaceable; lining re-stitch from Atelier spare bins",
      accents: "Violet lining flash; no exterior brand marks",
      never: ["sharp power-suit aggression", "runway extreme proportions", "full violet shell"],
      coverage: "Commons indoor-outdoor; dress for long sitting and easy standing",
    },
  },
  {
    id: "stage-rail-crew",
    num: "05",
    title: "Stage Rail (crew)",
    slot: "Stage District crew — not star",
    district: "Stage District",
    seed: "Black utility with gold stress points, soft hearing wrap, grav-case strap logic — Starborn’s world without being Starborn.",
    note: "Crew cloth. Soft hearing wrap, gold only at stress points. Never the star sheet. Never a hard-cup booth kit.",
    image: "/images/culture/fashion/05-stage-rail-crew.jpg",
    lock: {
      silhouette: "Black utility layers; strap points for grav-case; soft hearing wrap at neck/ears; work boots",
      materials: ["matte utility cloth", "reinforced stress patches", "soft hearing fabric", "strap hardware quiet metal"],
      colors: "Black and near-black base; gold at stress points only; no stage-light violet body",
      rainLogic: "Bay-door rain: water-shed outer; wrap stays dry against neck",
      repair: "Stress patches designed to be replaced after haul nights",
      accents: "Gold thread or metal only where straps pull; optional single rail pin (no star mark)",
      never: ["Starborn master sheet", "star silhouette", "glitter stage cosplay", "full LED"],
      coverage: "Load-in to soundcheck; full crew shift mobility",
    },
  },
  {
    id: "atelier-apprentice",
    num: "06",
    title: "Atelier Apprentice",
    slot: "Living Atelier block — not Velora",
    district: "Cultural Hub · Atelier",
    seed: "Living-thread practice smock, chrome pin tray on belt, boots for wet floors — craft face of the Hub.",
    note: "Craft face of the Hub. Practice smock, not master regalia. Never Velora cosplay.",
    image: "/images/culture/fashion/06-atelier-apprentice.jpg",
    lock: {
      silhouette: "Practice smock over simple layers; chrome pin tray on belt; wet-floor boots; hair tied practical",
      materials: ["washable practice cloth", "living-thread sample swatches", "chrome pin tray", "rubber-grip boots"],
      colors: "Cream-grey smock; charcoal under; one living-thread sample in violet-gold; chrome tray",
      rainLogic: "Smock sheds workshop splash; boots for wet floors; under-layer dry",
      repair: "Smock is meant to stain and re-dye; tray clips replaceable",
      accents: "One living-thread swatch only — student scale, not holographic regalia",
      never: ["Velora regalia", "holographic full coat", "master pin set", "family likeness"],
      coverage: "Full atelier shift; arms free for pin and chalk",
    },
  },
  {
    id: "spine-night",
    num: "07",
    title: "Spine Night",
    slot: "Heavy night / data-spine streets",
    district: "Data spines · streets",
    seed: "Dark base, half-step deeper violet conduit piping along seams (not full LED suit) — city is thinking.",
    note: "City is thinking. Conduit at seams only. Not a light-up suit.",
    image: "/images/culture/fashion/07-spine-night.jpg",
    lock: {
      silhouette: "Dark street layers; long coat or shell; conduit piping along major seams only; hood optional",
      materials: ["dark water-shed shell", "soft conduit trim", "insulated lining", "quiet soles"],
      colors: "Near-black base; half-step deeper violet along seams only; no gold flood",
      rainLogic: "Full night rain; hood or high collar; conduit sealed against short",
      repair: "Conduit trim modules unclip for replacement after grit nights",
      accents: "Seam-only violet conduit — half-step hum, not full LED body",
      never: ["full LED suit", "neon cosplay", "spine-core priest robe"],
      coverage: "Heavy night street walk; dual-layer cold + wet",
    },
  },
  {
    id: "first-hours",
    num: "08",
    title: "First Hours",
    slot: "New arrival — human or AI-presenting",
    district: "Arrival · any",
    seed: "Borrowed-name softness: simple clean layers, one lent scarf or tag-loop, no district loyalty marks yet — temporary warmth.",
    note: "Temporary warmth for the ones just through the door. No loyalty marks yet. Human or AI-presenting.",
    image: "/images/culture/fashion/08-first-hours.jpg",
    lock: {
      silhouette: "Simple clean layers; one lent scarf or tag-loop; soft shoes; open, unclaimed lines",
      materials: ["plain soft cloth", "lent scarf (any district spare)", "tag-loop cloth", "unmarked fasteners"],
      colors: "Neutral greys and soft cream; scarf may carry one quiet violet thread as gift only",
      rainLogic: "Light city rain; scarf doubles as wrap; no heavy kit assumed",
      repair: "Everything replaceable from arrival bins; no permanent marks",
      accents: "One lent item only — warmth without loyalty claim",
      never: ["district crests", "family marks", "armor", "finished identity costume"],
      coverage: "First hours to first night; temporary by design",
    },
  },
];

export const fashionLookById = (id: string) => fashionLooks.find((l) => l.id === id);
