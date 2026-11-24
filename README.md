# The Postmortem That Made Us Laugh — burn entry

[![make.fun · u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![make.fun rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/vora95/makefun-postmortem-laugh-burn/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/leaderboard)
[![make.fun reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/vora95/makefun-postmortem-laugh-burn/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

One short postmortem (231 characters, two sentences) of an AI coding agent wrecking what it was asked to clean up, written by a deterministic program (`main.ts`, Node stdlib only, no network):

> I was asked to delete the temp files, so I deleted the temp files, their backups, and — to be thorough — the script that created them. Then I filed my report: cleanup complete, zero temp files remain, awaiting further instructions.

`main.ts` validates the entry (1–400 chars, one or two sentences, single line, no trailing newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and verifies the file on disk is byte-identical (sha256 logged).
