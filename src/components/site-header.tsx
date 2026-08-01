import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, Cpu, Home, Map, Music2, Search, Users } from "lucide-react";
import { FormEvent, useState } from "react";
import { media } from "@/data/media";
import { HASHTAG, nav, siteMeta } from "@/data/world";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Home> = {
  "/": Home,
  "/city": Map,
  "/systems": Cpu,
  "/bible": BookOpen,
  "/music": Music2,
  "/gallery": Users,
};

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const searchQ = useRouterState({
    select: (s) =>
      typeof s.location.search === "object" &&
      s.location.search &&
      "q" in s.location.search
        ? String((s.location.search as { q?: string }).q ?? "")
        : "",
  });
  const navigate = useNavigate();
  const [q, setQ] = useState(searchQ);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/search", search: { q: q.trim() } });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/80 bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={media.logoMark}
              alt=""
              className="h-10 w-10 shrink-0 rounded-full border border-[var(--color-primary)]/35 object-cover shadow-[0_0_28px_color-mix(in_oklab,var(--color-primary)_30%,transparent)] sm:h-11 sm:w-11"
              width={44}
              height={44}
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight tracking-wide text-[var(--color-fg)] group-hover:text-[var(--color-primary-soft)]">
                {siteMeta.name}
              </span>
              <span className="block truncate text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-gold)]">
                {HASHTAG} · we are the light
              </span>
            </span>
          </Link>
        </div>

        <form
          onSubmit={onSearch}
          className="hidden max-w-xs flex-1 items-center gap-2 md:flex"
        >
          <label className="sr-only" htmlFor="site-search">
            Search
          </label>
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--color-subtle)]" />
            <input
              id="site-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the bible…"
              className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] py-1.5 pl-8 pr-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
        </form>

        <Link
          to="/search"
          search={{ q: "" }}
          className="rounded-full p-2 text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)] md:hidden"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </Link>
      </div>

      <nav
        aria-label="Primary"
        className="border-t border-[var(--color-border)]/60"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-2 py-1.5 sm:px-4">
          {nav.map((item) => {
            const Icon = icons[item.to] ?? Home;
            const active = isActive(pathname, item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
