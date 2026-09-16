import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Copy, Link2, MessageCircle, Search } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/components/ui/button";
import { askExamples, askMeta, askNexus, type AskResult } from "@/lib/ask";

export const Route = createFileRoute("/ask")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  component: AskPage,
  head: () => ({
    meta: [
      { title: "Ask the Nexus — Violet Echoes" },
      {
        name: "description",
        content:
          "Ask the Nexus. Answers from hung Violet Echoes canon only, with citations. No invented streets.",
      },
    ],
  }),
});

const kindLabel: Record<string, string> = {
  entry: "World Bible",
  principle: "Divergence",
  tenet: "Tenet",
  codex: "Codex Aurora",
  glossary: "Glossary",
  companion: "Companion",
};

function AskPage() {
  const { q: initial } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [draft, setDraft] = useState(initial);
  const [copied, setCopied] = useState<"prompt" | "link" | null>(null);
  const [copyHint, setCopyHint] = useState("");

  const result: AskResult | null = useMemo(() => {
    const q = initial.trim();
    if (!q) return null;
    return askNexus(q);
  }, [initial]);

  useEffect(() => {
    setDraft(initial);
  }, [initial]);

  function submit(q: string) {
    const next = q.trim();
    void navigate({ search: { q: next }, replace: false });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    submit(draft);
  }

  async function copyText(text: string, kind: "prompt" | "link") {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(kind);
      setCopyHint("");
      window.setTimeout(() => setCopied(null), 1800);
      return;
    }
    setCopyHint(text);
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Ask the Nexus" />
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Retrieval · receipts
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {askMeta.title}
          </h1>
          <p className="text-lg text-[var(--color-primary-soft)]">{askMeta.tagline}</p>
          <p className="text-[var(--color-muted)]">{askMeta.lead}</p>
        </header>

        <form onSubmit={onSubmit} className="mt-8 space-y-3">
          <label htmlFor="ask-q" className="sr-only">
            Ask the Nexus
          </label>
          <textarea
            id="ask-q"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={3}
            placeholder="Ask something hung — Eimyrja, a tenet, a district…"
            className="w-full resize-y rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" size="lg" disabled={!draft.trim()}>
              <MessageCircle className="h-4 w-4" />
              Ask
            </Button>
            <Link
              to="/search"
              search={{ q: draft.trim() }}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-soft)]"
            >
              <Search className="h-3.5 w-3.5" />
              Search instead
            </Link>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap gap-2">
          {askExamples.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => {
                setDraft(ex);
                submit(ex);
              }}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
            >
              {ex}
            </button>
          ))}
        </div>

        {result ? (
          <section className="mt-10 space-y-6" aria-live="polite">
            <article
              className={`rounded-[var(--radius-xl)] border p-6 ${
                result.known
                  ? "border-[var(--color-border)] bg-[var(--color-surface)]"
                  : "border-[var(--color-gold)]/35 bg-[var(--color-surface)]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {result.known ? "From the wall" : "Not hung"}
              </p>
              {result.heard.length ? (
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Heard {result.heard.map((h) => `“${h.from}” as ${h.to}`).join(", ")}.
                </p>
              ) : null}
              <p className="mt-3 text-[var(--color-fg)] leading-relaxed">{result.answer}</p>
              {!result.known ? (
                <p className="mt-4 text-sm text-[var(--color-muted)]">
                  Propose the gap →{" "}
                  <Link
                    to="/collaborate"
                    className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                  >
                    /collaborate
                  </Link>
                </p>
              ) : null}
            </article>

            {result.citations.length ? (
              <div>
                <h2 className="font-display text-2xl text-[var(--color-fg)]">Sources</h2>
                <ul className="mt-4 space-y-3">
                  {result.citations.map((c) => (
                    <li key={`${c.href}-${c.title}`}>
                      <a
                        href={c.href}
                        className="block rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition-colors hover:border-[var(--color-primary)]"
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                          {kindLabel[c.kind] ?? c.kind}
                        </p>
                        <p className="mt-1 font-medium text-[var(--color-primary-soft)]">
                          {c.title}
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-muted)]">{c.excerpt}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <p className="text-sm text-[var(--color-muted)]">{askMeta.modelNote}</p>
              <p className="mt-2 break-all font-mono text-xs text-[var(--color-subtle)]">
                {result.permalink}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => void copyText(result.grokPrompt, "prompt")}
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied === "prompt" ? "Copied prompt" : "Copy for Grok"}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => void copyText(result.permalink, "link")}
                >
                  <Link2 className="h-3.5 w-3.5" />
                  {copied === "link" ? "Copied link" : "Copy link"}
                </Button>
              </div>
              {copyHint ? (
                <textarea
                  readOnly
                  value={copyHint}
                  className="mt-3 h-28 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] p-2 font-mono text-xs text-[var(--color-fg)]"
                  onFocus={(e) => e.currentTarget.select()}
                />
              ) : null}
            </div>
          </section>
        ) : (
          <p className="mt-10 text-sm text-[var(--color-subtle)]">
            Same corpus as{" "}
            <a href="/world.json" className="text-[var(--color-primary-soft)] hover:underline">
              world.json
            </a>
            . Agents:{" "}
            <a href="/api/ask" className="text-[var(--color-primary-soft)] hover:underline">
              GET /api/ask?q=
            </a>
          </p>
        )}
      </main>
    </SiteShell>
  );
}
