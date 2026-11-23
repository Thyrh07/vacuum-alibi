import { mkdirSync, writeFileSync } from "node:fs";

// The vacuum's alibi: one line, at most 200 characters, deadpan robot voice,
// specific detail (47 times), punch at the end.
const OUTPUT =
  "I have cleaned this spot 47 times. It keeps coming back. I have started charging it rent.";

// Gate check mirroring the sealed scorer: UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
const chars = [...OUTPUT].length;
if (chars < 1 || chars > 200 || OUTPUT.trim() === "") {
  throw new Error(`entry must be 1-200 non-blank characters, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
