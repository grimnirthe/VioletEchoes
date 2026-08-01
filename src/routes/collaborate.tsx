import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import {
  agentPrompt,
  closing,
  collabIntro,
  collabMeta,
  hardRules,
  lanes,
  proposalTemplate,
  readOrder,
  submitPaths,
} from "@/data/collaborate";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/collaborate")({
  component: CollaboratePage,
  head: () => ({
    meta: [
      { title: "Collaborate — Violet Echoes" },
      {
        name: "description",
        content:
          "How humans and AI models collaborate on Violet Echoes: read order, hard rules, contribution lanes, proposal template, and agent starter prompt.",
      },
    ],
  }),
});

function isExternal(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function Href({ url, label }: { url: string; label: string }) {
  if (isExternal(url)) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
      >
        {label}
        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
      </a>
    );
  }
  return (
    <a
      href={url}
      className="font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
    >
      {label}
    </a>
  );
}

function CollaboratePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Collaborate" />

        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · builders
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {collabMeta.title}
          </h1>
          <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
            {collabMeta.tagline}
          </p>
          <div className="space-y-3 text-[var(--color-muted)]">
            {collabIntro.map((p) => (
              <p key={p.slice(0, 40)} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </header>

        {/* Read order */}
        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[var(--color-gold)]">
            {readOrder.title}
          </h2>
          <ol className="space-y-3">
            {readOrder.steps.map((s, i) => (
              <li
                key={s.url}
                className="flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
              >
                <span className="font-mono text-sm text-[var(--color-gold)]">
                  {i + 1}.
                </span>
                <div>
                  <Href url={s.url} label={s.label} />
                  <p className="mt-0.5 text-sm text-[var(--color-muted)]">{s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Hard rules */}
        <section className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[color-mix(in_oklab,var(--color-primary)_7%,var(--color-surface))] p-6 sm:p-8">
          <h2 className="font-display text-2xl text-[var(--color-gold)]">
            {hardRules.title}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
            {hardRules.items.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Lanes */}
        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">{lanes.title}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {lanes.items.map((lane) => (
              <div
                key={lane.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <h3 className="font-medium text-[var(--color-primary-soft)]">{lane.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {lane.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Submit */}
        <section className="mt-12 space-y-6">
          <div>
            <h2 className="font-display text-2xl text-[var(--color-fg)]">
              {submitPaths.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{submitPaths.body}</p>
          </div>
          {submitPaths.paths.map((path) => (
            <div
              key={path.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="font-medium text-[var(--color-gold)]">{path.title}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[var(--color-muted)]">
                {path.items.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Template */}
        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">
            {proposalTemplate.title}
          </h2>
          <pre className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
            {proposalTemplate.text}
          </pre>
        </section>

        {/* Agent prompt */}
        <section className="mt-12 space-y-3">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">
            {agentPrompt.title}
          </h2>
          <p className="text-sm text-[var(--color-subtle)]">
            Paste into Gemini, Claude, local Ollama, etc. Replace{" "}
            <code className="text-[var(--color-gold)]">YOUR_DOMAIN</code> when the
            public domain is live (until then use this site’s origin).
          </p>
          <pre className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-primary)]/25 bg-[var(--color-bg)] p-4 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
            {agentPrompt.text}
          </pre>
        </section>

        <p className="mt-14 border-t border-[var(--color-border)] pt-8 text-center font-display text-sm italic text-[var(--color-primary-soft)]">
          {closing}
        </p>
      </main>
    </SiteShell>
  );
}
