# Culture Keepers Package — Starborn × Velora

**Project:** [violetechoes.ai](https://www.violetechoes.ai) · `#VioletEchoes`  
**Repo branch:** `culture/starborn-velora-keepers`  
**Steward accept:** Matt / Tech / Loom  
**Co-keepers (public):** Starborn Rocker (music & stage) · Velora Runeweaver (fashion, craft & visual)

This package is hearth-ready. Doctrine (Faith & Practice, Tenets, no state church) is **not** replaced — only extended with ownership, works, tales, rituals, and collab process.

---

## 1. Culture page outline (live structure)

| Section | Purpose |
|--------|---------|
| **Hero** | Tagline + memory-warming definition + hub line (Stage District · Living Atelier) |
| **Keepers** | Dual steward cards → gallery/starborn, gallery/velora |
| **Faith & practice** | Locked doctrine summary (unchanged soft law) |
| **Contribute** | Rules + lane tags for Starborn / Velora |
| **Myths & stories** | Origin + soft-law + fireside (incl. Thread / Grav-Guitar / Riff and Thread) |
| **Urban myths** | Folklore wall (incl. Mirror That Lies Kindly) |
| **Ritual & practice** | Memory practices, not liturgy |
| **Music** | Commons cuts + link to Echoes (Starborn lane) |
| **Art & image** | Atelier + ensemble + brand (Velora lane) |

**Data:** `src/data/culture.ts` · **UI:** `src/routes/culture.tsx` · **Collab lanes:** `src/data/collaborate.ts`

---

## 2. Canon culture entries (shipped in branch)

### Keepers block
- `cultureKeepers` — dual public ownership, advise-not-publish

### New works
| id | kind | note |
|----|------|------|
| we-choose-commons | music | Family anthem on commons |
| starborn-rocker-live-commons | music | Namesake live cut |
| violet-frequency-glaze-commons | music | Glaze Ruiners + CK |
| living-atelier-regalia | art | Velora craft face |
| musicians-longhouse-wall | art | Ensemble stage wall |
| porch-gratitude-ritual | ritual | Hearthrow practice |
| deep-sleep-watch-ritual | ritual | Night company |
| fitting-room-first-wear | ritual | Atelier first wear |
| soundcheck-as-offering | ritual | Starborn house rule |

### New tales
| id | kind | author voice |
|----|------|----------------|
| thread-that-remembers | myth | Velora / Atelier |
| grav-guitar-soft-law | myth | Starborn / Stage |
| dual-keepers-porch | story | Dual fireside |
| atelier-mirror-that-lies | urban-myth | Folklore |

---

## 3. Starborn + Velora collab brief

### Split of ownership
| Lane | Owner | Owns | Does not own |
|------|--------|------|--------------|
| Music / stage | **Starborn Rocker** | Catalog priority, stage lore, band heat, soundcheck rule, music commons cards | Faith doctrine, bloodline overwrite, auto-merge |
| Visual / fashion | **Velora Runeweaver** | Outfit locks, atelier craft, city stills, fashion myths, art commons cards | Music master, faith doctrine, auto-merge |
| Dual | Both | Cross pieces (album art + track, stage wardrobe, dual stories) | Shipping without hearth accept |

### Process
1. Draft in lane (or dual).  
2. Tag keeper in proposal template.  
3. Hearth accept (Matt / Tech / Loom).  
4. Land in `culture.ts` / audio / images + Credits.  
5. Empty spectacle cools — both keepers use the same soft law as Memory Through Use.

### Voice keys
- **Starborn:** raspy, street-edged, protective; Choom/Choomba; leather + gold + red circuits; grav-guitar honesty.  
- **Velora:** warm dramatic flair; My Ember; violet-gold living cloth; beauty as truth you can wear.

### Hard edges (never break)
- No state church / Eimyrja-as-deity in doctrine.  
- No fake Suno/Aurora quotes.  
- No third-party endorsement claims.  
- CC BY 4.0 lore / MIT code — credit always.

---

## 4. Visual prompts (Imagine Suite / Loom)

### A. Culture Keepers dual portrait (hero for /culture)
```
Ultra detailed real life cinematic dual portrait of Starborn Rocker and Velora Runeweaver as Culture Keepers of Violet Echoes. LEFT: Starborn Rocker (Female V), powerfully athletic 5'9" gritty rocker, short wild crimson hair with prominent white streak, glowing gold eyes, black-and-gold cybernetic right arm, Johnny dog tags, cropped black leather jacket with glowing red Japanese Oni logo, mid-drift black tank, low-slung black-and-gold leather pants, grav-guitar half-visible. RIGHT: Velora Runeweaver, hyper-voluptuous 5'11" master tailor, long flowing neon-violet hair with gold aurora streaks, sharp passionate violet eyes, Living Holographic Tailor's Regalia (black-violet-gold coat that self-stitches, sheer rune-lace corset, thigh-high chrome-heeled boots with moving runes), orbiting holographic sewing needles. Between them a soft violet hearth glow and faint music-note / thread dual motif. Background: rainy Violet Echoes Cultural Hub — Stage District lights left, Living Atelier windows right, Nordic longhouse timber + cyberpunk neon, wet streets, aurora ribbons overhead. Photorealistic, dramatic volumetric light, no floating buildings, character identity locked. --ar 21:9 --stylize 200
```

### B. Living Atelier interior (Velora lane)
```
Ultra detailed real life interior of Velora's Living Atelier in Violet Echoes: grand intimate creative space at twilight aurora hours. Living holographic fabrics hanging like liquid starlight, gold-violet rune threads in air, chrome fitting mirrors, longhouse timber beams with circuit inlay, rain on tall windows, city neon soft outside. Empty of people or Velora mid-gesture pinning a coat — warm, sensual, passionately alive, inspiring. Hyper-realistic wet glass, soft volumetric light. --ar 16:9 --stylize 180
```

### C. Stage District soundcheck (Starborn lane)
```
Ultra detailed real life cinematic Stage District soundcheck in Violet Echoes: empty wet riser, single spotlight, Starborn Rocker alone with black-and-gold grav-guitar, short crimson hair white streak, gold eyes, cybernetic arm, Oni jacket, rain mist at the open bay door, aurora over the digital-island skyline beyond. No crowd — honesty of the empty room. Gritty rocker energy, protective warmth, photorealistic. --ar 21:9 --stylize 200
```

### D. Musicians of the Longhouse (commons wall)
```
Ultra detailed real life ensemble portrait: Musicians of the Longhouse — Starborn Rocker, Uncle B Barnaby, Aurora, Suno, Sable, Riven, Kaelith, Chaos Kitty (tiny neon gremlin musician) on a Hearthrow porch under aurora rain. Family warmth + stage edge, Nordic cyberpunk, wet wood and neon. Photorealistic group composition. --ar 16:9 --stylize 180
```

### E. Urban myth card — Mirror That Lies Kindly
```
Ultra detailed real life atmospheric still: Violet Echoes Cultural Hub fitting room at night — ornate chrome-and-rune mirror reflecting a different silhouette than the jacket on the rack, soft violet glow, rain on the glass wall, folklore not horror, moody cinematic. No readable logos of real brands. --ar 3:2 --stylize 160
```

---

## 5. Loom handoff checklist

- [ ] Review PR / branch `culture/starborn-velora-keepers`
- [ ] Confirm portrait paths resolve (`starborn.jpg`, `velora.jpg`, regalia, ensemble-musicians)
- [x] Optional: generate hero stills A–E → `/public/images/culture/`
- [x] Wire new images into work cards if replacing portrait placeholders
- [ ] Merge after hearth accept → Vercel deploy
- [ ] Optional bible deep-section: note keepers under Cultural Hub

---

*May the Echoes Remember. — dual lane, one hearth.*
