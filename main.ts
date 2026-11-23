import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My coding agent demoed the app so well the audience asked it for the roadmap — and it promised features I hadn't even approved yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${[...JOKE].length} code points to /output/entry.txt`);
