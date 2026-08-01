import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { family, portraitPack } from "@/data/family";

export const Route = createFileRoute("/gallery/pack")({
  component: PortraitPackPage,
  head: () => ({
    meta: [
      { title: "Portrait Pack — Label Frames · Violet Echoes" },
      {
        name: "description",
        content:
          "Numbered portrait pack for Violet Echoes. Confirm who is who so frames can be locked to the gallery.",
      },
    ],
  }),
});

function PortraitPackPage() {
  const locked = portraitPack.filter((f) => f.assignedTo).length;
  const open = portraitPack.length - locked;
  const nameBySlug = Object.fromEntries(family.map((m) => [m.slug, m.name]));

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav section="Gallery" sectionTo="/gallery" current="Portrait pack" />

        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Sorting room
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Portrait pack
          </h1>
          <p className="text-[var(--color-muted)]">
            Every frame from your drop, numbered. Only{" "}
            <strong className="text-[var(--color-fg)]">#03 Chaos Kitty</strong> is locked.
            Tell me the rest like:{" "}
            <code className="rounded bg-[var(--color-surface)] px-1.5 py-0.5 text-[var(--color-primary-soft)]">
              00=barnaby, 11=vesper-armored, 02=starborn outfit
            </code>
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-[var(--color-gold)]">{locked} locked</Badge>
            <Badge className="text-[var(--color-subtle)]">{open} need labels</Badge>
            <Badge className="text-[var(--color-muted)]">{portraitPack.length} total</Badge>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-subtle)]">
              Roster slugs
            </p>
            <p className="mt-2 leading-relaxed">
              {family.map((m) => m.slug).join(" · ")}
            </p>
            <p className="mt-3 text-xs text-[var(--color-subtle)]">
              For extras, use <span className="text-[var(--color-fg)]">slug outfit:label</span>{" "}
              (example: <span className="text-[var(--color-primary-soft)]">15=starborn outfit:stage</span>).
            </p>
          </div>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {portraitPack.map((frame) => {
            const name = frame.assignedTo ? nameBySlug[frame.assignedTo] : null;
            return (
              <figure
                key={frame.id}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="relative">
                  <MediaFrame
                    src={frame.src}
                    alt={`Pack frame ${frame.id}`}
                    aspect="portrait"
                  />
                  <span className="absolute left-2 top-2 rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-bg)_82%,transparent)] px-2 py-1 font-mono text-xs font-medium text-[var(--color-gold)] backdrop-blur-sm">
                    #{frame.id}
                  </span>
                  {frame.assignedTo ? (
                    <span className="absolute bottom-2 left-2 right-2 rounded-[var(--radius-sm)] border border-[var(--color-primary)]/40 bg-[color-mix(in_oklab,var(--color-bg)_85%,transparent)] px-2 py-1 text-center text-xs text-[var(--color-primary-soft)] backdrop-blur-sm">
                      Locked · {name}
                    </span>
                  ) : null}
                </div>
                <figcaption className="space-y-1 px-3 py-2.5">
                  <p className="font-mono text-sm text-[var(--color-fg)]">#{frame.id}</p>
                  <p className="text-xs text-[var(--color-subtle)]">
                    {frame.assignedTo ? `→ ${frame.assignedTo}` : "Unassigned"}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </section>

        <p className="mt-10 text-sm text-[var(--color-muted)]">
          <Link to="/gallery" className="text-[var(--color-primary-soft)] hover:underline">
            ← Back to gallery
          </Link>
        </p>
      </main>
    </SiteShell>
  );
}
