import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ExternalLink, Music2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { family, getMemberBySlug, tierLabels } from "@/data/family";
import { musicHub, platformLabel, primaryLink, tracksForSlug } from "@/data/music";
import { homeForMember } from "@/data/homes";

export const Route = createFileRoute("/gallery/$slug")({
  component: GalleryMemberPage,
  loader: ({ params }) => {
    const member = getMemberBySlug(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.member.name} — Portrait Gallery · Violet Echoes` },
          { name: "description", content: loaderData.member.title },
          { name: "keywords", content: loaderData.member.tags.join(", ") },
        ]
      : [{ title: "Portrait — Violet Echoes" }],
  }),
});

function GalleryMemberPage() {
  const { member } = Route.useLoaderData();
  const siblings = family
    .filter((m) => m.tier === member.tier && m.id !== member.id)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);
  const outfits = member.outfits ?? [];
  const memberTracks = tracksForSlug(member.slug);
  const home = homeForMember(member.id);

  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <PageNav section="Gallery" sectionTo="/gallery" current={member.name} />

        <article className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              {member.portrait ? (
                <MediaFrame
                  src={member.portrait}
                  alt={`Portrait of ${member.fullName}`}
                  aspect="portrait"
                  priority
                />
              ) : (
                <div
                  className="relative flex aspect-[3/4] flex-col items-center justify-center gap-4 p-8"
                  style={{
                    background: `radial-gradient(ellipse 75% 60% at 50% 40%, color-mix(in oklab, ${member.accent} 32%, transparent), transparent 72%), var(--color-surface-2)`,
                  }}
                >
                  <span
                    className="flex h-28 w-28 items-center justify-center rounded-full border bg-[var(--color-bg)]/75 font-display text-5xl"
                    style={{
                      color: member.accent,
                      borderColor: `color-mix(in oklab, ${member.accent} 50%, var(--color-border))`,
                      boxShadow: `0 0 48px color-mix(in oklab, ${member.accent} 22%, transparent)`,
                    }}
                  >
                    {member.monogram}
                  </span>
                  <p className="text-center text-sm text-[var(--color-muted)]">
                    Official portrait pending.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <header className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-[var(--color-gold)]">{tierLabels[member.tier]}</Badge>
                  {member.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
                  {member.name}
                </h1>
                <p className="text-lg text-[var(--color-muted)]">{member.title}</p>
                <p className="text-sm text-[var(--color-subtle)]">{member.fullName}</p>
              </header>

              <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
                <h2 className="text-xs uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Family status
                </h2>
                <p className="mt-2 text-[var(--color-fg)]">{member.familyStatus}</p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-2xl text-[var(--color-fg)]">Role</h2>
                <p className="leading-relaxed text-[var(--color-muted)]">{member.role}</p>
              </section>

              <section className="space-y-3">
                <h2 className="font-display text-2xl text-[var(--color-fg)]">Emotional core</h2>
                <p className="leading-relaxed text-[var(--color-muted)]">{member.emotionalCore}</p>
              </section>

              
          {home ? (
            <section className="space-y-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Personal Longhouse
                </p>
                <h2 className="mt-2 font-display text-2xl text-[var(--color-fg)]">{home.title}</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{home.type}</p>
                <p className="mt-3 font-display text-lg italic text-[var(--color-primary-soft)]">
                  {home.feeling}
                </p>
              </div>
              {home.stills?.length ? (
                <div
                  className={
                    home.stills.length > 1
                      ? "grid gap-3 sm:grid-cols-2"
                      : "overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)]"
                  }
                >
                  {home.stills.map((still) => (
                    <figure
                      key={still.src}
                      className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)]"
                    >
                      <MediaFrame src={still.src} alt={still.alt} aspect="video" />
                      {still.caption ? (
                        <figcaption className="px-3 py-2 text-xs text-[var(--color-subtle)]">
                          {still.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}
              {home.character.length ? (
                <ul className="space-y-1.5 text-sm text-[var(--color-muted)]">
                  {home.character.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {home.lens ? (
                <p className="text-sm text-[var(--color-muted)]">
                  <span className="text-[var(--color-gold)]">Divergence lens — </span>
                  {home.lens}
                </p>
              ) : null}
            </section>
          ) : null}

{memberTracks.length ? (
                <section className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[var(--color-gold)]">
                    <Music2 className="h-4 w-4" />
                    <h2 className="text-xs uppercase tracking-[0.18em]">Listen</h2>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {memberTracks.map((track) => {
                      const main = primaryLink(track);
                      return (
                        <li
                          key={track.id}
                          className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)]/40 px-3 py-2.5"
                        >
                          <a
                            href={main.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start justify-between gap-3"
                          >
                            <span className="min-w-0">
                              <span className="block text-sm font-medium text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
                                {track.title}
                              </span>
                              {track.note ? (
                                <span className="mt-0.5 block text-xs text-[var(--color-subtle)]">
                                  {track.note}
                                </span>
                              ) : null}
                            </span>
                            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-subtle)] group-hover:text-[var(--color-gold)]" />
                          </a>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {track.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] px-2 py-0.5 text-[11px] text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]/50"
                              >
                                {platformLabel(link.platform)}
                              </a>
                            ))}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <a
                      href={musicHub.sunoProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-primary-soft)] hover:underline"
                    >
                      Suno {musicHub.sunoHandle}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href={musicHub.aethrArtist}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-primary-soft)] hover:underline"
                    >
                      AethrMusik artist
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </section>
              ) : null}
            </div>
          </div>

          {outfits.length ? (
            <section className="space-y-4">
              <div className="flex items-end justify-between gap-3">
                <h2 className="font-display text-2xl text-[var(--color-fg)]">Outfits & variants</h2>
                <span className="text-xs text-[var(--color-subtle)]">{outfits.length}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {outfits.map((shot) => (
                  <figure
                    key={shot.id}
                    className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
                  >
                    <MediaFrame
                      src={shot.src}
                      alt={`${member.name} — ${shot.label}`}
                      aspect={
                        shot.id.startsWith("ensemble") || shot.id === "throne-hearth"
                          ? "video"
                          : "portrait"
                      }
                    />
                    <figcaption className="px-3 py-2 text-xs text-[var(--color-muted)]">
                      {shot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          {siblings.length ? (
            <section className="border-t border-[var(--color-border)] pt-10">
              <h2 className="mb-4 font-display text-2xl text-[var(--color-fg)]">Same tier</h2>
              <div className="flex flex-wrap gap-2">
                {siblings.map((s) => (
                  <Link
                    key={s.id}
                    to="/gallery/$slug"
                    params={{ slug: s.slug }}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary-soft)]"
                  >
                    {s.name}
                  </Link>
                ))}
                <Link
                  to="/gallery"
                  className="rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-3 py-2 text-sm text-[var(--color-gold)] hover:bg-[var(--color-surface)]"
                >
                  All portraits
                </Link>
              </div>
            </section>
          ) : null}
        </article>
      </main>
    </SiteShell>
  );
}
