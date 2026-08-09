import { useCallback, useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Soft gradient veil for text-over-image readability */
  veil?: "none" | "bottom" | "full" | "left";
  aspect?: "video" | "wide" | "square" | "portrait" | "sheet" | "auto";
  /** cover crops to fill; contain shows the full image (use for concept/info sheets) */
  fit?: "cover" | "contain";
  /** Click to open full-size lightbox — preferred for lock sheets & dense concept art */
  expandable?: boolean;
  priority?: boolean;
};

const aspectClass = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
  sheet: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  auto: "",
} as const;

const veilClass = {
  none: "",
  bottom:
    "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-2/5 after:bg-gradient-to-t after:from-[var(--color-bg)] after:to-transparent",
  full: "after:pointer-events-none after:absolute after:inset-0 after:bg-[color-mix(in_oklab,var(--color-bg)_35%,transparent)]",
  left: "after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-[var(--color-bg)] after:via-[color-mix(in_oklab,var(--color-bg)_55%,transparent)] after:to-transparent",
} as const;

export function MediaFrame({
  src,
  alt,
  className,
  imgClassName,
  veil = "none",
  aspect = "video",
  fit = "cover",
  expandable = false,
  priority = false,
}: MediaFrameProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const img = (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn(
        "h-full w-full",
        fit === "contain" ? "object-contain" : "object-cover",
        imgClassName,
      )}
    />
  );

  return (
    <>
      <div
        className={cn(
          "relative overflow-hidden bg-[var(--color-surface-2)]",
          aspectClass[aspect],
          veilClass[veil],
          expandable && "group cursor-zoom-in",
          className,
        )}
      >
        {expandable ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0 z-[1] block h-full w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            aria-label={`View full image: ${alt}`}
          >
            <span className="sr-only">View full image</span>
          </button>
        ) : null}
        {img}
        {expandable ? (
          <span
            className="pointer-events-none absolute bottom-3 right-3 z-[2] rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_82%,transparent)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-subtle)] opacity-90 shadow-sm backdrop-blur-sm transition group-hover:border-[var(--color-primary)]/40 group-hover:text-[var(--color-primary-soft)]"
            aria-hidden
          >
            Full sheet
          </span>
        ) : null}
      </div>

      {expandable && open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[color-mix(in_oklab,var(--color-bg)_88%,black)] p-3 sm:p-6"
          onClick={close}
        >
          <p id={titleId} className="sr-only">
            {alt}
          </p>
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-[81] rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-fg)] hover:border-[var(--color-primary)]/50 sm:right-6 sm:top-6"
          >
            Close
          </button>
          <div
            className="relative max-h-[min(92vh,1200px)] w-full max-w-[min(96vw,1600px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="mx-auto max-h-[min(88vh,1100px)] w-auto max-w-full object-contain shadow-[0_0_80px_color-mix(in_oklab,var(--color-primary)_18%,transparent)]"
            />
            <p className="mt-3 text-center text-xs text-[var(--color-subtle)] sm:text-sm">
              {alt}
              <span className="mx-2 text-[var(--color-border)]">·</span>
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
              >
                Open original
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
