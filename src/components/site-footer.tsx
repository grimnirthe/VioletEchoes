import { Link } from "@tanstack/react-router";
import { media } from "@/data/media";
import { musicHub } from "@/data/music";
import { brandLine, HASHTAG, siteMeta } from "@/data/world";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-md gap-4">
          <img
            src={media.logoMark}
            alt=""
            className="h-14 w-14 shrink-0 rounded-full border border-[var(--color-primary)]/30 object-cover"
            width={56}
            height={56}
          />
          <div className="space-y-1.5">
            <p className="font-display text-2xl text-[var(--color-fg)]">{siteMeta.name}</p>
            <p className="font-mono text-sm text-[var(--color-gold)]">{HASHTAG}</p>
            <p className="text-sm italic text-[var(--color-primary-soft)]">{brandLine.text}</p>
            <p className="text-xs text-[var(--color-muted)]">{brandLine.sub}</p>
            <p className="text-xs text-[var(--color-subtle)]">{siteMeta.version}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
          <Link to="/bible" className="hover:text-[var(--color-primary-soft)]">
            World Bible
          </Link>
          <Link to="/city" className="hover:text-[var(--color-primary-soft)]">
            Explore City
          </Link>
          <Link to="/music" className="hover:text-[var(--color-primary-soft)]">
            Echoes
          </Link>
          <Link to="/culture" className="hover:text-[var(--color-primary-soft)]">
            Culture
          </Link>
          <a href="/culture#rituals" className="hover:text-[var(--color-primary-soft)]">
            Living Practices
          </a>
          <Link to="/updates" className="hover:text-[var(--color-primary-soft)]">
            Updates
          </Link>

          <Link to="/gallery" className="hover:text-[var(--color-primary-soft)]">
            Gallery
          </Link>
          <Link to="/credits" className="hover:text-[var(--color-primary-soft)]">
            Credits
          </Link>
          <Link to="/collaborate" className="hover:text-[var(--color-primary-soft)]">
            Collaborate
          </Link>
          <Link to="/search" search={{ q: "" }} className="hover:text-[var(--color-primary-soft)]">
            Search
          </Link>
          <a
            href={musicHub.sunoProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary-soft)]"
          >
            Suno
          </a>
          <a
            href={musicHub.aethrArtist}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary-soft)]"
          >
            AethrMusik
          </a>
          <a href="/llms.txt" className="hover:text-[var(--color-primary-soft)]">
            llms.txt
          </a>
          <a href="/world.json" className="hover:text-[var(--color-primary-soft)]">
            world.json
          </a>
        </div>
      </div>
    </footer>
  );
}
