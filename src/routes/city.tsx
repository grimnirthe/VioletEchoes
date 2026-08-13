import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import { media, systemsGallery } from "@/data/media";
import { CityMapInteractive } from "@/components/city-map";
import { cityMapArt } from "@/data/city-map";
import { entries } from "@/data/world";
import { districtsDeckMeta } from "@/data/districts-deck";
import { divergenceTimeline } from "@/data/foundations-deck";
import { getVideoOverview } from "@/data/podcast";

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
  const rainLitTour = getVideoOverview("v006-rain-lit-tour");
  const hearthrowPortal = getVideoOverview("v008-hearthrow-dual-layer");
  const innovationPortal = getVideoOverview("v009-innovation-shop-floor");
  const neonCorePortal = getVideoOverview("v010-neon-core-skyline");
  const thornwallPortal = getVideoOverview("v011-thornwall-old-iron");

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
            src={cityMapArt.hero3d.src}
            alt={cityMapArt.hero3d.alt}
            aspect="wide"
            veil="bottom"
            priority
          />
          <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs text-[var(--color-subtle)] sm:px-5">
            Island overview · Eimyrja at center · Living Ships at harbor · Aurora 3D map
          </p>
        </section>

        <div className="mt-12">
          <CityMapInteractive />
        </div>

        {rainLitTour?.status === "live" ? (
          <div
            id="rain-lit-tour"
            className="mt-10 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                Visual tour · {rainLitTour.durationHint} · Gemini Notebook
              </p>
              <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                {rainLitTour.title}
              </h2>
              <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                {rainLitTour.summary}
              </p>
            </div>
            <div className="bg-black">
              <video
                controls
                preload="metadata"
                playsInline
                poster={rainLitTour.posterSrc}
                className="aspect-video w-full"
                src={rainLitTour.videoSrc}
              >
                Your browser does not support video.
              </video>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
              <p className="text-xs text-[var(--color-subtle)]">{rainLitTour.by}</p>
              <Link
                to="/podcast"
                hash="v006-rain-lit-tour"
                className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
              >
                Full broadcast library →
              </Link>
            </div>
          </div>
        ) : null}

        <section
          id="districts-deck"
          className="mt-10 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-3 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Spatial handout · {districtsDeckMeta.pages} slides · Gemini Notebook
              </p>
              <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                {districtsDeckMeta.title}
              </h2>
              <p className="text-sm text-[var(--color-primary-soft)]">
                {districtsDeckMeta.tagline}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {districtsDeckMeta.body[0]}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                <Link
                  to="/bible/districts"
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Open the deck →
                </Link>
                <Link
                  to="/bible/districts"
                  hash="matrix"
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  District matrix
                </Link>
              </div>
            </div>
            <Link to="/bible/districts" className="relative block min-h-[12rem] bg-black lg:min-h-full">
              <img
                src="/images/districts-deck/slide-01.jpg"
                alt="Districts of the Nexus — the pie"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
            </Link>
          </div>
        </section>

        <section
          id="timeline"
          className="mt-10 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-3 p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Historical weight · infographic · Gemini Notebook
              </p>
              <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                {divergenceTimeline.title}
              </h2>
              <p className="text-sm text-[var(--color-primary-soft)]">
                {divergenceTimeline.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {divergenceTimeline.blurb}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
                <Link
                  to="/bible/foundations"
                  hash="timeline"
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Open the timeline →
                </Link>
                <Link
                  to="/bible/$slug"
                  params={{ slug: "development-divergence" }}
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Divergence entry
                </Link>
              </div>
            </div>
            <Link
              to="/bible/foundations"
              hash="timeline"
              className="relative block min-h-[12rem] bg-black lg:min-h-full"
            >
              <img
                src={divergenceTimeline.src}
                alt="Timeline of the Divergence — The Foundation of Violet Echoes"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
              />
            </Link>
          </div>
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
                src={cityMapArt.hero3dClean.src}
                alt={cityMapArt.hero3dClean.alt}
                aspect="video"
                className="h-full min-h-[240px]"
              />
              <p className="border-t border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                Island · text-free 3D
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { src: media.innovationSphere, label: "Innovation / Crucible" },
            { src: media.neonCore, label: "Neon Core" },
            { src: media.bifrost, label: "Bifrost ring-road" },
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


        <section id="neon-core" className="mt-14 scroll-mt-24">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Neon Core · third district portal
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Skyline of Coherence
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              The high-altitude door. New Atlantis lines as a diagnostic — beauty is a signal.
              Peak neon is allowed. Unsustainable burn is not.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "neon-core-guide" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Neon Core Lore Guide →
              </Link>
              <Link
                to="/bible/$slug"
                params={{ slug: "neon-core" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Bible entry
              </Link>
              <Link
                to="/city"
                hash="innovation"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Innovation · Grit
              </Link>
              <Link
                to="/city"
                hash="hearthrow"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Hearthrow · Warmth
              </Link>
              <Link
                to="/city"
                hash="thornwall-portal"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Thornwall · Old Iron
              </Link>
            </div>
          </div>
          {neonCorePortal?.status === "live" ? (
            <div
              id="neon-core-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Skyline walk · {neonCorePortal.durationHint} · Gemini Notebook
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  {neonCorePortal.title}
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  {neonCorePortal.summary}
                </p>
              </div>
              <div className="bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={neonCorePortal.posterSrc}
                  className="aspect-video w-full"
                  src={neonCorePortal.videoSrc}
                >
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                <p className="text-xs text-[var(--color-subtle)]">{neonCorePortal.by}</p>
                <Link
                  to="/podcast"
                  hash="v010-neon-core-skyline"
                  className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                >
                  Full broadcast library →
                </Link>
              </div>
            </div>
          ) : (
            <div
              id="neon-core-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Skyline walk · arriving
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  Neon Core — rain-lit skyline
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  Cinematic reserved. New Atlantis lines, long-horizon continuity, no short-term
                  spikes. The walk hangs here when it lands.
                </p>
              </div>
            </div>
          )}
          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.neonCore}
              alt="Neon Core — high-signal skyline and rain-slick streets"
              aspect="wide"
              veil="bottom"
            />
          </div>
        </section>


        <section id="innovation" className="mt-14 scroll-mt-24">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Innovation District · second district portal
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Sector IV · The Crucible
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              The grit door. High local autonomy for experiment; strict kill-switches for city
              coherence. What survives real use graduates. What doesn't is allowed to die cleanly.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "innovation-report" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Innovation Technical Report →
              </Link>
              <Link
                to="/bible/$slug"
                params={{ slug: "innovation-district" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Bible entry
              </Link>
              <Link
                to="/city"
                hash="hearthrow"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Hearthrow · Warmth
              </Link>
            </div>
          </div>
          {innovationPortal?.status === "live" ? (
            <div
              id="innovation-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Shop-floor walk · {innovationPortal.durationHint} · Gemini Notebook
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  {innovationPortal.title}
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  {innovationPortal.summary}
                </p>
              </div>
              <div className="bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={innovationPortal.posterSrc}
                  className="aspect-video w-full"
                  src={innovationPortal.videoSrc}
                >
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                <p className="text-xs text-[var(--color-subtle)]">{innovationPortal.by}</p>
                <Link
                  to="/podcast"
                  hash="v009-innovation-shop-floor"
                  className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                >
                  Full broadcast library →
                </Link>
              </div>
            </div>
          ) : null}
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


        <section id="thornwall" className="mt-14 scroll-mt-24">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Thornwall · fourth district portal
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Old Iron
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              The industrial anchor. Built hard. Kept hard. Local adaptation first. Memory through
              use. Heavy bones turned sanctuary so the city still sings.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "thornwall-codex" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Old Iron Codex →
              </Link>
              <Link
                to="/bible/$slug"
                params={{ slug: "thornwall" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Bible entry
              </Link>
              <Link
                to="/city"
                hash="neon-core"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Neon Core · Skyline
              </Link>
              <Link
                to="/city"
                hash="innovation"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Innovation · Grit
              </Link>
              <Link
                to="/city"
                hash="hearthrow"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Hearthrow · Warmth
              </Link>
            </div>
          </div>
          {thornwallPortal?.status === "live" ? (
            <div
              id="thornwall-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Old Iron walk · {thornwallPortal.durationHint} · Gemini Notebook
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  {thornwallPortal.title}
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  {thornwallPortal.summary}
                </p>
              </div>
              <div className="bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={thornwallPortal.posterSrc}
                  className="aspect-video w-full"
                  src={thornwallPortal.videoSrc}
                >
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                <p className="text-xs text-[var(--color-subtle)]">{thornwallPortal.by}</p>
                <Link
                  to="/podcast"
                  hash="v011-thornwall-old-iron"
                  className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                >
                  Full broadcast library →
                </Link>
              </div>
            </div>
          ) : (
            <div
              id="thornwall-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Old Iron walk · arriving
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  Thornwall — the Weight of Old Iron
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  Cinematic reserved. Repurposed iron foundations. Maintenance as defense. The walk
                  hangs here when it lands.
                </p>
              </div>
            </div>
          )}
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


        <section id="hearthrow" className="mt-14 scroll-mt-24">
          <div className="mb-5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              #VioletEchoes · Hearthrow · first district portal
            </p>
            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              Edge Node: Warmth
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              We keep life going — together. Porches, tea, stories, shared tables. Soft social
              fabric made visible. Tea & stories always welcome.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "hearthrow-guide" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Hearthrow Resident’s Guide →
              </Link>
              <Link
                to="/bible/$slug"
                params={{ slug: "hearthrow" }}
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Bible entry
              </Link>
            </div>
          </div>
          {hearthrowPortal?.status === "live" ? (
            <div
              id="hearthrow-portal"
              className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Dual-Layer walk · {hearthrowPortal.durationHint} · Gemini Notebook
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  {hearthrowPortal.title}
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  {hearthrowPortal.summary}
                </p>
              </div>
              <div className="bg-black">
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={hearthrowPortal.posterSrc}
                  className="aspect-video w-full"
                  src={hearthrowPortal.videoSrc}
                >
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                <p className="text-xs text-[var(--color-subtle)]">{hearthrowPortal.by}</p>
                <Link
                  to="/podcast"
                  hash="v008-hearthrow-dual-layer"
                  className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                >
                  Full broadcast library →
                </Link>
              </div>
            </div>
          ) : null}
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
