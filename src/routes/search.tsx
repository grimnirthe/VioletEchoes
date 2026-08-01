import { Link, createFileRoute } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { EntryCard } from "@/components/entry-card";
import { PageNav } from "@/components/page-nav";
import { Input } from "@/components/ui/input";
import { searchEntries } from "@/data/world";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Search — Violet Echoes" },
      {
        name: "description",
        content:
          "Search the Violet Echoes World Bible: systems, districts, Divergence philosophy, ships, and vernacular.",
      },
    ],
  }),
});

function SearchPage() {
  const { q: initial } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(initial);

  const results = useMemo(() => searchEntries(q), [q]);

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Search" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-soft)]">
            Retrieval
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Search the Nexus
          </h1>
          <p className="text-[var(--color-muted)]">
            Human search over the same structured corpus exposed to AI agents via{" "}
            <a href="/api/world.json" className="text-[var(--color-primary-soft)] hover:underline">
              world.json
            </a>{" "}
            and{" "}
            <a href="/llms.txt" className="text-[var(--color-primary-soft)] hover:underline">
              llms.txt
            </a>
            .
          </p>
        </header>

        <div className="relative mt-8 max-w-xl">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-subtle)]" />
          <Input
            value={q}
            onChange={(e) => {
              const next = e.target.value;
              setQ(next);
              void navigate({ search: { q: next }, replace: true });
            }}
            placeholder="Try Eimyrja, attenuation, Neon Core, Aethelgard…"
            className="pl-10"
            aria-label="Search World Bible"
            autoFocus
          />
        </div>

        <p className="mt-4 text-sm text-[var(--color-subtle)]">
          {q.trim()
            ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q.trim()}”`
            : `Showing all ${results.length} entries`}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {results.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>

        {!results.length ? (
          <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
            <p className="text-[var(--color-muted)]">No entries matched. Try a shorter keyword.</p>
            <Link
              to="/bible"
              className="mt-3 inline-block text-sm text-[var(--color-primary-soft)] hover:underline"
            >
              Browse full World Bible
            </Link>
          </div>
        ) : null}
      </main>
    </SiteShell>
  );
}
