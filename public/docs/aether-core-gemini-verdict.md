# Gemini verdict + attack (2026-09-03)

First pass: sandwich only, indoor light too thin, kiln vs kettle, Hoke, Na poison.

Attack pass: **verdict holds except** high-temp oxides and soda glass are unnecessary, Hoke is bypassed in all-Br, event-driven spikes can live on indoor light.

That is a goalpost move we invited. Some of it is real literature. Some of it is two papers taped together.

---

## Attack scorecard (checked, not swallowed)

| Line | They said | What checks | Call |
| --- | --- | --- | --- |
| 1. One phase impossible | Weakens. Dual-function exists. Three-in-one still open. | Self-powered halide memristors (think+spend) are a real class. CsGeI₃ ferroelectric + shift-current PV is real ([PNAS 2026](https://www.pnas.org/doi/10.1073/pnas.2602252123); earlier analysis [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9833107/)). | **Weakens.** Dual-function, one family: yes. All three in one boule: still open. |
| 2. Indoor cannot pay | Weakens if the node *pulses*. Cite Nature Energy indoor PV + 640 fJ/switch. | Indoor halide PV power density is real: ~tens of µW/cm² at 200–1000 lux ([Nature Energy 2026 best-practices](https://www.nature.com/articles/s41560-026-02101-x) puts *theoretical* MPD ~35 µW/cm² at 200 lux; lab cells report ~65–70 µW/cm² near 800–1000 lux). 640 fJ is real — [de Boer et al., ACS Energy Lett. 2024](https://pubs.acs.org/doi/10.1021/acsenergylett.4c02360) — energy of a *biased* micro-synapse conductance change. Not “this crystal ran on ceiling light.” | **Weakens the continuous-beat job. Does not prove no-pack on one device.** They glued a solar-cell paper to a memristor paper. |
| 3. Hoke kills the week | Breaks under indoor; all-Br (CsPbBr₃) skips iodine split. | Hoke has an **intensity threshold** ([Chen et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC8113520/); reviews in *EES*). Indoor is ~100–1000× dimmer than 1-sun. Threshold is composition-dependent — “always safe indoors” is still a guess. All-Br avoiding I-segregation is solid. | **Weakens for indoor + all-Br. Does not break for mixed I/Br.** |
| 4. Kiln vs kettle | Breaks. CsPbBr₃ d₃₃ ≈ 40.3 pm/V; TMCM-MnCl₃ 185 pC/N. | Both numbers exist: Kim et al. CsPbBr₃ piezo ~40.3 pm/V (widely cited); You et al., *Science* 2017, [TMCM-MnCl₃](https://www.science.org/doi/10.1126/science.aai8535). Low-temp halide/molecular ferro is real. “Integrates directly onto the memory crystal” is the leap — two materials, not one measured stack. | **Breaks the *must use 1000 °C oxide* line.** Does not make BaTiO₃ obsolete. Does not prove beat+think in one volume. |
| 5. Na⁺ fate | Breaks. Use ALD Al₂O₃ / SiO₂ / parylene. | Correct. Ancestral glass was our romance, not a requirement. | **Breaks.** Shell is optional and should be Na-free. |

---

## What actually changed

We asked for a continuous mechanical pacemaker on mixed I/Br with Roman glue.

After the attack, the honest object is smaller and more lab-like:

- **Family:** all-Br halide first (CsPbBr₃ neighborhood, ~2.3 eV). Mixed I/Br stays the violet knob **and** the Hoke fuse.
- **Jobs on the table:** think + spend in one halide is already a research class. Beat in the *same* family is plausible (CsPbBr₃ piezo, CsGeI₃ ferro). All three on **one sample**, indoor, no pack: still owed.
- **Beat means:** event-driven spike, not a clock that never stops. Continuous oscillation still starves.
- **Shell:** ALD alumina or nothing. Ca-Si-O-Al-Na is ancestry, not the recipe.
- **Oxide rings:** no longer mandatory. Keep them only if the halide beat is too weak. Planar halide first.

Violet / 2.3–2.8 eV mixed gap is the thing we traded away to beat Hoke. That trade is now explicit.

---

## Line we hang

First verdict was right about **one soup of oxide + halide**.

It was too loud about **must have a kiln, must have soda glass, mixed-halide dies under a lamp, indoor light is useless.**

Attack verdict, trimmed:

**Dual-function halide is real. Three-function no-pack node is still a heterojunction-or-better question. Indoor light can pay for rare spikes on paper; nobody has shown that loop on one boule. All-Br is the stability door. Mixed Br/I is the color door. Pick one to test first.**
