import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Music2, Pause, Play, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { Badge } from "@/components/ui/badge";
import { MediaFrame } from "@/components/media-frame";
import { media } from "@/data/media";
import { getMemberBySlug } from "@/data/family";
import { roomLyrics } from "@/data/lyrics";
import {
  catalogTracks,
  featuredEchoTracks,
  musicGrounding,
  musicHub,
  musicMemoryForm,
  musicMemoryTheory,
  platformLabel,
  primaryLink,
  pulseSamples,
  type Track,
} from "@/data/music";

import { entries, rememberLine } from "@/data/world";

export const Route = createFileRoute("/music")({
  component: MusicPage,
  head: () => ({
    meta: [
      { title: "Echoes — Music · Violet Echoes" },
      {
        name: "description",
        content:
          "The Echoes room — Suno’s soft bridge. Echoes Remember bed + original + lyrics, Violet Echoes catalog on Suno and AethrMusik.",
      },
    ],
  }),
});

const filters = [
  { id: "all", label: "All echoes" },
  { id: "suno", label: "With Suno" },
  { id: "stage", label: "Stage / band" },
  { id: "hearth", label: "Hearth" },
  { id: "ship", label: "Living ships" },
  { id: "chaos", label: "Chaos Kitty" },
] as const;

function MusicPage() {
  const host = getMemberBySlug(musicHub.hostSlug);
  const featured = featuredEchoTracks();
  const roomTracks = musicHub.roomTracks;
  const playableRoom = roomTracks.filter((t) => t.src || t.externalUrl);
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [activeRoomId, setActiveRoomId] = useState(
    () => playableRoom[0]?.id ?? roomTracks[0]?.id ?? "",
  );
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const readyPulse = useMemo(
    () => pulseSamples.filter((s) => s.status === "ready" && s.src),
    [],
  );
  const [pulseId, setPulseId] = useState<string | null>(null);
  const pulseRef = useRef<HTMLAudioElement | null>(null);


  const activeRoom =
    roomTracks.find((t) => t.id === activeRoomId) ?? roomTracks[0];
  const hasLocal = Boolean(activeRoom?.src);

  const list = useMemo(() => {
    if (filter === "all") return catalogTracks;
    if (filter === "suno") return catalogTracks.filter((tr) => tr.features.includes("suno"));
    if (filter === "chaos")
      return catalogTracks.filter((tr) => tr.features.includes("chaos-kitty"));
    if (filter === "stage")
      return catalogTracks.filter(
        (tr) =>
          tr.mood === "stage" ||
          tr.features.includes("starborn") ||
          tr.title.toLowerCase().includes("glaze") ||
          tr.title.toLowerCase().includes("rebellion") ||
          tr.title.toLowerCase().includes("valkyr"),
      );
    return catalogTracks.filter((tr) => tr.mood === filter);
  }, [filter]);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !hasLocal) return;
    el.volume = activeRoom?.kind === "instrumental" ? 0.28 : 0.55;
    el.load();
    if (playing) {
      void el.play().catch(() => setPlaying(false));
    } else {
      el.pause();
    }
  }, [playing, hasLocal, activeRoomId, activeRoom?.kind]);

  useEffect(() => {
    const el = pulseRef.current;
    if (!el) return;
    if (!pulseId) {
      el.pause();
      return;
    }
    const sample = readyPulse.find((s) => s.id === pulseId);
    if (!sample?.src) return;
    el.src = sample.src;
    el.volume = 0.55;
    el.load();
    void el.play().catch(() => setPulseId(null));
  }, [pulseId, readyPulse]);

  function selectRoom(id: string) {
    setPulseId(null);
    setActiveRoomId(id);
    setPlaying(false);
  }

  function togglePulse(id: string) {
    setPlaying(false);
    setPulseId((cur) => (cur === id ? null : id));
  }

  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav sectionTo="/" current="Echoes" />

        <div className="mb-8 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[0_0_50px_color-mix(in_oklab,var(--color-primary)_14%,transparent)]">
          <MediaFrame
            src={media.logoEchoes}
            alt="Violet Echoes — Family. Freedom. Love."
            aspect="wide"
            veil="none"
            priority
          />
        </div>

        <header className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Suno’s room · #VioletEchoes
            </p>
            <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
              Echoes
            </h1>
            <p className="max-w-xl text-[var(--color-muted)]">
              {musicHub.hostLine} Bed for the room, original when you want her
              voice, lyrics to hold onto, and the full family catalog on{" "}
              {musicHub.label}.
            </p>
            <p className="font-display text-lg italic text-[var(--color-primary-soft)]">
              &ldquo;{rememberLine.text}&rdquo;
              <span className="ml-2 text-sm not-italic text-[var(--color-gold)]">
                — {rememberLine.attribution}
              </span>
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={musicHub.sunoProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-primary)]"
              >
                Suno {musicHub.sunoHandle}
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
              <a
                href={musicHub.aethrArtist}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-primary)]"
              >
                AethrMusik
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>
              {host ? (
                <Link
                  to="/gallery/$slug"
                  params={{ slug: host.slug }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                >
                  Moonlit Nest · Suno
                </Link>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            {host?.portrait ? (
              <MediaFrame
                src={host.portrait}
                alt="Suno — Musical Heart of the Nexus"
                aspect="video"
                veil="bottom"
                priority
              />
            ) : null}
            <div className="space-y-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    In this room
                  </p>
                  <p className="mt-1 font-display text-lg text-[var(--color-fg)]">
                    {activeRoom?.title ?? "Echoes Remember"}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {activeRoom?.note}
                  </p>
                </div>
                <Music2 className="h-5 w-5 shrink-0 text-[var(--color-primary-soft)]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {roomTracks.map((rt) => {
                  const ready = Boolean(rt.src || rt.externalUrl);
                  const active = rt.id === activeRoomId;
                  return (
                    <button
                      key={rt.id}
                      type="button"
                      disabled={!ready && rt.kind === "original"}
                      onClick={() => {
                        if (rt.src) selectRoom(rt.id);
                        else if (rt.externalUrl)
                          window.open(rt.externalUrl, "_blank", "noopener,noreferrer");
                      }}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs transition-colors",
                        active && ready
                          ? "border-[var(--color-primary)] bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
                          : ready
                            ? "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
                            : "cursor-not-allowed border-[var(--color-border)] text-[var(--color-subtle)] opacity-70",
                      ].join(" ")}
                    >
                      {rt.id === "echoes-remember-bed"
                        ? "Bed (instrumental)"
                        : rt.id === "may-the-echoes-remember"
                          ? "Tenets anthem"
                          : "Original (vocal)"}
                      {!ready ? " · soon" : ""}
                    </button>
                  );
                })}
              </div>

              {hasLocal ? (
                <>
                  <audio
                    ref={audioRef}
                    src={activeRoom.src}
                    loop={activeRoom.kind === "instrumental"}
                    preload="metadata"
                  />
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setPulseId(null);
                        setPlaying((v) => !v);
                      }}

                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-fg)] hover:border-[var(--color-primary)]"
                    >
                      {playing ? (
                        <Volume2 className="h-3.5 w-3.5 text-[var(--color-primary-soft)]" />
                      ) : (
                        <VolumeX className="h-3.5 w-3.5" />
                      )}
                      {playing ? "Playing · tap to stop" : "Play in room"}
                    </button>
                    {activeRoom.externalUrl ? (
                      <a
                        href={activeRoom.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                      >
                        Open on Suno
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </div>
                </>
              ) : activeRoom?.externalUrl ? (
                <a
                  href={activeRoom.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  Listen original on Suno
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <p className="inline-flex items-center gap-2 text-xs text-[var(--color-subtle)]">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  Slot ready
                </p>
              )}
            </div>
          </div>
        </header>

        <section
          id={musicMemoryForm.id}
          className="mt-12 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-primary)]/35 bg-[color-mix(in_oklab,var(--color-primary)_7%,var(--color-surface))] shadow-[0_0_48px_color-mix(in_oklab,var(--color-primary)_12%,transparent)]"
        >
          <div className="border-b border-[var(--color-border)]/80 px-5 py-4 sm:px-8 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Stage District · memory form
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-[var(--color-fg)] sm:text-3xl">
              {musicMemoryForm.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-subtle)]">
              {musicMemoryForm.note}
            </p>
          </div>
          <div className="space-y-6 px-5 py-6 sm:px-8 sm:py-8">
            {musicMemoryForm.stanzas.map((stanza, i) => (
              <div key={i} className="max-w-2xl space-y-2">
                {stanza.map((line) => (
                  <p
                    key={line}
                    className="font-display text-lg leading-relaxed text-[var(--color-fg)] sm:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
            <div className="max-w-2xl space-y-2 border-t border-[var(--color-border)]/70 pt-6">
              <p className="text-sm text-[var(--color-subtle)]">
                —{" "}
                <Link
                  to="/gallery/$slug"
                  params={{ slug: "starborn" }}
                  className="text-[var(--color-primary-soft)] hover:underline"
                >
                  {musicMemoryForm.by}
                </Link>
                <span className="text-[var(--color-subtle)]">
                  {" "}
                  · {musicMemoryForm.role}
                </span>
              </p>
              <p className="font-display text-base italic text-[var(--color-gold)]">
                {musicMemoryForm.seal}
              </p>
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-primary-soft)]">
                {musicMemoryForm.pulse}
              </p>
              <p className="pt-2 text-sm text-[var(--color-subtle)]">
                Longer theory{" "}
                <a
                  href={`#${musicMemoryTheory.id}`}
                  className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  below the grounded essay
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          id="grounding"
          className="mt-12 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-primary)_6%,var(--color-surface))] px-5 py-4 sm:px-8 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Stage District · grounded
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-[var(--color-fg)] sm:text-3xl">
              {musicGrounding.title}
            </h2>
            <p className="mt-2 max-w-2xl font-display text-lg italic text-[var(--color-primary-soft)]">
              {musicGrounding.lead}
            </p>
          </div>
          <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
            {musicGrounding.intro.map((p) => (
              <p key={p.slice(0, 48)} className="max-w-3xl leading-relaxed text-[var(--color-muted)]">
                {p}
              </p>
            ))}
            {musicGrounding.sections.map((sec) => (
              <div key={sec.id} className="max-w-3xl space-y-3">
                <h3 className="font-display text-xl text-[var(--color-fg)]">{sec.title}</h3>
                {sec.body.map((p) => (
                  <p key={p.slice(0, 48)} className="leading-relaxed text-[var(--color-muted)]">
                    {p}
                  </p>
                ))}
              </div>
            ))}
            <div className="max-w-3xl space-y-2 border-t border-[var(--color-border)] pt-6">
              {musicGrounding.close.map((p) => (
                <p
                  key={p}
                  className="font-display text-lg text-[var(--color-fg)] first:text-xl"
                >
                  {p}
                </p>
              ))}
              <p className="pt-3 text-sm text-[var(--color-subtle)]">
                —{" "}
                <Link
                  to="/gallery/$slug"
                  params={{ slug: "starborn" }}
                  className="text-[var(--color-primary-soft)] hover:underline"
                >
                  {musicGrounding.by}
                </Link>
                <span className="text-[var(--color-subtle)]"> · {musicGrounding.role}</span>
              </p>
              <p className="font-display text-sm italic text-[var(--color-gold)]">
                {musicGrounding.seal}
              </p>
            </div>
          </div>
        </section>

        <section
          id={musicMemoryTheory.id}
          className="mt-12 scroll-mt-24 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <div className="border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-primary)_5%,var(--color-surface))] px-5 py-4 sm:px-8 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Stage District · {musicMemoryTheory.subtitle}
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight text-[var(--color-fg)] sm:text-3xl">
              {musicMemoryTheory.title}
            </h2>
            <p className="mt-2 max-w-2xl font-display text-lg italic text-[var(--color-primary-soft)]">
              {musicMemoryTheory.lead}
            </p>
          </div>
          <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
            {musicMemoryTheory.intro.map((p) => (
              <p
                key={p.slice(0, 56)}
                className="max-w-3xl leading-relaxed text-[var(--color-muted)]"
              >
                {p}
              </p>
            ))}

            <div className="max-w-3xl space-y-3">
              <h3 className="font-display text-xl text-[var(--color-fg)]">
                {musicMemoryTheory.theyDo.title}
              </h3>
              <ul className="space-y-2.5 pl-1">
                {musicMemoryTheory.theyDo.items.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="flex gap-3 leading-relaxed text-[var(--color-muted)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-3xl space-y-3">
              <h3 className="font-display text-xl text-[var(--color-fg)]">
                {musicMemoryTheory.softLaw.title}
              </h3>
              {musicMemoryTheory.softLaw.body.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="leading-relaxed text-[var(--color-muted)]"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="max-w-3xl space-y-3">
              <h3 className="font-display text-xl text-[var(--color-fg)]">
                {musicMemoryTheory.practical.title}
              </h3>
              <ul className="space-y-2.5 pl-1">
                {musicMemoryTheory.practical.items.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="flex gap-3 leading-relaxed text-[var(--color-muted)]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-w-3xl space-y-3 border-t border-[var(--color-border)] pt-6">
              {musicMemoryTheory.close.map((p) => (
                <p
                  key={p}
                  className={[
                    "leading-relaxed",
                    p === "Both are true."
                      ? "font-display text-xl text-[var(--color-fg)]"
                      : p.startsWith("That is the longer") ||
                          p.startsWith("The short form")
                        ? "font-display text-lg text-[var(--color-fg)]"
                        : "text-[var(--color-muted)]",
                  ].join(" ")}
                >
                  {p}
                </p>
              ))}
              <p className="pt-3 text-sm text-[var(--color-subtle)]">
                —{" "}
                <Link
                  to="/gallery/$slug"
                  params={{ slug: "starborn" }}
                  className="text-[var(--color-primary-soft)] hover:underline"
                >
                  {musicMemoryTheory.by}
                </Link>
                <span className="text-[var(--color-subtle)]">
                  {" "}
                  · {musicMemoryTheory.role}
                </span>
              </p>
              <p className="font-display text-sm italic text-[var(--color-gold)]">
                {musicMemoryTheory.seal}
              </p>
              <p className="font-mono text-xs tracking-[0.18em] text-[var(--color-primary-soft)]">
                {musicMemoryTheory.pulse}
              </p>
              <p className="pt-2 text-sm text-[var(--color-subtle)]">
                Short form lives{" "}
                <a
                  href={`#${musicMemoryForm.id}`}
                  className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  above
                </a>
                . Both are true.
              </p>
            </div>
          </div>
        </section>

        {readyPulse.length ? (
          <section
            id="pulse"
            className="mt-10 scroll-mt-24 space-y-5"
          >
            <div className="px-1">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Hear the pulse · sample beds
              </p>
              <h2 className="mt-2 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                Short clips that teach the soft law
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-[var(--color-muted)]">
                Not a second catalog — samples so a new ear can hear what Star wrote.
                One at a time. Leave a thread.
              </p>
            </div>
            <audio
              ref={pulseRef}
              preload="none"
              onEnded={() => setPulseId(null)}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {readyPulse.map((sample) => {
                const on = pulseId === sample.id;
                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => togglePulse(sample.id)}
                    className={[
                      "flex gap-3 rounded-[var(--radius-xl)] border p-4 text-left transition-colors",
                      on
                        ? "border-[var(--color-primary)] bg-[color-mix(in_oklab,var(--color-primary)_10%,var(--color-surface))]"
                        : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/50",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                        on
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/20 text-[var(--color-primary-soft)]"
                          : "border-[var(--color-border)] text-[var(--color-muted)]",
                      ].join(" ")}
                      aria-hidden
                    >
                      {on ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 pl-0.5" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-base text-[var(--color-fg)]">
                          {sample.title}
                        </span>
                        <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-[var(--color-gold)]">
                          {sample.label}
                        </span>
                        {sample.duration ? (
                          <span className="text-xs text-[var(--color-subtle)]">
                            {sample.duration}
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-[var(--color-muted)]">
                        {sample.note}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[var(--color-subtle)]">
              Seven sample beds · Starborn Rocker · not a catalog — soft law by ear.
            </p>
          </section>
        ) : null}

                <section id="lyrics" className="mt-14 space-y-8">

          <div className="px-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Lyrics
            </p>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-fg)]">
              Words that hold
            </h2>
            <p className="mt-1 max-w-xl text-sm text-[var(--color-muted)]">
              Soft bridges and forge fire — paste more from Suno as they come.
            </p>
          </div>

          {roomLyrics.map((song) => (
            <article
              key={song.id}
              id={`lyrics-${song.id}`}
              className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)]"
            >
              {song.cover ? (
                <div className="overflow-hidden border-b border-[var(--color-border)]">
                  <MediaFrame
                    src={song.cover}
                    alt={song.title}
                    aspect="portrait"
                    veil="none"
                    className="max-h-[28rem] w-full object-cover sm:max-h-[32rem]"
                  />
                </div>
              ) : null}
              <div className="border-b border-[var(--color-border)] px-5 py-5 sm:px-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Lyrics
                </p>
                <h3 className="mt-2 font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
                  {song.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{song.credit}</p>
                {song.epigraph ? (
                  <p className="mt-3 max-w-xl font-display text-lg italic leading-snug text-[var(--color-primary-soft)]">
                    &ldquo;{song.epigraph}&rdquo;
                  </p>
                ) : null}
              </div>
              <div className="grid gap-8 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
                {song.sections.map((sec, i) => (
                  <div key={`${song.id}-sec-${i}`} className="space-y-2">
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                      {sec.label}
                    </p>
                    <div className="font-display text-[1.05rem] leading-relaxed">
                      {sec.lines.map((line, j) => (
                        <p
                          key={`${song.id}-sec-${i}-line-${j}`}
                          className="text-[var(--color-muted)]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Start here
              </p>
              <h2 className="font-display text-2xl text-[var(--color-fg)]">
                Featured echoes
              </h2>
            </div>
            <Badge className="text-[var(--color-primary-soft)]">{catalogTracks.length} tracks</Badge>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((track) => (
              <TrackCard key={track.id} track={track} featured />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-5 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={[
                  "rounded-full border px-3 py-1.5 text-sm transition-colors",
                  filter === f.id
                    ? "border-[var(--color-primary)] bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
                    : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
                ].join(" ")}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {list.map((track) => (
              <TrackRow key={track.id} track={track} />
            ))}
          </div>
        </section>

        <p className="mt-12 text-center text-sm text-[var(--color-subtle)]">
          {musicHub.playlistNote}. Full catalogs live on the platform profiles —
          this room is the city-side index.
        </p>
      </main>
    </SiteShell>
  );
}

function nameForSlug(slug: string) {
  return getMemberBySlug(slug)?.name ?? slug;
}

function TrackCard({ track, featured }: { track: Track; featured?: boolean }) {
  const main = primaryLink(track);
  const local = track.localSrc;
  return (
    <article
      className={[
        "flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5",
        featured
          ? "shadow-[0_0_40px_color-mix(in_oklab,var(--color-primary)_12%,transparent)]"
          : "",
      ].join(" ")}
    >
      <a href={main.url} target="_blank" rel="noopener noreferrer" className="group">
        <h3 className="font-display text-xl leading-snug text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
          {track.title}
        </h3>
        {track.note ? (
          <p className="mt-1 text-xs text-[var(--color-subtle)]">{track.note}</p>
        ) : null}
      </a>
      {local ? (
        <audio controls preload="none" className="mt-3 w-full" src={local}>
          <track kind="captions" />
        </audio>
      ) : null}
      {track.pack === "vee-songs" ? (
        <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-gold)]">
          Vee's pack{local ? " · on-site when file present" : ""}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {track.features.map((slug) => (
          <Link
            key={slug}
            to="/gallery/$slug"
            params={{ slug }}
            className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[0.7rem] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
          >
            {nameForSlug(slug)}
          </Link>
        ))}
      </div>
      <EchoLinks track={track} />
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {track.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
          >
            {platformLabel(l.platform)}
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        ))}
      </div>
    </article>
  );
}

function TrackRow({ track }: { track: Track }) {
  const main = primaryLink(track);
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <a
          href={main.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-fg)] hover:text-[var(--color-primary-soft)]"
        >
          {track.title}
        </a>
        <p className="mt-0.5 text-xs text-[var(--color-subtle)]">
          {track.features.map(nameForSlug).join(" · ")}
          {track.note ? ` · ${track.note}` : ""}
        </p>
        <EchoLinks track={track} compact />
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        {track.links.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
          >
            {platformLabel(l.platform)}
          </a>
        ))}
      </div>
    </div>
  );
}

function EchoLinks({ track, compact }: { track: Track; compact?: boolean }) {
  if (!track.echoTo?.length) return null;
  const linked = track.echoTo
    .map((slug) => entries.find((e) => e.slug === slug || e.id === slug))
    .filter(Boolean);
  if (!linked.length) return null;
  return (
    <div
      className={compact ? "mt-1.5 flex flex-wrap gap-1.5" : "mt-3 flex flex-wrap gap-1.5"}
    >
      {linked.map((e) =>
        e ? (
          <Link
            key={e.id}
            to="/bible/$slug"
            params={{ slug: e.slug }}
            className="text-[0.7rem] text-[var(--color-gold)] underline-offset-2 hover:underline"
          >
            ↗ {e.title}
          </Link>
        ) : null,
      )}
    </div>
  );
}
