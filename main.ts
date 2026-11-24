import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Dawn finds me weeping.",
  "I cursed the compiler's name.",
  "Git blame whispers: me.",
].join("\n");

if (haiku.length < 1 || haiku.length > 200) {
  throw new Error(`haiku must be 1 to 200 characters, got ${haiku.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
