import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { getStraightInfo, straightInfoPages } from "@/data/straight-info";

export const Route = createFileRoute("/info/$slug")({
  component: InfoPage,
  loader: ({ params }) => {
    const page = getStraightInfo(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  notFoundComponent: InfoMissing,
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.page.title} — Straight Info` },
          { name: "description", content: loaderData.page.summary },
        ]
      : [{ title: "Straight Info — Violet Echoes" }],
  }),
});

function InfoMissing() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <PageNav section="Facts" sectionTo="/info" current="Not found" />
        <h1 className="font-display text-3xl text-[var(--color-fg)]">Page not written</h1>
        <Link
          to="/info"
          className="mt-6 inline-block text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
        >
          ← Straight Info
        </Link>
      </main>
    </SiteShell>
  );
}

function Block({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-2xl text-[var(--color-fg)]">{title}</h2>
      {paragraphs.map((p) => (
        <p key={p} className="leading-relaxed text-[var(--color-muted)]">
          {p}
        </p>
      ))}
    </section>
  );
}

function InfoPage() {
  const { page } = Route.useLoaderData();
  const others = straightInfoPages.filter((p) => p.slug !== page.slug);

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav section="Facts" sectionTo="/info" current={page.title} />
        <article className="space-y-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
              {page.kicker}
            </p>
            <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
              {page.title}
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">{page.summary}</p>
          </header>

          <Block title="What it is" paragraphs={page.what} />
          <Block title="How it works" paragraphs={page.how} />
          <Block title="Why it matters" paragraphs={page.why} />

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-[var(--color-fg)]">Sources</h2>
            <ul className="list-disc space-y-2 pl-5 text-[var(--color-muted)]">
              {page.sources.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[color-mix(in_oklab,var(--color-primary)_6%,var(--color-surface))] p-6">
            <h2 className="font-display text-xl text-[var(--color-gold)]">See it in the City</h2>
            <ul className="mt-4 space-y-4">
              {page.city.map((c) => (
                <li key={c.entryId}>
                  <Link
                    to="/bible/$slug"
                    params={{ slug: c.slug }}
                    className="font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                  >
                    {c.label}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{c.line}</p>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <nav className="mt-12 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/info/$slug"
              params={{ slug: p.slug }}
              className="text-[var(--color-muted)] underline-offset-2 hover:text-[var(--color-fg)] hover:underline"
            >
              {p.title}
            </Link>
          ))}
          <Link to="/city" className="text-[var(--color-gold)] underline-offset-2 hover:underline">
            Enter the City
          </Link>
        </nav>
      </main>
    </SiteShell>
  );
}
