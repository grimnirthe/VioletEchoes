import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { straightInfoIntro, straightInfoPages } from "@/data/straight-info";

export const Route = createFileRoute("/info/")({
  component: InfoHub,
  head: () => ({
    meta: [
      { title: "Straight Info — Violet Echoes" },
      {
        name: "description",
        content:
          "Plain-language guides to where AI runs, what it remembers, what it invents, and what the electricity is for.",
      },
    ],
  }),
});

function InfoHub() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Facts" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {straightInfoIntro.kicker}
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {straightInfoIntro.title}
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            {straightInfoIntro.summary}
          </p>
        </header>

        <ul className="mt-10 space-y-4">
          {straightInfoPages.map((page) => (
            <li key={page.slug}>
              <Link
                to="/info/$slug"
                params={{ slug: page.slug }}
                className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-primary)]"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  {page.kicker}
                </p>
                <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">{page.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {page.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-[var(--color-subtle)]">
          Six pages. Each one is an explanation, not a stub. The City links are examples, not proof.{" "}
          <Link to="/city" className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline">
            Enter the City
          </Link>{" "}
          if you wanted the island instead.
        </p>
      </main>
    </SiteShell>
  );
}
