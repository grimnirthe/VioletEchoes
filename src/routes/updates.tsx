import { createFileRoute } from "@tanstack/react-router";
import { Newspaper, Radio } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { GitActivityFeed } from "@/components/git-activity-feed";
import {
  cityUpdates,
  updateKinds,
  updatesMeta,
  type CityUpdate,
  type UpdateKind,
} from "@/data/updates";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/updates")({
  component: UpdatesPage,
  head: () => ({
    meta: [
      { title: "City Updates — Violet Echoes" },
      {
        name: "description",
        content:
          "Violet Echoes public change log — what shipped in the city for residents, visitors, and AI agents. Feed: /api/updates.json",
      },
    ],
  }),
});

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    }).format(new Date(iso + "T12:00:00Z"));
  } catch {
    return iso;
  }
}

function UpdateCard({ u }: { u: CityUpdate }) {
  const kind = updateKinds[u.kind];
  return (
    <article
      id={u.id}
      className="scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <div className="flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] px-5 py-3 sm:px-6">
        <time
          dateTime={u.date}
          className="font-mono text-xs text-[var(--color-gold)]"
        >
          {formatDate(u.date)}
        </time>
        <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-primary-soft)]">
          {kind.label}
        </span>
        {u.by ? (
          <span className="text-[10px] text-[var(--color-subtle)]">· {u.by}</span>
        ) : null}
      </div>
      <div className="space-y-3 px-5 py-5 sm:px-6">
        <h2 className="font-display text-2xl text-[var(--color-fg)]">{u.title}</h2>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">{u.summary}</p>
        {u.body?.length ? (
          <div className="space-y-2 border-t border-[var(--color-border)] pt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {u.body.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        ) : null}
        {u.hrefs?.length ? (
          <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
            {u.hrefs.map((h) => (
              <a
                key={h.href + h.label}
                href={h.href}
                {...(h.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                {h.label}
                {h.href.startsWith("http") ? " ↗" : " →"}
              </a>
            ))}
          </div>
        ) : null}
        {u.tags?.length ? (
          <p className="pt-1 font-mono text-[10px] text-[var(--color-subtle)]">
            {u.tags.map((t) => `#${t}`).join(" · ")}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function UpdatesPage() {
  const kinds = Object.keys(updateKinds) as UpdateKind[];
  const usedKinds = kinds.filter((k) => cityUpdates.some((u) => u.kind === k));

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="City Updates" />

        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            <Newspaper className="h-3.5 w-3.5" />
            {HASHTAG} · public log
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {updatesMeta.title}
          </h1>
          <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
            {updatesMeta.tagline}
          </p>
          <div className="space-y-3 text-[var(--color-muted)]">
            {updatesMeta.body.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <p className="flex items-start gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-xs leading-relaxed text-[var(--color-subtle)]">
            <Radio className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-gold)]" />
            <span>
              {updatesMeta.feedNote}{" "}
              <a
                href="/api/updates.json"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Open feed
              </a>
            </span>
          </p>
        </header>

        {/* Kind filter jumps */}
        <nav
          aria-label="Update categories"
          className="mt-8 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-6"
        >
          {usedKinds.map((k) => (
            <a
              key={k}
              href={`#kind-${k}`}
              className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] transition hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary-soft)]"
            >
              {updateKinds[k].label}
            </a>
          ))}
          <a
            href="#repo-activity"
            className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] transition hover:border-[var(--color-primary)]/40 hover:text-[var(--color-primary-soft)]"
          >
            Git feed
          </a>
        </nav>

        {/* Full timeline newest first */}
        <section className="mt-10 space-y-5" aria-label="All updates">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Timeline · newest first
          </h2>
          {cityUpdates.map((u) => (
            <UpdateCard key={u.id} u={u} />
          ))}
        </section>

        <div className="mt-16">
          <GitActivityFeed />
        </div>

        {/* By kind for agents / deep skim */}
        <section className="mt-16 space-y-10 border-t border-[var(--color-border)] pt-12">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">By lane</h2>
          {usedKinds.map((k) => {
            const list = cityUpdates.filter((u) => u.kind === k);
            return (
              <div key={k} id={`kind-${k}`} className="scroll-mt-24 space-y-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    {updateKinds[k].label}
                  </p>
                  <p className="text-sm text-[var(--color-subtle)]">
                    {updateKinds[k].blurb}
                  </p>
                </div>
                <ul className="space-y-2">
                  {list.map((u) => (
                    <li key={u.id}>
                      <a
                        href={`#${u.id}`}
                        className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-[var(--radius-md)] border border-transparent px-1 py-1 hover:border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                      >
                        <time
                          dateTime={u.date}
                          className="shrink-0 font-mono text-[11px] text-[var(--color-gold)]"
                        >
                          {u.date}
                        </time>
                        <span className="text-sm text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
                          {u.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <p className="mt-14 text-center text-sm italic text-[var(--color-muted)]">
          May the Echoes Remember — including what we changed.
        </p>
      </main>
    </SiteShell>
  );
}
