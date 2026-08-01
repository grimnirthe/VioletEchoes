import { Link } from "@tanstack/react-router";
import type { WorldEntry } from "@/data/world";
import { imageForEntry } from "@/data/media";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";

const kindLabel: Record<WorldEntry["kind"], string> = {
  system: "System",
  district: "District",
  landmark: "Landmark",
  philosophy: "Philosophy",
  culture: "Culture",
  vehicle: "Mobile",
  glossary: "Language",
  doctrine: "Doctrine",
  place: "Place",
};

export function EntryCard({ entry }: { entry: WorldEntry }) {
  const image = imageForEntry(entry.id);

  return (
    <Link
      to="/bible/$slug"
      params={{ slug: entry.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-2)]"
    >
      {image ? (
        <MediaFrame
          src={image}
          alt=""
          aspect="video"
          className="border-b border-[var(--color-border)]"
          imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <Badge>{kindLabel[entry.kind]}</Badge>
          <span className="text-xs text-[var(--color-subtle)] group-hover:text-[var(--color-gold)]">
            Open
          </span>
        </div>
        <h3 className="font-display text-2xl tracking-tight text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
          {entry.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {entry.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-bg)] px-2 py-0.5 text-[11px] text-[var(--color-subtle)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
