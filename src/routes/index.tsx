import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Cpu, Map, Music2, Search } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { EntryCard } from "@/components/entry-card";
import { MediaFrame } from "@/components/media-frame";
import { media } from "@/data/media";
import {
  auroraTenets,
  entries,
  principles,
  brandLine,
  rememberLine,
  siteMeta,
  theTenets,
} from "@/data/world";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${siteMeta.name} — Home` },
      { name: "description", content: siteMeta.description },
      { property: "og:image", content: media.og },
    ],
  }),
});

const doors = [
  {
    to: "/city" as const,
    title: "City",
    blurb: "Walk districts, landmarks, and the rain-lit skyline.",
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
];

function HomePage() {
  const featured = ["city-overview", "divergence", "eimyrja", "aethelgard"]
    .map((id) => entries.find((e) => e.id === id))
    .filter(Boolean);

  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <img
              src={media.hero}
              alt=""
              className="h-full w-full object-cover object-center opacity-45"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[color-mix(in_oklab,var(--color-bg)_82%,transparent)] to-[color-mix(in_oklab,var(--color-bg)_55%,transparent)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[color-mix(in_oklab,var(--color-bg)_40%,transparent)]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pb-24 lg:pt-20">
            <div className="space-y-7">
              <p className="font-display text-base italic leading-snug text-[var(--color-primary-soft)] sm:text-lg">
                &ldquo;{rememberLine.text}&rdquo;
                <span className="mt-1 block text-xs not-italic font-sans font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  — {rememberLine.attribution}
                </span>
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {`Living Nexus · ${brandLine.sub} · #VioletEchoes`}
              </p>
              <h1 className="font-display text-balance text-5xl leading-[1.05] tracking-tight text-[var(--color-fg)] sm:text-6xl lg:text-7xl">
                Not just a city.
                <span className="block text-[var(--color-primary-soft)]">Home.</span>
              </h1>
              <p className="font-display text-xl text-[var(--color-primary-soft)] sm:text-2xl">
                {brandLine.text}
              </p>
              <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                {siteMeta.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/city">
                  <Button size="lg">
                    Explore the City
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/bible">
                  <Button size="lg" variant="outline">
                    <BookOpen className="h-4 w-4" />
                    Open World Bible
                  </Button>
                </Link>
                <Link to="/systems">
                  <Button size="lg" variant="secondary">
                    <Cpu className="h-4 w-4" />
                    Enter Systems
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-[var(--color-subtle)]">
                Built for humans and AI agents · Structured data ·{" "}
                <a
                  href="/llms.txt"
                  className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  llms.txt
                </a>{" "}
                ·{" "}
                <a
                  href="/api/world.json"
                  className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  world.json
                </a>
                {" · "}
                <Link
                  to="/search"
                  search={{ q: "" }}
                  className="inline-flex items-center gap-1 text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  <Search className="h-3 w-3" />
                  Search
                </Link>
              </p>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[360px]">
              <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/50 shadow-[0_0_60px_color-mix(in_oklab,var(--color-primary)_18%,transparent)]">
                <div className="relative h-full w-full">
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
            </div>
          </div>
        </section>

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

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
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

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              World Bible · The Tenets
            </p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)] sm:text-4xl">
              Roots of Violet Echoes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              These tenets are the roots from which Violet Echoes grows. They guide our world, our
              stories, and the way we choose to build — together.
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
