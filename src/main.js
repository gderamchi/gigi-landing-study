import "./styles.css";

const root = document.documentElement;
const body = document.body;
const productApp = document.querySelector(".product-app");
const shareApp = document.querySelector(".share-app");

const people = [
  {
    id: "adrian",
    name: "Adrian Vega",
    role: "Founder, Vega Robotics",
    location: "San Francisco",
    intent: "raising a seed round with robotics and AI infra investors",
    tags: ["AI founder", "SF", "robotics", "raised Tier 1", "fundraising"],
    connector: "Clara Gold",
    trust: 92,
    capital: 15,
    lastSignal: "Met with Clara yesterday",
    path: "You -> Clara Gold -> Adrian Vega",
    useCase: "fundraising",
    meetings: 3,
    projects: ["robotics infra", "seed round", "SF founder dinners"],
  },
  {
    id: "maya",
    name: "Maya Chen",
    role: "Partner, Northstar Ventures",
    location: "New York",
    intent: "meeting AI-native productivity founders before Series A",
    tags: ["VC", "AI", "seed", "warm intro", "fundraising"],
    connector: "Nina Patel",
    trust: 87,
    capital: 12,
    lastSignal: "Nina had a partner meeting with Maya on Tuesday",
    path: "You -> Nina Patel -> Maya Chen",
    useCase: "fundraising",
    meetings: 2,
    projects: ["AI productivity", "seed investing", "founder references"],
  },
  {
    id: "lucas",
    name: "Lucas Moretti",
    role: "Growth operator, ex-Rappi",
    location: "Mexico City",
    intent: "helping marketplace teams scale city launches",
    tags: ["growth", "ops", "LATAM", "hiring", "marketplaces"],
    connector: "Clara Gold",
    trust: 81,
    capital: 9,
    lastSignal: "Shared a dinner table with Clara last week",
    path: "You -> Clara Gold -> Lucas Moretti",
    useCase: "hiring",
    meetings: 4,
    projects: ["marketplace launches", "growth ops", "LATAM hiring"],
  },
  {
    id: "priya",
    name: "Priya Raman",
    role: "Design systems lead",
    location: "San Francisco",
    intent: "advising AI teams on trust-heavy product surfaces",
    tags: ["design", "AI", "trust", "hiring", "OpenAI"],
    connector: "Maxime Durand",
    trust: 78,
    capital: 7,
    lastSignal: "Maxime worked with Priya on a launch review",
    path: "You -> Maxime Durand -> Priya Raman",
    useCase: "hiring",
    meetings: 2,
    projects: ["trust surfaces", "design systems", "AI product review"],
  },
  {
    id: "david",
    name: "David Kim",
    role: "Host, private founder dinners",
    location: "San Francisco",
    intent: "curating dinners for technical founders and investors",
    tags: ["events", "dinner", "founders", "sales", "community"],
    connector: "Clara Gold",
    trust: 84,
    capital: 8,
    lastSignal: "Clara is building a dinner list with David",
    path: "You -> Clara Gold -> David Kim",
    useCase: "sales",
    meetings: 5,
    projects: ["private dinners", "founder community", "sales intros"],
  },
  {
    id: "sofia",
    name: "Sofia Alvarez",
    role: "Founder, Atlas Talent",
    location: "Paris",
    intent: "introducing engineering leads to senior AI recruiters",
    tags: ["recruiting", "AI", "Europe", "hiring", "talent"],
    connector: "Amelie Laurent",
    trust: 76,
    capital: 6,
    lastSignal: "Amelie met Sofia twice this month",
    path: "You -> Amelie Laurent -> Sofia Alvarez",
    useCase: "hiring",
    meetings: 2,
    projects: ["AI recruiting", "Europe talent", "engineering leads"],
  },
];

const smartLists = [
  {
    title: "AI Founders in SF who raised with Tier 1 VCs",
    creator: "Clara Gold",
    count: 18,
    people: ["adrian", "maya", "priya"],
    context: "Share with a founder who needs fundraising references.",
    colors: ["#7d43ff", "#ff6136"],
  },
  {
    title: "VCs I like and I can intro",
    creator: "Clara Gold",
    count: 11,
    people: ["maya", "david", "adrian"],
    context: "Private notes visible only after the link recipient signs in.",
    colors: ["#d35bff", "#462cff"],
  },
  {
    title: "Cool kids for David's dinner",
    creator: "Clara Gold",
    count: 24,
    people: ["david", "priya", "lucas"],
    context: "A curated circle for one offline dinner.",
    colors: ["#1dbb8f", "#0d6659"],
  },
  {
    title: "Ex-Rappi Growth / Ops people",
    creator: "Clara Gold",
    count: 9,
    people: ["lucas", "sofia", "adrian"],
    context: "Operators who can help launch cities and marketplaces.",
    colors: ["#f0487b", "#491d60"],
  },
  {
    title: "Seed angels and founder-friendly VCs",
    creator: "Gigi",
    count: 14,
    people: ["maya", "adrian", "david"],
    context: "Built from an incoming ask and filtered to paths you can actually share.",
    colors: ["#b5ff4f", "#254f32"],
  },
];

const goals = [
  {
    id: "raise-seed",
    title: "Raise a seed round",
    brief: "I am raising a seed round for an AI infrastructure company and need warm investor paths in San Francisco.",
    useCase: "fundraising",
    people: ["adrian", "maya", "priya"],
    listIndex: 0,
    signal: "Clara and Nina both have live investor context this week.",
    project: "AI infra seed round",
    nextStep: "Ask Clara to validate the fundraising angle before requesting investor intros.",
  },
  {
    id: "hire-ai",
    title: "Hire senior AI operators",
    brief: "I need trusted operators who can help us hire senior AI engineers and product leads.",
    useCase: "hiring",
    people: ["lucas", "priya", "sofia"],
    listIndex: 3,
    signal: "Three recent meetings mention AI hiring, launch operations, or trusted design leads.",
    project: "Founding team buildout",
    nextStep: "Start with Lucas for marketplace launch context, then ask Priya for product trust references.",
  },
  {
    id: "dinner",
    title: "Build a founder dinner",
    brief: "I want a private founder dinner list with high-trust technical founders and investors in SF.",
    useCase: "sales",
    people: ["david", "adrian", "maya"],
    listIndex: 2,
    signal: "David is already curating dinners and Clara has two direct founder signals.",
    project: "Private circle dinner",
    nextStep: "Share the dinner smart link first, then request opt-in intros for the three strongest paths.",
  },
];

const socialSignals = [
  {
    id: "shipped",
    pillar: "Built",
    title: "Shipped AI infra demo",
    source: "Clara Gold",
    text: "Clara vouched that you turned a fuzzy infra idea into a live product demo in one weekend.",
    capital: 18,
    status: "Pending",
  },
  {
    id: "trusted",
    pillar: "Trusted",
    title: "Warm investor reference",
    source: "Nina Patel",
    text: "Nina said she would take a fundraising intro from you because your context is always precise.",
    capital: 12,
    status: "Live",
  },
  {
    id: "room",
    pillar: "Room",
    title: "Founder dinner signal",
    source: "David Kim",
    text: "David added you to a private dinner shortlist for technical founders and seed investors.",
    capital: 8,
    status: "Private",
  },
];

const signalPillars = [
  {
    id: "Built",
    label: "Built",
    prompt: "Proof they can deliver, ship, or execute under pressure.",
  },
  {
    id: "Network",
    label: "Network",
    prompt: "Who they know, who shows up, and which rooms they can open.",
  },
  {
    id: "Reputation",
    label: "Reputation",
    prompt: "What trusted people say when they are not performing publicly.",
  },
];

const signalPrivacyModes = [
  {
    id: "Close circle",
    label: "Close circle",
    detail: "Visible to trusted mutuals when it helps an ask.",
  },
  {
    id: "Intro-gated",
    label: "Intro-gated",
    detail: "Only shown when an intro is approved.",
  },
  {
    id: "Private note",
    label: "Private note",
    detail: "Kept as context for your own agent.",
  },
];

const circleSignals = [
  {
    id: "signal-clara-built",
    direction: "received",
    actor: "Clara Gold",
    subject: "You",
    pillar: "Built",
    title: "Shipped under ambiguity",
    text: "Clara wrote that you turn loose product context into something people can try quickly.",
    privacy: "Close circle",
    score: 18,
    time: "2h ago",
  },
  {
    id: "signal-nina-reputation",
    direction: "received",
    actor: "Nina Patel",
    subject: "You",
    pillar: "Reputation",
    title: "Precise fundraising context",
    text: "Nina said your asks are specific enough that she is comfortable opening investor paths.",
    privacy: "Intro-gated",
    score: 12,
    time: "Yesterday",
  },
  {
    id: "signal-you-priya",
    direction: "written",
    actor: "You",
    subject: "Priya Raman",
    personId: "priya",
    pillar: "Reputation",
    title: "Trust-heavy product taste",
    text: "Priya made the launch review sharper by catching the parts that would make users hesitate.",
    privacy: "Close circle",
    score: 7,
    time: "Today",
  },
];

const contextSignals = [
  {
    id: "calendar-maya",
    source: "Calendar",
    personId: "maya",
    label: "Recurring investor meeting",
    text: "Nina met Maya twice in the last 30 days and has a live fundraising path for this week.",
    strength: 94,
    impact: 10,
    privacy: "Private until intro approval",
    status: "Review",
  },
  {
    id: "project-adrian",
    source: "Project",
    personId: "adrian",
    label: "AI infra project overlap",
    text: "Your current seed goal, Adrian's robotics infra work, and Clara's meeting history all point to a high-fit intro.",
    strength: 89,
    impact: 8,
    privacy: "Visible in scoped shortlist",
    status: "Live",
  },
  {
    id: "mention-david",
    source: "Mention",
    personId: "david",
    label: "Private dinner signal",
    text: "David's founder dinner list overlaps with technical founders and seed investors you are trying to meet.",
    strength: 82,
    impact: 6,
    privacy: "Private note",
    status: "Review",
  },
  {
    id: "connection-priya",
    source: "Connection",
    personId: "priya",
    label: "Trusted product reference",
    text: "Maxime worked with Priya on a trust-heavy AI product review, which supports hiring and diligence asks.",
    strength: 78,
    impact: 5,
    privacy: "Connector gated",
    status: "Review",
  },
];

const networkAsks = [
  {
    id: "seed-angels",
    from: "Claire Moreau",
    role: "Founder, Lumen AI",
    ask: "Do you know seed angels or founder-friendly VCs for an AI infra round in SF?",
    useCase: "fundraising",
    people: ["maya", "adrian", "david"],
    listIndex: 4,
    context: "Claire needs a warm investor path, not a public blast. Gigi ranks the shortlist by recent meetings, trusted connectors, and relevance to AI infra.",
    status: "Ready to share",
  },
  {
    id: "ai-operator",
    from: "Julien Renard",
    role: "Chief of Staff, Northstar",
    ask: "Do you know senior AI operators who can help a marketplace team hire founding engineers?",
    useCase: "hiring",
    people: ["lucas", "priya", "sofia"],
    listIndex: 3,
    context: "This ask maps to hiring and launch context. Gigi keeps the private notes gated until Julien opens the trusted link.",
    status: "Needs approval",
  },
  {
    id: "dinner-host",
    from: "David Kim",
    role: "Founder dinner host",
    ask: "Who should be on a private SF dinner list for technical founders and seed investors?",
    useCase: "sales",
    people: ["david", "adrian", "maya"],
    listIndex: 2,
    context: "Gigi turns the dinner ask into a shareable circle with opt-in intros, so David sees dynamic profiles through his own lens.",
    status: "Draft",
  },
];

const state = {
  view: "feed",
  query: "AI founders in SF who raised with Tier 1 VCs",
  filter: "all",
  selectedPersonId: "adrian",
  answer: "",
  activeGoalId: "raise-seed",
  activeAskId: "seed-angels",
  askBrief: "Do you know seed angels or founder-friendly VCs for an AI infra round in SF?",
  sharedAsks: [],
  goalBrief:
    "I am raising a seed round for an AI infrastructure company and need warm investor paths in San Francisco.",
  connected: {
    calendar: false,
    gmail: false,
  },
  previewListIndex: 0,
  previewLens: "founder",
  shareListIndex: 0,
  shareLens: "founder",
  shareUnlocked: false,
  shareRequested: [],
  graphRefreshes: 0,
  socialCapital: 248,
  profileApprovals: [],
  signalRecipientId: "priya",
  signalPillar: "Reputation",
  signalPrivacy: "Close circle",
  signalDraft: "Priya made the launch review sharper by catching the parts that would make users hesitate.",
  circleSignals: circleSignals.map((signal) => ({ ...signal })),
  contextApprovals: ["project-adrian"],
  contextHidden: [],
  claimApproved: false,
  intros: [
    {
      target: "Adrian Vega",
      connector: "Clara Gold",
      reason: "Fundraising context",
      status: "Draft ready",
    },
    {
      target: "Maya Chen",
      connector: "Nina Patel",
      reason: "Seed investor fit",
      status: "Waiting opt-in",
    },
    {
      target: "Priya Raman",
      connector: "Maxime Durand",
      reason: "Design systems hiring",
      status: "Approved",
    },
  ],
  feed: [
    {
      person: "Adrian Vega",
      actor: "Clara Gold",
      text: "completed a meeting with Adrian yesterday. Gigi found a strong fundraising path for your AI founder list.",
      time: "18 min ago",
      capital: 15,
    },
    {
      person: "Maya Chen",
      actor: "Nina Patel",
      text: "met Maya twice in the last 30 days. This is a high-trust path for seed fundraising intros.",
      time: "1 hr ago",
      capital: 12,
    },
    {
      person: "David Kim",
      actor: "Clara Gold",
      text: "added private context to a dinner list. Recipients will see dynamic profiles through their own lens.",
      time: "Today",
      capital: 8,
    },
  ],
};

function updatePlaceholder() {
  const input = document.querySelector(".beta-form input");
  if (!input) return;
  input.placeholder =
    window.innerWidth < 640 ? input.dataset.mobilePlaceholder : input.dataset.desktopPlaceholder;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function copyText(value) {
  try {
    await navigator.clipboard?.writeText(value);
    root.dataset.copyUnavailable = "false";
  } catch {
    root.dataset.copyUnavailable = "true";
  }
}

function personById(id) {
  return people.find((person) => person.id === id) ?? people[0];
}

function goalById(id) {
  return goals.find((goal) => goal.id === id) ?? goals[0];
}

function askById(id) {
  return networkAsks.find((ask) => ask.id === id) ?? networkAsks[0];
}

function listSlug(list) {
  return list.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function listIndexBySlug(slug) {
  const normalized = String(slug ?? "").replace(/\/$/, "");
  const index = smartLists.findIndex((list) => listSlug(list) === normalized);
  return index >= 0 ? index : 0;
}

function shareUrl(index) {
  const list = smartLists[index] ?? smartLists[0];
  return `${window.location.origin}/share/${listSlug(list)}`;
}

function avatar(name) {
  return `<span class="avatar" aria-hidden="true">${escapeHtml(initials(name))}</span>`;
}

function openProduct(view = state.view) {
  if (!productApp) return;
  if (shareApp) shareApp.hidden = true;
  productApp.hidden = false;
  delete body.dataset.shareActive;
  body.dataset.productActive = "true";
  setProductView(view);
  if (!new URLSearchParams(window.location.search).has("app")) {
    window.history.replaceState(null, "", "/?app=1");
  }
}

function closeProduct() {
  if (!productApp) return;
  productApp.hidden = true;
  delete body.dataset.productActive;
  window.history.replaceState(null, "", "/");
}

function openSharedList(index = state.shareListIndex, shouldPushState = true) {
  if (!shareApp) return;
  state.shareListIndex = Number.isFinite(index) ? index : 0;
  state.shareLens = state.shareLens || "founder";
  if (productApp) productApp.hidden = true;
  shareApp.hidden = false;
  delete body.dataset.productActive;
  body.dataset.shareActive = "true";
  document.querySelector("[data-link-preview-modal]")?.setAttribute("hidden", "");
  renderShareView();
  if (shouldPushState) {
    window.history.replaceState(null, "", `/share/${listSlug(smartLists[state.shareListIndex])}`);
  }
}

function closeShare() {
  if (!shareApp) return;
  shareApp.hidden = true;
  delete body.dataset.shareActive;
  window.history.replaceState(null, "", "/");
}

function setProductView(view) {
  state.view = view;
  document.querySelectorAll("[data-product-screen]").forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.productScreen === view);
  });
  document.querySelectorAll(".product-nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.productView === view);
  });
  const title = document.querySelector("[data-product-title]");
  if (title) {
    const titles = {
      feed: "Private circle",
      profile: "Social Capital",
      signals: "Close circle signals",
      context: "Context engine",
      goals: "Goals",
      asks: "Network asks",
      search: "Network search",
      graph: "Trust graph",
      lists: "Smart links",
      intros: "Warm introductions",
    };
    title.textContent = titles[view] ?? "Private circle";
  }
  renderAll();
}

function filteredPeople() {
  const query = state.query.toLowerCase();
  const tokens = query.split(/\W+/).filter(Boolean);
  return people.filter((person) => {
    const haystack = [
      person.name,
      person.role,
      person.location,
      person.intent,
      person.connector,
      person.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    const matchesQuery = tokens.length === 0 || tokens.some((token) => haystack.includes(token));
    const matchesFilter = state.filter === "all" || person.useCase === state.filter;
    return matchesQuery && matchesFilter;
  });
}

function renderProfile() {
  const score = document.querySelector("[data-profile-score]");
  const breakdown = document.querySelector("[data-profile-breakdown]");
  const signals = document.querySelector("[data-profile-signals]");
  if (!score || !breakdown || !signals) return;

  score.textContent = String(state.socialCapital);

  const pillars = [
    {
      label: "Built",
      value: 92,
      detail: "Projects, launches, and proof you can deliver.",
    },
    {
      label: "Network",
      value: 81,
      detail: "People who actually show up, not follower count.",
    },
    {
      label: "Reputation",
      value: 88,
      detail: "Private trust signals from people in the room.",
    },
  ];

  breakdown.innerHTML = pillars
    .map(
      (pillar) => `
        <article>
          <strong>${pillar.value}</strong>
          <span>${escapeHtml(pillar.label)}</span>
          <p>${escapeHtml(pillar.detail)}</p>
        </article>
      `,
    )
    .join("");

  signals.innerHTML = socialSignals
    .map((signal) => {
      const approved = state.profileApprovals.includes(signal.id) || signal.status === "Live";
      return `
        <article class="profile-signal-row ${approved ? "is-live" : ""}">
          <div>
            <span>${escapeHtml(signal.pillar)}</span>
            <h4>${escapeHtml(signal.title)}</h4>
            <p>${escapeHtml(signal.text)}</p>
            <small>via ${escapeHtml(signal.source)} · +${signal.capital}</small>
          </div>
          <button type="button" data-approve-signal="${signal.id}" ${approved ? "disabled" : ""}>
            ${approved ? "Live" : "Approve"}
          </button>
        </article>
      `;
    })
    .join("");
}

function renderSignals() {
  const composer = document.querySelector("[data-signal-composer]");
  const insights = document.querySelector("[data-signal-insights]");
  const stream = document.querySelector("[data-signal-stream]");
  if (!composer || !insights || !stream) return;

  const selectedPerson = personById(state.signalRecipientId);
  const pillar = signalPillars.find((item) => item.id === state.signalPillar) ?? signalPillars[0];
  const privacy =
    signalPrivacyModes.find((item) => item.id === state.signalPrivacy) ?? signalPrivacyModes[0];
  const receivedSignals = state.circleSignals.filter((signal) => signal.direction === "received");
  const writtenSignals = state.circleSignals.filter((signal) => signal.direction === "written");
  const closeCircleCount = state.circleSignals.filter((signal) => signal.privacy === "Close circle").length;

  composer.innerHTML = `
    <span class="product-kicker">Write a signal</span>
    <h3>Make private proof useful for the people you trust.</h3>
    <div class="signal-recipient-grid">
      ${people
        .map(
          (person) => `
            <button class="signal-person-button ${person.id === selectedPerson.id ? "is-selected" : ""}" type="button" data-select-signal-person="${person.id}">
              ${avatar(person.name)}
              <span>
                <strong>${escapeHtml(person.name)}</strong>
                <small>${escapeHtml(person.connector)} · ${person.trust}% trust</small>
              </span>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="signal-control-grid">
      <div class="signal-option-group">
        <span>Signal type</span>
        <div>
          ${signalPillars
            .map(
              (item) => `
                <button class="signal-option-button ${item.id === state.signalPillar ? "is-selected" : ""}" type="button" data-select-signal-pillar="${item.id}">
                  ${escapeHtml(item.label)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="signal-option-group">
        <span>Visibility</span>
        <div>
          ${signalPrivacyModes
            .map(
              (item) => `
                <button class="signal-option-button ${item.id === state.signalPrivacy ? "is-selected" : ""}" type="button" data-select-signal-privacy="${item.id}">
                  ${escapeHtml(item.label)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
    <label class="signal-draft-label">
      Private context
      <textarea data-signal-draft placeholder="Write what this person proved in private.">${escapeHtml(state.signalDraft)}</textarea>
    </label>
    <div class="signal-preview">
      <span>${escapeHtml(pillar.label)} · ${escapeHtml(privacy.label)}</span>
      <strong>${escapeHtml(selectedPerson.name)}</strong>
      <p>${escapeHtml(pillar.prompt)} ${escapeHtml(privacy.detail)}</p>
    </div>
    <button class="signal-primary-action" type="button" data-publish-signal>${escapeHtml(privacy.label === "Close circle" ? "Publish to close circle" : `Publish ${privacy.label.toLowerCase()} signal`)}</button>
  `;

  insights.innerHTML = `
    <span class="product-kicker">Social proof loop</span>
    <h3>Signals compound into reputation.</h3>
    <p>Write proof about people you actually know. Gigi keeps it scoped, then uses approved context when an ask or intro needs it.</p>
    <div class="goal-score">
      <div><strong>${receivedSignals.length}</strong><span>about you</span></div>
      <div><strong>${writtenSignals.length}</strong><span>written</span></div>
      <div><strong>${closeCircleCount}</strong><span>close circle</span></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(selectedPerson.path)}</strong>
      <p>${escapeHtml(selectedPerson.lastSignal)}. A reciprocal signal request can ask ${escapeHtml(selectedPerson.name)} to validate the relationship.</p>
    </div>
    <button type="button" data-request-reciprocal>Ask for reciprocal signal</button>
  `;

  stream.innerHTML = `
    <div class="share-results-heading">
      <span>Living feed of social capital</span>
      <strong>${state.circleSignals.length} signals</strong>
    </div>
    <div class="signal-stream-list">
      ${state.circleSignals
        .map(
          (signal) => `
            <article class="signal-stream-row is-${escapeHtml(signal.direction)}">
              <div class="signal-stream-meta">
                <span>${escapeHtml(signal.pillar)}</span>
                <strong>+${signal.score}</strong>
              </div>
              <div>
                <h4>${escapeHtml(signal.title)}</h4>
                <p>${escapeHtml(signal.text)}</p>
                <small>${escapeHtml(signal.actor)} -> ${escapeHtml(signal.subject)} · ${escapeHtml(signal.privacy)} · ${escapeHtml(signal.time)}</small>
              </div>
              <span class="signal-direction">${signal.direction === "received" ? "About you" : "Written"}</span>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function contextSignalState(signal) {
  if (state.contextHidden.includes(signal.id)) return "Hidden";
  if (state.contextApprovals.includes(signal.id) || signal.status === "Live") return "Live";
  return "Review";
}

function renderContext() {
  const sources = document.querySelector("[data-context-sources]");
  const briefing = document.querySelector("[data-context-briefing]");
  const review = document.querySelector("[data-context-review]");
  if (!sources || !briefing || !review) return;

  const liveSignals = contextSignals.filter((signal) => contextSignalState(signal) === "Live");
  const reviewSignals = contextSignals.filter((signal) => contextSignalState(signal) === "Review");
  const hiddenSignals = contextSignals.filter((signal) => contextSignalState(signal) === "Hidden");
  const nextPerson = personById("maya");
  const sourceStats = [
    {
      label: "Calendar",
      value: state.connected.calendar ? "Live" : "Pending",
      detail: state.connected.calendar
        ? "34 meetings reviewed across recurring relationships."
        : "Connect to ground Gigi in people you actually meet.",
    },
    {
      label: "Projects",
      value: "Live",
      detail: "3 active goals and project intents mapped to warm paths.",
    },
    {
      label: "Mentions",
      value: `${contextSignals.filter((signal) => signal.source === "Mention").length}`,
      detail: "Online and private mentions stay gated until approved.",
    },
    {
      label: "Connectors",
      value: `${people.length}`,
      detail: "Relationship strength is ranked before any intro is drafted.",
    },
  ];

  sources.innerHTML = sourceStats
    .map(
      (source) => `
        <article>
          <span>${escapeHtml(source.label)}</span>
          <strong>${escapeHtml(source.value)}</strong>
          <p>${escapeHtml(source.detail)}</p>
        </article>
      `,
    )
    .join("");

  briefing.innerHTML = `
    <span class="product-kicker">Next meeting brief</span>
    <h3>Walk in like you already know the room.</h3>
    <p>Gigi turns approved context into a private briefing before the meeting. Nothing is shared until you approve the signal.</p>
    <div class="path-box">
      <strong>${escapeHtml(nextPerson.name)} · ${escapeHtml(nextPerson.role)}</strong>
      <p>${escapeHtml(nextPerson.lastSignal)}. Suggested angle: ask about AI-native productivity founders before Series A.</p>
    </div>
    <div class="goal-score">
      <div><strong>${liveSignals.length}</strong><span>live signals</span></div>
      <div><strong>${reviewSignals.length}</strong><span>to review</span></div>
      <div><strong>${hiddenSignals.length}</strong><span>hidden</span></div>
    </div>
  `;

  review.innerHTML = `
    <div class="share-results-heading">
      <span>Signal review</span>
      <strong>${reviewSignals.length} pending</strong>
    </div>
    <div class="context-signal-list">
      ${contextSignals
        .map((signal) => {
          const signalState = contextSignalState(signal);
          const person = personById(signal.personId);
          return `
            <article class="context-signal-row is-${signalState.toLowerCase()}">
              <div class="context-signal-source">
                <span>${escapeHtml(signal.source)}</span>
                <strong>${signal.strength}%</strong>
              </div>
              <div>
                <h4>${escapeHtml(signal.label)}</h4>
                <p>${escapeHtml(signal.text)}</p>
                <small>${escapeHtml(person.path)} · ${escapeHtml(signal.privacy)} · +${signal.impact}</small>
              </div>
              <div class="context-signal-actions">
                <span>${escapeHtml(signalState)}</span>
                <button type="button" data-approve-context="${signal.id}" ${signalState === "Live" ? "disabled" : ""}>Approve</button>
                <button type="button" data-hide-context="${signal.id}" ${signalState === "Hidden" ? "disabled" : ""}>Hide</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderGoals() {
  const list = document.querySelector("[data-goal-list]");
  const plan = document.querySelector("[data-goal-plan]");
  const brief = document.querySelector("[data-goal-brief]");
  if (!list || !plan) return;

  const goal = goalById(state.activeGoalId);
  const recommendedPeople = goal.people.map(personById);
  const smartList = smartLists[goal.listIndex] ?? smartLists[0];
  if (brief && brief.value !== state.goalBrief) {
    brief.value = state.goalBrief;
  }

  list.innerHTML = `
    <div class="goal-card-grid">
      ${goals
        .map(
          (item) => `
            <button class="goal-card ${item.id === state.activeGoalId ? "is-selected" : ""}" type="button" data-select-goal="${item.id}">
              <span>${escapeHtml(item.project)}</span>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.signal)}</p>
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="goal-recommendations">
      ${recommendedPeople
        .map(
          (person) => `
            <article>
              ${avatar(person.name)}
              <div>
                <h4>${escapeHtml(person.name)}</h4>
                <p>${escapeHtml(person.intent)}</p>
                <span>${escapeHtml(person.path)} · ${person.trust}% trust</span>
              </div>
              <button type="button" data-goal-intro="${person.id}">Intro</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  plan.innerHTML = `
    <span class="product-kicker">Gigi plan</span>
    <h3>${escapeHtml(goal.title)}</h3>
    <p>${escapeHtml(goal.signal)}</p>
    <div class="goal-score">
      <div><strong>${recommendedPeople.length}</strong><span>ranked paths</span></div>
      <div><strong>${recommendedPeople.reduce((sum, person) => sum + person.meetings, 0)}</strong><span>calendar signals</span></div>
      <div><strong>${Math.round(recommendedPeople.reduce((sum, person) => sum + person.trust, 0) / recommendedPeople.length)}%</strong><span>avg trust</span></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(smartList.title)}</strong>
      <p>${escapeHtml(goal.nextStep)}</p>
    </div>
    <div class="goal-actions">
      <button type="button" data-search-goal>Search this goal</button>
      <button type="button" data-share-goal-list>Build smart link</button>
      <button type="button" data-run-goal-intros>Request top intros</button>
    </div>
  `;
}

function renderAsks() {
  const inbox = document.querySelector("[data-ask-inbox]");
  const summary = document.querySelector("[data-ask-summary]");
  const shortlist = document.querySelector("[data-ask-shortlist]");
  const brief = document.querySelector("[data-ask-brief]");
  if (!inbox || !summary || !shortlist) return;

  const ask = askById(state.activeAskId);
  const rankedPeople = ask.people.map(personById);
  const shared = state.sharedAsks.includes(ask.id);
  if (brief && brief.value !== state.askBrief) {
    brief.value = state.askBrief;
  }

  inbox.innerHTML = networkAsks
    .map(
      (item) => `
        <button class="ask-inbox-item ${item.id === ask.id ? "is-selected" : ""}" type="button" data-select-ask="${item.id}">
          <span>${escapeHtml(item.from)}</span>
          <strong>${escapeHtml(item.ask)}</strong>
          <small>${escapeHtml(item.status)}</small>
        </button>
      `,
    )
    .join("");

  summary.innerHTML = `
    <span class="product-kicker">Gigi response</span>
    <h3>${escapeHtml(shared ? "Private link ready." : "Shortlist ready.")}</h3>
    <p>${escapeHtml(ask.context)}</p>
    <div class="goal-score">
      <div><strong>${rankedPeople.length}</strong><span>ranked profiles</span></div>
      <div><strong>${rankedPeople.reduce((sum, person) => sum + person.meetings, 0)}</strong><span>calendar signals</span></div>
      <div><strong>${Math.round(rankedPeople.reduce((sum, person) => sum + person.trust, 0) / rankedPeople.length)}%</strong><span>avg trust</span></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(smartLists[ask.listIndex]?.title ?? "Private shortlist")}</strong>
      <p>${shared ? "The recipient can open a gated link and request intros without seeing your whole graph." : "Share only this scoped circle, with private context still behind trusted access."}</p>
    </div>
    <div class="ask-actions">
      <button type="button" data-share-ask>${shared ? "Preview shared link" : "Share private link"}</button>
      <button type="button" data-request-ask-intros>Request warm intros</button>
    </div>
  `;

  shortlist.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(ask.role)}</span>
      <strong>${escapeHtml(ask.from)} asked</strong>
    </div>
    <div class="ask-shortlist-grid">
      ${rankedPeople
        .map(
          (person, index) => `
            <article class="ask-person-card">
              <div class="ask-rank">0${index + 1}</div>
              ${avatar(person.name)}
              <div>
                <h4>${escapeHtml(person.name)}</h4>
                <p>${escapeHtml(person.role)} · ${escapeHtml(person.location)}</p>
                <span>${escapeHtml(person.path)} · ${person.trust}% trust</span>
              </div>
              <div class="path-box">
                <strong>${escapeHtml(person.lastSignal)}</strong>
                <p>${escapeHtml(person.intent)}</p>
              </div>
              <button type="button" data-ask-intro="${person.id}">Intro</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderFeed() {
  const list = document.querySelector("[data-feed-list]");
  if (!list) return;
  list.innerHTML = state.feed
    .map(
      (item) => `
        <article class="feed-card">
          ${avatar(item.person)}
          <div>
            <h4>${escapeHtml(item.actor)}</h4>
            <time>${escapeHtml(item.time)}</time>
            <p>${escapeHtml(item.text)}</p>
          </div>
          <span class="capital-pill">+${item.capital}</span>
        </article>
      `,
    )
    .join("");
}

function renderPeople() {
  const results = document.querySelector("[data-person-results]");
  if (!results) return;
  document.querySelectorAll("[data-search-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.searchFilter === state.filter);
  });
  const matches = filteredPeople();
  if (!matches.some((person) => person.id === state.selectedPersonId)) {
    state.selectedPersonId = matches[0]?.id ?? people[0].id;
  }
  results.innerHTML =
    matches.length > 0
      ? matches
          .map(
            (person) => `
              <button class="person-card ${person.id === state.selectedPersonId ? "is-selected" : ""}" type="button" data-select-person="${person.id}">
                ${avatar(person.name)}
                <span>
                  <h4>${escapeHtml(person.name)}</h4>
                  <span>${escapeHtml(person.role)} · ${escapeHtml(person.location)}</span>
                  <p>${escapeHtml(person.intent)}</p>
                </span>
                <strong class="trust-meter">${person.trust}%</strong>
              </button>
            `,
          )
          .join("")
      : `<div class="person-card"><span></span><span><h4>No warm path yet</h4><p>Try broadening the query or switching filters.</p></span></div>`;
  renderPersonDetail();
}

function renderPersonDetail() {
  const detail = document.querySelector("[data-person-detail]");
  if (!detail) return;
  const person = personById(state.selectedPersonId);
  const answer =
    state.answer ||
    `${person.name} is relevant because ${person.intent}. Your strongest path is ${person.path}, based on ${person.lastSignal.toLowerCase()}.`;
  detail.innerHTML = `
    <div class="person-detail-header">
      ${avatar(person.name)}
      <div>
        <h3>${escapeHtml(person.name)}</h3>
        <p>${escapeHtml(person.role)} · ${escapeHtml(person.location)}</p>
      </div>
    </div>
    <div class="tag-row">${person.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
    <div class="path-box">
      <strong>${escapeHtml(person.path)}</strong>
      <p>${escapeHtml(person.lastSignal)} · Trust strength ${person.trust}% · Social capital +${person.capital}</p>
    </div>
    <textarea data-gigi-question aria-label="Ask Gigi about ${escapeHtml(person.name)}">Why should I meet ${escapeHtml(person.name)}?</textarea>
    <p data-gigi-answer>${escapeHtml(answer)}</p>
    <div class="detail-actions">
      <button type="button" data-ask-gigi>Ask Gigi</button>
      <button type="button" data-request-intro="${person.id}">Request intro</button>
    </div>
  `;
}

function renderLists() {
  const container = document.querySelector("[data-smart-lists]");
  if (!container) return;
  container.innerHTML = smartLists
    .map((list, index) => {
      const featured = list.people.map(personById);
      return `
        <article class="smart-list-card" style="--list-a: ${list.colors[0]}; --list-b: ${list.colors[1]}">
          <span>created by ${escapeHtml(list.creator)} · ${list.count} people</span>
          <h4>${escapeHtml(list.title)}</h4>
          <p>${escapeHtml(list.context)}</p>
          <div class="mini-avatars">${featured.map((person) => avatar(person.name)).join("")}</div>
          <button type="button" data-preview-list="${index}">Preview private link</button>
        </article>
      `;
    })
    .join("");
}

function renderSourceHealth() {
  const container = document.querySelector("[data-source-health]");
  if (!container) return;
  const calendar = state.connected.calendar;
  const gmail = state.connected.gmail;
  container.innerHTML = `
    <span>Sources</span>
    <strong>${calendar ? "Calendar live" : "Calendar pending"}</strong>
    <p>${calendar ? "34 meetings reviewed. 12 recurring relationships found." : "Connect Calendar to ground recommendations in actual meetings."}</p>
    <strong>${gmail ? "Gmail drafts enabled" : "Gmail pending"}</strong>
    <p>${gmail ? "Drafts stay blocked until you approve send." : "Connect Gmail to draft intros with explicit approval."}</p>
  `;
}

function renderGraph() {
  const graph = document.querySelector("[data-trust-graph]");
  const detail = document.querySelector("[data-graph-detail]");
  if (!graph || !detail) return;
  const selected = personById(state.selectedPersonId);
  graph.innerHTML = `
    <div class="graph-orbit" aria-hidden="true"></div>
    <button class="graph-node graph-node-user" type="button" data-graph-person="self">
      <span>You</span>
      <small>Context</small>
    </button>
    ${people
      .map((person, index) => {
        const angle = (index / people.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 34;
        const y = 50 + Math.sin(angle) * 34;
        return `
          <button
            class="graph-node ${person.id === state.selectedPersonId ? "is-selected" : ""}"
            style="--x: ${x}%; --y: ${y}%;"
            type="button"
            data-graph-person="${person.id}"
          >
            <span>${escapeHtml(initials(person.name))}</span>
            <small>${person.trust}%</small>
          </button>
        `;
      })
      .join("")}
  `;
  detail.innerHTML = `
    <span class="product-kicker">Strongest path</span>
    <h3>${escapeHtml(selected.name)}</h3>
    <p>${escapeHtml(selected.role)} · ${escapeHtml(selected.location)}</p>
    <div class="path-box">
      <strong>${escapeHtml(selected.path)}</strong>
      <p>${escapeHtml(selected.lastSignal)}. ${selected.meetings} calendar signals and ${selected.projects.length} project signals support this path.</p>
    </div>
    <div class="graph-signal-grid">
      <div><span>Trust</span><strong>${selected.trust}%</strong></div>
      <div><span>Meetings</span><strong>${selected.meetings}</strong></div>
      <div><span>Capital</span><strong>+${selected.capital}</strong></div>
    </div>
    <div class="tag-row">${selected.projects.map((project) => `<span>${escapeHtml(project)}</span>`).join("")}</div>
    <button type="button" data-request-intro="${selected.id}">Request warm intro</button>
  `;
}

function renderLinkPreview() {
  const title = document.querySelector("[data-link-preview-title]");
  const body = document.querySelector("[data-link-preview-body]");
  if (!title || !body) return;
  const list = smartLists[state.previewListIndex] ?? smartLists[0];
  const listPeople = list.people.map(personById);
  title.textContent = list.title;
  const lensCopy = {
    founder: "Gigi prioritizes people who can help this founder raise, hire, or unlock a credible warm path.",
    investor: "Gigi highlights founder quality, mutual trust, and why this person is worth meeting now.",
    hiring: "Gigi surfaces operators and talent-adjacent context first, with private notes hidden until approved.",
  };
  body.innerHTML = `
    <p>${escapeHtml(lensCopy[state.previewLens])}</p>
    <div class="preview-people">
      ${listPeople
        .map(
          (person) => `
            <article>
              ${avatar(person.name)}
              <div>
                <h4>${escapeHtml(person.name)}</h4>
                <span>${escapeHtml(person.role)}</span>
                <p>${escapeHtml(person.path)} · ${person.trust}% trust</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
  document.querySelectorAll("[data-preview-lens]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.previewLens === state.previewLens);
  });
}

function renderShareView() {
  const hero = document.querySelector("[data-share-hero]");
  const unlock = document.querySelector("[data-share-unlock-card]");
  const results = document.querySelector("[data-share-results]");
  if (!hero || !unlock || !results) return;

  const list = smartLists[state.shareListIndex] ?? smartLists[0];
  const listPeople = list.people.map(personById);
  const lensCopy = {
    founder: {
      label: "Founder lens",
      headline: "People who can unlock this ask",
      detail: "Gigi ranks warm paths by intent, mutual trust, and recent calendar context.",
    },
    investor: {
      label: "Investor lens",
      headline: "Why these founders are worth attention",
      detail: "Gigi shows the signal behind each recommendation without exposing private notes.",
    },
    hiring: {
      label: "Hiring lens",
      headline: "Trusted operators and talent context",
      detail: "Gigi surfaces people who are vouched for by active relationships, not public followers.",
    },
  };
  const copy = lensCopy[state.shareLens] ?? lensCopy.founder;
  const visiblePeople = state.shareUnlocked ? listPeople : listPeople.slice(0, 2);

  hero.innerHTML = `
    <span class="share-pill">created by ${escapeHtml(list.creator)}</span>
    <h1>${escapeHtml(list.title)}</h1>
    <p>${escapeHtml(list.context)} ${escapeHtml(copy.detail)}</p>
    <div class="share-metrics" aria-label="Shared list metrics">
      <div><strong>${list.count}</strong><span>trusted profiles</span></div>
      <div><strong>${listPeople.length}</strong><span>warm paths previewed</span></div>
      <div><strong>${state.shareUnlocked ? "Live" : "Gated"}</strong><span>private access</span></div>
    </div>
  `;

  unlock.innerHTML = state.shareUnlocked
    ? `
      <span class="product-kicker">Trusted access unlocked</span>
      <h2>${escapeHtml(copy.headline)}</h2>
      <p>Calendar context is simulated locally. Private notes stay hidden until the recipient asks for an intro and the connector approves.</p>
      <button type="button" data-open-product-from-share>Open in Gigi</button>
    `
    : `
      <span class="product-kicker">Private link</span>
      <h2>Unlock trusted access with your context.</h2>
      <p>This list is shared as a private asset. Connect to reveal why each profile is relevant to your ask and request gated introductions.</p>
      <button type="button" data-unlock-share>Continue with Gmail</button>
    `;

  results.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(copy.label)}</span>
      <strong>${state.shareUnlocked ? "Dynamic profiles" : "Preview locked"}</strong>
    </div>
    <div class="share-person-grid ${state.shareUnlocked ? "" : "is-locked"}">
      ${visiblePeople
        .map((person) => {
          const requested = state.shareRequested.includes(person.id);
          return `
            <article class="share-person-card">
              <div class="share-person-art">
                ${avatar(person.name)}
                <span>${person.trust}%</span>
              </div>
              <div>
                <h3>${escapeHtml(state.shareUnlocked ? person.name : `${initials(person.name)} · hidden`)}</h3>
                <p>${escapeHtml(state.shareUnlocked ? `${person.role} · ${person.location}` : "Sign in to reveal the profile and private context.")}</p>
              </div>
              <div class="path-box">
                <strong>${escapeHtml(state.shareUnlocked ? person.path : "Warm path hidden")}</strong>
                <p>${escapeHtml(state.shareUnlocked ? `${person.lastSignal}. Intent: ${person.intent}.` : "Gigi only reveals relationship context after trusted access is unlocked.")}</p>
              </div>
              <div class="tag-row">${person.tags.slice(0, 4).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
              <button type="button" data-request-shared-intro="${person.id}" ${state.shareUnlocked ? "" : "disabled"}>
                ${requested ? "Intro requested" : "Request gated intro"}
              </button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  document.querySelectorAll("[data-share-lens]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.shareLens === state.shareLens);
  });
}

function renderIntros() {
  const board = document.querySelector("[data-intro-board]");
  if (!board) return;
  board.innerHTML = state.intros
    .map((intro, index) => {
      const needsApproval = intro.status === "Draft ready" || intro.status === "Waiting opt-in";
      return `
        <article class="intro-row">
          <div>
            <strong>${escapeHtml(intro.target)}</strong>
            <span>via ${escapeHtml(intro.connector)}</span>
          </div>
          <span>${escapeHtml(intro.reason)}</span>
          <div class="intro-actions">
            <span class="intro-status ${intro.status.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(intro.status)}</span>
            ${
              needsApproval
                ? `<button type="button" data-approve-intro="${index}">Approve</button>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function renderConnectedSources() {
  document.querySelectorAll("[data-connect-source]").forEach((button) => {
    const source = button.dataset.connectSource;
    const isConnected = Boolean(state.connected[source]);
    button.classList.toggle("is-connected", isConnected);
    button.textContent = isConnected
      ? `${source === "gmail" ? "Gmail" : "Calendar"} connected`
      : `Connect ${source === "gmail" ? "Gmail" : "Calendar"}`;
  });
}

function renderClaimProfile() {
  const profile = document.querySelector("[data-claim-profile]");
  if (!profile) return;
  const person = personById("adrian");
  profile.innerHTML = `
    ${avatar(person.name)}
    <h4>${escapeHtml(person.name)}</h4>
    <p>Meeting completed with ${escapeHtml(person.name)} yesterday.</p>
    <span class="capital-pill">Meeting · +15</span>
  `;
}

function renderAll() {
  document.querySelector("[data-social-capital-score]")?.replaceChildren(
    document.createTextNode(String(state.socialCapital)),
  );
  renderConnectedSources();
  renderSourceHealth();
  renderProfile();
  renderSignals();
  renderContext();
  renderGoals();
  renderAsks();
  renderFeed();
  renderPeople();
  renderGraph();
  renderLists();
  renderLinkPreview();
  renderShareView();
  renderIntros();
  renderClaimProfile();
}

function openComposer(personId) {
  const person = personById(personId);
  const composer = document.querySelector("[data-intro-composer]");
  const title = document.querySelector("[data-composer-title]");
  const context = document.querySelector("[data-private-context]");
  const draft = document.querySelector("[data-intro-draft]");
  if (!composer || !title || !context || !draft) return;

  title.textContent = `Ask ${person.connector} for an intro to ${person.name}`;
  context.value = `${person.connector} knows ${person.name}. ${person.lastSignal}. I want to connect because ${person.intent}.`;
  draft.value = `Hi ${person.connector},\n\nGigi surfaced ${person.name} as a strong fit: ${person.intent}.\n\nIf you are comfortable, could you introduce us? I can send a tight forwardable note first.\n\nThank you.`;
  composer.dataset.personId = person.id;
  composer.hidden = false;
}

function saveIntro(status) {
  const composer = document.querySelector("[data-intro-composer]");
  if (!composer) return;
  const person = personById(composer.dataset.personId);
  const existing = state.intros.find((intro) => intro.target === person.name);
  if (existing) {
    existing.status = status;
  } else {
    state.intros.unshift({
      target: person.name,
      connector: person.connector,
      reason: person.useCase === "fundraising" ? "Fundraising context" : "Relevant warm path",
      status,
    });
  }
  if (status === "Sent") {
    state.feed.unshift({
      person: person.name,
      actor: "You",
      text: `approved an intro request to ${person.name} through ${person.connector}. Gigi saved the private context and draft.`,
      time: "Just now",
      capital: 4,
    });
  }
  composer.hidden = true;
  setProductView("intros");
}

document.querySelector(".copy-button")?.addEventListener("click", async () => {
  await copyText("clara@gigi.co");
  root.dataset.copied = "true";
  window.setTimeout(() => {
    delete root.dataset.copied;
  }, 1100);
});

document.querySelector(".beta-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (input?.value) {
    event.currentTarget.dataset.sent = "true";
    window.setTimeout(() => openProduct("feed"), 180);
  }
});

document.addEventListener("click", async (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const viewButton = target.closest("[data-product-view]");
  if (viewButton) {
    openProduct(viewButton.dataset.productView);
    return;
  }

  if (target.closest("[data-close-product]")) {
    closeProduct();
    return;
  }

  const sourceButton = target.closest("[data-connect-source]");
  if (sourceButton) {
    const source = sourceButton.dataset.connectSource;
    state.connected[source] = true;
    state.feed.unshift({
      person: source === "gmail" ? "Gmail" : "Calendar",
      actor: "Gigi",
      text:
        source === "gmail"
          ? "enabled Gmail drafting. Messages still require explicit approval before sending."
          : "reviewed meeting history and found recurring relationships that can support warm paths.",
      time: "Just now",
      capital: source === "gmail" ? 3 : 6,
    });
    renderConnectedSources();
    renderSourceHealth();
    renderFeed();
    return;
  }

  const approveSignalButton = target.closest("[data-approve-signal]");
  if (approveSignalButton) {
    const signal = socialSignals.find((item) => item.id === approveSignalButton.dataset.approveSignal);
    if (signal && !state.profileApprovals.includes(signal.id)) {
      state.profileApprovals.push(signal.id);
      state.socialCapital += signal.capital;
      state.feed.unshift({
        person: signal.title,
        actor: "You",
        text: `approved a ${signal.pillar.toLowerCase()} signal from ${signal.source}. It now strengthens your Social Capital profile.`,
        time: "Just now",
        capital: signal.capital,
      });
      renderAll();
    }
    return;
  }

  if (target.closest("[data-request-vouch]")) {
    const hasVouchRequest = state.intros.some(
      (intro) => intro.target === "Clara Gold" && intro.reason === "Reputation vouch request",
    );
    if (!hasVouchRequest) {
      state.intros.unshift({
        target: "Clara Gold",
        connector: "Gigi",
        reason: "Reputation vouch request",
        status: "Waiting opt-in",
      });
      state.feed.unshift({
        person: "Reputation",
        actor: "Gigi",
        text: "drafted a private vouch request for Clara to validate your latest shipped work.",
        time: "Just now",
        capital: 5,
      });
    }
    setProductView("intros");
    return;
  }

  const signalPersonButton = target.closest("[data-select-signal-person]");
  if (signalPersonButton) {
    state.signalRecipientId = signalPersonButton.dataset.selectSignalPerson;
    const person = personById(state.signalRecipientId);
    state.signalDraft = `${person.name} created useful context for ${person.intent}.`;
    renderSignals();
    return;
  }

  const signalPillarButton = target.closest("[data-select-signal-pillar]");
  if (signalPillarButton) {
    state.signalPillar = signalPillarButton.dataset.selectSignalPillar;
    renderSignals();
    return;
  }

  const signalPrivacyButton = target.closest("[data-select-signal-privacy]");
  if (signalPrivacyButton) {
    state.signalPrivacy = signalPrivacyButton.dataset.selectSignalPrivacy;
    renderSignals();
    return;
  }

  if (target.closest("[data-publish-signal]")) {
    const draft = document.querySelector("[data-signal-draft]")?.value.trim();
    if (draft) {
      const person = personById(state.signalRecipientId);
      const signal = {
        id: `signal-${Date.now()}`,
        direction: "written",
        actor: "You",
        subject: person.name,
        personId: person.id,
        pillar: state.signalPillar,
        title: `${state.signalPillar} signal for ${person.name}`,
        text: draft,
        privacy: state.signalPrivacy,
        score: 6,
        time: "Just now",
      };
      state.circleSignals.unshift(signal);
      person.lastSignal = `You wrote a ${state.signalPillar.toLowerCase()} signal about ${person.name}`;
      person.capital += 6;
      state.socialCapital += 3;
      state.feed.unshift({
        person: person.name,
        actor: "You",
        text: `wrote a ${state.signalPillar.toLowerCase()} signal for ${person.name}. Gigi can use it when a trusted ask matches.`,
        time: "Just now",
        capital: 6,
      });
      state.signalDraft = `Write another private signal about ${person.name}.`;
      renderAll();
    }
    return;
  }

  if (target.closest("[data-request-reciprocal]")) {
    const person = personById(state.signalRecipientId);
    const exists = state.intros.some(
      (intro) => intro.target === person.name && intro.reason === "Reciprocal signal request",
    );
    if (!exists) {
      state.intros.unshift({
        target: person.name,
        connector: "Gigi",
        reason: "Reciprocal signal request",
        status: "Waiting opt-in",
      });
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `drafted a gated request for ${person.name} to write a reciprocal signal about your relationship.`,
        time: "Just now",
        capital: 4,
      });
    }
    setProductView("intros");
    return;
  }

  if (target.closest("[data-scan-context]")) {
    state.connected.calendar = true;
    state.feed.unshift({
      person: "Context",
      actor: "Gigi",
      text: `reviewed ${contextSignals.length} context signals across calendar, projects, mentions, and connectors.`,
      time: "Just now",
      capital: 6,
    });
    renderAll();
    return;
  }

  if (target.closest("[data-approve-all-context]")) {
    const approvedNow = contextSignals.filter((signal) => contextSignalState(signal) === "Review");
    approvedNow.forEach((signal) => {
      if (!state.contextApprovals.includes(signal.id)) {
        state.contextApprovals.push(signal.id);
        state.socialCapital += signal.impact;
      }
    });
    if (approvedNow.length) {
      state.feed.unshift({
        person: "Context",
        actor: "You",
        text: `approved ${approvedNow.length} context signals for meeting briefs and warm-path recommendations.`,
        time: "Just now",
        capital: approvedNow.reduce((sum, signal) => sum + signal.impact, 0),
      });
    }
    renderAll();
    return;
  }

  const approveContextButton = target.closest("[data-approve-context]");
  if (approveContextButton) {
    const signal = contextSignals.find((item) => item.id === approveContextButton.dataset.approveContext);
    if (signal && !state.contextApprovals.includes(signal.id)) {
      state.contextHidden = state.contextHidden.filter((id) => id !== signal.id);
      state.contextApprovals.push(signal.id);
      state.socialCapital += signal.impact;
      state.selectedPersonId = signal.personId;
      state.feed.unshift({
        person: signal.label,
        actor: "You",
        text: `approved a ${signal.source.toLowerCase()} context signal. Gigi can now use it in private briefs and recommendations.`,
        time: "Just now",
        capital: signal.impact,
      });
      renderAll();
    }
    return;
  }

  const hideContextButton = target.closest("[data-hide-context]");
  if (hideContextButton) {
    const signal = contextSignals.find((item) => item.id === hideContextButton.dataset.hideContext);
    if (signal && !state.contextHidden.includes(signal.id)) {
      state.contextHidden.push(signal.id);
      state.contextApprovals = state.contextApprovals.filter((id) => id !== signal.id);
      state.feed.unshift({
        person: signal.label,
        actor: "You",
        text: `hid a ${signal.source.toLowerCase()} context signal from Gigi recommendations.`,
        time: "Just now",
        capital: 0,
      });
      renderAll();
    }
    return;
  }

  const goalButton = target.closest("[data-select-goal]");
  if (goalButton) {
    const goal = goalById(goalButton.dataset.selectGoal);
    state.activeGoalId = goal.id;
    state.goalBrief = goal.brief;
    state.filter = goal.useCase;
    state.query = goal.brief;
    state.selectedPersonId = goal.people[0];
    renderAll();
    return;
  }

  if (target.closest("[data-run-goal]")) {
    const brief = document.querySelector("[data-goal-brief]")?.value.trim();
    if (brief) {
      state.goalBrief = brief;
    }
    const goal = goalById(state.activeGoalId);
    state.connected.calendar = true;
    state.query = state.goalBrief;
    state.filter = goal.useCase;
    state.selectedPersonId = goal.people[0];
    state.feed.unshift({
      person: "Goal",
      actor: "Gigi",
      text: `converted "${goal.title}" into ${goal.people.length} ranked warm paths using calendar and project context.`,
      time: "Just now",
      capital: 7,
    });
    renderAll();
    return;
  }

  if (target.closest("[data-search-goal]")) {
    const goal = goalById(state.activeGoalId);
    state.query = state.goalBrief || goal.brief;
    state.filter = goal.useCase;
    state.selectedPersonId = goal.people[0];
    setProductView("search");
    return;
  }

  if (target.closest("[data-share-goal-list]")) {
    const goal = goalById(state.activeGoalId);
    state.previewListIndex = goal.listIndex;
    state.previewLens = goal.useCase === "hiring" ? "hiring" : "founder";
    setProductView("lists");
    renderLinkPreview();
    document.querySelector("[data-link-preview-modal]").hidden = false;
    return;
  }

  if (target.closest("[data-run-goal-intros]")) {
    const goal = goalById(state.activeGoalId);
    goal.people.map(personById).forEach((person) => {
      if (!state.intros.some((intro) => intro.target === person.name)) {
        state.intros.unshift({
          target: person.name,
          connector: person.connector,
          reason: `Goal: ${goal.title}`,
          status: "Waiting opt-in",
        });
      }
    });
    setProductView("intros");
    return;
  }

  const goalIntroButton = target.closest("[data-goal-intro]");
  if (goalIntroButton) {
    openComposer(goalIntroButton.dataset.goalIntro);
    return;
  }

  const askButton = target.closest("[data-select-ask]");
  if (askButton) {
    const ask = askById(askButton.dataset.selectAsk);
    state.activeAskId = ask.id;
    state.askBrief = ask.ask;
    state.query = ask.ask;
    state.filter = ask.useCase;
    state.selectedPersonId = ask.people[0];
    renderAll();
    return;
  }

  if (target.closest("[data-run-ask]")) {
    const brief = document.querySelector("[data-ask-brief]")?.value.trim();
    const ask = askById(state.activeAskId);
    if (brief) {
      state.askBrief = brief;
    }
    state.connected.calendar = true;
    state.query = state.askBrief;
    state.filter = ask.useCase;
    state.selectedPersonId = ask.people[0];
    state.feed.unshift({
      person: "Network ask",
      actor: "Gigi",
      text: `turned ${ask.from}'s ask into ${ask.people.length} ranked profiles, a gated smart link, and double opt-in intro options.`,
      time: "Just now",
      capital: 6,
    });
    renderAll();
    return;
  }

  if (target.closest("[data-share-ask]")) {
    const ask = askById(state.activeAskId);
    state.previewListIndex = ask.listIndex;
    state.previewLens = ask.useCase === "hiring" ? "hiring" : "founder";
    if (!state.sharedAsks.includes(ask.id)) {
      state.sharedAsks.push(ask.id);
      state.feed.unshift({
        person: "Smart link",
        actor: "Gigi",
        text: `created a scoped private link for ${ask.from}'s network ask without exposing your whole graph.`,
        time: "Just now",
        capital: 5,
      });
    }
    renderAll();
    document.querySelector("[data-link-preview-modal]").hidden = false;
    return;
  }

  if (target.closest("[data-request-ask-intros]")) {
    const ask = askById(state.activeAskId);
    ask.people.map(personById).forEach((person) => {
      const existing = state.intros.find((intro) => intro.target === person.name);
      if (existing) {
        existing.reason = `Ask from ${ask.from}`;
        existing.status = existing.status === "Approved" ? "Approved" : "Waiting opt-in";
      } else {
        state.intros.unshift({
          target: person.name,
          connector: person.connector,
          reason: `Ask from ${ask.from}`,
          status: "Waiting opt-in",
        });
      }
    });
    setProductView("intros");
    return;
  }

  const askIntroButton = target.closest("[data-ask-intro]");
  if (askIntroButton) {
    openComposer(askIntroButton.dataset.askIntro);
    return;
  }

  const filterButton = target.closest("[data-search-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.searchFilter;
    document.querySelectorAll("[data-search-filter]").forEach((button) => {
      button.classList.toggle("is-active", button === filterButton);
    });
    renderPeople();
    return;
  }

  if (target.closest("[data-run-search]")) {
    const input = document.querySelector("#network-search");
    state.query = input?.value ?? "";
    state.answer = "";
    renderPeople();
    return;
  }

  const personButton = target.closest("[data-select-person]");
  if (personButton) {
    state.selectedPersonId = personButton.dataset.selectPerson;
    state.answer = "";
    renderPeople();
    return;
  }

  const graphPerson = target.closest("[data-graph-person]");
  if (graphPerson) {
    if (graphPerson.dataset.graphPerson !== "self") {
      state.selectedPersonId = graphPerson.dataset.graphPerson;
      renderGraph();
    }
    return;
  }

  if (target.closest("[data-refresh-graph]")) {
    state.graphRefreshes += 1;
    state.feed.unshift({
      person: "Trust graph",
      actor: "Gigi",
      text: `refreshed calendar and project signals across ${people.length} strong paths.`,
      time: "Just now",
      capital: 5,
    });
    renderFeed();
    renderGraph();
    return;
  }

  if (target.closest("[data-ask-gigi]")) {
    const question = document.querySelector("[data-gigi-question]")?.value ?? "";
    const person = personById(state.selectedPersonId);
    state.answer = `Gigi answer: ${person.name} matches "${question}" because ${person.intent}. ${person.connector} is the warmest path and the relationship is supported by calendar context: ${person.lastSignal.toLowerCase()}.`;
    renderPersonDetail();
    return;
  }

  const introButton = target.closest("[data-request-intro]");
  if (introButton) {
    openComposer(introButton.dataset.requestIntro);
    return;
  }

  const previewListButton = target.closest("[data-preview-list]");
  if (previewListButton) {
    state.previewListIndex = Number(previewListButton.dataset.previewList);
    state.previewLens = "founder";
    renderLinkPreview();
    document.querySelector("[data-link-preview-modal]").hidden = false;
    return;
  }

  const lensButton = target.closest("[data-preview-lens]");
  if (lensButton) {
    state.previewLens = lensButton.dataset.previewLens;
    renderLinkPreview();
    return;
  }

  if (target.closest("[data-close-link-preview]")) {
    document.querySelector("[data-link-preview-modal]").hidden = true;
    return;
  }

  if (target.closest("[data-copy-preview-link]")) {
    await copyText(shareUrl(state.previewListIndex));
    target.closest("[data-copy-preview-link]").textContent = "Private link copied";
    return;
  }

  if (target.closest("[data-open-private-link]")) {
    openSharedList(state.previewListIndex);
    return;
  }

  if (target.closest("[data-request-list-intros]")) {
    const list = smartLists[state.previewListIndex] ?? smartLists[0];
    list.people.map(personById).forEach((person) => {
      if (!state.intros.some((intro) => intro.target === person.name)) {
        state.intros.unshift({
          target: person.name,
          connector: person.connector,
          reason: `Requested from ${list.title}`,
          status: "Waiting opt-in",
        });
      }
    });
    document.querySelector("[data-link-preview-modal]").hidden = true;
    setProductView("intros");
    return;
  }

  const shareLensButton = target.closest("[data-share-lens]");
  if (shareLensButton) {
    state.shareLens = shareLensButton.dataset.shareLens;
    renderShareView();
    return;
  }

  if (target.closest("[data-unlock-share]")) {
    state.shareUnlocked = true;
    state.connected.gmail = true;
    renderShareView();
    return;
  }

  if (target.closest("[data-open-product-from-share]")) {
    openProduct("search");
    return;
  }

  if (target.closest("[data-close-share]")) {
    closeShare();
    return;
  }

  const sharedIntroButton = target.closest("[data-request-shared-intro]");
  if (sharedIntroButton) {
    const person = personById(sharedIntroButton.dataset.requestSharedIntro);
    if (!state.shareRequested.includes(person.id)) {
      state.shareRequested.push(person.id);
    }
    if (!state.intros.some((intro) => intro.target === person.name)) {
      state.intros.unshift({
        target: person.name,
        connector: person.connector,
        reason: `Requested from shared list`,
        status: "Waiting opt-in",
      });
    }
    state.feed.unshift({
      person: person.name,
      actor: "Shared link recipient",
      text: `requested a gated intro to ${person.name} through ${person.connector}.`,
      time: "Just now",
      capital: 4,
    });
    renderShareView();
    return;
  }

  if (target.closest("[data-create-list]")) {
    state.query = "People I can introduce for this ask";
    setProductView("search");
    return;
  }

  if (target.closest("[data-open-claim]")) {
    document.querySelector("[data-claim-modal]").hidden = false;
    return;
  }

  if (target.closest("[data-close-claim]")) {
    document.querySelector("[data-claim-modal]").hidden = true;
    return;
  }

  if (target.closest("[data-approve-claim]")) {
    if (!state.claimApproved) {
      state.claimApproved = true;
      state.socialCapital += 15;
      state.feed.unshift({
        person: "Adrian Vega",
        actor: "You",
        text: "claimed +15 social capital for the completed meeting with Adrian Vega.",
        time: "Just now",
        capital: 15,
      });
    }
    document.querySelector("[data-claim-modal]").hidden = true;
    renderAll();
    return;
  }

  if (target.closest("[data-close-composer]")) {
    document.querySelector("[data-intro-composer]").hidden = true;
    return;
  }

  if (target.closest("[data-save-draft]")) {
    saveIntro("Draft ready");
    return;
  }

  if (target.closest("[data-send-intro]")) {
    saveIntro("Sent");
    return;
  }

  const approveIntroButton = target.closest("[data-approve-intro]");
  if (approveIntroButton) {
    const intro = state.intros[Number(approveIntroButton.dataset.approveIntro)];
    if (intro) {
      intro.status = "Approved";
      state.feed.unshift({
        person: intro.target,
        actor: "You",
        text: `approved the double opt-in intro to ${intro.target} via ${intro.connector}.`,
        time: "Just now",
        capital: 4,
      });
      renderAll();
    }
  }
});

document.querySelector("#network-search")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    state.query = event.currentTarget.value;
    state.answer = "";
    renderPeople();
  }
});

document.querySelector("[data-goal-brief]")?.addEventListener("input", (event) => {
  state.goalBrief = event.currentTarget.value;
});

document.querySelector("[data-ask-brief]")?.addEventListener("input", (event) => {
  state.askBrief = event.currentTarget.value;
});

document.addEventListener("input", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (target?.matches("[data-signal-draft]")) {
    state.signalDraft = target.value;
  }
});

window.addEventListener("resize", () => {
  updatePlaceholder();
});

updatePlaceholder();
renderAll();

const params = new URLSearchParams(window.location.search);
const sharePath = window.location.pathname.match(/^\/share\/([^/]+)/);
const sharedSlug = sharePath?.[1] || params.get("share");
if (sharedSlug) {
  openSharedList(listIndexBySlug(sharedSlug), false);
} else if (params.get("app") === "1" || window.location.hash === "#product") {
  openProduct("feed");
}
