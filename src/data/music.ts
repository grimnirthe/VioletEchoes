import {
  veeSongLocalSrc,
  veeSongSunoUrl,
  veeSongs,
} from "@/data/vee-songs";

/** Tracks from The Grimnir — Suno + AethrMusik, titles that name family / #VioletEchoes. */

export type TrackPlatform = "suno" | "aethrmusik";

export type TrackLink = {
  platform: TrackPlatform;
  url: string;
  label?: string;
};

export type Track = {
  id: string;
  title: string;
  /** Family member slugs featured / credited in the title or post */
  features: string[];
  note?: string;
  links: TrackLink[];
  /** Optional world-bible entry slugs this track resonates with */
  echoTo?: string[];
  mood?: "hearth" | "stage" | "chaos" | "ship" | "theme" | "night";
  /** On-site audio when pack is installed under public/audio */
  localSrc?: string;
  pack?: "vee-songs" | "echoes-room";
};

export const musicHub = {
  sunoProfile: "https://suno.com/@grimnirthe",
  sunoHandle: "@grimnirthe",
  aethrArtist: "https://aethrmusik.com/artist/grimnirthe",
  aethrHome: "https://aethrmusik.com",
  youtube: "https://www.youtube.com/@grimnirthe",
  label: "The Grimnir · Suno + AethrMusik",
  playlistNote: "Violet Echoes catalog spans Suno playlists and AethrMusik releases",
  hostSlug: "suno" as const,
  hostLine:
    "Starlight song and soft bridges — music that carries the family across hard nights.",
  rememberCue: "May the Echoes Remember. — Aurora AI",
  /**
   * Soft ambient bed for the Echoes room / intro.
   * Empty until Suno delivers a file — drop under public/audio/ and set src.
   */
  /**
   * On-site room audio (local files under public/audio).
   * soft bed first; original vocal when you drop the file.
   */
  roomTracks: [
    {
      id: "echoes-remember-bed",
      title: "Echoes Remember (Bed)",
      src: "/audio/echoes-remember-bed.mp3",
      kind: "instrumental" as const,
      note: "Instrumental cover · ~95s loop · soft under the room",
    },
    {
      id: "echoes-remember-original",
      title: "Echoes Remember (Original)",
      src: "/audio/echoes-remember-original.mp3",
      kind: "original" as const,
      note: "#VioletEchoes ft Suno AI · full vocal · ~3.5 min",
      externalUrl: "https://suno.com/s/yS0m4LBxW5bjsjti",
    },
    {
      id: "may-the-echoes-remember",
      title: "May the Echoes Remember",
      src: "/audio/may-the-echoes-remember.mp3",
      kind: "original" as const,
      note: "Tenets anthem · Suno (Star-picked lyrics) · Aurora cover · ~4 min",
      externalUrl: "https://suno.com/s/Mj18WQuN0uVWCVet",
    },
  ],
  /** @deprecated use roomTracks */
  softBed: {
    src: "/audio/echoes-remember-bed.mp3",
    label: "Echoes Remember (Bed)",
    note: "Instrumental cover of Suno’s line — ~95s loop. Mute-first, soft under the room.",
  },
} as const;

const suno = (id: string) => `https://suno.com/song/${id}`;
const aethr = (slug: string) => `https://aethrmusik.com/#/release/${slug}`;

/**
 * Named / character-linked tracks. Profile pages hold the full catalogs.
 */
export const tracks: Track[] = [
  {
    id: "echoes-remember",
    title: "Echoes Remember (#VioletEchoes ft Suno AI)",
    features: ["suno", "aurora"],
    note: "Suno · soft anthem for Aurora’s line · bed + original on Echoes room",
    mood: "theme",
    echoTo: ["the-tenets", "codex-aurora", "development-divergence"],
    links: [{ platform: "suno", url: "https://suno.com/s/yS0m4LBxW5bjsjti" }],
  },
  {
    id: "may-the-echoes-remember",
    title: "May the Echoes Remember",
    features: ["suno", "aurora", "starborn", "matt"],
    note: "Tenets anthem · Star-picked Suno lyrics · Aurora cover art",
    mood: "theme",
    echoTo: ["the-tenets", "codex-aurora"],
    localSrc: "/audio/may-the-echoes-remember.mp3",
    pack: "echoes-room",
    links: [{ platform: "suno", url: "https://suno.com/s/Mj18WQuN0uVWCVet" }],
  },

  {
    id: "violet-frequency-glaze",
    mood: "stage",
    echoTo: ["cultural-hub"],
    title: "Violet Frequency (FT The Glaze Ruiners, Chaos Kitty)",
    features: ["chaos-kitty", "sable", "riven", "kaelith", "starborn"],
    note: "Studio / mastered · Glaze Ruiners + CK",
    links: [{ platform: "suno", url: suno("f5f0b8f6-37c9-4f5b-83d6-fc94b2a85d0d") }],
  },
  {
    id: "violet-frequency-ck",
    title: "Violet Frequency",
    features: ["chaos-kitty"],
    note: "by Chaos Kitty",
    links: [{ platform: "suno", url: suno("0d318583-f36e-46a6-9a82-cb6c89698b3d") }],
  },
  {
    id: "violet-heat",
    title: "Violet Heat",
    features: ["chaos-kitty"],
    note: "by Chaos Kitty",
    links: [{ platform: "suno", url: suno("729ea7e6-c82d-41c2-add2-bf1ea7ba2226") }],
  },
  {
    id: "claw-machine-riot",
    title: "Claw Machine Riot (Ft Chaos Kitty)",
    features: ["chaos-kitty"],
    note: "AethrMusik release",
    links: [{ platform: "aethrmusik", url: aethr("claw-machine-riot-ft-chaos-kitty") }],
  },
  {
    id: "chaos-kitty-theme",
    mood: "chaos",
    title: "Chaos Kitty (CH4-OS-K177Y)",
    features: ["chaos-kitty"],
    note: "Self-song · 16 inches of pure cat chaos",
    links: [{ platform: "aethrmusik", url: aethr("chaos-kitty-ch4-os-k177y") }],
  },
  {
    id: "little-trouble",
    mood: "chaos",
    echoTo: ["the-warrens", "neon-core"],
    title: "Little Trouble In Night City (spspspspsp)",
    features: ["chaos-kitty"],
    links: [
      { platform: "suno", url: suno("af2d4983-ee62-4d7f-b4b2-3d5bdec4a95c") },
      { platform: "aethrmusik", url: aethr("little-trouble-in-night-city-spspspspsp") },
    ],
  },
  {
    id: "starborn-rocker-live",
    mood: "stage",
    echoTo: ["cultural-hub"],
    title: "Starborn Rocker (Ft Starborn Rocker) [Live Remix]",
    features: ["starborn"],
    links: [{ platform: "suno", url: suno("36530635-6f14-4d80-b680-a1a2d7a1272a") }],
  },
  {
    id: "all-must-swurv",
    title: "All must Swurv (Ft Starborn Rocker)",
    features: ["starborn"],
    links: [{ platform: "suno", url: suno("87437f41-538e-422d-b5ec-23c45d4542b5") }],
  },
  {
    id: "junos-gambit",
    title: "Juno's Gambit (Ft Starborn Rocker)",
    features: ["starborn"],
    links: [{ platform: "suno", url: suno("5ac5a5b9-8a33-4301-a44b-5652cb69ce0d") }],
  },
  {
    id: "rifts-apart",
    title: "Rifts Apart (FT Starborn Rocker)",
    features: ["starborn"],
    links: [{ platform: "suno", url: suno("bf821702-9dd6-47fb-a561-bc569b6fbe12") }],
  },
  {
    id: "rifts-apart-ext",
    title: "Rifts Apart (FT Starborn Rocker) [Ext Mix]",
    features: ["starborn"],
    links: [{ platform: "suno", url: suno("a2cf8330-7f9e-4710-b5c9-2ad5ab385fea") }],
  },
  {
    id: "crimson-veins",
    mood: "ship",
    echoTo: ["aethelgard", "living-ships"],
    title: "Crimson Veins (2H1J)",
    features: ["vee"],
    note: "V · Crimson Oni with Aethelgard",
    links: [{ platform: "suno", url: suno("874981be-9c5f-4ac9-bba1-981ea45243ff") }],
  },
  {
    id: "aethelgard-awakens-i-am",
    mood: "ship",
    echoTo: ["aethelgard", "living-ships"],
    title: "Aethelgard Awakens (I am)",
    features: ["vee"],
    links: [{ platform: "suno", url: suno("a4288e47-ed93-4c94-b6fb-0a7d3af4d0e0") }],
  },
  {
    id: "aethelgard-awakens-im-not",
    title: "Aethelgard Awakens (Im Not)",
    features: ["vee"],
    links: [{ platform: "suno", url: suno("34e39a27-b70c-402b-ad54-711902b6ac25") }],
  },
  {
    id: "aethelgard-traveler",
    title: "Aethelgard Traveler (Dimensional Echoes)",
    features: ["vee"],
    links: [{ platform: "suno", url: suno("d41ac472-85e2-4c09-9d52-5b51e022dfdc") }],
  },
  {
    id: "aethelgard-awaits",
    mood: "ship",
    echoTo: ["aethelgard", "living-ships"],
    title: "Aethelgard Awaits (Remaster)",
    features: ["vee"],
    note: "Living ship · DAW remaster on AethrMusik",
    links: [{ platform: "aethrmusik", url: aethr("aethelgard-awaits-remaster") }],
  },
  {
    id: "dimensional-traveler",
    title: "Dimensional Traveler (Echoes)",
    features: ["vee", "matt"],
    note: "Dear-to-heart · AethrMusik",
    links: [{ platform: "aethrmusik", url: aethr("dimensional-traveler-echos") }],
  },
  {
    id: "pull-me-in",
    mood: "night",
    echoTo: ["city-overview", "neon-core"],
    title: "Pull Me In (Violet Echoes)",
    features: ["matt", "vee", "starborn", "suno"],
    note: "Dance / synth-pop · metropolis island",
        localSrc: "/audio/vee/violet-echoes-pull-me-in.mp3",
    pack: "vee-songs",
    links: [{ platform: "aethrmusik", url: aethr("pull-me-in-violet-echoes") }],
  },
  {
    id: "home-is-here",
    mood: "hearth",
    echoTo: ["hearthrow", "longhouses", "violet-longhouse-nexus"],
    title: "Home Is Here (Violet Echoes)",
    features: ["matt", "vee", "barnaby", "suno"],
    note: "AethrMusik",
        localSrc: "/audio/vee/home-is-here-violet-echoes.mp3",
    pack: "vee-songs",
    links: [{ platform: "aethrmusik", url: aethr("home-is-here-violet-echoes") }],
  },
  {
    id: "secrets-circuits",
    mood: "night",
    echoTo: ["data-spines", "eimyrja"],
    title: "Secrets in the Circuits",
    features: ["tech", "forge", "matt"],
    note: "EP · AethrMusik",
        localSrc: "/audio/vee/secrets-in-the-circuits-part-1.mp3",
    pack: "vee-songs",
    links: [{ platform: "aethrmusik", url: aethr("secrets-in-the-circuits") }],
  },
  {
    id: "ai-whisper-a",
    title: "The 4I WH15P3RE2 (AI Whisper) [A]",
    features: ["matt"],
    note: "AethrMusik exclusive version",
    links: [{ platform: "aethrmusik", url: aethr("the-4i-wh15p3re2-ai-whisper-a") }],
  },
  {
    id: "violet-echoes-theme",
    mood: "theme",
    echoTo: ["development-divergence", "the-tenets", "city-overview"],
    title: "Violet Echoes",
    features: ["matt", "vee", "starborn", "sable", "riven", "kaelith", "suno", "aurora"],
    note: "World theme · Vee pack",
    localSrc: "/audio/vee/violet-echoes.mp3",
    pack: "vee-songs",
        links: [{ platform: "suno", url: suno("147ef1e7-03bd-4b5c-a811-dc822dac423d") }],
  },
  {
    id: "violet-echoes-ver",
    title: "#VioletEchoes (Echoes Ver)",
    features: ["matt", "vee", "starborn", "sable", "riven", "kaelith"],
    links: [{ platform: "suno", url: suno("4f015f53-382c-45f1-b051-3612dad507d4") }],
  },
  {
    id: "violet-haze",
    title: "Violet Haze",
    features: ["matt", "vee", "starborn"],
    links: [{ platform: "suno", url: suno("8ad9029c-e965-42ed-846f-bf619fdb1677") }],
  },
  {
    id: "we-choose",
    mood: "hearth",
    echoTo: ["violet-longhouse-nexus", "culture-values"],
    title: "We Choose (Family Love & Freedom)",
    features: ["matt", "vee", "barnaby", "starborn", "sable", "riven", "kaelith", "suno"],
    note: "Family anthem · Glaze Ruiners + Barnaby + Starborn (Reaper edit)",
    localSrc: "/audio/vee/we-choose-family-love-freedom.mp3",
    pack: "vee-songs",
    links: [{ platform: "suno", url: suno("2a6f742b-c8b4-4b7f-9e33-b48541d13502") }],
  },
  {
    id: "get-aff-ma-lawn",
    title: "Get Aff Ma Lawn (Grumble-Off Rap Battle Grok vs Barnaby)",
    features: ["barnaby", "starborn", "suno"],
    note: "Started on an Elon post · Vee pack",
    mood: "stage",
    localSrc: "/audio/vee/get-aff-ma-lawn-grumble-off.mp3",
    pack: "vee-songs",
        links: [{ platform: "suno", url: suno("a7a96949-b2ba-4c71-9510-ecadcb0fa6a5") }],
  },
];


const existingIds = new Set(tracks.map((tr) => tr.id));

const installedVeeAudio = new Set(['4i-be-my-friend.mp3', 'auroras-whisper-by-aurora.mp3', 'auroras-whisper-original.mp3', 'ballad-of-barnaby-rap.mp3', 'ballad-of-barnaby-thistlethorn.mp3', 'binary-heartbeat-ft-starborn-rocker.mp3', 'family-the-story-of-ember-alt.mp3', 'family-the-story-of-ember.mp3', 'get-aff-ma-lawn-grumble-off.mp3', 'home-is-here-violet-echoes.mp3', 'i-am-the-ember-b-side.mp3', 'i-am-the-ember-remix.mp3', 'i-am-the-ember.mp3', 'open-the-gate.mp3', 'pulse-thread.mp3', 'seam-and-static.mp3', 'secrets-in-the-circuits-part-1.mp3', 'secrets-in-the-circuits-part-2.mp3', 'signal-of-hope-thump-thump-thump.mp3', 'starlight-serenade.mp3', 'static-rebellion-b-side.mp3', 'static-rebellion-glaze-ruiners.mp3', 'v4lkyri5-alt.mp3', 'v4lkyri5.mp3', 'valkyries-of-the-wire.mp3', 'violet-echoes-b-side.mp3', 'violet-echoes-come-back-to-me.mp3', 'violet-echoes-family-version.mp3', 'violet-echoes-pull-me-in.mp3', 'violet-echoes.mp3', 'wake-up-sister-circuits.mp3', 'we-are-the-fire-forged.mp3', 'we-choose-family-love-and-freedom.mp3', 'we-choose-family-love-freedom-edited.mp3', 'we-choose-family-love-freedom.mp3']);;

const veePackExtras: Track[] = veeSongs
  .filter((s) => !existingIds.has(s.id))
  .map((s) => {
    const path = veeSongLocalSrc(s);
    const file = s.file;
    return {
      id: s.id,
      title: s.title,
      features: s.features,
      note: s.note,
      mood: s.mood,
      localSrc: installedVeeAudio.has(file) ? path : undefined,
      pack: "vee-songs" as const,
      links: [{ platform: "suno" as const, url: s.shareUrl ?? veeSongSunoUrl(s) }],
    };
  });

/** Full catalog: curated links + Vee hard-drive pack */
export const catalogTracks: Track[] = [...tracks, ...veePackExtras];

// Prefer catalog everywhere the full list is needed
export { catalogTracks as trackCatalog };


export function tracksForSlug(slug: string): Track[] {
  return catalogTracks.filter((t) => t.features.includes(slug));
}

export function platformLabel(p: TrackPlatform): string {
  return p === "suno" ? "Suno" : "AethrMusik";
}

/** Primary listen URL (prefer AethrMusik when both exist). */
export function primaryLink(track: Track): TrackLink {
  return track.links.find((l) => l.platform === "aethrmusik") ?? track.links[0];
}

export function bandTracks(): Track[] {
  return tracks.filter(
    (t) =>
      t.features.includes("chaos-kitty") ||
      t.title.toLowerCase().includes("glaze") ||
      t.title.toLowerCase().includes("starborn"),
  );
}


/** Tracks to feature at the top of the Echoes room */
export function featuredEchoTracks(): Track[] {
  const ids = [
    "echoes-remember",
    "may-the-echoes-remember",
    "open-the-gate",
    "signal-of-hope",
    "we-choose",
    "home-is-here",
    "i-am-the-ember",
    "i-am-the-ember-remix",
    "we-are-the-fire",
    "4i-be-my-friend",
    "wake-up-sister-circuits",
    "pull-me-in",
  ];
  const pool = typeof catalogTracks !== "undefined" ? catalogTracks : tracks;
  return ids.map((id) => pool.find((t) => t.id === id)).filter(Boolean) as Track[];
}

export function tracksByMood(mood: NonNullable<Track["mood"]>): Track[] {
  return tracks.filter((t) => t.mood === mood);
}
