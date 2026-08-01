import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Soft gradient veil for text-over-image readability */
  veil?: "none" | "bottom" | "full" | "left";
  aspect?: "video" | "wide" | "square" | "portrait" | "auto";
  priority?: boolean;
};

const aspectClass = {
  video: "aspect-video",
  wide: "aspect-[21/9]",
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
  priority = false,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-surface-2)]",
        aspectClass[aspect],
        veilClass[veil],
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
