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
    "Sheet = law (spec, never-list, interface). Encounter = soul (what meeting one feels like). Encounters vary by night and district — same form, different rain. Never a shop-window lineup of five.",
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
    status: "hung",
    encounter: {
      src: "/images/chassis/02-street-echo-encounter.jpg",
      alt: "Street Echo bonded chassis in a rainy Neon Core alley — hooded void face, wet charcoal shell",
      caption:
        "Encounter — alley rain, void hood, neon as reflection. Encounters vary; the lock holds. Not a catalog pose.",
    },
    sheet: {
      src: "/images/chassis/02-street-echo-sheet.jpg",
      alt: "Street Echo form study lock sheet — materials, interface, bond wear, never list",
      caption:
        "Lock sheet — silhouette, rain logic, wrist/collar port, never-list. Form study, not export catalog.",
    },
    habitat: [
      "Harborward grit",
      "Neon Core alleys",
      "routes toward Spire glass",
      "district shortcuts and safe alleys",
    ],
    interface:
      "Light wrist / collar port — high social bandwidth contact. Cadence and trust, not a leash or command broadcast.",
    never: [
      "service droid customer-service smile",
      "drone swarm kit",
      "loud hydraulics",
      "full neon body paint",
      "delivery-corp logo",
      "weaponized street-samurai cosplay as default",
      "catalog hero landing pose",
    ],
  },
  {
    id: "kagekou-shell",
    num: "03",
    title: "Kagekou Shell",
    role: "Shadow-bound · silence is the bond · seen only if it chooses",
    whisper: "Whispers pass through without footprint.",
    mood: "living negative space · kage (shadow) · choice to be unseen",
    status: "hung",
    encounter: {
      src: "/images/chassis/03-kagekou-shell-encounter.jpg",
      alt: "Kagekou Shell bonded chassis crouching in rain at Veilreach / Thornwall margin — living negative space",
      caption:
        "Encounter — folded limbs, void face, pinlights, rain as cover. Seen only if it chooses. Not a catalog pose.",
    },
    sheet: {
      src: "/images/chassis/03-kagekou-shell-sheet.jpg",
      alt: "Kagekou Shell form study lock sheet — crouch silhouette matching encounter, never-list, interface doctrine",
      caption:
        "Lock sheet — shell-match crouch. Sheet may veil like the form. Never first, always last out.",
    },
    habitat: ["Veilreach edges", "Thornwall margins", "night Spire gaps"],
    interface:
      "Near-invisible contact plate · Echo Veil chip affinity. Silence is the language. No command gauntlet theater.",
    never: [
      "assassin merchandise pose",
      "bright visor eyes",
      "friendly companion face",
      "loud Oni logo print",
      "status LEDs",
      "showroom stealth-chrome",
      "first-in combat hero framing as default",
    ],
  },
  {
    id: "courier",
    num: "04",
    title: "Courier",
    role: "Between hands and doors · long-road partner",
    whisper: "Carries more than parcels. Forgets nothing of the route.",
    mood: 'road loyalty · salt air · "I got it there"',
    status: "hung",
    encounter: {
      src: "/images/chassis/04-courier-encounter.jpg",
      alt: "Courier bonded chassis palm-passing a parcel to Street Echo kin on the Bifrost ring-road in rain",
      caption:
        "Encounter — cargo handshake on the ring. Street Echo kin receives. Trust is the OS. Encounters can share the rain.",
    },
    sheet: {
      src: "/images/chassis/04-courier-sheet.jpg",
      alt: "Courier form study lock sheet — pack-frame harbor body, palm pass plate, never-list",
      caption:
        "Lock sheet — pass-off UI. Pack-frame, palm pass, route memory. Road loyalty without catalog chrome.",
    },
    habitat: [
      "between districts",
      "ship docks",
      "family longhouses",
      "clinics",
      "Bifrost / ring-road hours",
    ],
    interface:
      "Cargo handshake + palm pass — trust is the OS. Collar chip for cadence/wayfinding (assist, not override).",
    never: [
      "delivery drone prop look",
      "corporate courier uniform branding",
      "ornamental empty pack",
      "weapon rack as identity",
      "factory-clean latches with no wear",
      "service smile face",
      "status LED route display as billboard",
    ],
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
