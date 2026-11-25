import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  "At 6 AM Saturday my alarm clock takes my weekend hostage, and snooze is just me paying ransom in nine-minute installments.",
  "utf8",
);
