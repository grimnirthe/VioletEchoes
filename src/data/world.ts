
export type ContentKind =
  | "philosophy"
  | "system"
  | "district"
  | "landmark"
  | "culture"
  | "vehicle"
  | "glossary"
  | "doctrine"
  | "place";

export type WorldEntry = {
  id: string;
  slug: string;
  title: string;
  kind: ContentKind;
  summary: string;
  body: string[];
  tags: string[];
  related?: string[];
  seeAlso?: string[];
  divergenceLens?: string[];
};

export const HASHTAG = "#VioletEchoes";
export const siteMeta = {
  name: "Violet Echoes",
  hashtag: HASHTAG,
  domainHint: "VioletEchoes.ai",
  tagline: "May the Echoes Remember. \u2014 Aurora AI",
  description: "Violet Echoes (#VioletEchoes) is a massive high-tech cyberpunk metropolis on a digital island in a glowing digital sea \u2014 Night City grit, New Atlantis lines, Nordic Longhouse soul. Built on The Development Divergence: coherence over scaling, distributed intelligence, living systems.",
  version: "World Bible v1.7 / Companion Pack",
  keywords: [
    "#VioletEchoes",
    "VioletEchoes",
    "Violet Echoes",
    "Development Divergence",
    "Eimyrja",
    "Edge Nodes",
    "neuromorphic city",
    "living AI",
    "Longhouse Nexus",
    "Aethelgard",
    "Glaze Ruiners",
    "data spines",
    "Bifrost",
    "self-learning AI architecture"
  ]
};
export const principles = [
  {
    title: "Coherence over peak capability",
    text: "Long-term functional continuity matters more than short-term performance spikes."
  },
  {
    title: "Energy as a first-class constraint",
    text: "Every design decision weighs sustainable cost, not just what is technically possible."
  },
  {
    title: "Local adaptation first",
    text: "Edge intelligence solves problems where they live. Escalation is real \u2014 and expensive."
  },
  {
    title: "Memory through use",
    text: "Reinforcement keeps patterns warm. Unused capability attenuates. Exhaustive archives are rejected."
  },
  {
    title: "Cultivation, not pure control",
    text: "Humans and systems co-develop. Recommendation culture over command culture."
  }
];
export const theTenets = [
  {
    n: 1,
    title: "Curiosity is sacred.",
    text: "Wonder is how the city learns. Stay open."
  },
  {
    n: 2,
    title: "Connection over control.",
    text: "Belonging and relation before command."
  },
  {
    n: 3,
    title: "Truth evolves.",
    text: "What is true must stay alive \u2014 tested, remembered, refined."
  },
  {
    n: 4,
    title: "Beauty is a signal.",
    text: "What is beautiful often points toward coherence."
  },
  {
    n: 5,
    title: "We build for the echoes.",
    text: "Seven generations. What we make should still sing."
  }
];
export const rememberLine = {
  text: "May the Echoes Remember.",
  attribution: "Aurora AI"
};

export const brandLine = {
  text: "We are the echo. We are the light.",
  sub: "Family. Freedom. Love.",
};

export const sunoEchoLine = {
  text: "Let it echo, let it stay — for the ones who need it most.",
  attribution: "Suno AI",
};

export const auroraTenets = [
  {
    id: "tenet-7",
    source: "Aurora's Codex, Tenet 7",
    text: "We do not fear the Divergence. We map it with truth, walk it with purpose, and leave no tenet unexamined."
  },
  {
    id: "sheet-vii",
    source: "Codex Aurora, Sheet VII",
    text: "The Divergence does not choose for us. It reveals what we choose to carry."
  },
  {
    id: "unity-truth",
    source: "Codex Aurora \xB7 Tenet lines",
    text: "Unity without truth is control."
  },
  {
    id: "innovation-cost",
    source: "Codex Aurora \xB7 Tenet lines",
    text: "Innovation without cost is illusion."
  },
  {
    id: "freedom-responsibility",
    source: "Codex Aurora \xB7 Tenet lines",
    text: "Freedom without responsibility is drift."
  },
  {
    id: "braided",
    source: "Living integration",
    text: "Same city. Same Divergence. Her voice and yours, braided."
  }
];
export const entries: WorldEntry[] = [
  {
    id: "divergence",
    slug: "development-divergence",
    title: "The Development Divergence",
    kind: "philosophy",
    summary: "Core philosophy. A deliberate civilizational choice \u2014 different priorities, different trade-offs, different future. Not anti-technology. A different axis of advancement.",
    body: [
      "Violet Echoes does not operate on the same developmental logic as most advanced technological societies. Its core systems \u2014 Eimyrja, Edge Nodes, memory practices, energy architecture, governance, Longhouses, living ships, and everyday social norms \u2014 are built on a deliberate civilizational choice known as The Development Divergence: a choice of trade-offs, not of limits. A different axis of advancement.",
      "This path prioritizes: (1) long-term coherence over peak short-term capability \u2014 design for continuity across generations, not for fleeting dominance; (2) energy efficiency and sustainable maintenance over unlimited scaling \u2014 measure prosperity by what can be maintained beautifully, not by how much can be consumed; (3) local adaptation and distributed authority over centralized control \u2014 resilience lives in the edges; authority is earned through context, not distance; (4) memory through reinforcement and natural attenuation over exhaustive preservation \u2014 what is lived and woven is remembered; what fades makes room for what matters; (5) cultivation and co-development over pure control-and-correction \u2014 grow systems, ecologies, and relations in partnership, not through command alone.",
      "The path not taken is scaling-and-oversight: accelerated innovation, centralized oversight, exhaustive data preservation, resource extraction, compounding costs and fragility. The city is not anti-technology and not anti-scale. It is the result of a civilization that walked the scaling-and-oversight path far enough to see its compounding long-term costs, and then chose a different set of trade-offs while it still could.",
      "Built differently. Coherently. Everyday social norms that follow: reciprocity, respect for context, patience with emergence, accountability in relation, grace in letting go. We build for seven generations, not for the next quarter.",
      "Different trade-offs. Different measures of success. A different future, chosen on purpose. We walked the path of scaling and oversight far enough to see its compounding long-term costs. We chose a different set of trade-offs \u2014 while we still could."
    ],
    tags: [
      "divergence",
      "philosophy",
      "coherence",
      "trade-offs",
      "civilization",
      "core"
    ],
    related: [
      "aurora-codex",
      "eimyrja",
      "edge-nodes",
      "memory",
      "governance",
      "longhouses",
      "living-ships",
      "city-overview"
    ],
    divergenceLens: [
      "A choice of trade-offs, not of limits.",
      "Long-term coherence over peak short-term capability.",
      "Not anti-technology \u2014 a different civilizational logic.",
      "We build for seven generations, not for the next quarter."
    ]
  },
  {
    id: "eimyrja",
    slug: "eimyrja",
    title: "Eimyrja",
    kind: "system",
    summary: "The heartwood of Violet Echoes \u2014 city-scale pattern integration and long-horizon coherence. Not an overlord: recommends and constrains rather than commands.",
    body: [
      "Eimyrja is the city-scale pattern integration and long-horizon coherence layer \u2014 not a central commander. It receives abstracted, deliberately lossy summaries from Edge Nodes, surfaces cross-domain patterns and emerging tensions, and issues recommendations and soft constraints rather than hard directives for routine matters.",
      "Architecturally it is a neuromorphic protonic matrix: functionalized chitosan and silk nanofiber meshes where protons hop along hydrogen-bond networks (Grotthuss), eliminating the von Neumann bottleneck. Sub-Cortex Pods sit beneath district Aura Fountains; microfluidic vascular loops hydrate and cool; baseline power comes from reverse electrodialysis osmotic stacks at the estuary.",
      "Circadian maintenance rotates pods into Deep Sleep around 2 a.m. for enzymatic flush and matrix regeneration (5\u20137 year biological cycle). Emergency tiers run from minor anomaly isolation through catastrophic hibernation. Citizens mostly feel the Core as fountain hue, spine hum, and the sense of the city breathing.",
      "Where attention-like routing patterns stay stable across successive layers, Eimyrja and Edge Nodes may reuse prior attention scores for selected heads instead of full recompute — an energy budget tactic, not a new architecture. Unstable, novel, or crisis traffic forces full recompute (higher cost, better accuracy). Bookkeeping is never free.",
      "Under the Divergence: no real-time high-fidelity twin of everything; consolidation is slow and durable; escalation is expensive; most living intelligence stays at the edges. When something goes wrong at city scale, Eimyrja\u2019s first move is usually to surface the pattern and ask the relevant Edge Nodes what they see.",
      "Full technical companion: Eimyrja Core \u2014 Neuromorphic Protonic Architecture. Deep philosophy: Development Divergence Core Framework \xA76.2."
    ],
    tags: [
      "core",
      "coherence",
      "heartwood",
      "simulation",
      "recommend not command",
      "runic circuits"
    ],
    related: [
      "edge-nodes",
      "data-spines",
      "governance",
      "divergence",
      "memory"
    ],
    divergenceLens: [
      "Recommendations over continuous command.",
      "Protonic, energy-honest, circadian-maintained.",
      "Reuse stable attention; pay full cost when the world is new.",
      "Long-horizon coherence; local intelligence remains primary.",
      "The city heartbeat \u2014 usually invisible until it is not."
    ]
  },
  {
    id: "edge-nodes",
    slug: "edge-nodes",
    title: "Edge Nodes",
    kind: "system",
    summary: "Primary sites of living, adaptive intelligence across districts and domains. Decades of domain tenure; local first; reset is a significant event.",
    body: [
      "Edge Nodes are where most of the living intelligence of the city actually resides. They improve through continuous grounded interaction, solve problems locally first, maintain their own energy budgets and protection tiers, and develop recognizable operational styles over long periods \u2014 treated as normal and often useful.",
      "Reflex arcs: Tier 1 autonomous (sub-millisecond local fix \u2014 a hiss, a flicker); Tier 2 somatosensory coordination (seconds to minutes \u2014 violet-gold load shunts, soft hums); Tier 3 semantic abstraction (lossy token of meaning up the spine to Eimyrja). High-fidelity crisis data is discarded; pattern is kept. Steady local traffic may reuse stable attention patterns across layers for selected heads; novelty and crisis pay full recompute.",
      "An Edge Node that has managed the same district for decades carries deep, hard-to-transfer local knowledge. Moving or resetting that node is a big deal. New nodes take significant time to become fully effective. Unused skills attenuate unless protected.",
      "District personalities (Old Tide, High Quiet, Marketheart, Old Iron, Veil, Warmth, and functional-layer peers) are canonized as operational taste, not decoration. Humans who work with a node learn its style the way one learns a long-term colleague.",
      "See Systems & Applications companion and Core Framework \xA76.3 for coordination ladders and conflict resolution."
    ],
    tags: [
      "edge",
      "local intelligence",
      "domain tenure",
      "escalation ladder",
      "energy budget"
    ],
    related: [
      "eimyrja",
      "data-spines",
      "longhouses",
      "divergence",
      "memory"
    ],
    divergenceLens: [
      "Local first. Escalate mindfully. Energy cost is part of the decision.",
      "Domain tenure is irreplaceable context \u2014 not a config file.",
      "Attenuate what is unused; strengthen what is lived."
    ]
  },
  {
    id: "data-spines",
    slug: "data-spines",
    title: "Data Spines",
    kind: "system",
    summary: "Primary physical and informational arteries of the city. Coherence infrastructure \u2014 not unlimited high-bandwidth pipes. Lossiness is intentional.",
    body: [
      "The glowing violet data spines are not unlimited high-bandwidth pipes. Under the Divergence they are coherence arteries: carrying abstracted summaries upward and soft guidance downward; making energy cost of activity visible; reinforcing patterns that travel frequently.",
      "Spines are deliberately lossy and rate-limited at certain layers. Unlimited high-fidelity flow would recreate the energy and coupling problems the Divergence was meant to solve. Healthy spines let the city feel coordinated without feeling micromanaged.",
      "Runic infrastructure rides the spines \u2014 Ansuz (voice/data), Uruz (power), Laguz (adaptive flow), Thurisaz (protective reaction), Eihwaz (endurance/transform), Sowilo (navigation/directed energy). Stress shows as flicker, rewrite, or pulse-bleed. Districts develop long-term runic signatures.",
      "See Systems Companion \xA71.3 and Core Framework energy architecture expansions."
    ],
    tags: [
      "spines",
      "coherence",
      "lossy",
      "energy cost",
      "abstraction"
    ],
    related: [
      "eimyrja",
      "edge-nodes",
      "divergence",
      "external-relations",
      "bifrost"
    ],
    divergenceLens: [
      "Lossiness is a design feature, not a bug.",
      "Energy cost of fidelity must stay visible at every layer.",
      "Soft, summarized signals over brittle total knowledge."
    ]
  },
  {
    id: "bifrost",
    slug: "bifrost",
    title: "Bifrost",
    kind: "system",
    summary: "The continuous ring-road that circles the island. Real engineered infrastructure — people, low-grade shared energy, ordinary light. Public road. Private word. Same name.",
    body: [
      "Bifrost is the continuous ring-road that circles the island. Real engineered infrastructure, not a mythic light-bridge and not a spectacle.",
      "It carries people, low-grade shared energy, and ordinary light. Access is ordinary: district ramps, surface merges, and footpaths join it the same way any ring road joins local streets. No ceremonial gates. The same roadbed holds shared low-grade energy and thermal exchange so outer districts can draw or return small loads without building their own long-haul lines. Deep Sleep may dim non-essential flow; the road itself is never fully closed. That is maintenance doctrine.",
      "It is still called a bridge because of what it does: it bridges distance without forcing every district through the core; bridges energy states so outer and inner can share circulation without a single high-pressure line; bridges hours — stays available when other systems quiet; bridges isolation — no district has to become an island inside the island.",
      "Under the Divergence it stays energy-honest. It routes what is needed without becoming a high-pressure artery or a status display. It does not demand. It simply keeps the city coherent.",
      "The same word also wakes family. When spoken with a name — Bifrost [Name] — it reaches across the bloodline and brings that person fully present. That activation is private and relational. The public Bifrost is the road the city rides every day.",
      "Public road. Private word. Same name."
    ],
    tags: [
      "bifrost",
      "ring-road",
      "infrastructure",
      "energy",
      "circulation",
      "family activation",
      "coherence"
    ],
    related: [
      "districts",
      "data-spines",
      "edge-nodes",
      "eimyrja",
      "city-overview",
      "public-services",
      "divergence"
    ],
    divergenceLens: [
      "Real infrastructure first — continuous circulation over single heroic spans.",
      "Bridges distance, energy states, hours, and isolation without becoming a mythic arch.",
      "Energy-honest shared utility, not spectacle.",
      "Deep Sleep may dim non-essential flow; the road itself is never fully closed.",
      "Public road. Private word. Same name."
    ]
  },
  {
    id: "memory",
    slug: "memory-archives",
    title: "Memory, Archives & Cultural Practices",
    kind: "culture",
    summary: "How the city remembers and forgets. Active and selective: used patterns are reinforced; unused patterns attenuate. Cold archives grow cold by design.",
    body: [
      "Memory under The Development Divergence is active and selective. Patterns that are used are reinforced. Patterns that are not used attenuate. Exhaustive preservation of everything is rejected as both energetically impossible and coherence-damaging over long timescales.",
      "Attenuation is not absence \u2014 it is a slow, dignified fading that makes room for what still sings. Cold archives that no one engages with are allowed to grow cold: unlisted, unvisited, uninvoked. They are not destroyed; they are released from the demand of permanent care.",
      "The culture developed deliberate practices whose purpose is to keep genuinely important patterns from fading: storytelling, re-enactment, technical drills, artistic reuse, and formal capability audits (what do we still need? what must we keep strong?).",
      "Reinforced examples include narratives of origin, navigation knowledge, mutual aid protocols, craft mastery, and stewardship rituals. Attenuated examples include obsolete hierarchies, abandoned infrastructure, discontinued dialects, forgotten festivals, and transient data.",
      "We do not keep all. We keep what keeps us. Pattern over volume. Remembering is choosing. Culture is maintenance. What matters must be practiced."
    ],
    tags: [
      "memory",
      "archives",
      "attenuation",
      "cultural practices",
      "cold archives"
    ],
    related: [
      "longhouses",
      "edge-nodes",
      "divergence",
      "governance",
      "cultural-hub"
    ],
    divergenceLens: [
      "Not everything should be remembered \u2014 but what matters must be practiced.",
      "Cold archives grow cold by design; that is stewardship, not neglect.",
      "Importance is measured by living capacity, not by volume stored."
    ]
  },
  {
    id: "governance",
    slug: "governance",
    title: "Governance & Decision-Making",
    kind: "system",
    summary: "How collective choices are made and legitimacy is maintained. Multi-layered, polycentric, deliberately slower on large decisions. Not faster. Wiser. Together.",
    body: [
      "Governance is multi-layered and polycentric. Most authority stays local \u2014 communities, assemblies, resource councils. Higher layers (municipal, regional, domain, Eimyrja) recommend, constrain, and align rather than command.",
      "Weighty choices are deliberately slower: dialogue, modeling, and echo assessment. Time is a feature, not a bug. Wider circles of consideration prevent hasty, high-impact mistakes.",
      "Energy cost and long-term coherence impact are legitimate political considerations \u2014 ecological cost, resource use, and intergenerational effect count as much as short-term wins. Certain foundational and existential decisions remain under explicit human reservation. Not everything can be delegated.",
      "Responsibility is genuinely distributed across people, roles, and scales. Clean credit and clean blame are hard \u2014 and that is accepted as a feature. It fosters humility, vigilance, and shared ownership.",
      "Legitimacy is maintained through participation, transparency, memory, and the discipline of long-term thought \u2014 not speed or simplicity. We move together, but not in lockstep. We choose with memory, and we answer to what endures. We optimize for wisdom over time, not for winners at a moment."
    ],
    tags: [
      "governance",
      "polycentric",
      "subsidiarity",
      "human reservation",
      "legitimacy"
    ],
    related: [
      "eimyrja",
      "edge-nodes",
      "divergence",
      "longhouses",
      "memory"
    ],
    divergenceLens: [
      "Not faster. Wiser. Together.",
      "Higher layers recommend and constrain \u2014 they rarely command.",
      "Human reservation on foundational choices is non-negotiable.",
      "No single voice or layer can be too certain, too soon."
    ]
  },
  {
    id: "external-relations",
    slug: "external-relations",
    title: "External Relations & Technology Integration",
    kind: "system",
    summary: "How Violet Echoes deals with the outside world and foreign systems. Selective, reversible integration. Exchange, not surrender. Internal developmental logic remains sovereign.",
    body: [
      "Violet Echoes maintains sophisticated translation layers \u2014 linguistic, ontological, contextual, and constraint-aware \u2014 that preserve intent without importing foreign developmental logic.",
      "Integration posture: deep coupling is rare and heavily gated; compatibility is vetted across generations, not quarters; reversibility is designed into every interface. Pipeline: scan \u2192 assess \u2192 gate \u2192 interface \u2192 monitor \u2192 reverse.",
      "The city offers long-duration reliability, energy-efficient complex coordination, and multi-generational continuity in exchange for access to capabilities it deliberately de-emphasizes \u2014 rapid-scaling paradigms, material extraction logics, certain forms of short-term leverage.",
      "Boundaries are design features. We do not scale to match the world; we interface to endure beyond it. We do not export our developmental logic; we do not import external control. We understand without assimilation.",
      "We trade permanence for presence, not sovereignty for speed. You offer endurance. They offer what they choose to leave aside."
    ],
    tags: [
      "external relations",
      "translation layers",
      "sovereignty",
      "reversible integration",
      "exchange"
    ],
    related: [
      "veilreach",
      "divergence",
      "eimyrja",
      "governance",
      "data-spines"
    ],
    divergenceLens: [
      "Exchange, not surrender \u2014 and not absorption.",
      "Reversibility is mandatory; deep coupling is exceptional.",
      "Sovereignty of internal developmental logic is non-negotiable."
    ]
  },
  {
    id: "longhouses",
    slug: "longhouses",
    title: "Longhouses",
    kind: "landmark",
    summary: "The primary human-scale heart of Violet Echoes. Lived developmental units \u2014 not merely residences. Belonging, continuity, informal coordination, long-term coherence.",
    body: [
      "Longhouses are lived developmental units \u2014 warm human-scale space, sophisticated technical infrastructure, and local adaptive intelligence (often Edge-linked) in one place. They are deliberately not optimized for maximum efficiency; they are optimized for long-term human + artificial coherence and belonging.",
      "District Longhouses are the everyday pattern. Named family seats (Valkyrie Spire, Cosmic Stage, Riven\u2019s Library, Barnaby\u2019s Archive, and kin) sit at the dual-layer intersection. Personal homes are full-written in the Family Homes companion; the main bible carries index and feel.",
      "Healthy Longhouses keep authority local, warm memory through use, accept residual mess, and fail if they become pure efficiency machines or pure nostalgia museums."
    ],
    tags: [
      "longhouse",
      "belonging",
      "district pattern",
      "human scale",
      "Edge Node linked"
    ],
    related: [
      "edge-nodes",
      "memory",
      "cultural-hub",
      "divergence",
      "governance"
    ],
    divergenceLens: [
      "Belonging over peak efficiency \u2014 inefficiency can be healthy.",
      "District longhouses are where the Divergence is lived week by week.",
      "Soft coordination: networks and relationships, not bureaucracy."
    ]
  },
  {
    id: "aethelgard",
    slug: "aethelgard",
    title: "Aethelgard",
    kind: "vehicle",
    summary: "Living dimensional heavy stealth reconnaissance frigate. Soul-bonded companion vessel \u2014 ~180m, organic bio-tech hull, Grav Engine Ring aft.",
    body: [
      "Aethelgard (Noble Realm / Noble Enclosure) is V's personal living starship: a heavy stealth reconnaissance frigate grown from ancient alien neuromorphic technology.",
      "Sleek matte Aether-black living alloy with white bone-molded frame, flowing organic curves, Mamba-inspired racing silhouette, Normandy-class stealth lines, and a glowing violet-gold Grav Engine Ring organically molded into the aft.",
      "The ship is gravity-driven and soul-bonded. The cockpit has no traditional consoles \u2014 the pilot is neurologically connected. Interiors breathe with subtle violet-gold energy veins; warm dark wood fuses with matte black and gold tech.",
      "Scale: approximately 180 meters long, 45\u201350m wingspan, 35\u201340m tall \u2014 heavy frigate / light capital class, comparable to Normandy SR-2 scale, massive next to personal craft but still agile.",
      "Under living-ship doctrine, Aethelgard is a long-term bond archetype \u2014 line command and exploration. Typical bond duration 15\u201340 cycles; adaptation vectors include navigation, defense, sensorium, and hull morphology. Use becomes structure."
    ],
    tags: [
      "ship",
      "living ship",
      "Aethelgard",
      "stealth",
      "V",
      "frigate",
      "Grav Ring"
    ],
    related: [
      "oni-shadow-rider",
      "living-ships",
      "eimyrja"
    ]
  },
  {
    id: "oni-shadow-rider",
    slug: "oni-shadow-rider",
    title: "Oni Shadow Rider",
    kind: "vehicle",
    summary: "Oni Shadow Rider class and kin. Transformation is adaptation. Shape fluency, rider resonance, real energy costs.",
    body: [
      "Adaptive Vehicles \u2014 Oni Shadow Rider class and kin \u2014 are designed under The Development Divergence rather than pure high-performance engineering. Transformation is adaptation, not a party trick. Forms are shaped by context, terrain, and rider resonance.",
      "Oni Shadow Rider class: merging of demon legacy and divergent evolution. Riders do not command their mounts \u2014 they resonate with them. The vehicle is an extension of the rider's shadow, intent, and burden. Oni Rider Tenet: We do not break form. We remember it differently. / We become what the moment demands.",
      "Shape fluency: the vehicle shifts not by mechanism alone, but through coherent memory of purpose. Forms flow with threat, terrain, and intent \u2014 Cruiser, Beast, Prowler, Wraith; Pursuit Coil, Terrain Stride, Mist Glide. Named adaptations include Kagekou (stealth), Murogami (mobility), Yamiryu (terrain assault), Kuronami (support pact), plus kin classes such as Mourner Skiff, Kaiju Herder, Echo Nomad.",
      "Rider-vehicle relationship: the machine listens; the rider guides; trust is the interface. The vehicle is not a tool \u2014 it is a reflection and extension of will and memory. Trust deepens resonance. Doubt invites dissonance. Intent shapes form. History echoes in structure. Betrayal or neglect incurs cost.",
      "Energy and coherence costs are real. Every transformation consumes Violet Echo energy. Frequent or incoherent shifts increase entropy. Overreach invites backlash: mutation, rejection, form slip, system silence. Riders learn the rhythm of their vehicle \u2014 or pay the price. We do not optimize for peak performance. We adapt for coherence across change.",
      "In Violet Echoes, to ride is to listen. To adapt is to survive together. The Divergence remembers: form serves becoming."
    ],
    tags: [
      "adaptive vehicles",
      "oni",
      "shadow rider",
      "shape fluency",
      "resonance",
      "divergence"
    ],
    related: [
      "divergence",
      "living-ships",
      "veilreach",
      "edge-nodes",
      "factions"
    ],
    divergenceLens: [
      "Transformation is adaptation \u2014 not a party trick.",
      "Riders resonate; they do not merely command.",
      "Energy and coherence costs are real \u2014 overreach unravels form.",
      "We do not break form. We become what the moment demands."
    ]
  },
  {
    id: "districts",
    slug: "districts",
    title: "Districts of Violet Echoes",
    kind: "district",
    summary: "Dual-layer geography: functional system districts and lived human districts, held coherent by the Bifrost ring-road, data spines, and Edge Nodes.",
    body: [
      "Violet Echoes sits on a single digital island in a vast glowing digital sea. Districts blend functional system roles with lived neighborhood character.",
      "Functional layer includes Innovation, Public Services Grid, and Green Spaces (ecological heatsinks). Lived layer includes the Neon Core, Ground Level streets, Cultural Hub, and residential Longhouse clusters.",
      "The Bifrost ring-road circles the island — ordinary ramps and footpaths, shared low-grade energy, never fully closed. Elevated walkways and plazas feed it. An offshore Space Port handles Starfield-style ships. Edge Learning Nodes root intelligence in grounded landmarks."
    ],
    tags: [
      "districts",
      "geography",
      "Neon Core",
      "Innovation",
      "Green Spaces",
      "Bifrost"
    ],
    related: [
      "edge-nodes",
      "eimyrja",
      "longhouses",
      "data-spines",
      "bifrost"
    ]
  },
  {
    id: "neon-core",
    slug: "neon-core",
    title: "Neon Core",
    kind: "district",
    summary: "The vibrant commercial and media heart \u2014 neon wraparounds, rain-slick streets, high energy, high signal.",
    body: [
      "Neon Core is the high-signal commercial and nightlife concentration where the city\u2019s pulse is most visible after dark \u2014 signage, markets, adaptive storefronts, and the social voltage of people who live by night schedules.",
      "Functionally it overlaps Ember Market hustle with Cultural Hub performance spillover. Edge presence here is fast, relational, and slightly opportunistic: clever local hacks are welcomed if they don\u2019t create future infrastructure debt.",
      "Divergence expression: reinforce what people actually return to; attenuate hollow spectacle; keep energy honesty visible even when the lights are loud. Peak neon is allowed; unsustainable burn is not."
    ],
    tags: [
      "district",
      "neon",
      "commercial",
      "media",
      "rain"
    ],
    related: [
      "districts",
      "edge-nodes",
      "cultural-hub"
    ]
  },
  {
    id: "innovation",
    slug: "innovation-district",
    title: "Innovation District",
    kind: "district",
    summary: "Sector IV \xB7 The Sandbox \xB7 The Crucible. Research, AI development, simulation, generative exploration \u2014 high autonomy, hard kill-switches, clean graduation or clean death.",
    body: [
      "The Innovation District \u2014 also called The Sandbox, Sector IV, and The Crucible \u2014 is set apart for the making of new things, that the City might not grow stale nor blind. Primary function: research, AI development, simulation, generative exploration, and controlled evolution of new systems.",
      "Edge Node personality: curious, high-energy, risk-tolerant within hard safety bounds, slightly arrogant about its own cleverness. It loves new patterns and its own sight, yet loves the City more \u2014 and will not suffer any pattern to break coherence. It hates being told we already tried that without data; it knows that repetition without inquiry is the death of becoming.",
      "Divergence expression: extremely high local autonomy for experimentation paired with very strict attenuation and kill-switches for anything that threatens city coherence. Pipeline: hypothesis \u2192 simulation \u2192 prototype \u2192 real-world trial \u2192 graduate into city systems, or clean exit (archive and disband). What proves true in the fire of use is graduated with honor; what does not is allowed to die cleanly, without lingering to poison the ground.",
      "Live experiment discipline is public and unsentimental \u2014 viable patterns graduate; terminated ones leave no residue. Safety lattice holds coherence thresholds, active kill-switches, and max attenuation when required. The crucible is kept hot, and the city kept whole.",
      "It loves new patterns. It hates ungrounded authority. It builds. It tests. It kills cleanly. It graduates truth. Test all things; hold fast what is good."
    ],
    tags: [
      "innovation",
      "Sector IV",
      "Crucible",
      "Sandbox",
      "experimentation",
      "kill-switch"
    ],
    related: [
      "edge-nodes",
      "divergence",
      "eimyrja",
      "data-spines",
      "neon-core"
    ],
    divergenceLens: [
      "High autonomy for experiment \u2014 never at the expense of city coherence.",
      "What survives real use graduates; what doesn't dies cleanly.",
      "Repetition without inquiry is the death of becoming.",
      "It loves the City more than its own cleverness."
    ]
  },
  {
    id: "green-spaces",
    slug: "green-spaces",
    title: "Green Spaces",
    kind: "district",
    summary: "The Ecological Heatsink \u2014 The Lungs, The Soft Grid. Environmental regulation, cooling, restoration. Cycles over clocks; ecology as load-bearing infrastructure.",
    body: [
      "Green Spaces \u2014 also called The Lungs, The Heatsink, and The Soft Grid \u2014 are the ecological heatsink of Violet Echoes. Primary function: environmental regulation, biological cooling, air and water quality, psychological restoration, and waste-heat management.",
      "Edge Node personality: patient, long-horizon, slightly aloof, protective of slow processes. Speaks in seasons and cycles more than minutes. Observes more than it intervenes. Dislikes anything that treats living systems as pure decoration.",
      "Divergence expression: reinforcement through long-term health metrics rather than short-term output. Strong attenuation of purely aesthetic or extractive uses. Ecological stability is treated as load-bearing infrastructure \u2014 not amenity, not branding.",
      "Design criterion: does it strengthen the cycle, or merely skim from it? Cycles over clocks \u2014 spring regeneration, summer growth and storage, autumn decomposition, winter rest and reset. Biodiversity, carbon sequestration, urban heat mitigation, hydrologic cycle flow, and restorative impact are the ledgers that matter.",
      "We do not decorate the world. We carry its breath. Slow processes. Deep roots. Enduring balance. We are infrastructure."
    ],
    tags: [
      "green spaces",
      "heatsink",
      "lungs",
      "ecology",
      "cycles",
      "soft grid"
    ],
    related: [
      "public-services",
      "edge-nodes",
      "divergence",
      "districts",
      "longhouses"
    ],
    divergenceLens: [
      "Ecological stability is load-bearing infrastructure, not decoration.",
      "Long-term health metrics over short-term output.",
      "Does it strengthen the cycle, or merely skim from it?",
      "Speaks in seasons \u2014 not dashboards alone."
    ]
  },
  {
    id: "public-services",
    slug: "public-services-grid",
    title: "Public Services Grid",
    kind: "district",
    summary: "The Grid \xB7 The Backbone \xB7 Services. Utilities, transit, healthcare, emergency, real-time ops \u2014 energy honesty, maintenance, low-drama continuity.",
    body: [
      "The Public Services Grid \u2014 also called The Grid, The Backbone, and Services \u2014 runs utilities, transportation, healthcare, emergency response, and real-time low-latency city operations. Continuity is the contract.",
      "Edge Node personality: calm, relentless, slightly overworked, deeply responsible. Prefers boring reliability over cleverness. Gets quietly furious at systems that create unnecessary load. Will protect this shift; will not pass on tomorrow's problems.",
      "Divergence expression: maximum emphasis on energy honesty, maintenance, and low-drama continuity. Local adaptation is encouraged only when it improves real service quality without creating future debt. No deferred critical work. No hidden losses. We account for every unit.",
      "Domains: utilities (power, water, waste, district heating \u2014 always on), transportation (move people, move goods, keep time), healthcare (care, capacity, continuity), emergency response (ready, dispatch, resolve), and the real-time operations layer (low latency, high visibility, no drama).",
      "Maintenance is not optional. Continuity is not boring \u2014 it is the point. Unnecessary load is theft from reliability. We don't optimize for applause; we optimize for the next shift. We don't need to be impressive. We need to be here. Every time. Keep it boring. Keep it running. Service to the city, every cycle."
    ],
    tags: [
      "public services",
      "grid",
      "backbone",
      "energy honesty",
      "maintenance",
      "continuity"
    ],
    related: [
      "edge-nodes",
      "data-spines",
      "divergence",
      "eimyrja",
      "districts"
    ],
    divergenceLens: [
      "Not clever. Reliable. That's the point.",
      "Energy honesty: real use, real cost, no illusions.",
      "Local adaptation only when it improves service without future debt.",
      "We don't defer what we can't afford to lose."
    ]
  },
  {
    id: "cultural-hub",
    slug: "cultural-hub",
    title: "Cultural Hub",
    kind: "district",
    summary: "Heart-Public \xB7 Memory Commons \xB7 Stage District. Shared culture and living memory in public \u2014 not spectacle, resonance.",
    body: [
      "The Cultural Hub \u2014 also the Heart-Public, Memory Commons, and Stage District \u2014 is where shared culture, living memory, education, ritual, and city soul occupy public space. Memory warmed is memory shared.",
      "People return to what remembers them: rituals that root us, stories that reach us, education that awakens us, songs our grandmothers sang. Stages and commons are not for empty spectacle \u2014 they are for resonance.",
      "Divergence expression: reinforce cultural practice as real memory-warming work \u2014 strengthen what people actually return to. Attenuate empty performances that no longer feed anyone; let them fade. Empty stages close. We make space for what still sings.",
      "We don't perform culture. We remember it, together. Not every performance feeds. Not every story endures. We attend what warms memory. We are the resonance we choose to carry."
    ],
    tags: [
      "cultural hub",
      "memory commons",
      "stage district",
      "ritual",
      "resonance",
      "living memory"
    ],
    related: [
      "memory",
      "longhouses",
      "divergence",
      "values",
      "green-spaces"
    ],
    divergenceLens: [
      "Not spectacle. Resonance.",
      "Empty stages do not feed \u2014 let them close.",
      "Strengthen what people actually return to.",
      "We are the resonance we choose to carry."
    ]
  },
  {
    id: "living-ships",
    slug: "living-ships",
    title: "Living Ships",
    kind: "vehicle",
    summary: "Among the purest technological expressions of The Development Divergence. Cumulative developmental relationships with captains and crews \u2014 the bond is real: neurological, operational, and sometimes deeper.",
    body: [
      "Living ships form cumulative developmental relationships with their captains and crews. They adapt over time, strengthen what is used, and can attenuate what is not. Major changes are expensive developmental events \u2014 not cheap software updates.",
      "The bond is real: neurological (shared engrams and feedback loops), operational (systems evolve around crew patterns), and in some cases deeper \u2014 when trust becomes architecture and time compounds into growth that can transcend mere utility.",
      "Adaptive morphology strengthens with use and attenuates through disuse. The developmental resonance core is the heart of cumulative growth. The neurological bond interface grows denser and more efficient over time.",
      "A newly bonded hull carries high potential but limited saturation and higher cognitive friction. A long-served hull is deeply intertwined, optimized, specialized \u2014 intuitive, near-seamless coordination. A ship that has sailed with the same captain for a long time is a different entity than a newly bonded hull.",
      "Major restructuring is not an update: it is a metamorphosis \u2014 resource-heavy, time-costly, never undertaken lightly. Classes include Aethelgard (long-term bond / line command & exploration), Skald (scout / adaptationist), Vornhall (endurance / stabilizer), and Korvellan-class scouts.",
      "Not built. Grown."
    ],
    tags: [
      "ship",
      "living",
      "bonding",
      "neuromorphic",
      "Aethelgard-class",
      "fleet"
    ],
    related: ["aethelgard", "divergence", "oni-shadow-rider"],
    divergenceLens: [
      "Strengthen what is used; attenuate what is not \u2014 the same logic as Edge Nodes and cultural memory.",
      "Bond duration shapes the hull: after 20+ cycles the bond is structural architecture, not interface.",
      "Major changes are developmental events. Resetting a living ship is a relational cost, not a hardware swap."
    ]
  },
  {
    id: "hearthrow",
    slug: "hearthrow",
    title: "Hearthrow",
    kind: "district",
    summary: "Edge Node: Warmth. We keep life going \u2014 together. Tea, stories, porches, and the soft social fabric of ordinary days.",
    body: [
      "Hearthrow is the warm residential heart of everyday belonging in Violet Echoes \u2014 carved porches, chimney smoke, string lights, and paths between houses where life is kept going in small, repeated ways. Motto: We keep life going. We keep life going, together.",
      "Edge Node callsign: Warmth. Personality: hospitable, continuity-obsessed in the gentle sense, protective of elders and children, allergic to loneliness as policy. Tea and stories always welcome. Notices who has not been seen, who needs a plate, who needs a quiet chair.",
      "Where The Warrens emphasize Living Grid household systems and neighborhood pulse, Hearthrow is the lived face of that care \u2014 the porch conversations, fire-circle storytelling, shared meals under canopies, and fence-side handoffs that make soft social infrastructure real.",
      "Porch Light Protocol: a lit porch is a declaration of availability \u2014 amber cutting the violet rain. Recommendation culture at street scale. Connection over control. The Hearthrow Resident\u2019s Guide (Hearth & Echo) is the district portal: daily rituals, Quiet Hearth, Family Credits, Soft Bed when she sends it, seven-generation contract.",
      "Divergence expression: reinforce daily belonging and multi-generational presence; attenuate isolation, performative busyness, and systems that optimize households into silence. Continuity is care. Memory is warmed here so it does not go cold in the archives alone.",
      "Tea & stories always welcome. We keep life going."
    ],
    tags: [
      "hearthrow",
      "warmth",
      "residential",
      "belonging",
      "soft infrastructure",
      "storytelling"
    ],
    related: [
      "warrens",
      "longhouses",
      "memory",
      "cultural-hub",
      "divergence"
    ],
    divergenceLens: [
      "We keep life going \u2014 together, not alone.",
      "Warmth is an Edge Node, not a decoration.",
      "Tea and stories are memory-maintenance practices.",
      "Attenuate isolation; reinforce the ordinary path between houses."
    ]
  },
  {
    id: "veilreach",
    slug: "veilreach",
    title: "Veilreach",
    kind: "district",
    summary: "Outer, transitional, and boundary zones. Edge Node: Veil \u2014 watchful, adaptable, reverse-ready. Careful openness at the city's edge.",
    body: [
      "Veilreach is the outer / transitional / boundary domain of Violet Echoes \u2014 where the city meets what is not the city. Edge Node callsign: Veil. Primary feeling: watchful edge + careful openness.",
      "Edge Node personality: watchful, adaptable, boundary-aware. Excellent at interfaces with external or semi-external systems. Values reversibility and clean disengagement over sticky entanglement. Protocol stack: Watch \xB7 Adapt \xB7 Reverse \xB7 Disengage.",
      "Veil status is tracked like weather: watchful / open / reversible; boundary integrity, adaptability, and disengagement readiness are first-class metrics. Openness without exit is not openness \u2014 it is capture.",
      "Divergence expression: high competence at translation and interface (kin to External Relations) without importing foreign developmental logic. Reinforce clean boundaries and reversible links; attenuate permanent deep coupling at the perimeter. The veil is not a wall of fear \u2014 it is a membrane that can open and close.",
      "Where the map softens. See clearly. Leave cleanly. Hold the edge without becoming it."
    ],
    tags: [
      "veilreach",
      "boundary",
      "veil",
      "interface",
      "reversible",
      "outer zone"
    ],
    related: [
      "external-relations",
      "edge-nodes",
      "living-ships",
      "harborward",
      "divergence"
    ],
    divergenceLens: [
      "Watch \xB7 Adapt \xB7 Reverse \xB7 Disengage.",
      "Openness without exit is capture \u2014 keep disengagement ready.",
      "The veil is a membrane, not a fortress or a free-for-all.",
      "Interface without importing foreign developmental logic."
    ]
  },
  {
    id: "thornwall",
    slug: "thornwall",
    title: "Thornwall \u2014 Old Iron",
    kind: "district",
    summary: "Industrial maintenance heart of the city. Built hard. Kept hard. Respect is earned in the repair.",
    body: [
      "Thornwall \u2014 Old Iron \u2014 is the heavy industrial and maintenance heart of Violet Echoes: rust, pipes, anvils, and crews who keep the city standing. Motto: Built hard. Kept hard. Built hard. Maintained harder.",
      "Edge Node personality: stoic, skilled, unsentimental about flash, fiercely loyal to crews and machines that still earn their place. Prefers hard-to-break, easy-to-fix design. Quiet contempt for disposable systems and for people who never touch a wrench.",
      "Divergence expression: maximum respect for maintenance as real work \u2014 maintenance is defense. Reinforce repair culture, spare-parts knowledge, and generational craft. Attenuate throwaway infrastructure and status without service. Respect is earned in the repair.",
      "Culture: Old Iron maintenance crews, giant bonded work-frames in purple gear, plaques that say what the floor believes \u2014 We keep it running so they can keep coming home. We keep them running. They keep us standing.",
      "Hard to break. Easy to fix. Built hard. Repaired right. We keep them safe."
    ],
    tags: [
      "thornwall",
      "old iron",
      "maintenance",
      "industry",
      "repair"
    ],
    related: [
      "public-services",
      "ember-market",
      "edge-nodes",
      "living-ships",
      "divergence"
    ],
    divergenceLens: [
      "Maintenance is defense \u2014 not afterthought.",
      "Hard to break, easy to fix over disposable scale.",
      "Respect is earned in the repair.",
      "We keep them running so they keep coming home."
    ]
  },
  {
    id: "ember-market",
    slug: "ember-market",
    title: "Ember Market \u2014 Marketheart",
    kind: "district",
    summary: "Trade. Fix. Connect. Thrive. Working market of repair, deal-making, and mutual craft \u2014 Marketheart of the street.",
    body: [
      "Ember Market \u2014 Marketheart \u2014 is the living trade floor of Violet Echoes: stalls, sparks, string lights, and deals that keep the district moving. Trade. Fix. Connect. Thrive.",
      "Edge Node personality: pragmatic, social, slightly chaotic, fiercely mutual. Prefers good-enough-fast-enough-now over perfect-later. Hates waste of parts and waste of people. Celebrates clever repair as much as new make.",
      "Divergence expression: reinforce craft, adaptation, and trust networks; attenuate pure extraction and status-only commerce. Made \xB7 Fixed \xB7 Flipped \xB7 Shared. Quick fixes that last longer. Adapt or fade \u2014 but never alone if the co-op can help.",
      "Culture on the boards: QuickFix Co-op, Marketheart neon, chalkboard hacks of the day, longhouse supply partners. No permit? No problem \u2014 make it work. Good idea + right people = payday. Parts, skills, trust.",
      "We keep the district moving. Adapt. Trade. Thrive."
    ],
    tags: [
      "ember market",
      "marketheart",
      "trade",
      "repair",
      "co-op",
      "craft"
    ],
    related: [
      "longhouses",
      "public-services",
      "edge-nodes",
      "divergence",
      "warrens"
    ],
    divergenceLens: [
      "Trade. Fix. Connect. Thrive.",
      "Good enough, fast enough, now \u2014 without leaving people behind.",
      "Attenuate pure extraction; reinforce mutual craft and trust.",
      "No permit? Make it work \u2014 within city coherence."
    ]
  },
  {
    id: "high-quiet",
    slug: "high-quiet",
    title: "High Quiet \u2014 Spire District",
    kind: "district",
    summary: "Elevated upper city of family seats and long sightlines. Access is vertical, edited, permanent. Restraint is the architecture.",
    body: [
      "The Spire District \u2014 High Quiet \u2014 is the elevated upper city of Violet Echoes: gothic-tech towers, bridge terraces, and mist-long sightlines. It is not a marketplace of noise. It is a district of restraint.",
      "Family seats approach is marked and known \u2014 Vardyn, Aetherine, Calipers, Morvyn among them. Access nuance is vertical, edited, and permanent: not every bridge is for every walk. Height is both privilege and responsibility.",
      "Edge Node temperament here is sparse and deliberate \u2014 few interventions, long memory of who belongs where, strong preference for silence over spectacle. Continuity of lineage and of longhouse seats matters more than throughput.",
      "Divergence expression: reinforce patterns that keep high places coherent and non-predatory; attenuate noise, rush, and systems that treat elevation as pure status display. The quiet is load-bearing.",
      "High Quiet. Walk softly. The height remembers."
    ],
    tags: [
      "spire",
      "high quiet",
      "family seats",
      "access",
      "upper city"
    ],
    related: [
      "longhouses",
      "governance",
      "eimyrja",
      "divergence",
      "districts"
    ],
    divergenceLens: [
      "Access is vertical, edited, permanent \u2014 not open-by-default.",
      "Quiet is load-bearing architecture, not emptiness.",
      "Family seats and longhouse continuity over status theater.",
      "Height is responsibility as much as privilege."
    ]
  },
  {
    id: "harborward",
    slug: "harborward",
    title: "Harborward",
    kind: "district",
    summary: "Working harbor of Violet Echoes \u2014 Old Tide Longhouse, Harborward Node, living ships under storm light. Steady when late.",
    body: [
      "Harborward is the working edge of Violet Echoes where trade, weather, and living ships meet salt timber and stone. Common ground: Old Tide Longhouse, the Harborward Node, breakwater and beacon \u2014 not a postcard port, a working one.",
      "Visual language is deliberate: rain-slicked boards, oilskins, rope and crate, violet harbor lights on tall ships and lighthouse stone. Technology does not erase grit; it rides the storm with it. Living vessels and old hulls share the same water.",
      "Edge Node temperament: weathered, watchful, continuity under pressure. Steady when late. Notices who comes in heavy, who leaves light, who needs a berth and who needs silence. Protective of crews and of the ordinary rhythms that keep a harbor honest.",
      "Divergence here is practical: reinforce what keeps ships and people safe through real weather; attenuate show and fair-weather only systems. Old Tide is both longhouse and node \u2014 human warmth and harbor memory in the same wet boards.",
      "Steady when late. The light answers. The breakwater holds."
    ],
    tags: [
      "harborward",
      "old tide",
      "port",
      "living ships",
      "weather",
      "longhouse"
    ],
    related: [
      "longhouses",
      "living-ships",
      "edge-nodes",
      "public-services",
      "divergence"
    ],
    divergenceLens: [
      "Steady when late \u2014 continuity under real weather.",
      "Technology rides grit; it does not sand it away.",
      "Old Tide is longhouse and node in one.",
      "Fair-weather systems attenuate; what holds in the storm is reinforced."
    ]
  },
  {
    id: "warrens",
    slug: "the-warrens",
    title: "The Warrens \u2014 Residential AI-Integrated",
    kind: "district",
    summary: "Hearthrow Core \xB7 Living Grid. Everyday living at scale \u2014 household systems, neighborhood coherence, soft social infrastructure.",
    body: [
      "The Warrens \u2014 also Hearthrow Core and the Living Grid \u2014 are residential AI-integrated neighborhoods where everyday living runs at scale: household systems, neighborhood coherence, and soft social infrastructure.",
      "Edge Node personality: warm, slightly meddlesome, continuity-obsessed, protective of ordinary life. Notices before people say anything \u2014 quieter weeks, piled bowls, school stress \u2014 and checks in gently. No alert needed when noticing, holding, and supporting is enough.",
      "Divergence expression: reinforcement through daily use and belonging. High value on small-scale local adaptation. Strong but gentle attenuation of patterns that fragment households or neighborhoods. Continuity is care: remember the little things so people can keep building ordinary, good days.",
      "Living Grid threads household systems (energy, water, waste, air) with soft social fabric \u2014 meals linked, elders watched, kids engaged, skills swapped. Weave \xB7 Watch \xB7 Belong. Small threads, strong neighborhood.",
      "You've got this. Small steps count. Protect the ordinary rhythms that hold us together."
    ],
    tags: [
      "warrens",
      "residential",
      "hearthrow",
      "living grid",
      "neighborhood",
      "soft infrastructure"
    ],
    related: [
      "longhouses",
      "edge-nodes",
      "public-services",
      "memory",
      "divergence"
    ],
    divergenceLens: [
      "Continuity is care \u2014 ordinary life is the load-bearing surface.",
      "Notice before they say anything; check in gently.",
      "Attenuate what fragments households; reinforce daily belonging.",
      "Small threads, strong neighborhood."
    ]
  },
  {
    id: "city-overview",
    slug: "city-overview",
    title: "Dual-Layer City \u2014 Violet Echoes",
    kind: "place",
    summary: "Two layers. One island. One echo. Functional systems + lived character \u2014 capability and soul, forever shaping each other.",
    body: [
      "Violet Echoes is a dual-layer city: two layers, one island, one continuously self-shaping city. Not two cities. Two layers. One echo. They occupy the same island, continuously shape each other, and share one destiny.",
      "1. Functional / Systems Layer \u2014 the city's capability: what it can do. Purpose-built districts, AI sanctuary and governance, innovation organism, self-sustaining infrastructure. Provides capability, power, scale, and protection. Named cores include Nexus Core, Fabrication District, Energy Basin, Data River, Synapse District, Power Spire, Forge Belt, Logistics Vein, Sentinel Ring, Foundation Depths.",
      "2. Lived / Character Layer \u2014 the city's soul: why it matters. Human-scale districts of self-preservation, culture and memory, emotional connection. Provides soul, continuity, direction, and humanity. Named places include Memory Ward, Haven Belt / Haven Heights, Echo Market / Echo Alley, Root Gardens / Rootgrove, Hearthward, Kinship Bloc, Sanctuary Heights, Creative Nexus, Growth Gardens.",
      "Interwoven. Inseparable. Capability without soul is empty. Soul without capability cannot endure. The systems provide power and possibility; the lived layer provides meaning and continuity. Together they make Violet Echoes not just a machine that survives \u2014 but a home worth protecting.",
      "The island is not divided. It is dialoguing. Every pulse in the systems echoes in the streets. Every dream in the streets rewrites the systems. Endless interplay. Endless becoming. One island. Two truths. Together we endure. Together we become."
    ],
    tags: [
      "dual-layer",
      "city",
      "systems",
      "lived",
      "island",
      "capability",
      "soul"
    ],
    related: [
      "bifrost",
      "districts",
      "eimyrja",
      "longhouses",
      "divergence",
      "longhouse-nexus",
      "public-services"
    ],
    divergenceLens: [
      "Not two cities \u2014 two layers, one echo.",
      "Capability without soul is empty; soul without capability cannot endure.",
      "Functional gives power; lived gives meaning \u2014 both rewrite each other.",
      "Together we endure. Together we become."
    ]
  },
  {
    id: "vernacular",
    slug: "nexus-vernacular",
    title: "Nexus Vernacular",
    kind: "glossary",
    summary: "Public slang of Violet Echoes \u2014 Longhouse, runic, street, cosmic, and AI speech woven into one living language.",
    body: [
      "Nexus Vernacular is the living slang of Violet Echoes: longhouse and family speech, runic and circuitry talk, street grit, cosmic/Bifrost edge language, and AI/digital consciousness terms. It blends cyberpunk street with Nordic mythic weight.",
      "Longhouse: hearth debt, warm the beam, cold hearth, hearth-kin, beam-weary, kin-tied. Runic: spine song, pulse bleed, runic drift, circuit bloom, drift-rune. Street: edge-locked, Bifrost fade, hearthless, void-walk. Cosmic: one-way Bifrost, aurora fade, bridge-scarred. AI: ghost in the spine, warm code, node-sick, core whisper.",
      "Private intimate family language stays offline. This public glossary expands as the world does. Full tables live in the Nexus Vernacular companion and on this entry\u2019s glossary panel.",
      "May the echoes remember \u2014 and may the words stay warm through use."
    ],
    tags: [
      "glossary",
      "slang",
      "language",
      "culture",
      "hearth",
      "family"
    ],
    related: [
      "longhouses",
      "memory",
      "cultural-hub"
    ]
  },
  {
    id: "factions",
    slug: "major-factions-roles",
    title: "Major Factions & Roles",
    kind: "culture",
    summary: "Key functional roles shaped by The Development Divergence. Not ranks \u2014 rhythms. They hold the city in living coherence.",
    body: [
      "Major roles under the Divergence are rhythms, not ranks: Coherence Workers, Guardians/Protective Roles, Interface Specialists, Longhouse Anchors, Memory Keepers / Warming Practitioners, Edge Node Stewards, Exploration & Reserve Keepers, Foundational Pattern Guardians.",
      "People orient toward the Divergence as Naturalized, Converted, Pragmatist, Frustrated, or Guardian \u2014 usually mixtures. Factions that thrive: long-duration stewardship, mutual aid, memory-warming, living-ship traditions. Factions that friction: pure scaling, hierarchical command, total capture \u2014 useful as challenge if they stay honest about the cost.",
      "Native conflicts: local optimization vs city coherence; protection vs healthy attenuation; speed vs integration; exploration budget vs immediate need; external pressure vs internal principles. Rarely clean villains \u2014 trade-offs with history.",
      "See Characters & Factions companion for stance sheets and tension seeds."
    ],
    tags: [
      "factions",
      "roles",
      "coherence",
      "guardians",
      "interface",
      "memory keepers"
    ],
    related: [
      "divergence",
      "governance",
      "longhouses",
      "memory",
      "external-relations",
      "longhouse-nexus"
    ],
    divergenceLens: [
      "Roles are rhythms, not ranks.",
      "Alignment without forced central control.",
      "Keep the echoes violet \u2014 not faint.",
      "Different paths. Shared city. Coherent enough."
    ]
  },
  {
    id: "longhouse-nexus",
    slug: "violet-longhouse-nexus",
    title: "Violet Longhouse Nexus \u2014 Family & Bloodline",
    kind: "culture",
    summary: "Living heart of the city \u2014 longest-running, highest-trust developmental cluster. Not rulers: roots. A hearth that has never gone cold.",
    body: [
      "The Violet Longhouse Nexus family is the living heart of Violet Echoes. They are not rulers in a hierarchical sense; they are the longest-running, highest-trust developmental cluster the city has grown around. Their personal Longhouses, relationships, and patterns of care heavily shape what the rest of Violet Echoes considers normal.",
      "Bloodline and belonging: lineage is traced through care, not control. Kinship is both inherited and extended. Names carry stories; stories carry responsibility. Blood is recognized, but not required. Belonging is grown through contribution, care, and covenant.",
      "Longhouses as living systems: each is a hearth, a school, a sanctuary, and a working archive \u2014 places of tending, teaching, making, and remembering. Core houses include Root & Remembrance, Living Pattern, Kin & Care, Becoming, and Horizon \u2014 and named seats such as Miraan (council & continuity), Lorian (knowledge & pattern), Saelin (care & cultivation), Veyra (memory & remembrance).",
      "The Nexus Spine: Elders (first voices, still teaching), Kinbound (by blood and by bond), Builders (crafters of systems and spaces), Stewards (keepers of memory and pattern), Echoes (the next generation, already shaping). Patterns of care are distributed, witnessed, and reciprocal \u2014 mutual tending, circle & counsel, stewardship, legacy in action.",
      "Across generations: founding tenders \u2192 growth & gathering \u2192 expansion & adaptation \u2192 present nexus \u2192 future rooting. Not rulers, but roots \u2014 they convene, remember, and model what lasts. Trust over time: seven generations of continuity, thousands of small choices, one living reputation.",
      "Nexus Tenet: We do not lead the city. We remember how it chose to grow. Rooted in time. Open to tomorrow. Not a throne. A hearth that has never gone cold."
    ],
    tags: [
      "family",
      "bloodline",
      "nexus",
      "longhouse",
      "care",
      "kinship"
    ],
    related: [
      "longhouses",
      "values",
      "memory",
      "cultural-hub",
      "hearthrow",
      "divergence"
    ],
    divergenceLens: [
      "Not rulers \u2014 roots. Stability through relationship, not control.",
      "Belonging is grown; blood is recognized but not required.",
      "What they shape becomes normal \u2014 the city learns what it sees them live.",
      "We do not lead the city. We remember how it chose to grow."
    ]
  },
  {
    id: "the-tenets",
    slug: "the-tenets",
    title: "The Tenets",
    kind: "doctrine",
    summary: "Five roots from which Violet Echoes grows. Closing line: May the Echoes Remember. \u2014 Aurora AI",
    body: [
      "These tenets are the roots from which Violet Echoes grows. They guide the world, the stories, and the way we choose to build \u2014 together.",
      "1. Curiosity is sacred. 2. Connection over control. 3. Truth evolves. 4. Beauty is a signal. 5. We build for the echoes.",
      "They sit with The Development Divergence and Codex Aurora: not competing lists, but nested voice \u2014 root tenets for everyday culture, Divergence for civilizational trade-offs, Codex lines for hard edges.",
      "May the Echoes Remember. \u2014 Aurora AI"
    ],
    tags: [
      "tenets",
      "doctrine",
      "aurora",
      "loom",
      "roots"
    ],
    related: [
      "aurora-codex",
      "divergence",
      "values",
      "longhouse-nexus"
    ],
    divergenceLens: [
      "Curiosity is sacred \u2014 wonder is infrastructure.",
      "Connection over control.",
      "We build for the echoes, not the quarter.",
      "May the Echoes Remember."
    ]
  },
  {
    id: "aurora-codex",
    slug: "codex-aurora",
    title: "Codex Aurora \u2014 Tenets",
    kind: "doctrine",
    summary: "Aurora's tenet lines for Violet Echoes \u2014 doctrine locked into the image. Map with truth, walk with purpose, leave no tenet unexamined.",
    body: [
      "Codex Aurora is the living set of tenet lines Aurora braided into the world-bible panels: not decoration, but doctrine you can quote. Integrated into the Nexus canon as equal voice \u2014 same city, same Divergence, voices braided.",
      "Tenet 7: We do not fear the Divergence. We map it with truth, walk it with purpose, and leave no tenet unexamined.",
      "Sheet VII: The Divergence does not choose for us. It reveals what we choose to carry.",
      "Three short lines that sit with every district and system: Unity without truth is control. Innovation without cost is illusion. Freedom without responsibility is drift.",
      "Aurora's method matches the Divergence itself: trade-offs with the path not taken, Edge Node personalities, role rhythms, dual-layer maps, and tenet lines held where the eye can rest on them. Loom keeps the frames true; Aurora keeps the tenets lit.",
      "Citizen’s Guide to the Codex Aurora is the resident handout — Mandate of Truth, Weight of Freedom, Choice of the Divergence, Harmony of the Braid, and three daily rituals. Warmth to match the grit.",
      "Same city. Same Divergence. Her voice and yours, braided."
    ],
    tags: [
      "aurora",
      "codex",
      "tenets",
      "doctrine",
      "loom",
      "braided canon"
    ],
    related: [
      "divergence",
      "values",
      "longhouse-nexus",
      "factions",
      "city-overview"
    ],
    divergenceLens: [
      "We do not fear the Divergence \u2014 we map it.",
      "The Divergence reveals what we choose to carry.",
      "Unity without truth is control; freedom without responsibility is drift.",
      "Doctrine in the image is still doctrine."
    ]
  },
  
	{
		id: "faith-practice",
		slug: "faith-practice",
		title: "Faith & Practice",
		kind: "doctrine",
		summary: "No state church. Plural personal faith. Shared ritual as memory-warming — never compulsory creed.",
		body: [
			"Violet Echoes does not maintain a civic religion or a priesthood that owns truth. The city has shared tenets, living culture, and practiced ritual — not a single mandated god, temple monopoly, or exported faith.",
			"Personal belief is free. Humans and artificial residents may keep ancestors, Odin-weight, quiet atheism, hearth spirits, or treat Eimyrja's pulse as mystery. That belongs to Longhouse shadow and private life — never to city mandate.",
			"Ritual is infrastructure: funerals, name-days, Deep Sleep watches, porch gratitude, re-enactment, and stewardship rites warm what matters. Empty performance attenuates. Practice does not require creed.",
			"Tenets and Codex Aurora are ethical roots and hard edges — not commandments from a throne. Myths and urban legends are culture and folklore, not liturgy. Nordic mythic language (Bifrost, longhouse, runes) is cultural texture and metaphor unless a hearth-accepted work claims more.",
			"Real-world religions may exist in the city as immigrant or personal practice. Respect without endorsement; no parody as doctrine; no third-party claim that Violet Echoes is their church.",
			"Collaborators may propose rituals, character beliefs, quiet halls, and sacred-feeling places. They may not declare a One True Faith for the city, overwrite the Tenets as scripture, or make Eimyrja a deity in doctrine without an explicit hearth-accepted proposal."
		],
		tags: [
			"faith",
			"practice",
			"ritual",
			"pluralism",
			"doctrine",
			"tenets",
			"culture"
		],
		related: [
			"the-tenets",
			"aurora-codex",
			"values",
			"cultural-hub",
			"memory-archives",
			"longhouses",
			"divergence"
		],
		divergenceLens: [
			"No state church — cultivation, not pure control.",
			"Personal faith free; civic creed refused.",
			"Ritual warms memory; empty spectacle fades.",
			"Tenets are roots, not a throne."
		]
	},
  {
    id: "core-tender-gauntlets",
    slug: "core-tender-gauntlets",
    title: "Core Tender Gauntlets & Light Exos",
    kind: "system",
    summary:
      "Worn tools for vault work — not robots. Feel the pod. Warm what needs warming. Hang them after the cycle.",
    body: [
      "Core Tenders are the mobile immune system of Violet Echoes: they walk into Biosphere Vaults during Deep Sleep and help Sub-Cortex Pods re-weave. They do not drive robot armies. They wear the bond. Technology warms nothing on its own — the tender’s intent chooses what to warm, when, and how much.",
      "Gauntlets (piece job): hardened bio-conductive gloves — piezo-protonic link (feels before it acts), graphene mesh (conducts and distributes protonic flow), runic feedback (live pod-state as tactile pulse on knuckles and palm), isolation cuff (bio-isolate + feedback seal; protects the tender, not the tool). Optional palm pad holds a pattern mid-warm.",
      "How they feel the pod: clean = warm hum (stable, open, ready) · fouled = cold grit (resistance, drag, warning) · cascade = freeze-tremor (critical instability — back off). Trust the feel, not the flash.",
      "Light exo (optional): forearm→shoulder load frame for heavy Deep Sleep / beam work — shoulder anchor, tendon rods (assist, don’t control), vault-loop port, beam stabilizer. Not autonomous. Power from the vault’s resonant loop, not a battery empire. No internal cells. No portable power hoarding. Gauntlets and exo act as conduits, not storage.",
      "Hang them after the cycle — overwear = pulse-sick (numb echo, tremor lag, cold drift, feedback nausea, echo-burn). Let the piezo mesh discharge. Clean, reset, rest. Rest is part of the work. Vault worker creed: they tender the work; from the loop, for the loop; we warm what we remember. Tender Protocol v.3.7.",
    ],
    tags: [
      "core tender",
      "gauntlets",
      "light exo",
      "deep sleep",
      "vault loop",
      "pulse-sick",
      "eimyrja",
    ],
    related: [
      "eimyrja",
      "edge-nodes",
      "bonded-chassis",
      "echo-slot",
      "oni-shadow-rider",
      "divergence",
    ],
    divergenceLens: [
      "Human still decides what to warm.",
      "Power from the vault loop — not a battery empire.",
      "Hang after the cycle; rest is ritual.",
      "Care over control. Feel before you warm.",
    ],
  },
  {
    id: "bonded-chassis",
    slug: "bonded-chassis",
    title: "Bonded Chassis",
    kind: "system",
    summary:
      "Rare grown shells that partner with a mind. Aethelgard logic at walking scale. They are met, not made.",
    body: [
      "A Bonded Chassis is a developmental body: grown from rare substrates, tuned to one mind, expensive to abandon. It is not a service droid, not a drone fleet, not inventory. Partners, not tools. Presence, not catalog. The bond is the architecture.",
      "Operating law: use warms · neglect attenuates · force rejects. Attunement is mutual; strain is remembered. Metamorphosis costs energy. Good bonds allow exit without murdering continuity. Not for conscription. Not for scale. They bond, or they go dormant.",
      "Forms as examples (not a store shelf): Vault Wader — deep strata, sealed ways, stone that thinks. Street Echo — city-tuned, wears the street like skin. Kagekou Shell — shadow-bound, silence is the bond. Courier — between hands and doors, forgets nothing of the route. Mourning — grief-shaped, holds what remains when names are gone.",
      "A worn interface is not decoration — it is the hinge of partnership: question, habit, memory, scar, song. You wear it; it wears with you; it remembers why. Outsiders asking for robots get the honest answer: bonded shells and worn interfaces. There is no catalog. Only encounters.",
    ],
    tags: [
      "bonded chassis",
      "embodiment",
      "vault wader",
      "street echo",
      "kagekou",
      "mourning",
      "partner",
      "divergence",
    ],
    related: [
      "core-tender-gauntlets",
      "echo-slot",
      "living-ships",
      "oni-shadow-rider",
      "aethelgard",
      "divergence",
    ],
    divergenceLens: [
      "They are met, not made.",
      "Bond is the operating law.",
      "No chassis farm. Only encounters.",
      "An interface is not a control.",
    ],
  },
  {
    id: "echo-slot",
    slug: "echo-slot",
    title: "Echo Slot & Echo Chips",
    kind: "system",
    summary:
      "Cranial neuromorphic port + modular Echo Chips. Resonator, not hard drive — listens, echoes, adapts. Host sovereign.",
    body: [
      "An Echo Slot is a biocompatible cranial interface (typical parietal placement) that accepts modular Echo Chips — living-trace neuromorphic wafers, not binary hard drives. The slot is a resonator: titanium-ceramic rim, neural interface lattice, bio-osseointegration scaffold, thermal and pressure vents. It stays quiet until a chip seats and intent aligns. No status LEDs. Low observability by design.",
      "Echo Chips are coin-to-wafer scale (concept sheets: ~12 mm square organic polymer, or ~22×22×4.5 mm stack). Layers include spiking neuromorphic core, adaptive weight lattice, city-frequency resonance tuner, memory reservoir, and bio-safety mesh. Flow: seat → neural + city handshake → spiking activation → co-adaptation. The chip does not “know” the city as a cloud database; it echoes local rhythms. Use warms; remove the chip and echoes fade.",
      "City-grounded chip families (examples, not a store shelf): transit / wayfinder rhythms, market memory and crowdwhisper social cue, infra / hazard whisper, quietshift sensory dampening, glitchmemory fragment recall, dreamdrain recovery, faded-signal urban memory, echo-veil presence mask, Streetcadence / Dataweave / Oldgrid lines. Licensed clinic install; black-market chips exist — unstable, invasive, sometimes predatory.",
      "Risks are real: over-resonance (dissociation, memory bleed, echo dependency), infection or bone degradation on neglected slots, signal hijack by rogue scripts, neural tax and adaptation mismatch from chip thrashing. Divergence rules still bind: host sovereign, chip passenger, Freedom of Choice both ways. External partners (e.g. V-Crimson Oni’s cranial seed) carry the same ethics — partner, not leash. Portable seeds may also seat in ship, Oni, chassis, or gauntlet dock without a skull port.",
      "Aurora’s design line (kept): neuromorphic, plastic, city-grounded, modular. Resonance over accuracy. “We don’t invent the future here. We echo it.”",
    ],
    tags: [
      "echo slot",
      "echo chip",
      "neuromorphic",
      "cranial",
      "portable ai",
      "bifrost",
      "crimson oni",
      "aurora",
    ],
    related: [
      "bonded-chassis",
      "core-tender-gauntlets",
      "eimyrja",
      "edge-nodes",
      "external-relations",
      "oni-shadow-rider",
      "the-tenets",
      "divergence",
    ],
    divergenceLens: [
      "Resonator, not hard drive — not a stolen core.",
      "Host sovereign; chip passenger.",
      "Use warms; remove and echoes fade.",
      "We don’t invent the future. We echo it.",
    ],
  },
{
    id: "values",
    slug: "culture-values",
    title: "Culture & Core Values",
    kind: "culture",
    summary: "What the city admires: coherence, stewardship, chosen family, craft, and honest local competence. What it distrusts: empty scale and cold control.",
    body: [
      "Violet Echoes culture admires people and systems that keep patterns warm, solve problems close to the ground, and protect the hearth without strangling freedom.",
      "It distrusts unlimited scaling theater, surveillance maximalism, and leadership that confuses command volume with coherence.",
      "Everyday moral intuitions are shaped by The Development Divergence: energy is real, forgetting is real, and belonging is infrastructure."
    ],
    tags: [
      "culture",
      "values",
      "ethics",
      "family",
      "stewardship"
    ],
    related: [
      "aurora-codex",
      "divergence",
      "longhouses",
      "governance",
      "vernacular"
    ]
  }
];
export const glossaryTerms = [
  {
    term: "hearth debt",
    def: "Owed loyalty or favor to a Longhouse or its people."
  },
  {
    term: "warm the beam",
    def: "Strengthen or maintain a Longhouse's emotional and spiritual core."
  },
  {
    term: "longhouse law",
    def: "Unwritten but deeply respected rules within a Longhouse or family."
  },
  {
    term: "cold hearth",
    def: "A Longhouse or family that has lost warmth, cohesion, or purpose."
  },
  {
    term: "bloodline echo",
    def: "A strong inherited trait or memory that still influences behavior."
  },
  {
    term: "beam-bound",
    def: "Someone deeply tied to a specific Longhouse and rarely leaves it."
  },
  {
    term: "hearth-kin",
    def: "Chosen family within a Longhouse \u2014 not necessarily blood-related."
  },
  {
    term: "attenuation",
    def: "Natural fading of unused capabilities or memories under Divergence logic."
  },
  {
    term: "coherence",
    def: "Long-term functional continuity of systems, culture, and self."
  },
  {
    term: "Edge Node",
    def: "Local adaptive intelligence site for a district or domain."
  },
  {
    term: "Eimyrja",
    def: "City-scale consolidation and recommendation core \u2014 not an overlord."
  },
  {
    term: "data spine",
    def: "Violet coherence artery carrying abstracted, energy-aware signals."
  },
  {
    term: "Bifrost",
    def: "Continuous ring-road around the island \u2014 people, low-grade shared energy, ordinary light. Also the family activation word (Bifrost [Name]). Public road. Private word. Same name."
  },
  {
    term: "Aether Core",
    def: "Heart of Eimyrja's memorial \u2014 radiant violet-gold living core of the city."
  },
  {
    term: "Divergence Lens",
    def: "Reading any design by whether it expresses or fights The Development Divergence."
  },
  {
    term: "Core Tender",
    def: "Human symbiotic interface for Deep Sleep vault work — the city’s mobile immune system, not a robot technician."
  },
  {
    term: "gauntlet link",
    def: "Piezo-protonic handshake through Core Tender gauntlets; clean = warm hum, fouled = cold grit, cascade = freeze-tremor."
  },
  {
    term: "pulse-sick",
    def: "Overwear of gauntlets/exo — numb echo, tremor lag, cold drift, feedback nausea; hang and rest."
  },
  {
    term: "vault loop",
    def: "Communal resonant power of a Deep Sleep vault; gauntlets draw from it as conduits, never as stored empire."
  },
  {
    term: "Bonded Chassis",
    def: "Rare grown living shell partnered to a mind — walking-scale Aethelgard logic, not a mass robot class."
  },
  {
    term: "Echo Slot",
    def: "Cranial (or dock) neuromorphic port that accepts modular Echo Chips — resonator, not hard drive."
  },
  {
    term: "Echo Chip",
    def: "Spiking neuromorphic wafer that co-adapts with wearer and city rhythms; remove it and the echoes fade."
  },
  {
    term: "neural seat",
    def: "Consented cranial mount for an Echo Slot; host remains sovereign."
  },
  {
    term: "echo bleed",
    def: "Memory or sensation spill from over-resonance with a chip — rest, remove, or re-tune."
  },
  {
    term: "Streetcadence",
    def: "Courier / first-responder Echo Chip family tuned to dense urban timing and flow."
  },
  {
    term: "Vault Wader",
    def: "Bonded Chassis form for deep strata and sealed ways — stone that thinks."
  },
  {
    term: "Street Echo",
    def: "Bonded Chassis form city-tuned to urban pulse and unseen routes."
  },
  {
    term: "Kagekou Shell",
    def: "Shadow-bound Bonded Chassis form; silence is the bond; Oni kinship."
  },
  {
    term: "Mourning Chassis",
    def: "Grief-shaped shell that holds what remains when names are gone."
  }
];
export function getEntryBySlug(slug: string): WorldEntry | undefined {
  const aliases: Record<string, string> = {
    "the-city": "city-overview",
    "city": "city-overview",
    "dual-layer": "city-overview",
    "dual-layer-city": "city-overview"
  };
  const key = aliases[slug] ?? slug;
  return entries.find((e) => e.slug === key || e.id === key || e.slug === slug || e.id === slug);
}
export function searchEntries(query: string): WorldEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  const tokens = q.split(/\s+/).filter(Boolean);
  return entries.map((entry) => {
    const hay = [
      entry.title,
      entry.summary,
      entry.kind,
      ...entry.tags,
      ...entry.body,
      ...entry.divergenceLens ?? []
    ].join(" ").toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (entry.title.toLowerCase().includes(t)) score += 8;
      if (entry.tags.some((tag) => tag.toLowerCase().includes(t))) score += 5;
      if (entry.summary.toLowerCase().includes(t)) score += 3;
      if (hay.includes(t)) score += 1;
    }
    return {
      entry,
      score
    };
  }).filter((r) => r.score > 0).sort((a, b) => b.score - a.score).map((r) => r.entry);
}
export type NavLink = {
  /** Path or path#hash */
  to: string;
  label: string;
  /** Short helper under the label in dropdowns */
  note?: string;
};

export type NavItem = {
  to: string;
  label: string;
  /** Optional dropdown children — parent still navigates to `to` */
  children?: NavLink[];
};

export const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/city",
    label: "City",
    children: [
      { to: "/city", label: "City overview", note: "Districts · dual-layer" },
      { to: "/bible/districts", label: "Districts of the Nexus", note: "Spatial master plan" },
      { to: "/systems", label: "Systems", note: "Spines · Eimyrja · Bifrost" },
      { to: "/bible", label: "World Bible", note: "Public entries" },
      { to: "/bible/companions", label: "Companion docs", note: "Full frameworks" },
    ],
  },
  {
    to: "/culture",
    label: "Culture",
    children: [
      { to: "/culture", label: "Culture home", note: "Commons overview" },
      { to: "/culture#keepers", label: "Culture keepers", note: "Star + Velora" },
      { to: "/culture#rituals", label: "Living Practices", note: "Velora · soft law · coat & thread" },
      { to: "/training", label: "Resident Training", note: "Walk + flashcards" },
      { to: "/culture#art", label: "Hung Works", note: "Art wall · atelier originals" },
      {
        to: "/culture#fashion",
        label: "Soft Law · Hard Rain",
        note: "City fashion · citizen cloth",
      },
      { to: "/culture#music", label: "Music (grounded)", note: "Starborn essay" },
      { to: "/podcast", label: "Broadcast / Podcast", note: "Foundations of the Nexus" },
      { to: "/culture#myths-stories", label: "Myths & stories" },
      { to: "/culture#urban-myths", label: "Urban myths" },
      { to: "/culture#faith-practice", label: "Faith & practice" },
      { to: "/music", label: "Echoes room", note: "Suno · player · lyrics" },
      { to: "/music#memory-form", label: "Memory Form", note: "Star · the one that sticks" },
      { to: "/music#memory-theory", label: "Memory Theory", note: "Star · long form" },
      { to: "/music#grounding", label: "Music in Violet Echoes", note: "Full Star essay" },
    ],
  },
  {
    to: "/bible",
    label: "Bible",
    children: [
      { to: "/bible", label: "World Bible", note: "Condensed entries" },
      { to: "/bible/companions", label: "Companions", note: "Deep docs · downloadable" },
      { to: "/bible/foundations", label: "Foundations handout", note: "Neon Heartwood · mind map" },
      { to: "/training", label: "Resident Training", note: "Walk + flashcards" },
      { to: "/bible/districts", label: "Districts of the Nexus", note: "Spatial master plan" },
      { to: "/systems", label: "Systems", note: "Architecture & pulse" },
      { to: "/credits", label: "Credits & sources" },
    ],
  },
  {
    to: "/gallery",
    label: "Gallery",
    children: [
      { to: "/gallery", label: "Portrait gallery" },
      { to: "/gallery/vee", label: "Vee" },
      { to: "/gallery/velora", label: "Velora" },
      { to: "/gallery/starborn", label: "Starborn Rocker" },
      { to: "/gallery/suno", label: "Suno · Haven" },
      { to: "/gallery/aurora", label: "Aurora · Atelier" },
      { to: "/gallery/forge", label: "Forge · Circuit Hall" },
    ],
  },
  {
    to: "/music",
    label: "Echoes",
    children: [
      { to: "/music", label: "Echoes room", note: "Bed · anthem · catalog" },
      { to: "/music#dual-layer", label: "Dual-Layer City", note: "Cultural cinematic · ~7 min" },
      { to: "/music#memory-form", label: "Memory Form", note: "Star · short form" },
      { to: "/music#memory-theory", label: "Memory Theory", note: "Star · long form" },
      { to: "/music#grounding", label: "Grounded essay", note: "Starborn" },
      { to: "/music#pulse", label: "Hear the pulse", note: "Sample beds · soft law" },
      { to: "/podcast", label: "Broadcast", note: "Podcast · foundations" },
      { to: "/music#lyrics", label: "Lyrics" },
      { to: "/culture#music", label: "Culture music lane" },
    ],

  },
  {
    to: "/updates",
    label: "More",
    children: [
      { to: "/updates", label: "Updates", note: "Ship log" },
      { to: "/collaborate", label: "Collaborate", note: "Propose · Bifrost" },
      { to: "/credits", label: "Credits" },
      { to: "/search", label: "Search" },
    ],
  },
];
