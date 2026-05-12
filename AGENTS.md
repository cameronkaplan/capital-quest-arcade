# Capital Quest Arcade Agent Guide

## Project Purpose

Capital Quest Arcade is a static HTML/CSS/JavaScript game that helps a 4th grade student practice U.S. states and capitals. It should feel more like an arcade game than a worksheet: map-first, funny, forgiving, and varied enough that repeated practice stays engaging.

The primary learner has been practicing classroom region sets. The current first-screen region choices are:

- West
- Midwest
- Southeast
- Northeast
- All

The game uses Gimkit links only as reference for region groupings. Gameplay should remain original.

## Core Experience

The default region action is `Play`, which starts Boss Round. Training modes are also available:

- Find the State
- Capital Beacon
- Capital Choice
- Type Dash
- Weak Spots

All modes currently run 20 questions. Mini-games/funny breaks are scheduled every 4 questions, including in training modes, so Find the State still gets arcade interruptions.

The learner has dyslexia, so typed answers should be forgiving. Preserve fuzzy spelling tolerance, close-answer correction, and gentle prompts. Avoid harsh failure states.

## Current Gameplay Rules

- Correct normal answers show a map overlay with praise, mnemonic, and fact.
- Correct-answer overlays stay up long enough to read and can be dismissed with `X`.
- Wrong capital answers show the mnemonic but avoid giving away the fact.
- Wrong state answers show a state-shape/map memory reminder when one exists.
- Weak Spots are stored in `localStorage`.
- Progress, best streak, sound preference, and region edits are stored locally.

## Mini-Games And Breaks

Boss Round uses this cadence:

- Q4: Capital Call-In
- Q8: Road Trip
- Q12: Weird Neighbor Court
- Q16: Capital Call-In
- Q20: bonus mini-game

Training modes use this cadence:

- Q4: bonus mini-game
- Q8: Capital Call-In
- Q12: Road Trip
- Q16: Weird Neighbor Court
- Q20: Memory Break

Mini-game types currently include:

- `Capital Call-In`: audio/text caller gives a capital clue and asks for the state.
- `Borderline Hotline`: neighbor/border clue with a fake phone-call presentation.
- `Road Trip`: drive/click-route across the map from one state to another.
- `Weird Neighbor Court`: court-show style neighbor/state relationship quiz.
- `Square-Off`: real state shapes for confusing rectangular or similar states.
- `Memory Break`: full-screen mnemonic panel using real map shapes where possible.

## Important Content

Known audio files in `assets/audio/` include:

- `capital-madison-wisconsin.mp3`
- `capital-piere-south-dakota.mp3`
- `capital-cheyanne-wyoming.mp3`
- `hotline-al-ms.mp3`
- `hotline-tx-nm-az.mp3`
- `hotline_nh-vt.mp3`
- `montana-idaho.mp3`
- `weird-neighbor-court-stinger.mp3`
- `nice-try.mp3`
- `bonus-unlokced.mp3`

Note existing filename spellings before changing references. Some are intentionally misspelled because the local files are named that way.

## Code Structure

- `index.html`: shell markup and app containers.
- `styles.css`: all layout, arcade visual styling, responsive behavior.
- `app.js`: game data, question generation, map rendering, input handling, mini-games, localStorage.
- `data/states.geojson`: state geometry used for the clickable map and shape visuals.
- `assets/audio/`: user-generated audio clips.
- `audio-scripts.md`: scripts/ideas for future audio generation.

## Development Workflow

This is a static app. For local testing, run:

```bash
python3 -m http.server 5173
```

Then open:

```text
http://localhost:5173/
```

Always run at least:

```bash
node --check app.js
```

After gameplay changes, verify in the browser. In particular, check:

- first screen still shows five region choices
- selected mode starts at `Question 1 of 20`
- Find the State gets a mini-game on question 4
- Boss Round gets Road Trip around question 8 and Weird Neighbor Court around question 12
- capital audio callers still render as Capital Call-In
- typed answers still accept close spellings
- browser console has no errors

## Git And Deployment

Repository:

```text
https://github.com/cameronkaplan/capital-quest-arcade
```

Branches:

- `main`: source branch for development.
- `gh-pages`: static deployed branch.

When gameplay changes should be visible on the shared site, update both branches. The prior workflow has been:

```bash
git add ...
git commit -m "..."
git push
git switch gh-pages
git cherry-pick <commit>
git push
git switch main
```

SSH pushing has used:

```bash
GIT_SSH_COMMAND='ssh -F /dev/null -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new' git push
```

This avoids a bad global SSH config line on the machine.

## Style Guidance

- Keep the first screen focused on playing, not explanation.
- Keep copy kid-friendly and funny, but avoid jokes that obscure the learning target.
- Prefer real map shapes over abstract blocks for memory tricks.
- Do not label state names directly on the playable map.
- Avoid making map questions too easy by over-highlighting the answer.
- Use direct, readable UI text. Do not add marketing taglines.
- Preserve the arcade/90s-inspired flavor without making it visually noisy.

## Current Open Work

- Improve odds/guarantees for specific new audio callers if the user wants Madison/Pierre every round rather than only prioritized Capital Call-In slots.
- Add more Northeast/Southeast-specific mini-game cases before those regions become the class focus.
- Make Road Trip mouse/touch handling feel smoother and more obvious on first use.
- Add a parent/debug mode to preview specific mini-games without playing through a round.
- Add a lightweight automated gameplay smoke test for scheduled special slots.
- Consider a small “region editor” polish pass if the class region lists change again.
