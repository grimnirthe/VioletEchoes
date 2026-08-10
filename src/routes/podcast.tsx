import { Link, createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Headphones, Radio } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import {
  podcastEpisodes,
  podcastMeta,
  videoOverviews,
} from "@/data/podcast";

export const Route = createFileRoute("/podcast")({
  component: PodcastPage,
  head: () => ({
    meta: [
      { title: `${podcastMeta.title} — Violet Echoes` },
      {
        name: "description",
        content: podcastMeta.body.join(" "),
      },
      {
        name: "keywords",
        content:
          "Violet Echoes, podcast, broadcast, video overview, foundations, Divergence, #VioletEchoes",
      },
    ],
  }),
});

function PodcastPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav section="Culture" sectionTo="/culture" current="Broadcast" />

        <header className="space-y-4 border-b border-[var(--color-border)] pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Broadcast library · {podcastMeta.credit}
          </p>
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]">
              <Radio className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
                {podcastMeta.title}
              </h1>
              <p className="mt-1 text-lg text-[var(--color-primary-soft)]">
                {podcastMeta.tagline}
              </p>
            </div>
          </div>
          {podcastMeta.body.map((p) => (
            <p key={p.slice(0, 32)} className="max-w-2xl text-[var(--color-muted)]">
              {p}
            </p>
          ))}
          <p className="text-sm italic text-[var(--color-gold)]">
            Let it echo, let it stay. · *thump-thump-thump*
          </p>
        </header>

        {/* Visual overviews — short door pieces */}
        <section className="mt-10 space-y-6" id="video">
          <div className="flex items-center gap-2">
            <Clapperboard className="h-4 w-4 text-[var(--color-gold)]" />
            <h2 className="font-display text-2xl text-[var(--color-fg)]">
              Visual overviews
            </h2>
          </div>
          <p className="text-sm text-[var(--color-muted)]">
            Brief door pieces and deeper technical explainers. Audio deep dives
            live below.
          </p>
          {videoOverviews.map((v) => (
            <article
              key={v.id}
              id={v.id}
              className="scroll-mt-24 space-y-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5 sm:p-7"
            >
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {v.format === "explainer" ? "Explainer" : "Brief"} · {v.series} ·{" "}
                  {v.date} · {v.durationHint}
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)] sm:text-2xl">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {v.summary}
                </p>
              </div>
              {v.status === "live" ? (
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-black">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    poster={v.posterSrc}
                    className="aspect-video w-full"
                    src={v.videoSrc}
                  >
                    Your browser does not support video.
                  </video>
                </div>
              ) : null}
              <ul className="flex flex-wrap gap-2">
                {v.related.map((r) => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      className="inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]/50"
                    >
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--color-subtle)]">{v.by}</p>
            </article>
          ))}
        </section>

        <div className="mt-14 space-y-12">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] pb-4">
            <Headphones className="h-4 w-4 text-[var(--color-gold)]" />
            <h2 className="font-display text-2xl text-[var(--color-fg)]">
              Audio deep dives
            </h2>
          </div>
          {podcastEpisodes.map((ep) => (
            <article
              key={ep.id}
              id={ep.id}
              className="scroll-mt-24 space-y-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5 sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-start">
                <figure className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                  <MediaFrame
                    src={ep.coverSrc}
                    alt={ep.coverAlt}
                    aspect="square"
                    fit="cover"
                    priority
                  />
                </figure>
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    {ep.episode} · {ep.series} · {ep.date}
                  </p>
                  <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                    {ep.title}
                  </h2>
                  <p className="text-sm text-[var(--color-subtle)]">{ep.hosts}</p>
                  {ep.durationHint ? (
                    <p className="text-xs text-[var(--color-subtle)]">{ep.durationHint}</p>
                  ) : null}
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {ep.summary}
                  </p>
                  {ep.status === "awaiting-audio" ? (
                    <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-subtle)]">
                      <Headphones className="h-3.5 w-3.5" />
                      Audio landing soon — export from notebook, drop under{" "}
                      <code className="text-[var(--color-primary-soft)]">
                        /audio/podcast/
                      </code>
                    </p>
                  ) : (
                    <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-surface-2)] px-3 py-1.5 text-xs text-[var(--color-primary-soft)]">
                      <Headphones className="h-3.5 w-3.5" />
                      Live · ready to play
                    </p>
                  )}
                </div>
              </div>

              {ep.audioSrc && ep.status === "live" ? (
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/40 p-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Listen
                  </p>
                  <audio
                    controls
                    preload="metadata"
                    className="w-full"
                    src={ep.audioSrc}
                  >
                    Your browser does not support audio.
                  </audio>
                  {ep.durationHint ? (
                    <p className="mt-2 text-[11px] text-[var(--color-subtle)]">
                      {ep.durationHint} · dual voices
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Show notes
                </h3>
                <ul className="mt-3 space-y-2">
                  {ep.showNotes.map((n) => (
                    <li
                      key={n}
                      className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Handouts & deeper
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ep.related.map((r) => (
                    <li key={r.href}>
                      <a
                        href={r.href}
                        className="inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]/50"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-[var(--color-subtle)]">{ep.by}</p>
            </article>
          ))}
        </div>

        <section className="mt-14 space-y-3 border-t border-[var(--color-border)] pt-8">
          <h2 className="font-display text-xl text-[var(--color-fg)]">Also warm</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/music"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Echoes room — songs & pulse beds
              </Link>
            </li>
            <li>
              <Link
                to="/culture"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Culture — Living Practices & keepers
              </Link>
            </li>
            <li>
              <Link
                to="/bible/foundations"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Foundations — Neon Heartwood + mind map
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
