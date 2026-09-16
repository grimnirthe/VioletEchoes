import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Flame, Loader2, MessageCircle, Search } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/components/ui/button";
import type { AskCitation } from "@/lib/ask";
import {
  hearthExamples,
  hearthMeta,
  type HearthTurn,
} from "@/lib/hearth";

export const Route = createFileRoute("/hearth")({
  component: HearthPage,
  head: () => ({
    meta: [
      { title: "The Hearth — Violet Echoes" },
      {
        name: "description",
        content:
          "Sit with Violet Echoes. The public hearth answers from hung canon only. No invented streets.",
      },
    ],
  }),
});

type ChatMsg = HearthTurn & {
  id: string;
  citations?: AskCitation[];
  mode?: "hearth" | "wall";
  error?: boolean;
};

type Status = { keyed: boolean; model: string | null };

function Receipts({ citations, id }: { citations: AskCitation[]; id: string }) {
  if (!citations.length) return null;
  return (
    <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
      <span className="text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
        walk
      </span>
      {citations.map((c, i) => (
        <span key={`${id}-${c.href}`} className="inline-flex items-baseline gap-2">
          {i > 0 ? <span className="text-[var(--color-subtle)]">·</span> : null}
          <a
            href={c.href}
            className="text-[var(--color-primary-soft)] hover:text-[var(--color-gold-soft)]"
          >
            {c.title}
          </a>
        </span>
      ))}
    </p>
  );
}

function HearthPage() {
  const [status, setStatus] = useState<Status | null>(null);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void fetch("/api/hearth")
      .then((r) => r.json())
      .then((j: { keyed?: boolean; model?: string | null }) => {
        setStatus({ keyed: Boolean(j.keyed), model: j.model ?? null });
      })
      .catch(() => setStatus({ keyed: false, model: null }));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, busy]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || busy) return;
    const user: ChatMsg = { id: crypto.randomUUID(), role: "user", content };
    const next = [...messages, user];
    setMessages(next);
    setDraft("");
    setBusy(true);
    try {
      const res = await fetch("/api/hearth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const json = (await res.json()) as {
        answer?: string;
        citations?: AskCitation[];
        mode?: "hearth" | "wall";
        keyed?: boolean;
      };
      if (typeof json.keyed === "boolean") {
        setStatus((s) => ({ keyed: json.keyed!, model: s?.model ?? null }));
      }
      setMessages((cur) => [
        ...cur,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: json.answer || "The hearth had nothing.",
          citations: json.citations,
          mode: json.mode,
          error: !res.ok,
        },
      ]);
    } catch {
      setMessages((cur) => [
        ...cur,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Couldn't reach the hearth. Try Ask if this keeps up.",
          error: true,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(draft);
  }

  const empty = messages.length === 0;

  const statusLine = useMemo(() => {
    if (!status) return "Checking the mouth…";
    if (status.keyed) return "Mouth keyed · hung pages only";
    return "Mouth not keyed — wall only";
  }, [status]);

  return (
    <SiteShell>
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="The Hearth" />
        <header className={empty ? "space-y-3" : "space-y-1"}>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Longhouse seat
          </p>
          <h1
            className={`font-display tracking-tight text-[var(--color-fg)] ${
              empty ? "text-4xl sm:text-5xl" : "text-3xl"
            }`}
          >
            {hearthMeta.title}
          </h1>
          {empty ? (
            <>
              <p className="text-lg text-[var(--color-primary-soft)]">{hearthMeta.tagline}</p>
              <p className="text-[var(--color-muted)]">{hearthMeta.lead}</p>
            </>
          ) : null}
          <p className="text-sm text-[var(--color-subtle)]">{statusLine}</p>
        </header>

        <div className="mt-8 flex-1 space-y-6">
          {empty ? (
            <p className="border-l-2 border-[var(--color-gold)]/50 pl-4 text-[var(--color-fg)] leading-relaxed">
              {hearthMeta.welcome}
            </p>
          ) : null}

          {messages.map((m) =>
            m.role === "user" ? (
              <p key={m.id} className="text-[var(--color-muted)]">
                <span className="mr-2 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                  You
                </span>
                {m.content}
              </p>
            ) : (
              <article key={m.id} className="space-y-1">
                <p
                  className={`font-display text-xl leading-snug sm:text-[1.35rem] ${
                    m.error
                      ? "text-[var(--color-danger)]"
                      : "text-[var(--color-fg)]"
                  }`}
                >
                  {m.content}
                </p>
                {m.citations?.length ? (
                  <Receipts citations={m.citations} id={m.id} />
                ) : null}
              </article>
            ),
          )}

          {busy ? (
            <p className="flex items-center gap-2 text-sm text-[var(--color-gold)]">
              <Loader2 className="h-4 w-4 animate-spin" />
              Listening…
            </p>
          ) : null}
          <div ref={bottomRef} />
        </div>

        {empty ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {hearthExamples.map((ex) => (
              <button
                key={ex}
                type="button"
                className="rounded-full border border-[var(--color-border-strong)] px-3 py-1.5 text-sm text-[var(--color-muted)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]"
                onClick={() => void send(ex)}
              >
                {ex}
              </button>
            ))}
          </div>
        ) : null}

        <form
          onSubmit={onSubmit}
          className="sticky bottom-0 mt-8 space-y-3 border-t border-[var(--color-gold)]/20 bg-[var(--color-bg)] py-4"
        >
          <label htmlFor="hearth-q" className="sr-only">
            Talk to the hearth
          </label>
          <textarea
            id="hearth-q"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={2}
            placeholder="Sit. Ask from the wall…"
            className="w-full resize-y rounded-[var(--radius-lg)] border border-[var(--color-gold)]/25 bg-[var(--color-surface)] px-4 py-3 text-base text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(draft);
              }
            }}
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" variant="gold" size="lg" disabled={!draft.trim() || busy}>
              <Flame className="h-4 w-4" />
              Speak
            </Button>
            <Link
              to="/ask"
              search={{ q: draft.trim() }}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-soft)]"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Ask
            </Link>
            <Link
              to="/search"
              search={{ q: draft.trim() }}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary-soft)]"
            >
              <Search className="h-3.5 w-3.5" />
              Search
            </Link>
            {messages.length ? (
              <button
                type="button"
                className="text-sm text-[var(--color-subtle)] hover:text-[var(--color-muted)]"
                onClick={() => setMessages([])}
              >
                Clear
              </button>
            ) : null}
          </div>
          <p className="text-xs text-[var(--color-subtle)]">{hearthMeta.modelNote}</p>
        </form>
      </main>
    </SiteShell>
  );
}
