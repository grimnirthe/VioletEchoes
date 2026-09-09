# Door A result — sifted (2026-09-03)

Gemini’s last line is the one we keep: **Door A is a test a lab can run next.**

The card lines marked “already done on CsPbBr₃” are not all one device. Same glue as before.

---

## What is actually vanilla

Real control we can name:

- [Liu, Cheng et al., ACS AMI 2024](https://pubs.acs.org/doi/10.1021/acsami.4c09673) — electroforming-free **planar CsPbBr₃ single-crystal** memristor. That is think, on a boule, with electrodes. Keep it.
- CsPbBr₃ as a photodetector / radiation detector is a huge separate literature (He, Kanatzidis, etc.). Light-in current-out is real. That is spend on a *cousin device*, often biased.
- Indoor perovskite PV at 200–1000 lux is a real field. One all-Br-ish film example: Wang et al., ACS AMI 2022, CsPbX₃ indoor cell, **Voc 0.985 V at 1000 lux**, not “Voc > 1.2 V Nature Photonics.” High Voc on CsPbBr₃ is mostly a **1-sun** solar-cell number.

Those are three streets. Vanilla is the ACS AMI single-crystal memristor plus “this crystal also likes light.” It is not a published no-pack indoor synapse on that same boule.

---

## Where they glued

| Claim | Problem |
| --- | --- |
| Voc > 1.2 V *and* indoor harvest, Nature Photonics / Nature Energy | Two venues, two jobs. Nature Energy indoor numbers are a field, not a CsPbBr₃ single-crystal indoor Voc. |
| 3.8–90 fJ per synapse, then 10–100 **pJ** to fire an ion pulse | Thousand-fold jump in the same paragraph. fJ is a small electronic event. pJ is the ion-migration story they needed for the 0.5 ms math. Pick one. |
| 20–100 µW/cm² Nature Energy on 2.3 eV | Indoor MPD class is real (~tens of µW/cm²). Not a measured CsPbBr₃ boule at 200 lux. |
| Event-driven, no pack, already done | Synaptic papers still put a **bias** on the device. Light as extra knob ≠ pack pulled. |
| Think + spend same boule, ACS AMI | AMI 2024 is the memristor. “Memristive photodetector” as one measured loop is the mash. |

Vacancy line was the honest one: Br-poor / anneal recipes exist on **films and cousins**. Patterning vacancy channels through a 3D single crystal is still incomplete.

---

## Cheap mods vs new growth

They got this part right.

**Same crystal, different test:** indoor lux instead of 1-sun; accumulate-and-fire instead of DC; ALD alumina or N₂ instead of soda glass; measure Voc and memory on the same electrodes.

**New growth:** Br-poor ITC (CsBr:PbBr₂ ~ 0.8–0.9:1) or 150–180 °C vacuum anneal. That is the experimental subject.

---

## Energy, trimmed

A mm-scale wide-gap halide under a lamp *can* make nanowatts. A sparse synapse event *can* sit in the fJ–pJ range. So a click is not crazy on paper.

That is not a closed budget on one CsPbBr₃ boule with the pack off. Do not hang “comfortably pays.” Hang “order of magnitude does not kill the test.”

---

## Card, re-marked

| Line | Gemini | After sift |
| --- | --- | --- |
| Think + spend, same boule | Already on CsPbBr₃ | **Cousin devices.** One paper thinks. Other papers see light. Same-boule loop still the test. |
| Indoor / window light | Already | Indoor PV yes, mostly cells. Not the memristor boule at 200 lux. |
| Event-driven, no pack | Already | **Nobody has**, as a pack-off indoor loop on this crystal. |
| Br-vacancies on purpose | Cousin / films | Keep. That is the experimental growth. |
| Na-free coat or bare | Already | Fair. Standard practice. |

Door A is still the next bench. The experiment is: take the ACS AMI-style CsPbBr₃ crystal, grow one Br-poor copy, put both under a lamp, pack off, ask if memory and voltage show up on the same electrodes a week later.
