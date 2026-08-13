import { useEffect, useRef, useState } from "react";
import { media } from "@/data/media";
import { brandLine, rememberLine, theTenets } from "@/data/world";

const STORAGE_KEY = "ve-echo-intro-seen-v3";
/** Matches brand ember clip (~11s); skip always available. */
const HOLD_MS = 11000;
const HOLD_REDUCED_MS = 4500;

/**
 * First-visit intro: brand ember + remember line + tenets.
 * Skippable; respects prefers-reduced-motion (static mark).
 */
export function EchoIntro() {
  const [phase, setPhase] = useState<"pending" | "show" | "out" | "done">(
    "pending",
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") {
        setPhase("done");
        return;
      }
    } catch {
      /* private mode — still show once per session */
    }
    setPhase("show");
  }, []);

  useEffect(() => {
    if (phase !== "show") return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ms = reduce ? HOLD_REDUCED_MS : HOLD_MS;
    const t = window.setTimeout(() => dismiss(), ms);
    const v = videoRef.current;
    if (v && !reduce) {
      v.muted = true;
      void v.play().catch(() => {
        /* autoplay blocked — static poster still shows */
      });
    }
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function dismiss() {
    setPhase((p) => {
      if (p === "done" || p === "out") return p;
      return "out";
    });
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    window.setTimeout(() => setPhase("done"), 550);
  }

  if (phase === "pending" || phase === "done") return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]",
        "transition-opacity duration-500 ease-out",
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome — We are the echo. We are the light."
      onClick={dismiss}
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          dismiss();
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 rain-veil opacity-60" aria-hidden />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[0_0_80px_color-mix(in_oklab,var(--color-primary)_28%,transparent)]">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            src={media.brandVideo}
            poster={media.logo}
            muted
            playsInline
            preload="auto"
            aria-hidden
          />
          {/* reduced-motion / poster fallback always present under video */}
          <img
            src={media.logo}
            alt=""
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </div>

        <p className="echo-intro-line mt-6 font-display text-xl italic leading-snug text-[var(--color-primary-soft)] sm:text-2xl">
          {brandLine.text}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {brandLine.sub}
        </p>
        <p className="echo-intro-attr mt-4 text-sm text-[var(--color-muted)]">
          &ldquo;{rememberLine.text}&rdquo; — {rememberLine.attribution}
        </p>
        <ul className="echo-intro-tenets mt-5 space-y-1.5 text-sm text-[var(--color-muted)]">
          {theTenets.map((t) => (
            <li key={t.n} className="font-display tracking-wide">
              {t.title}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="pointer-events-auto mt-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--color-subtle)] transition-colors hover:text-[var(--color-fg)]"
          onClick={(e) => {
            e.stopPropagation();
            dismiss();
          }}
        >
          Enter · skip
        </button>
      </div>
    </div>
  );
}
