import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { SimpleMarkdown } from "@/lib/simple-md";
import { companionDocs, getCompanion } from "@/data/companions";

async function loadMarkdown(href: string): Promise<string> {
  const base =
    typeof window !== "undefined"
      ? ""
      : process.env.SSR_ORIGIN || "http://127.0.0.1:8080";
  const res = await fetch(`${base}${href}`);
  if (!res.ok) throw new Error(`Failed to load ${href}: ${res.status}`);
  return res.text();
}

export const Route = createFileRoute("/bible/companions/$doc")({
  component: CompanionDocPage,
  loader: async ({ params }) => {
    const meta = getCompanion(params.doc);
    if (!meta) throw notFound();
    let source = "";
    try {
      source = await loadMarkdown(meta.href);
    } catch {
      source = `# ${meta.title}\n\n_Could not load companion markdown. Try the download link._\n`;
    }
    return { meta, source };
  },
  notFoundComponent: () => (
    <SiteShell>
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <PageNav section="Companion Library" sectionTo="/bible/companions" current="Not found" />
        <h1 className="font-display text-3xl text-[var(--color-fg)]">Companion not found</h1>
        <Link
          to="/bible/companions"
          className="mt-6 inline-block text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
        >
          ← Companion library
        </Link>
      </main>
    </SiteShell>
  ),
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.meta.title} — Companion · Violet Echoes` },
          { name: "description", content: loaderData.meta.blurb },
        ]
      : [{ title: "Companion — Violet Echoes" }],
  }),
});

function CompanionDocPage() {
  const { meta, source } = Route.useLoaderData();
  const others = companionDocs.filter((d) => d.id !== meta.id);

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav
          section="Companion Library"
          sectionTo="/bible/companions"
          current={meta.title}
        />

        <header className="mb-8 space-y-3 border-b border-[var(--color-border)] pb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
            {meta.kind} · {meta.pagesHint}
          </p>
          <h1 className="font-display text-3xl text-[var(--color-fg)] sm:text-4xl">
            {meta.title}
          </h1>
          <p className="text-[var(--color-muted)]">{meta.blurb}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={meta.href}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              <Download className="h-3.5 w-3.5" />
              Download .md
            </a>
            <Link
              to="/bible"
              className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Condensed World Bible →
            </Link>
          </div>
        </header>

        <article className="companion-prose">
          <SimpleMarkdown source={source} />
        </article>

        <section className="mt-14 border-t border-[var(--color-border)] pt-8">
          <h2 className="font-display text-xl text-[var(--color-fg)]">Other companions</h2>
          <ul className="mt-3 space-y-2">
            {others.map((d) => (
              <li key={d.id}>
                <Link
                  to="/bible/companions/$doc"
                  params={{ doc: d.id }}
                  className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteShell>
  );
}
