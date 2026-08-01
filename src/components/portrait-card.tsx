import { Link } from "@tanstack/react-router";
import type { FamilyMember } from "@/data/family";
import { tierLabels } from "@/data/family";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { cn } from "@/lib/utils";

export function PortraitCard({ member }: { member: FamilyMember }) {
  return (
    <Link
      to="/gallery/$slug"
      params={{ slug: member.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-surface-2)]"
    >
      <div className="relative">
        {member.portrait ? (
          <MediaFrame
            src={member.portrait}
            alt={`Portrait of ${member.name}`}
            aspect="portrait"
            imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="relative aspect-[3/4] overflow-hidden"
            style={{
              background: `radial-gradient(ellipse 70% 55% at 50% 35%, color-mix(in oklab, ${member.accent} 28%, transparent), transparent 70%), var(--color-surface-2)`,
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,color-mix(in_oklab,var(--color-bg)_40%,transparent),transparent_55%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg)]/70 font-display text-3xl tracking-tight shadow-[0_0_40px_color-mix(in_oklab,var(--color-primary)_12%,transparent)] sm:h-24 sm:w-24 sm:text-4xl"
                style={{ color: member.accent, borderColor: `color-mix(in oklab, ${member.accent} 45%, var(--color-border))` }}
              >
                {member.monogram}
              </span>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                Portrait pending
              </span>
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute left-3 top-3">
          <Badge
            className={cn(
              "border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-bg)_78%,transparent)] backdrop-blur-sm",
              member.portrait
                ? "text-[var(--color-gold)]"
                : "text-[var(--color-subtle)]",
            )}
          >
            {tierLabels[member.tier]}
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-2xl tracking-tight text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
            {member.name}
          </h3>
          <span className="mt-1 shrink-0 text-xs text-[var(--color-subtle)] group-hover:text-[var(--color-gold)]">
            Open
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-[var(--color-muted)]">{member.title}</p>
        <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-[var(--color-subtle)]">
          {member.familyStatus}
        </p>
      </div>
    </Link>
  );
}
