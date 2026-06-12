# Gigi Landing Study

A close, original implementation study of the public `gigi.co` landing page.

This repo intentionally does not store the original site's proprietary assets,
custom font files, investor-logo artwork, or Unicorn Studio scene. For visual
fidelity, the page loads the same public remote resources by URL. Do not deploy
this as a different brand or product without permission from the rights holders.

## Run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Visual QA

Start the dev server, then run:

```bash
npm run capture
npm run compare
```

The scripts save desktop and mobile screenshots plus diff images under
`outputs/`.
