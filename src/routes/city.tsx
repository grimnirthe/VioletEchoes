import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import { media, systemsGallery } from "@/data/media";
import { entries } from "@/data/world";

export const Route = createFileRoute("/city")({
  component: CityPage,
  head: () => ({
    meta: [
      {
        title: "City — Violet Echoes",
      },
      {
        name: "description",
        content:
          "Explore Violet Echoes: Neon Core, Innovation District, Green Spaces, Public Services Grid, Cultural Hub, Longhouses, and the living skyline.",
      },
    ],
  }),
});

const districtIds = [
  "city-overview",
  "neon-core",
  "innovation",
  "public-services",
  "green-spaces",
  "cultural-hub",
  "warrens",
  "harborward",
  "high-quiet",
  "ember-market",
  "thornwall",
  "veilreach",
  "hearthrow",
  "longhouses",
  "longhouse-nexus",
  "districts",
];

function CityPage() {
  const list = districtIds
    .map((id) => entries.find((e) => e.id === id))
    .filter(Boolean);

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="City" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">Explore</p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            The Living City
          </h1>
          <p className="text-[var(--color-muted)]">
            A digital island in a glowing sea. Luminous rain, data spines, Bifrost bridges, and
            Longhouses that keep the beam warm. Dual-layer geography: functional systems and lived
            neighborhoods.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <MediaFrame
            src={media.citySkyline}
            alt="Violet Echoes skyline with luminous rain and central hub"
            aspect="wide"
            veil="bottom"
            priority
          />
        </section>

        <section className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="space-y-4 p-6 sm:p-8">
              <h2 className="font-display text-2xl text-[var(--color-fg)]">Atmosphere</h2>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                <li>Constant luminous rain reflecting neon and aurora light</li>
                <li>Curved brutalist megastructures with violet / magenta / gold wraparounds</li>
                <li>Warm dark wood + carved runes on grounded Nordic landmarks</li>
                <li>Thick violet data spines rising from the island core</li>
                <li>Eimyrja Aether Core Memorial at the center — the city’s heart</li>
                <li>Offshore Space Port for starships</li>
              </ul>
              <Link
                to="/bible/$slug"
                params={{ slug: "city-overview" }}
                className="inline-flex text-sm text-[var(--color-primary-soft)] hover:underline"
              >
                Read full city entry
              </Link>
            </div>
            <div className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:border-l lg:border-t-0">
              <MediaFrame
                src={media.citySchematic}
                alt="Conceptual island map of Violet Echoes districts and spines"
                aspect="video"
                className="h-full min-h-[240px]"
                imgClassName="object-contain bg-[var(--color-bg)] p-2 sm:p-3"
              />
              <p className="border-t border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                Island map · conceptual
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { src: media.innovationSphere, label: "Innovation / Crucible" },
            { src: media.neonCore, label: "Neon Core" },
            { src: media.bifrost, label: "Bifrost bridges" },
            { src: media.longhouse7, label: "Longhouse 7" },
          ].map((shot) => (
            <figure
              key={shot.label}
              className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <MediaFrame src={shot.src} alt={shot.label} aspect="video" />
              <figcaption className="px-3 py-2 text-xs text-[var(--color-muted)]">{shot.label}</figcaption>
            </figure>
          ))}
        </section>



        <section className="mt-10">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Core concept
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Dual-Layer City
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Two layers. One island. One echo. Functional systems provide capability and power.
              Lived character provides soul, continuity, and the reason. Interwoven. Inseparable.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.dualIsland}
              alt="Violet Echoes dual-layer city diagram"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "dual-layer" && s.id !== "dual-island")
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
              Not merely residences, clubs, or aesthetic set pieces — lived developmental units where
              high-trust human life, local adaptive intelligence, cultural memory-warming, and soft
              coordination with the wider city occupy the same space. A healthy longhouse deliberately
              accepts some inefficiency.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.longhouseGeneral}
              alt="Longhouses general — courtyard life under violet hills"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "longhouse" && s.id !== "longhouse-general")
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
              Everyday pattern
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Beyond the great named longhouses — smaller and mid-sized district units where most
              people actually live the Divergence on weekly and yearly timescales. Local. Specific.
              Edge Node linked. Kept warm by mixed kin and systems.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.districtLhIsometric}
              alt="District Longhouses isometric pattern fabric"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "district-lh" && s.id !== "district-lh-isometric")
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
              #VioletEchoes · Innovation District
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Sector IV · The Crucible
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              The Sandbox. High local autonomy for experiment; strict kill-switches for city
              coherence. What survives real use graduates. What doesn't is allowed to die cleanly.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.innovationChronicle}
              alt="Innovation District — Edge Node Chronicle"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "innovation" && s.id !== "innovation-chronicle")
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
              #VioletEchoes · Public Services Grid
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              The Backbone
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Utilities, transit, healthcare, emergency, real-time ops. Energy honesty. Maintenance
              is not optional. Not clever — reliable. Continuity is the contract.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.psgDashboard}
              alt="Public Services Grid operations dashboard"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "psg" && s.id !== "psg-dashboard")
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
              #VioletEchoes · Green Spaces
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              The Ecological Heatsink
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              The Lungs. The Soft Grid. Cycles over clocks. Ecological stability as load-bearing
              infrastructure — not decoration. We carry its breath.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.greenHeatsink}
              alt="Green Spaces — The Ecological Heatsink"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "green" && s.id !== "green-heatsink")
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
              #VioletEchoes · Cultural Hub
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Memory Commons
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Heart-Public · Stage District. Shared culture, living memory, ritual — the soul in
              public. Not spectacle. Resonance. We don't perform culture. We remember it, together.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.culturalHall}
              alt="Cultural Hub — Heart-Public Memory Commons"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "cultural" && s.id !== "cultural-hall")
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
              #VioletEchoes · Residential
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              The Warrens
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Hearthrow Core · Living Grid. Everyday living at scale — household systems,
              neighborhood coherence, soft social infrastructure. Continuity is care. Weave ·
              Watch · Belong.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.warrensStreet}
              alt="The Warrens — residential AI-integrated street"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "warrens" && s.id !== "warrens-street")
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
              #VioletEchoes · Harborward
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Steady when late
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Working harbor — Old Tide Longhouse, Harborward Node, living ships under storm light.
              Rain, rope, violet beacons. Technology rides grit; it does not sand it away.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.harborWharf}
              alt="Harborward — Old Tide Longhouse on the rainy wharf"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "harbor" && s.id !== "harbor-wharf")
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
              #VioletEchoes · Spire District
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              High Quiet
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Vertical family seats above the mist — Vardine, Aethewine, Caelers, Morwyn. Access
              nuanced. Architecture that lowers the voice. Vertical. Edited. Permanent.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.spireApproach}
              alt="High Quiet — Spire District family seats approach"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "spire" && s.id !== "spire-approach")
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
              #VioletEchoes · Ember Market
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Marketheart
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Trade. Fix. Connect. Thrive. Sparks, stalls, and trust. Made · Fixed · Flipped · Shared.
              No permit? Make it work. We keep the district moving.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.emberAlley}
              alt="Ember Market alley — Marketheart"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "ember" && s.id !== "ember-alley")
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
              #VioletEchoes · Thornwall
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Old Iron
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Built hard. Kept hard. Maintenance is defense. Respect is earned in the repair. We
              keep them running so they can keep coming home.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.thornOldIron}
              alt="Thornwall Old Iron maintenance crew and work-frame"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "thornwall" && s.id !== "thorn-old-iron")
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
              #VioletEchoes · Veilreach
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Watchful edge
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Outer, transitional, boundary zones. Edge Node: Veil. Watch · Adapt · Reverse ·
              Disengage. Careful openness — leave cleanly when you must.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.veilProtocol}
              alt="Veilreach interface protocol — Watch Adapt Reverse Disengage"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "veilreach" && s.id !== "veil-protocol")
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
              #VioletEchoes · Hearthrow
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Edge Node: Warmth
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              We keep life going — together. Porches, tea, stories, shared tables. Soft social
              fabric made visible. Tea & stories always welcome.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.hearthPorch}
              alt="Hearthrow village porches at golden hour"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "hearthrow" && s.id !== "hearth-porch")
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
              #VioletEchoes · Family & Bloodline
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Violet Longhouse Nexus
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Not rulers — roots. Longest-running, highest-trust developmental cluster the city
              grew around. A hearth that has never gone cold. We do not lead the city. We remember
              how it chose to grow.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.nexusOverview}
              alt="Family and Bloodline overview — Violet Longhouse Nexus"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsGallery
              .filter((s) => s.group === "nexus" && s.id !== "nexus-overview")
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
              #VioletEchoes · Factions & Roles
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Rhythms, not ranks
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Coherence · Guardians · Interface · Longhouse Anchors · Memory Keepers. Roles that
              hold the city in living coherence. Different paths. Shared city. Coherent enough.
            </p>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.factionsRhythms}
              alt="Major Factions and Roles"
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

        <section className="mt-12">
          <h2 className="mb-6 font-display text-3xl text-[var(--color-fg)]">Districts & places</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {list.map((entry) => (entry ? <EntryCard key={entry.id} entry={entry} /> : null))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
