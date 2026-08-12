import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { PageNav } from "@/components/page-nav";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { media, systemsGallery } from "@/data/media";
import { entries, type ContentKind } from "@/data/world";
import { companionDocs } from "@/data/companions";

export const Route = createFileRoute("/bible/")({
  component: BibleIndexPage,
  head: () => ({
    meta: [
      { title: "World Bible — Violet Echoes" },
      {
        name: "description",
        content:
          "Public World Bible for Violet Echoes — condensed entries plus full companion documents (Divergence Core Framework, systems, homes, vernacular, Eimyrja technical).",
      },
    ],
  }),
});

const order: ContentKind[] = [
  "philosophy",
  "doctrine",
  "system",
  "district",
  "landmark",
  "place",
  "culture",
  "vehicle",
  "glossary",
];

const labels: Record<ContentKind, string> = {
  philosophy: "Foundations",
  doctrine: "Doctrine & Practice",
  system: "The Living City — Major Systems",
  district: "Districts & Geography",
  landmark: "Human-scale Infrastructure",
  place: "Places",
  culture: "People & Relationships",
  vehicle: "Mobile & Specialized Systems",
  glossary: "Language",
};

function BibleIndexPage() {
  const structureShots = systemsGallery.filter(
    (s) => s.group === "bible-index" && s.id !== "bible-cover",
  );

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="World Bible" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            #VioletEchoes · Canon
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            World Bible
          </h1>
          <p className="text-[var(--color-muted)]">
            Condensed city canon plus full companion meat. Private family sheets stay offline;
            this portal keeps systems, districts, doctrine, and Divergence searchable and coherent.
          </p>
          <p className="text-sm text-[var(--color-subtle)]">
            Propose additions →{" "}
            <Link
              to="/collaborate"
              className="font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              /collaborate
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-[var(--color-primary)]/30 text-[var(--color-primary-soft)]">
              {entries.length} condensed entries
            </Badge>
            <Badge className="border-[var(--color-border)] text-[var(--color-muted)]">
              {companionDocs.length} companions
            </Badge>
            <Link
              to="/bible/companions"
              className="text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Open companion library →
            </Link>
            <span className="text-[var(--color-subtle)]">·</span>
            <Link
              to="/bible/foundations"
              className="text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Neon Heartwood foundations
            </Link>
            <span className="text-[var(--color-subtle)]">·</span>
            <Link
              to="/bible/districts"
              className="text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Districts of the Nexus
            </Link>
            <span className="text-[var(--color-subtle)]">·</span>
            <Link
              to="/bible/foundations"
              hash="timeline"
              className="text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Timeline of the Divergence
            </Link>
            <span className="text-[var(--color-subtle)]">·</span>
            <Link
              to="/training"
              className="text-xs font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Resident Training
            </Link>
            <span className="text-[var(--color-subtle)]">·</span>
            <a
              href="/api/world.json"
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
            >
              world.json
            </a>
            <span className="text-[var(--color-subtle)]">·</span>
            <a
              href="/llms.txt"
              className="text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)]"
            >
              llms.txt
            </a>
          </div>
        </header>

        <section className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
          <MediaFrame
            src={media.bibleCoverPillars}
            alt="Violet Echoes World Bible — core pillars"
            aspect="wide"
            veil="bottom"
          />
        </section>

        {structureShots.length ? (
          <section className="mt-10">
            <div className="mb-4 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Structure
              </p>
              <h2 className="font-display text-2xl text-[var(--color-fg)]">
                Layers of the living reference
              </h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Info-rich maps so you can orient before diving into entries.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {structureShots.map((shot) => (
                <div
                  key={shot.id}
                  className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  <MediaFrame src={shot.src} alt={shot.title ?? ""} aspect="video" />
                  <div className="p-3">
                    <p className="text-sm font-medium text-[var(--color-fg)]">{shot.title}</p>
                    {shot.caption ? (
                      <p className="mt-0.5 text-xs text-[var(--color-subtle)]">{shot.caption}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/25 bg-[color-mix(in_oklab,var(--color-primary)_6%,var(--color-surface))] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Full meat
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
            Companion library
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
            The bible cards are the map. Companions are the territory — full markdown, public raw
            files under /docs, readable in-app.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {companionDocs.map((doc) => (
              <li key={doc.id}>
                <Link
                  to="/bible/companions/$doc"
                  params={{ doc: doc.id }}
                  className="block rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-primary)]/40"
                >
                  <p className="font-medium text-[var(--color-primary-soft)]">{doc.title}</p>
                  <p className="mt-1 text-xs text-[var(--color-subtle)]">{doc.pagesHint}</p>
                  <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2">{doc.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/bible/companions"
            className="mt-5 inline-block text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            Browse all companions →
          </Link>
        </section>

        <div className="mt-14 space-y-12">
          {order.map((kind) => {
            const group = entries.filter((e) => e.kind === kind);
            if (!group.length) return null;
            return (
              <section key={kind}>
                <h2 className="mb-4 font-display text-2xl text-[var(--color-fg)]">
                  {labels[kind]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {group.map((entry) => (
                    <EntryCard key={entry.id} entry={entry} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </SiteShell>
  );
}
