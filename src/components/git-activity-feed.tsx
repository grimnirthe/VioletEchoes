import { useEffect, useState } from "react";
import { ExternalLink, GitCommitHorizontal, Loader2 } from "lucide-react";
import { githubRepo, type RepoCommit } from "@/data/repo";

function formatWhen(iso: string) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }).format(new Date(iso));
  } catch {
    return iso.slice(0, 10);
  }
}

export function GitActivityFeed() {
  const [commits, setCommits] = useState<RepoCommit[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/commits.json?per_page=12");
        const data = (await res.json()) as {
          commits?: RepoCommit[];
          error?: string;
        };
        if (cancelled) return;
        if (data.error && !data.commits?.length) {
          setError("Git feed unavailable right now.");
          setCommits([]);
          return;
        }
        setCommits(data.commits ?? []);
      } catch {
        if (!cancelled) {
          setError("Could not load repo activity.");
          setCommits([]);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="repo-activity"
      className="scroll-mt-24 space-y-4 border-t border-[var(--color-border)] pt-12"
      aria-label="Repository activity"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            <GitCommitHorizontal className="h-3.5 w-3.5" />
            Repo activity
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
            Git feed
          </h2>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            Live commits from{" "}
            <a
              href={githubRepo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              {githubRepo.owner}/{githubRepo.name}
            </a>
            . Raw wiring trail — not the same as hearth-accepted City Updates
            above.
          </p>
        </div>
        <a
          href={`${githubRepo.htmlUrl}/commits/${githubRepo.branch}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
        >
          Full history
          <ExternalLink className="h-3.5 w-3.5 opacity-60" />
        </a>
      </div>

      {commits === null ? (
        <p className="flex items-center gap-2 text-sm text-[var(--color-subtle)]">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading commits…
        </p>
      ) : error ? (
        <p className="text-sm text-[var(--color-muted)]">{error}</p>
      ) : commits.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">No commits returned.</p>
      ) : (
        <ul className="divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          {commits.map((c) => (
            <li key={c.sha}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 px-4 py-3 transition hover:bg-[color-mix(in_oklab,var(--color-primary)_6%,transparent)] sm:flex-row sm:items-baseline sm:gap-4 sm:px-5"
              >
                <span className="shrink-0 font-mono text-[11px] text-[var(--color-gold)]">
                  {c.shortSha}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-[var(--color-fg)]">
                    {c.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-[var(--color-subtle)]">
                    {c.author}
                    {c.date ? ` · ${formatWhen(c.date)}` : ""}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
