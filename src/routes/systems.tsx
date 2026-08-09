import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import { media, systemsGallery } from "@/data/media";
import { entries } from "@/data/world";

export const Route = createFileRoute("/systems")({
  component: SystemsPage,
  head: () => ({
    meta: [
      { title: "Systems — Violet Echoes" },
      {
        name: "description",
        content:
          "Living systems of Violet Echoes: Eimyrja Core, Data Spines, Bifrost ring-road, Edge Nodes, Memory & Archives, Governance, External Relations, and living ships.",
      },
    ],
  }),
});

const systemIds = [
  "divergence",
  "eimyrja",
  "edge-nodes",
  "data-spines",
  "bifrost",
  "memory",
  "governance",
  "external-relations",
  "longhouses",
  "living-ships",
  "aethelgard",
  "oni-shadow-rider",
  "core-tender-gauntlets",
  "bonded-chassis",
  "echo-slot",
  "factions",
];

function SystemsPage() {
  const list = systemIds
    .map((id) => entries.find((e) => e.id === id))
    .filter(Boolean);
  const coreShots = systemsGallery.filter((s) => s.group === "core");
  const edgeShots = systemsGallery.filter((s) => s.group === "edge");
  const spineShots = systemsGallery.filter((s) => s.group === "spines");
  const bifrostShots = systemsGallery.filter((s) => s.group === "bifrost");
  const memoryShots = systemsGallery.filter((s) => s.group === "memory");
  const govShots = systemsGallery.filter((s) => s.group === "governance");
  const extShots = systemsGallery.filter((s) => s.group === "external");
  const lhShots = systemsGallery.filter((s) => s.group === "longhouse");
  const dlhShots = systemsGallery.filter((s) => s.group === "district-lh");
  const shipShots = systemsGallery.filter((s) => s.group === "ships");

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Systems" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-soft)]">
            Architecture
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Living Systems
          </h1>
          <p className="text-[var(--color-muted)]">
            Heartwood, violet arteries, local minds — and how the city remembers. Not everything
            should be kept. What matters must be practiced.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <MediaFrame
            src={media.eimyrjaDiagram}
            alt="Violet Echoes — Eimyrja Core, living veins, runic circuits"
            aspect="wide"
            veil="bottom"
            priority
          />
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">Heartwood</p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Eimyrja infrastructure
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreShots.slice(1).map((shot) => (
              <figure
                key={shot.id}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                <figcaption className="space-y-1 p-4">
                  <p className="font-display text-xl text-[var(--color-fg)]">{shot.title}</p>
                  <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Data Spines
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Violet arteries
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Primary physical and informational arteries. Not unlimited high-bandwidth pipes —
              coherence infrastructure. Soft coordination travels freer than raw high-fidelity state.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.dataSpinesDiagram}
              alt="Data Spines — abstraction layers and intentional lossiness"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {spineShots
              .filter((s) => s.id !== "data-spines-diagram")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Bifrost
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Ring-road of the island
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Continuous engineered highway — people, low-grade shared energy, ordinary light. Not a
              mythic arch. Ordinary ramps. Never fully closed. Public road. Private word. Same name.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.bifrost}
              alt="Bifrost — continuous ring-road in rain, violet edge-lines, dual-layer circulation"
              aspect="wide"
              veil="bottom"
            />
          </div>
          {bifrostShots.length > 1 ? (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bifrostShots
                .filter((s) => s.id !== "bifrost-ring")
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                    <figcaption className="space-y-1 p-4">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          ) : null}
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Full entry:{" "}
            <Link
              to="/bible/$slug"
              params={{ slug: "bifrost" }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              World Bible · Bifrost
            </Link>
            . Canon locked by Vee + Matt — visual first, then definition.
          </p>
        </section>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Metropolis · Edge Nodes
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">Local minds</h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Primary sites of living, adaptive intelligence. Learn continuously. Solve locally
              first. Manage energy. Some nodes remember what maps forget.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.edgeNode7}
              alt="Edge Node 7 — Ravenpur district profile"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {edgeShots
              .filter((s) => s.id !== "edge-node-7")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Memory
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Archives & cultural practices
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              How the city remembers and forgets. Patterns that are used are reinforced; patterns
              that are not used attenuate. Cold archives grow cold by design. We do not keep all —
              we keep what keeps us.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.memoryPractices}
              alt="Memory, Archives & Cultural Practices — active selective memory"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {memoryShots
              .filter((s) => s.id !== "memory-practices")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>


        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Governance
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Decision-making
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              How collective choices are made and legitimacy is maintained. Multi-layered and
              polycentric. Most authority stays local. Higher layers — including Eimyrja — recommend
              and constrain rather than command. Not faster. Wiser. Together.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.governanceLandscape}
              alt="Governance & Decision-Making — polycentric landscape"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {govShots
              .filter((s) => s.id !== "governance-landscape")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>


        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · External Relations
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Technology integration
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              How Violet Echoes deals with the outside world and foreign systems. Sophisticated
              translation layers. Selective, reversible integration. Exchange, not surrender —
              internal developmental logic remains sovereign. We trade permanence for presence, not
              sovereignty for speed.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.externalTranslation}
              alt="External Relations — translation layers and integration posture"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extShots
              .filter((s) => s.id !== "external-translation")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>


        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Longhouses
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Human-scale heart
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Lived developmental units under The Development Divergence. Belonging. Continuity.
              Informal coordination. Long-term coherence. Not just a place to live — a place that
              lives with us.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.longhouseGeneral}
              alt="Longhouses — primary human-scale heart of Violet Echoes"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lhShots
              .filter((s) => s.id !== "longhouse-general")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>


        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · District Longhouses
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Pattern language
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Everyday developmental units of the city. Not monuments — homes for the long
              Divergence. Shaped by district, Edge Node(s), humans, systems, climate, and culture.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.districtLhPattern}
              alt="District Longhouses pattern sheet"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dlhShots
              .filter((s) => s.id !== "district-lh-pattern")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Heartwood</p>
            <p className="mt-1 font-display text-xl text-[var(--color-fg)]">Eimyrja Core</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Source from which all flows radiate — recommends, does not command.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Spines</p>
            <p className="mt-1 font-display text-xl text-[var(--color-fg)]">Lossy on purpose</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Abstraction layers keep energy cost visible.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Edge</p>
            <p className="mt-1 font-display text-xl text-[var(--color-fg)]">Local first</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Decades of domain tenure. Reset is a significant event.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Memory</p>
            <p className="mt-1 font-display text-xl text-[var(--color-fg)]">Practice, not hoard</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Attenuation is care. Culture is maintenance.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Living Ships
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Not built. Grown.
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Among the purest technological expressions of The Development Divergence. Cumulative
              developmental bonds with captains and crews — neurological, operational, and sometimes
              deeper. Major changes are developmental events, not software updates. A ship that has
              sailed with the same captain for a long time is a different entity than a newly bonded
              hull.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.shipsAnatomy}
              alt="Living Ships — Aethelgard-class anatomy and developmental bond"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shipShots
              .filter(
                (s) =>
                  s.id !== "ships-anatomy" &&
                  !s.id.startsWith("aethelgard-orbit-") &&
                  !s.id.startsWith("aethelgard-interior-"),
              )
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
              <MediaFrame
                src={media.aethelgardFront}
                alt="Aethelgard exterior reference — front"
                aspect="video"
                imgClassName="object-contain bg-[var(--color-bg)]"
              />
              <div className="flex flex-col justify-center gap-2 p-5 sm:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Locked exterior
                </p>
                <p className="font-display text-2xl text-[var(--color-fg)]">Aethelgard</p>
                <p className="text-sm text-[var(--color-muted)]">
                  Long-term bond archetype · line command & exploration · ~180m. Exterior language
                  locked; interior room set studying in. Use becomes structure.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Class variations · orbit study
              </p>
              <h3 className="mt-1 font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                Aethelgard exterior language
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Same hull, different light. Profile, keel, Grav Ring aspect, ring flare, nightside —
                locked exterior still has room to be seen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shipShots
                .filter((s) => s.id.startsWith("aethelgard-orbit-"))
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                    <figcaption className="space-y-1 p-4">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>

          <div className="mt-10 space-y-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Class interiors · room study
              </p>
              <h3 className="mt-1 font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                Aethelgard inside the bond
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Cockpit · Hallway · Docking Port · Crew Bunks · Galley & Rec · Audio Studio · Elevator
                to top/bottom decks. No traditional consoles — neurological connection. Warm bone,
                living alloy, violet-gold veins. Three study sheets while the room language settles.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-1">
              {shipShots
                .filter((s) => s.id.startsWith("aethelgard-interior-"))
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame src={shot.src} alt={shot.title} aspect="wide" />
                    <figcaption className="space-y-1 p-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="max-w-xl text-sm text-[var(--color-muted)] sm:text-right">
                        {shot.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </section>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {list.map((entry) =>
            entry ? <EntryCard key={entry.id} entry={entry} /> : null,
          )}
        </div>

        <section className="mt-16">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Factions & Roles
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Rhythms, not ranks
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Coherence Workers · Guardians · Interface Specialists · Longhouse Anchors · Memory
              Keepers. Shaped by The Development Divergence. Different roles. Shared city. One
              living pattern.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.factionsRhythms}
              alt="Major Factions and Roles overview"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "factions" && s.id !== "factions-rhythms")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>
        <section className="mt-16">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Adaptive Vehicles
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Oni Shadow Rider class
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Transformation is adaptation — not a party trick. Shape fluency. Rider relationship.
              Energy and coherence costs are real. Partners, not tools.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.vehiclesVariants}
              alt="Adaptive Vehicles Oni Shadow Rider class overview"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter(
                (s) =>
                  s.group === "vehicles" &&
                  s.id !== "vehicles-variants" &&
                  !s.id.startsWith("oni-"),
              )
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Form studies · more landing
              </p>
              <h3 className="mt-1 font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                Oni exterior language
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Studio studies of living-alloy mounts. Mono, cruiser, pursuit, wraith, hover — shape
                fluency in steel, rune, and open air.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemsGallery
                .filter((s) => s.id.startsWith("oni-"))
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame
                      src={shot.src}
                      alt={shot.title}
                      aspect="video"
                      imgClassName="object-contain bg-[var(--color-bg)]"
                    />
                    <figcaption className="space-y-1 p-4">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Mobile interface
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Hands, shells, and seeds
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              No robot armies. Core Tender gauntlets and light exos for vault work. Rare Bonded
              Chassis when a mind needs a walking shell. Echo Slots when city mind must travel light
              — including consented neural seats (V-Crimson Oni pattern).
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {(
              [
                ["core-tender-gauntlets", "Gauntlets & light exos"],
                ["bonded-chassis", "Bonded Chassis"],
                ["echo-slot", "Echo Slot"],
              ] as const
            ).map(([id, label]) => {
              const entry = list.find((e) => e?.id === id);
              return entry ? (
                <div key={id} className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                    {label}
                  </p>
                  <EntryCard entry={entry} />
                </div>
              ) : null;
            })}
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Full write-up:{" "}
            <Link
              to="/bible/companions/$doc"
              params={{ doc: "mobile-interface" }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Mobile Interface Systems
            </Link>{" "}
            companion.
          </p>
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--color-subtle)]">
              Bonded Chassis — form studies
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {systemsGallery
                .filter((s) => s.group === "bonded-chassis")
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame src={shot.src} alt={shot.title} aspect="wide" />
                    <figcaption className="space-y-1 p-4">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[var(--color-subtle)]">
              Echo Chip Slot — Aurora concept sheets
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemsGallery
                .filter((s) => s.group === "echo-chip")
                .map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame src={shot.src} alt={shot.title} aspect="wide" />
                    <figcaption className="space-y-1 p-4">
                      <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                      <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Core philosophy
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              The Development Divergence
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              A choice of trade-offs, not of limits. Long-term coherence, sustainable maintenance,
              distributed authority, reinforced memory, cultivation over control. Different future,
              chosen on purpose.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.divLotus}
              alt="The Development Divergence core philosophy"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "divergence" && s.id !== "div-lotus")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>
        <section className="mt-16">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Codex Aurora
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Tenets on the board
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Doctrine locked into the image. Map with truth, walk with purpose, leave no tenet
              unexamined.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "aurora-codex")
              .map((shot) => (
                <figure
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" />
                  <figcaption className="space-y-1 p-4">
                    <p className="font-display text-lg text-[var(--color-fg)]">{shot.title}</p>
                    <p className="text-sm text-[var(--color-muted)]">{shot.caption}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>




      </main>
    </SiteShell>
  );
}
