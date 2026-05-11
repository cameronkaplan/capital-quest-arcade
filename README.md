# Capital Quest Arcade

A static, map-first U.S. states and capitals arcade game for classroom-style region practice.

## Play locally

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 5174
```

Then visit `http://localhost:5174/`.

## Notes

- The game is plain HTML/CSS/JavaScript.
- Region packs are editable in `app.js`.
- Map geometry comes from Census cartographic boundary data in `data/states.geojson`.
- Audio clips live in `assets/audio/`.
