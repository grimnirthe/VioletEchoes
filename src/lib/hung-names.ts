/** Close-enough matching for hung proper names. Unique hit only. Does not invent. */

export type HeardAs = { from: string; to: string };

export function editDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = i - 1;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cur = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + cost);
      prev = cur;
    }
  }
  return row[b.length];
}

export function maxEdits(token: string): number {
  if (token.length >= 8) return 2;
  if (token.length >= 6) return 1;
  return 0;
}

export function collectNameTokens(parts: string[]): string[] {
  const out = new Set<string>();
  for (const p of parts) {
    for (const t of p.toLowerCase().split(/[^a-z0-9]+/)) {
      if (t.length >= 6) out.add(t);
    }
  }
  return [...out];
}

/** Resolve query tokens against hung names. One unique near-hit only. */
export function resolveAgainstNames(
  tokens: string[],
  names: string[],
): { tokens: string[]; heard: HeardAs[] } {
  const heard: HeardAs[] = [];
  const next = tokens.map((t) => {
    if (names.includes(t)) return t;
    const cap = maxEdits(t);
    if (!cap) return t;
    const hits = names.filter((n) => {
      if (n[0] !== t[0]) return false;
      if (Math.abs(n.length - t.length) > cap) return false;
      return editDistance(t, n) <= cap;
    });
    if (hits.length !== 1) return t;
    heard.push({ from: t, to: hits[0] });
    return hits[0];
  });
  return { tokens: next, heard };
}
