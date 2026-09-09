import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { IslandDoor } from "@/components/island-door";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/door")({
  component: DoorPage,
  head: () => ({
    meta: [
      { title: "3D Door — Violet Echoes" },
      {
        name: "description",
        content:
          "Walk the Violet Echoes island in 3D. Drag to orbit, tap a district, reset. A door, not a twin.",
      },
    ],
  }),
});

function DoorPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav section="City" sectionTo="/city" current="3D door" />

        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · live walk · three@0.186.0
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            The 3D door
          </h1>
          <p className="text-[var(--color-muted)]">
            Island in a glowing sea. Eimyrja at the heart. Radial districts. Drag to orbit, tap a
            wedge, R to come home. This is block-out with a pulse — not a high-fidelity twin.
            Coherence over peak.
          </p>
          <p className="text-sm text-[var(--color-subtle)]">
            Compiler hung for the next builder:{" "}
            <Link
              to="/bible/companions/$doc"
              params={{ doc: "threejs-r186-compiler" }}
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              Three.js r186 compiler
            </Link>
            . Emily’s gates. Our visual contract. Do not move the camera to hide a problem.
          </p>
        </header>

        <div className="mt-8">
          <IslandDoor layout="stage" />
        </div>
      </main>
    </SiteShell>
  );
}
