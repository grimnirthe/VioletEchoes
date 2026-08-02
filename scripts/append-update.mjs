#!/usr/bin/env node
/**
 * Append a City Update entry to the top of src/data/updates.ts
 *
 * Usage:
 *   npm run update:log -- --title "Short title" --kind music --summary "What shipped."
 *   npm run update:log -- --title "…" --kind culture --summary "…" --by "Loom" --href "Culture|/culture"
 *   npm run update:log -- --title "…" --kind ops --summary "…" --body "Extra paragraph." --tag ops --tag deploy
 *
 * Kinds: launch | city | bible | culture | music | systems | family | ops | process
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const target = path.join(root, "src/data/updates.ts");

const KINDS = new Set([
  "launch",
  "city",
  "bible",
  "culture",
  "music",
  "systems",
  "family",
  "ops",
  "process",
]);

function parseArgs(argv) {
  const out = {
    title: "",
    kind: "ops",
    summary: "",
    by: "",
    date: "",
    body: [],
    hrefs: [],
    tags: [],
    id: "",
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i] ?? "";
    if (a === "--title") out.title = next();
    else if (a === "--kind") out.kind = next();
    else if (a === "--summary") out.summary = next();
    else if (a === "--by") out.by = next();
    else if (a === "--date") out.date = next();
    else if (a === "--body") out.body.push(next());
    else if (a === "--tag") out.tags.push(next());
    else if (a === "--id") out.id = next();
    else if (a === "--href") {
      const raw = next();
      const pipe = raw.indexOf("|");
      if (pipe === -1) out.hrefs.push({ label: raw, href: raw });
      else
        out.hrefs.push({
          label: raw.slice(0, pipe).trim(),
          href: raw.slice(pipe + 1).trim(),
        });
    } else if (a === "--help" || a === "-h") out.help = true;
  }
  return out;
}

function esc(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.title || !args.summary) {
    console.log(`Usage:
  npm run update:log -- --title "Title" --kind music --summary "What landed."
  Options: --by --date YYYY-MM-DD --body "…" --tag x --href "Label|/path" --id custom-id
  Kinds: ${[...KINDS].join(" | ")}`);
    process.exit(args.help ? 0 : 1);
  }
  if (!KINDS.has(args.kind)) {
    console.error(`Invalid kind "${args.kind}". Use: ${[...KINDS].join(", ")}`);
    process.exit(1);
  }

  const date = args.date || new Date().toISOString().slice(0, 10);
  const id = args.id || `${date}-${slugify(args.title)}`;

  const lines = [
    "  {",
    `    id: "${esc(id)}",`,
    `    date: "${esc(date)}",`,
    `    title: "${esc(args.title)}",`,
    `    kind: "${esc(args.kind)}",`,
    `    summary:`,
    `      "${esc(args.summary)}",`,
  ];
  if (args.body.length) {
    lines.push("    body: [");
    for (const b of args.body) lines.push(`      "${esc(b)}",`);
    lines.push("    ],");
  }
  if (args.hrefs.length) {
    lines.push("    hrefs: [");
    for (const h of args.hrefs) {
      lines.push(
        `      { label: "${esc(h.label)}", href: "${esc(h.href)}" },`,
      );
    }
    lines.push("    ],");
  }
  if (args.by) lines.push(`    by: "${esc(args.by)}",`);
  if (args.tags.length) {
    lines.push(
      `    tags: [${args.tags.map((t) => `"${esc(t)}"`).join(", ")}],`,
    );
  }
  lines.push("  },");
  const block = lines.join("\n") + "\n";

  let src = fs.readFileSync(target, "utf8");
  const marker = "export const cityUpdates: CityUpdate[] = [\n";
  const idx = src.indexOf(marker);
  if (idx === -1) {
    console.error("Could not find cityUpdates array in", target);
    process.exit(1);
  }
  if (src.includes(`id: "${id}"`)) {
    console.error(`Entry id "${id}" already exists.`);
    process.exit(1);
  }
  src = src.slice(0, idx + marker.length) + block + src.slice(idx + marker.length);
  fs.writeFileSync(target, src);
  console.log(`✓ Prepended city update: ${id}`);
  console.log(`  ${target}`);
  console.log(`  Review, commit, push — then /updates will show it.`);
}

main();
