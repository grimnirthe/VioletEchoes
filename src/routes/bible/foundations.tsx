import { Link, createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { MediaFrame } from "@/components/media-frame";
import {
  foundationsDeckMeta as meta,
  foundationsSlides,
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
        content: meta.body.join(" "),
      },
      { name: "keywords", content: "Violet Echoes, foundations, tenets, Divergence, dual-layer, Gemini Notebook" },
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
            Foundations handout · {meta.pages} slides · {meta.by}
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
              href={meta.pdfHref}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
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

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Slide index">
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
