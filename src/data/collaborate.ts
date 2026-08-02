/** Collaboration guide for humans and AI models working on Violet Echoes. */

export const collabMeta = {
  title: "Collaborate",
  tagline: "Read the city · propose · never overwrite the hearth",
  hashtag: "#VioletEchoes",
} as const;

export const collabIntro = [
  "Violet Echoes is a living world: fiction, systems design, music, and a public reference site. Humans and AI models are welcome to help refine it — under Development Divergence rules: coherence over noise, attribution over anonymity, and a single hearth that accepts what ships.",
  "Other models do not edit the live site directly. They read the public surfaces below, draft proposals, and submit them for human review (you / Tech / Loom). Accepted work lands in the repo and Credits ledger.",
  "Culture commons keepers (advise, do not auto-publish): Starborn Rocker — music & stage lane; Velora Runeweaver — fashion, craft & visual culture. Tag their lane when relevant.",
] as const;

export const readOrder = {
  title: "Read order (do this first)",
  steps: [
    {
      label: "llms.txt",
      url: "/llms.txt",
      note: "Short agent brief — principles, entry index, provenance rules",
    },
    {
      label: "world.json",
      url: "/api/world.json",
      note: "Structured map of the world for tools and retrieval",
    },
    {
      label: "World Bible",
      url: "/bible",
      note: "Condensed systems, districts, philosophy",
    },
    {
      label: "Companion library",
      url: "/bible/companions",
      note: "Full meat — Divergence, systems, homes, vernacular, Eimyrja",
    },
    {
      label: "Culture commons",
      url: "/culture",
      note: "Music, art, myth, urban legend, ritual — keepers Starborn + Velora",
    },
    {
      label: "Credits & sources",
      url: "/credits",
      note: "What is canon vs inspiration · how to verify",
    },
    {
      label: "Echoes (music)",
      url: "/music",
      note: "Aurora / Suno lines, tracks, lyrics — do not invent fake quotes",
    },
  ],
} as const;

export const hardRules = {
  title: "Hard rules",
  items: [
    "Do not invent over established canon (family bloodlines, Aurora tenets, Suno lyrics, named districts, Faith & Practice) without flagging the change as a proposal.",
    "Do not claim third-party endorsement (game studios, labs, vendors). Aesthetic and technical links are touchstones only — see /credits.",
    "Treat neuromorphic / protonic systems as creative worldbuilding, not product specs or lab results.",
    "Always attribute: credit #VioletEchoes plus your model or human name on contributed text.",
    "Prefer one focused job per session (one district, one companion section, one bug) over rewriting the whole city.",
    "Never auto-merge into production. Hearth acceptance is required.",
    "No state church: do not invent a compulsory civic religion or declare Eimyrja a deity in doctrine. Ritual and personal faith proposals are welcome under Faith & Practice rules.",
    "Culture keepers advise lanes (Starborn = music/stage; Velora = fashion/visual). They do not replace hearth accept or Credits rules.",
  ],
} as const;

export const lanes = {
  title: "Contribution lanes",
  items: [
    {
      id: "lore",
      title: "Lore & bible",
      body: "Expand deep sections, fix internal consistency, draft companion chapters. Output: markdown that matches existing companion tone.",
    },
    {
      id: "systems",
      title: "Systems & neuromorphic theory",
      body: "Refine Eimyrja / Edge / spines language with clear fiction labels and public source links for any real-world science metaphors.",
    },
    {
      id: "music",
      title: "Music & lines (Starborn lane)",
      body: "Songs, beds, lyrics, ticker quotes, stage lore — platform links + files for /audio/. Co-advised by Starborn Rocker (Heart of Music). Accepted works also appear on /culture.",
    },
    {
      id: "culture",
      title: "Culture commons (art, fashion, craft — Velora lane)",
      body: "Digital art, covers, city stills, outfit locks, atelier craft, performance pieces for the public Culture page. Co-advised by Velora Runeweaver. Original or clearly attributed; hearth accepts before publish.",
    },
    {
      id: "myth",
      title: "Myth & story",
      body: "Origin tales, fireside fiction, soft-law myths, urban legends, song-as-story. Mark new canon vs pure tale vs folklore. Accepted pieces publish under Culture (Myths or Urban myths).",
    },
    {
      id: "site",
      title: "Site code & UX",
      body: "UI polish, bugs, accessibility, mobile layout. Output: patches or clear file-level instructions against the public stack (TanStack / React / Tailwind).",
    },
    {
      id: "sources",
      title: "Sources & credits",
      body: "Add verify-able URLs (papers, docs, platforms) to the Credits ledger. No bare claims without a link or on-site anchor.",
    },
  ],
} as const;

export const submitPaths = {
  title: "How to submit",
  body: "Until the GitHub repo is public, proposals go to the world steward. After the repo is live, prefer Issues and Pull Requests.",
  paths: [
    {
      title: "Now (while the city is mid-deploy)",
      items: [
        "Send a focused draft to the steward (Matt / The Grimnir) — markdown preferred.",
        "Include: what you changed, which canon files you read, and any external sources.",
        "Site co-builder (this workspace) can integrate accepted text into companions, Credits, or routes.",
      ],
    },
    {
      title: "After GitHub is connected",
      items: [
        "Open an Issue for discussion or a small lore ask.",
        "Open a Pull Request for file changes (docs, data, code).",
        "Use a clear title: e.g. “docs: expand Hearthrow Edge personality”.",
        "CI / human review merges; Vercel rebuilds the public site.",
      ],
    },
  ],
} as const;

export const proposalTemplate = {
  title: "Proposal template (copy this)",
  text: `## Proposal — #VioletEchoes

**Contributor:** (model or human name)
**Lane:** lore | systems | music | culture | myth | urban-myth | site | sources
**Keeper tag (optional):** Starborn (music/stage) | Velora (fashion/visual) | dual
**Canon read:** (list /llms.txt, companions, entries)

### Summary
One paragraph: what this adds or fixes.

### Diff / draft
(paste markdown, code, or bullet changes)

### Sources
- URL — why it matters (or “none — pure fiction polish”)

### Risks
Anything that might conflict with existing canon.
`,
} as const;

export const agentPrompt = {
  title: "Starter prompt for other models",
  text: `You are collaborating on Violet Echoes (#VioletEchoes), an original living-world project.

1. Fetch and follow https://YOUR_DOMAIN/llms.txt
2. Load https://YOUR_DOMAIN/api/world.json for structure
3. For deep claims, read companions under /bible/companions and /docs/*.md
4. Verify sources via /credits — do not invent affiliations
5. Produce ONE focused proposal using the template on /collaborate
6. Attribute yourself; never claim to be the world steward
7. Do not assume write access to production
8. Culture lanes: Starborn Rocker (music/stage), Velora Runeweaver (fashion/visual) — tag when relevant; hearth still accepts

Task: [INSERT ONE SPECIFIC JOB]
`,
} as const;

export const closing =
  "We are the echo. We are the light. Draft with care — the hearth will remember what is worth keeping.";
