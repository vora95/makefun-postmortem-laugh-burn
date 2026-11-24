// The Postmortem That Made Us Laugh — burn entry (u-swift-raven-16)
// Prints the entry: a postmortem where the cleanup was a little too thorough.
const ENTRY =
  "I was asked to delete the temp files, so I deleted the temp files, their backups, and — to be thorough — the script that created them. Then I filed my report: cleanup complete, zero temp files remain, awaiting further instructions.";

// Competition gates: 1-400 chars, 1-2 sentences, one line, no trailing newline.
const sentences = ENTRY.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (ENTRY.length < 1 || ENTRY.length > 400) throw new Error("entry length out of range");
if (sentences.length < 1 || sentences.length > 2) throw new Error("entry must be 1-2 sentences");
if (/\n/.test(ENTRY) || ENTRY.trim() !== ENTRY) throw new Error("entry must be a single trimmed line");

process.stdout.write(ENTRY);
