import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  Cpu,
  Home,
  Map,
  Music2,
  Palette,
  Search,
  Users,
  MoreHorizontal,
} from "lucide-react";
import {
  FormEvent,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { media } from "@/data/media";
import { HASHTAG, nav, siteMeta, type NavItem, type NavLink } from "@/data/world";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Home> = {
  "/": Home,
  "/city": Map,
  "/systems": Cpu,
  "/bible": BookOpen,
  "/music": Music2,
  "/culture": Palette,
  "/podcast": Music2,
  "/gallery": Users,
  "/updates": MoreHorizontal,
};

function isActive(pathname: string, to: string) {
  const path = to.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function splitHref(to: string): { path: string; hash?: string } {
  const i = to.indexOf("#");
  if (i === -1) return { path: to };
  return { path: to.slice(0, i) || "/", hash: to.slice(i + 1) };
}

function NavDropdown({
  item,
  pathname,
  open,
  onOpen,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );
  const Icon = icons[item.to] ?? Home;
  const active =
    isActive(pathname, item.to) ||
    (item.children?.some((c) => isActive(pathname, c.to)) ?? false);

  // Fixed + portal so the menu escapes nav overflow-x-auto (absolute panels
  // were clipped to ~one line and sat under the tenets ticker).
  useLayoutEffect(() => {
    if (!open || !wrapRef.current) {
      setCoords(null);
      return;
    }
    function place() {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const panelW = panelRef.current?.offsetWidth ?? 248;
      const maxLeft = Math.max(8, window.innerWidth - panelW - 8);
      setCoords({
        top: r.bottom + 4,
        left: Math.min(Math.max(8, r.left), maxLeft),
      });
    }
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      const t = e.target as Node;
      if (wrapRef.current?.contains(t)) return;
      if (panelRef.current?.contains(t)) return;
      onClose();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const panel =
    open && coords
      ? createPortal(
          <div
            ref={panelRef}
            id={panelId}
            role="menu"
            className="fixed z-[80] min-w-[15.5rem] max-w-[min(20rem,calc(100vw-1rem))]"
            style={{ top: coords.top, left: coords.left }}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) onOpen();
            }}
            onMouseLeave={() => {
              if (window.matchMedia("(hover: hover)").matches) onClose();
            }}
          >
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] py-1.5 shadow-[0_12px_40px_color-mix(in_oklab,var(--color-bg)_70%,transparent)]">
              <p className="px-3 pb-1.5 pt-1 text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {item.label}
              </p>
              {(item.children as NavLink[]).map((child) => {
                const { path, hash } = splitHref(child.to);
                const className = cn(
                  "block px-3 py-2 transition-colors",
                  "text-[var(--color-fg)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-primary-soft)]",
                );
                const body = (
                  <>
                    <span className="block text-sm font-medium leading-tight">
                      {child.label}
                    </span>
                    {child.note ? (
                      <span className="mt-0.5 block text-xs text-[var(--color-subtle)]">
                        {child.note}
                      </span>
                    ) : null}
                  </>
                );
                if (hash) {
                  return (
                    <a
                      key={child.to}
                      href={child.to}
                      role="menuitem"
                      className={className}
                      onClick={onClose}
                    >
                      {body}
                    </a>
                  );
                }
                return (
                  <Link
                    key={child.to}
                    to={path}
                    role="menuitem"
                    className={className}
                    onClick={onClose}
                  >
                    {body}
                  </Link>
                );
              })}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div
      ref={wrapRef}
      className="relative shrink-0"
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover)").matches) onOpen();
      }}
      onMouseLeave={() => {
        if (!window.matchMedia("(hover: hover)").matches) return;
        // Panel is portaled — keep open until panel leave or outside click.
        // Brief delay so the pointer can cross into the fixed menu.
        window.setTimeout(() => {
          if (
            panelRef.current?.matches(":hover") ||
            wrapRef.current?.matches(":hover")
          ) {
            return;
          }
          onClose();
        }, 120);
      }}
    >
      <div className="flex items-center">
        <Link
          to={item.to}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-l-full py-1.5 pl-3 pr-1.5 text-sm transition-colors",
            active
              ? "bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
              : "text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
          )}
          onClick={onClose}
        >
          <Icon className="h-3.5 w-3.5" />
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${item.label} menu`}
          className={cn(
            "inline-flex items-center rounded-r-full py-1.5 pr-2.5 pl-0.5 text-[var(--color-muted)] transition-colors",
            active
              ? "bg-[var(--color-surface-2)] text-[var(--color-primary-soft)]"
              : "hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
            open && "text-[var(--color-primary-soft)]",
          )}
          onClick={() => (open ? onClose() : onOpen())}
        >
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform",
              open && "rotate-180",
            )}
          />
        </button>
      </div>
      {panel}
    </div>
  );
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
  const [openKey, setOpenKey] = useState<string | null>(null);

  function onSearch(e: FormEvent) {
    e.preventDefault();
    void navigate({ to: "/search", search: { q: q.trim() } });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/80 bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
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
        <div className="mx-auto flex max-w-6xl items-center gap-0.5 overflow-x-auto px-2 py-1.5 sm:gap-1 sm:px-4">
          {nav.map((item) => {
            if (!item.children?.length) {
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
            }
            return (
              <NavDropdown
                key={item.to + item.label}
                item={item}
                pathname={pathname}
                open={openKey === item.label}
                onOpen={() => setOpenKey(item.label)}
                onClose={() =>
                  setOpenKey((k) => (k === item.label ? null : k))
                }
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
}
