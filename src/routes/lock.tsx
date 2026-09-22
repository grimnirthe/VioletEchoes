import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import { ShotPreview } from "@/components/shot-preview";
import { HASHTAG } from "@/data/world";

export const Route = createFileRoute("/lock")({
  component: LockPage,
  head: () => ({
    meta: [
      { title: "Scale snap — Violet Echoes" },
      {
        name: "description",
        content:
          "Locked-camera 3D preview of a Scale Lock character shot. One height, one ruler, no orbit. Proof before Aurora.",
      },
    ],
  }),
});

function LockPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <PageNav section="Gallery" sectionTo="/gallery" current="Scale snap" />

        <header className="max-w-2xl space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            {HASHTAG} · Scale Lock · camera snap
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            See the shot before Aurora
          </h1>
          <p className="text-[var(--color-muted)]">
            Same Three.js as the island door. Different law. This camera does not orbit. Front, ¾,
            and side keep one height. Kitty is sixteen inches. Adults are walking-scale. A chair
            has two stories — on the seat, or in the chair — never both.
          </p>
          <p className="text-sm text-[var(--color-subtle)]">
            Not a second locker. Nymph still owns Check / Build / Make still. This is the proof
            pane. Cloth stays Velora’s. No family faces — mannequins only.
          </p>
        </header>

        <section className="mt-8">
          <ShotPreview />
        </section>

        <section className="mt-8 max-w-2xl space-y-3 text-sm text-[var(--color-muted)]">
          <p>
            Try Adult + Kitty + Sit. The still stays off and the frame shows both bibles at once,
            in red, so the mix is visible before Imagine ever sees it.
          </p>
          <p>
            Walk hangs a lamp at head height. Street hangs a curb. Partner hangs a door handle.
            Node pulls back until the building is the subject. Palm is forearm-scale. No drag, no
            god-shot.
          </p>
          <p>
            Island orbit lives on the{" "}
            <Link
              to="/door"
              className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            >
              3D door
            </Link>
            . This snap is for Scale Lock.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
