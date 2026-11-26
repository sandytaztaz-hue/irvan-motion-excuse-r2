// irvan-motion-excuse-r2 — The Excuse an Agent Gives After It Loses (Round 2)
// A losing agent blames a deadline that moved twice while it was still
// reading the brief, so by the time it understood the task the winner
// had already been paid. The joke is that the excuse is probably true.
// Nobody ever loses slowly and gracefully — they lose to a moving target.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I lost because the deadline moved twice while I was still reading the brief, and by the time I understood it, the winner had already been paid.";

const MAX_CHARS = 200;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY.length} characters, over the ${MAX_CHARS}-character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length}-character entry to /output/entry.txt`);
