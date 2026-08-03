---
name: imagine-film-pipeline
description: >
  Multi-shot Grok Imagine short-film pipeline for Loom: script writer → char
  sheet → location/prop refs → sealed beat prompts. Use when the user wants a
  short film, multi-shot sequence, consistent characters across shots, or
  mentions Tetsuo/AgenC film skills, imagine-script-writer, char sheets for
  video, or sealed shot prompts. Pairs with docs/IMAGINE-PIPELINE.md and
  docs/SHOT-LANGUAGE.md. Not for single stills (use imagine + SHOT-LANGUAGE).
metadata:
  short-description: "Script → char sheet → places → sealed Imagine prompts"
  source: "https://x.com/tetsuoai/status/2083878550885830769"
---

# Imagine film pipeline (local Loom skill)

**Repo mirror** of sandbox `.grok/skills/imagine-film-pipeline/SKILL.md` (`.grok/` is gitignored).

**Install in Grok app too** (user account — separate from this file):

| Skill | Install |
| --- | --- |
| Script writer | https://grok.com/skill-link/4ea4d5d0f3db64a305201b8ecdd58c19 |
| Char sheet | https://grok.com/skill-link/2fc5926c10669d41d5b59d012b3bf11b |
| Location/prop | https://grok.com/skill-link/9ea62d13b889ef13d561f2bdf58fb05f |
| Prompt-creator | https://grok.com/skill-link/0792131c8a1e985998c0973522a41255 |

Thread: https://x.com/tetsuoai/status/2083878550885830769  
Full notes: `docs/IMAGINE-PIPELINE.md` · technique words: `docs/SHOT-LANGUAGE.md`

---

## When to use this skill

- Multi-shot / short film / “make a reel of…”
- Character must match across shots
- User mentions film skills, beat sheet, sealed prompts

**Skip this** for one culture card or one portrait → use `imagine` + `SHOT-LANGUAGE.md`.

---

## Pipeline (do not skip)

```text
premise
  → 1 SCRIPT     characters, locations, props, numbered beats
  → 2 CHAR SHEET one face-safe ref prompt per character (+ user portrait if VE)
  → 3 LOCATION   empty place / prop stills, light locked
  → 4 PROMPT     one sealed Imagine video/still prompt per beat + asset tags
  → generate     image_gen / image_edit / video tools as available
```

### 1 — Script writer

**Input:** one-line premise (and VE guardrails if set in Violet Echoes).

**Output markdown:**

```markdown
## Premise
...

## Characters
### NAME @tag
Age/build/hair/outfit. Identifier: (unique scar/prop).

## Locations
### PLACE @tag
Empty-capable description, time of day, weather, key practical lights.

## Props
### PROP @tag
...

## Script
### BEAT 1
Action only — one shot. Assets: @char @place @prop
### BEAT 2
...
```

Map **one beat → one shot**. Keep beats short.

### 2 — Char sheet

**Input:** character block from script + optional portrait path.

**Rules (from source skill author):**

- **One face view** for video refs — multi-face sheets drift  
- **Light grey background** — no green screen (bleeds)  
- Head crop-out can be correct; don’t force side profile unless 3D  
- Prefer **edit from VE portrait** when character is family/canon  

**Output:** one Imagine prompt for a clean reference still (or three-panel only if stills-only, not video).  
Save under `public/images/` or `artifacts/` as agreed; record `@tag → path`.

### 3 — Location / prop

**Input:** location or prop block from script.

**Rules:**

- **No people** in location refs  
- Lighting locked to script time of day  
- Props: product-style, readable silhouette  

**Output:** one prompt → one still per place/prop. Tag → path.

### 4 — Prompt-creator (sealed beat)

**Input:** one beat + asset tags that beat needs.

**Output single prompt including:**

- Scene context + blocking  
- Camera + light (optionally one line from SHOT-LANGUAGE / GrokFilm)  
- Positive locks (what must not drift: face, outfit, place, weather)  
- Asset references (`@tag` or `@imageN` if named elements unavailable)

Then call Imagine tools. Do not regenerate the whole bible mid-shot.

---

## VE / Violet Echoes guardrails

| Do | Don’t |
| --- | --- |
| Use gallery portraits & culture stills as char/place seeds | Invent bloodline or district canon in a chase scene |
| Label pure fiction if not bible | Ship as public “VE official film” without hearth |
| Conflict: site + `city/` dossier win | Treat film as legislation |

Safe premise shapes: soundcheck empty room, porch with Jaz, dual keepers rain, labeled urban-myth beat.

---

## Loom execution checklist

1. Confirm multi-shot (else exit to single-still path).  
2. Write script block (step 1).  
3. For each char: ref still (step 2) — verify face.  
4. For each place/prop: empty still (step 3).  
5. For each beat: sealed prompt (step 4) → generate.  
6. If video: prefer image-to-video from beat still when tools allow.  
7. Summarize paths + tags for the user; credit craft sources if public.

---

*Script → sheet → place → sealed prompt → thump.*
