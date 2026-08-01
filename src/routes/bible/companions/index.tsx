import { Link, createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, FileText } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { companionDocs } from "@/data/companions";

export const Route = createFileRoute("/bible/companions/")({
  component: CompanionsIndexPage,
  head: () => ({
    meta: [
      { title: "Companion Library — Violet Echoes World Bible" },
      {
        name: "description",
        content:
          "Full supplemental documents for Violet Echoes: Development Divergence Core Framework, systems applications, characters, family homes, vernacular, Eimyrja protonic architecture. Readable on-site and downloadable as markdown.",
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
            here or download the markdown. Loom + Matt · Aurora approved.
          </p>
          <p className="text-sm text-[var(--color-subtle)]">
            Condensed entries still live under{" "}
            <Link to="/bible" className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline">
              World Bible
            </Link>
            . Open a companion when you need the full why, how, and failure modes.
          </p>
        </header>

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
