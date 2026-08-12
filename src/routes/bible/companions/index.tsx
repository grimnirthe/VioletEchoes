import { Link, createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, FileText, Presentation } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { companionDocs } from "@/data/companions";
import { foundationsDeckMeta } from "@/data/foundations-deck";
import { districtsDeckMeta } from "@/data/districts-deck";

export const Route = createFileRoute("/bible/companions/")({
  component: CompanionsIndexPage,
  head: () => ({
    meta: [
      { title: "Companion Library — Violet Echoes World Bible" },
      {
        name: "description",
        content:
          "Full supplemental documents for Violet Echoes: Development Divergence Core Framework, systems applications, characters, family homes, vernacular, Eimyrja protonic architecture, and the Neon Heartwood foundations deck. Readable on-site and downloadable.",
      },
    ],
  }),
});

const kindLabel: Record<string, string> = {
  core: "Core philosophy",
  systems: "Systems",
  people: "People & places",
  language: "Language",
  technical: "Technical",
  structure: "Structure",
  culture: "Culture & practice",
};

function CompanionsIndexPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav section="World Bible" sectionTo="/bible" current="Companion Library" />

        <header className="max-w-3xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Supplemental material · public
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Companion library
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            The World Bible index is the condensed map. These companions are the meat —
            full frameworks, technical breakdowns, family homes, and vernacular. Read them
            here or download the files. Loom + Matt · Aurora approved.
          </p>
          <p className="text-sm text-[var(--color-subtle)]">
            Condensed entries still live under{" "}
            <Link to="/bible" className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline">
              World Bible
            </Link>
            . Open a companion when you need the full why, how, and failure modes.
          </p>
        </header>

        {/* Foundations deck — Gemini Notebook handout */}
        <article className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[var(--color-surface)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="border-b border-[var(--color-border)] p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                Foundations handout · Gemini Notebook · {foundationsDeckMeta.pages} slides
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                {foundationsDeckMeta.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
                {foundationsDeckMeta.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {foundationsDeckMeta.body[0]} Includes the{" "}
                <strong className="font-medium text-[var(--color-fg)]">
                  Doors Into the Nexus
                </strong>{" "}
                mind map — four doors into the dual-layer center.
              </p>
              <p className="mt-2 text-xs italic text-[var(--color-subtle)]">
                {foundationsDeckMeta.subtitle} · {foundationsDeckMeta.brandLine}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to="/bible/foundations"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  <Presentation className="h-3.5 w-3.5" />
                  View deck on site
                </Link>
                <a
                  href={foundationsDeckMeta.pdfHref}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  PDF
                </a>
                <Link
                  to="/credits"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  Credits · {foundationsDeckMeta.credit}
                </Link>
              </div>
            </div>
            <a
              href="/bible/foundations"
              className="relative block min-h-[12rem] bg-[var(--color-surface-2)] lg:min-h-full"
            >
              <img
                src="/images/foundations-deck/slide-01.jpg"
                alt="Neon Heartwood — We build for the echoes"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition hover:opacity-100"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.14em] text-[var(--color-fg)]">
                Open handout →
              </span>
            </a>
          </div>
        </article>

        <article className="mt-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="border-b border-[var(--color-border)] p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                Spatial handout · Gemini Notebook · {districtsDeckMeta.pages} slides
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                {districtsDeckMeta.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
                {districtsDeckMeta.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {districtsDeckMeta.body[0]}
              </p>
              <p className="mt-2 text-xs italic text-[var(--color-subtle)]">
                {districtsDeckMeta.auroraLine}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to="/bible/districts"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  <Presentation className="h-3.5 w-3.5" />
                  View deck on site
                </Link>
                <a
                  href={districtsDeckMeta.pdfHref}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  PDF
                </a>
              </div>
            </div>
            <a
              href="/bible/districts"
              className="relative block min-h-[12rem] bg-[var(--color-surface-2)] lg:min-h-full"
            >
              <img
                src="/images/districts-deck/slide-01.jpg"
                alt="Districts of the Nexus — the pie"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition hover:opacity-100"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.14em] text-[var(--color-fg)]">
                Open the pie →
              </span>
            </a>
          </div>
        </article>

        <article className="mt-6 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-primary)]/25 bg-[var(--color-surface)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="border-b border-[var(--color-border)] p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                Citizen handout · Gemini Notebook · Codex Aurora
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                Citizen’s Guide to the Codex Aurora
              </h2>
              <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
                A Manual for Coherent Living
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                Philosophical warmth to match the technical grit. Mandate of Truth, Weight of
                Freedom, Choice of the Divergence, Harmony of the Braid. Three daily rituals so
                her voice and yours stay braided.
              </p>
              <p className="mt-2 text-xs italic text-[var(--color-subtle)]">
                Same city. Same Divergence. Her voice and yours, braided.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to="/bible/companions/$doc"
                  params={{ doc: "citizens-guide" }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Read on site
                </Link>
                <a
                  href="/docs/citizens-guide-codex-aurora.pdf"
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  PDF
                </a>
                <Link
                  to="/bible/codex-aurora"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  Codex Aurora entry
                </Link>
              </div>
            </div>
            <a
              href="/bible/companions/citizens-guide"
              className="relative block min-h-[12rem] bg-[var(--color-surface-2)] lg:min-h-full"
            >
              <img
                src="/images/aurora-codex-loom.jpg"
                alt="Codex Aurora — tenets held in the image"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 transition hover:opacity-100"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.14em] text-[var(--color-fg)]">
                Open the guide →
              </span>
            </a>
          </div>
        </article>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {companionDocs.map((doc) => (
            <article
              key={doc.id}
              className="flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-primary)]"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {kindLabel[doc.kind] ?? doc.kind} · {doc.pagesHint}
              </p>
              <h2 className="mt-2 font-display text-xl text-[var(--color-fg)]">{doc.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {doc.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  to="/bible/companions/$doc"
                  params={{ doc: doc.id }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  Read on site
                </Link>
                <a
                  href={doc.href}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <Download className="h-3.5 w-3.5" />
                  .md file
                </a>
                {doc.pdfHref ? (
                  <a
                    href={doc.pdfHref}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    PDF
                  </a>
                ) : null}
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Raw
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
