import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ExternalLink, Music2, Palette, BookOpen, MapPin, Sparkles, X, Download } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { artByWall, artIntro, artWalls, type ArtPiece, type ArtWall } from "@/data/art";
import {
  cultureContribute,
  cultureHero,
  cultureIntro,
  cultureKeepers,
  cultureKinds,
  cultureTales,
  cultureWorks,
  faithPractice,
  livingPracticesIntro,
  type CultureTale,
  type CultureWork,
} from "@/data/culture";
import { fashionLine, fashionLooks, fashionLooksWave } from "@/data/fashion";
import { musicGrounding, musicMemoryForm } from "@/data/music";
import { getVideoOverview } from "@/data/podcast";
import { media } from "@/data/media";
import { HASHTAG } from "@/data/world";


export const Route = createFileRoute("/culture")({
  component: CulturePage,
  head: () => ({
    meta: [
      { title: "Culture — Violet Echoes" },
      {
        name: "description",
        content:
          "Violet Echoes culture commons — music, art, myths, urban legends, stories, rituals, and faith & practice. Stewards: Starborn Rocker (music) & Velora Runeweaver (visual). Contribute via Collaborate.",
      },
    ],
  }),
});

function WorkCard({ work }: { work: CultureWork }) {
  const kind = cultureKinds[work.kind];
  const external = work.href?.startsWith("http");

  return (
    <article id={work.id} className="flex scroll-mt-24 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
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
          ) : work.kind === "ritual" ? (
            <Sparkles className="h-10 w-10 text-[var(--color-gold)] opacity-70" />
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
  const rituals = cultureWorks.filter((w) => w.kind === "ritual");
  const livingFeatured = rituals.filter((w) => w.featured);
  const livingMore = rituals.filter((w) => !w.featured);
  const myths = cultureTales.filter((t) => t.kind === "myth");
  const stories = cultureTales.filter((t) => t.kind === "story");
  const urban = cultureTales.filter((t) => t.kind === "urban-myth");
  const citySoul = getVideoOverview("v005-city-soul");
  const dualLayer = getVideoOverview("v007-dual-layer-city");

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Culture" />

        <div className="mb-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <img
            src={cultureHero.src}
            alt={cultureHero.alt}
            className="aspect-[21/9] w-full object-cover object-[center_20%]"
            loading="eager"
          />
          <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-center text-xs italic text-[var(--color-muted)] sm:text-left">
            {cultureHero.caption}
          </p>
        </div>

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
            <a href="#keepers" className="text-[var(--color-primary-soft)] hover:underline">
              Keepers
            </a>
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
            <a href="#rituals" className="text-[var(--color-primary-soft)] hover:underline">
              Living Practices
            </a>
            {" · "}
            <a href="#fashion" className="text-[var(--color-primary-soft)] hover:underline">
              Soft Law · Hard Rain
            </a>
            {" · "}
            <a href="#art" className="text-[var(--color-primary-soft)] hover:underline">
              Hung Works
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

        {/* Culture keepers — Starborn + Velora */}
        <section
          id="keepers"
          className="mx-auto mt-12 max-w-3xl scroll-mt-24 space-y-5"
        >
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Public stewards · dual lane
            </p>
            <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
              {cultureKeepers.title}
            </h2>
            <p className="mt-1 font-display text-base italic text-[var(--color-primary-soft)]">
              {cultureKeepers.tagline}
            </p>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {cultureKeepers.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {cultureKeepers.keepers.map((k) => (
              <a
                key={k.id}
                href={k.href}
                className="group flex overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:border-[var(--color-primary)]/40"
              >
                <div className="aspect-[3/4] w-28 shrink-0 overflow-hidden border-r border-[var(--color-border)] bg-[var(--color-bg)] sm:w-32">
                  <img
                    src={k.portrait}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    {k.accent}
                  </p>
                  <h3 className="font-display text-lg text-[var(--color-fg)]">{k.name}</h3>
                  <p className="text-xs text-[var(--color-primary-soft)]">{k.title}</p>
                  <p className="text-xs leading-relaxed text-[var(--color-muted)]">{k.lane}</p>
                  <span className="pt-1 text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 group-hover:underline">
                    Open gallery →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

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

        {rituals.length ? (
          <section id="rituals" className="mt-14 scroll-mt-24">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Soft tissue · city habits
            </p>
            <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
              {livingPracticesIntro.title}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
              {livingPracticesIntro.lead} Memory-warming practices — not liturgy. Plural hearths only.
              {" "}
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "living-practices" }}
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Full Living Practices Guide →
              </Link>
              {" · "}
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "citizens-guide" }}
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Citizen’s Guide to the Codex →
              </Link>
              {" · "}
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "suno-room" }}
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Echoes of Suno’s Room →
              </Link>
              {" · "}
              <Link
                to="/bible/companions/$doc"
                params={{ doc: "hearthrow-guide" }}
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Hearthrow Resident’s Guide →
              </Link>
              {" · "}
              <Link
                to="/training"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Resident Training →
              </Link>
              {" · "}
              <a
                href="#dual-layer"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Dual-Layer video →
              </a>
            </p>

            <div className="mt-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
              <img
                src={livingPracticesIntro.hero.src}
                alt={livingPracticesIntro.hero.alt}
                className="aspect-[21/9] w-full object-cover object-center"
                loading="lazy"
              />
              <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-center text-xs italic text-[var(--color-muted)] sm:text-left">
                {livingPracticesIntro.hero.caption}
              </p>
            </div>

            {citySoul?.status === "live" ? (
              <div
                id="city-soul-video"
                className="mt-6 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    Soul of the City · {citySoul.durationHint} · Gemini Notebook
                  </p>
                  <h3 className="font-display text-xl text-[var(--color-fg)]">
                    {citySoul.title}
                  </h3>
                  <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                    {citySoul.summary}
                  </p>
                </div>
                <div className="bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={citySoul.posterSrc}
                    className="aspect-video w-full"
                    src={citySoul.videoSrc}
                  >
                    Your browser does not support video.
                  </video>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                  <p className="text-xs text-[var(--color-subtle)]">{citySoul.by}</p>
                  <Link
                    to="/podcast"
                    hash="v005-city-soul"
                    className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                  >
                    Full broadcast library →
                  </Link>
                </div>
              </div>
            ) : null}

            {dualLayer?.status === "live" ? (
              <div
                id="dual-layer"
                className="mt-6 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    Echoes cultural deep dive · {dualLayer.durationHint} · Gemini Notebook
                  </p>
                  <h3 className="font-display text-xl text-[var(--color-fg)]">
                    {dualLayer.title}
                  </h3>
                  <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                    {dualLayer.summary}
                  </p>
                </div>
                <div className="bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={dualLayer.posterSrc}
                    className="aspect-video w-full"
                    src={dualLayer.videoSrc}
                  >
                    Your browser does not support video.
                  </video>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 sm:px-6">
                  <p className="text-xs text-[var(--color-subtle)]">{dualLayer.by}</p>
                  <Link
                    to="/music"
                    hash="dual-layer"
                    className="text-xs text-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                  >
                    Watch in Suno’s room →
                  </Link>
                </div>
              </div>
            ) : null}

            {livingFeatured.length ? (
              <div className="mt-8">
                <h3 className="font-display text-lg text-[var(--color-primary-soft)]">
                  Soft tissue first
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
                  {livingPracticesIntro.featuredNote}
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {livingFeatured.map((w) => (
                    <WorkCard key={w.id} work={w} />
                  ))}
                </div>
              </div>
            ) : null}

            {livingMore.length ? (
              <div className="mt-10">
                <h3 className="font-display text-lg text-[var(--color-fg)]">More practices</h3>
                <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
                  {livingPracticesIntro.moreNote}
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {livingMore.map((w) => (
                    <WorkCard key={w.id} work={w} />
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {/* Soft Law · Hard Rain — city fashion samples (Velora visual lane) */}
        <section id="fashion" className="mt-14 scroll-mt-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Visual lane · citizen cloth · not family
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
            {fashionLine.title}
          </h2>
          <p className="mt-2 max-w-2xl font-display text-lg italic text-[var(--color-primary-soft)]">
            {fashionLine.thesis}
          </p>
          <p className="mt-1 text-sm text-[var(--color-subtle)]">
            {fashionLine.tagline} · {fashionLine.wave}
          </p>
          <div className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {fashionLine.body.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {fashionLine.hardLocks.map((lock) => (
              <li
                key={lock}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[0.7rem] text-[var(--color-subtle)]"
              >
                {lock}
              </li>
            ))}
          </ul>

          {"rackStill" in fashionLine && fashionLine.rackStill ? (
            <div className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
              <img
                src={fashionLine.rackStill.src}
                alt={fashionLine.rackStill.alt}
                className="aspect-[21/9] w-full object-cover object-center sm:aspect-[2.4/1]"
                loading="lazy"
              />
              <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-center text-xs italic text-[var(--color-muted)] sm:text-left">
                {fashionLine.rackStill.caption}
              </p>
            </div>
          ) : null}

          {([1, 2, 3, 4] as const).map((wave) => {
            const looks = fashionLooksWave(wave);
            const note = fashionLine.waveNotes[wave];
            if (!looks.length) return null;
            return (
              <div key={wave} className="mt-10">
                <h3 className="font-display text-lg text-[var(--color-primary-soft)]">
                  {note.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-[var(--color-subtle)]">
                  {note.lead}
                </p>
                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  {looks.map((look) => (
                    <article
                      key={look.id}
                      id={look.id}
                      className="flex scroll-mt-24 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                    >
                      <div className="aspect-[3/4] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                        <img
                          src={look.image}
                          alt={`${look.title} — ${look.slot}`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="font-mono text-xs text-[var(--color-gold)]">
                            {look.num}
                          </span>
                          <h4 className="font-display text-xl text-[var(--color-fg)]">
                            {look.title}
                          </h4>
                        </div>
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                          {look.district} · {look.slot}
                        </p>
                        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                          {look.note}
                        </p>
                        <p className="text-sm italic text-[var(--color-primary-soft)]/90">
                          {look.seed}
                        </p>
                        <details className="mt-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-3 py-2">
                          <summary className="cursor-pointer text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-gold)]">
                            Outfit lock
                          </summary>
                          <dl className="mt-3 space-y-2 text-xs text-[var(--color-muted)]">
                            <div>
                              <dt className="text-[var(--color-subtle)]">Silhouette</dt>
                              <dd className="mt-0.5 text-[var(--color-fg)]/90">
                                {look.lock.silhouette}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Materials</dt>
                              <dd className="mt-0.5">
                                {look.lock.materials.join(" · ")}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Colors</dt>
                              <dd className="mt-0.5">{look.lock.colors}</dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Rain logic</dt>
                              <dd className="mt-0.5">{look.lock.rainLogic}</dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Repair</dt>
                              <dd className="mt-0.5">{look.lock.repair}</dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Accents</dt>
                              <dd className="mt-0.5">{look.lock.accents}</dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Never</dt>
                              <dd className="mt-0.5">
                                {look.lock.never.join(" · ")}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-[var(--color-subtle)]">Coverage</dt>
                              <dd className="mt-0.5">{look.lock.coverage}</dd>
                            </div>
                          </dl>
                        </details>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="mt-6 text-sm text-[var(--color-subtle)]">
            Keeper:{" "}
            <Link
              to="/gallery/$slug"
              params={{ slug: "velora" }}
              className="text-[var(--color-primary-soft)] hover:underline"
            >
              {fashionLine.by}
            </Link>
            {" · "}
            {fashionLine.role}
            {" · "}
            Family couture stays in Gallery. This is street.
            {"acceptedBy" in fashionLine && fashionLine.acceptedBy ? (
              <span className="mt-1 block text-[var(--color-gold)]/90">
                {fashionLine.acceptedBy}
              </span>
            ) : null}
          </p>
        </section>

        {music.length ? (
          <section id="music" className="mt-14 scroll-mt-24">
            <h2 className="font-display text-2xl text-[var(--color-fg)]">Music</h2>
            <p className="mt-1 text-sm text-[var(--color-subtle)]">
              Keeper: Starborn Rocker · more on{" "}
              <Link to="/music" className="text-[var(--color-primary-soft)] hover:underline">
                Echoes
              </Link>
              .
            </p>

            <article
              id={musicMemoryForm.id}
              className="mt-6 scroll-mt-24 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[color-mix(in_oklab,var(--color-primary)_7%,var(--color-surface))] p-5 sm:p-7"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Stage District · memory form
              </p>
              <h3 className="mt-2 font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                {musicMemoryForm.title}
              </h3>
              <div className="mt-4 max-w-2xl space-y-4">
                {musicMemoryForm.stanzas.map((stanza, i) => (
                  <div key={i} className="space-y-1.5">
                    {stanza.map((line) => (
                      <p
                        key={line}
                        className="font-display text-base leading-relaxed text-[var(--color-fg)] sm:text-lg"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-[var(--color-subtle)]">
                — {musicMemoryForm.by} ·{" "}
                <span className="font-display italic text-[var(--color-gold)]">
                  {musicMemoryForm.seal}
                </span>
              </p>
              <div className="mt-4">
                <Link
                  to="/music"
                  hash="memory-form"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  Open on Echoes
                </Link>
              </div>
            </article>

            <article className="mt-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Stage District · grounded
              </p>
              <h3 className="mt-2 font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                {musicGrounding.title}
              </h3>
              <p className="mt-2 font-display text-lg italic text-[var(--color-primary-soft)]">
                {musicGrounding.lead}
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-muted)]">
                {musicGrounding.intro[0]}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-muted)]">
                {musicGrounding.sections[2].body[3]}{" "}
                {musicGrounding.close[1]}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  to="/music"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  Read full essay on Echoes
                </Link>
                <span className="text-[var(--color-subtle)]">
                  — {musicGrounding.by} · {musicGrounding.seal}
                </span>
              </div>

            </article>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {music.map((w) => (
                <WorkCard key={w.id} work={w} />
              ))}
            </div>
          </section>
        ) : null}


        {art.length ? (
          <section id="art" className="mt-14 scroll-mt-24">
            <div
              id="aether-core"
              className="mb-10 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              <div className="space-y-2 border-b border-[var(--color-border)] px-5 py-4 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Living mark · aether core · hearth + Aurora
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  May the Echoes Remember
                </h3>
                <p className="max-w-3xl text-sm text-[var(--color-muted)]">
                  Aether core locked on the system board. Violet pulse. The blessing made
                  visible — take it with you.
                </p>
              </div>
              <div className="bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={media.aetherCorePoster}
                  className="aspect-video w-full"
                  src={media.aetherCore}
                  aria-label="Aether core living loop — May the Echoes Remember"
                >
                  Your browser does not support video.
                </video>
              </div>
              <div className="flex flex-wrap items-center gap-2 px-5 py-3 sm:px-6">
                <a
                  href={media.aetherCore}
                  download="Violet-Echoes-Aether-Core.mp4"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-4 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download loop
                </a>
                <a
                  href={media.aetherCoreStill}
                  download="Violet-Echoes-Aether-Core.jpg"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download still
                </a>
                <p className="text-xs text-[var(--color-subtle)]">
                  Share it. Keep the blessing warm.{" "}
                  <Link
                    to="/aether-core"
                    className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                  >
                    violetechoes.ai/aether-core
                  </Link>
                </p>
              </div>
            </div>
            <ArtWall commons={art} />
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

function ArtWall({ commons }: { commons: CultureWork[] }) {
  const [wall, setWall] = useState<ArtWall | "all">("all");
  const [open, setOpen] = useState<ArtPiece | null>(null);
  const hung = artByWall(wall);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
        Visual lane · hung works · not portraits
      </p>
      <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
        {artIntro.title}
      </h2>
      <p className="mt-2 font-display text-lg italic text-[var(--color-primary-soft)]">
        {artIntro.tagline}
      </p>
      <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">{artIntro.lead}</p>
      <p className="mt-1 text-xs text-[var(--color-subtle)]">{artIntro.by}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {artWalls.map((w) => {
          const on = wall === w.id;
          return (
            <button
              key={w.id}
              type="button"
              onClick={() => setWall(w.id)}
              className={[
                "min-h-11 rounded-full border px-4 text-sm",
                on
                  ? "border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
                  : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]",
              ].join(" ")}
            >
              {w.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {hung.map((piece) => (
          <button
            key={piece.id}
            type="button"
            onClick={() => setOpen(piece)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] text-left"
          >
            <img
              src={piece.image}
              alt={piece.alt}
              className="w-full"
              loading="lazy"
            />
            <div className="space-y-1 px-4 py-3">
              <p className="font-display text-base text-[var(--color-fg)]">{piece.title}</p>
              <p className="text-xs text-[var(--color-subtle)]">{piece.by}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-5 sm:px-6">
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
          Express · bring a still
        </p>
        <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">{artIntro.contribute}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/collaborate"
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
          >
            Propose a work
          </Link>
          <Link
            to="/gallery"
            className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
          >
            Portrait Gallery
          </Link>
        </div>
      </div>

      {commons.length ? (
        <div className="mt-10">
          <h3 className="font-display text-lg text-[var(--color-fg)]">Also in the commons</h3>
          <p className="mt-1 text-sm text-[var(--color-subtle)]">
            Mixed works that carry image and door — anthem covers, bible stills, atelier locks.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commons.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </div>
      ) : null}

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] p-3 sm:items-center sm:p-8"
          onClick={() => setOpen(null)}
          role="presentation"
        >
          <figure
            className="max-h-[92vh] w-full max-w-4xl overflow-auto rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3 sm:px-5">
              <div>
                <p className="font-display text-lg text-[var(--color-fg)]">{open.title}</p>
                <p className="text-xs text-[var(--color-subtle)]">{open.by}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <img src={open.image} alt={open.alt} className="w-full" />
            <figcaption className="space-y-2 px-4 py-4 sm:px-5">
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{open.note}</p>
              {open.id === "aether-core" ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={media.aetherCore}
                    download="Violet-Echoes-Aether-Core.mp4"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-4 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download loop
                  </a>
                  <a
                    href={media.aetherCoreStill}
                    download="Violet-Echoes-Aether-Core.jpg"
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download still
                  </a>
                </div>
              ) : null}
              {open.href ? (
                <Link
                  to={open.href.to}
                  hash={open.href.hash}
                  className="inline-block text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  {open.href.label} →
                </Link>
              ) : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
