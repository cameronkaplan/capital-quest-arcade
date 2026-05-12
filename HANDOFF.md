# Capital Quest Arcade Handoff

## What This Project Is

Capital Quest Arcade is a static browser game for learning U.S. states and capitals. It was built for a 4th grade student who is practicing classroom region packs and benefits from dyslexia-friendly spelling support, funny memory hooks, and frequent game-like variety.

The game should be shareable as a simple static site and playable without login. It currently lives locally in:

```text
/Users/cameronkaplan/Documents/Geography Game
```

GitHub repo:

```text
https://github.com/cameronkaplan/capital-quest-arcade
```

## High-Level Design

The game starts with five region tiles:

- West
- Midwest
- Southeast
- Northeast
- All

After choosing a region, the player can use the default `Play` mode or choose a training mode. The default mode is Boss Round.

All modes now use 20 questions. This was a deliberate change because the user wanted more room for mini-games and funny breaks.

## Region Packs

The current classroom-inspired region packs are configured in `DEFAULT_REGION_PACKS` in `app.js`.

- West: `WA`, `WY`, `CA`, `HI`, `MT`, `NV`, `UT`, `AK`, `ID`, `OR`, `NM`, `AZ`, `CO`
- Midwest: `OH`, `IN`, `IL`, `MI`, `WI`, `MO`, `IA`, `MN`, `KS`, `NE`, `SD`, `ND`
- Southeast: `GA`, `FL`, `SC`, `LA`, `TN`, `WV`, `NC`, `MS`, `VA`, `KY`, `AR`, `AL`, `TX`
- Northeast: `CT`, `DE`, `ME`, `MD`, `MA`, `NH`, `NJ`, `NY`, `OK`, `PA`, `RI`, `VT`
- All: all 50 states

The Northeast list is still a preview and intentionally includes `OK` based on the user’s guessed/future classroom set. The game includes parent setup/editing so this can change later.

## Main Modes

### Boss Round

Mixed mode. It rotates among:

- Find the State
- Capital Beacon
- Capital Choice
- Type Dash
- mini-games/funny breaks

Current Boss Round special cadence:

- Q4: Capital Call-In
- Q8: Road Trip
- Q12: Weird Neighbor Court
- Q16: Capital Call-In
- Q20: bonus mini-game

### Find the State

Shows the full U.S. map and asks the player to click a state.

Example:

```text
Click Colorado.
```

Training modes also get mini-games every 4 questions. For Find the State this means the core practice remains map clicking, but it is interrupted by arcade breaks.

Training cadence:

- Q4: bonus mini-game
- Q8: Capital Call-In
- Q12: Road Trip
- Q16: Weird Neighbor Court
- Q20: Memory Break

### Capital Beacon

Shows a capital and asks which state has it.

Example:

```text
Which state has the capital Denver?
```

### Capital Choice

Multiple-choice capital quiz.

Example:

```text
What is the capital of Ohio?
```

### Type Dash

Typed state/capital recall with forgiving spelling.

The fuzzy answer logic accepts close spellings and then teaches the standard spelling. Do not make this punitive.

### Weak Spots

Uses states/capitals that were missed or answered slowly. Stored in localStorage.

## Mini-Games

### Capital Call-In

The game shows a fake call-in/radio-style screen. A capital “caller” gives a clue and asks what state they are in.

Important audio-backed calls:

- Wisconsin/Madison: `assets/audio/capital-madison-wisconsin.mp3`
- South Dakota/Pierre: `assets/audio/capital-piere-south-dakota.mp3`
- Wyoming/Cheyenne: `assets/audio/capital-cheyanne-wyoming.mp3`

The user specifically wanted Madison and Pierre to show up more reliably. The current code prioritizes Capital Call-In cases with audio and avoids repeating the same call during a round. It does not absolutely guarantee both Madison and Pierre every round.

### Road Trip

Map-based driving mini-game. The player holds/drags to reveal a small car and move across states. There is also a click-route fallback.

Current Midwest-relevant route:

```text
Drive from North Dakota to South Dakota.
```

Other routes exist for All and other regions.

### Weird Neighbor Court

Court-show style mini-game about state neighbors or confusing map relationships.

Current Midwest-relevant case:

```text
North Dakota v. South Dakota
```

The prompt asks which Dakota is on trial.

### Borderline Hotline

Phone-call style geography clues about neighboring states. Example:

```text
North Dakota keeps calling me the lower twin. Rude, but accurate.
```

### Square-Off

Uses real state map shapes to help distinguish confusing states, especially square/rectangle-ish states.

Examples:

- Kansas/Oklahoma
- Colorado/Wyoming
- North Dakota/South Dakota
- Alabama/Mississippi
- Vermont/New Hampshire

### Memory Break

Full-screen mnemonic moment using real state geometry where possible.

Current memory breaks include:

- Old Mon Montana / Idaho
- Chef MIMAL
- MAG line
- COW stack
- Dakota twins
- Vermont/New Hampshire

## Feedback And Learning Support

After normal answers, the map overlay shows:

- randomized praise for correct answers
- mnemonic
- capital fact when appropriate
- `X` dismiss button

Correct-answer overlays stay up long enough to read. Pressing `X` on a correct answer advances to the next question. Pressing `X` on a retry hint just hides the hint so the player can keep trying.

Wrong capital answers show the mnemonic and ask the player to guess again. Wrong state answers show map-shape reminders when possible.

## Audio Notes

Audio files are user-generated, mostly via ElevenLabs. Keep filename references exact. Known misspellings in filenames are real:

- `capital-cheyanne-wyoming.mp3`
- `capital-piere-south-dakota.mp3`
- `bonus-unlokced.mp3`

If adding audio, first inspect `assets/audio/` and then wire the exact path into the relevant case in `app.js`.

## Deployment State

The repo has two important branches:

- `main`: development source
- `gh-pages`: static site branch

Recent changes have been pushed to both. When updating gameplay, commit on `main`, push, then cherry-pick to `gh-pages` and push.

The user may still need to enable GitHub Pages manually in repository settings if the public page is not live:

- Source: Deploy from branch
- Branch: `gh-pages`
- Folder: `/ (root)`

Expected public URL:

```text
https://cameronkaplan.github.io/capital-quest-arcade/
```

## Recent User Concerns

The user noticed that a 20-question Midwest Boss Round did not show Madison/Pierre hotline, Weird Neighbor Court, or Road Trip. The cause was not deletion; it was randomization. The code was changed so Boss Round now guarantees Road Trip and Weird Neighbor Court at fixed slots and prioritizes audio-backed Capital Call-In.

The user then asked to add mini-games to training modes too, especially Find the State. This is now implemented: every mode has five planned breaks.

## What Still Needs Work

Highest-priority follow-ups:

- Decide whether Madison and Pierre should be guaranteed in each Midwest round, rather than merely prioritized.
- Add a parent/debug preview screen for mini-games so the user can test Road Trip, Court, Hotline, and Memory Break directly.
- Improve Road Trip discoverability. It works, but the first interaction is not obvious enough for a child.
- Add more region-specific mini-games for Southeast and Northeast.
- Add more audio-backed calls as the user generates files.
- Make the Memory Break visuals more polished and less text-heavy where possible.
- Add a simple automated smoke test for question cadence:
  - Boss Q4 Capital Call-In
  - Boss Q8 Road Trip
  - Boss Q12 Weird Neighbor Court
  - Find the State Q4 mini-game
  - all modes show 20 questions

Nice-to-have polish:

- Better mobile layout testing.
- More animation around Capital Call-In.
- A stronger reward/progress moment after mini-games.
- A “short round” option if 20 questions feels too long later.
- Better exposed region editor for future classroom changes.

## Verification Checklist For Next Agent

Run:

```bash
node --check app.js
```

Then browser-test:

- Midwest -> Play: confirm `Question 1 of 20`.
- Midwest -> Play: advance to Q8 and confirm Road Trip.
- Midwest -> Play: advance to Q12 and confirm Weird Neighbor Court.
- Midwest -> Find the State: advance to Q4 and confirm a mini-game.
- Capital Call-In with Madison/Pierre plays text and audio if sound is on.
- Correct-answer mnemonic overlay stays readable and `X` behaves correctly.
- Browser console has no errors.
