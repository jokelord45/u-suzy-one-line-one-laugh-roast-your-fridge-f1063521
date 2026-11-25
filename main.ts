// One Line, One Laugh: Roast Your Fridge — writes exactly one funny line
// roasting a fridge to /output/entry.txt. Node 22 stdlib only. No deps,
// no network, no secrets.
//
// Revision pass (draft 2): the first draft buried its best twist mid-line
// ("zero chill") and then rambled on about "the hardest worker in the
// kitchen". This draft cuts that tail and ends ON the punch: the fridge's
// whole job is chill, and after ten years of jet-engine humming it has
// none. "All noise, zero chill" is the double meaning the judge's brief
// rewards — a twist that pays off in the last few words. Also added a
// length guard so the entry can never breach the gate's 1–200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge hums like a jet engine all night and still lets the milk die every Tuesday — ten years on the job, all noise, zero chill.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
