# Imagine short-film pipeline (craft shelf)

**Not city canon.** Production notes for Grok Imagine shorts.  
**Source thread:** [tetsuoai — four skills](https://x.com/tetsuoai/status/2083878550885830769) (AgenC / Tetsuo · article ~24h after post).  
**Pairs with:** [SHOT-LANGUAGE.md](./SHOT-LANGUAGE.md) (GrokFilm technique index) + identity locks from gallery/portraits.

---

## Both tracks (yes, do both)

| Track | Where | Who |
| --- | --- | --- |
| **Grok app skills** | Install skill-links while logged into Grok | You — official skill runtime |
| **Loom local skill** | `.grok/skills/imagine-film-pipeline/` (sandbox) + `docs/skills/imagine-film-pipeline.md` (repo) | Me — multi-shot jobs in this workspace |

Same four steps either way. Grok app ≠ sandbox automatically.

### Grok install (you)

1. https://grok.com/skill-link/4ea4d5d0f3db64a305201b8ecdd58c19 — script writer  
2. https://grok.com/skill-link/2fc5926c10669d41d5b59d012b3bf11b — char sheet  
3. https://grok.com/skill-link/9ea62d13b889ef13d561f2bdf58fb05f — location/prop  
4. https://grok.com/skill-link/0792131c8a1e985998c0973522a41255 — prompt-creator  

### Loom local

Load skill **`imagine-film-pipeline`** for multi-shot jobs. Single stills still use `imagine` + [SHOT-LANGUAGE](./SHOT-LANGUAGE.md).

---

## Pipeline (don’t skip steps)

```text
premise
  → 1 script writer     (bible + beats)
  → 2 char sheet        (one face per ref · light grey bg)
  → 3 location / prop   (empty scenes · locked light)
  → 4 prompt-creator    (one beat → one sealed video prompt)
  → Grok Imagine
```

Skip one → you’re writing every sheet and shot by hand again.

| Skill | What it hands back | Feed next |
| --- | --- | --- |
| **Script writer** | Characters, locations, props, numbered beats (1 beat ≈ 1 shot) | Char sheet + location/prop |
| **Char sheet** | Prompt for 3-panel ref (front/back/portrait discipline — skill keeps face usable for video) | Imagine stills → tags |
| **Location / prop** | Clean empty place or product-style prop still | Imagine stills → tags |
| **Prompt-creator** | Sealed shot prompt: blocking, camera, light, positive locks + asset tags | Imagine video |

Install links live in the X thread (skill-link URLs). When the public article lands, paste URL here:

- Article: *(pending — check thread / tetsuoai)*

---

## Hard craft rules (from the skill author — keep)

1. **One face view** in char refs for video — multi-face sheets drift. Head crop-out can be correct; don’t force a side profile unless 3D modeling.
2. **No green screen** for AI refs — green bleeds. **Light grey background** every time.
3. **Locations empty** — no people in place refs so lighting doesn’t fight the night/day of later shots.
4. **Element tags** (`@name` style): Grok Heavy / US beta may support auto-attach; if not, drag images and reference `@image1` … `@imageN` manually. (Thread notes intentional backslash on X to avoid @-mentions — in Grok UI use the real tag form the skill emits.)
5. **One technique stack** — script for story; [SHOT-LANGUAGE](./SHOT-LANGUAGE.md) / GrokFilm for camera-light-cut words inside beats if a shot feels generic.

---

## VE guardrails (if a short is set in Violet Echoes)

| Do | Don’t |
| --- | --- |
| Premise that fits existing canon | Invent bloodline law, new districts as fact, fake Aurora/Suno quotes |
| Char sheets from **our portraits** (`public/images/portraits/`, culture stills) | Random OC that later gets treated as gallery canon |
| Locations from atlas + site stills (`city/`, culture cards, media) | Generic “cyber city” that fights dual-layer / longhouse soul |
| Hearth accept before public post | Ship a “VE film” that rewrites soft law |
| Credit craft tools + #VioletEchoes | Imply GrokFilm / skill author affiliation with the city |

**Conflict rule:** Living site + `city/` dossier win. Film is illustration, not legislation.

### Example premise shapes (safe)

- Soundcheck as offering — empty Stage District, one song, rain at the bay door  
- Porch five minutes — Jaz, coffee, stranger on the boards  
- Dual keepers — thread and riff under Cultural Hub rain  
- Courier beat as **fiction-in-city** only if labeled tale, not bible update  

---

## Loom habit

1. Lock **who/where** from VE assets first.  
2. Run pipeline only when the job is multi-shot / motion.  
3. Single stills: skip script stack → identity ref + [SHOT-LANGUAGE](./SHOT-LANGUAGE.md).  
4. After article: refresh install links and any changed skill names.

---

## Credits honesty

Third-party skills and [GrokFilm](https://grokfilm.app/) are **craft tooling**, same class as other Credits inspiration — not VE partners, not canon authors.

---

*Script → sheet → place → sealed prompt → thump.*
