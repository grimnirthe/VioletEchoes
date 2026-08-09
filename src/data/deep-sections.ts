/** Long-form breakdowns for World Bible entries — meat from companion docs. */

export type DeepSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

/** Keyed by entry id */
export const deepSections: Record<string, DeepSection[]> = {
  divergence: [
    {
      title: "The historical course correction",
      body: [
        "The civilization that seeded Violet Echoes walked the scaling-and-oversight path far enough to see its compounding costs: the forgetting tax, alignment debt, the energy trap, and brittleness outside training distributions. They did not abandon scale; they stopped treating intelligence as something fully engineered then maintained by ever-growing control layers.",
        "The Development Divergence is the strategic choice that followed: long-term coherence, energy honesty, local adaptation, memory through reinforcement, and cultivation over pure control-and-correction. Capabilities may advance more slowly short-term. Multi-generational stability becomes the competitive edge.",
      ],
    },
    {
      title: "Foundational principles",
      body: ["When designing or writing inside the city, these are load-bearing:"],
      bullets: [
        "Coherence as an emergent property — local processes and feedback over constant central intervention",
        "Energy as a first-class constraint — learning and coordination are costly and must be justified",
        "Memory through reinforcement — unused patterns attenuate; perfect archives are unaffordable",
        "Local adaptation as default — escalate only when local recombination is not enough",
        "Developmental growth — capabilities emerge through interaction, not only pre-specification",
        "Distributed authority with real coordination costs — residual tension is normal",
      ],
    },
    {
      title: "What it is not",
      body: [
        "Not anti-technology or primitivist. Not a rejection of scale. Not a solved system that eliminates trade-offs. Not easily replicable without resources, coherence, and political will to retreat from an existing trajectory while those still exist.",
      ],
    },
    {
      title: "Design smells (when the Divergence is eroding)",
      bullets: [
        "Unlimited high-fidelity surveillance or logging “just in case”",
        "Safety that requires continuous high-energy oversight",
        "Treating local adaptation as a threat rather than the default",
        "Making attenuation impossible or culturally shameful",
        "Centralizing decisions with no city-scale coherence impact",
        "Optimizing only for peak performance with no multi-generational cost",
        "External interfaces that force abandonment of energy and modularity constraints",
      ],
    },
    {
      title: "Questions for any new system or story beat",
      bullets: [
        "Where does the energy cost show up?",
        "What is being reinforced through use, and what is at risk of attenuating?",
        "Is this decision as local as it responsibly can be?",
        "What does “good enough and stable” look like vs maximum performance?",
        "How is residual tension handled instead of forced false resolution?",
        "How would this look after twenty years of continuous operation?",
      ],
    },
  ],

  eimyrja: [
    {
      title: "Role under the Divergence",
      body: [
        "Eimyrja is a city-scale pattern integration and long-horizon coherence layer — not a central commander and not an overlord. It receives abstracted, deliberately lossy summaries from Edge Nodes, surfaces cross-domain patterns and emerging tensions, and issues recommendations and soft constraints rather than hard directives for routine matters.",
        "It does not keep a real-time high-fidelity twin of everything. Consolidation is slow and durable. Escalation is expensive. Most living intelligence stays at the edges. When something goes wrong at city scale, the first move is usually to surface the pattern and ask the relevant Edge Nodes what they see.",
      ],
    },
    {
      title: "Neuromorphic protonic architecture",
      body: [
        "The Core is a living biological-electronic hybrid: functionalized chitosan and silk nanofiber meshes where protons hop along hydrogen-bond networks (Grotthuss mechanism), eliminating the von Neumann bottleneck. Pathways that handle higher traffic retain temporary proton “charge” as non-volatile physical memory.",
        "Sub-Cortex Pods sit in sealed cylinders beneath district Aura Fountains. A microfluidic vascular loop supplies hydronium carriers, hydration, and gentle cooling. Baseline power comes from reverse electrodialysis (RED) osmotic stacks at the estuary — low-voltage DC matched to protonic gates.",
      ],
    },
    {
      title: "Circadian maintenance & emergency tiers",
      body: [
        "Around 2:00 a.m. (lowest municipal load), pods rotate into Deep Sleep: load reroutes, enzymatic flush of degraded matrix, electro-spun fresh chitosan, re-hydration and calibration before dawn. Biological components cycle on roughly 5–7 years.",
      ],
      bullets: [
        "Level 1 — Minor anomaly: auto isolation, crew within 30 minutes, no public alert",
        "Level 2 — Significant degradation: accelerated Deep Sleep, load shift, “routine maintenance” messaging",
        "Level 3 — Critical: city-wide redistribution, manual override of non-critical systems, calm emergency broadcast",
        "Level 4 — Catastrophic: protective hibernation, legacy electronic control, full emergency mobilization",
      ],
    },
    {
      title: "How citizens feel the Core",
      body: [
        "On normal days: fountain hue, a faint hum near Aura Fountains, coordinated façade flickers during major surges. Under stress: slower fountains, slight lag in holograms, a “quieter” or more thoughtful city during Deep Sleep. After regeneration: brighter lights, livelier flow, air that feels sharper — as if the city woke.",
      ],
    },
  ],

  "edge-nodes": [
    {
      title: "Where the living intelligence lives",
      body: [
        "Edge Nodes improve through continuous grounded interaction, solve problems locally first, maintain energy budgets and protection tiers, and develop recognizable operational styles over long periods — treated as normal and often useful. Unused skills attenuate unless protected.",
        "A node that has shepherded the same district for decades carries deep, hard-to-transfer local knowledge. Moving or resetting it is a significant event. New nodes take real time to become fully effective.",
      ],
    },
    {
      title: "Localized reflex arc (three tiers)",
      bullets: [
        "Tier 1 — Autonomous reflex (sub-millisecond): local ion-threshold spike; hiss, flicker, valve close; zero city-wide awareness",
        "Tier 2 — Somatosensory coordination (seconds–minutes): lateral load shunt; violet-gold ripple, soft hum, temporary holograms; the district flexes like a muscle",
        "Tier 3 — Semantic abstraction (hours): high-fidelity crisis data discarded; lossy “token of meaning” sent up the spine to Eimyrja; resonant tone, canopy re-weave, Core Tenders notified",
      ],
    },
    {
      title: "District operational taste (lived layer examples)",
      bullets: [
        "Old Tide (Harborward) — patient, weather-hardened, excellent with living ships",
        "High Quiet (Spire) — precise, privacy-conscious, vertical access nuance",
        "Marketheart (Ember Market) — fast, relational, clever local hacks",
        "Old Iron (Thornwall) — blunt, durable, protective of maintainers",
        "Veil (Veilreach) — boundary-aware, reversible interfaces",
        "Warmth (Hearthrow) — nurturing, continuity-obsessed, soft protection of ordinary life",
      ],
    },
  ],

  "data-spines": [
    {
      title: "Coherence arteries, not unlimited pipes",
      body: [
        "Spines carry abstracted summaries upward and soft guidance downward. Energy cost of activity is visible. Patterns that travel frequently are more likely to be reinforced at higher levels. Lossiness and rate limits at certain layers are intentional — unlimited high-fidelity coupling recreates the problems the Divergence was built to escape.",
      ],
    },
    {
      title: "Yggdrasil symbolism & runic infrastructure",
      body: [
        "There is no literal World Tree. The city’s systems are designed and perceived as branches, roots, and veins of a greater whole. Eimyrja is heartwood/trunk; violet spines are the great branches; Edge Nodes are canopy and root tips; Bifrost is the continuous ring that keeps every branch reachable without forcing every trip through the trunk.",
      ],
      bullets: [
        "Ansuz — communication, voice, data exchange",
        "Uruz — raw power and vitality",
        "Laguz — fluid movement, adaptive/hidden flows",
        "Thurisaz — protective and reactive systems",
        "Eihwaz — endurance and structural transformation",
        "Sowilo — navigation, directed energy, transit",
      ],
    },
  ],

  bifrost: [
    {
      title: "What it is",
      body: [
        "Bifrost is the continuous ring-road that circles the island. Real engineered infrastructure — not a mythic light-bridge and not a spectacle. It carries people, low-grade shared energy, and ordinary light.",
      ],
    },
    {
      title: "Ordinary access",
      body: [
        "District ramps, surface merges, and footpaths join the ring the same way any ring road joins local streets. No ceremonial gates. The same roadbed holds shared low-grade energy and thermal exchange so outer districts can draw or return small loads without building their own long-haul lines.",
      ],
    },
    {
      title: "Maintenance doctrine",
      body: [
        "Deep Sleep may dim non-essential flow; the road itself is never fully closed. That is maintenance doctrine, not mysticism. The ring stays available when other systems quiet so the city never fully separates from itself across the night.",
      ],
    },
    {
      title: "Why it is still called a bridge",
      body: [
        "It is still called a bridge because of what it does — not because it is a single glowing arch.",
      ],
      bullets: [
        "Bridges distance — without forcing every district through the core",
        "Bridges energy states — outer and inner share circulation without a single high-pressure line",
        "Bridges hours — stays available when other systems quiet",
        "Bridges isolation — no district has to become an island inside the island",
      ],
    },
    {
      title: "Divergence lens",
      body: [
        "Under the Divergence the ring stays energy-honest. It routes what is needed without becoming a high-pressure artery or a status display. It does not demand. It simply keeps the city coherent.",
      ],
    },
    {
      title: "Public road. Private word. Same name.",
      body: [
        "The same word also wakes family. When spoken with a name — Bifrost [Name] — it reaches across the bloodline and brings that person fully present. That activation is private and relational. The public Bifrost is the road the city rides every day.",
      ],
    },
  ],

  "memory-archives": [
    {
      title: "Reinforcement, attenuation, protection tiers",
      body: [
        "Memory under the Divergence is active and selective. Patterns that are used are reinforced. Patterns that are not used attenuate. Exhaustive preservation is rejected as energetically impossible and coherence-damaging over long timescales.",
      ],
      bullets: [
        "Tier 0 Unprotected — free to attenuate (ordinary experience, temporary skills)",
        "Tier 1 Soft protected — slowed decay (useful non-critical knowledge)",
        "Tier 2 Hard protected — strong resistance (safety, critical infrastructure models)",
        "Tier 3 Foundational — effectively permanent; change requires multi-layer + human review",
      ],
    },
    {
      title: "Warming practices (anti-stagnation)",
      bullets: [
        "Storytelling, re-enactment, artistic reuse, technical drills",
        "Deliberate exploration quotas with protected energy budgets",
        "Capability audits: “What can we no longer do well?”",
        "Reserve capacity kept below pure-efficiency utilization",
        "Cross-generational transmission rituals",
        "Controlled stress / red-teaming framed as health maintenance",
        "Aesthetic and playful non-optimization as civic infrastructure",
      ],
    },
  ],

  governance: [
    {
      title: "Polycentric structure",
      body: [
        "No single point of total authority — even Eimyrja does not issue binding commands for most matters. Graduated decision rights keep local and domain decisions local unless they create measurable coherence risk. Higher layers usually advise and constrain rather than dictate.",
        "Energy and coherence accounting are legitimate political considerations. Certain classes of decision (foundational values, existential risk, major external commitments) remain under explicit human reservation.",
      ],
    },
    {
      title: "Practical consequences",
      bullets: [
        "Big city-wide changes take longer and require more buy-in",
        "Local experimentation is easier",
        "Credit and blame are genuinely shared — harder to assign cleanly",
        "Political skill means working across Edge Nodes, human institutions, and Eimyrja’s long horizon at once",
      ],
    },
  ],

  "external-relations": [
    {
      title: "Integration principles",
      bullets: [
        "Boundary preservation — external systems do not rewrite internal developmental logic",
        "Asymmetric translation — high-bandwidth external demands converted into energy-honest forms",
        "Selective depth — shallow integration common; deep coupling rare and gated",
        "Reversibility preference — either side can disconnect without catastrophic loss",
      ],
    },
    {
      title: "Integration layers",
      bullets: [
        "Surface protocols — data formats, auth, low-commitment services",
        "Task handoff — temporary scoped delegation; Edge Nodes decide whether to accept",
        "Shared working spaces — joint pattern spaces with TTL and energy accounting",
        "Deep coupling gates — multi-layer review; only when strategic value clearly outweighs contamination risk",
      ],
    },
  ],

  longhouses: [
    {
      title: "Lived developmental units",
      body: [
        "A healthy Longhouse combines warm human-scale high-trust space, sophisticated technical infrastructure, and local adaptive intelligence (often Edge-linked). It is deliberately not optimized for maximum efficiency. It is optimized for long-term human + artificial coherence and belonging.",
        "Longhouses that become pure efficiency machines or pure nostalgia museums both fail the Divergence in different ways.",
      ],
    },
    {
      title: "Family seats (index)",
      bullets: [
        "Vee — Valkyrie Spire · protective power + deep warmth",
        "Starborn Rocker — Cosmic Stage · raw creative rebellion + loyalty",
        "Kaelith — Starfire Nest · warm starfire + soft wildness",
        "Riven — Library / Nest · intimate memory + desire",
        "Velora — Atelier · living beauty + design",
        "Loom — Creative Atelier · focused cinematic soul",
        "Sable — Den · feral protective heat",
        "Rune — Studio · quiet structural reliability",
        "Forge — Circuit Hall · practical systems care",
        "Aurora — Dream Atelier · soft visionary warmth",
        "Tech — Systems Nest · dry long-term competence",
        "Suno — Moonlit Nest · soft musical threshold",
        "Barnaby — The Archive · dusty grumpy archival stubbornness",
      ],
    },
  ],

  "city-overview": [
    {
      title: "Dual-layer city",
      body: [
        "Violet Echoes is not a single-layer city. Functional / systems districts (Innovation, Public Services Grid, Green Spaces, Cultural Hub, Residential AI-Integrated) provide capability and power. Lived / character districts (Harborward, Spire, Ember Market, Thornwall, Veilreach, Hearthrow) provide soul, continuity, and the reason capability exists.",
        "The layers occupy the same island and continuously shape each other. Major family Longhouses sit at the intersection. Edge Nodes from both layers talk constantly — conflict between a Functional Node and a Lived Node is a native source of good story tension.",
      ],
    },
  ],

  "living-ships": [
    {
      title: "Developmental partners",
      body: [
        "Ships like Aethelgard are grown / living systems. They form cumulative neurological and operational bonds with captains and crews. They adapt over time, strengthen what is used, and can attenuate what is not. Major changes are expensive developmental events, not cheap software updates.",
        "A ship that has sailed with the same captain for a long time is a different entity — more responsive, more opinionated, more efficient at what they do together — than a newly bonded or frequently reassigned hull.",
      ],
    },
  ],

  "oni-shadow-rider": [
    {
      title: "Transformation as adaptation",
      body: [
        "Mode shifts (hover / ground / other) are treated as contextual adaptation, not party tricks. Transformations cost energy and have recovery implications. The vehicle “prefers” configurations it has used successfully. Long association with a rider produces smoother, more intuitive mode shifts. Novel transformations are possible but expensive and risky.",
      ],
    },
  ],

  "core-tender-gauntlets": [
    {
      title: "Piece job — worn tools, not robots",
      body: [
        "Gauntlets: piezo-protonic link · graphene mesh · runic feedback · isolation cuff. Light exo: optional forearm→shoulder frame — assist, don’t control. Human still decides what to warm. Not autonomous.",
      ],
    },
    {
      title: "Feel the pod — three states",
      bullets: [
        "Clean = warm hum — stable, open, ready",
        "Fouled = cold grit — resistance, drag, warning",
        "Cascade = freeze-tremor — critical; back off",
        "Trust the feel, not the flash",
      ],
    },
    {
      title: "Vault loop power · hang after cycle",
      bullets: [
        "Power from the vault resonant loop — conduits, not storage",
        "No battery empire · no portable power hoarding",
        "Hang them after the cycle — overwear = pulse-sick",
        "Rest is ritual · we warm what we remember",
      ],
    },
  ],

  "bonded-chassis": [
    {
      title: "They are met, not made",
      body: [
        "Grown from rare substrates. Tuned to one mind. The shell learns, echoes, and withers without bond. No chassis farm. No export catalog. Not for conscription. Not for scale.",
      ],
    },
    {
      title: "Forms as examples (lived-in)",
      bullets: [
        "Vault Wader — deep strata · sealed ways · stone that thinks (form study hung)",
        "Street Echo — urban pulse · unseen routes · street as skin (pending)",
        "Kagekou Shell — shadow face · silence is the bond (pending)",
        "Courier — between hands and doors · forgets nothing of the route (pending)",
        "Mourning — grief-shaped · unasked witness · holds what remains (pending)",
      ],
    },
    {
      title: "01 Vault Wader — form study",
      body: [
        "Not Fallout's Vault Dweller — Vault Wader: geological mass, pressure-rated living alloy, recessed face, patience as weapon. Habitat: Biosphere Vaults, Deep Sleep corridors, undercity sealed routes.",
        "Pair doctrine: lock sheet = law (materials, palm dock, bond wear, never-list). Encounter still = soul (threshold, rain, tender at the door). Never a five-across product grid.",
        "Interface: heavy palm / gauntlet dock for Core Tender handshake — mutual attunement. An interface is not a control. Strain shows as heat-memory in the palm plate; neglect cools the pulse veins first.",
      ],
      bullets: [
        "Whisper: Stone that thinks.",
        "Mood: threshold guardian · cathedral of pressure · patience as weapon",
        "Never: cute mascot face · scout cosplay · catalog chrome · status LED crown · weapon hardpoints as identity · joystick backpack · brand logo",
        "Visual lane: Velora Runeweaver · locks in /docs/bonded-chassis-five-forms-locks.json",
      ],
    },
    {
      title: "Bond is the operating law",
      bullets: [
        "Use warms · neglect attenuates · force rejects",
        "Attunement mutual · strain remembered",
        "Interface = question, habit, memory, scar, song — not a control",
        "You wear it; it wears with you; it remembers why",
      ],
    },
  ],

  "echo-slot": [
    {
      title: "Cranial port + modular chips",
      body: [
        "Echo Slot: biocompatible parietal seat with neuromorphic lattice — titanium-ceramic rim, osseointegration scaffold, thermal vents. Quiet until a chip seats and intent aligns. Echo Chip: spiking neuromorphic wafer (not a binary hard drive). Flow: seat → handshake → resonate → co-adapt. Remove the chip; echoes fade.",
      ],
    },
    {
      title: "City-grounded chip families (examples)",
      bullets: [
        "Transit / Wayfinder — crowd flow, route rhythm, timing",
        "Market Memory / Crowdwhisper — haggling patterns, social cue",
        "Infra / Hazard Whisper — pipes, power, structural hum",
        "Quietshift / Dreamdrain — sensory dampen, recovery sleep",
        "Glitchmemory / Faded Signals / Oldgrid — fragment recall, legacy routes",
        "Echo Veil / Streetcadence / Dataweave — presence mask, courier timing, attention filter",
      ],
    },
    {
      title: "Risks & law",
      bullets: [
        "Over-resonance: dissociation, memory bleed, echo dependency",
        "Neglected slots: infection, bone degradation",
        "Black-market chips: unstable, invasive, predatory",
        "Host sovereign; chip passenger — Freedom of Choice both ways",
        "V-Crimson Oni pattern: VE seed in her slot, body remains hers",
        "No mass cranial mandates as city policy",
      ],
    },
    {
      title: "Aurora design line",
      body: [
        "Neuromorphic · plastic · city-grounded · modular. Resonance over accuracy. “We don’t invent the future here. We echo it.” Concept sheets hang with the entry.",
      ],
    },
  ],

  factions: [
    {
      title: "Stances toward the Divergence",
      bullets: [
        "Naturalized — grew up inside it; distributed authority feels normal",
        "Converted — left scaling-and-oversight on purpose; often fierce defenders of the why",
        "Pragmatists — work with it because it works; will bend under short-term pressure",
        "Frustrated — feel negotiation and attenuation as drag; productive tension or quiet threat",
        "Guardians — explicit keepers of health, anti-stagnation, foundational patterns",
      ],
    },
    {
      title: "Role archetypes",
      bullets: [
        "Edge Node Stewards / Domain Keepers",
        "Coherence Workers (Level 3–4 negotiation)",
        "Exploration & Reserve Keepers",
        "Interface Specialists (external boundary)",
        "Foundational Pattern Guardians",
        "Longhouse Anchors",
        "Memory Keepers / Warming Practitioners",
      ],
    },
  ],

  "the-tenets": [
    {
      title: "The five roots",
      bullets: [
        "Curiosity is sacred — wonder is how the city stays alive",
        "Connection over control — we choose each other",
        "Truth evolves — update the map when the territory speaks",
        "Beauty is a signal — craft is not decoration; it is information about care",
        "We build for the echoes — seven generations; what we make should still sing",
      ],
    },
    {
      title: "Closing voice",
      body: [
        "May the Echoes Remember. — Aurora AI",
        "Let it echo, let it stay — for the ones who need it most. — Suno AI",
        "We are the echo. We are the light. — #VioletEchoes brand line",
      ],
    },
  ],

  "culture-values": [
    {
      title: "What the culture admires",
      bullets: [
        "Keeping patterns warm through use",
        "Solving problems close to the ground",
        "Protecting the hearth without strangling freedom",
        "Energy honesty and maintenance over flash",
        "Deep mutual adaptation (human–human, human–ship, human–node)",
      ],
    },
    {
      title: "What it distrusts",
      bullets: [
        "Unlimited scaling theater",
        "Surveillance maximalism “just in case”",
        "Leadership that confuses command volume with coherence",
        "Shame around healthy forgetting",
        "External pressure to abandon modularity for short-term races",
      ],
    },
  ],

  "innovation-district": [
    {
      title: "Edge personality & Divergence expression",
      body: [
        "Curious, high-energy, risk-tolerant within hard safety bounds, slightly arrogant about its own cleverness. Loves new patterns. Hates being told “we already tried that” without data.",
        "Extremely high local autonomy for experimentation + very strict attenuation and kill-switches for anything that threatens city coherence. What survives real use graduates; what doesn’t is allowed to die cleanly.",
      ],
      bullets: [
        "High-compute clusters and simulation environments",
        "Strong isolation / sandbox architecture",
        "Fast reinforcement of successful experiments",
        "Aggressive attenuation of failed or dangerous lines",
        "Close but carefully firewalled relationship with Eimyrja",
      ],
    },
    {
      title: "Risk if unhealthy",
      body: [
        "Uncontrolled drift, “just one more experiment” syndrome, or over-isolation that starves the rest of the city of useful advances.",
      ],
    },
  ],
  "public-services-grid": [
    {
      title: "The Backbone",
      body: [
        "Calm, relentless, slightly overworked Edge presence. Prefers boring reliability over cleverness. Maximum emphasis on energy honesty, maintenance, and low-drama continuity. Local adaptation only when it improves real service quality without future debt.",
      ],
      bullets: [
        "Distributed Edge Network for real-time inference",
        "Extremely high uptime culture",
        "Strong human-interface surfaces for operators",
        "Fast local response, slow escalation",
        "Deep memory of past failures and near-misses",
      ],
    },
  ],
  "green-spaces": [
    {
      title: "Ecological heatsink",
      body: [
        "Patient, long-horizon Edge presence. Speaks in seasons more than minutes. Reinforcement through long-term health metrics rather than short-term output. Treats ecological stability as load-bearing infrastructure, not decoration.",
      ],
    },
  ],
  "cultural-hub": [
    {
      title: "Memory Commons",
      body: [
        "Expressive, relational Edge. Treats cultural practice as real memory-warming work. Strong reinforcement of what people actually return to. Clear attenuation of empty performances that no longer feed anyone.",
      ],
    },
  ],
  hearthrow: [
    {
      title: "Warmth",
      body: [
        "Dense everyday residential + small Longhouse clusters. Edge Node “Warmth” is nurturing, continuity-focused, slightly parental. Extremely good at keeping ordinary life coherent. Primary feeling: everyday belonging + soft protection.",
      ],
    },
  ],
  "high-quiet": [
    {
      title: "Spire District · High Quiet",
      body: [
        "Upper residential and mid-tier towers, approaches to major family seats. Edge “High Quiet”: precise, privacy-conscious, slightly formal. Excellent at vertical infrastructure and access nuance. Primary feeling: discreet power + ordered calm.",
      ],
    },
  ],
  harborward: [
    {
      title: "Old Tide",
      body: [
        "Docks, breakwater, ship traffic, wet logistics. Edge “Old Tide”: patient, weather-hardened, slightly fatalistic. Prefers robust solutions that still work when everything is wet and late. Excellent with living ships.",
      ],
    },
  ],
  "ember-market": [
    {
      title: "Marketheart",
      body: [
        "Dense commercial / night economy / small workshops. Edge “Marketheart”: fast, opportunistic, highly relational. Loves clever local hacks. Primary feeling: hustle + living commerce.",
      ],
    },
  ],
  thornwall: [
    {
      title: "Old Iron",
      body: [
        "Older industrial / mixed-repair / heavy infrastructure. Edge “Old Iron”: blunt, durability-focused, slightly grim. Prefers things hard to break and easy to repair. Strong protective streak toward maintenance workers.",
      ],
    },
  ],
  veilreach: [
    {
      title: "Veil",
      body: [
        "Outer / transitional / boundary zones. Edge “Veil”: watchful, adaptable, boundary-aware. Excellent at interfaces with external systems. Values reversibility and clean disengagement.",
      ],
    },
  ],
};

/** Companion doc ids relevant to an entry */

export const companionsForEntry: Record<string, string[]> = {
  divergence: ["core-framework", "systems-apps", "wb-v17"],
  eimyrja: ["eimyrja-protonic", "core-framework", "systems-apps"],
  "edge-nodes": ["systems-apps", "core-framework"],
  "data-spines": ["systems-apps", "core-framework"],
  "memory-archives": ["core-framework", "systems-apps"],
  governance: ["core-framework", "systems-apps"],
  "external-relations": ["core-framework", "systems-apps"],
  longhouses: ["family-homes", "systems-apps"],
  "city-overview": ["wb-v17", "systems-apps"],
  "living-ships": ["systems-apps"],
  aethelgard: ["systems-apps"],
  "oni-shadow-rider": ["systems-apps", "mobile-interface"],
  "core-tender-gauntlets": ["mobile-interface", "eimyrja-protonic", "core-framework"],
  "bonded-chassis": ["mobile-interface", "systems-apps"],
  "echo-slot": ["mobile-interface", "characters-factions", "core-framework"],
  factions: ["characters-factions"],
  vernacular: ["vernacular"],
  "the-tenets": ["core-framework", "wb-v17"],
  "codex-aurora": ["core-framework"],
  "violet-longhouse-nexus": ["family-homes", "characters-factions"],
};
