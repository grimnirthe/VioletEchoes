import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Images, Music, Music2, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { PortraitCard } from "@/components/portrait-card";
import { MediaFrame } from "@/components/media-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ensembleShots,
  family,
  getMemberBySlug,
  membersAwaitingPortraits,
  membersWithPortraits,
  portraitPack,
  tierLabels,
  tierOrder,
} from "@/data/family";
import { musicHub, platformLabel, primaryLink, tracks } from "@/data/music";

export const Route = createFileRoute("/gallery/")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Portrait Gallery — Violet Echoes" },
      {
        name: "description",
        content:
          "Portrait gallery of the Violet Longhouse Nexus family — faces of the bloodline, companions, and tracks on Suno + AethrMusik.",
      },
    ],
  }),
});

function GalleryPage() {
  const ready = membersWithPortraits().length;
  const pending = membersAwaitingPortraits().length;
  const unassigned = portraitPack.filter((f) => !f.assignedTo).length;
  const spotlight = tracks.slice(0, 8);
  const aethrCount = tracks.filter((t) =>
    t.links.some((l) => l.platform === "aethrmusik"),
  ).length;

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Gallery" />
        <header className="max-w-2xl space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-soft)]">
            Longhouse Nexus
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            Portrait Gallery
          </h1>
          <p className="text-[var(--color-muted)]">
            Faces of the bloodline — and the songs that carry their names. Porch rain, aurora light,
            and the people who make the Nexus home.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-[var(--color-primary)]/30 text-[var(--color-primary-soft)]">
              <Users className="mr-1.5 h-3.5 w-3.5" />
              {family.length} in roster
            </Badge>
            <Badge className="text-[var(--color-gold)]">
              {ready} portrait{ready === 1 ? "" : "s"} live
            </Badge>
            <Badge className="text-[var(--color-primary-soft)]">
              <Music2 className="mr-1.5 h-3.5 w-3.5" />
              {tracks.length} tracks · {aethrCount} on AethrMusik
            </Badge>
            {pending > 0 ? (
              <Badge className="text-[var(--color-subtle)]">{pending} awaiting art</Badge>
            ) : (
              <Badge className="text-[var(--color-success)]">Roster complete</Badge>
            )}
          </div>
          {unassigned > 0 ? (
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5">
              <p className="text-sm text-[var(--color-muted)]">
                <span className="font-medium text-[var(--color-fg)]">
                  {unassigned} pack frames still unassigned
                </span>{" "}
                (outfits / extras). Open the sorting room anytime.
              </p>
              <div className="mt-3">
                <Link to="/gallery/pack">
                  <Button size="sm" variant="outline">
                    <Images className="h-4 w-4" />
                    Open portrait pack
                  </Button>
                </Link>
              </div>
            </div>
          ) : null}
        </header>

        <section className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col justify-center gap-4 border-b border-[var(--color-border)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2 text-[var(--color-gold)]">
                <Music className="h-4 w-4" />
                <p className="text-xs uppercase tracking-[0.18em]">#VioletEchoes · Listen</p>
              </div>
              <h2 className="font-display text-3xl tracking-tight text-[var(--color-fg)]">
                {musicHub.label}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Named tracks for Starborn, Chaos Kitty, Glaze Ruiners, Barnaby, Vee, and the world —
                from Suno titles and your AethrMusik releases. Full catalogs live on each platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href={musicHub.aethrArtist} target="_blank" rel="noopener noreferrer">
                  <Button size="sm">
                    AethrMusik artist
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
                <a href={musicHub.sunoProfile} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline">
                    Suno {musicHub.sunoHandle}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
                <a href={musicHub.youtube} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline">
                    YouTube
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
            <ul className="divide-y divide-[var(--color-border)] p-2 sm:p-3">
              {spotlight.map((track) => {
                const main = primaryLink(track);
                return (
                  <li key={track.id}>
                    <a
                      href={main.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-3 rounded-[var(--radius-md)] px-3 py-3 transition-colors hover:bg-[var(--color-surface-2)]"
                    >
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
                          {track.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-[var(--color-subtle)]">
                          {track.links.map((l) => platformLabel(l.platform)).join(" · ")}
                          {track.note ? ` · ${track.note}` : ""}
                        </span>
                      </span>
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-subtle)] group-hover:text-[var(--color-gold)]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="mt-10 space-y-6">
          {ensembleShots.map((shot) => {
            const Icon = shot.id === "musicians" ? Music : Users;
            return (
              <section
                key={shot.id}
                className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
                  <MediaFrame src={shot.src} alt={shot.title} aspect="video" priority />
                  <div className="flex flex-col justify-center gap-4 p-5 sm:p-7">
                    <div className="flex items-center gap-2 text-[var(--color-gold)]">
                      <Icon className="h-4 w-4" />
                      <p className="text-xs uppercase tracking-[0.18em]">Ensemble</p>
                    </div>
                    <h2 className="font-display text-3xl tracking-tight text-[var(--color-fg)]">
                      {shot.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {shot.caption}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {shot.members.map((slug) => {
                        const m = getMemberBySlug(slug);
                        if (!m) return null;
                        return (
                          <Link key={slug} to="/gallery/$slug" params={{ slug }}>
                            <Badge className="cursor-pointer border-[var(--color-border-strong)] text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]/50">
                              {m.name}
                            </Badge>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-12 space-y-14">
          {tierOrder.map((tier) => {
            const group = family
              .filter((m) => m.tier === tier)
              .sort((a, b) => a.order - b.order);
            if (!group.length) return null;
            return (
              <section key={tier}>
                <div className="mb-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                      Tier
                    </p>
                    <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                      {tierLabels[tier]}
                    </h2>
                  </div>
                  <span className="text-xs text-[var(--color-subtle)]">{group.length}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((member) => (
                    <PortraitCard key={member.id} member={member} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </SiteShell>
  );
}
