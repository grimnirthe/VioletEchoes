import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Music2, Palette, BookOpen, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import {
  cultureContribute,
  cultureIntro,
  cultureKinds,
  cultureTales,
  cultureWorks,
  faithPractice,
  type CultureTale,
  type CultureWork,
} from "@/data/culture";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/culture")({
  component: CulturePage,
  head: () => ({
    meta: [
      { title: "Culture — Violet Echoes" },
      {
        name: "description",
        content:
          "Violet Echoes culture commons — music, art, myths, urban legends, stories, and faith & practice. Memory-warming works; contribute via Collaborate.",
      },
    ],
  }),
});

function WorkCard({ work }: { work: CultureWork }) {
  const kind = cultureKinds[work.kind];
  const external = work.href?.startsWith("http");

  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
      {work.image ? (
        <div className="aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]">
          <img
            src={work.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-primary)_8%,var(--color-bg))]">
          {work.kind === "music" ? (
            <Music2 className="h-10 w-10 text-[var(--color-primary-soft)] opacity-70" />
          ) : (
            <Palette className="h-10 w-10 text-[var(--color-primary-soft)] opacity-70" />
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
            {kind.label}
          </span>
          {work.accepted ? (
            <span className="text-[10px] text-[var(--color-subtle)]">
              accepted {work.accepted}
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-xl text-[var(--color-fg)]">{work.title}</h3>
        <p className="text-sm text-[var(--color-primary-soft)]">{work.by}</p>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{work.note}</p>
        {work.audio ? (
          <audio controls preload="none" className="mt-1 w-full" src={work.audio}>
            <track kind="captions" />
          </audio>
        ) : null}
        {work.href ? (
          external ? (
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Open
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          ) : (
            <a
              href={work.href}
              className="mt-auto pt-2 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Open in city →
            </a>
          )
        ) : null}
      </div>
    </article>
  );
}

function TaleCard({ tale }: { tale: CultureTale }) {
  const kind = cultureKinds[tale.kind];
  const urban = tale.kind === "urban-myth";
  return (
    <article
      id={tale.id}
      className={`overflow-hidden rounded-[var(--radius-xl)] border bg-[var(--color-surface)] ${
        urban ? "border-[var(--color-gold)]/25" : "border-[var(--color-border)]"
      }`}
    >
      {tale.image ? (
        <div className="aspect-[21/9] overflow-hidden border-b border-[var(--color-border)]">
          <img
            src={tale.image}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
            <BookOpen className="h-3 w-3" />
            {kind.label}
          </span>
          {tale.accepted ? (
            <span className="text-[10px] text-[var(--color-subtle)]">
              accepted {tale.accepted}
            </span>
          ) : null}
        </div>
        <h3 className="font-display text-2xl text-[var(--color-fg)]">{tale.title}</h3>
        <p className="text-sm text-[var(--color-primary-soft)]">{tale.by}</p>
        {tale.where ? (
          <p className="inline-flex items-center gap-1 text-xs text-[var(--color-subtle)]">
            <MapPin className="h-3 w-3 shrink-0" />
            {tale.where}
          </p>
        ) : null}
        <p className="text-sm italic text-[var(--color-muted)]">{tale.note}</p>
        <div className="space-y-3 border-t border-[var(--color-border)] pt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          {tale.body.map((p) => (
            <p key={p.slice(0, 48)}>{p}</p>
          ))}
        </div>
        {tale.canonHref ? (
          <a
            href={tale.canonHref}
            className="inline-block pt-1 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            Related in the city →
          </a>
        ) : null}
      </div>
    </article>
  );
}

function CulturePage() {
  const music = cultureWorks.filter((w) => w.kind === "music");
  const art = cultureWorks.filter((w) => w.kind === "art" || w.kind === "mixed");
  const myths = cultureTales.filter((t) => t.kind === "myth");
  const stories = cultureTales.filter((t) => t.kind === "story");
  const urban = cultureTales.filter((t) => t.kind === "urban-myth");

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Culture" />

        <header className="mx-auto max-w-3xl space-y-4 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · {cultureIntro.hubLine}
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {cultureIntro.title}
          </h1>
          <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
            {cultureIntro.tagline}
          </p>
          <div className="space-y-3 text-[var(--color-muted)]">
            {cultureIntro.body.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="text-sm text-[var(--color-subtle)]">
            <Link
              to="/bible/$slug"
              params={{ slug: cultureIntro.hubSlug }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Cultural Hub
            </Link>
            {" · "}
            <a href="#faith-practice" className="text-[var(--color-primary-soft)] hover:underline">
              Faith & practice
            </a>
            {" · "}
            <a href="#myths-stories" className="text-[var(--color-primary-soft)] hover:underline">
              Myths
            </a>
            {" · "}
            <a href="#urban-myths" className="text-[var(--color-primary-soft)] hover:underline">
              Urban myths
            </a>
            {" · "}
            <Link
              to="/collaborate"
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Contribute
            </Link>
          </p>
        </header>

        {/* Faith & practice — locked doctrine summary */}
        <section
          id="faith-practice"
          className="mx-auto mt-12 max-w-3xl scroll-mt-24 rounded-[var(--radius-xl)] border border-[var(--color-gold)]/35 bg-[color-mix(in_oklab,var(--color-gold)_6%,var(--color-surface))] p-6 sm:p-8"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Doctrine · soft law
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
            {faithPractice.title}
          </h2>
          <p className="mt-1 font-display text-base italic text-[var(--color-primary-soft)]">
            {faithPractice.tagline}
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {faithPractice.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-sm text-[var(--color-subtle)]">
            Full entry:{" "}
            <Link
              to="/bible/$slug"
              params={{ slug: faithPractice.bibleSlug }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Faith & Practice
            </Link>
            {" · "}
            <Link
              to="/bible/$slug"
              params={{ slug: faithPractice.tenetsSlug }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              The Tenets
            </Link>
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-3xl rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[color-mix(in_oklab,var(--color-primary)_7%,var(--color-surface))] p-6 sm:p-8">
          <h2 className="font-display text-2xl text-[var(--color-gold)]">
            {cultureContribute.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {cultureContribute.blurb}
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[var(--color-muted)]">
            {cultureContribute.rules.map((r) => (
              <li key={r.slice(0, 36)}>{r}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[var(--color-subtle)]">
            {cultureContribute.lanesNote}{" "}
            <Link
              to="/collaborate"
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Open Collaborate →
            </Link>
          </p>
        </section>

        <section id="myths-stories" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">Myths & stories</h2>
          <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
            Origin tales, soft laws, fireside fiction. Storytelling is memory infrastructure.
          </p>
          <div className="mt-6 grid gap-6 xl:mx-auto xl:max-w-3xl">
            {myths.map((t) => (
              <TaleCard key={t.id} tale={t} />
            ))}
            {stories.map((t) => (
              <TaleCard key={t.id} tale={t} />
            ))}
          </div>
        </section>

        <section id="urban-myths" className="mt-14 scroll-mt-24">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">Urban myths</h2>
          <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
            Street folklore — marked{" "}
            <span className="text-[var(--color-gold)]">folklore</span>, not bible doctrine.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {urban.map((t) => (
              <TaleCard key={t.id} tale={t} />
            ))}
          </div>
        </section>

        {music.length ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-[var(--color-fg)]">Music</h2>
            <p className="mt-1 text-sm text-[var(--color-subtle)]">
              More on{" "}
              <Link to="/music" className="text-[var(--color-primary-soft)] hover:underline">
                Echoes
              </Link>
              .
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {music.map((w) => (
                <WorkCard key={w.id} work={w} />
              ))}
            </div>
          </section>
        ) : null}

        {art.length ? (
          <section className="mt-14">
            <h2 className="font-display text-2xl text-[var(--color-fg)]">Art & image</h2>
            <p className="mt-1 text-sm text-[var(--color-subtle)]">
              Full cast in the{" "}
              <Link to="/gallery" className="text-[var(--color-primary-soft)] hover:underline">
                Gallery
              </Link>
              .
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {art.map((w) => (
                <WorkCard key={w.id} work={w} />
              ))}
            </div>
          </section>
        ) : null}

        <p className="mx-auto mt-16 max-w-3xl border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-subtle)]">
          New works appear after hearth acceptance.{" "}
          <Link to="/credits" className="text-[var(--color-primary-soft)] hover:underline">
            Credits
          </Link>
          . Not every story endures. We attend what warms memory.
        </p>
      </main>
    </SiteShell>
  );
}
