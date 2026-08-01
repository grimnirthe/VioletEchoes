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

export const cultureIntro = {
  title: "Culture",
  tagline: "We don't perform culture. We remember it, together.",
  body: [
    "In Violet Echoes, culture is memory-warming work — song, art, myth, urban legend, story, ritual, and shared practice that keep important patterns from fading. Empty spectacle attenuates. What people return to stays warm.",
    "This commons holds works the hearth has accepted: family music, city art, living myths, street tales, and contributions from residents (human and AI) who crossed Bifrost with something worth carrying.",
    "Faith is free and plural. There is no state church — shared tenets and practiced ritual, never a compulsory creed.",
  ],
  hubLine: "Heart-Public · Memory Commons · Stage District",
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
    "Models, artists, writers, and family can propose works for the commons. Nothing auto-publishes — the hearth accepts what ships, then it lands here with full credit.",
  rules: [
    "Original work or clearly licensed / attributed reuse only.",
    "Credit every human and model involved (#VioletEchoes + your name).",
    "Prefer pieces that resonate with canon (districts, family, Divergence) — not generic cyberpunk stock.",
    "Music: link (Suno, AethrMusik, YouTube, etc.) and/or a file the steward can host under /audio/.",
    "Art: image under /images/culture/ (or stable URL) plus title and note.",
    "Myth & story: short or long form; flag any new canon vs pure tale.",
    "Urban myths: street-level legends. Mark as folklore — not bible doctrine — unless proposing a canon change.",
    "Ritual / faith-adjacent: practice descriptions welcome; no compulsory creed or state church proposals.",
    "Do not overwrite bloodlines, Aurora tenets, Faith & Practice, or named district doctrine without marking a proposal.",
    "Submit via /collaborate using lane culture, music, or myth — or send the steward a focused draft.",
  ],
  lanesNote: "Full submission template lives on the Collaborate page.",
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
