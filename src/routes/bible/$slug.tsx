import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { BookOpen, Download } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { companionDocs } from "@/data/companions";
import { companionsForEntry, deepSections } from "@/data/deep-sections";
import { imageForEntry } from "@/data/media";
import { entries, getEntryBySlug } from "@/data/world";
import { vernacularSections } from "@/data/vernacular";

export const Route = createFileRoute("/bible/$slug")({
  component: BibleEntryPage,
  loader: ({ params }) => {
    const entry = getEntryBySlug(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  notFoundComponent: BibleNotFound,
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.entry.title} — Violet Echoes World Bible` },
          { name: "description", content: loaderData.entry.summary },
          { name: "keywords", content: loaderData.entry.tags.join(", ") },
        ]
      : [{ title: "Entry — Violet Echoes" }],
  }),
});

function BibleNotFound() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6">
        <PageNav section="World Bible" sectionTo="/bible" current="Not found" />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
          Echo faded
        </p>
        <h1 className="mt-3 font-display text-3xl text-[var(--color-fg)]">
          That entry isn't in the bible
        </h1>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          The link may be old, or the slug shifted. Head back to the index — or open the{" "}
          <Link to="/bible/companions" className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline">
            companion library
          </Link>{" "}
          for full documents.
        </p>
        <Link
          to="/bible"
          className="mt-8 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-fg)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
        >
          ← Back to World Bible
        </Link>
      </main>
    </SiteShell>
  );
}

function BibleEntryPage() {
  const { entry } = Route.useLoaderData();
  const related = (entry.related ?? [])
    .map((id) => entries.find((e) => e.id === id || e.slug === id))
    .filter(Boolean) as typeof entries;
  const image = imageForEntry(entry.id);
  const deep = deepSections[entry.id] ?? [];
  const companionIds = companionsForEntry[entry.id] ?? [];
  const linkedCompanions = companionIds
    .map((id) => companionDocs.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav section="World Bible" sectionTo="/bible" current={entry.title} />

        <article itemScope itemType="https://schema.org/Article" className="space-y-10">
          <header className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge>{entry.kind}</Badge>
              {entry.tags.slice(0, 5).map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1
              itemProp="headline"
              className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl"
            >
              {entry.title}
            </h1>
            <p itemProp="description" className="text-lg text-[var(--color-muted)]">
              {entry.summary}
            </p>
          </header>

          {image ? (
            <figure className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
              <MediaFrame
                src={image}
                alt={`Visual for ${entry.title}`}
                aspect="video"
                priority
              />
            </figure>
          ) : null}

          <section itemProp="articleBody" className="space-y-4">
            <h2 className="font-display text-xl text-[var(--color-gold)]">Overview</h2>
            {entry.body.map((para, i) => (
              <p key={i} className="leading-relaxed text-[var(--color-muted)]">
                <span className="text-[var(--color-fg)]/90">{para}</span>
              </p>
            ))}
          </section>

          {deep.map((sec) => (
            <section
              key={sec.title}
              className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 sm:p-7"
            >
              <h2 className="font-display text-2xl text-[var(--color-fg)]">{sec.title}</h2>
              <div className="mt-4 space-y-3">
                {sec.body?.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-muted)]">
                    {para}
                  </p>
                ))}
              </div>
              {sec.bullets?.length ? (
                <ul className="mt-4 space-y-2.5">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {entry.divergenceLens?.length ? (
            <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h2 className="font-display text-2xl text-[var(--color-gold)]">Divergence Lens</h2>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {entry.divergenceLens.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {entry.seeAlso?.length ? (
                <p className="mt-4 text-xs text-[var(--color-subtle)]">
                  See also: {entry.seeAlso.join(" · ")}
                </p>
              ) : null}
            </section>
          ) : null}

          {entry.id === "vernacular" ? (
            <section className="space-y-8">
              {vernacularSections.map((sec) => (
                <div
                  key={sec.category}
                  className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
                >
                  <h2 className="font-display text-2xl text-[var(--color-fg)]">{sec.category}</h2>
                  <dl className="mt-4 space-y-3">
                    {sec.terms.map((g) => (
                      <div
                        key={g.term}
                        className="border-b border-[var(--color-border)] pb-3 last:border-0"
                      >
                        <dt className="font-medium text-[var(--color-primary-soft)]">{g.term}</dt>
                        <dd className="mt-1 text-sm text-[var(--color-muted)]">{g.def}</dd>
                        {g.example ? (
                          <dd className="mt-1 text-xs italic text-[var(--color-subtle)]">
                            “{g.example}”
                          </dd>
                        ) : null}
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </section>
          ) : null}

          {linkedCompanions.length ? (
            <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[color-mix(in_oklab,var(--color-primary)_6%,var(--color-surface))] p-6">
              <h2 className="font-display text-xl text-[var(--color-gold)]">
                Full supplemental documents
              </h2>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                Condensed entry above. Open the companions for complete frameworks, tables, and
                breakdowns — readable on-site or as public .md files.
              </p>
              <ul className="mt-4 space-y-3">
                {linkedCompanions.map((d) =>
                  d ? (
                    <li
                      key={d.id}
                      className="flex flex-col gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)]/50 p-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="font-medium text-[var(--color-fg)]">{d.title}</p>
                        <p className="text-xs text-[var(--color-subtle)]">{d.blurb}</p>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-2">
                        <Link
                          to="/bible/companions/$doc"
                          params={{ doc: d.id }}
                          className="inline-flex items-center gap-1 rounded-full border border-[var(--color-primary)]/40 px-2.5 py-1 text-xs text-[var(--color-primary-soft)]"
                        >
                          <BookOpen className="h-3 w-3" />
                          Read
                        </Link>
                        <a
                          href={d.href}
                          download
                          className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                        >
                          <Download className="h-3 w-3" />
                          .md
                        </a>
                      </div>
                    </li>
                  ) : null,
                )}
              </ul>
              <Link
                to="/bible/companions"
                className="mt-4 inline-block text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Browse full companion library →
              </Link>
            </section>
          ) : (
            <p className="text-sm text-[var(--color-subtle)]">
              Need deeper canon?{" "}
              <Link
                to="/bible/companions"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Companion library
              </Link>
            </p>
          )}

          {related.length ? (
            <section>
              <h2 className="mb-3 font-display text-xl text-[var(--color-fg)]">Related entries</h2>
              <div className="flex flex-wrap gap-2">
                {related.map((r) =>
                  r ? (
                    <Link
                      key={r.id}
                      to="/bible/$slug"
                      params={{ slug: r.slug }}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
                    >
                      {r.title}
                    </Link>
                  ) : null,
                )}
              </div>
            </section>
          ) : null}
        </article>
      </main>
    </SiteShell>
  );
}
