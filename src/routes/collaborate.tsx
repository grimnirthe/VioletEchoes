import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Coffee,
  ExternalLink,
  FileText,
  Github,
  Send,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/components/ui/button";
import {
  afterSubmit,
  buildProposalMarkdown,
  closing,
  collabMeta,
  creditsHonesty,
  firstVisit,
  github,
  hardRules,
  jazPorch,
  modelsBlock,
  processQuestions,
  processRule,
  proposalCardGuide,
  proposalTypes,
  readOrder,
  submitChannels,
  wantDont,
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
          "Drafts welcome. Propose via GitHub Issues or the on-page form. Proposal Cards, Jaz porch welcome, models draft only — hearth ships. #VioletEchoes",
      },
    ],
  }),
});

function CollaboratePage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<string>("other");
  const [target, setTarget] = useState("");
  const [claim, setClaim] = useState("");
  const [why, setWhy] = useState("");
  const [constraint, setConstraint] = useState("");
  const [evidence, setEvidence] = useState("");
  const [conflicts, setConflicts] = useState("none known");
  const [credit, setCredit] = useState("");
  const [copied, setCopied] = useState(false);

  const markdown = useMemo(
    () =>
      buildProposalMarkdown({
        title,
        type,
        target,
        claim,
        why,
        constraint,
        evidence,
        conflicts,
        credit,
      }),
    [title, type, target, claim, why, constraint, evidence, conflicts, credit],
  );

  const canSubmit = title.trim() && claim.trim() && why.trim() && credit.trim();

  function openGithubIssue() {
    if (!canSubmit) return;
    window.open(github.proposalIssueUrl(title.trim(), markdown), "_blank", "noopener,noreferrer");
  }

  async function copyCard() {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

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
          <p className="leading-relaxed text-[var(--color-muted)]">{collabMeta.lead}</p>
        </header>

        {/* Two doors above the fold */}
        <section className="mt-10 space-y-4" aria-label="Submit channels">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            {submitChannels.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {submitChannels.doors.map((d) => (
              <a
                key={d.id}
                href={d.href}
                {...(d.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-primary)]/40"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {d.who}
                </p>
                <h3 className="mt-1 font-display text-xl text-[var(--color-fg)]">
                  {d.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-primary-soft)]">
                  {d.channel}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {d.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-soft)] group-hover:underline">
                  {d.id === "researchers" ? (
                    <Github className="h-4 w-4" />
                  ) : (
                    <FileText className="h-4 w-4" />
                  )}
                  {d.cta}
                  {d.href.startsWith("http") ? (
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  ) : null}
                </span>
              </a>
            ))}
          </div>
          <p className="text-xs leading-relaxed text-[var(--color-subtle)]">
            {submitChannels.privateNote}
          </p>
        </section>

        {/* First visit → porch */}
        <section className="mt-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-5">
          <h2 className="font-display text-xl text-[var(--color-fg)]">
            {firstVisit.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">{firstVisit.body}</p>
          <a
            href={firstVisit.porchCta.href}
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            <Coffee className="h-4 w-4" />
            {firstVisit.porchCta.label}
          </a>
          <p className="mt-2 text-sm italic text-[var(--color-muted)]">
            {firstVisit.short}
          </p>
        </section>

        {/* Want / don't */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-[var(--color-gold)]">
              {wantDont.wantTitle}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
              {wantDont.want.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-[var(--color-gold)]">
              {wantDont.dontTitle}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
              {wantDont.dont.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process rule */}
        <section className="mt-12 space-y-4">
          <h2 className="font-display text-2xl text-[var(--color-fg)]">
            {processRule.title}
          </h2>
          <pre className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 font-mono text-xs text-[var(--color-primary-soft)] sm:text-sm">
            {processRule.flow}
          </pre>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--color-muted)]">
            {processRule.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            {processRule.statuses.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[11px] text-[var(--color-muted)]"
                title={s.meaning}
              >
                <span className="font-medium text-[var(--color-gold)]">{s.label}</span>
                {" — "}
                {s.meaning}
              </span>
            ))}
          </div>
        </section>

        {/* Proposal form */}
        <section
          id="proposal-form"
          className="mt-14 scroll-mt-24 space-y-5 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/25 bg-[var(--color-surface)] p-5 sm:p-6"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Door B · casuals
            </p>
            <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
              {proposalCardGuide.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {proposalCardGuide.blurb} Submit opens a GitHub Issue with your card
              filled in — same queue as researchers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--color-muted)]">Title *</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="Short name for this claim"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-medium text-[var(--color-muted)]">Type *</span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
              >
                {proposalTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Target slug / page
              </span>
              <input
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="/bible/hearthrow or culture#"
              />
            </label>
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Claim * (1–3 sentences)
              </span>
              <textarea
                value={claim}
                onChange={(e) => setClaim(e.target.value)}
                rows={3}
                className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="What should be true?"
              />
            </label>
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Why it fits *
              </span>
              <textarea
                value={why}
                onChange={(e) => setWhy(e.target.value)}
                rows={2}
                className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="How it serves the living city / research spine"
              />
            </label>
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Constraint / cost (if technical)
              </span>
              <textarea
                value={constraint}
                onChange={(e) => setConstraint(e.target.value)}
                rows={2}
                className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="What it costs the system"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Evidence / source
              </span>
              <input
                value={evidence}
                onChange={(e) => setEvidence(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="Optional URL or note"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Conflicts with
              </span>
              <input
                value={conflicts}
                onChange={(e) => setConflicts(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
              />
            </label>
            <label className="block space-y-1.5 sm:col-span-2">
              <span className="text-xs font-medium text-[var(--color-muted)]">
                Credit line *
              </span>
              <input
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
                className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm text-[var(--color-fg)] outline-none focus:border-[var(--color-primary)]/50"
                placeholder="Your name / handle · models: name model + human will accept"
              />
            </label>
          </div>

          <p className="text-xs text-[var(--color-subtle)]">
            By submitting you grant Violet Echoes permission to use this contribution
            on the site with credit. Status starts as <strong className="text-[var(--color-muted)]">proposed</strong>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              disabled={!canSubmit}
              onClick={openGithubIssue}
              className="inline-flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Submit via GitHub Issue
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={copyCard}
              className="inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              {copied ? "Copied" : "Copy Proposal Card"}
            </Button>
            <a
              href={github.newIssueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-center text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              <Github className="h-4 w-4" />
              Blank issue
            </a>
          </div>

          <details className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)]">
            <summary className="cursor-pointer px-3 py-2 text-xs font-medium text-[var(--color-muted)]">
              Preview markdown card
            </summary>
            <pre className="max-h-64 overflow-auto border-t border-[var(--color-border)] px-3 py-3 font-mono text-[11px] leading-relaxed text-[var(--color-subtle)] whitespace-pre-wrap">
              {markdown}
            </pre>
          </details>
        </section>

        {/* Models */}
        <section className="mt-12 space-y-3">
          <h2 className="inline-flex items-center gap-2 font-display text-2xl text-[var(--color-fg)]">
            <Sparkles className="h-5 w-5 text-[var(--color-gold)]" />
            {modelsBlock.title}
          </h2>
          <div className="space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {modelsBlock.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>

        {/* Jaz porch */}
        <section
          id="porch"
          className="mt-14 scroll-mt-24 space-y-4 rounded-[var(--radius-xl)] border border-[var(--color-gold)]/30 bg-[color-mix(in_oklab,var(--color-gold)_6%,var(--color-surface))] px-5 py-6 sm:px-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
            {jazPorch.title} · boards creak; coffee’s on
          </p>
          <h2 className="font-display text-2xl text-[var(--color-fg)]">
            {jazPorch.name}
            <span className="mt-1 block font-sans text-sm font-normal not-italic text-[var(--color-muted)]">
              {jazPorch.role}
            </span>
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
            {jazPorch.lines.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <ol className="list-decimal space-y-1.5 pl-5">
              {jazPorch.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            {jazPorch.close.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="pt-1 font-medium text-[var(--color-primary-soft)]">
              {jazPorch.signoff}
            </p>
            <p className="text-xs italic text-[var(--color-subtle)]">
              {jazPorch.charterNote}
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              {jazPorch.guestBookNote}
            </p>
          </div>
        </section>

        {/* After submit */}
        <section className="mt-12 space-y-3">
          <h2 className="font-display text-xl text-[var(--color-fg)]">
            {afterSubmit.title}
          </h2>
          <ul className="space-y-2">
            {processRule.statuses.map((s) => (
              <li
                key={s.id}
                className="flex gap-3 text-sm text-[var(--color-muted)]"
              >
                <span className="shrink-0 font-mono text-[var(--color-gold)]">
                  {s.label}
                </span>
                <span>{s.meaning}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[var(--color-subtle)]">{afterSubmit.note}</p>
        </section>

        <section className="mt-10 space-y-2">
          <h2 className="font-display text-xl text-[var(--color-fg)]">
            {creditsHonesty.title}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {creditsHonesty.body}{" "}
            <Link
              to="/credits"
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Open Credits →
            </Link>
          </p>
        </section>

        <section className="mt-10 space-y-2">
          <h2 className="font-display text-xl text-[var(--color-fg)]">
            {processQuestions.title}
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            {processQuestions.body}
          </p>
          <a
            href={processQuestions.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            Open [Process] issue
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </section>

        {/* Hard edges + optional read order */}
        <section className="mt-12 space-y-3 border-t border-[var(--color-border)] pt-10">
          <h2 className="font-display text-xl text-[var(--color-gold)]">
            {hardRules.title}
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--color-muted)]">
            {hardRules.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 space-y-3">
          <h2 className="font-display text-xl text-[var(--color-fg)]">
            {readOrder.title}
          </h2>
          <ol className="space-y-2">
            {readOrder.steps.map((s, i) => (
              <li key={s.url} className="flex gap-2 text-sm text-[var(--color-muted)]">
                <span className="font-mono text-[var(--color-gold)]">{i + 1}.</span>
                <span>
                  <a
                    href={s.url}
                    className="font-medium text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                  >
                    {s.label}
                  </a>
                  {" — "}
                  {s.note}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-14 text-center font-display text-lg italic text-[var(--color-primary-soft)]">
          {closing}
        </p>
      </main>
    </SiteShell>
  );
}
