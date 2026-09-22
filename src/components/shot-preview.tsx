import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ShotHandle, ShotPick, ShotView, CityScaleId, KittyMode } from "@/lib/shot-preview";
import {
  ADULT_M,
  KITTY_M,
  rulerLabel,
  shotBible,
  shotClash,
} from "@/lib/shot-preview";
import { cn } from "@/lib/utils";

const BIBLES: { id: CityScaleId; label: string }[] = [
  { id: "walk", label: "Walk" },
  { id: "street", label: "Street" },
  { id: "lookbook", label: "Lookbook" },
  { id: "partner", label: "Partner" },
  { id: "node", label: "Node" },
];

const KITTY: { id: KittyMode; label: string }[] = [
  { id: "personal", label: "On seat" },
  { id: "palm", label: "Palm" },
  { id: "amazon", label: "Shin" },
  { id: "sheet", label: "Beside" },
];

const VIEWS: { id: ShotView; label: string }[] = [
  { id: "front", label: "Front" },
  { id: "three-quarter", label: "¾" },
  { id: "side", label: "Side" },
];

function Chip({
  on,
  children,
  onClick,
  danger,
}: {
  on: boolean;
  children: ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition",
        on && danger
          ? "border-red-400/70 bg-red-950/40 text-red-200"
          : on
            ? "border-[var(--color-primary)]/50 text-[var(--color-primary-soft)]"
            : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/30",
      )}
    >
      {children}
    </button>
  );
}

export function ShotPreview() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<ShotHandle | null>(null);
  const [ready, setReady] = useState(false);
  const [fail, setFail] = useState<string | null>(null);
  const [hasAdult, setHasAdult] = useState(true);
  const [hasKitty, setHasKitty] = useState(false);
  const [sit, setSit] = useState(false);
  const [cityScaleId, setCityScaleId] = useState<CityScaleId>("walk");
  const [kittyMode, setKittyMode] = useState<KittyMode>("personal");
  const [view, setView] = useState<ShotView>("front");

  const pick: ShotPick = {
    hasAdult,
    hasKitty,
    kittyMode: hasKitty ? kittyMode : null,
    sit,
    cityScaleId,
    view,
  };
  const bible = shotBible(pick);
  const clash = shotClash(pick);
  const hard = clash === "seat-vs-chair";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let handle: ShotHandle | null = null;
    void import("@/lib/shot-preview").then(({ mountShotPreview: mount }) => {
      if (cancelled || !canvasRef.current) return;
      handle = mount(canvasRef.current, {
        onFail: (reason) => setFail(reason),
      });
      handleRef.current = handle;
      setReady(true);
    });
    return () => {
      cancelled = true;
      handle?.dispose();
      handleRef.current = null;
    };
  }, []);

  useEffect(() => {
    handleRef.current?.apply(pick);
    // pick is rebuilt each render; apply is cheap (rebuilds stage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAdult, hasKitty, sit, cityScaleId, kittyMode, view, ready]);

  return (
    <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-black">
      <div className="relative aspect-[16/9] min-h-[320px] w-full bg-[#07060a] sm:min-h-[420px]">
        {fail ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <p className="text-sm text-[var(--color-muted)]">WebGL stayed closed. Scale still holds on paper.</p>
            <p className="text-xs text-[var(--color-subtle)]">
              Adult {ADULT_M.toFixed(2)} m · Kitty {KITTY_M.toFixed(2)} m (16 in) · seat 0.45 m
            </p>
          </div>
        ) : (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-label="Locked-camera character shot preview. No orbit."
          />
        )}

        {!ready && !fail ? (
          <p className="pointer-events-none absolute inset-x-0 bottom-4 text-center text-xs text-[var(--color-subtle)]">
            Snapping the lock…
          </p>
        ) : null}

        <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-wrap justify-between gap-2 p-3 sm:p-4">
          <p className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)] backdrop-blur-sm">
            Scale snap · locked · no orbit
          </p>
          <p className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted)] backdrop-blur-sm">
            {bible} · {rulerLabel(bible)}
          </p>
        </div>

        {hard ? (
          <div className="absolute inset-x-4 bottom-4 rounded-[var(--radius-md)] border border-red-400/40 bg-red-950/70 p-3 text-sm text-red-100 backdrop-blur-sm sm:inset-x-6">
            <p className="font-medium">Two bibles. One Build. Split them.</p>
            <p className="mt-1 text-xs text-red-200/80">
              Kitty only · Adult in chair · or Kitty on seat with adult standing (not Sit)
            </p>
          </div>
        ) : clash === "city-node-kitty" ? (
          <div className="absolute inset-x-4 bottom-4 rounded-[var(--radius-md)] border border-[var(--color-gold)]/40 bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] p-3 text-sm text-[var(--color-gold)] backdrop-blur-sm sm:inset-x-6">
            Node makes humans small. She vanishes unless she is the subject.
          </div>
        ) : null}
      </div>

      <div className="space-y-4 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <Chip on={hasAdult} onClick={() => setHasAdult((v) => !v)}>
            Adult
          </Chip>
          <Chip on={hasKitty} onClick={() => setHasKitty((v) => !v)}>
            Kitty 16″
          </Chip>
          <Chip on={sit} danger={hard} onClick={() => setSit((v) => !v)}>
            Sit
          </Chip>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
            City bible
          </p>
          <div className="flex flex-wrap gap-2">
            {BIBLES.map((b) => (
              <Chip key={b.id} on={cityScaleId === b.id} onClick={() => setCityScaleId(b.id)}>
                {b.label}
              </Chip>
            ))}
          </div>
        </div>

        {hasKitty ? (
          <div>
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
              Kitty stick
            </p>
            <div className="flex flex-wrap gap-2">
              {KITTY.map((k) => (
                <Chip key={k.id} on={kittyMode === k.id} onClick={() => setKittyMode(k.id)}>
                  {k.label}
                </Chip>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-gold)]">
            Locked view · same height
          </p>
          <div className="flex flex-wrap gap-2">
            {VIEWS.map((v) => (
              <Chip key={v.id} on={view === v.id} onClick={() => setView(v.id)}>
                {v.label}
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <p className="text-xs text-[var(--color-subtle)]">
            Adult 5′9″ · Kitty 16 in · chair seat mid-thigh. Mannequins only — no family sheets.
          </p>
          <button
            type="button"
            disabled={hard}
            className={cn(
              "inline-flex h-10 items-center rounded-[var(--radius-md)] px-4 text-sm font-medium",
              hard
                ? "cursor-not-allowed bg-[var(--color-border)] text-[var(--color-subtle)]"
                : "bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-primary-soft)]",
            )}
          >
            {hard ? "Make still stays off" : "Would Make still"}
          </button>
        </div>
      </div>
    </div>
  );
}
