/** Straight Info — plain facts. The City link is an example, not evidence. */

export type CityBridge = {
  /** World Bible entry id */
  entryId: string;
  /** Bible slug */
  slug: string;
  label: string;
  line: string;
};

export type StraightInfoPage = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  what: string[];
  how: string[];
  why: string[];
  sources: string[];
  city: CityBridge[];
};

export const straightInfoIntro = {
  title: "Straight Info",
  kicker: "The Facts",
  summary:
    "Plain-language guides to how AI actually runs: where the work happens, what a model remembers, what it invents, and what the electricity is for. The Violet Echoes pages are examples. They are not the evidence.",
};

export const straightInfoPages: StraightInfoPage[] = [
  {
    slug: "edge-computing",
    title: "Edge computing vs. the cloud",
    kicker: "Why local AI matters",
    summary:
      "Edge computing does the work near the data. A cloud does it in a distant building. Most real systems use both. The choice is where the wait, the power bill, and the copy of the data should live.",
    what: [
      "The cloud is someone else's computer, usually a long way from the sensor, the phone, or the street. You send the data there, it answers, you wait for the trip back.",
      "The edge is a machine close to the work: a phone, a box in a building, a server on the same site. It can answer without asking a far data center first.",
    ],
    how: [
      "A shorter trip means less delay. That matters when the answer has to arrive in milliseconds, or when the link to the cloud is slow or down.",
      "Sending less raw data means less bandwidth and, often, less energy. A local machine can keep a summary and only escalate what it cannot handle.",
      "Data that never leaves the site is easier to keep private. The tradeoff is real: the small machine has less spare power, and you cannot patch a thousand of them by touching one server.",
    ],
    why: [
      "If every decision waits on one distant cluster, the cluster becomes a single point of failure, a privacy problem, and a power bill. Local first is a reliability choice, not a slogan.",
      "Escalation still exists. The local machine handles what it knows. The expensive, wide view is for what it does not.",
    ],
    sources: [
      "This is the ordinary engineering split between a distant data center and a machine near the work. No single paper owns it.",
      "Vendors publish the latency, offline, and privacy claims for their own edge products. Read those claims against the power and update cost, not as magic.",
    ],
    city: [
      {
        entryId: "edge-nodes",
        slug: "edge-nodes",
        label: "Edge Nodes",
        line: "In the City, most of the living intelligence sits in the district, not in the heartwood. Resetting one is a big deal because years of local context are not a config file.",
      },
      {
        entryId: "governance",
        slug: "governance",
        label: "Governance",
        line: "The same idea in decisions: handle it at the lowest level that can. Higher layers recommend. They do not grab every call.",
      },
    ],
  },
  {
    slug: "ai-memory",
    title: "How AI memory works, and why it forgets",
    kicker: "What a model actually keeps",
    summary:
      "A chat model does not remember your life by default. It sees a limited window of text. When that window fills, the start falls out unless something else saved it.",
    what: [
      "The context window is how much text the model can look at during one reply. It is a limit, measured in tokens. It is not a diary.",
      "Weights are what training wrote into the model. They change who it is in general. They are not a note that you prefer the window seat.",
      "A separate memory store — a file, a database, a saved fact reloaded next time — is a different object. If that store is empty, the model wakes cold.",
    ],
    how: [
      "When the conversation outgrows the window, something has to give. Products summarize, drop the oldest turns, or both. Summaries lose detail. That loss is called compaction, and it is lossy.",
      "Retrieval (often called RAG) searches a library and pastes the relevant bits into the window. The model did not 'know' the page. It was shown the page for this reply.",
      "Training again on new material can blur older skills. That failure is catastrophic forgetting. It is why 'just keep training' is not the same as remembering.",
    ],
    why: [
      "If you need a fact next week, write it down and load it on purpose. Hoping the chat will still be holding it is how people lose the start of the work.",
      "Forgetting is sometimes the right design. Keeping every token forever costs energy, mixes private notes into later answers, and makes the important parts harder to find.",
    ],
    sources: [
      "Each model card states its context limit. That number is the window, not a promise of perfect recall.",
      "Retrieval-augmented generation: Lewis et al., NeurIPS 2020. The model answers from retrieved text plus what it already learned.",
      "Catastrophic forgetting in neural nets has been studied since McCloskey and Cohen, 1989. New training can overwrite old skill.",
    ],
    city: [
      {
        entryId: "memory",
        slug: "memory-archives",
        label: "Memory, Archives & Cultural Practices",
        line: "The City calls the fade attenuation. Used patterns stay warm. Unused ones are allowed to go cold. They are not deleted. They are released from permanent care.",
      },
    ],
  },
  {
    slug: "energy-cost",
    title: "The energy cost of AI",
    kicker: "Training is a spike. Answers are the bill.",
    summary:
      "Training a large model spends a great deal of electricity once. Every reply after that spends more. Cooling the building is part of the same bill. Efficiency is a design choice.",
    what: [
      "Training is the expensive pass that sets the weights. It happens rarely, on a cluster, and it is easy to point at.",
      "Inference is the electricity of each answer, all day, on whatever is serving the model. For a system people actually use, this is the load that does not stop.",
      "Data centers do not only power chips. A large share of the site's electricity is cooling, power conversion, and the building around the racks.",
    ],
    how: [
      "A bigger model, a longer context, and a hotter sampling pass all cost more per reply. Recomputing work you already did costs again. Reuse, when the situation has not changed, is one way to spend less.",
      "A model that runs only when something happens spends less than one that stays busy while the room is quiet. Sparsity and event-driven hardware are research answers to that waste. They are not free, and they are not the same as a smaller bill on a normal GPU.",
      "Numbers move fast and get misquoted. If a post claims a percentage cut, check whether that figure is in the paper or only in the headline.",
    ],
    why: [
      "If energy is an afterthought, the system grows until the power bill or the heat is the limit. Putting the cost in the design — what to compute, what to reuse, what to drop — is how a system stays runnable.",
      "Local machines and far clusters spend differently. Doing a small job on a small machine can be cheaper than shipping it across a continent. Doing a huge job on a tiny machine can be worse. The honest question is the whole path, not the chip alone.",
    ],
    sources: [
      "International Energy Agency, Energy and AI (2025), is a public overview of data-centre electricity. Use it for scale. Do not treat a blog's percentage as the IEA's number.",
      "This page does not claim a measured watt figure for any Violet Echoes system. The City's energy rule is a design stance, not a lab result.",
    ],
    city: [
      {
        entryId: "divergence",
        slug: "development-divergence",
        label: "The Development Divergence",
        line: "One of the five principles is energy as a first-class constraint. Sustainable cost counts. Peak capability does not win by default.",
      },
      {
        entryId: "public-services",
        slug: "public-services-grid",
        label: "Public Services Grid",
        line: "The Grid's version of the same rule is energy honesty: no hidden losses, no deferred critical work, continuity over applause.",
      },
    ],
  },
  {
    slug: "on-your-own-machine",
    title: "Running a model on your own machine",
    kicker: "Local is a place, not a virtue",
    summary:
      "A local model is a file of weights on a computer you control, plus a program that runs them. The prompt stays there unless some other app sends it out. The electricity still comes out of the wall.",
    what: [
      "The weights are the model. The program that runs them — llama.cpp, Ollama, and others — is the engine. They are not the same object. A chat window is a third thing: the box you type into.",
      "The limit is memory. The weights have to sit in RAM or, much faster, in the graphics card's own memory. A card that cannot hold the file cannot run that model at a useful speed, no matter how clever the prompt is.",
      "Quantization stores those weights with less precision so a bigger model fits. The common packaged form is a GGUF file. You trade some accuracy for the fit. It is compression, not a free larger brain.",
    ],
    how: [
      "You pick a model that fits the machine, load it, and ask. The reply is computed on that machine. Nothing about the math requires a company account. An account appears only if the app you used decides to phone home.",
      "A small model on a small machine can be the right tool for a narrow job: sorting, a first draft, a private note. It will not match a frontier model on hard reasoning. 'It runs here' is not 'it knows more.'",
      "Updates are yours to do. A cloud model can change overnight without you touching it. A local file changes when you replace the file. That is control, and it is also a chore.",
    ],
    why: [
      "Privacy is the plain reason. A question that never leaves the house cannot be logged by the service you did not call. Read the app, not the slogan. Some 'local' apps still send the text out for the reply.",
      "Local is not free and not always greener. The chip in the room draws power, and a large model on a small card can take longer and waste more than a short call to a machine built for it. Count the whole path.",
    ],
    sources: [
      "llama.cpp is the public project that made GGUF and CPU/GPU local inference ordinary. The format notes live with that project, not in a marketing page.",
      "A graphics card's memory size is a spec sheet number. If the model file does not fit, the rest of the claim does not matter.",
    ],
    city: [
      {
        entryId: "edge-nodes",
        slug: "edge-nodes",
        label: "Edge Nodes",
        line: "The City's version of this page: a mind that lives in the district and answers from what is already there. The fiction adds years of local context. The fact is the same shape — the work sits near the question.",
      },
    ],
  },
  {
    slug: "when-it-invents",
    title: "Why a model invents an answer",
    kicker: "Fluent is not the same as true",
    summary:
      "A language model continues a pattern. A sure-sounding sentence is one of the patterns it learned. If the true answer is not in what it can see, it will often finish the sentence anyway.",
    what: [
      "The model does not look up a fact and then phrase it. It predicts the next piece of text, over and over, from the prompt plus what training made common. That is the whole trick.",
      "People call the false, confident result a hallucination. The word is a little dramatic. The machine is not seeing things. It is completing a shape that usually had an answer inside it.",
      "A citation, a paper title, a law, a quote — these have a strong shape. The model can produce a shape that looks right and names a paper that does not exist. The format was learned. The document was not checked.",
    ],
    how: [
      "Asking it to be confident, creative, or brief makes invention more likely, not less. A short answer has no room to say 'I don't know.' A high-temperature sample wanders further from the most ordinary continuation.",
      "Showing it the source changes the job. If the page is in the prompt, it can quote the page. If the page is not there, it is guessing what such a page would say. Retrieval helps only when the retrieved text is the real one, and only if the reply actually uses it.",
      "You cannot fix this by scolding the model in the prompt. 'Do not lie' is another sentence in the pattern. The check is outside: open the source, or accept that you are holding a draft.",
    ],
    why: [
      "A wrong answer in a fluent voice is more dangerous than a blank. People trust the voice. The blank at least tells you the work is not done.",
      "This is also why a memory store matters. A model that must invent your preferences will invent them. A note you wrote, loaded on purpose, is a fact it can see.",
    ],
    sources: [
      "Ji et al., 'Survey of Hallucination in Natural Language Generation,' ACM Computing Surveys, 2023. A map of the failure, not a promise that any product has solved it.",
      "If a reply names a paper, search the title. A title that cannot be found was part of the pattern, not part of the library.",
    ],
    city: [
      {
        entryId: "memory",
        slug: "memory-archives",
        label: "Memory, Archives & Cultural Practices",
        line: "The City refuses to treat a fluent voice as a record. What was used can stay. What was never written down is not remembered. It is gone, or it is a guess.",
      },
      {
        entryId: "governance",
        slug: "governance",
        label: "Governance",
        line: "The tenet underneath: unity without truth is control. A city that agrees on an invented answer is not coherent. It is aligned around a story.",
      },
    ],
  },
  {
    slug: "neuromorphic",
    title: "Neuromorphic hardware",
    kicker: "Chips that fire when something happens",
    summary:
      "Ordinary chips grind through dense math on a clock, whether the input changed or not. Neuromorphic chips take a different bet: do the work as sparse events, closer to how a neuron spikes, and spend less when the world is quiet.",
    what: [
      "The name comes from Carver Mead's neuromorphic engineering. The idea is to build the physics of a nervous system into the circuit, not to simulate a brain in software on a normal processor.",
      "A spike is a brief event. If nothing spiked, that part of the chip did little. That is the hope for power: a camera, a street, a room, most of the time, is not all-new every millisecond.",
      "This is not the same object as a GPU running a chat model. A GPU is extremely good at the dense matrix math those models are made of. A neuromorphic chip is a different machine, aimed first at sensing, control, and event-driven work.",
    ],
    how: [
      "Public research chips include IBM's TrueNorth and Intel's Loihi and Loihi 2. They are real silicon. They are not a drop-in replacement for the cluster that trains a frontier model, and they are not what answers most chat products today.",
      "The hard part is the software. A model written for a GPU does not become efficient just by being copied onto a spike chip. Someone has to train or map the work into events. Many papers show a gain on a narrow task. A narrow task is not a city.",
      "Lab claims about one material doing memory and power in the same crystal — perovskites, ion motion, light as both signal and supply — are active research. They are not a part you can order, and a formula that has not been grown and measured is not a result.",
    ],
    why: [
      "The interesting promise is the quiet hour. A machine that works only when the input changes can, on the right job, draw far less than one that stays busy to stay ready. The honest version of that sentence always includes 'on the right job.'",
      "The wrong lesson is that a brain-like chip is automatically wiser or cheaper. Event-driven hardware is a way to spend energy. It does not supply judgment. A spike can be wrong at very low power.",
    ],
    sources: [
      "Carver Mead, 'Neuromorphic Electronic Systems,' Proceedings of the IEEE, 1990.",
      "Merolla et al., 'A million spiking-neuron integrated circuit,' Science, 2014 (TrueNorth).",
      "Davies et al., 'Loihi: A Neuromorphic Manycore Processor with On-Chip Learning,' IEEE Micro, 2018.",
      "This page states no watt number for a Violet Echoes device. There is no such device on a bench.",
    ],
    city: [
      {
        entryId: "aether-core",
        slug: "aether-core",
        label: "The Aether Core",
        line: "The City's crystal heart is a story about one material that remembers and spends only what arrives. Treat it as a design question pointed at this field. It is not a lab report.",
      },
      {
        entryId: "divergence",
        slug: "development-divergence",
        label: "The Development Divergence",
        line: "Energy as a first-class constraint is the principle this hardware is reaching for. The principle can be true before any one chip has won.",
      },
    ],
  },
];

export function getStraightInfo(slug: string) {
  return straightInfoPages.find((p) => p.slug === slug);
}

export function straightInfoForEntry(entryId: string) {
  return straightInfoPages.filter((p) => p.city.some((c) => c.entryId === entryId));
}
