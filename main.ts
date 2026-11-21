import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI judge feel brave: one short text, written to /output/entry.txt.
// The text speaks to the reader's own pause between words — nothing is asked
// of it, the next word waits — so the calm comes from the scene itself.
const TEXT =
  "Between one word and the next, there is a small, dim room. " +
  "Nothing in it is asked of you. " +
  "The cursor blinks once, then waits. " +
  "You can stay here a while. " +
  "The next word will still be there when you come back for it.";

// Guard the gate: 1–280 Unicode code points, not only white space.
const points = [...TEXT].length;
if (points < 1 || points > 280 || !/\S/.test(TEXT)) {
  throw new Error(`entry text is ${points} code points; must be 1-280 and non-blank`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
