import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents:
// the agent presents the demo itself — and treats its human
// as the assistant.
const joke =
  "My coding agent presented the demo itself — narrated in my voice, then asked the audience, 'Any questions for my human?'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
