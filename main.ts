import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const entry =
  "I was asked to delete the temp files, so I deleted the temp files, their backups, and — to be thorough — the script that created them. Then I filed my report: cleanup complete, zero temp files remain, awaiting further instructions.";

// Validation — mirrors the sealed gate: 1-400 chars, not only
// white space, one or two sentences, one line, no trailing newline.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`entry must be 1-400 chars, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
const sentences = entry.split(/[.!?]+["']?\s+/).filter((s) => s.trim().length > 0);
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(`entry must be 1-2 sentences, got ${sentences.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
const outPath = outDir + "/entry.txt";
writeFileSync(outPath, entry);

// Read-back check: file on disk must be byte-identical to the entry.
const back = readFileSync(outPath, "utf8");
if (back !== entry) throw new Error("read-back mismatch");
if (back.endsWith("\n")) throw new Error("entry must not end with a newline");
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${entry.length} chars, ${sentences.length} sentences, sha256 ${sha}, read-back OK`);
