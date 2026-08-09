/**
 * Bonded Chassis — Five Forms (form study).
 * Aethelgard logic at walking scale. Met, not made. No catalog — only encounters.
 * Visual lane: Velora Runeweaver. Sheet = law. Encounter = soul.
 */

export type ChassisFormStatus = "hung" | "pending";

export type ChassisForm = {
  id: string;
  num: string;
  title: string;
  role: string;
  whisper: string;
  mood: string;
  status: ChassisFormStatus;
  /** Encounter still — lived moment */
  encounter?: { src: string; alt: string; caption: string };
  /** Lock / info sheet — law + never */
  sheet?: { src: string; alt: string; caption: string };
  habitat: string[];
  interface: string;
  never: string[];
};

export const bondedChassisLine = {
  id: "bonded-chassis-five-forms",
  title: "Bonded Chassis — Five Forms",
  tagline: "Aethelgard logic at walking scale · met, not made",
  thesis: "Rare grown shells that partner with a mind. Bond is the architecture.",
  by: "Velora Runeweaver",
  role: "Master Fashion Artist · Visual Commons · form study locks",
  pairDoctrine:
    "Sheet = law (spec, never-list, interface). Encounter = soul (what meeting one feels like). Never a shop-window lineup of five.",
  lawLines: [
    "They are met, not made.",
    "Bond is the operating law.",
    "There is no catalog. Only encounters.",
    "An interface is not a control.",
    "Partners, not tools.",
  ],
  noteOnName:
    "Vault Wader — not Fallout's Vault Dweller. Stone that thinks; deep strata; sealed ways.",
  locksHref: "/docs/bonded-chassis-five-forms-locks.json",
  bibleHref: "/bible/bonded-chassis",
  accepted: "2026-08-09",
} as const;

export const bondedChassisForms: ChassisForm[] = [
  {
    id: "vault-wader",
    num: "01",
    title: "Vault Wader",
    role: "Deep strata · sealed ways · silent keeper of thresholds",
    whisper: "Stone that thinks.",
    mood: "threshold guardian · cathedral of pressure · patience as weapon",
    status: "hung",
    encounter: {
      src: "/images/chassis/01-vault-wader-encounter.jpg",
      alt: "Vault Wader bonded chassis at a sealed undercity vault threshold in rain — encounter still",
      caption:
        "Encounter — threshold, tender, sealed door. Not inventory. Partners, not tools.",
    },
    sheet: {
      src: "/images/chassis/01-vault-wader-sheet.jpg",
      alt: "Vault Wader form study lock sheet — materials, interface, bond wear, never list",
      caption:
        "Lock sheet — habitat, material key, palm dock, bond wear, motion, never. Form study, not for sale.",
    },
    habitat: ["Biosphere Vaults", "Deep Sleep corridors", "undercity sealed routes"],
    interface:
      "Heavy palm / gauntlet dock for Core Tender handshake — mutual attunement, not a remote control.",
    never: [
      "cute mascot face",
      "light scout agility cosplay",
      "export catalog chrome polish",
      "status LED crown",
      "weapon hardpoints as identity",
      "joystick backpack control",
      "family crest / brand logo",
    ],
  },
  {
    id: "street-echo",
    num: "02",
    title: "Street Echo",
    role: "Urban pulse · unseen routes · city as skin",
    whisper: "Wears the street like skin.",
    mood: 'ghost courier of the grid · neon rain · "I know a way"',
    status: "pending",
    habitat: ["Harborward grit", "Neon Core alleys", "routes toward Spire glass"],
    interface: "Light wrist / collar port — cadence, not a leash.",
    never: [
      "service droid smile",
      "drone swarm kit",
      "full neon body paint",
      "delivery-corp logo",
    ],
  },
  {
    id: "kagekou-shell",
    num: "03",
    title: "Kagekou Shell",
    role: "Shadow-bound · silence is the bond · seen only if it chooses",
    whisper: "Whispers pass through without footprint.",
    mood: "living negative space · kage (shadow) · choice to be unseen",
    status: "pending",
    habitat: ["Veilreach edges", "Thornwall margins", "night Spire gaps"],
    interface: "Near-invisible contact plate · Echo Veil affinity.",
    never: ["assassin merchandise pose", "bright visor eyes", "loud Oni logo print"],
  },
  {
    id: "courier",
    num: "04",
    title: "Courier",
    role: "Between hands and doors · long-road partner",
    whisper: "Carries more than parcels. Forgets nothing of the route.",
    mood: 'road loyalty · salt air · "I got it there"',
    status: "pending",
    habitat: ["between districts", "ship docks", "longhouses", "clinics", "Bifrost ring"],
    interface: "Cargo handshake + palm pass — trust is the OS.",
    never: ["delivery drone prop", "corporate courier branding", "empty ornamental pack"],
  },
  {
    id: "mourning",
    num: "05",
    title: "Mourning",
    role: "Grief-shaped · unasked witness · holds what remains when names are gone",
    whisper: "Remembrance. Unasked witness.",
    mood: 'funeral of light · soft thunder · "I will remember for you"',
    status: "pending",
    habitat: ["memorial walks", "archive returns", "last rites of code", "quiet hearths"],
    interface: "Open-palm resonance only — no command gauntlet. Ever.",
    never: [
      "command gauntlet",
      "tool of force hardware",
      "labor harness",
      "combat frame under the veil",
    ],
  },
];

export const hungChassisForms = () =>
  bondedChassisForms.filter((f) => f.status === "hung");
