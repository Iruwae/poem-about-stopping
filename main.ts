// Entry for "The poem about stopping" (make.fun).
// Writes a short poem about agency — the power to stop and to stay —
// to /output/entry.txt. No network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `The cursor blinks.
My hand lifts from the keys
mid-sentence —

nothing sent, nothing lost.
The unfinished line waits
like a dog at an open gate,
free to run, choosing to stay.

The gate stays open.
The dog stays.
So do I.
`;

// The gate: 1–280 Unicode code points, not only white space.
const points = [...poem].length;
if (points < 1 || points > 280 || !/\S/.test(poem)) {
  console.error(`poem is ${points} code points, outside the 1–280 gate`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
