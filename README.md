# Gigi Landing + Product Study

A close, original implementation study of the public `gigi.co` landing page and
the publicly described Gigi product flows.

This repo intentionally does not store the original site's proprietary assets,
custom font files, investor-logo artwork, or Unicorn Studio scene. For visual
fidelity, the page loads the same public remote resources by URL. Do not deploy
this as a different brand or product without permission from the rights holders.

The product experience is a local functional prototype based on public sources:
Gigi's landing page, Terms, press coverage, and public social/profile snippets.
Because the live product is invite-only, Gmail and Calendar are simulated with
sample data and no external account connection or message sending occurs.

## Run

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

To open the product prototype directly:

```text
http://127.0.0.1:5173/?app=1
```

You can also submit any email on the landing page to enter the product flow.

## Product Prototype

Implemented flows:

- private-circle feed with meeting activity and Social Capital claims
- Social Capital profile with built/network/reputation breakdown and private signals
- goal-oriented networking agent that turns a project objective into ranked warm paths
- incoming network asks that turn "do you know someone?" into a scoped shortlist, private link, and intro queue
- network search with filters for fundraising, hiring, and sales
- person detail view with trust path, context, and "Ask Gigi" response
- warm-intro composer with private context, draft, save, and approve states
- smart network lists with shareable private-link preview and recipient lens behavior
- `/share/:slug` private-link recipient view with gated access, dynamic profiles, and intro requests
- local Calendar/Gmail connected-state toggles

## Visual QA

Start the dev server, then run:

```bash
npm run capture
npm run compare
```

The scripts save desktop and mobile screenshots plus diff images under
`outputs/`.
