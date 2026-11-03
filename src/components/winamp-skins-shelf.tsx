import { Download } from "lucide-react";
import {
  winampSkins,
  winampSkinsCredit,
  type WinampSkin,
} from "@/data/winamp-skins";

/** Small shelf of Winamp skins — one card per skin, still plus download. */
export function WinampSkinsShelf() {
  return (
    <aside
      aria-labelledby="winamp-skins-heading"
      className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5"
    >
      <h3
        id="winamp-skins-heading"
        className="font-display text-2xl text-[var(--color-fg)]"
      >
        Winamp skins
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {winampSkinsCredit.line} Violet Echoes Modern is marked #VioletEchoes —
        a modern .wal for Winamp 5.x. The other two are classic .wsz.
      </p>

      <ul className="mt-4 space-y-3">
        {winampSkins.map((skin) => (
          <li key={skin.id}>
            <SkinCard skin={skin} />
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
        {winampSkinsCredit.install}
      </p>
    </aside>
  );
}

function SkinCard({ skin }: { skin: WinampSkin }) {
  return (
    <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="space-y-px bg-[var(--color-border)]">
        {skin.previews.map((preview) => (
          <figure key={preview.src} className="bg-[var(--color-bg)]">
            <img
              src={preview.src}
              alt={preview.alt}
              className="block h-auto w-full"
              loading="lazy"
            />
            <figcaption className="px-2.5 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-gold)]">
              {preview.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="space-y-2 border-t border-[var(--color-border)] p-3">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h4 className="font-display text-lg leading-tight text-[var(--color-fg)]">
            {skin.title}
          </h4>
          {skin.hash ? (
            <span className="text-xs font-medium tracking-wide text-[var(--color-gold)]">
              {skin.hash}
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-[var(--color-muted)]">
          {skin.description}
        </p>
        <p className="text-xs text-[var(--color-primary-soft)]">
          {skin.needs}
          {skin.version === "classic" ? "" : ` · ${skin.version}`}
        </p>
        <a
          href={skin.href}
          download={skin.filename}
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
        >
          <Download className="h-3.5 w-3.5" aria-hidden />
          Download {skin.filename}
        </a>
      </div>
    </article>
  );
}
