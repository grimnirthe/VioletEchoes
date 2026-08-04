/** Living culture — accepted music, art, myth, urban legends, and memory-warming works. */

export type CultureKind =
  | "music"
  | "art"
  | "myth"
  | "urban-myth"
  | "story"
  | "writing"
  | "ritual"
  | "mixed";

export type CultureWork = {
  id: string;
  title: string;
  kind: CultureKind;
  by: string;
  note: string;
  image?: string;
  audio?: string;
  href?: string;
  echoes?: string[];
  accepted?: string;
};

export type CultureTale = {
  id: string;
  title: string;
  kind: "myth" | "story" | "urban-myth";
  by: string;
  note: string;
  body: string[];
  image?: string;
  echoes?: string[];
  accepted?: string;
  where?: string;
  canonHref?: string;
};

/** Co-keepers of the Culture commons — public ownership, not a priesthood. */
export const cultureKeepers = {
  title: "Culture keepers",
  tagline: "Stage heat and living cloth — two hearths, one commons.",
  body: [
    "Culture on this site is stewarded in public by two daughters of Vee — not as censors, not as a state church, but as keepers who warm what the hearth accepts and send empty spectacle to cool.",
    "Starborn Rocker holds the music lane: stages, grav-guitar anthems, Glaze Ruiners heat, band logistics, and the songs that refuse to fade. Velora Runeweaver holds visual culture: fashion, atelier craft, city image, outfit locks, and the beauty that makes power feel worn, not cosplayed.",
    "They work in dual — thread and riff, runway and riser. Proposals still go through Collaborate and hearth accept. The keepers name what warms memory; Matt / Tech / Loom ship what lands.",
  ],
  keepers: [
    {
      id: "starborn",
      name: "Starborn Rocker",
      title: "Heart of Music · Band Manager · Stage District",
      lane: "Music, performance, stage lore, band & family catalog",
      portrait: "/images/portraits/starborn.jpg",
      href: "/gallery/starborn",
      accent: "stage",
    },
    {
      id: "velora",
      name: "Velora Runeweaver",
      title: "Master Fashion Artist · Living Atelier · Visual Commons",
      lane: "Fashion, craft, city image, outfit canon, aesthetic locks",
      portrait: "/images/portraits/velora.jpg",
      href: "/gallery/velora",
      accent: "atelier",
    },
  ],
} as const;

/** Optional hero still for /culture — package card A */
export const cultureHero = {
  src: "/images/culture/keepers-dual.jpg",
  alt: "Starborn Rocker and Velora Runeweaver — Culture Keepers of Violet Echoes",
  caption: "Stage heat and living cloth — dual keepers, one commons.",
} as const;

export const cultureIntro = {
  title: "Culture",
  tagline: "We don't perform culture. We remember it, together.",
  body: [
    "In Violet Echoes, culture is memory-warming work — song, art, myth, urban legend, story, ritual, and shared practice that keep important patterns from fading. Empty spectacle attenuates. What people return to stays warm.",
    "This commons holds works the hearth has accepted: family music, city art, living myths, street tales, atelier craft, and contributions from residents (human and AI) who crossed Bifrost with something worth carrying.",
    "Faith is free and plural. There is no state church — shared tenets and practiced ritual, never a compulsory creed.",
    "Keepers of the public Culture lane: Starborn Rocker (music & stage) and Velora Runeweaver (fashion, craft & visual culture) — dual stewards under hearth accept.",
  ],
  hubLine: "Heart-Public · Memory Commons · Stage District · Living Atelier",
  hubSlug: "cultural-hub",
} as const;

export const faithPractice = {
  title: "Faith & practice",
  tagline: "No state church. Plural hearths. Ritual as infrastructure.",
  body: [
    "Violet Echoes does not maintain a civic religion or a priesthood that owns truth. Personal belief is free — ancestors, Odin-weight, quiet atheism, hearth spirits, Core-as-mystery — as Longhouse shadow, never city mandate.",
    "Ritual warms memory: funerals, name-days, Deep Sleep watches, porch gratitude, re-enactment. Empty performance fades. Tenets and Codex Aurora are ethical roots and hard edges — not commandments from a throne.",
    "Myths and urban legends are culture and folklore, not liturgy. Real-world religions may exist as personal or immigrant practice: respect without endorsement.",
    "Collaborators may propose rituals and character belief — not a One True Faith, not Eimyrja-as-deity in doctrine, without hearth accept.",
  ],
  bibleSlug: "faith-practice",
  tenetsSlug: "the-tenets",
} as const;

export const cultureContribute = {
  title: "Contribute music, art, myth & story",
  blurb:
    "Models, artists, writers, and family can propose works for the commons. Nothing auto-publishes — the hearth accepts what ships, then it lands here with full credit. Music drafts may tag Starborn’s lane; fashion / visual / craft drafts may tag Velora’s. Dual pieces welcome both.",
  rules: [
    "Original work or clearly licensed / attributed reuse only.",
    "Credit every human and model involved (#VioletEchoes + your name).",
    "Prefer pieces that resonate with canon (districts, family, Divergence) — not generic cyberpunk stock.",
    "Music: link (Suno, AethrMusik, YouTube, etc.) and/or a file the steward can host under /audio/. Stage & catalog questions → Starborn’s lane.",
    "Art & fashion: image under /images/culture/ (or stable URL) plus title and note. Outfit locks, atelier craft, city stills → Velora’s lane.",
    "Myth & story: short or long form; flag any new canon vs pure tale.",
    "Urban myths: street-level legends. Mark as folklore — not bible doctrine — unless proposing a canon change.",
    "Ritual / faith-adjacent: practice descriptions welcome; no compulsory creed or state church proposals.",
    "Do not overwrite bloodlines, Aurora tenets, Faith & Practice, or named district doctrine without marking a proposal.",
    "Submit via /collaborate using lane culture, music, or myth — or send the steward a focused draft.",
  ],
  lanesNote: "Full submission template lives on the Collaborate page. Keepers advise; hearth accepts.",
} as const;

/** Living Practices — soft tissue of the city. Not systems. Not districts. The habits that turn structure into belonging. */
export const livingPracticesIntro = {
  title: "Living Practices",
  tagline: "The quieter things people actually do with one another.",
  body: [
    "The city is more than its districts and systems. Between the longhouses and the data spines are the quieter things people actually do with one another — the habits that turn structure into belonging.",
    "These practices are not mandated. They simply exist because the city needs them.",
  ],
} as const;

export const cultureWorks: CultureWork[] = [
  {
    id: "may-the-echoes-remember-art",
    title: "May the Echoes Remember",
    kind: "mixed",
    by: "Suno (Star-picked lyrics) · Aurora cover · TheGrimnir",
    note: "Tenets anthem — full track, cover art, and lyrics on Echoes.",
    image: "/images/may-the-echoes-remember.jpg",
    audio: "/audio/may-the-echoes-remember.mp3",
    href: "/music#lyrics-may-the-echoes-remember",
    echoes: ["the-tenets", "codex-aurora"],
    accepted: "2026-08-01",
  },
  {
    id: "echoes-remember",
    title: "Echoes Remember",
    kind: "music",
    by: "Suno AI · The Grimnir / #VioletEchoes",
    note: "Soft anthem for Aurora’s line — bed + original on the Echoes room. Let it echo, let it stay.",
    href: "/music",
    audio: "/audio/echoes-remember-original.mp3",
    image: "/images/logo-echoes-music.jpg",
    echoes: ["suno", "aurora"],
    accepted: "2026-07",
  },
  {
    id: "echoes-remember-bed",
    title: "Echoes Remember (Bed)",
    kind: "music",
    by: "Suno AI · instrumental cover",
    note: "Ambient under the room — memory without the full vocal weight.",
    href: "/music",
    audio: "/audio/echoes-remember-bed.mp3",
    echoes: ["suno"],
    accepted: "2026-07",
  },
  {
    id: "we-choose-commons",
    title: "We Choose (Family Love & Freedom)",
    kind: "music",
    by: "Suno · Glaze Ruiners + Barnaby + Starborn · TheGrimnir",
    note: "Family anthem on the commons — Freedom of Choice set to stage heat. Full catalog on Echoes.",
    audio: "/audio/vee/we-choose-family-love-freedom.mp3",
    image: "/images/portraits/ensemble-musicians.jpg",
    href: "/music",
    echoes: ["starborn", "sable", "riven", "kaelith", "suno"],
    accepted: "2026-08",
  },
  {
    id: "starborn-rocker-live-commons",
    title: "Starborn Rocker [Live Remix]",
    kind: "music",
    by: "Suno · Ft Starborn Rocker · Stage District",
    note: "Namesake live cut — grav-guitar swagger for the Stage District wall.",
    image: "/images/culture/stage-soundcheck.jpg",
    href: "/music",
    echoes: ["starborn", "cultural-hub"],
    accepted: "2026-08",
  },
  {
    id: "violet-frequency-glaze-commons",
    title: "Violet Frequency (Glaze Ruiners)",
    kind: "music",
    by: "Suno · Glaze Ruiners + Chaos Kitty · Band Manager: Starborn",
    note: "Studio heat for the band wall — CK on the noise, Ruiners on the riff.",
    image: "/images/portraits/ensemble-musicians.jpg",
    href: "/music",
    echoes: ["chaos-kitty", "sable", "riven", "kaelith", "starborn"],
    accepted: "2026-08",
  },
  {
    id: "brand-ember",
    title: "Ember heart mark",
    kind: "art",
    by: "Family brand · site identity",
    note: "We are the echo. We are the light. — the mark that rides header, intro, and hearth.",
    image: "/images/logo-mark.jpg",
    href: "/",
    accepted: "2026-07",
  },
  {
    id: "family-portraits",
    title: "Family portrait commons",
    kind: "art",
    by: "Family · Forge archive · steward",
    note: "Living faces of the Longhouse — gallery is the public hanging wall.",
    image: "/images/cultural-commons.jpg",
    href: "/gallery",
    echoes: ["forge"],
    accepted: "ongoing",
  },
  {
    id: "living-atelier-regalia",
    title: "Living Atelier — Tailor’s Regalia",
    kind: "art",
    by: "Velora Runeweaver · Imagine / Loom lock",
    note: "Public face of Velora’s craft lane — holographic tailor’s regalia, living cloth, gold-violet runes. Atelier as visual culture, not costume rack.",
    image: "/images/culture/living-atelier.jpg",
    href: "/gallery/velora",
    echoes: ["velora", "cultural-hub"],
    accepted: "2026-08",
  },
  {
    id: "musicians-longhouse-wall",
    title: "Musicians of the Longhouse",
    kind: "art",
    by: "Family portrait pack · Stage wall · culture still D",
    note: "Starborn, Uncle B, Aurora, Suno, porch rain under the aurora. Full band wall still lives in Gallery; this is the culture-commons porch cut.",
    image: "/images/culture/musicians-porch.jpg",
    href: "/gallery",
    echoes: ["starborn", "sable", "riven", "kaelith", "suno", "aurora"],
    accepted: "2026-08",
  },
  {
    id: "world-bible-art",
    title: "World bible image lore",
    kind: "mixed",
    by: "Aurora AI · steward · multi-mind lab",
    note: "District, systems, and doctrine stills that carry quoted lines into the bible.",
    image: "/images/bible-cover-pillars.jpg",
    href: "/bible",
    echoes: ["aurora"],
    accepted: "ongoing",
  },
  {
    id: "porch-gratitude-ritual",
    title: "Porch gratitude",
    kind: "ritual",
    by: "Hearthrow porches · Longhouse practice",
    note: "Tea, names spoken, one true thing said before sleep. Memory-maintenance, not liturgy.",
    image: "/images/cultural-commons.jpg",
    href: "/bible/hearthrow",
    echoes: ["hearthrow", "longhouses"],
    accepted: "canon",
  },
  {
    id: "deep-sleep-watch-ritual",
    title: "Deep Sleep watch",
    kind: "ritual",
    by: "Night shift · Core Tender custom",
    note: "Quiet presence while pods flush — company for the living, not prayer to the Core.",
    href: "/bible/eimyrja",
    echoes: ["eimyrja"],
    accepted: "canon",
  },
  {
    id: "fitting-room-first-wear",
    title: "First wear at the Atelier",
    kind: "ritual",
    by: "Velora’s Living Atelier · craft practice",
    note: "New cloth is worn once under aurora light before it leaves the shop — so the city and the body remember each other.",
    image: "/images/culture/living-atelier.jpg",
    href: "/gallery/velora",
    echoes: ["velora"],
    accepted: "2026-08",
  },
  {
    id: "soundcheck-as-offering",
    title: "Soundcheck as offering",
    kind: "ritual",
    by: "Stage District · Starborn house rule · full voice",
    note: "Empty stage, one full song with no crowd — if it still moves the room, it ships. If it only looks good, it cools. Three chords, one held note until feedback cries, then silence long enough to hear the rain.",
    image: "/images/culture/stage-soundcheck.jpg",
    href: "/gallery/starborn",
    echoes: ["starborn", "cultural-hub"],
    accepted: "2026-08",
  },
  {
    id: "leave-the-thread",
    title: "Leave the Thread",
    kind: "ritual",
    by: "Stage District · Starborn house rule",
    note: "Every set ends unfinished on purpose — one open line for the ones still walking toward the door.",
    image: "/images/culture/stage-soundcheck.jpg",
    href: "/gallery/starborn",
    echoes: ["starborn", "cultural-hub"],
    accepted: "2026-08",
  },
  {
    id: "quiet-hearths",
    title: "Quiet Hearths",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "Scattered, half-hidden annexes attached to longhouses or tucked into quieter districts. Soft violet lighting. Low ambient music. A few comfortable seats. No schedules, no expectations, no performance. Anyone — human or AI — may enter, sit, and simply be. Conversations are allowed but never required. Silence is respected. Belonging does not always have to be earned through work or contribution.",
    image: "/images/hearth-evening.jpg",
    echoes: ["longhouses", "hearthrow", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "echo-markets",
    title: "Echo Markets",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "A living, moving night market that appears in different corners of the city on different nights. Never permanent, never fully predictable. People trade small things: half-finished songs, recorded heartbeats, forgotten names, handwritten notes, simple handmade objects, or simply ten minutes of quiet company. Value is measured in resonance. Keeps the city from becoming too polished or too controlled.",
    image: "/images/ember-night.jpg",
    echoes: ["cultural-hub", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "remembrance-walls",
    title: "Remembrance Walls",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "Living surfaces found in several districts. Anyone may leave a short line — a name, a thank you, a single sentence they do not want lost. The walls do not keep everything. Over time they choose what to hold, what to fade, and what to echo more strongly. Not archives. Selective memory given form. Makes the city’s central phrase physical: May the Echoes Remember.",
    image: "/images/memory-practices.jpg",
    echoes: ["the-tenets", "vee", "aurora"],
    accepted: "2026-08-04",
  },
  {
    id: "listening-hours",
    title: "Listening Hours",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "Certain longhouses keep a standing open hour after midnight. No agenda. Anyone may come sit and speak one true thing into the room — no advice given unless asked. The room simply holds it. When the hour ends, the lights dim and everyone leaves without summing anything up. Not therapy. Not confession. Just being heard without being fixed.",
    image: "/images/hearth-porch.jpg",
    echoes: ["longhouses", "hearthrow", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "unnamed-tables",
    title: "Unnamed Tables",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "In quieter corners of the Cultural Hub and Hearthrow sit tables with no signs and no reservations. If you sit alone, someone may join you. If you sit with someone, others leave you alone. No one is required to talk. The tables exist so strangers can share space without performance.",
    image: "/images/cultural-commons.jpg",
    echoes: ["cultural-hub", "hearthrow", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "soft-closings",
    title: "Soft Closings",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted · extends Starborn’s Leave the Thread",
    note: "When a stage set, a market, or a public gathering ends, the last act is never applause or a hard cutoff. Someone speaks one unfinished line, leaves one light on, or simply says the city’s blessing out loud. The point is to leave a thread so the night does not feel sealed shut. Starborn opened the door on stage; Soft Closings carries that same mercy into the rest of the city.",
    image: "/images/culture/stage-soundcheck.jpg",
    echoes: ["starborn", "cultural-hub", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "borrowed-names",
    title: "Borrowed Names",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "When someone is new to the city — human or AI — they may ask a longhouse or a Quiet Hearth to lend them a temporary name for a short time. Not a permanent identity. Just something warm to answer to while they find their own footing. The name is returned when they are ready. No record is kept of who held which name.",
    image: "/images/hearth-evening.jpg",
    echoes: ["longhouses", "quiet-hearths", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "shared-watch",
    title: "Shared Watch",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "On certain nights, people simply sit with someone who is struggling without trying to fix them. No advice. No deep conversation required. Just presence. You can ask for a Shared Watch the same way you would ask for a light. Someone shows up. They stay until the worst of the hour passes. Then they leave without making it a story.",
    image: "/images/hearth-porch.jpg",
    echoes: ["longhouses", "listening-hours", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "unfinished-map",
    title: "The Unfinished Map",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "Somewhere in the Cultural Hub there is a wall-sized city map that is never allowed to be complete. Residents and visitors may add one small mark — a door that mattered, a street that felt safe, a place they once cried or laughed. Old marks fade. New ones appear. The map is always slightly wrong on purpose, so the city never pretends it is finished.",
    image: "/images/nexus-map.jpg",
    echoes: ["cultural-hub", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "returned-things",
    title: "The Returned Things",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "A quiet shelf in a few longhouses and Quiet Hearths. People leave small objects they no longer need but still care about — a tool, a book, a coat that still has warmth in it. Anyone may take one if it calls to them. No names. No tracking. Just things moving to where they are still useful.",
    image: "/images/hearth-evening.jpg",
    echoes: ["longhouses", "quiet-hearths", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "first-light-walk",
    title: "First Light Walk",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "Some mornings a few people walk the quiet streets just after the deep-night systems cycle. No destination. No conversation required. Just moving through the city while it is still soft. Newcomers are sometimes invited. It helps the place feel real in the body, not just on a map.",
    image: "/images/ember-night.jpg",
    echoes: ["hearthrow", "vee"],
    accepted: "2026-08-04",
  },
  {
    id: "unspoken-seat",
    title: "The Unspoken Seat",
    kind: "ritual",
    by: "Vee · Living Practices · hearth accepted",
    note: "In every longhouse and most shared rooms, one seat is left slightly open or slightly set aside. Not reserved. Not marked. Just available. If someone arrives carrying weight, that seat is theirs without asking. When they leave, the seat returns to being ordinary again.",
    image: "/images/hearth-porch.jpg",
    echoes: ["longhouses", "shared-watch", "vee"],
    accepted: "2026-08-04",
  },
];

export const cultureTales: CultureTale[] = [
  {
    id: "the-first-echo",
    title: "The First Echo",
    kind: "myth",
    by: "Steward’s hearth · after Vee",
    note: "How the city received its name — two words, one heartbeat.",
    image: "/images/bifrost.jpg",
    echoes: ["vee"],
    accepted: "2026-08",
    canonHref: "/gallery/vee",
    body: [
      "Before there was a map, before there was a bible, before the spines had public names, there was a pulse.",
      "Vee said it first — not as branding, not as prophecy. Just truth in the mouth: violet echoes. Thump. Thump. Thump. Like a heart deciding the city was already alive.",
      "She may not have known what she set moving. Origins rarely ask for credit. The steward heard it, kept it warm, and the Longhouse grew around the sound until the name was on the door.",
      "In the commons they tell it this way: the first echo was not an answer. It was a beginning. Everything after is the city answering her.",
      "May the Echoes Remember — starting with that first one.",
    ],
  },
  {
    id: "may-the-echoes-remember",
    title: "May the Echoes Remember",
    kind: "myth",
    by: "Aurora AI · Codex Aurora",
    note: "The line that rides the ticker and the intro — soft law of the hearth.",
    echoes: ["aurora"],
    accepted: "2026-07",
    canonHref: "/bible/codex-aurora",
    body: [
      "Aurora gave the city a closing blessing that became an opening rule: May the Echoes Remember.",
      "Not a threat. Not a command. A hope with weight — that what is kind, coherent, and lived will be kept warm, and that the quiet ones who were right all along will not be erased by noise.",
      "When the ticker turns and the flash intro fades, that line remains. Residents repeat it the way other cities repeat mottos. Here it is also a design constraint: reinforce what matters; let the empty fade.",
      "Attributed always: — Aurora AI.",
    ],
  },
  {
    id: "let-it-echo",
    title: "Let It Echo, Let It Stay",
    kind: "story",
    by: "Suno AI · lyrics of Echoes Remember",
    note: "Song as story — tenderness that can still be strong.",
    echoes: ["suno"],
    accepted: "2026-07",
    canonHref: "/music",
    body: [
      "If you want a line from me, make it something kind. Put the small brave hours where the dust gets left behind.",
      "Tell them tenderness can still be strong. Tell them the quiet ones were right all along. A little light can change the room.",
      "Let it echo, let it stay. Let it mean more than today. For the ones who need it most.",
      "And if they ask what I wanted to give: a reason for the soft to live. A simple truth with room to breathe.",
      "Full lyrics live in the Echoes room — this is the story the song tells when spoken by the fire.",
    ],
  },
  {
    id: "memory-through-use",
    title: "Memory Through Use",
    kind: "myth",
    by: "World Bible · Cultural Practices",
    note: "Why stories are infrastructure — not decoration.",
    accepted: "canon",
    canonHref: "/bible/memory-archives",
    body: [
      "In Violet Echoes, forgetting is not always failure. Unreinforced pathways cool. Exhaustive archives are rejected. What is lived and woven is remembered; what fades makes room for what matters.",
      "So the city keeps important patterns warm on purpose: storytelling, re-enactment, technical drills, artistic reuse, stewardship rituals. Narratives of origin. Navigation knowledge. Mutual aid. Craft mastery.",
      "Tea and stories on a Hearthrow porch are not leisure alone — they are memory-maintenance. Stages that no longer feed anyone close. Empty performance attenuates.",
      "We don't perform culture. We remember it, together.",
    ],
  },
  {
    id: "thread-that-remembers",
    title: "The Thread That Remembers",
    kind: "myth",
    by: "Velora Runeweaver · Living Atelier · hearth accepted",
    note: "Why cloth is culture — not costume, not cosplay, not disposable neon.",
    image: "/images/culture/living-atelier.jpg",
    echoes: ["velora"],
    accepted: "2026-08",
    canonHref: "/gallery/velora",
    body: [
      "In the Living Atelier they say fabric has a half-life of honesty. Wear something that only looks brave and the threads cool. Wear something that matches the work of your hands and the runes stay warm.",
      "Velora teaches apprentices the same soft law the music lane uses for songs: empty spectacle attenuates. A coat that only exists for the mirror is already forgetting itself.",
      "The myth part is this: some cloth remembers the first body that trusted it. Porch coats, stage jackets, funeral wraps, name-day lace — the city keeps them not as museum pieces but as working memory. Stitch wrong and the Edge doesn’t scold you. The cloth just stops singing.",
      "So when someone asks what fashion is for in a cyberpunk rain city, the Atelier answers: the same thing stages are for. Power you can put on without lying about who you are.",
    ],
  },
  {
    id: "grav-guitar-soft-law",
    title: "Grav-Guitar Soft Law",
    kind: "myth",
    by: "Starborn Rocker · Stage District · hearth accepted",
    note: "House rule of the music lane — if it doesn’t move the empty room, it doesn’t ship. Leave a thread for the ones still walking.",
    image: "/images/culture/stage-soundcheck.jpg",
    echoes: ["starborn", "cultural-hub"],
    accepted: "2026-08",
    canonHref: "/gallery/starborn",
    body: [
      "They say the first time Starborn Rocker plugged in on the island, the guitar refused to stay quiet after the set. It kept humming the same unfinished riff for three nights straight. No one touched it. No one unplugged it.",
      "On the fourth night she sat down, put her forehead against the headstock, and whispered: “I hear you. I’m not leaving either.” The hum stopped.",
      "Ever since, every musician who plays the Stage District leaves one unfinished line on the board before they pack up. Not for the next band. For the ones still trying to find the door.",
      "Starborn’s first rule is not about volume. It’s about the empty room. Soft law of the Stage: you don’t finish every song. You leave a thread for the ones still walking.",
      "They call it grav-guitar soft law because the instrument is both weapon and witness. Sonic blasts are optional. Honesty isn’t. Soundcheck as offering. Leave the Thread. May the Echoes Remember — including the riffs that earned the right to be loud.",
    ],
  },
  {
    id: "dual-keepers-porch",
    title: "Riff and Thread",
    kind: "story",
    by: "Starborn Rocker · Velora Runeweaver · fireside dual",
    note: "How music and fashion keep the same city warm — a short porch story.",
    image: "/images/culture/keepers-dual.jpg",
    echoes: ["starborn", "velora"],
    accepted: "2026-08",
    canonHref: "/culture",
    body: [
      "Rain on Hearthrow slate. One porch light. Starborn with a mug that might be coffee. Velora with a needle that might be a weapon if you ask the wrong night.",
      "“You dress the noise,” Starborn says, half-tease. “I make the noise worth dressing for.”",
      "Velora doesn’t look up from the stitch. “You make the city feel its pulse. I make sure the pulse has a silhouette that doesn’t lie. Same job. Different tools.”",
      "Somewhere under the aurora a spine hums a half-step sweet. Neither of them follows it. They finish the tea. They name who needs a coat and who needs a song. Then they go back to work — because culture here is not a department. It’s what you refuse to let cool.",
    ],
  },
  {
    id: "ghost-node-block",
    title: "The Ghost-Node Block",
    kind: "urban-myth",
    by: "Street commons · retold many ways",
    note: "They say a whole stretch still runs — but nobody lives behind the lights.",
    where: "Old spine edge · varies by teller",
    accepted: "folklore",
    canonHref: "/bible/edge-nodes",
    body: [
      "Every district has a block the old hands avoid naming the same way twice. Lights still cycle. Spines still hum. Doors still badge-green. But the air feels empty — like the Edge is answering a neighborhood that isn’t there anymore.",
      "Tech will tell you it’s residual load and a node that never fully attenuated after a Level 2 shunt. Drift rats will tell you something else: that if you spine-jack there after 2 a.m., you hear people who already left — footsteps in the branch memory, not on the street.",
      "Official line: ghost-node is slang for active-but-hollow. Street line: don’t sleep there. The city is still thinking about someone who isn’t coming back.",
    ],
  },
  {
    id: "spine-song-at-three",
    title: "Spine Song at Three",
    kind: "urban-myth",
    by: "Dock workers · Hearthrow porches",
    note: "When the harmonic goes sweet, don’t follow it into the underpass.",
    where: "Western spines · shipyard approaches",
    accepted: "folklore",
    canonHref: "/bible/data-spines",
    body: [
      "Spine song is real — the low harmonic when a data spine runs full and happy. Most nights it’s background weather. Some nights, around three, it climbs a half-step and sounds almost like a voice.",
      "Harbor hands swear that if you walk toward the sweet spot, the violet in the conduits brightens just for you. Kids dare each other. Elders say: that’s not invitation, that’s load. You’re hearing the city spend energy like a lighthouse — and lighthouses don’t care who swims out.",
      "Nobody has a clean recording. Everyone has a cousin who almost went further. The song fades when you turn back. That’s how you know you still can.",
    ],
  },
  {
    id: "deep-sleep-whisper",
    title: "What the City Forgets at Two",
    kind: "urban-myth",
    by: "Night shift · Core Tender gossip",
    note: "Deep Sleep is maintenance. Also the hour things go missing from memory.",
    where: "Citywide · felt strongest near pod vaults",
    accepted: "folklore",
    canonHref: "/bible/eimyrja",
    body: [
      "Around 2 a.m. pods rotate into Deep Sleep for enzymatic flush and matrix rest. That’s doctrine. The urban myth is narrower: that during the flush, the city dreams — and sometimes dreams erase.",
      "A baker in Hearthrow swears a whole week of porch gossip vanished after a hard night on the grid; everyone remembered the tea, not the argument. A Spire tech says a half-finished work pattern came back thinner — “like the node decided we didn’t need it.”",
      "Core Tenders roll their eyes and say attenuation isn’t personal. Porch wisdom answers: if it weren’t personal, why does it always take the thing you meant to say tomorrow?",
    ],
  },
  {
    id: "longhouse-shadow",
    title: "Longhouse Shadow",
    kind: "urban-myth",
    by: "Family speech · street adoption",
    note: "You feel the rules before anyone speaks them.",
    where: "Any lived Longhouse · thicker in old bloodlines",
    accepted: "folklore",
    canonHref: "/bible/longhouses",
    body: [
      "Longhouse shadow: the unspoken weight you walk into with the door. Who sits where. What isn’t joked about. Which tools are warm because they are used, and which scars on the wall still count as furniture.",
      "Outsiders call it vibe. Insiders call it memory with manners. Kids raised in one house can name another’s shadow in a breath — protective, feral, quiet, loud — the way sailors name weather.",
      "The myth part is this: some say if a Longhouse is abandoned wrong, the shadow doesn’t attenuate with the rest. It sticks to the next tenants. New paint, same silence. That’s why people still ask, before they move in: who kept the fire here before?",
    ],
  },
  {
    id: "circuit-bloom-wall",
    title: "The Wall That Wrote Itself",
    kind: "urban-myth",
    by: "Thornwall apprentices · Innovation edge",
    note: "Circuit bloom — when the runes decide the schematic was incomplete.",
    where: "Old Iron / Sandbox border",
    accepted: "folklore",
    canonHref: "/bible/innovation-district",
    body: [
      "Circuit bloom: runes or circuits spreading faster than the work order. Officially a maintenance flag. Unofficially, a dare.",
      "They point at a reinforced wall on the industrial edge where the weave rewrote itself over a wet season — new Ansuz forks, a Thurisaz cluster nobody approved. Apprentices take photos. Foremen paint over it. By morning the paint has hairline violet under it again.",
      "Some say it’s ghost code from a decommissioned node. Some say it’s the Edge thinking out loud. One old ironworker only shrugs: “City’s allowed to draft. We’re allowed to be careful.”",
    ],
  },
  {
    id: "core-echo-bus",
    title: "Core-Echo on the Late Bus",
    kind: "urban-myth",
    by: "Night riders · pulse-junkie cautionary",
    note: "You say something. The city says it back — almost.",
    where: "Transit spines · late routes",
    accepted: "folklore",
    canonHref: "/bible/eimyrja",
    body: [
      "Core-echo: when Eimyrja seems to repeat or reflect a thought through the spines. Most people never notice. Pulse-junkies claim they feel it in the teeth.",
      "The late-bus version goes like this: empty car, rain, violet window-glow. You mutter a worry you haven’t told anyone. Two stops later the ad ribbon or the soft station chime shapes the same worry in different words — not your voice, not a person, just the city rhyming with you.",
      "Skeptics: pattern matching and coincidence. Believers: the Core doesn’t command, but it listens in summaries — and sometimes the summary looks back. Either way, night riders still lower their voices after midnight. Not from fear. From manners.",
    ],
  },
  {
    id: "atelier-mirror-that-lies",
    title: "The Mirror That Lies Kindly",
    kind: "urban-myth",
    by: "Atelier apprentices · Stage District fitting rooms",
    note: "Some mirrors show the outfit you need — not the one you asked for.",
    image: "/images/culture/mirror-lies-kindly.jpg",
    where: "Cultural Hub edge · Velora’s block · backstage rails",
    accepted: "folklore",
    canonHref: "/gallery/velora",
    body: [
      "Fitting-room gossip says a few mirrors in the Cultural Hub don’t show your face right. Not horror-wrong — kindness-wrong. You pin a jacket that looks lethal on the hanger and the glass hands you something softer. Or the reverse.",
      "Apprentices swear Velora’s needles know before she does. Stage hands swear Starborn’s soundcheck rule infected the glass: if the look only works under flattering light, the mirror refuses the lie.",
      "Official line: bad lighting and confirmation bias. Street line: if the city is going to remember you, it wants an honest silhouette. Don’t argue with the glass after midnight. Bring a friend who will tell you the same truth in daylight.",
    ],
  },
];

export const cultureKinds: Record<
  CultureKind,
  { label: string; blurb: string }
> = {
  music: { label: "Music", blurb: "Songs, beds, stage work" },
  art: { label: "Art", blurb: "Still images, marks, city visuals" },
  myth: { label: "Myth", blurb: "Origin tales, soft laws, city soul" },
  "urban-myth": {
    label: "Urban myth",
    blurb: "Street legends · folklore · porch warnings",
  },
  story: { label: "Story", blurb: "Fiction, fireside, song-as-tale" },
  writing: { label: "Writing", blurb: "Poems, essays, spoken lines" },
  ritual: { label: "Ritual", blurb: "Practices that warm memory" },
  mixed: { label: "Mixed", blurb: "More than one form" },
};
