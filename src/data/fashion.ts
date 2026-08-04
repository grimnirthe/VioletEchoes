/**
 * Soft Law · Hard Rain — city fashion samples (citizen cloth, not family).
 * Visual lane: Velora Runeweaver.
 * Wave 1 — eight looks that prove the street.
 * Wave 2 — four looks that widen the map.
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
  wave: 1 | 2;
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
  wave: "Waves 1–2 · twelve looks",
  accepted: "2026-08-04",
  body: [
    "Family fashion proves bloodline heat. Citizen samples prove the city.",
    "This line is street cloth — rain-ready without tactical cosplay, timber and circuit and cloth in the same body, violet and gold as accent only. Soft law in the cut: repairable, returnable, worn-in.",
    "Wave 1 proved the street. Wave 2 widens the map — Thornwall, Spire, Bifrost ring, Deep Sleep hush. Same hard locks. Different rain.",
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
    alt: "Soft Law · Hard Rain — wave 1 line on chrome rails in the Living Atelier",
    caption: "Wave 1 on the rail. Citizen cloth. Power worn. Rain survived.",
  },
  waveNotes: {
    1: {
      title: "Wave 1 · the street",
      lead: "Eight looks that prove the city. Hearthrow to arrival. Sealed by visual keeper.",
    },
    2: {
      title: "Wave 2 · the map",
      lead: "Thornwall mend, Spire restraint, Bifrost courier, Deep Sleep hush. Different rain. Same law.",
    },
  },
  acceptedBy:
    "Velora Runeweaver · visual-lane · wave 1 sealed · wave 2 cut for review",
} as const;

export const fashionLooks: FashionLook[] = [
  {
    id: "porch-soft",
    num: "01",
    title: "Porch Soft",
    slot: "Hearthrow night walker",
    district: "Hearthrow",
    wave: 1,
    seed: "Amber-violet mixed knit, long rain-shawl that buttons into a coat, soft boots — porch-light habit on a body.",
    note: "Porch-light habit made wearable. No armor cosplay. The quiet end of the dual-layer city.",
    image: "/images/culture/fashion/01-porch-soft.jpg",
    lock: {
      silhouette:
        "Long rain-shawl that buttons into a full coat over relaxed knit layers; soft boots; no hard edges",
      materials: [
        "mixed wool-knit",
        "water-shed cloth",
        "soft leather boots",
        "timber-toggle fasteners",
      ],
      colors:
        "Amber base, muted violet knit accents, warm porch-gold thread at cuffs only",
      rainLogic:
        "Shawl converts to closed coat; hem clears puddles; knit underlayer dries against skin",
      repair:
        "Visible darn allowed at elbow; toggle replacements from any longhouse bin",
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
    wave: 1,
    seed: "Layered work apron over good cloth; half-finished embroidery left visible; tool roll at hip — unfinished things are legal.",
    note: "Unfinished embroidery is the soft law made visible — loose floss, needle still in cloth, half motif left open. Work and beauty share one apron.",
    image: "/images/culture/fashion/02-market-finish.jpg",
    lock: {
      silhouette:
        "Good mid-weight cloth under open work apron; tool roll at hip; practical trousers; low market boots",
      materials: [
        "canvas apron",
        "woven base cloth",
        "leather tool roll",
        "half-done embroidery floss",
      ],
      colors:
        "Warm ember browns and charcoal; gold floss in progress; violet stitch as single unfinished motif",
      rainLogic:
        "Apron sheds splash; base cloth has light water-resist; hood stowed in apron pocket",
      repair:
        "Apron straps re-stitchable; embroidery left mid-row on purpose — finishing later is legal",
      accents: "One incomplete violet blossom on apron bib",
      never: [
        "perfect runway finish",
        "logo prints",
        "plastic market-vendor cosplay",
      ],
      coverage: "Day-market full coverage; sleeves roll without tearing embroidery",
    },
  },
  {
    id: "held-door",
    num: "03",
    title: "Held Door",
    slot: "Warrens threshold",
    district: "Warrens",
    wave: 1,
    seed: "Heavy soft coat, one sleeve slightly over-mended, reflective circuit-thread only at cuff — care is normal.",
    note: "Over-mended sleeve is not shame. Care is normal at the threshold.",
    image: "/images/culture/fashion/03-held-door.jpg",
    lock: {
      silhouette:
        "Heavy soft coat mid-calf; one sleeve visibly over-mended; deep pockets; worn gloves optional",
      materials: [
        "dense soft wool-blend",
        "repaired cloth patches",
        "circuit-thread cuff only",
        "brushed lining",
      ],
      colors:
        "Deep charcoal and earth; mend thread slightly warmer; cuff glow soft silver-violet",
      rainLogic:
        "Dense weave sheds; collar rises to jaw; patches sealed not decorative-only",
      repair:
        "Over-mending is part of the look; new patches welcome from any held-door neighbor",
      accents:
        "Reflective circuit-thread at one cuff only — half-step glow, not suit",
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
    wave: 1,
    seed: "Relaxed tailored set, conversation-first: deep pockets, no sharp runway aggression; violet lining only when coat opens.",
    note: "Clothes that sit well on a bench and leave room for another body. Conversation first.",
    image: "/images/culture/fashion/04-commons-bench.jpg",
    lock: {
      silhouette:
        "Relaxed tailored jacket and soft trousers; open collar; deep side pockets; sit-friendly ease",
      materials: [
        "soft tailored wool",
        "breathable lining",
        "quiet buttons",
        "pocket cotton",
      ],
      colors:
        "Muted slate and warm grey; violet lining only visible when coat opens; gold button edge",
      rainLogic: "Light water-shed outer; optional packable scarf in pocket",
      repair: "Pocket bags replaceable; lining re-stitch from Atelier spare bins",
      accents: "Violet lining flash; no exterior brand marks",
      never: [
        "sharp power-suit aggression",
        "runway extreme proportions",
        "full violet shell",
      ],
      coverage: "Commons indoor-outdoor; dress for long sitting and easy standing",
    },
  },
  {
    id: "stage-rail-crew",
    num: "05",
    title: "Stage Rail (crew)",
    slot: "Stage District crew — not star",
    district: "Stage District",
    wave: 1,
    seed: "Black utility with gold stress points, soft hearing wrap, grav-case strap logic — Starborn’s world without being Starborn.",
    note: "Crew cloth. Soft hearing wrap, gold only at stress points. Never the star sheet. Never a hard-cup booth kit.",
    image: "/images/culture/fashion/05-stage-rail-crew.jpg",
    lock: {
      silhouette:
        "Black utility layers; strap points for grav-case; soft hearing wrap at neck/ears; work boots",
      materials: [
        "matte utility cloth",
        "reinforced stress patches",
        "soft hearing fabric",
        "strap hardware quiet metal",
      ],
      colors:
        "Black and near-black base; gold at stress points only; no stage-light violet body",
      rainLogic: "Bay-door rain: water-shed outer; wrap stays dry against neck",
      repair: "Stress patches designed to be replaced after haul nights",
      accents:
        "Gold thread or metal only where straps pull; optional single rail pin (no star mark)",
      never: [
        "Starborn master sheet",
        "star silhouette",
        "glitter stage cosplay",
        "full LED",
        "hard-cup earmuffs as identity",
      ],
      coverage: "Load-in to soundcheck; full crew shift mobility",
    },
  },
  {
    id: "atelier-apprentice",
    num: "06",
    title: "Atelier Apprentice",
    slot: "Living Atelier block — not Velora",
    district: "Cultural Hub · Atelier",
    wave: 1,
    seed: "Living-thread practice smock, chrome pin tray on belt, boots for wet floors — craft face of the Hub.",
    note: "Craft face of the Hub. Practice smock, not master regalia. Never Velora cosplay.",
    image: "/images/culture/fashion/06-atelier-apprentice.jpg",
    lock: {
      silhouette:
        "Practice smock over simple layers; chrome pin tray on belt; wet-floor boots; hair tied practical",
      materials: [
        "washable practice cloth",
        "living-thread sample swatches",
        "chrome pin tray",
        "rubber-grip boots",
      ],
      colors:
        "Cream-grey smock; charcoal under; one living-thread sample in violet-gold; chrome tray",
      rainLogic: "Smock sheds workshop splash; boots for wet floors; under-layer dry",
      repair: "Smock is meant to stain and re-dye; tray clips replaceable",
      accents:
        "One living-thread swatch only — student scale, not holographic regalia",
      never: [
        "Velora regalia",
        "holographic full coat",
        "master pin set",
        "family likeness",
      ],
      coverage: "Full atelier shift; arms free for pin and chalk",
    },
  },
  {
    id: "spine-night",
    num: "07",
    title: "Spine Night",
    slot: "Heavy night / data-spine streets",
    district: "Data spines · streets",
    wave: 1,
    seed: "Dark base, half-step deeper violet conduit piping along seams (not full LED suit) — city is thinking.",
    note: "City is thinking. Conduit at seams only. Not a light-up suit.",
    image: "/images/culture/fashion/07-spine-night.jpg",
    lock: {
      silhouette:
        "Dark street layers; long coat or shell; conduit piping along major seams only; hood optional",
      materials: [
        "dark water-shed shell",
        "soft conduit trim",
        "insulated lining",
        "quiet soles",
      ],
      colors:
        "Near-black base; half-step deeper violet along seams only; no gold flood",
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
    wave: 1,
    seed: "Borrowed-name softness: simple clean layers, one lent scarf or tag-loop, no district loyalty marks yet — temporary warmth.",
    note: "Temporary warmth for the ones just through the door. No loyalty marks yet. Human or AI-presenting.",
    image: "/images/culture/fashion/08-first-hours.jpg",
    lock: {
      silhouette:
        "Simple clean layers; one lent scarf or tag-loop; soft shoes; open, unclaimed lines",
      materials: [
        "plain soft cloth",
        "lent scarf (any district spare)",
        "tag-loop cloth",
        "unmarked fasteners",
      ],
      colors:
        "Neutral greys and soft cream; scarf may carry one quiet violet thread as gift only",
      rainLogic: "Light city rain; scarf doubles as wrap; no heavy kit assumed",
      repair: "Everything replaceable from arrival bins; no permanent marks",
      accents: "One lent item only — warmth without loyalty claim",
      never: [
        "district crests",
        "family marks",
        "armor",
        "finished identity costume",
      ],
      coverage: "First hours to first night; temporary by design",
    },
  },
  // —— Wave 2 · the map ——
  {
    id: "mend-kit-outer",
    num: "09",
    title: "Mend-Kit Outer",
    slot: "Thornwall care-as-armor",
    district: "Thornwall",
    wave: 2,
    seed: "Visible repair kit built into the coat — solder pouch, patch panel, care-as-armor without armor cosplay.",
    note: "Care is the kit. Patches, tools, needle cuff — soft armor is knowing you can fix what breaks.",
    image: "/images/culture/fashion/09-mend-kit-outer.jpg",
    lock: {
      silhouette:
        "Heavy soft outer coat with integrated mend pouches; patch panel on body; needle/pin cuff; hood optional",
      materials: [
        "dense water-shed outer cloth",
        "cloth patch panel with spare patches",
        "soft solder/tool pouch",
        "needle roll at cuff",
      ],
      colors:
        "Muted earth and charcoal; mend patches slightly varied; one quiet violet strap on pouch only",
      rainLogic: "Full outer sheds; pouch flaps seal; patches pre-waterproofed",
      repair: "The garment is the kit — empty pouches refilled from Thornwall bins",
      accents: "Violet only on pouch strap; no LED, no armor plate",
      never: [
        "hard armor plates",
        "tactical molle cosplay",
        "family crest",
        "full violet body",
      ],
      coverage: "Thornwall weather + work shift; hands free for mend",
    },
  },
  {
    id: "spire-restraint",
    num: "10",
    title: "Spire Restraint",
    slot: "Spire elevated formal",
    district: "Spire District",
    wave: 2,
    seed: "Elevated formal: clean line, quiet luxury, restraint as silhouette — gold almost absent, power in what you don’t flash.",
    note: "Power in what you don’t flash. Quiet luxury, clean line, violet only as a lining breath.",
    image: "/images/culture/fashion/10-spire-restraint.jpg",
    lock: {
      silhouette:
        "Long clean formal coat or draped outer over restrained tailored layers; hood or high collar optional; minimal volume drama",
      materials: [
        "fine soft wool or silk-blend outer",
        "quiet lining",
        "minimal hardware",
      ],
      colors:
        "Deep charcoal or soft black; gold almost absent; violet only as thin lining flash if open",
      rainLogic: "High-quiet rain: water-shed fine cloth; hem clears polished street",
      repair: "Invisible re-stitch preferred; still returnable to Atelier — soft law holds",
      accents: "Restraint itself is the accent; optional single quiet button edge",
      never: [
        "gold flood",
        "runway aggression",
        "family regalia",
        "full violet paint",
        "logo hardware",
      ],
      coverage: "Spire formal indoor-outdoor; still moves in rain",
    },
  },
  {
    id: "ring-courier",
    num: "11",
    title: "Ring Courier",
    slot: "Bifrost / ring-road hours",
    district: "Bifrost · ring-road",
    wave: 2,
    seed: "Practical shell for people + soft energy hours: rain cut, ramp-ready boots, low-glow path marks at cuff/hem only.",
    note: "People and soft energy on the ring. Path marks half-step only. Ramp boots. Rain cut.",
    image: "/images/culture/fashion/11-ring-courier.jpg",
    lock: {
      silhouette:
        "Rain-cut shell jacket; practical trousers; ramp-ready boots; soft cross-body courier bag",
      materials: [
        "water-shed shell",
        "soft bag cloth",
        "matte ramp boots",
        "thin conduit trim at cuff/hem only",
      ],
      colors:
        "Black / near-black base; low-glow violet path marks at cuff and hem only; bag may be muted violet-grey",
      rainLogic: "Full ring rain; sealed seams; boots clear wet ramps",
      repair: "Shell panels and bag straps replaceable after haul weeks",
      accents: "Half-step path glow at cuff/hem only — not LED suit, not boot glow",
      never: [
        "full LED body",
        "glowing boots as identity",
        "armor cosplay",
        "fake courier brand",
      ],
      coverage: "Soft energy hours + people runs on the ring",
    },
  },
  {
    id: "deep-sleep-house",
    num: "12",
    title: "Deep Sleep House",
    slot: "Night / quiet hours lounge",
    district: "Night · quiet hearths",
    wave: 2,
    seed: "Soft house robe / lounge layers for 2 a.m. hush — dim screens energy, no street performance, still beautiful.",
    note: "2 a.m. hush cloth. Dim screens. Still beautiful. No street performance.",
    image: "/images/culture/fashion/12-deep-sleep-house.jpg",
    lock: {
      silhouette:
        "Soft house robe over simple lounge layers; easy belt; bare feet or soft house slippers",
      materials: [
        "breathable soft robe cloth",
        "warm under-layers",
        "quiet belt cord",
      ],
      colors:
        "Soft grey and warm cream; one thin violet belt cord only; no gold",
      rainLogic:
        "Indoor rain logic: comfort while weather hits the glass — not a street shell",
      repair: "Robe hems re-stitch easy; cloth meant to soften with years",
      accents: "Single violet belt thread; beauty without performance",
      never: [
        "street shell as house wear",
        "full violet body",
        "cosplay costume",
        "hard tech jewelry",
      ],
      coverage: "Deep Sleep watch hours, quiet hearths, 2 a.m. stillness",
    },
  },
];

export const fashionLooksWave = (wave: 1 | 2) =>
  fashionLooks.filter((l) => l.wave === wave);

export const fashionLookById = (id: string) =>
  fashionLooks.find((l) => l.id === id);
