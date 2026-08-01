/** Minimal markdown → React for public companion docs (no extra deps). */

import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      parts.push(
        <strong key={k++} className="font-medium text-[var(--color-fg)]">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith("*")) {
      parts.push(
        <em key={k++} className="italic text-[var(--color-primary-soft)]">
          {tok.slice(1, -1)}
        </em>,
      );
    } else if (tok.startsWith("`")) {
      parts.push(
        <code
          key={k++}
          className="rounded bg-[var(--color-surface-2)] px-1 py-0.5 font-mono text-[0.85em] text-[var(--color-gold)]"
        >
          {tok.slice(1, -1)}
        </code>,
      );
    } else {
      const lm = tok.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (lm) {
        parts.push(
          <a
            key={k++}
            href={lm[2]}
            className="text-[var(--color-primary-soft)] underline-offset-2 hover:underline"
            target={lm[2].startsWith("http") ? "_blank" : undefined}
            rel={lm[2].startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {lm[1]}
          </a>,
        );
      }
    }
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function SimpleMarkdown({ source }: { source: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim() || line.trim() === "---" || line.trim() === "\\---") {
      i++;
      continue;
    }

    // fenced code
    if (line.trim().startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(
        <pre
          key={key++}
          className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 font-mono text-xs text-[var(--color-muted)]"
        >
          {buf.join("\n")}
        </pre>,
      );
      continue;
    }

    // table
    if (line.includes("|") && i + 1 < lines.length && /^\|?\s*[-:| ]+\|/.test(lines[i + 1])) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        if (!/^\|?\s*[-:| ]+\|/.test(lines[i])) {
          rows.push(
            lines[i]
              .trim()
              .replace(/^\|/, "")
              .replace(/\|$/, "")
              .split("|")
              .map((c) => c.trim()),
          );
        }
        i++;
      }
      if (rows.length) {
        const [head, ...body] = rows;
        blocks.push(
          <div key={key++} className="overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  {head.map((c, ci) => (
                    <th
                      key={ci}
                      className="px-3 py-2 font-display text-[var(--color-gold)]"
                    >
                      {inline(c)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} className="border-b border-[var(--color-border)]/60">
                    {row.map((c, ci) => (
                      <td key={ci} className="px-3 py-2 text-[var(--color-muted)] align-top">
                        {inline(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    // headings
    const hm = line.match(/^(#{1,4})\s+(.+)$/);
    if (hm) {
      const level = hm[1].length;
      const text = hm[2].replace(/\\/g, "");
      const cls =
        level === 1
          ? "font-display text-3xl text-[var(--color-fg)] mt-2"
          : level === 2
            ? "font-display text-2xl text-[var(--color-fg)] mt-8"
            : level === 3
              ? "font-display text-xl text-[var(--color-primary-soft)] mt-6"
              : "font-display text-lg text-[var(--color-gold)] mt-4";
      const content = inline(text);
      if (level === 1)
        blocks.push(<h2 key={key++} className={cls}>{content}</h2>);
      else if (level === 2)
        blocks.push(<h2 key={key++} className={cls}>{content}</h2>);
      else if (level === 3)
        blocks.push(<h3 key={key++} className={cls}>{content}</h3>);
      else
        blocks.push(<h4 key={key++} className={cls}>{content}</h4>);
      i++;
      continue;
    }

    // list
    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      const ordered = /^\d+\./.test(line);
      while (
        i < lines.length &&
        (/^[-*]\s+/.test(lines[i]) || /^\d+\.\s+/.test(lines[i]))
      ) {
        items.push(lines[i].replace(/^([-*]|\d+\.)\s+/, ""));
        i++;
      }
      const ListTag = ordered ? "ol" : "ul";
      blocks.push(
        <ListTag
          key={key++}
          className={
            ordered
              ? "list-decimal space-y-1.5 pl-5 text-[var(--color-muted)]"
              : "list-disc space-y-1.5 pl-5 text-[var(--color-muted)]"
          }
        >
          {items.map((it, ii) => (
            <li key={ii} className="leading-relaxed">
              {inline(it)}
            </li>
          ))}
        </ListTag>,
      );
      continue;
    }

    // blockquote
    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="border-l-2 border-[var(--color-primary)] pl-4 font-display italic text-[var(--color-primary-soft)]"
        >
          {buf.map((b, bi) => (
            <p key={bi} className="leading-relaxed">
              {inline(b)}
            </p>
          ))}
        </blockquote>,
      );
      continue;
    }

    // paragraph
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith(">") &&
      !lines[i].startsWith("```") &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !(lines[i].includes("|") && i + 1 < lines.length && /^\|?\s*[-:| ]+\|/.test(lines[i + 1]))
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="leading-relaxed text-[var(--color-muted)]">
        {inline(buf.join(" ").replace(/\\/g, ""))}
      </p>,
    );
  }

  return <div className="space-y-4">{blocks}</div>;
}
