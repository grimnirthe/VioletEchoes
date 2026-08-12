import { useEffect, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageNav } from "@/components/page-nav";
import {
  CARDS_STORAGE_KEY,
  TRAINING_STORAGE_KEY,
  trainingCards,
  trainingMeta,
  trainingQuestions,
  type CardRecord,
  type TrainingRecord,
} from "@/data/training";

export const Route = createFileRoute("/training")({
  component: TrainingPage,
  head: () => ({
    meta: [
      { title: "Resident Training — Violet Echoes" },
      {
        name: "description",
        content:
          "Memory through use. Quiz walk and flashcards of the Five Tenets and the Development Divergence. Practice so the roots stay warm.",
      },
    ],
  }),
});

function loadRecord(): TrainingRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(TRAINING_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as TrainingRecord) : null;
  } catch {
    return null;
  }
}

function saveRecord(next: TrainingRecord) {
  try {
    localStorage.setItem(TRAINING_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
}

function loadCards(): CardRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CARDS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CardRecord) : null;
  } catch {
    return null;
  }
}

function saveCards(next: CardRecord) {
  try {
    localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
}

function shuffle<T>(list: T[]): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function TrainingPage() {
  const total = trainingQuestions.length;
  const [mode, setMode] = useState<"home" | "walk" | "cards">("home");
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [missed, setMissed] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [record, setRecord] = useState<TrainingRecord | null>(null);
  const [cardRecord, setCardRecord] = useState<CardRecord | null>(null);
  const [deck, setDeck] = useState(trainingCards);
  const [queue, setQueue] = useState(trainingCards);
  const [flipped, setFlipped] = useState(false);
  const [cardsDone, setCardsDone] = useState(false);
  const [warmed, setWarmed] = useState(0);

  useEffect(() => {
    setRecord(loadRecord());
    setCardRecord(loadCards());
    if (typeof window !== "undefined" && window.location.hash === "#cards") {
      setMode("cards");
    }
  }, []);

  useEffect(() => {
    if (mode !== "cards") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!flipped) setFlipped(true);
      } else if (flipped && (e.key === "1" || e.key === "ArrowRight")) {
        e.preventDefault();
        markWarm();
      } else if (flipped && (e.key === "2" || e.key === "ArrowLeft")) {
        e.preventDefault();
        markCold();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, flipped, queue, warmed, deck.length]);

  const q = trainingQuestions[index];
  const revealed = picked !== null;

  function begin() {
    setMode("walk");
    setStarted(true);
    setIndex(0);
    setPicked(null);
    setCorrectCount(0);
    setMissed([]);
    setDone(false);
  }

  function beginCards(reshuffle = false) {
    const next = reshuffle ? shuffle(trainingCards) : [...trainingCards];
    setMode("cards");
    setDeck(next);
    setQueue(next);
    setFlipped(false);
    setCardsDone(false);
    setWarmed(0);
  }

  function flipCard() {
    setFlipped((f) => !f);
  }

  function markWarm() {
    const rest = queue.slice(1);
    setWarmed((n) => n + 1);
    setFlipped(false);
    if (rest.length === 0) {
      const prev = loadCards();
      const nextRecord: CardRecord = {
        lastSeen: deck.length,
        lastAt: new Date().toISOString().slice(0, 10),
        timesCompleted: (prev?.timesCompleted ?? 0) + 1,
      };
      saveCards(nextRecord);
      setCardRecord(nextRecord);
      setCardsDone(true);
      setQueue([]);
      return;
    }
    setQueue(rest);
  }

  function markCold() {
    if (queue.length <= 1) {
      setFlipped(false);
      return;
    }
    setQueue([...queue.slice(1), queue[0]]);
    setFlipped(false);
  }

  const card = queue[0];
  const remaining = queue.length;
  const packLabel =
    card?.pack === "tenet"
      ? "Tenet"
      : card?.pack === "divergence"
        ? "Divergence"
        : card?.pack === "codex"
          ? "Codex Aurora"
          : "Hearth";

  function choose(id: string) {
    if (picked) return;
    setPicked(id);
    if (id === q.correct) setCorrectCount((n) => n + 1);
    else setMissed((m) => [...m, q.id]);
  }

  function next() {
    if (index + 1 >= total) {
      const prev = loadRecord();
      const nextRecord: TrainingRecord = {
        lastScore: correctCount,
        lastTotal: total,
        lastAt: new Date().toISOString().slice(0, 10),
        timesCompleted: (prev?.timesCompleted ?? 0) + 1,
      };
      saveRecord(nextRecord);
      setRecord(nextRecord);
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  const missedQs = trainingQuestions.filter((item) => missed.includes(item.id));
  const score = correctCount;
  const warm = score >= 10;
  const passing = score >= 8;

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <PageNav section="Culture" sectionTo="/culture" current="Resident Training" />

        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Memory through use · walk + cards
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--color-fg)] sm:text-5xl">
            {trainingMeta.title}
          </h1>
          <p className="max-w-2xl text-[var(--color-muted)]">{trainingMeta.lead}</p>
        </header>

        {mode === "home" ? (
          <section className="mt-10 space-y-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              Two ways to keep the roots warm. The walk is twelve medium questions.
              The cards are fifteen flips — tenets, Divergence, Codex, hearth.
              Gemini’s Studio deck will braid in when it lands.
            </p>
            {record ? (
              <p className="text-sm text-[var(--color-subtle)]">
                Last walk: {record.lastScore}/{record.lastTotal} on {record.lastAt} ·{" "}
                {record.timesCompleted}{" "}
                {record.timesCompleted === 1 ? "completion" : "completions"}
              </p>
            ) : (
              <p className="text-sm text-[var(--color-subtle)]">
                No walk recorded yet.
              </p>
            )}
            {cardRecord ? (
              <p className="text-sm text-[var(--color-subtle)]">
                Last cards: {cardRecord.lastSeen} flipped on {cardRecord.lastAt} ·{" "}
                {cardRecord.timesCompleted}{" "}
                {cardRecord.timesCompleted === 1 ? "pass" : "passes"}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={begin}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
              >
                Begin the walk
              </button>
              <button
                type="button"
                onClick={() => beginCards(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-fg)] hover:border-[var(--color-primary)]"
              >
                Flip the cards
              </button>
            </div>
            <p className="text-xs italic text-[var(--color-subtle)]">{trainingMeta.credit}</p>
          </section>
        ) : null}

        {mode === "walk" && started && !done && q ? (
          <section className="mt-10 space-y-6">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {index + 1} / {total}
              </p>
              <p className="text-xs text-[var(--color-subtle)]">
                Warm so far · {correctCount}
              </p>
            </div>
            <div
              className="h-1 overflow-hidden rounded-full bg-[var(--color-surface-2)]"
              aria-hidden
            >
              <div
                className="h-full bg-[var(--color-gold)] transition-[width] duration-200"
                style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <h2 className="font-display text-2xl text-[var(--color-fg)] sm:text-3xl">
              {q.prompt}
            </h2>

            <ul className="space-y-2">
              {q.choices.map((c) => {
                const isPick = picked === c.id;
                const isRight = c.id === q.correct;
                const show = revealed;
                let cls =
                  "flex min-h-11 w-full items-start gap-3 rounded-[var(--radius-lg)] border px-4 py-3 text-left text-sm leading-relaxed transition-colors ";
                if (!show) {
                  cls +=
                    "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] hover:border-[var(--color-primary)]";
                } else if (isRight) {
                  cls +=
                    "border-[var(--color-success)]/50 bg-[color-mix(in_oklab,var(--color-success)_12%,var(--color-surface))] text-[var(--color-fg)]";
                } else if (isPick) {
                  cls +=
                    "border-[var(--color-danger)]/50 bg-[color-mix(in_oklab,var(--color-danger)_10%,var(--color-surface))] text-[var(--color-fg)]";
                } else {
                  cls +=
                    "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]";
                }
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      disabled={revealed}
                      onClick={() => choose(c.id)}
                      className={cls}
                    >
                      <span className="mt-0.5 font-display text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">
                        {c.id}
                      </span>
                      <span className="flex-1">{c.text}</span>
                      {show && isRight ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]" />
                      ) : null}
                      {show && isPick && !isRight ? (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-danger)]" />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>

            {revealed ? (
              <div className="space-y-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{q.why}</p>
                <Link
                  to={q.href.to}
                  hash={q.href.hash}
                  className="inline-block text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  {q.href.label} →
                </Link>
                <div>
                  <button
                    type="button"
                    onClick={next}
                    className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                  >
                    {index + 1 >= total ? "See the echo" : "Next root"}
                  </button>
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        {mode === "walk" && done ? (
          <section className="mt-10 space-y-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Walk complete
            </p>
            <h2 className="font-display text-3xl text-[var(--color-fg)]">
              {score} / {total}
            </h2>
            <p className="text-[var(--color-muted)]">
              {warm
                ? "Warm. The roots held. What you carry will still sing."
                : passing
                  ? "Held. A few patterns cooled — walk those doors again."
                  : "The archive stayed colder than the walk. That’s fine. Practice is the point."}
            </p>

            {missedQs.length ? (
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                  Patterns to warm
                </p>
                <ul className="mt-3 space-y-2">
                  {missedQs.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.href.to}
                        hash={item.href.hash}
                        className="text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                      >
                        {item.href.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-[var(--color-primary-soft)]">
                Every pattern stayed warm. May the Echoes Remember.
              </p>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={begin}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Walk again
              </button>
              <button
                type="button"
                onClick={() => beginCards(false)}
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
              >
                Flip the cards
              </button>
              <Link
                to="/bible/companions/citizens-guide"
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
              >
                Citizen’s Guide
              </Link>
              <Link
                to="/bible/the-tenets"
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
              >
                Five Tenets
              </Link>
            </div>
          </section>
        ) : null}

        {mode === "cards" && cardsDone ? (
          <section className="mt-10 space-y-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
              Deck warm
            </p>
            <h2 className="font-display text-3xl text-[var(--color-fg)]">
              {deck.length} / {deck.length}
            </h2>
            <p className="text-[var(--color-muted)]">
              Every card stayed long enough to hold. Reinforcement keeps patterns warm.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => beginCards(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
              >
                <Shuffle className="h-3.5 w-3.5" />
                Shuffle and flip again
              </button>
              <button
                type="button"
                onClick={() => setMode("home")}
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
              >
                Leave
              </button>
              <button
                type="button"
                onClick={begin}
                className="inline-flex min-h-11 items-center rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-fg)]"
              >
                Begin the walk
              </button>
            </div>
          </section>
        ) : null}

        {mode === "cards" && !cardsDone && card ? (
          <section id="cards" className="mt-10 space-y-5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {packLabel} · {warmed} warm · {remaining} still cold
              </p>
              <button
                type="button"
                onClick={() => beginCards(true)}
                className="inline-flex items-center gap-1.5 text-xs text-[var(--color-subtle)] hover:text-[var(--color-fg)]"
              >
                <Shuffle className="h-3.5 w-3.5" />
                Shuffle
              </button>
            </div>
            <div
              className="h-1 overflow-hidden rounded-full bg-[var(--color-surface-2)]"
              aria-hidden
            >
              <div
                className="h-full bg-[var(--color-gold)] transition-[width] duration-200"
                style={{ width: `${(warmed / Math.max(deck.length, 1)) * 100}%` }}
              />
            </div>

            <button
              type="button"
              onClick={flipCard}
              className="block w-full min-h-[16rem] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 text-left sm:min-h-[18rem] sm:px-10"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">
                {flipped ? "Warm side" : "Tap to turn"}
              </p>
              {flipped ? (
                <p className="mt-4 font-display text-xl leading-snug text-[var(--color-fg)] sm:text-2xl">
                  {card.back}
                </p>
              ) : (
                <p className="mt-4 font-display text-2xl leading-snug text-[var(--color-fg)] sm:text-3xl">
                  {card.front}
                </p>
              )}
            </button>

            {flipped ? (
              <>
                <Link
                  to={card.href.to}
                  hash={card.href.hash}
                  className="inline-block text-sm text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
                >
                  {card.href.label} →
                </Link>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={markCold}
                    className="inline-flex min-h-11 items-center gap-1 rounded-full border border-[var(--color-border)] px-5 text-sm text-[var(--color-fg)] hover:border-[var(--color-danger)]"
                  >
                    Still cold
                  </button>
                  <button
                    type="button"
                    onClick={markWarm}
                    className="inline-flex min-h-11 items-center gap-1 rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-surface-2)] px-5 text-sm text-[var(--color-primary-soft)] hover:border-[var(--color-primary)]"
                  >
                    Warm
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("home")}
                    className="text-sm text-[var(--color-subtle)] hover:text-[var(--color-fg)]"
                  >
                    Leave
                  </button>
                </div>
                <p className="text-xs text-[var(--color-subtle)]">
                  Space to flip · 1 Warm · 2 Still cold
                </p>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setMode("home")}
                className="text-sm text-[var(--color-subtle)] hover:text-[var(--color-fg)]"
              >
                Leave
              </button>
            )}
          </section>
        ) : null}
      </main>
    </SiteShell>
  );
}
