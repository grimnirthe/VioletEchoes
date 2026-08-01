import { EchoIntro } from "@/components/echo-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pulseTransmission } from "@/data/pulse";
import { rememberLine, sunoEchoLine, theTenets } from "@/data/world";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const tickerItems = [
    ...theTenets.map((t) => t.title),
    `“${rememberLine.text}” — ${rememberLine.attribution}`,
    `“${sunoEchoLine.text}” — ${sunoEchoLine.attribution}`,
    pulseTransmission(),
  ];
  const quoteStart = theTenets.length;

  return (
    <div className="flex min-h-dvh flex-col rain-veil">
      <EchoIntro />
      <SiteHeader />
      <div
        className="relative z-20 overflow-hidden border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg-elevated)_92%,transparent)] backdrop-blur-sm"
        role="region"
        aria-label="The Tenets — scrolling reminder"
      >
        <div className="echo-marquee-track gap-10 py-2 pl-4 text-sm sm:gap-14 sm:py-2.5 sm:pl-6 sm:text-[0.95rem]">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex shrink-0 items-center gap-10 sm:gap-14">
              {tickerItems.map((item, i) => (
                <span
                  key={`${loop}-${i}`}
                  className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-[var(--color-primary-soft)]"
                >
                  <span className="text-[var(--color-gold)]" aria-hidden>
                    ✦
                  </span>
                  <span className={i >= quoteStart ? "italic" : ""}>{item}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="sr-only">
          The Tenets: {theTenets.map((t) => t.title).join(" ")} {rememberLine.text} —{" "}
          {rememberLine.attribution}. {sunoEchoLine.text} — {sunoEchoLine.attribution}. {pulseTransmission()}
        </p>
      </div>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-0 grid-glow opacity-40" aria-hidden />
        <div className="relative">{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
}
