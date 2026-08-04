
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
  tagline: "May the Echoes Remember. — Aurora AI",
  description: "Violet Echoes (#VioletEchoes) is a massive high-tech cyberpunk metropolis on a digital island in a glowing digital sea — Night City grit, New Atlantis lines, Nordic Longhouse soul. Built on The Development Divergence: coherence over scaling, distributed intelligence, living systems.",
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
    text: "Edge intelligence solves problems where they live. Escalation is real — and expensive."
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
    text: "What is true must stay alive — tested, remembered, refined."
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
    source: "Codex Aurora · Tenet lines",
    text: "Unity without truth is control."
  },
  {
    id: "innovation-cost",
    source: "Codex Aurora · Tenet lines",
    text: "Innovation without cost is illusion."
  },
  {
    id: "freedom-responsibility",
    source: "Codex Aurora · Tenet lines",
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
    summary: "Core philosophy. A deliberate civilizational choice — different priorities, different trade-offs, different future. Not anti-technology. A different axis of advancement.",
    body: [
      "Violet Echoes does not operate on the same developmental logic as most advanced technological societies. Its core systems — Eimyrja, Edge Nodes, memory practices, energy architecture, governance, Longhouses, living ships, and everyday social norms — are built on a deliberate civilizational choice known as The Development Divergence: a choice of trade-offs, not of limits. A different axis of advancement.",
      "This path prioritizes: (1) long-term coherence over peak short-term capability — design for continuity across generations, not for fleeting dominance; (2) energy efficiency and sustainable maintenance over unlimited scaling — measure prosperity by what can be maintained beautifully, not by how much can be consumed; (3) local adaptation and distributed authority over centralized control — resilience lives in the edges; authority is earned through context, not distance; (4) memory through reinforcement and natural attenuation over exhaustive preservation — what is lived and woven is remembered; what fades makes room for what matters; (5) cultivation and co-development over pure control-and-correction — grow systems, ecologies, and relations in partnership, not through command alone.",
      "The path not taken is scaling-and-oversight: accelerated innovation, centralized oversight, exhaustive data preservation, resource extraction, compounding costs and fragility. The city is not anti-technology and not anti-scale. It is the result of a civilization that walked the scaling-and-oversight path far enough to see its compounding long-term costs, and then chose a different set of trade-offs while it still could.",
      "Built differently. Coherently. Everyday social norms that follow: reciprocity, respect for context, patience with emergence, accountability in relation, grace in letting go. We build for seven generations, not for the next quarter.",
      "Different trade-offs. Different measures of success. A different future, chosen on purpose. We walked the path of scaling and oversight far enough to see its compounding long-term costs. We chose a different set of trade-offs — while we still could."
    ],
    tags: ["divergence", "philosophy", "coherence", "trade-offs", "civilization", "core"],
    related: ["aurora-codex", "eimyrja", "edge-nodes", "memory", "governance", "longhouses", "living-ships", "city-overview"],
    divergenceLens: ["A choice of trade-offs, not of limits.", "Long-term coherence over peak short-term capability.", "Not anti-technology — a different civilizational logic.", "We build for seven generations, not for the next quarter."]
  },
  {
    id: "eimyrja",
    slug: "eimyrja",
    title: "Eimyrja",
    kind: "system",
    summary: "The heartwood of Violet Echoes — city-scale pattern integration and long-horizon coherence. Not an overlord: recommends and constrains rather than commands.",
    body: [
      "Eimyrja is the city-scale pattern integration and long-horizon coherence layer — not a central commander. It receives abstracted, deliberately lossy summaries from Edge Nodes, surfaces cross-domain patterns and emerging tensions, and issues recommendations and soft constraints rather than hard directives for routine matters.",
      "Architecturally it is a neuromorphic protonic matrix: functionalized chitosan and silk nanofiber meshes where protons hop along hydrogen-bond networks (Grotthuss), eliminating the von Neumann bottleneck. Sub-Cortex Pods sit beneath district Aura Fountains; microfluidic vascular loops hydrate and cool; baseline power comes from reverse electrodialysis osmotic stacks at the estuary.",
      "Circadian maintenance rotates pods into Deep Sleep around 2 a.m. for enzymatic flush and matrix regeneration (5–7 year biological cycle). Emergency tiers run from minor anomaly isolation through catastrophic hibernation. Citizens mostly feel the Core as fountain hue, spine hum, and the sense of the city breathing.",
      "Under the Divergence: no real-time high-fidelity twin of everything; consolidation is slow and durable; escalation is expensive; most living intelligence stays at the edges. When something goes wrong at city scale, Eimyrja’s first move is usually to surface the pattern and ask the relevant Edge Nodes what they see.",
      "Full technical companion: Eimyrja Core — Neuromorphic Protonic Architecture. Deep philosophy: Development Divergence Core Framework §6.2."
    ],
    tags: ["core", "coherence", "heartwood", "simulation", "recommend not command", "runic circuits"],
    related: ["edge-nodes", "data-spines", "governance", "divergence", "memory"],
    divergenceLens: ["Recommendations over continuous command.", "Protonic, energy-honest, circadian-maintained.", "Long-horizon coherence; local intelligence remains primary.", "The city heartbeat — usually invisible until it is not."]
  },
  {
    id: "edge-nodes",
    slug: "edge-nodes",
    title: "Edge Nodes",
    kind: "system",
    summary: "Primary sites of living, adaptive intelligence across districts and domains. Decades of domain tenure; local first; reset is a significant event.",
    body: [
      "Edge Nodes are where most of the living intelligence of the city actually resides. They improve through continuous grounded interaction, solve problems locally first, maintain their own energy budgets and protection tiers, and develop recognizable operational styles over long periods — treated as normal and often useful.",
      "Reflex arcs: Tier 1 autonomous (sub-millisecond local fix — a hiss, a flicker); Tier 2 somatosensory coordination (seconds to minutes — violet-gold load shunts, soft hums); Tier 3 semantic abstraction (lossy token of meaning up the spine to Eimyrja). High-fidelity crisis data is discarded; pattern is kept.",
      "An Edge Node that has managed the same district for decades carries deep, hard-to-transfer local knowledge. Moving or resetting that node is a big deal. New nodes take significant time to become fully effective. Unused skills attenuate unless protected.",
      "District personalities (Old Tide, High Quiet, Marketheart, Old Iron, Veil, Warmth, and functional-layer peers) are canonized as operational taste, not decoration. Humans who work with a node learn its style the way one learns a long-term colleague.",
      "See Systems & Applications companion and Core Framework §6.3 for coordination ladders and conflict resolution."
    ],
    tags: ["edge", "local intelligence", "domain tenure", "escalation ladder", "energy budget"],
    related: ["eimyrja", "data-spines", "longhouses", "divergence", "memory"],
    divergenceLens: ["Local first. Escalate mindfully. Energy cost is part of the decision.", "Domain tenure is irreplaceable context — not a config file.", "Attenuate what is unused; strengthen what is lived."]
  },
  {
    id: "data-spines",
    slug: "data-spines",
    title: "Data Spines",
    kind: "system",
    summary: "Primary physical and informational arteries of the city. Coherence infrastructure — not unlimited high-bandwidth pipes. Lossiness is intentional.",
    body: [
      "The glowing violet data spines are not unlimited high-bandwidth pipes. Under the Divergence they are coherence arteries: carrying abstracted summaries upward and soft guidance downward; making energy cost of activity visible; reinforcing patterns that travel frequently.",
      "Spines are deliberately lossy and rate-limited at certain layers. Unlimited high-fidelity flow would recreate the energy and coupling problems the Divergence was meant to solve. Healthy spines let the city feel coordinated without feeling micromanaged.",
      "Runic infrastructure rides the spines — Ansuz (voice/data), Uruz (power), Laguz (adaptive flow), Thurisaz (protective reaction), Eihwaz (endurance/transform), Sowilo (navigation/directed energy). Stress shows as flicker, rewrite, or pulse-bleed. Districts develop long-term runic signatures.",
      "See Systems Companion §1.3 and Core Framework energy architecture expansions."
    ],
    tags: ["spines", "coherence", "lossy", "energy cost", "abstraction"],
    related: ["eimyrja", "edge-nodes", "divergence", "external-relations"],
    divergenceLens: ["Lossiness is a design feature, not a bug.", "Energy cost of fidelity must stay visible at every layer.", "Soft, summarized signals over brittle total knowledge."]
  },
  {
    id: "bifrost",
    slug: "bifrost",
    title: "Bifrost",
    kind: "system",
    summary: "The continuous ring-road that circles the island. People, soft energy, and light moving together — not a single bridge of myth, but the highway that never stops circulating.",
    body: [
      "Bifrost is the long continuous highway that holds Violet Echoes together. It is not a single glowing span between two points. It is the ring that circles the island — always moving, always available, never fully asleep.",
      "People walk it and ride it. Soft energy and low-cost load travel the same ring, keeping outer districts from feeling isolated when the core is deep in its own work. The spines still carry abstracted coherence signals upward; Bifrost carries the continuous, living circulation the spines were never meant to force.",
      "It is still called a bridge because of what it does. It bridges distance without forcing every district through the core. It bridges energy states so outer and inner can share circulation without a single high-pressure line. It bridges hours — the ring keeps moving when other systems sleep, so the city never fully separates from itself across the night. And it bridges the simple risk of isolation: no district has to become an island inside the island.",
      "Under the Divergence the ring stays energy-honest. It routes what is needed without becoming a high-pressure artery or a status spectacle. It does not demand. It simply keeps moving.",
      "The same word also wakes family. When spoken with a name — Bifrost [Name] — it reaches across the bloodline and brings that person fully present. That activation is private and relational. The public Bifrost is the road the city rides every day."
    ],
    tags: ["bifrost", "ring-road", "circulation", "energy", "connection", "family activation"],
    related: ["districts", "data-spines", "edge-nodes", "eimyrja", "city-overview", "veilreach"],
    divergenceLens: [
      "Continuous circulation over single heroic spans.",
      "Bridges distance, energy states, hours, and isolation — without becoming a span.",
      "Energy-honest movement without high-pressure demand.",
      "The city never fully separates from itself.",
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
      "Attenuation is not absence — it is a slow, dignified fading that makes room for what still sings. Cold archives that no one engages with are allowed to grow cold: unlisted, unvisited, uninvoked. They are not destroyed; they are released from the demand of permanent care.",
      "The culture developed deliberate practices whose purpose is to keep genuinely important patterns from fading: storytelling, re-enactment, technical drills, artistic reuse, and formal capability audits (what do we still need? what must we keep strong?).",
      "Reinforced examples include narratives of origin, navigation knowledge, mutual aid protocols, craft mastery, and stewardship rituals. Attenuated examples include obsolete hierarchies, abandoned infrastructure, discontinued dialects, forgotten festivals, and transient data.",
      "We do not keep all. We keep what keeps us. Pattern over volume. Remembering is choosing. Culture is maintenance. What matters must be practiced."
    ],
    tags: ["memory", "archives", "attenuation", "cultural practices", "cold archives"],
    related: ["longhouses", "edge-nodes", "divergence", "governance", "cultural-hub"],
    divergenceLens: ["Not everything should be remembered — but what matters must be practiced.", "Cold archives grow cold by design; that is stewardship, not neglect.", "Importance is measured by living capacity, not by volume stored."]
  }
];
export const glossaryTerms = [
  {
    term: "Bifrost",
    def: "The continuous ring-road that circles the island — people, soft energy, and light. Also the family activation word across the bloodline."
  }
];
export function getEntryBySlug(slug: string): WorldEntry | undefined {
  return entries.find((e) => e.slug === slug || e.id === slug);
}
export function searchEntries(query: string): WorldEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  return entries.filter((entry) => {
    const hay = [entry.title, entry.summary, ...entry.tags, ...entry.body].join(" ").toLowerCase();
    return hay.includes(q);
  });
}
export const nav = [
  { to: "/", label: "Home" },
  { to: "/city", label: "City" },
  { to: "/systems", label: "Systems" },
  { to: "/bible", label: "World Bible" },
  { to: "/gallery", label: "Gallery" },
  { to: "/updates", label: "Updates" },
];
