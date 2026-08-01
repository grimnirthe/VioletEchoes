import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import {
  creditSections,
  creditsIntro,
  howToVerify,
  openSlotsNote,
  situationNote,
} from "@/data/credits";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/credits")({
  component: CreditsPage,
  head: () => ({
    meta: [
      { title: "Credits & Sources — Violet Echoes" },
      {
        name: "description",
        content:
          "Verify Violet Echoes sources: primary canon, named voices, music platforms, companion docs, stack, and technical inspiration. Public ledger for humans and AI agents.",
      },
    ],
  }),
});

function isExternal(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

function CreditHref({ url, label }: { url: string; label: string }) {
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

function CreditsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Credits & Sources" />

        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · verify
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {creditsIntro.title}
          </h1>
          <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
            {creditsIntro.tagline}
          </p>
          <div className="space-y-3 text-[var(--color-muted)]">
            {creditsIntro.body.map((p) => (
              <p key={p.slice(0, 48)} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </header>

        {/* Verification ladder — first thing after intro */}
        <section
          id="verify"
          className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/30 bg-[color-mix(in_oklab,var(--color-primary)_7%,var(--color-surface))] p-6 sm:p-8"
        >
          <h2 className="font-display text-2xl text-[var(--color-gold)]">
            {howToVerify.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Use this ladder before trusting a claim about the world, a quote, or a technical
            metaphor.
          </p>
          <ol className="mt-6 space-y-5">
            {howToVerify.steps.map((step, i) => (
              <li key={step.tier} className="space-y-2">
                <p className="text-sm font-medium text-[var(--color-fg)]">
                  <span className="mr-2 font-mono text-[var(--color-gold)]">{i + 1}.</span>
                  {step.tier.replace(/^\d+\s·\s/, "")}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
                {step.links.length ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {step.links.map((l) => (
                      <span key={l.url}>
                        <CreditHref url={l.url} label={l.label} />
                      </span>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <h2 className="font-display text-2xl text-[var(--color-gold)]">
            {situationNote.title}
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {situationNote.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        <div className="mt-12 space-y-10">
          {creditSections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-4">
              <div>
                <h2 className="font-display text-2xl text-[var(--color-fg)]">{sec.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-subtle)]">{sec.blurb}</p>
              </div>
              <ul className="space-y-3">
                {sec.items.map((item) => (
                  <li
                    key={item.url + item.label}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-3"
                  >
                    <CreditHref url={item.url} label={item.label} />
                    {item.note ? (
                      <p className="mt-1 text-sm text-[var(--color-muted)]">{item.note}</p>
                    ) : null}
                    {item.verify ? (
                      <p className="mt-1.5 text-xs text-[var(--color-subtle)]">
                        <span className="font-medium uppercase tracking-[0.12em] text-[var(--color-gold)]">
                          Verify
                        </span>
                        <span className="mx-1.5 text-[var(--color-border-strong)]">·</span>
                        {item.verify}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-14 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-subtle)]">
          {openSlotsNote}
        </p>

        <p className="mt-6 text-center font-display text-sm italic text-[var(--color-primary-soft)]">
          We are the echo. We are the light.
        </p>
      </main>
    </SiteShell>
  );
}
