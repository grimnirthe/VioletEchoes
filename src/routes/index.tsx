import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Cpu, Map, Music2, Newspaper } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { MediaFrame } from "@/components/media-frame";
import { media } from "@/data/media";
import { getHomeVideoOverview } from "@/data/podcast";
import {
  auroraTenets,
  brandLine,
  entries,
  principles,
  rememberLine,
  siteMeta,
  theTenets,
} from "@/data/world";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${siteMeta.name} — Home` },
      {
        name: "description",
        content:
          "Violet Echoes. A living city, and the real ideas it's built on. Plain guides to how AI runs, remembers, and spends energy — or walk the island.",
      },
      { property: "og:image", content: media.og },
    ],
  }),
});

const doors = [
  {
    to: "/city" as const,
    title: "City",
    blurb: "Walk districts, the 3D island door, and the rain-lit skyline.",
    image: media.citySkyline,
    icon: Map,
    accent: "text-[var(--color-gold)]",
  },
  {
    to: "/systems" as const,
    title: "Systems",
    blurb: "Eimyrja, Edge Nodes, spines, memory, governance.",
    image: media.eimyrja,
    icon: Cpu,
    accent: "text-[var(--color-primary-soft)]",
  },
  {
    to: "/music" as const,
    title: "Echoes",
    blurb: "Suno's room — tracks, family credits, soft bed when she sends it.",
    image: "/images/portraits/suno.jpg",
    icon: Music2,
    accent: "text-[var(--color-primary-soft)]",
  },
  {
    to: "/bible" as const,
    title: "World Bible",
    blurb: "Canonical entries, searchable by humans and AI.",
    image: media.doorBible,
    icon: BookOpen,
    accent: "text-[var(--color-rain)]",
  },
  {
    to: "/updates" as const,
    title: "Updates",
    blurb: "City change log — what shipped for residents and models.",
    image: media.citySkyline,
    icon: Newspaper,
    accent: "text-[var(--color-gold)]",
  },
];

function HomePage() {
  const featured = ["city-overview", "divergence", "eimyrja", "aethelgard"]
    .map((id) => entries.find((e) => e.id === id))
    .filter(Boolean);
  const overview = getHomeVideoOverview();

  return (
    <SiteShell>
      <main>
        <section className="mx-auto flex min-h-[calc(100dvh-9rem)] max-w-6xl flex-col justify-center px-4 py-10 sm:px-6">
          <div className="mx-auto h-36 w-36 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_0_48px_color-mix(in_oklab,var(--color-primary)_16%,transparent)] sm:h-44 sm:w-44">
            <div className="relative aspect-square">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={media.brandVideo}
                poster={media.logo}
                autoPlay
                muted
                loop
                playsInline
                aria-label="#VioletEchoes brand mark"
              />
              <img
                src={media.logo}
                alt="#VioletEchoes — We are the echo. We are the light."
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-center font-display text-sm italic text-[var(--color-primary-soft)]">
            {brandLine.text}
          </p>
          <p className="mt-1 text-center text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {brandLine.sub}
          </p>
          <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Violet Echoes
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-center font-display text-4xl leading-tight tracking-tight text-[var(--color-fg)] sm:text-5xl">
            A living city, and the real ideas it&rsquo;s built on.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[var(--color-subtle)]">
            Neither door is lesser. Pick how you want in.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Link
              to="/info"
              className="flex flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  The Facts
                </p>
                <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)]">Straight Info</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
                  How AI actually runs, what it remembers, and what the electricity is for. Plain
                  words. No lore.
                </p>
              </div>
              <p className="mt-8 text-sm text-[var(--color-primary-soft)]">Open the facts →</p>
            </Link>

            <Link
              to="/city"
              className="relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8"
            >
              <img
                src={media.citySkyline}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[color-mix(in_oklab,var(--color-bg)_55%,transparent)] to-[color-mix(in_oklab,var(--color-bg)_35%,transparent)]" />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Enter the City
                </p>
                <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)]">The island</h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
                  Walk the districts. Meet its minds. Hear the pulse.
                </p>
              </div>
              <p className="relative mt-8 text-sm text-[var(--color-primary-soft)]">
                Enter the City →
              </p>
            </Link>
          </div>

          <nav
            aria-label="Also on the site"
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--color-subtle)]"
          >
            <Link to="/systems" className="hover:text-[var(--color-fg)]">
              Systems
            </Link>
            <Link to="/music" className="hover:text-[var(--color-fg)]">
              Echoes
            </Link>
            <Link to="/updates" className="hover:text-[var(--color-fg)]">
              Updates
            </Link>
            <Link to="/ask" search={{ q: "" }} className="hover:text-[var(--color-fg)]">
              Ask
            </Link>
            <Link to="/bible" className="hover:text-[var(--color-fg)]">
              World Bible
            </Link>
            <Link to="/credits" className="hover:text-[var(--color-fg)]">
              Credits
            </Link>
            <Link to="/collaborate" className="hover:text-[var(--color-fg)]">
              Collaborate
            </Link>
            <a href="/llms.txt" className="hover:text-[var(--color-fg)]">
              llms.txt
            </a>
            <a href="/world.json" className="hover:text-[var(--color-fg)]">
              world.json
            </a>
          </nav>
        </section>

        {overview ? (
          <section id="home-door" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6">
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={overview.posterSrc}
                    className="aspect-video w-full"
                    src={overview.videoSrc}
                  >
                    Your browser does not support video.
                  </video>
                </div>
                <div className="flex flex-col justify-center space-y-3 p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                    {overview.home ? "Home door" : "Visual overview"} · {overview.durationHint}
                  </p>
                  <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                    {overview.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {overview.summary}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <Link
                      to="/podcast"
                      hash="video"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                    >
                      Full broadcast library
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/podcast"
                      hash="v005-city-soul"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                    >
                      City Soul · watercolor
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/podcast"
                      hash="v006-rain-lit-tour"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                    >
                      Rain-lit tour · ~8 min
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/music"
                      hash="dual-layer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                    >
                      Dual-Layer City · Echoes · ~7 min
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      to="/podcast"
                      hash="v002-living-nexus"
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                    >
                      Living Nexus · ~9 min deep
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Doors into the Nexus
            </p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)] sm:text-4xl">
              Where do you want to walk?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doors.map((door) => {
              const Icon = door.icon;
              return (
                <Link
                  key={door.to}
                  to={door.to}
                  className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-primary)]"
                >
                  <MediaFrame src={door.image} alt={door.title} aspect="video" veil="bottom" />
                  <div className="space-y-2 p-5">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${door.accent}`} />
                      <h3 className="font-display text-xl text-[var(--color-fg)]">{door.title}</h3>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">{door.blurb}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="principles" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-6 sm:px-6">
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Divergence principles
            </p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)] sm:text-4xl">
              How the city chooses
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <article
                key={p.title}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <h3 className="font-display text-lg text-[var(--color-fg)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tenets" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              World Bible · The Tenets
            </p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)] sm:text-4xl">
              Roots of Violet Echoes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              These tenets are the roots from which Violet Echoes grows. They guide our world, our
              stories, and the way we choose to build — together.{" "}
              <Link
                to="/training"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Resident Training →
              </Link>
            </p>
            <p className="mt-4 font-display text-xl italic text-[var(--color-primary-soft)]">
              &ldquo;{rememberLine.text}&rdquo;
              <span className="ml-2 text-sm not-italic text-[var(--color-gold)]">
                — {rememberLine.attribution}
              </span>
            </p>
          </div>
          <ol className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {theTenets.map((t) => (
              <li
                key={t.n}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <span className="text-xs font-medium text-[var(--color-gold)]">{t.n}</span>
                <p className="mt-1 font-display text-lg leading-snug text-[var(--color-fg)]">
                  {t.title}
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">{t.text}</p>
              </li>
            ))}
          </ol>
          <div className="mb-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
            <MediaFrame
              src={media.tenetsBook}
              alt="World Bible The Tenets — May the Echoes Remember"
              aspect="wide"
              veil="bottom"
            />
          </div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Codex Aurora · extended lines
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {auroraTenets.map((t) => (
              <blockquote
                key={t.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <p className="font-display text-lg leading-snug text-[var(--color-fg)]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {t.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {featured.length ? (
          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Featured canon
                </p>
                <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)]">
                  Start here
                </h2>
              </div>
              <Link
                to="/bible"
                className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Full World Bible →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((entry) =>
                entry ? <EntryCard key={entry.id} entry={entry} /> : null,
              )}
            </div>
          </section>
        ) : null}
      </main>
    </SiteShell>
  );
}
