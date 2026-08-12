import { Link, createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import {
  foundationsDeckMeta as meta,
  foundationsSlides,
  nexusMindMap,
  divergenceTimeline,
} from "@/data/foundations-deck";

export const Route = createFileRoute("/bible/foundations")({
  component: FoundationsDeckPage,
  head: () => ({
    meta: [
      {
        title: `${meta.title} — Foundations · Violet Echoes`,
      },
      {
        name: "description",
        content: `${meta.body.join(" ")} Includes the Doors Into the Nexus mind map.`,
      },
      {
        name: "keywords",
        content:
          "Violet Echoes, foundations, tenets, Divergence, dual-layer, mind map, Gemini Notebook",
      },
    ],
  }),
});

function FoundationsDeckPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <PageNav section="World Bible" sectionTo="/bible" current={meta.title} />

        <header className="space-y-4 border-b border-[var(--color-border)] pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Foundations handout · mind map + {meta.pages} slides · {meta.by}
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {meta.title}
          </h1>
          <p className="text-xl text-[var(--color-primary-soft)]">{meta.tagline}</p>
          <p className="max-w-2xl text-[var(--color-muted)]">{meta.body[0]}</p>
          <p className="max-w-2xl text-sm text-[var(--color-subtle)]">{meta.body[1]}</p>
          <p className="text-sm italic text-[var(--color-gold)]">
            {meta.subtitle} · {meta.brandLine}
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-subtle)]">
            Initialization sequence: {meta.initSequence}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="#mind-map"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
            >
              Mind map
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
            >
              Timeline
            </a>
            <a
              href={meta.pdfHref}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <a
              href={meta.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              <FileText className="h-3.5 w-3.5" />
              Open PDF
            </a>
            <Link
              to="/bible/companions"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              Companion library →
            </Link>
            <Link
              to="/credits"
              className="inline-flex items-center rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              Credits · Gemini trail
            </Link>
          </div>
        </header>

        {/* Mind map — four doors into the Nexus */}
        <section
          id="mind-map"
          className="mt-10 scroll-mt-24 space-y-5 border-b border-[var(--color-border)] pb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Mind map · {nexusMindMap.by}
            </p>
            <h2 className="mt-1 font-display text-3xl text-[var(--color-fg)]">
              {nexusMindMap.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
              {nexusMindMap.subtitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">
              {nexusMindMap.blurb}
            </p>
          </div>

          <figure className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            <MediaFrame
              src={nexusMindMap.src}
              alt="Violet Echoes: Doors Into the Nexus — dual-layer mind map"
              aspect="sheet"
              fit="contain"
              expandable
              priority
            />
            <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-subtle)]">
              Tap for full map · spatial overview. If any on-map text is soft, use the clean
              door list below and the slide deck for readable law.
            </figcaption>
          </figure>

          <div className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[var(--color-surface)]/80 p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Center
            </p>
            <h3 className="mt-1 font-display text-xl text-[var(--color-fg)]">
              {nexusMindMap.center.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{nexusMindMap.center.body}</p>
            <Link
              to="/city"
              className="mt-3 inline-block text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              City map & districts →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {nexusMindMap.doors.map((door) => (
              <article
                key={door.id}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-5"
              >
                <h3 className="font-display text-lg text-[var(--color-fg)]">{door.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {door.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={door.href}
                  className="mt-4 inline-block text-xs text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Open on site →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline — historical weight of the Divergence */}
        <section
          id="timeline"
          className="mt-10 scroll-mt-24 space-y-5 border-b border-[var(--color-border)] pb-12"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
              Infographic · {divergenceTimeline.by}
            </p>
            <h2 className="mt-1 font-display text-3xl text-[var(--color-fg)]">
              {divergenceTimeline.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
              {divergenceTimeline.subtitle}
            </p>
            <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">
              {divergenceTimeline.blurb}
            </p>
          </div>

          <figure className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            <MediaFrame
              src={divergenceTimeline.src}
              alt="Timeline of the Divergence — The Foundation of Violet Echoes"
              aspect="sheet"
              fit="contain"
              expandable
            />
            <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-subtle)]">
              Tap for full sheet · five echoes left to right. If on-art text is soft, use the
              readable milestones below.
            </figcaption>
          </figure>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {divergenceTimeline.milestones.map((m, i) => (
              <article
                key={m.id}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4"
              >
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-base text-[var(--color-fg)]">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{m.body}</p>
                <a
                  href={m.href}
                  className="mt-3 inline-block text-xs text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Open on site →
                </a>
              </article>
            ))}
          </div>
        </section>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Slide index">
          <span className="self-center text-xs uppercase tracking-[0.14em] text-[var(--color-subtle)]">
            Deck
          </span>
          {foundationsSlides.map((s) => (
            <a
              key={s.num}
              href={`#slide-${s.num}`}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-subtle)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary-soft)]"
            >
              {String(s.num).padStart(2, "0")}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-10">
          {foundationsSlides.map((slide) => (
            <section
              key={slide.num}
              id={`slide-${slide.num}`}
              className="scroll-mt-24 space-y-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    Slide {String(slide.num).padStart(2, "0")} · {meta.pages}
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
                    {slide.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{slide.blurb}</p>
                </div>
              </div>
              <figure className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                <MediaFrame
                  src={slide.src}
                  alt={`${meta.title} — ${slide.title}`}
                  aspect="sheet"
                  fit="contain"
                  expandable
                  priority={slide.num <= 2}
                />
                <figcaption className="border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-subtle)]">
                  Tap for full slide · PDF remains the download master
                </figcaption>
              </figure>
            </section>
          ))}
        </div>

        <section className="mt-14 space-y-3 border-t border-[var(--color-border)] pt-8">
          <h2 className="font-display text-xl text-[var(--color-fg)]">Go deeper</h2>
          <ul className="space-y-2">
            {meta.related.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="pt-4 text-sm italic text-[var(--color-muted)]">
            May the Echoes Remember. · {meta.credit}
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
