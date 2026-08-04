import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Music2, Palette, BookOpen, MapPin, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
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
import { musicGrounding } from "@/data/music";
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

          {([1, 2] as const).map((wave) => {
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
          <section className="mt-14">
            <h2 className="font-display text-2xl text-[var(--color-fg)]">Art & image</h2>
            <p className="mt-1 text-sm text-[var(--color-subtle)]">
              Keeper: Velora Runeweaver · full cast in the{" "}
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
