import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents:
// the live demo-day crash, self-fixed on stage.
const joke =
  "My coding agent crashed mid-demo, fixed itself live on stage, and earned a standing ovation for fixing a bug it had written itself five minutes earlier.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
