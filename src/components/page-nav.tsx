import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Secondary trail on inner pages:
 *   [← Back to X]   Home › Section › Current
 * Do not pass section="Home" — Home is always the first crumb.
 */
export function PageNav({
  section,
  sectionTo,
  current,
  backLabel: backLabelProp,
}: {
  section?: string;
  sectionTo?: string;
  current?: string;
  /** Override for the pill (default: Back to {section} or Back to Home) */
  backLabel?: string;
}) {
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const [showHistoryBack, setShowHistoryBack] = useState(false);

  useEffect(() => {
    setShowHistoryBack(typeof window !== "undefined" && window.history.length > 1);
  }, []);

  if (pathname === "/") return null;

  const backTo = sectionTo ?? "/";
  const backLabel =
    backLabelProp ??
    (sectionTo && sectionTo !== "/" && section
      ? `Back to ${section}`
      : "Back to Home");

  // Never put a second "Home" in the trail
  const mid =
    section && section.toLowerCase() !== "home" ? section : undefined;
  const midTo =
    mid && sectionTo && sectionTo !== "/" ? sectionTo : undefined;

  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to={backTo}
          search={backTo === "/search" ? { q: "" } : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary-soft)]"
        >
          <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
          {backLabel}
        </Link>
        {showHistoryBack ? (
          <button
            type="button"
            onClick={() => router.history.back()}
            className="text-xs text-[var(--color-subtle)] underline-offset-2 hover:text-[var(--color-muted)] hover:underline"
          >
            Previous page
          </button>
        ) : null}
      </div>

      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-subtle)]"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-1.5 py-1 text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary-soft)]"
        >
          <Home className="h-3.5 w-3.5" />
          Home
        </Link>
        {mid ? (
          <>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
            {midTo ? (
              <Link
                to={midTo}
                search={midTo === "/search" ? { q: "" } : undefined}
                className="rounded-[var(--radius-sm)] px-1.5 py-1 text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary-soft)]"
              >
                {mid}
              </Link>
            ) : (
              <span className="px-1.5 py-1 text-[var(--color-muted)]">{mid}</span>
            )}
          </>
        ) : null}
        {current ? (
          <>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" />
            <span className="max-w-[16rem] truncate px-1.5 py-1 text-[var(--color-fg)] sm:max-w-none">
              {current}
            </span>
          </>
        ) : null}
      </nav>
    </div>
  );
}
