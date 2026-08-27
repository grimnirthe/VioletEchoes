import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ImagePlus } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Button } from "@/components/ui/button";
import { HASHTAG } from "@/data/world";
import {
  hangCategories,
  hangConfirm,
  hangDont,
  hangFields,
  hangFormUrl,
  hangMeta,
  hangWant,
} from "@/data/hang";

export const Route = createFileRoute("/hang")({
  component: HangPage,
  head: () => ({
    meta: [
      { title: "Hang it — Violet Echoes" },
      {
        name: "description",
        content:
          "Bring something that belongs on the wall. Art, street, music, a practice. We review before anything hangs.",
      },
    ],
  }),
});

function HangPage() {
  const formLive = hangFormUrl.trim().length > 0;

  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <PageNav section="Culture" sectionTo="/culture" current="Hang it" />

        <header className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · culture intake
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {hangMeta.title}
          </h1>
          <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
            {hangMeta.tagline}
          </p>
          <p className="leading-relaxed text-[var(--color-muted)]">{hangMeta.lead}</p>
          <p className="text-sm text-[var(--color-subtle)]">{hangMeta.review}</p>
        </header>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-[var(--color-gold)]">
              What we’re looking for
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
              {hangWant.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-[var(--color-gold)]">
              What we’re not
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
              {hangDont.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-[var(--radius-xl)] border border-[var(--color-primary)]/25 bg-[var(--color-surface)] p-5 sm:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
            The drop
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)]">
            Bring an echo
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Category. File. Title. Optional note and name. That’s the pile.
          </p>

          <ul className="mt-4 space-y-1.5 text-sm text-[var(--color-muted)]">
            {hangFields.map((f) => (
              <li key={f.name}>
                <span className="text-[var(--color-fg)]">{f.name}</span>
                {f.required ? (
                  <span className="text-[var(--color-gold)]"> · required</span>
                ) : (
                  <span className="text-[var(--color-subtle)]"> · optional</span>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-3 text-xs text-[var(--color-subtle)]">
            Categories: {hangCategories.join(" · ")}
          </p>

          {formLive ? (
            <div className="mt-6 space-y-4">
              <a href={hangFormUrl} target="_blank" rel="noopener noreferrer">
                <Button className="inline-flex items-center gap-2">
                  <ImagePlus className="h-4 w-4" />
                  Bring an echo
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                </Button>
              </a>
              <iframe
                title="Hang it form"
                src={hangFormUrl}
                className="h-[42rem] w-full rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)]"
              />
            </div>
          ) : (
            <div className="mt-6 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-5">
              <p className="text-sm text-[var(--color-muted)]">
                Mailbox is the page. Drive form is not wired yet.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--color-subtle)]">
                Make the Google Form with the five fields above. Point uploads at the
                Hang it inbox folder. Paste the published form URL into{" "}
                <code className="text-[var(--color-primary-soft)]">src/data/hang.ts</code>
                {" → "}hangFormUrl. Then this button opens the drop.
              </p>
              <Button disabled className="mt-4 inline-flex items-center gap-2">
                <ImagePlus className="h-4 w-4" />
                Bring an echo
              </Button>
            </div>
          )}

          <p className="mt-5 text-xs italic text-[var(--color-subtle)]">{hangConfirm}</p>
        </section>

        <p className="mt-8 text-sm text-[var(--color-subtle)]">
          Proposals, corrections, and research cards still go through{" "}
          <Link
            to="/collaborate"
            className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            Collaborate
          </Link>
          . This door is for work that wants a wall.
        </p>

        <p className="mt-14 text-center font-display text-lg italic text-[var(--color-primary-soft)]">
          May the Echoes Remember.
        </p>
      </main>
    </SiteShell>
  );
}
