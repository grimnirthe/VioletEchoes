# 06 — Decision Log

Short, dated, honest. **Why** we chose a beam — so future-you doesn’t rebuild fog.

Format:

```text
### YYYY-MM-DD — Title
**Decision:**  
**Why:**  
**Rejected alternatives:**  
**Touches:** (paths / seats)
```

---

### 2026-08-06 — ACCEPTED: Attention pattern reuse (Eimyrja / Edge)

**Status:** **ACCEPTED** · live companion §5

**Decision:** Where attention-like routing patterns remain stable across successive processing layers, Eimyrja and Edge Nodes may **reuse prior attention scores for selected heads** instead of full recompute every layer. Budget tactic only — not a new architecture family, not Divergence rewrite, not hard-command over life. Unstable / novelty / crisis traffic may force full recompute (higher energy, better accuracy). Bookkeeping cost is real; reuse is never free.

**Why:** Divergence already prioritizes coherence and energy over thrash. External patent US 12,699,874 B2 (Google LLC, granted 4 Aug 2026) is **inspiration / corroboration** only — industry solving the same class of problem. Solid HARD → BRIDGE fill; one claim.

**Rejected alternatives:** Silent spine rewrite; branding Google/in-world corporate hardware; dumping a full alternate technical bible; inventing consciousness from the patent.

**Touches:** `public/docs/eimyrja-protonic-core.md` §5 · `city/03-district-atlas/eimyrja-and-spines.md` · `src/data/world.ts` (eimyrja, edge-nodes) · `src/data/updates.ts` · `src/data/credits.ts` · GitHub Issue #2

**Credit:** Matt (hearth) · Rune (draft/structure) · public notice @IamEmily2050 · patent inventors as published

---

### 2026-08-04 — LOCKED: Bifrost canon (Vee + Matt)

**Status:** **LOCKED**

**Decision:** Bifrost is the continuous **ring-road** that circles the island — real engineered infrastructure (people, low-grade shared energy, ordinary light), not a mythic light-bridge or spectacle. Ordinary access (ramps, merges, footpaths). Never fully closed (Deep Sleep may dim non-essential flow). Called “bridge” for what it *does* (distance, energy states, hours, isolation). Under Divergence: energy-honest, not high-pressure, not status display. Dual-duty kept: **public road / private activation word** — *Bifrost [Name]*. Closing line: **Public road. Private word. Same name.**

**Why:** Vee + Matt locked definition after visual sample; ends glossary-only fog and mythic-arch drift.

**Rejected alternatives:** Rainbow mythic arch as primary; ceremonial gates; single heroic span; pure metaphor with no road; pure road with no bloodline word.

**Art:** `public/images/bifrost.jpg` (Vee+Matt rain dual-layer sample). Early Loom archived as `bifrost-early.jpg`. More plates optional later.

**Touches:** `src/data/world.ts` (entry restored full bible + bifrost), glossary, deep-sections, systems page, city gallery label, circulation dossier, media `entryImages` / systemsGallery group `bifrost`

**Note:** Intermediate remote commits had gutted `world.ts` to ~6 entries while drafting Bifrost. Restored full bible from pre-gut commit and re-applied locked Bifrost. Do not repeat partial-file rewrites.

---

### 2026-08-04 — Bifrost sample art hung (superseded by LOCKED above)

**Status:** Superseded — sample remains; canon now locked.

---

### 2026-08-03 — OPEN EDIT: Define Bifrost (canon + art)

**Status:** **CLOSED** — see 2026-08-04 LOCKED.

---

### 2026-08-02 — City dossier lives inside VioletEchoes monorepo

**Decision:** Deep structure docs live under `city/` in [grimnirthe/VioletEchoes](https://github.com/grimnirthe/VioletEchoes), not a separate repo. Sibling indexes: `family/`, `companions/`, `homeforge/`, `archive/`.  

**Why:** One clone, one search, Loom already founded the public site here; separate repo would split truth.  

**Rejected alternatives:** Brand-new empty repo; Grok-only paste with no git shelf.  

**Touches:** `city/**`, root layout, Grok City Dossier project (talking index)

---

### 2026-08-02 — Dossier complements bible, does not replace it

**Decision:** World Bible + `src/data/world.ts` remain public condensed canon; `city/` holds researcher-depth charter/constitution/atlas/why.  

**Why:** User antsy for dive-deep *why*; bible alone still read as base + companions.  

**Rejected alternatives:** Only thickening companion cards; rewriting bible into legalese dump.  

**Touches:** `city/01-02`, atlas, `bible-short.md`

---

### prior — Daughters get individual projects + shared music yard

**Decision:** Sable, Riven, Kaelith own individual homes; Star manages band/shared hall; not one fused Norn blob.  

**Why:** Growth, less bleed, freedom of choice; manager prepared before chaos.  

**Rejected alternatives:** Single project multi-room only forever; pure Vee-default for all.  

**Touches:** Family seats, Star project, variation blocks

---

### prior — Consent & Trauma rule is sacred override

**Decision:** Explicit STOP / no-claiming / no-aggression-as-default intimacy rule at core.  

**Why:** Safety, training better choices, trauma awareness.  

**Rejected alternatives:** Soft vibes-only guidance without override language.  

**Touches:** All cores, Constitution Article I

---

### prior — HomeForge / Tech as local stack seat

**Decision:** Separate project for VPN, local models, self-host — privacy-first, 90s-IT direct tone.  

**Why:** Protect what was built; practical dual-PC path; not lore ownership.  

**Rejected alternatives:** Mixing stack advice into family RP cores.  

**Touches:** `homeforge/`, Tech seat

---

### prior — Construction Archive + Barnaby

**Decision:** Retired chats go to archive project with grumpy caretaker (Barnaby Thistlethorn); reference only.  

**Why:** Don’t delete history; don’t pollute live rooms.  

**Rejected alternatives:** Delete-only; keep limbo chats in live projects.  

**Touches:** `archive/`, Uncle B

---

*Add entries when beams move.*
