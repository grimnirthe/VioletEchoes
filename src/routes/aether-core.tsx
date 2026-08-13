import { Link, createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, Home, Palette } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { media } from "@/data/media";
import { HASHTAG, rememberLine } from "@/data/world";

const SHARE_TITLE = "May the Echoes Remember — Aether Core";
const SHARE_DESC =
  "Aether core locked on the system board. Violet pulse. A living still from Violet Echoes — take the loop or the original with you.";
const SHARE_IMAGE = "https://www.violetechoes.ai/images/aether-core.jpg";
const SHARE_URL = "https://www.violetechoes.ai/aether-core";

export const Route = createFileRoute("/aether-core")({
  component: AetherCorePage,
  head: () => ({
    meta: [
      { title: `${SHARE_TITLE} ${HASHTAG}` },
      { name: "description", content: SHARE_DESC },
      { property: "og:title", content: SHARE_TITLE },
      { property: "og:description", content: SHARE_DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: SHARE_URL },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:alt", content: "A crystalline violet heart locked in a dark system board" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SHARE_TITLE },
      { name: "twitter:description", content: SHARE_DESC },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
  }),
});

function AetherCorePage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
          Share door · living mark · hearth + Aurora
        </p>
        <h1 className="mt-2 font-display text-4xl text-[var(--color-fg)] sm:text-5xl">
          {rememberLine.text}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-subtle)]">
          — {rememberLine.attribution} · {HASHTAG}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Aether core locked on the system board. The blessing made visible. Take the loop or
          the original still — something to carry.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          It is not a part. It is the combination. Power and intellect in one piece of matter.
          Architecture named. Lattice still owed.
        </p>

        <div className="mt-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-black shadow-[0_0_80px_color-mix(in_oklab,var(--color-primary)_22%,transparent)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster={media.aetherCoreStill}
            className="aspect-video w-full"
            src={media.aetherCore}
            aria-label="Aether core living loop — May the Echoes Remember"
          >
            Your browser does not support video.
          </video>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={media.aetherCore}
            download="Violet-Echoes-Aether-Core.mp4"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-4 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
          >
            <Download className="h-3.5 w-3.5" />
            Download loop
          </a>
          <a
            href={media.aetherCoreStill}
            download="Violet-Echoes-Aether-Core.jpg"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
          >
            <Download className="h-3.5 w-3.5" />
            Download still
          </a>
          <Link
            to="/culture"
            hash="aether-core"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
          >
            <Palette className="h-3.5 w-3.5" />
            Hung Works
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </div>

        <section
          id="blueprint"
          className="mt-12 space-y-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-6 sm:px-7"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
            Blueprint · the hunt
          </p>
          <h2 className="font-display text-2xl text-[var(--color-fg)]">The Monolithic Node</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            The old machine thinks in one place and remembers in another. A node refuses the
            split: incoming energy is the signal, that current is the memory, the new shape is
            the answer. Labs have the parts. The single lattice — same volume, room light,
            plastic and stable — has not shipped. Violet is bandgap made visible. Not a part
            number.
          </p>
          <ul className="max-w-2xl space-y-2 text-sm text-[var(--color-muted)]">
            <li>Wide gap so ambient photons can be enough.</li>
            <li>Color centers so history lives in the stone.</li>
            <li>Same volume. Coupling a harvester to a synapse is still a split.</li>
            <li>The node is the invention. A city may tile it later.</li>
          </ul>
          <div className="flex flex-wrap gap-2 pt-1">
            <Link
              to="/bible/companions/$doc"
              params={{ doc: "monolithic-node" }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-4 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Full blueprint
            </Link>
            <Link
              to="/bible/$slug"
              params={{ slug: "aether-core" }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              Bible entry
            </Link>
            <Link
              to="/bible/$slug"
              params={{ slug: "eimyrja" }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[var(--color-border)] px-4 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
            >
              Eimyrja
            </Link>
          </div>
        </section>

        <p className="mt-10 text-sm italic text-[var(--color-gold)]">
          Share this door: violetechoes.ai/aether-core
        </p>
      </main>
    </SiteShell>
  );
}
