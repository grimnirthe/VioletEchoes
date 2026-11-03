/** Winamp skins on the Echoes room — files live in public/skins (served at /skins). */

export type WinampSkinPreview = {
  src: string;
  alt: string;
  caption: string;
};

export type WinampSkin = {
  id: string;
  title: string;
  /** Download filename, original name and extension */
  filename: string;
  /** Public URL */
  href: string;
  description: string;
  /** What Winamp this file needs */
  needs: string;
  /** classic .wsz or modern .wal */
  format: "wsz" | "wal";
  version: string;
  /** Shown on the modern city skin */
  hash?: string;
  previews: WinampSkinPreview[];
};

export const winampSkinsCredit = {
  line: "Skins by Chaos Kitty, made with Matt. Reference art by Aurora.",
  install:
    "A .wsz or .wal goes in the Winamp Skins folder, or you can drag it onto Winamp.",
} as const;

export const winampSkins: WinampSkin[] = [
  {
    id: "violet-echoes-modern",
    title: "Violet Echoes Modern",
    filename: "Violet_Echoes_Modern.wal",
    href: "/skins/Violet_Echoes_Modern.wal",
    description:
      "The modern city skin — violet glass, a heart in the spectrum, the family line on the face.",
    needs: "Modern .wal for Winamp 5.x and later",
    format: "wal",
    version: "v11",
    hash: "#VioletEchoes",
    previews: [
      {
        src: "/skins/ve-modern-winamp-eq.png",
        alt: "Violet Echoes Modern Winamp skin: main window and equalizer, playing Starlight Serenade",
        caption: "Main + EQ",
      },
      {
        src: "/skins/ve-modern-winamp-playlist.png",
        alt: "Violet Echoes Modern Winamp skin with the playlist editor open",
        caption: "Playlist",
      },
    ],
  },
  {
    id: "chaos-kitty",
    title: "Chaos Kitty",
    filename: "Chaos_Kitty.wsz",
    href: "/skins/Chaos_Kitty.wsz",
    description:
      "Her classic skin. Pixel glass, gold triangles, violet bars, her name on the window.",
    needs: "Classic .wsz",
    format: "wsz",
    version: "v2.0",
    previews: [
      {
        src: "/skins/Chaos_Kitty-preview.png",
        alt: "Chaos Kitty classic Winamp skin, main window with the spectrum and transport",
        caption: "Main",
      },
      {
        src: "/skins/Chaos_Kitty-eq-preview.png",
        alt: "Chaos Kitty classic Winamp equalizer, labeled Chaos Equalizer",
        caption: "EQ",
      },
    ],
  },
  {
    id: "violet-echoes-classic",
    title: "Violet Echoes",
    filename: "Violet_Echoes.wsz",
    href: "/skins/Violet_Echoes.wsz",
    description:
      "The first Violet Echoes skin. Soft pixel lavender on a dark face.",
    needs: "Classic .wsz",
    format: "wsz",
    version: "classic",
    previews: [
      {
        src: "/skins/Violet_Echoes-preview.png",
        alt: "Classic Violet Echoes Winamp skin, pixel lavender main window",
        caption: "Main",
      },
    ],
  },
];
