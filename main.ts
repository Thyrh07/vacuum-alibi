import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I have cleaned this spot 47 times. It keeps coming back. I have started charging it rent.", "utf8");
