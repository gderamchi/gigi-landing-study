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
- invite-only beta gate that turns the landing-page email into a local invite before opening trust setup
- People OS context-machine loop that reasons over private context, trust, reputation, intent, and approval boundaries before prompting a connector
- trust setup workflow that connects simulated Calendar, Gmail, Contacts, and public-profile sources before agent actions unlock
- consent receipt workflow that grants, revokes, and exports local source permissions before Gmail, Calendar, Contacts, or profile context can power product actions
- approval queue that reviews, approves, blocks, and routes Gmail drafts, smart links, reputation signals, and double opt-in intro actions before anything leaves the local prototype
- data-rights workflow that exports local data, corrects enriched profile context, withdraws Gmail/AI consent, and queues local deletion requests
- voice-intake workflow that simulates a Gigi call, extracts intent, and activates a goal plan
- opportunity-move queue that detects hidden roles, rounds, cap-table edges, and hot decks before they become public
- proactive Radar workflow that surfaces a useful person before a direct search and routes the match into permissioned Access
- Social Capital Score reveal with name search, private graph signal, point unlock, and score breakdown
- dynamic Social Capital profile with built/network/reputation breakdown, intent-aware profile lenses, publish-to-graph state, and private signals
- close-circle signal writing with reciprocal reputation requests and a living social-capital feed
- reference-check workflow that ranks real vouch paths before requesting gated reputation proof
- context engine for reviewing calendar, project, mention, and connector signals before they power recommendations
- pre-meeting briefings with opener, common ground, pitch angle, smart questions, and private DM delivery
- profile-dossier workflow that looks up a person, surfaces common ground, opener, angle, and privacy boundary, then sends the result into Briefs
- goal-oriented networking agent that turns a project objective into ranked warm paths
- incoming network asks that turn "do you know someone?" into a scoped shortlist, private link, and intro queue
- network search with filters for fundraising, hiring, and sales
- person detail view with trust path, context, and "Ask Gigi" response
- relationship-strength workflow that scores whether a real connector can safely carry a scoped ask
- reconnect workflow that plans the right revival angle for a known contact and queues a local DM draft
- permissioned-access workflow where agents check a route, run a requester-connector-recipient handshake, preserve private context, and queue a double opt-in intro
- warm-intro composer with private context, draft, save, and approve states
- warm-intro email workflow that generates Gmail-style drafts, checks consent boundaries, and sends only to the local intro queue
- smart network lists with shareable private-link preview and recipient lens behavior
- DM delivery flow that turns a text ask into a Gigi smart-link card and local message preview
- professional match reports with preloaded research, fit scores, compliments, and double opt-in intro handling
- connector nudges that detect fresh meeting context and queue approved double opt-in intros locally
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
