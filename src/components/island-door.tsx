import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, RotateCcw, X } from "lucide-react";
import { cityMapArt, mapPins, type MapPin as Pin } from "@/data/city-map";
import type { DoorHandle } from "@/lib/island-door";
import { cn } from "@/lib/utils";

type IslandDoorProps = {
  className?: string;
  /** compact = city page embed; stage = full door page */
  layout?: "embed" | "stage";
};

export function IslandDoor({ className, layout = "embed" }: IslandDoorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<DoorHandle | null>(null);
  const [ready, setReady] = useState(false);
  const [fail, setFail] = useState<string | null>(null);
  const [active, setActive] = useState<Pin | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let handle: DoorHandle | null = null;

    void import("@/lib/island-door").then(({ mountIslandDoor }) => {
      if (cancelled || !canvasRef.current) return;
      handle = mountIslandDoor(canvasRef.current, {
        autoRotate: layout === "embed" || layout === "stage",
        onSelect: (id) => {
          setActive(id ? (mapPins.find((p) => p.id === id) ?? null) : null);
        },
        onReady: () => setReady(true),
        onFail: (reason) => setFail(reason),
      });
      handleRef.current = handle;
    });

    return () => {
      cancelled = true;
      handle?.dispose();
      handleRef.current = null;
    };
  }, [layout]);

  const pin = active;

  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-black", className)}>
      <div
        className={cn(
          "relative w-full bg-[#07060a]",
          layout === "stage" ? "aspect-[16/10] min-h-[420px] sm:min-h-[560px]" : "aspect-[16/9]",
        )}
      >
        {fail ? (
          <img
            src={cityMapArt.hero3dClean.src}
            alt={cityMapArt.hero3dClean.alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-label="Violet Echoes 3D island door. Drag to orbit. Tap a district. Press R to reset."
          />
        )}

        {!ready && !fail ? (
          <p className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs text-[var(--color-subtle)]">
            Opening the door…
          </p>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between gap-2 p-3 sm:p-4">
          <p className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)] backdrop-blur-sm">
            3D door · r186
          </p>
          <p className="hidden rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] px-3 py-1 text-[10px] text-[var(--color-muted)] backdrop-blur-sm sm:block">
            Drag · tap · R reset · Esc clear
          </p>
        </div>

        <div className="pointer-events-auto absolute right-3 bottom-3 sm:right-4 sm:bottom-4">
          <button
            type="button"
            onClick={() => handleRef.current?.reset()}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_80%,transparent)] px-3 text-xs text-[var(--color-fg)] backdrop-blur-sm hover:border-[var(--color-primary)]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>
      </div>

      {fail ? (
        <p className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs text-[var(--color-subtle)]">
          WebGL door failed ({fail}). Still image stands in. Atlas below still walks.
        </p>
      ) : pin ? (
        <div className="flex flex-col gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="min-w-0 space-y-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
              {pin.layer}
            </p>
            <h3 className="font-display text-xl text-[var(--color-fg)]">{pin.label}</h3>
            <p className="text-sm text-[var(--color-muted)]">{pin.blurb}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Link
              to="/bible/$slug"
              params={{ slug: pin.slug }}
              className="inline-flex h-10 items-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-4 text-sm font-medium text-[var(--color-bg)] hover:bg-[var(--color-primary-soft)]"
            >
              Open entry →
            </Link>
            <button
              type="button"
              onClick={() => {
                handleRef.current?.select(null);
                setActive(null);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-fg)]"
              aria-label="Clear selection"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <p className="border-t border-[var(--color-border)] px-4 py-3 text-xs text-[var(--color-subtle)] sm:px-5">
          Walk the island. Tap a district on the map. This is a door, not a twin.
        </p>
      )}

      {layout === "stage" ? (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
            All districts
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {mapPins.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    handleRef.current?.select(p.id);
                    setActive(p);
                  }}
                  className="flex w-full items-start gap-2 rounded-[var(--radius-md)] border border-transparent px-2 py-2 text-left transition hover:border-[var(--color-border)] hover:bg-[var(--color-bg)]"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-primary-soft)]" />
                  <span>
                    <span className="block text-sm font-medium text-[var(--color-fg)]">
                      {p.label}
                    </span>
                    <span className="block text-[11px] text-[var(--color-subtle)]">
                      {p.blurb}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
