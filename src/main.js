import "./styles.css";

const root = document.documentElement;
const body = document.body;
const productApp = document.querySelector(".product-app");

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
];

const state = {
  view: "feed",
  query: "AI founders in SF who raised with Tier 1 VCs",
  filter: "all",
  selectedPersonId: "adrian",
  answer: "",
  connected: {
    calendar: false,
    gmail: false,
  },
  socialCapital: 248,
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

function avatar(name) {
  return `<span class="avatar" aria-hidden="true">${escapeHtml(initials(name))}</span>`;
}

function openProduct(view = state.view) {
  if (!productApp) return;
  productApp.hidden = false;
  body.dataset.productActive = "true";
  setProductView(view);
  if (!new URLSearchParams(window.location.search).has("app")) {
    window.history.replaceState(null, "", "?app=1");
  }
}

function closeProduct() {
  if (!productApp) return;
  productApp.hidden = true;
  delete body.dataset.productActive;
  window.history.replaceState(null, "", window.location.pathname);
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
    title.textContent =
      view === "feed"
        ? "Private circle"
        : view === "search"
          ? "Network search"
          : view === "lists"
            ? "Smart links"
            : "Warm introductions";
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
          <button type="button" data-copy-list="${index}">Share private link</button>
        </article>
      `;
    })
    .join("");
}

function renderIntros() {
  const board = document.querySelector("[data-intro-board]");
  if (!board) return;
  board.innerHTML = state.intros
    .map(
      (intro) => `
        <article class="intro-row">
          <div>
            <strong>${escapeHtml(intro.target)}</strong>
            <span>via ${escapeHtml(intro.connector)}</span>
          </div>
          <span>${escapeHtml(intro.reason)}</span>
          <span class="intro-status ${intro.status.toLowerCase().replaceAll(" ", "-")}">${escapeHtml(intro.status)}</span>
        </article>
      `,
    )
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
  renderFeed();
  renderPeople();
  renderLists();
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
    state.connected[sourceButton.dataset.connectSource] = true;
    renderConnectedSources();
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

  const copyButton = target.closest("[data-copy-list]");
  if (copyButton) {
    const list = smartLists[Number(copyButton.dataset.copyList)];
    await copyText(`https://gigi.co/share/${list.title.toLowerCase().replace(/\W+/g, "-")}`);
    copyButton.textContent = "Private link copied";
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
  }
});

document.querySelector("#network-search")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    state.query = event.currentTarget.value;
    state.answer = "";
    renderPeople();
  }
});

window.addEventListener("resize", () => {
  updatePlaceholder();
});

updatePlaceholder();
renderAll();

const params = new URLSearchParams(window.location.search);
if (params.get("app") === "1" || window.location.hash === "#product") {
  openProduct("feed");
}
