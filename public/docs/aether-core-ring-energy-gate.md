# Ring Energy Gate — One Page

Handoff for a bench that already has an electrometer. Not a city document. Nothing is being grown or poured. The lattice is not attached.

The halide does not make the cold-start pulse. Bulk CsPbBr₃ is a bad microphone. This page is the ring alone.

## Coupon

One plate.

- **X-cut** single-crystal quartz, electrodes on both faces, or
- one **poled** PVDF or P(VDF-TrFE) film, if the quartz pulse is too small.

No AT-cut. That is a clock cut. No polycrystalline shell. Random grains and Dauphiné twins cancel the charge. Stonehenge sarsen is that shell. It is not this coupon.

One face is the signal. The other is the return. Both faces shorted is a failed build.

## Knock

10 N along the X axis, normal to the electrode faces. Dropped mass or a hammer with a force sensor. Not a hand knock.

Stable temperature for PVDF. It is strongly pyroelectric. A warming film makes charge that is not a knock. Quartz is the quieter control.

## Meter

Charge amplifier or an electrometer-grade buffer. Guarded input. Short shielded leads. Femtoamp-class bias current.

No ordinary scope probe. A 10–15 pF, 1 MΩ probe is comparable to the plate and bleeds the charge in microseconds.

Report, for this plate:

- charge
- peak force
- energy into a known capacitor
- **plate capacitance**
- **stray capacitance of the setup** (leads, fixture, amplifier input)

The "~2 V" and "~25 pJ" figures assume about 10 pF and no extra stray. Real voltage scales with the plate's own capacitance plus whatever the fixture adds. Charge, force, and energy are not reproducible without both capacitances written down.

Order of magnitude, not a measured result: X-cut quartz is about 2.3 pC/N. A 10 N knock is about 23 pC. **If** the plate plus the fixture is about 10 pF, that is roughly 2 V and about 25 pJ. A different plate, or a different fixture, gets a different voltage. Do not photocopy 2 V onto the report.

## Junction, measured on its own

Name the topology.

Plain charge-sharing into a matched empty capacitor: half the voltage remains, so half the energy is dissipated. What is left splits between the plate and the storage cap. **A quarter of the original pulse energy is the ceiling** in storage for that hookup. It is not a failure of the quartz.

A silicon diode drop (0.3–0.6 V) is a large slice of a ~2 V pulse. Reverse leakage matters over a week of standby. Measure forward drop and reverse leakage alone.

An inductive or synchronous harvest may beat the quarter. That is a different result. It does not change the ring’s number.

## Pass

Write the wake-path budget **before** the first knock. A threshold chosen after the pulse is not a test.

```
Wake-path budget (fill in before the knock): _______ pJ
```

We do not supply that number. A published switch sits in the femtojoules, on a different material and a different size, and it is the switch alone. Sensing and buffering are part of the path. The lab measures or calculates the whole path, writes the figure, then knocks.

Pass if the energy left **after the junction** meets or beats that written budget. Fail if it does not. Do not revise the budget to fit the pulse.

## Out of scope

The lattice. The beat test. A triboelectric face (last: humidity and wear). The Room. A PC case. This house has no electrometer. A scope on a sound card is not this gate.

[Door A bench](/docs/aether-core-door-a-bench.md) · [Blueprint](/docs/monolithic-node.md)

*May the Echoes Remember.*
