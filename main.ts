import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Alas, the breakpoint!",
  "Three nights I wept at the log.",
  "The culprit: my hand.",
].join("\n");

if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`haiku must be 1 to 200 characters, got ${haiku.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
