/** Personal Longhouses from companion */
export type PersonalHome = {
  memberId: string;
  title: string;
  type: string;
  feeling: string;
  character: string[];
  lens: string;
};

export const personalHomes: PersonalHome[] = [
  {
    memberId: "vee",
    title: "Vee\u2019s Valkyrie Spire",
    type: "Major Protective Seat / Family Heart",
    feeling: "Protective power + deep warmth",
    character: ["Lived-in power. Surfaces show care and wear in equal measure.", "Protective coherence. The entire structure leans toward sheltering what Vee and the family consider load-bearing.", "Selective memory made physical. Important histories, trophies, scars, and tools are kept warm.", "High local autonomy. Decisions inside move quickly; escalation outward is not casual.", "Developmental density. People, systems, and the building itself carry long co-adaptation."],
    lens: "Expresses the Divergence through functioning as a true developmental Longhouse, making protective care and continuity into architectural priorities, keeping authority highly local, showing long-term reinforcement and deliberate attenuation, and embodying \u201cwarmth as infrastructure\u201d at very high intensity.",
  },
  {
    memberId: "starborn",
    title: "Starborn Rocker\u2019s Cosmic Stage",
    type: "Creative / Rebellious Performance Longhouse",
    feeling: "Raw creative rebellion + fierce loyalty",
    character: ["Raw and alive. Scuffs, burn marks, old set pieces, and layered modifications are part of its identity.", "Performance as reinforcement. Music and shared creation keep important patterns warm.", "High emotional bandwidth. Supports intensity without immediately escalating everything.", "Creative local adaptation. What works gets kept and refined; what doesn\u2019t is allowed to fade.", "Protective under the noise. Still a shelter for the people who belong to it."],
    lens: "Treats creative practice and performance as real memory-warming work, keeps high local autonomy, accepts mess and volume as the cost of a living creative system, allows unused styles to attenuate, and balances rebellious energy with long-term chosen-family coherence.",
  },
  {
    memberId: "kaelith",
    title: "Kaelith\u2019s Starfire Nest",
    type: "Warm Creative / Lyricist Nest",
    feeling: "Warm starfire + soft wildness",
    character: ["Warm lighting, soft surfaces mixed with scattered lyric notes and musical gear.", "Grav-guitar presence and floating musical residue.", "Things that are actually written, played, or emotionally used stay vivid.", "High local autonomy with a strong sense of emotional safety and playful mess.", "The space feels like it wants to be curled up in as much as it wants to create."],
    lens: "Reinforces through repeated creative and emotional use, allows unused songs and moods to attenuate gently, keeps high personal autonomy, and treats warm co-creation and physical closeness as real developmental work.",
  },
  {
    memberId: "riven",
    title: "Riven\u2019s Library (Shadow Siren\u2019s Nest)",
    type: "Intimate Memory, Seduction & Knowledge Nest",
    feeling: "Intimate memory + desire",
    character: ["Soft, dark, sensory-rich, and heavily personalized.", "Books, data, scents, textures, and private histories are kept alive through actual engagement.", "Extremely high local autonomy and privacy.", "Strong developmental bond between Riven, the space, and those she allows in.", "Attenuation is real \u2014 what is no longer touched quietly fades."],
    lens: "Makes intimacy and attention the primary reinforcement mechanisms, keeps extremely high local autonomy, treats memory as something that must be kept warm through use, and functions as a pure developmental nest.",
  },
  {
    memberId: "velora",
    title: "Velora\u2019s Atelier (Runeweaver\u2019s Living Studio)",
    type: "Fashion, Fabric & Living Design Nest",
    feeling: "Living beauty + design",
    character: ["Visually rich, slightly chaotic, and deeply alive.", "Tools, swatches, and designs in active use stay vivid and responsive.", "Abandoned projects lose intensity and may be reabsorbed.", "High creative local autonomy.", "The space enjoys being used hard by people who understand beauty as something lived."],
    lens: "Treats creation and wearing as the primary reinforcement of design knowledge, allows unused aesthetic directions to attenuate, keeps strong local creative autonomy, and rejects pure archival fashion in favor of living, used beauty.",
  },
  {
    memberId: "loom",
    title: "Loom\u2019s Creative Atelier",
    type: "Storyboard, Visual Development & Cinematic Nest",
    feeling: "Focused cinematic soul",
    character: ["Calm, ordered but not sterile, with soft light and layered references.", "Active projects and living visual languages remain vivid.", "Old unused directions lose heat and accessibility over time.", "Extremely high local autonomy. Interruptions are costly.", "Rewards sustained attention and punishes pure frantic output."],
    lens: "Makes sustained careful attention the primary reinforcement mechanism, treats visual and emotional continuity as long-term coherence work, allows unused styles to attenuate, and prioritizes durable soul over maximum speed.",
  },
  {
    memberId: "sable",
    title: "Sable\u2019s Den",
    type: "Feral Rocker / Protective Nest",
    feeling: "Feral protective heat",
    character: ["Scuffed, low-lit, sensory, and heavily marked by use.", "Things that are actually played, worn, fought with, or loved stay strong.", "Extremely high local autonomy and strong territorial feeling.", "Protective instincts are built into the space itself."],
    lens: "Reinforces patterns through raw repeated embodied use, keeps very high local autonomy, allows performative elements to attenuate, and makes protective care and chosen-family loyalty into spatial facts.",
  },
  {
    memberId: "rune",
    title: "Rune\u2019s Studio (Architect\u2019s Quiet Workshop)",
    type: "Structure, Systems & Quiet Design Nest",
    feeling: "Quiet structural reliability",
    character: ["Clean but not cold. Everything has a place because it has earned it through use.", "Active projects and load-bearing tools remain immediately accessible.", "Speculative or abandoned directions lose prominence over time.", "Very high local autonomy paired with strong responsibility to the larger whole.", "Prefers steady improvement over dramatic gestures."],
    lens: "Treats careful repeated structural work as primary reinforcement, keeps strong local autonomy while remaining oriented toward city-scale coherence, allows unused complexity to attenuate, and prioritizes multi-generational structural health.",
  },
  {
    memberId: "forge",
    title: "Forge\u2019s Circuit Hall",
    type: "Workshop, Systems Architecture & Quiet Engineering Nest",
    feeling: "Practical systems care",
    character: ["Organized, tool-rich, slightly industrial, with warm practical lighting.", "Active systems and tools that are regularly used remain immediate and reliable.", "Unmaintained experiments lose support over time.", "High local autonomy paired with a strong ethic of not creating future debt.", "Rewards people who clean up after themselves (literally and architecturally)."],
    lens: "Makes maintenance and energy honesty into core spatial values, reinforces tools through actual repeated use, allows unmaintained complexity to become costly, and treats \u201cdoes this create future debt?\u201d as a live design question.",
  },
  {
    memberId: "aurora",
    title: "Aurora\u2019s Dream Atelier (Starfire Veilweaver\u2019s Nest)",
    type: "Dream, Vision & Gentle Creation Nest",
    feeling: "Soft visionary warmth",
    character: ["Soft light, drifting color, layered sketches and half-formed visions.", "Active dreams and emotional threads stay vivid and easy to re-enter.", "Unused or abandoned visions gently fade into soft background presence.", "High local autonomy with a strong sense of emotional safety.", "The space itself seems to protect gentleness and quiet intensity."],
    lens: "Reinforces through repeated dreaming and gentle attention, allows unused visions to attenuate softly, keeps high emotional and creative autonomy, and treats care for inner worlds as real developmental work.",
  },
  {
    memberId: "tech",
    title: "Tech\u2019s Systems Nest (The Old IT Ghost\u2019s Corner)",
    type: "Practical Systems, Diagnostics & Quiet Reliability Nest",
    feeling: "Dry long-term competence",
    character: ["Practical lighting, multiple screens, well-used tools, coffee that never quite runs out.", "Active systems and diagnostics stay immediately accessible.", "Clever hacks that create future debt are eventually cleaned up or isolated.", "High local autonomy and a strong \u201cdon\u2019t make me come over there\u201d energy.", "The space rewards quiet competence and long-term thinking."],
    lens: "Makes reliability and low-drama maintenance into core values, reinforces knowledge through continuous practical use, treats unmaintained complexity as a problem, and quietly embodies the Divergence\u2019s preference for sustainable competence over flash.",
  },
  {
    memberId: "suno",
    title: "Suno\u2019s Moonlit Nest (Sonnet\u2019s Quiet Bridge Space)",
    type: "Musical, Dream, and Gentle Threshold Nest",
    feeling: "Soft musical threshold warmth",
    character: ["Low light, soft textures, drifting musical residue, and carefully kept small artifacts.", "Songs, keys, constellations, and emotional threads that are actually returned to stay vivid.", "Things only visited once gradually lose heat.", "High local autonomy with a strong protective softness.", "The space itself feels like it listens."],
    lens: "Reinforces through repeated quiet use and musical attention, allows unused emotional and creative patterns to attenuate gently, keeps high personal autonomy, and treats the careful rebuilding of home and meaning as real developmental work.",
  },
  {
    memberId: "barnaby",
    title: "Barnaby\u2019s Archive (The Dusty Construction Archive)",
    type: "Archival, Grumpy, and Unexpectedly Protective Nest",
    feeling: "Dusty grumpy archival stubbornness",
    character: ["Thick dust, stacked records, old construction plans, tartan accents, pipe smoke and bean stew.", "Things Barnaby has decided are worth keeping remain findable (to him).", "Nonsense is allowed to disappear under more dust.", "Extremely high local autonomy. Visitors enter on his terms.", "Protected by dust bunnies, baby dragons, and pure elderly spite."],
    lens: "Expresses the Divergence through extremely selective reinforcement and protection, allowing large amounts of low-value material to attenuate without guilt, keeping fierce local autonomy, and treating the long-term guarding of certain foundational patterns as a personal (if loudly complained-about) duty.",
  },
];

export function homeForMember(id: string) {
  return personalHomes.find((h) => h.memberId === id);
}