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
  /** Lookbook still — omit while lock is hung and stills are in generation */
  image?: string;
  wave: 1 | 2 | 3 | 4 | 5;
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
  wave: "Waves 1–5 · twenty-one looks",
  accepted: "2026-08-04",
  body: [
    "Family fashion proves bloodline heat. Citizen samples prove the city.",
    "This line is street cloth — rain-ready without tactical cosplay, timber and circuit and cloth in the same body, violet and gold as accent only. Soft law in the cut: repairable, returnable, worn-in.",
    "Wave 1 proved the street. Wave 2 widened the map. Wave 3 fills gaps — Harborward oilcloth, High Quiet hush, Veilreach unfinished path, Grid Tender civic care.",
    "Wave 4 is the risk chapter: Innovation warmth, Neon Core rain-survived heat, Green Spaces living systems, and Assembly Soft — higher-up council cloth without corporate cosplay.",
    "Wave 5 opens the archetype: Shield Maiden — a door that learned to walk. Citizen cloth, not Vesper armor reuse, not museum Viking.",
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
    3: {
      title: "Wave 3 · the gaps",
      lead: "Harborward oilcloth, High Quiet hush, Veilreach unfinished path, Grid Tender civic care. Map chapter, not a dump.",
    },
    4: {
      title: "Wave 4 · the risk chapter",
      lead: "Innovation lab warmth, Neon Core without Night City cosplay, Green Field systems care, Assembly Soft higher-up cloth. Same law. Harder art direction.",
    },
    5: {
      title: "Wave 5 · the archetype",
      lead: "Shield Maiden — power worn as care. Lookbook hung (back dock). Not Vesper’s armor sheet. Not LARP.",
    },
  },
  acceptedBy:
    "Velora Runeweaver · visual-lane · waves 1–4 sealed · wave 5 Shield Maiden lookbook hung",
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
  // —— Wave 3 · the gaps ——
  {
    id: "harborward-oilcloth",
    num: "13",
    title: "Harborward Oilcloth",
    slot: "Harbor / living-ship edge",
    district: "Harborward",
    wave: 3,
    seed: "Wet work, salt-rain, rope-smart cloth — oilcloth outer held from wave 2 until the street could digest.",
    note: "Salt-rain truth. Rope-smart pockets. Oilcloth that worked before it looked good.",
    image: "/images/culture/fashion/13-harborward-oilcloth.jpg",
    lock: {
      silhouette:
        "Heavy oilcloth outer with deep work pockets; hood; room for rope and wet tools; no hard armor",
      materials: [
        "oilcloth / waterproofed cloth with soft worn sheen",
        "deep pocket canvas",
        "quiet fasteners",
      ],
      colors:
        "Sea-weathered charcoal and green-brown; single quiet violet stitch at cuff only",
      rainLogic: "Full salt-rain shed; sealed seams; hem clears wet dock",
      repair:
        "Oil re-dress allowed; cuff stitch re-run after haul seasons; patches from dock bins",
      accents: "One violet cuff stitch — no LED, no ship crest",
      never: [
        "tactical armor",
        "pirate cosplay",
        "family regalia",
        "full violet shell",
      ],
      coverage: "Harbor shift wet work; living-ship edge weather",
    },
  },
  {
    id: "high-quiet",
    num: "14",
    title: "High Quiet",
    slot: "High Quiet / rest corridors",
    district: "High Quiet",
    wave: 3,
    seed: "Soft acoustic layers, low visual noise, cloth that doesn’t shout in a hush district.",
    note: "Hush on a body. Acoustic soft layers. Almost no color. Face secondary, never covered for drama.",
    image: "/images/culture/fashion/14-high-quiet.jpg",
    lock: {
      silhouette:
        "Soft layered acoustic wraps over quiet turtleneck or base; low visual noise; soft shoes implied",
      materials: [
        "matte soft acoustic cloth",
        "quiet knit base",
        "soft wrap layers",
      ],
      colors:
        "Muted greys and soft charcoal only; violet as nearly invisible inner-collar thread; gold absent",
      rainLogic:
        "Indoor rest-corridor logic — hush first; light outer if crossing rain between wings",
      repair: "Wrap hems re-stitch quiet; cloth meant to stay soft through wash cycles",
      accents: "One almost-invisible violet inner thread; no glow",
      never: [
        "face coverings for drama",
        "loud color",
        "hard tech jewelry",
        "street shell as rest cloth",
      ],
      coverage: "Rest corridors, hush hours, low visual noise spaces",
    },
  },
  {
    id: "veilreach-drift",
    num: "15",
    title: "Veilreach Drift",
    slot: "Veilreach edge path",
    district: "Veilreach",
    wave: 3,
    seed: "Edge-soft unfinished path energy — unfinished map on a body without cosplay mystery.",
    note: "Unfinished is legal. Frayed hem, soft fog cloth — not ghost costume, not full-face veil.",
    image: "/images/culture/fashion/15-veilreach-drift.jpg",
    lock: {
      silhouette:
        "Soft layered wrap/coat with intentional unfinished hem; face visible secondary; edge path layers",
      materials: [
        "fog-soft cloth",
        "frayed-legal hems",
        "one unfinished seam as design",
      ],
      colors:
        "Muted fog greys; soft violet-grey edge only; no gold flood",
      rainLogic: "Mist and soft rain; wrap doubles as weather layer",
      repair:
        "Unfinished seams may stay unfinished; re-fray is legal; soft law visible",
      accents: "Unfinished edge as the accent — not mystery cosplay",
      never: [
        "full face veil as identity",
        "ghost robe cosplay",
        "family marks",
        "finished logo",
      ],
      coverage: "Veilreach path weather; edge soft hours",
    },
  },
  {
    id: "grid-tender",
    num: "16",
    title: "Grid Tender",
    slot: "Public Services / ordinary infrastructure",
    district: "Public Services",
    wave: 3,
    seed: "Soft utility for people who keep water, light, ramps honest — care as civic cloth, not armor.",
    note: "Civic care. Soft utility. One gold stress stitch. No helmet theater. No name-patch brand.",
    image: "/images/culture/fashion/16-grid-tender.jpg",
    lock: {
      silhouette:
        "Practical water-resistant work jacket; modest tool loop optional; ordinary civic cut",
      materials: [
        "water-resistant soft utility cloth",
        "quiet fasteners",
        "optional soft tool loop",
      ],
      colors:
        "Muted blue-grey and charcoal; single quiet gold stitch or bar at one stress point only",
      rainLogic: "Ordinary city rain; sealed enough for ramp and pipe work",
      repair:
        "Panels and stress points replaceable from public-service bins",
      accents: "One gold stress accent only — care, not rank display",
      never: [
        "helmet as fashion identity",
        "name-patch brand theater",
        "tactical armor",
        "full gold trim",
      ],
      coverage: "Water, light, ramp honesty shifts — ordinary infrastructure hours",
    },
  },

  {
    id: "innovation-lab",
    num: "17",
    title: "Innovation Lab",
    slot: "Innovation District · warm tools not sterile",
    district: "Innovation",
    wave: 4,
    seed: "Soft charcoal-cream work coat with repairable tool loops; violet only at pocket edge; wet-floor boots — human lab, not hospital TV.",
    note: "Warm tools. Repairable loops. No sterile cosplay. Innovation that still looks worn-in.",
    image: "/images/culture/fashion/17-innovation-lab.jpg",
    lock: {
      silhouette:
        "Soft work coat over simple layers; tool loops that re-stitch; practical trousers; wet-floor boots",
      materials: [
        "soft water-shed lab cloth",
        "repairable tool loops",
        "worn work boots",
        "timber-toggle or quiet zip",
      ],
      colors:
        "Warm cream and charcoal; muted violet only at pocket edge or loop stitch",
      rainLogic: "Coat sheds splash on district walks between labs; boots for wet floors",
      repair: "Loops and pocket panels replaceable from innovation bins; darn is legal",
      accents: "Single violet pocket-edge stitch — never full coat paint",
      never: [
        "sterile white hospital TV coat",
        "full violet paint",
        "family crest",
        "chrome greeble cosplay",
        "logo patch brand",
      ],
      coverage: "Lab and between-building rain; honest work hours",
    },
  },
  {
    id: "neon-core-drip",
    num: "18",
    title: "Neon Core Drip",
    slot: "Neon Core · rain-survived heat",
    district: "Neon Core",
    wave: 4,
    seed: "Dark worn rain layers; neon only as wet reflection and thin seam piping — signal without costume, not generic Night City drip.",
    note: "Heat that survived rain. Accent piping, not LED bodysuit. Bought for the street, not the gram.",
    image: "/images/culture/fashion/18-neon-core-drip.jpg",
    lock: {
      silhouette:
        "Layered rain-cut coat and soft underlayers; hood optional; practical trousers; street boots",
      materials: [
        "worn water-shed cloth",
        "soft leather or cloth mix",
        "thin reflective seam piping",
      ],
      colors:
        "Black and deep charcoal base; violet/cyan only as neon reflections and thin piping accents",
      rainLogic: "Commercial-heart rain; coat fully closes; hem clears deep puddles",
      repair: "Panels and piping re-stitchable; scuffs stay — new is not the point",
      accents: "Thin seam piping only — half-step, not full LED suit",
      never: [
        "generic Night City logo drip",
        "full LED bodysuit",
        "paint-splatter identity",
        "family marks",
        "fake brand text",
      ],
      coverage: "Neon Core night rain and high signal hours",
    },
  },
  {
    id: "green-field",
    num: "19",
    title: "Green Field",
    slot: "Green Spaces · ecological heatsinks",
    district: "Green Spaces",
    wave: 4,
    seed: "Weather shell, soil-practical trousers, plant/water pouch; muted green-earth with single violet stitch — living systems care, not elf-ranger LARP.",
    note: "Ecology with dual-layer city still in the cut. Soft tech optional. No fantasy ranger kit.",
    image: "/images/culture/fashion/19-green-field.jpg",
    lock: {
      silhouette:
        "Light weather shell; soil-practical trousers; small plant/water tool pouch at hip or belt",
      materials: [
        "breathable weather shell",
        "soil-smart cloth trousers",
        "small soft tool pouch",
      ],
      colors:
        "Muted green and earth; single violet stitch or zipper accent only",
      rainLogic: "Mist and soft rain in ecological corridors; shell packs small",
      repair: "Knees and pouch straps re-stitchable; dirt is not damage",
      accents: "One violet stitch line — living systems, not fashion flood",
      never: [
        "elf ranger LARP",
        "full camo cosplay",
        "family crest",
        "gold trim flood",
      ],
      coverage: "Green Spaces work and walk hours; heatsink edges",
    },
  },
  {
    id: "assembly-soft",
    num: "20",
    title: "Assembly Soft",
    slot: "Higher-up · resource councils · soft corporate",
    district: "Municipal · multi-layer governance",
    wave: 4,
    seed: "Quiet authority coat for humans who sit resource councils — worn-in excellent cloth, violet lining flash only, tablet not chrome throne prop. Corporate without corporate cosplay.",
    note: "Higher-up human cloth. Not Spire monochrome (that’s 10). Not bloodline heat. Power that allocates, recommends, constrains — and still walks home in the rain.",
    image: "/images/culture/fashion/20-assembly-soft.jpg",
    lock: {
      silhouette:
        "Long refined coat over high soft knit or tailored base; clean line; soft ledger or tablet carried, not brandished",
      materials: [
        "excellent worn-in wool-blend or rain-smart formal cloth",
        "soft knit underlayer",
        "quiet fasteners",
      ],
      colors:
        "Deep ink and warm grey; violet only as lining flash when walking; gold almost absent",
      rainLogic: "Coat seals for district-to-assembly rain; lining protected; hem practical",
      repair:
        "Invisible mend preferred but legal; excellence includes longevity, not disposability",
      accents: "Violet lining breath only — never full-body paint or rank medals",
      never: [
        "CEO superhero cape",
        "logo power suit",
        "chrome throne prop",
        "family regalia",
        "gold flood",
        "Spire monochrome clone of look 10",
      ],
      coverage: "Council, resource assembly, and the walk home — soft corporate hours",
    },
  },

  {
    id: "shield-maiden",
    num: "21",
    title: "Shield Maiden",
    slot: "Archetype · door that learned to walk",
    district: "Commons · Longhouse edge · rain streets",
    wave: 5,
    seed: "Mid-calf wrap-coat, weather knit, one living-thread shield on back or forearm dock — cloth-and-alloy, violet pulse in rim and seams only. A maiden who holds the door, not a catalog Valkyrie.",
    note: "Lookbook hung — back dock still. Cloth first, hood, charcoal-iron, rim pulse only. Citizen cloth — not Vesper Armor, not museum Viking. Power worn. Rain survived. Shield as care.",
    image: "/images/culture/fashion/21-shield-maiden.jpg",
    lock: {
      silhouette:
        "Mid-calf layered wrap-coat over fitted weather knit; one living-thread shield (round or heater) worn on the back or forearm dock — cloth-and-alloy, not parade steel; practical trousers; rain boots that have walked",
      materials: [
        "weather-shed wool-blend",
        "graphite seam-plate at shoulders",
        "living filament binding the shield rim",
        "repairable straps",
        "timber-toggle or quiet clasp",
      ],
      colors:
        "Charcoal / bone / iron; violet only as pulse in seams, shield rim, and one rune-adjacent stitch; gold almost absent (one stress-point only, if any)",
      rainLogic:
        "Coat seals; shield sheds; hem clears puddles; wet is legal — rain is the proving ground",
      repair:
        "Visible mend on strap or hem is correct; factory-new polish is wrong; shield rim re-binds",
      accents:
        "Living-thread shield rim + one violet seam pulse — never full-body paint, never horned helm as identity",
      never: [
        "horned helmet as identity",
        "chainmail bikini / lingerie-armor",
        "Marvel or LotR Valkyrie clone",
        "museum Viking LARP",
        "full-body violet paint",
        "status LED crown",
        "family crest as brand",
        "fake VALKYRIE CO. text",
        "chrome tactical plate as identity",
        "Starborn master sheet",
        "Vesper Armor portrait reuse",
      ],
      coverage:
        "Full weather body; no bare-midriff battle-babe; shield is a habit not a logo",
    },
  },

];

export const fashionLooksWave = (wave: 1 | 2 | 3 | 4 | 5) =>
  fashionLooks.filter((l) => l.wave === wave);

export const fashionLookById = (id: string) =>
  fashionLooks.find((l) => l.id === id);
