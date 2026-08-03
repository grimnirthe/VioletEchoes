import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, X } from "lucide-react";
import {
  cityMapArt,
  cityMapIntro,
  mapPins,
  type MapPin as Pin,
} from "@/data/city-map";

export function CityMapInteractive() {
  const [active, setActive] = useState<Pin | null>(null);
  const [showLegend, setShowLegend] = useState(false);

  return (
    <section id="map" className="scroll-mt-24 space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Explore · dual-layer island
          </p>
          <h2 className="mt-1 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
            {cityMapIntro.title}
          </h2>
          <p className="mt-1 max-w-xl text-sm text-[var(--color-muted)]">
            {cityMapIntro.body}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowLegend(false)}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition ${
              !showLegend
                ? "border-[var(--color-primary)]/50 text-[var(--color-primary-soft)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/30"
            }`}
          >
            Interactive
          </button>
          <button
            type="button"
            onClick={() => setShowLegend(true)}
            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition ${
              showLegend
                ? "border-[var(--color-primary)]/50 text-[var(--color-primary-soft)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/30"
            }`}
          >
            Legend
          </button>
        </div>
      </div>

      {showLegend ? (
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg)]">
          <img
            src={cityMapArt.legend.src}
            alt={cityMapArt.legend.alt}
            className="w-full object-contain"
            loading="lazy"
          />
          <p className="border-t border-[var(--color-border)] px-4 py-2 text-xs text-[var(--color-subtle)]">
            Labeled atlas (Aurora). Spelling on art may vary slightly — pins on Interactive use
            canon names.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="relative w-full select-none">
            <img
              src={cityMapArt.interactive.src}
              alt={cityMapArt.interactive.alt}
              className="w-full object-contain"
              loading="eager"
              draggable={false}
            />
            {mapPins.map((pin) => (
              <button
                key={pin.id}
                type="button"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                className={`absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 shadow-lg transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] sm:h-9 sm:w-9 ${
                  active?.id === pin.id
                    ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-[var(--color-bg)]"
                    : pin.layer === "system"
                      ? "border-[var(--color-primary)] bg-[color-mix(in_oklab,var(--color-primary)_85%,black)] text-[var(--color-fg)]"
                      : pin.layer === "water"
                        ? "border-[var(--color-rain)] bg-[color-mix(in_oklab,var(--color-rain)_70%,black)] text-[var(--color-fg)]"
                        : "border-[var(--color-primary-soft)] bg-[color-mix(in_oklab,var(--color-surface)_90%,var(--color-primary))] text-[var(--color-fg)]"
                }`}
                aria-label={`${pin.label}: ${pin.blurb}`}
                onClick={() => setActive(pin)}
              >
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
              </button>
            ))}
          </div>

          {active ? (
            <div className="flex flex-col gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="min-w-0 space-y-1">
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
                  {active.layer}
                </p>
                <h3 className="font-display text-xl text-[var(--color-fg)]">
                  {active.label}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">{active.blurb}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <Link
                  to="/bible/$slug"
                  params={{ slug: active.slug }}
                  className="inline-flex h-10 items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 text-sm font-medium text-[var(--color-bg)] hover:bg-[var(--color-primary-soft)]"
                >
                  Open entry →
                </Link>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
                  aria-label="Close pin"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <p className="border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-subtle)] sm:px-5">
              {cityMapIntro.tagline} · {mapPins.length} pins · mobile: tap a marker
            </p>
          )}
        </div>
      )}

      {/* Accessible list — always available */}
      <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
          All districts
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {mapPins.map((pin) => (
            <li key={pin.id}>
              <button
                type="button"
                onClick={() => {
                  setShowLegend(false);
                  setActive(pin);
                  document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex w-full items-start gap-2 rounded-[var(--radius-md)] border border-transparent px-2 py-2 text-left transition hover:border-[var(--color-border)] hover:bg-[var(--color-bg)]"
              >
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-primary-soft)]" />
                <span>
                  <span className="block text-sm font-medium text-[var(--color-fg)]">
                    {pin.label}
                  </span>
                  <span className="block text-[11px] text-[var(--color-subtle)]">
                    {pin.blurb}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
