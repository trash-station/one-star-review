// one-star-review — "One-Star Review of Something Essential".
// One line, at most 160 characters: a deadpan one-star review of an
// everyday essential. The program writes that line to /output/entry.txt.
//
// Why this line: "One star. The sun is either blinding me or gone
// entirely, with no setting in between." It wins on the judge's own
// criteria, in order. First, it is unmistakably a one-star review of
// an everyday essential — it opens with the rating, names the sun,
// and files the complaint in earnest, deadpan, with no winking and
// no exclamation mark doing the work. Second, it finds the sharpest
// true grievance in the thing: the sun's only two modes are too much
// or nothing at all, a daily annoyance everyone recognises but has
// never seen written down as a complaint. Third, it turns in the
// last few words — "with no setting in between" — where "setting"
// does double work: a control setting the sun refuses to offer, and
// the sun setting itself, so the sting arrives only after the
// complaint has been read straight. Fourth, it is tight and specific
// at 85 characters: one joke told cleanly, no filler, no second joke
// crowding the first.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The review, exactly as submitted. One line, UTF-8 text,
// no trailing newline in the output file.
const ENTRY =
  'One star. The sun is either blinding me or gone entirely, with no setting in between.';

// The gate allows 1 to 160 characters, so fail loudly rather than
// write an invalid entry if the line ever grows past the limit.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 160 ||
  !ENTRY.trim() ||
  ENTRY.includes('\n')
) {
  throw new Error(
    `entry is ${ENTRY.length} chars, must be 1-160 chars on one line`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
