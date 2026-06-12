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
    title: "Seed investors I like and can intro",
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
  {
    title: "Trust-heavy AI product reviewers",
    creator: "Gigi",
    count: 7,
    people: ["priya", "adrian", "maya"],
    context: "People who can pressure-test whether an AI product earns enough trust to share private context.",
    colors: ["#5ce1ff", "#3f2f8f"],
  },
];

const messageThreads = [
  {
    id: "andrea-seed",
    contact: "Andrea Oro",
    asker: "Clara",
    incoming: "Claraaa! I'm kicking off my round, anyone I should talk to?",
    reply: "Hey Andrea, wow super exciting! Here's my GIGI list of VCs I can intro you to",
    reaction: "OMG, you're my saver!!!",
    cardTitle: "Seed investors I like and can intro",
    linkPath: "gigi.app/Clara-Gold-VCs-I-can-Intro",
    listIndex: 1,
    people: ["maya", "adrian", "david"],
    context: "A fundraising ask becomes a private smart link instead of a loose text thread.",
  },
  {
    id: "david-dinner",
    contact: "David Kim",
    asker: "Clara",
    incoming: "Who should I put around the table Friday?",
    reply: "I made a Gigi list of founders with enough context to make the dinner sharp.",
    reaction: "This is exactly the room.",
    cardTitle: "Cool kids for David's dinner!",
    linkPath: "gigi.app/Clara-Gold-David-Dinner",
    listIndex: 2,
    people: ["david", "priya", "adrian"],
    context: "A dinner host gets a scoped circle without seeing Clara's whole graph.",
  },
  {
    id: "lucas-ops",
    contact: "Lucas Moretti",
    asker: "Clara",
    incoming: "Can you send ex-Rappi growth people I should meet?",
    reply: "Yes, here's a Gigi link with the operators I can actually intro.",
    reaction: "Perfect, requesting intros now.",
    cardTitle: "Ex-Rappi Growth / Ops people",
    linkPath: "gigi.app/Clara-Gold-Rappi-Ops",
    listIndex: 3,
    people: ["lucas", "sofia", "adrian"],
    context: "A hiring ask becomes a recipient-specific list with gated intro requests.",
  },
];

const introEmailDrafts = [
  {
    id: "julien-priya-email",
    label: "Product review",
    requester: "Julien Renard",
    connector: "Maxime Durand",
    targetId: "priya",
    accessId: "julien-priya",
    subject: "Intro: Julien <> Priya for a trust-heavy product review",
    ask: "Julien wants a senior design-systems operator to pressure-test an AI product surface before launch.",
    privateContext:
      "Maxime worked with Priya on a launch review and can vouch for her product judgment without exposing unrelated private notes.",
    forwardable:
      "Priya, Julien is looking for a sharp trust-heavy product review before his team ships. Maxime thought your design-systems perspective would make the review materially better.",
    boundary: "Share the product-review scope only. Do not include Maxime's private launch notes unless he approves.",
    score: 91,
    capital: 6,
    signals: ["Gmail draft", "Calendar proof", "double opt-in"],
  },
  {
    id: "claire-maya-email",
    label: "Seed investor",
    requester: "Claire Moreau",
    connector: "Nina Patel",
    targetId: "maya",
    accessId: "claire-maya",
    subject: "Intro: Claire <> Maya on AI infra seed round",
    ask: "Claire needs a founder-friendly investor path for an AI infrastructure seed round in San Francisco.",
    privateContext:
      "Nina met Maya twice in the last 30 days and can validate whether the seed-round angle is relevant before any broader context is shared.",
    forwardable:
      "Maya, Claire is building AI infrastructure and has a specific seed-round question that maps to your AI productivity thesis. Nina can keep this scoped if useful.",
    boundary: "Keep round details and founder references hidden until Nina approves the forwardable note.",
    score: 88,
    capital: 5,
    signals: ["investor thesis", "recent meeting", "forwardable note"],
  },
  {
    id: "david-adrian-email",
    label: "Founder room",
    requester: "David Kim",
    connector: "Clara Gold",
    targetId: "adrian",
    accessId: "david-adrian",
    subject: "Intro: David <> Adrian for private founder dinner",
    ask: "David is curating a small founder room and wants one technical founder with real AI infra context.",
    privateContext:
      "Clara has fresh dinner-list context and can introduce Adrian without revealing the rest of the attendee graph.",
    forwardable:
      "Adrian, David is hosting a small technical founder dinner and Clara thinks your robotics infra perspective would make the table sharper.",
    boundary: "Do not expose the full dinner list. Adrian only sees the theme and can opt in before any further context expands.",
    score: 84,
    capital: 4,
    signals: ["private room", "connector consent", "recipient opt-in"],
  },
];

const matchReports = [
  {
    id: "buckhouse-belsky",
    owner: "James Buckhouse",
    ownerRole: "Design leader, Sequoia Design Lab",
    match: "Scott Belsky",
    matchRole: "Creative tech founder and product operator",
    connector: "Clara Gold",
    headline: "You two should reshape creative tech.",
    fitLabel: "Professional match",
    score: "9.8",
    axes: [
      { label: "Legit", value: "9.8", detail: "Deep craft receipts and founder adjacency." },
      { label: "Trendy", value: "8.1", detail: "AI-native creative tooling keeps showing up." },
      { label: "Useful", value: "9.5", detail: "High overlap, low cold-start cost." },
    ],
    compliments: [
      "Your writing makes technical taste feel readable, which is rare.",
      "You are repeatedly pulled into rooms where product, story, and creative tools overlap.",
      "Gigi found enough public and private context to make this feel specific, not random.",
    ],
    research: [
      "Shared creative technology language across design, founder advice, and AI tooling.",
      "Multiple second-degree paths can make the intro warm instead of performative.",
      "The strongest angle is a short conversation about how creative teams adopt new AI tools.",
    ],
    outcome: "Draft a double opt-in intro through Clara with a tight forwardable note.",
  },
  {
    id: "valdes-bent",
    owner: "Pamela Valdes",
    ownerRole: "Founder, community and media operator",
    match: "Mercedes Bent",
    matchRole: "Investor and venture partner",
    connector: "Clara Gold",
    headline: "Work soulmates with founder-investor overlap.",
    fitLabel: "Work soulmate",
    score: "9.6",
    axes: [
      { label: "Legit", value: "9.4", detail: "Founder proof plus investor pattern recognition." },
      { label: "Trendy", value: "8.8", detail: "Media, AI, and community context all compound." },
      { label: "Useful", value: "9.7", detail: "Clear reason to meet, not just similar people." },
    ],
    compliments: [
      "You both turn distribution into product intuition rather than vanity reach.",
      "The match feels obvious once Gigi compares founder energy with investor pattern matching.",
      "There is enough mutual context to make the first conversation warm quickly.",
    ],
    research: [
      "Gigi sees founder-to-investor language overlap around new consumer behavior.",
      "The relationship can start with a shared thesis instead of an open-ended coffee.",
      "The intro should stay scoped to one concrete question before expanding the circle.",
    ],
    outcome: "Queue a warm intro draft and ask both sides to opt in before anything is sent.",
  },
  {
    id: "clara-miriam",
    owner: "Clara Gold",
    ownerRole: "Founder, Gigi",
    match: "Miriam Palomis",
    matchRole: "Operator, AI community",
    connector: "Gigi",
    headline: "A hidden operator edge worth activating.",
    fitLabel: "Network edge",
    score: "9.1",
    axes: [
      { label: "Legit", value: "9.1", detail: "Community proof and recurring operator context." },
      { label: "Trendy", value: "7.9", detail: "AI community signal is fresh but not noisy." },
      { label: "Useful", value: "9.3", detail: "Can unlock founders, events, and hiring paths." },
    ],
    compliments: [
      "Miriam is close enough to your active goals to be useful this week.",
      "The signal is quieter than a public influencer graph, which is why it matters.",
      "Gigi found a relationship that looks small until a specific ask lands.",
    ],
    research: [
      "Calendar-like context points to repeated AI community overlap.",
      "A founder dinner and hiring ask both become easier with this edge live.",
      "The intro should stay private until the concrete ask is approved.",
    ],
    outcome: "Add Miriam to the active circle and let Gigi reuse the edge for future asks.",
  },
];

const connectorNudges = [
  {
    id: "clara-scott",
    connector: "Clara Gold",
    seeker: "James Buckhouse",
    target: "Scott Belsky",
    targetRole: "Creative tech founder and product operator",
    trigger: "Clara met Scott yesterday after a creative tech roundtable.",
    intent: "James is exploring AI-native creative tooling with design leaders.",
    draft:
      "Clara, you just met Scott and Gigi thinks James has a tight reason to talk to him about AI-native creative teams. Want me to draft the double opt-in intro?",
    response: "Yes, draft it. Keep it specific and short.",
    confidence: 94,
    timing: "24h after meeting",
    signals: ["fresh meeting", "goal match", "second-degree"],
  },
  {
    id: "nina-maya",
    connector: "Nina Patel",
    seeker: "Clara Gold",
    target: "Maya Chen",
    targetRole: "Investor, Northstar Seed",
    trigger: "Nina met Maya twice in the last 30 days.",
    intent: "Clara is raising a seed round and needs founder-friendly VCs.",
    draft:
      "Nina, Maya is a strong fit for Clara's seed round and you have recent context with her. Should Gigi prepare the intro?",
    response: "Yes, but ask Clara for the tight fundraising blurb first.",
    confidence: 91,
    timing: "After second meeting",
    signals: ["meeting frequency", "fundraising intent", "trusted edge"],
  },
  {
    id: "david-priya",
    connector: "David Kim",
    seeker: "Clara Gold",
    target: "Priya Raman",
    targetRole: "Design systems lead",
    trigger: "David is hosting a dinner where Priya and Clara's hiring ask overlap.",
    intent: "Clara needs senior design systems talent for an AI product sprint.",
    draft:
      "David, Priya looks useful for Clara's hiring sprint and the dinner is a natural context. Want Gigi to queue the opt-in intro?",
    response: "Queue it after dinner so the ask feels warm.",
    confidence: 86,
    timing: "Dinner follow-up",
    signals: ["event context", "hiring intent", "warm room"],
  },
];

const scoreProfiles = [
  {
    id: "clara",
    name: "Clara Gold",
    role: "Founder @ Gigi",
    score: 1224,
    rank: "Top 1% network operator",
    delta: 121,
    addedContact: "Miriam Palomis",
    summary:
      "Your calendar, private lists, and trusted vouches show unusually strong founder and investor reach.",
    breakdown: [
      { label: "Built", value: 412, detail: "Products shipped, rooms hosted, and visible founder proof." },
      { label: "Network", value: 506, detail: "Warm paths across founders, VCs, operators, and close friends." },
      { label: "Reputation", value: 306, detail: "Private trust signals from people who already vouch for you." },
    ],
    signals: [
      "AI founders in SF who raised with Tier 1 VCs",
      "Seed investors I like and can intro",
      "Cool kids for David's dinner",
    ],
  },
  {
    id: "miriam",
    name: "Miriam Palomis",
    role: "Operator, AI community",
    score: 986,
    rank: "Rising connector",
    delta: 74,
    addedContact: "Andrea Ro",
    summary:
      "Gigi found a high-trust community operator whose introductions convert because they come with context.",
    breakdown: [
      { label: "Built", value: 278, detail: "Community launches and repeat offline events." },
      { label: "Network", value: 451, detail: "Dense founder and operator ties across SF and Paris." },
      { label: "Reputation", value: 257, detail: "Trusted by hosts who share private lists carefully." },
    ],
    signals: [
      "Founder dinner hosts",
      "AI operators in Paris",
      "Warm paths to community-led sales",
    ],
  },
  {
    id: "guillaume",
    name: "Guillaume Deramchi",
    role: "Builder, AI products",
    score: 814,
    rank: "Trusted builder",
    delta: 58,
    addedContact: "Clara Gold",
    summary:
      "Your strongest capital comes from shipping fast, asking precise questions, and preserving private context.",
    breakdown: [
      { label: "Built", value: 348, detail: "Fast product execution and repeated applied AI work." },
      { label: "Network", value: 247, detail: "Warm paths through founders, operators, and technical collaborators." },
      { label: "Reputation", value: 219, detail: "Proof from people who trust you with specific asks." },
    ],
    signals: [
      "AI product builders",
      "Founder references",
      "Trusted implementation loops",
    ],
  },
];

const dynamicProfileLenses = [
  {
    id: "fundraising",
    label: "Fundraising",
    title: "Investor-facing founder profile",
    headline: "Trusted builder with warm seed-round proof.",
    intent: "Raise a seed round for AI infrastructure.",
    audience: "Founder-friendly VCs and seed angels",
    visibleProof:
      "Show shipped product proof, Nina's investor reference, and warm paths to AI-native seed investors.",
    hiddenProof:
      "Hide round details, founder references, and private investor notes until the intro is approved.",
    graphDelta: "Investor graph",
    shareListIndex: 4,
    capital: 6,
    breakdown: [
      { label: "Built", value: 94, detail: "AI infra demo, fast execution, and founder proof lead this lens." },
      { label: "Network", value: 88, detail: "Nina and Clara create warm investor routes without cold outreach." },
      { label: "Reputation", value: 90, detail: "Private vouches make the profile credible before the pitch." },
    ],
    receipts: ["Shipped AI infra demo", "Warm investor reference", "Seed investors I like and can intro"],
  },
  {
    id: "hiring",
    label: "Hiring",
    title: "Advisor and operator profile",
    headline: "Precise operator context for trust-heavy AI work.",
    intent: "Hire senior AI operators and product advisors.",
    audience: "Design systems leads, operators, and talent partners",
    visibleProof:
      "Show launch-review judgment, trusted implementation loops, and warm routes to senior product reviewers.",
    hiddenProof:
      "Keep Maxime's launch notes and private product critiques hidden until the reviewer opts in.",
    graphDelta: "Talent graph",
    shareListIndex: 5,
    capital: 5,
    breakdown: [
      { label: "Built", value: 90, detail: "Shipping proof matters, but product judgment moves to the front." },
      { label: "Network", value: 83, detail: "Maxime and Priya become the strongest intent-aware path." },
      { label: "Reputation", value: 92, detail: "Trust-heavy product proof becomes the lead social signal." },
    ],
    receipts: ["Trust-heavy AI product reviewers", "Design systems critique", "Launch review context"],
  },
  {
    id: "rooms",
    label: "Rooms",
    title: "Private-room profile",
    headline: "Useful founder-room signal without exposing the room.",
    intent: "Open high-trust founder rooms and first-customer conversations.",
    audience: "Hosts, technical founders, and early customer connectors",
    visibleProof:
      "Show founder dinner signal, technical builder credibility, and scoped smart-link context.",
    hiddenProof:
      "Do not reveal the guest list, customer notes, or broad attendee graph before the host unlocks access.",
    graphDelta: "Room graph",
    shareListIndex: 2,
    capital: 4,
    breakdown: [
      { label: "Built", value: 86, detail: "Technical proof stays visible enough for the room to trust the ask." },
      { label: "Network", value: 91, detail: "David and Clara become the primary room-opening context." },
      { label: "Reputation", value: 84, detail: "Private host proof is useful only inside the scoped room." },
    ],
    receipts: ["Founder dinner signal", "Cool kids for David's dinner", "Private circle dinner"],
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

const meetingBriefings = [
  {
    id: "sequoia-pitch",
    title: "Seed pitch with Maya Chen",
    personId: "maya",
    time: "Tomorrow 9:30 AM",
    room: "Northstar / Zoom",
    objective: "Earn a warm second meeting for the AI infra seed round.",
    opener: "Open with Maya's AI-native productivity thesis and ask where infra founders still sound too horizontal.",
    commonGround: ["Japan trip", "AI productivity founders", "founder references"],
    pitchAngle:
      "Frame the company as connective tissue for teams drowning in AI tooling, then ask for one founder pattern she has not seen solved.",
    sensitive: "Do not mention private dinner context unless Nina approves the investor reference.",
    questions: [
      "Which seed-stage infra teams feel most differentiated this year?",
      "What would make this round feel obviously partner-meeting worthy?",
      "Who should validate the operator pain before the next pitch?",
    ],
    signalIds: ["calendar-maya", "project-adrian"],
  },
  {
    id: "cofounder-coffee",
    title: "Coffee with Priya Raman",
    personId: "priya",
    time: "Today 4:00 PM",
    room: "Sightglass SF",
    objective: "Decide whether Priya is the right trust-surface advisor for the product review.",
    opener: "Start with the part of the review where users hesitate before sharing private context.",
    commonGround: ["design systems", "trust-heavy AI", "launch reviews"],
    pitchAngle:
      "Ask Priya to pressure-test whether Social Capital feels earned, not gamified.",
    sensitive: "Keep the Maxime vouch private until Priya opts into the reference loop.",
    questions: [
      "Where does the product ask for too much trust too early?",
      "Which profile signal should stay private by default?",
      "What would make a recipient feel safe requesting an intro?",
    ],
    signalIds: ["connection-priya"],
  },
  {
    id: "dinner-host-sync",
    title: "Founder dinner sync with David",
    personId: "david",
    time: "Friday 7:15 PM",
    room: "Private dinner list",
    objective: "Build a small founder room without exposing Clara's broader network.",
    opener: "Ask David which founder would make the table feel sharper, not larger.",
    commonGround: ["technical founders", "private dinners", "seed investors"],
    pitchAngle:
      "Position the smart link as a way to share just enough context for opt-in intros.",
    sensitive: "Do not expose the full dinner list before David unlocks the private link.",
    questions: [
      "Who should be present for density rather than status?",
      "Which invite needs a reference check first?",
      "What context can be shared safely before RSVP?",
    ],
    signalIds: ["mention-david"],
  },
];

const profileDossiers = [
  {
    id: "maya-investor-dossier",
    label: "Investor lookup",
    targetId: "maya",
    requester: "Claire Moreau",
    connector: "Nina Patel",
    briefingId: "sequoia-pitch",
    accessId: "claire-maya",
    meeting: "Tomorrow 9:30 AM",
    objective: "Walk into Maya's seed pitch with a precise AI infra angle and a warm path through Nina.",
    opener: "Your AI-native productivity thesis came up while we were mapping which infra founders still feel too horizontal.",
    commonGround: ["Japan trip", "AI productivity thesis", "founder references"],
    angle:
      "Frame Claire's company as connective tissue for teams drowning in AI tooling, then ask which founder pattern Maya has not seen solved.",
    whyNow:
      "Nina has recent partner-meeting context and Claire's seed-round ask is specific enough to avoid cold outreach.",
    privateBoundary:
      "Hide round details and founder references until Nina approves the forwardable note.",
    score: 93,
    capital: 6,
    sources: ["calendar", "public profile", "private context"],
  },
  {
    id: "priya-product-dossier",
    label: "Advisor lookup",
    targetId: "priya",
    requester: "Julien Renard",
    connector: "Maxime Durand",
    briefingId: "cofounder-coffee",
    accessId: "julien-priya",
    meeting: "Today 4:00 PM",
    objective: "Understand whether Priya is the right product reviewer before asking for a trust-heavy AI critique.",
    opener: "Your design-systems critique came up while we were checking where users hesitate before sharing private context.",
    commonGround: ["design systems", "trust-heavy AI", "launch reviews"],
    angle:
      "Ask Priya to pressure-test whether Social Capital feels earned, not gamified, and which profile signal should stay private by default.",
    whyNow:
      "Maxime just worked with Priya on a launch review, so the ask can start from proof instead of vague proximity.",
    privateBoundary:
      "Keep Maxime's launch-review notes hidden until Priya opts into the reference loop.",
    score: 91,
    capital: 5,
    sources: ["project history", "calendar", "connector vouch"],
  },
  {
    id: "adrian-dinner-dossier",
    label: "Founder-room lookup",
    targetId: "adrian",
    requester: "David Kim",
    connector: "Clara Gold",
    briefingId: "dinner-host-sync",
    accessId: "david-adrian",
    meeting: "Friday 7:15 PM",
    objective: "Prepare a founder-room sync without leaking Clara's broader dinner graph.",
    opener: "Your robotics infra angle feels useful for a small technical founder room, not a broader status dinner.",
    commonGround: ["robotics infra", "private founder dinners", "seed investors"],
    angle:
      "Position the Gigi smart link as a way to share just enough context for opt-in intros before expanding the attendee graph.",
    whyNow:
      "Clara met Adrian recently and David is still curating the table, so the invite can stay narrow and timely.",
    privateBoundary:
      "Expose the dinner theme only. Do not reveal the full attendee list before David unlocks the private link.",
    score: 87,
    capital: 4,
    sources: ["recent meeting", "private list", "public founder profile"],
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

const referenceChecks = [
  {
    id: "priya-product",
    from: "Julien Renard",
    role: "Chief of Staff, Northstar",
    ask: "Can anyone vouch for Priya before I bring her into a trust-heavy product review?",
    targetId: "priya",
    useCase: "hiring",
    status: "Strong path",
    summary:
      "Gigi found people who worked with Priya recently, then separated real project proof from weak social proximity.",
    candidates: [
      {
        name: "Maxime Durand",
        relation: "Worked with Priya on a launch review",
        strength: 96,
        evidence: ["shared project", "recent review", "close-circle signal"],
        detail: "Maxime can speak to Priya's judgment on trust-heavy AI surfaces.",
      },
      {
        name: "Clara Gold",
        relation: "Saw Priya's design-system critique",
        strength: 83,
        evidence: ["meeting context", "product trust", "second-degree"],
        detail: "Clara has enough context for a lightweight reputation check.",
      },
      {
        name: "Nina Patel",
        relation: "Reviewed founder references with Priya",
        strength: 74,
        evidence: ["reference loop", "calendar proof", "intro-gated"],
        detail: "Nina is useful if the ask becomes investor-facing.",
      },
    ],
  },
  {
    id: "adrian-investor",
    from: "Claire Moreau",
    role: "Founder, Lumen AI",
    ask: "Who can reference-check Adrian before I ask for a fundraising intro?",
    targetId: "adrian",
    useCase: "fundraising",
    status: "Ready",
    summary:
      "Gigi ranks references by recent meetings, investor relevance, and whether the connector can safely answer.",
    candidates: [
      {
        name: "Clara Gold",
        relation: "Met Adrian yesterday",
        strength: 94,
        evidence: ["recent meeting", "fundraising path", "direct trust"],
        detail: "Clara can validate whether Adrian is worth a seed investor intro this week.",
      },
      {
        name: "David Kim",
        relation: "Hosted Adrian at a founder dinner",
        strength: 81,
        evidence: ["offline signal", "founder room", "close circle"],
        detail: "David can reference the founder-room signal without exposing the dinner list.",
      },
      {
        name: "Maya Chen",
        relation: "Saw Adrian's investor materials",
        strength: 77,
        evidence: ["investor lens", "seed context", "private note"],
        detail: "Maya is useful only after Clara validates the first-order context.",
      },
    ],
  },
  {
    id: "lucas-hiring",
    from: "Amelie Laurent",
    role: "Talent partner",
    ask: "Who can vouch for Lucas before I route him into a senior operator search?",
    targetId: "lucas",
    useCase: "hiring",
    status: "Needs one approval",
    summary:
      "Gigi distinguishes people who merely know Lucas from people who have seen him operate in launch pressure.",
    candidates: [
      {
        name: "Clara Gold",
        relation: "Shared launch context with Lucas last week",
        strength: 88,
        evidence: ["marketplace launch", "calendar proof", "operator signal"],
        detail: "Clara can reference Lucas for city-launch execution and hiring judgment.",
      },
      {
        name: "Sofia Alvarez",
        relation: "Compared senior AI recruiter loops with Lucas",
        strength: 79,
        evidence: ["talent context", "Europe link", "second-degree"],
        detail: "Sofia can validate hiring context if the role is Europe-facing.",
      },
      {
        name: "David Kim",
        relation: "Saw Lucas help curate a founder dinner",
        strength: 70,
        evidence: ["community proof", "offline room", "weak tie"],
        detail: "David is a backup reference if the ask shifts toward community-led growth.",
      },
    ],
  },
];

const setupSources = [
  {
    id: "calendar",
    label: "Calendar",
    metric: "34 meetings",
    role: "Relationship truth",
    detail: "Maps recurring meetings, fresh connector moments, and who you actually spend time with.",
    unlock: "Warm paths, nudges, and meeting briefings",
    privacy: "Private until a signal or intro is approved",
    capital: 8,
  },
  {
    id: "gmail",
    label: "Gmail",
    metric: "11 asks",
    role: "Inbox intent",
    detail: "Finds concrete asks, drafts scoped replies, and keeps every outbound message approval-gated.",
    unlock: "Smart links, DM drafts, and double opt-in intros",
    privacy: "Draft-only in this local prototype",
    capital: 5,
  },
  {
    id: "contacts",
    label: "Contacts",
    metric: "248 people",
    role: "Known graph",
    detail: "Deduplicates people across lists, circles, and close contacts before Gigi ranks a path.",
    unlock: "Search, smart lists, and reference checks",
    privacy: "Only scoped profiles are shared",
    capital: 4,
  },
  {
    id: "publicProfile",
    label: "Public profile",
    metric: "19 signals",
    role: "Project context",
    detail: "Adds public work, current projects, and social proof so an intro has a reason to exist.",
    unlock: "Match reports, Social Capital, and goal routing",
    privacy: "Combined with private signals only after approval",
    capital: 6,
  },
];

const intakeCall = {
  objective:
    "Raise a seed round for an AI infrastructure company while hiring one trust-heavy product advisor.",
  transcript: [
    {
      speaker: "Gigi",
      text: "What are you trying to unlock this month: funding, hiring, customers, or a room you need access to?",
    },
    {
      speaker: "You",
      text: "Seed investors first, but I also need a sharp product advisor who understands trust-heavy AI surfaces.",
    },
    {
      speaker: "Gigi",
      text: "Who already knows enough context to make that ask warm instead of performative?",
    },
    {
      speaker: "You",
      text: "Nina has investor context, Maxime knows Priya, and Clara has the founder dinner graph.",
    },
    {
      speaker: "Gigi",
      text: "What should stay private unless someone opts in?",
    },
    {
      speaker: "You",
      text: "Round details, launch-review notes, and the full dinner list. Keep everything scoped.",
    },
  ],
  insights: [
    {
      label: "Primary goal",
      title: "Seed round warm paths",
      detail: "Prioritize Maya through Nina, then Adrian through Clara for founder references.",
    },
    {
      label: "Secondary goal",
      title: "Trust-heavy product advisor",
      detail: "Route Priya through Maxime with a narrow product-review ask.",
    },
    {
      label: "Privacy boundary",
      title: "Scoped context only",
      detail: "Hide round details, launch notes, and room membership until connector approval.",
    },
  ],
  plan: [
    "Run Radar for useful people before a search.",
    "Score relationship strength before drafting any intro.",
    "Use Access and Gmail drafts so each route stays double opt-in.",
  ],
};

const radarPredictions = [
  {
    id: "trust-review",
    label: "Before you ask",
    need: "Your next useful person is a trust-heavy product reviewer.",
    targetId: "priya",
    connector: "Maxime Durand",
    accessId: "julien-priya",
    hiddenSignal: "Julien is staffing an AI product sprint and Maxime just worked with Priya on a launch review.",
    whyNow: "The role is still private. Gigi can route a narrow product-review ask before it becomes a public search.",
    action: "Check the permissioned route through Maxime and queue a double opt-in intro only if the context stays scoped.",
    score: 96,
    capital: 7,
    signals: ["hiring intent", "recent project", "trusted connector"],
  },
  {
    id: "seed-path",
    label: "Network memory",
    need: "Your next fundraising path is already in Nina's fresh investor context.",
    targetId: "maya",
    connector: "Nina Patel",
    accessId: "claire-maya",
    hiddenSignal: "Claire needs founder-friendly AI infra investors while Nina has a fresh partner meeting with Maya.",
    whyNow: "The seed ask is precise enough for trust to transfer before it turns into broad cold outreach.",
    action: "Let Gigi verify the route, preserve the forwardable note, and ask Nina to approve the connector step.",
    score: 94,
    capital: 8,
    signals: ["fundraising intent", "fresh calendar", "investor thesis"],
  },
  {
    id: "dinner-density",
    label: "Invisible room",
    need: "Your next high-density room is a private founder dinner.",
    targetId: "adrian",
    connector: "Clara Gold",
    accessId: "david-adrian",
    hiddenSignal: "David needs one technical founder and Clara met Adrian before the dinner list was public.",
    whyNow: "The dinner context loses value if the full attendee graph leaks or the invite becomes generic.",
    action: "Build the scoped access route and expose only the dinner theme to Adrian's side.",
    score: 89,
    capital: 6,
    signals: ["offline room", "technical founder", "private access"],
  },
];

const relationshipAudits = [
  {
    id: "maxime-priya-strength",
    label: "Product trust",
    connector: "Maxime Durand",
    targetId: "priya",
    accessId: "julien-priya",
    ask: "Can Maxime safely carry a trust-heavy product review ask to Priya?",
    proof: "12 shared calendar events, 4 launch-review threads, and a fresh product critique inside the last week.",
    risk: "Strong enough for a scoped advisor ask, not for broad hiring context.",
    score: 91,
    meetings: 12,
    threads: 4,
    recency: "6 days",
    capital: 6,
    signals: ["recent work", "reply depth", "connector trust"],
  },
  {
    id: "nina-maya-strength",
    label: "Investor path",
    connector: "Nina Patel",
    targetId: "maya",
    accessId: "claire-maya",
    ask: "Can Nina credibly route Claire's seed ask to Maya?",
    proof: "8 investor-context meetings, 3 founder-reference threads, and one current partner-meeting note.",
    risk: "Good for fundraising fit; keep round details hidden until Nina approves the forwardable note.",
    score: 88,
    meetings: 8,
    threads: 3,
    recency: "2 days",
    capital: 5,
    signals: ["calendar density", "fundraising context", "mutual intent"],
  },
  {
    id: "clara-adrian-strength",
    label: "Room access",
    connector: "Clara Gold",
    targetId: "adrian",
    accessId: "david-adrian",
    ask: "Can Clara open a private founder-room path to Adrian without leaking the room?",
    proof: "5 recent founder-room overlaps, 2 private list edits, and a direct dinner-context mention.",
    risk: "Useful for opt-in dinner access only; do not expose the full attendee graph.",
    score: 84,
    meetings: 5,
    threads: 2,
    recency: "9 days",
    capital: 4,
    signals: ["offline room", "private list", "limited scope"],
  },
];

const opportunityMoves = [
  {
    id: "role-whisper",
    label: "Hidden role",
    title: "Product trust lead before the role is posted",
    targetId: "priya",
    connector: "Maxime Durand",
    trigger: "Maxime heard a trust-heavy AI product team will open a senior lead search next week.",
    intent: "You are trying to meet senior AI product and design systems operators.",
    reason:
      "The opportunity is private right now. Gigi can route a reference-safe intro before it turns into a public job post.",
    move: "Ask Maxime for a double opt-in intro to Priya and attach the private product-review context.",
    window: "48h",
    score: 96,
    capital: 7,
    listIndex: 3,
    signals: ["ex-colleague whisper", "hiring intent", "close-circle proof"],
  },
  {
    id: "round-mentor",
    label: "Round path",
    title: "Mentor intro that can change the seed round",
    targetId: "maya",
    connector: "Nina Patel",
    trigger: "Nina has a fresh partner meeting with Maya and your seed round brief matches her current thesis.",
    intent: "You need founder-friendly VCs for an AI infrastructure round in San Francisco.",
    reason:
      "The round is easier to move while the investor context is fresh and before the ask becomes a cold pitch.",
    move: "Prepare a tight forwardable fundraising note and ask Nina to validate the angle first.",
    window: "24h",
    score: 93,
    capital: 8,
    listIndex: 4,
    signals: ["mentor path", "fundraising intent", "fresh calendar context"],
  },
  {
    id: "cap-table",
    label: "Cap table",
    title: "Friend raising before the room knows",
    targetId: "adrian",
    connector: "Clara Gold",
    trigger: "Clara heard Adrian is opening a small operator allocation before the public fundraise.",
    intent: "You want early access to technical founders and private investor rooms.",
    reason:
      "Gigi sees the private context before it appears in public channels, so the useful move is a scoped ask, not a blast.",
    move: "Build a private smart link with the three strongest operator-investor paths, then request one intro.",
    window: "72h",
    score: 89,
    capital: 6,
    listIndex: 0,
    signals: ["friend raising", "cap table edge", "founder room"],
  },
  {
    id: "hot-deck",
    label: "Hot deck",
    title: "A deck moving before Twitter knows",
    targetId: "david",
    connector: "Clara Gold",
    trigger: "David is curating a founder dinner where a technical deck is circulating quietly.",
    intent: "You want rooms where technical founders and seed investors trade useful context early.",
    reason:
      "The deck is only useful if the ask stays narrow and arrives through the person already trusted in the room.",
    move: "Ask Clara to approve a dinner-specific smart list before any intro request leaves the local queue.",
    window: "Tonight",
    score: 84,
    capital: 5,
    listIndex: 2,
    signals: ["private dinner", "early deck", "trusted room"],
  },
];

const reconnectPlans = {
  adrian: {
    lastTouch: "Met through Clara yesterday",
    opener: "Saw the robotics infra angle and thought of the seed investor list we discussed.",
    reason: "Follow while Clara still has fresh context from the meeting.",
    nextStep: "Send a short check-in and ask whether one investor intro would be useful this week.",
    channel: "Gigi DM",
    capital: 4,
    listIndex: 4,
  },
  maya: {
    lastTouch: "Nina had a partner meeting with Maya on Tuesday",
    opener: "Your AI productivity thesis came up while I was mapping seed infrastructure paths.",
    reason: "Reconnect before the fundraise ask becomes a generic pitch.",
    nextStep: "Ask Nina to validate the angle, then send a crisp founder-reference note.",
    channel: "Forwardable note",
    capital: 5,
    listIndex: 1,
  },
  lucas: {
    lastTouch: "Shared a dinner table with Clara last week",
    opener: "I remembered your city launch playbook while mapping senior operator hires.",
    reason: "The hiring ask is concrete enough to make the reconnect useful.",
    nextStep: "Ask Lucas for one operator he trusts and offer a scoped Gigi list back.",
    channel: "DM draft",
    capital: 3,
    listIndex: 3,
  },
  priya: {
    lastTouch: "Maxime worked with Priya on a launch review",
    opener: "Your trust-surface critique came up again while preparing an AI product review.",
    reason: "Reconnect around a precise product question, not a vague coffee.",
    nextStep: "Send the product-review angle and ask whether she is open to a 20-minute working session.",
    channel: "Private note",
    capital: 4,
    listIndex: 5,
  },
  david: {
    lastTouch: "Clara is building a dinner list with David",
    opener: "Your founder dinner density question is exactly what this private circle is solving.",
    reason: "Reconnect while the table is still being curated.",
    nextStep: "Share a narrow dinner smart link and ask David which two people should be in the room.",
    channel: "Smart link",
    capital: 4,
    listIndex: 2,
  },
  sofia: {
    lastTouch: "Amelie met Sofia twice this month",
    opener: "Your AI recruiting loops came up while mapping trusted European operator paths.",
    reason: "Reconnect through Amelie while the talent context is still current.",
    nextStep: "Ask for one senior recruiter benchmark before requesting any intro.",
    channel: "Connector note",
    capital: 3,
    listIndex: 3,
  },
};

const accessRequests = [
  {
    id: "claire-maya",
    asker: "Claire Moreau",
    askerRole: "Founder, Lumen AI",
    ask: "Needs a founder-friendly VC for an AI infra seed round.",
    targetId: "maya",
    connector: "Nina Patel",
    requesterAgent: "Claire's agent",
    connectorAgent: "Nina's agent",
    recipientAgent: "Maya's agent",
    route: ["Claire Moreau", "You", "Nina Patel", "Maya Chen"],
    reason: "Nina has fresh investor context, Maya's thesis matches the round, and the ask is specific enough for a double opt-in.",
    privateContext: "Claire gets fundraising relevance and a forwardable note. Maya only sees the seed-round angle after Nina approves.",
    policy: "Connector approval + recipient opt-in",
    status: "Needs agent check",
    score: 94,
    capital: 8,
  },
  {
    id: "julien-priya",
    asker: "Julien Renard",
    askerRole: "Chief of Staff, Northstar",
    ask: "Needs a trust-heavy product reviewer before a senior AI product sprint.",
    targetId: "priya",
    connector: "Maxime Durand",
    requesterAgent: "Julien's agent",
    connectorAgent: "Maxime's agent",
    recipientAgent: "Priya's agent",
    route: ["Julien Renard", "You", "Maxime Durand", "Priya Raman"],
    reason: "Maxime worked with Priya recently and the product-review context is narrow enough to avoid a vague coffee ask.",
    privateContext: "Julien sees the review scope. Priya sees only the product-trust question and can reject before any context expands.",
    policy: "Reference-safe path + recipient opt-in",
    status: "Ready to check",
    score: 91,
    capital: 7,
  },
  {
    id: "david-adrian",
    asker: "David Kim",
    askerRole: "Founder dinner host",
    ask: "Needs one technical founder for a private SF dinner.",
    targetId: "adrian",
    connector: "Clara Gold",
    requesterAgent: "David's agent",
    connectorAgent: "Clara's agent",
    recipientAgent: "Adrian's agent",
    route: ["David Kim", "You", "Clara Gold", "Adrian Vega"],
    reason: "Clara met Adrian yesterday, the dinner context is narrow, and the full guest list stays hidden.",
    privateContext: "David gets a small smart-link card. Adrian sees the dinner theme, not the whole attendee graph.",
    policy: "Scoped list + connector approval",
    status: "Privacy review",
    score: 87,
    capital: 6,
  },
];

const state = {
  view: "feed",
  query: "AI founders in SF who raised with Tier 1 VCs",
  filter: "all",
  selectedPersonId: "adrian",
  answer: "",
  callStarted: false,
  callExtracted: false,
  callActivated: false,
  activeRadarId: "trust-review",
  scannedRadar: [],
  activatedRadar: [],
  activeStrengthId: "maxime-priya-strength",
  analyzedStrength: [],
  routedStrength: [],
  scoreQuery: "",
  activeScoreId: "clara",
  scoreRevealed: false,
  activeGoalId: "raise-seed",
  activeAskId: "seed-angels",
  askBrief: "Do you know seed angels or founder-friendly VCs for an AI infra round in SF?",
  sharedAsks: [],
  activeReferenceId: "priya-product",
  referenceBrief: "Can anyone vouch for Priya before I bring her into a trust-heavy product review?",
  referenceRequests: [],
  activeBriefingId: "sequoia-pitch",
  generatedBriefings: [],
  sentBriefings: [],
  activeDossierId: "maya-investor-dossier",
  loadedDossiers: [],
  builtDossiers: [],
  sentDossiers: [],
  activeMatchId: "buckhouse-belsky",
  revealedMatches: [],
  handledMatches: [],
  activeNudgeId: "clara-scott",
  builtNudges: [],
  sentNudges: [],
  activeAccessId: "claire-maya",
  checkedAccess: [],
  approvedAccess: [],
  activeMessageThreadId: "andrea-seed",
  builtMessageLinks: [],
  sentMessageLinks: [],
  activeEmailId: "julien-priya-email",
  generatedEmailDrafts: [],
  approvedEmailDrafts: [],
  sentEmailDrafts: [],
  goalBrief:
    "I am raising a seed round for an AI infrastructure company and need warm investor paths in San Francisco.",
  connected: {
    calendar: false,
    gmail: false,
    contacts: false,
    publicProfile: false,
  },
  activeSetupSourceId: "calendar",
  setupMapped: false,
  activeMoveId: "role-whisper",
  scannedMoves: [],
  movedMoves: [],
  reconnectDrafts: [],
  sentReconnects: [],
  previewListIndex: 0,
  previewLens: "founder",
  shareListIndex: 0,
  shareLens: "founder",
  shareUnlocked: false,
  shareRequested: [],
  graphRefreshes: 0,
  socialCapital: 248,
  activeProfileLens: "fundraising",
  builtDynamicProfiles: [],
  publishedDynamicProfiles: [],
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

function scoreProfileById(id) {
  return scoreProfiles.find((profile) => profile.id === id) ?? scoreProfiles[0];
}

function dynamicProfileLensById(id) {
  return dynamicProfileLenses.find((lens) => lens.id === id) ?? dynamicProfileLenses[0];
}

function messageThreadById(id) {
  return messageThreads.find((thread) => thread.id === id) ?? messageThreads[0];
}

function introEmailById(id) {
  return introEmailDrafts.find((draft) => draft.id === id) ?? introEmailDrafts[0];
}

function matchReportById(id) {
  return matchReports.find((report) => report.id === id) ?? matchReports[0];
}

function connectorNudgeById(id) {
  return connectorNudges.find((nudge) => nudge.id === id) ?? connectorNudges[0];
}

function radarById(id) {
  return radarPredictions.find((prediction) => prediction.id === id) ?? radarPredictions[0];
}

function relationshipAuditById(id) {
  return relationshipAudits.find((audit) => audit.id === id) ?? relationshipAudits[0];
}

function accessRequestById(id) {
  return accessRequests.find((request) => request.id === id) ?? accessRequests[0];
}

function setupSourceById(id) {
  return setupSources.find((source) => source.id === id) ?? setupSources[0];
}

function opportunityMoveById(id) {
  return opportunityMoves.find((move) => move.id === id) ?? opportunityMoves[0];
}

function goalById(id) {
  return goals.find((goal) => goal.id === id) ?? goals[0];
}

function askById(id) {
  return networkAsks.find((ask) => ask.id === id) ?? networkAsks[0];
}

function referenceById(id) {
  return referenceChecks.find((check) => check.id === id) ?? referenceChecks[0];
}

function briefingById(id) {
  return meetingBriefings.find((briefing) => briefing.id === id) ?? meetingBriefings[0];
}

function profileDossierById(id) {
  return profileDossiers.find((dossier) => dossier.id === id) ?? profileDossiers[0];
}

function referenceRequestKey(checkId, candidateName) {
  return `${checkId}:${candidateName}`;
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
  let activeNavItem = null;
  document.querySelectorAll("[data-product-screen]").forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.productScreen === view);
  });
  document.querySelectorAll(".product-nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.productView === view);
    if (item.dataset.productView === view) {
      activeNavItem = item;
    }
  });
  if (activeNavItem && window.matchMedia("(max-width: 960px)").matches) {
    activeNavItem.scrollIntoView({ block: "nearest", inline: "start" });
  }
  const title = document.querySelector("[data-product-title]");
  if (title) {
    const titles = {
      feed: "Private circle",
      radar: "Proactive radar",
      call: "Intake call",
      setup: "Trust setup",
      moves: "Opportunity moves",
      score: "Social Capital Score",
      matches: "Match reports",
      nudges: "Connector nudges",
      profile: "Social Capital",
      signals: "Close circle signals",
      references: "Reference checks",
      context: "Context engine",
      briefings: "Meeting briefings",
      goals: "Goals",
      asks: "Network asks",
      search: "Network search",
      dossier: "Profile dossier",
      graph: "Trust graph",
      strength: "Relationship strength",
      access: "Permissioned access",
      lists: "Smart links",
      email: "Warm intro email",
      messages: "Message delivery",
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

function renderSetup() {
  const sourceList = document.querySelector("[data-setup-source-list]");
  const audit = document.querySelector("[data-setup-audit]");
  const results = document.querySelector("[data-setup-results]");
  if (!sourceList || !audit || !results) return;

  const activeSource = setupSourceById(state.activeSetupSourceId);
  const connectedSources = setupSources.filter((source) => state.connected[source.id]);
  const connectedCount = connectedSources.length;
  const progressDegrees = Math.round((connectedCount / setupSources.length) * 360);
  const setupReady = state.setupMapped || connectedCount >= 3;

  sourceList.innerHTML = setupSources
    .map((source) => {
      const connected = Boolean(state.connected[source.id]);
      const selected = source.id === activeSource.id;
      return `
        <button class="setup-source-card ${connected ? "is-connected" : ""} ${selected ? "is-selected" : ""}" type="button" data-setup-source="${source.id}">
          <span>${escapeHtml(source.label)}</span>
          <strong>${escapeHtml(connected ? source.metric : "Connect source")}</strong>
          <p>${escapeHtml(source.detail)}</p>
          <small>${escapeHtml(connected ? "Connected" : source.role)}</small>
        </button>
      `;
    })
    .join("");

  audit.innerHTML = `
    <span class="product-kicker">Source map</span>
    <div class="setup-progress" style="--setup-progress: ${progressDegrees}deg">
      <div>
        <strong>${connectedCount}/${setupSources.length}</strong>
        <span>${escapeHtml(setupReady ? "ready" : "sources")}</span>
      </div>
    </div>
    <h3>${escapeHtml(setupReady ? "Gigi has enough context to act." : "Gigi needs permission before it can be useful.")}</h3>
    <p>${escapeHtml(activeSource.detail)}</p>
    <div class="path-box">
      <strong>${escapeHtml(activeSource.unlock)}</strong>
      <p>${escapeHtml(activeSource.privacy)}</p>
    </div>
    <div class="goal-score">
      <div><strong>${connectedSources.reduce((sum, source) => sum + source.capital, 0)}</strong><span>setup capital</span></div>
      <div><strong>${state.setupMapped ? "Mapped" : "Draft"}</strong><span>graph state</span></div>
      <div><strong>${contextSignals.length}</strong><span>signals</span></div>
    </div>
  `;

  const resultCards = [
    {
      label: "Relationship truth",
      value: state.connected.calendar ? "Live" : "Pending",
      detail: state.connected.calendar
        ? "Recent meetings can now power warm paths and connector nudges."
        : "Calendar is the first source Gigi needs to know who you actually meet.",
    },
    {
      label: "Intent router",
      value: state.connected.gmail ? "Live" : "Draft",
      detail: state.connected.gmail
        ? "Incoming asks can become scoped lists, private links, and intro drafts."
        : "Inbox context stays locked until you connect Gmail or run the source map.",
    },
    {
      label: "Action boundary",
      value: setupReady ? "Approval-gated" : "Waiting",
      detail: setupReady
        ? "Gigi can recommend, draft, and queue locally, but sharing still requires explicit approval."
        : "Connect at least three sources before recommendations are treated as ready.",
    },
  ];

  results.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(setupReady ? "Agent ready" : "Permission layer")}</span>
      <strong>${escapeHtml(setupReady ? "Context live" : `${connectedCount} connected`)}</strong>
    </div>
    <div class="setup-results-grid">
      ${resultCards
        .map(
          (card) => `
            <article>
              <span>${escapeHtml(card.label)}</span>
              <h4>${escapeHtml(card.value)}</h4>
              <p>${escapeHtml(card.detail)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMoves() {
  const list = document.querySelector("[data-move-list]");
  const preview = document.querySelector("[data-move-preview]");
  const status = document.querySelector("[data-move-status]");
  if (!list || !preview || !status) return;

  const move = opportunityMoveById(state.activeMoveId);
  const person = personById(move.targetId);
  const scanned = state.scannedMoves.includes(move.id);
  const moved = state.movedMoves.includes(move.id);
  const scannedCount = state.scannedMoves.length;
  const movedCount = state.movedMoves.length;

  list.innerHTML = opportunityMoves
    .map((item) => {
      const itemPerson = personById(item.targetId);
      const itemScanned = state.scannedMoves.includes(item.id);
      const itemMoved = state.movedMoves.includes(item.id);
      return `
        <button class="move-list-item ${item.id === move.id ? "is-selected" : ""} ${itemMoved ? "is-moved" : ""}" type="button" data-select-move="${item.id}">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(itemMoved ? "Moved" : itemScanned ? `${item.score}% fit · ${item.window}` : `${itemPerson.connector} · hidden`)}</small>
        </button>
      `;
    })
    .join("");

  preview.innerHTML = `
    <span class="product-kicker">Gigi move</span>
    <div class="move-preview-header">
      ${avatar(person.name)}
      <div>
        <h3>${escapeHtml(scanned ? person.name : "Opportunity locked")}</h3>
        <p>${escapeHtml(scanned ? person.role : "Run the scan to reveal the person and the timing window.")}</p>
      </div>
      <strong>${escapeHtml(scanned ? `${move.score}%` : "--")}</strong>
    </div>
    <div class="move-brief ${moved ? "is-moved" : ""}">
      <span>${escapeHtml(scanned ? "Why now" : "Hidden signal")}</span>
      <p>${escapeHtml(scanned ? move.reason : "Gigi is waiting for permission to combine private context with your active intent.")}</p>
    </div>
    <div class="move-brief">
      <span>${escapeHtml(moved ? "Queued move" : scanned ? "Suggested move" : "Next step")}</span>
      <p>${escapeHtml(moved ? `Queued locally through ${move.connector}. Nothing external was sent.` : scanned ? move.move : "Scan hidden opportunities first.")}</p>
    </div>
    <div class="tag-row">
      ${move.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
    </div>
  `;

  status.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(moved ? "Opportunity moved" : scanned ? "Opportunity detected" : "Intent scan")}</span>
      <strong>${escapeHtml(moved ? "Queued" : scanned ? `${move.window} window` : "Waiting")}</strong>
    </div>
    <div class="move-status-grid">
      <article>
        <span>Intent match</span>
        <h4>${escapeHtml(scanned ? move.intent : "Connect intent to private context")}</h4>
        <p>${escapeHtml(scanned ? move.trigger : "Gigi checks goals, asks, calendar context, and close-circle signals.")}</p>
      </article>
      <article>
        <span>Safe action</span>
        <h4>${escapeHtml(moved ? "Waiting opt-in" : scanned ? "Approval required" : "Not scanned")}</h4>
        <p>${escapeHtml(moved ? "The move sits in Warm introductions until you approve it." : "The local prototype drafts the move without contacting anyone.")}</p>
      </article>
      <article>
        <span>Pipeline</span>
        <h4>${escapeHtml(`${scannedCount}/${opportunityMoves.length} detected · ${movedCount} moved`)}</h4>
        <p>${escapeHtml(`Top path: ${person.path}. Window: ${move.window}.`)}</p>
      </article>
    </div>
  `;
}

function renderScore() {
  const input = document.querySelector("[data-score-query]");
  const suggestions = document.querySelector("[data-score-suggestions]");
  const meter = document.querySelector("[data-score-meter]");
  const activity = document.querySelector("[data-score-activity]");
  if (!input || !suggestions || !meter || !activity) return;

  input.value = state.scoreQuery;

  const normalizedQuery = state.scoreQuery.trim().toLowerCase();
  const profile =
    scoreProfiles.find((item) => item.name.toLowerCase().includes(normalizedQuery) && normalizedQuery) ??
    scoreProfileById(state.activeScoreId);
  const revealed = state.scoreRevealed;
  const meterValue = Math.min(profile.score / 1400, 1);
  const meterDegrees = Math.round(meterValue * 360);

  suggestions.innerHTML = scoreProfiles
    .map(
      (item) => `
        <button class="score-suggestion ${item.id === profile.id ? "is-selected" : ""}" type="button" data-select-score-profile="${item.id}">
          <span>${escapeHtml(item.name)}</span>
          <strong>${escapeHtml(revealed || item.id === profile.id ? item.rank : "Hidden score")}</strong>
        </button>
      `,
    )
    .join("");

  meter.innerHTML = `
    <span class="product-kicker">Social Capital</span>
    <div class="score-meter" style="--score-progress: ${meterDegrees}deg">
      <div>
        <strong>${escapeHtml(revealed ? profile.score : "???")}</strong>
        <span>${escapeHtml(revealed ? profile.rank : "Reveal locked")}</span>
      </div>
    </div>
    <h3>${escapeHtml(revealed ? profile.name : "Search the real network.")}</h3>
    <p>${escapeHtml(revealed ? profile.summary : "Gigi uses trusted context, calendar relationships, and private reputation signals to calculate usable capital.")}</p>
    <div class="score-mini-grid">
      ${profile.breakdown
        .map(
          (item) => `
            <article>
              <strong>${escapeHtml(revealed ? item.value : "...")}</strong>
              <span>${escapeHtml(item.label)}</span>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  activity.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(revealed ? "Network points unlocked" : "Waiting for reveal")}</span>
      <strong>${escapeHtml(revealed ? `+${profile.delta} points` : "Private")}</strong>
    </div>
    <div class="score-activity-grid">
      <article class="score-notification">
        <div>${avatar(profile.addedContact)}</div>
        <div>
          <span>${escapeHtml(revealed ? `${profile.addedContact} added to contacts` : "Connect your real graph")}</span>
          <h4>${escapeHtml(revealed ? `+${profile.delta} network points` : "Reveal your score to see compounding context")}</h4>
          <p>${escapeHtml(revealed ? `${profile.name}'s Social Capital score now includes this trusted edge.` : "Your score stays private until you choose to reveal it in this local prototype.")}</p>
        </div>
      </article>
      ${profile.signals
        .map(
          (signal) => `
            <article>
              <span>Signal</span>
              <strong>${escapeHtml(signal)}</strong>
              <p>${escapeHtml(revealed ? "Usable for warm paths and smart links." : "Locked until reveal.")}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMatches() {
  const reportContainer = document.querySelector("[data-match-report]");
  const panel = document.querySelector("[data-match-panel]");
  const evidence = document.querySelector("[data-match-evidence]");
  if (!reportContainer || !panel || !evidence) return;

  const report = matchReportById(state.activeMatchId);
  const revealed = state.revealedMatches.includes(report.id);
  const handled = state.handledMatches.includes(report.id);

  panel.innerHTML = `
    <span class="product-kicker">Pre-loaded people</span>
    <h3>Gigi finds the match before the ask.</h3>
    <div class="match-selector">
      ${matchReports
        .map((item) => {
          const itemRevealed = state.revealedMatches.includes(item.id);
          const itemHandled = state.handledMatches.includes(item.id);
          return `
            <button class="match-selector-item ${item.id === report.id ? "is-selected" : ""}" type="button" data-select-match="${item.id}">
              <span>${escapeHtml(item.fitLabel)}</span>
              <strong>${escapeHtml(item.owner)} + ${escapeHtml(item.match)}</strong>
              <small>${escapeHtml(itemHandled ? "Intro queued" : itemRevealed ? "Report live" : "Research locked")}</small>
            </button>
          `;
        })
        .join("")}
    </div>
    <div class="match-panel-actions">
      <button type="button" data-reveal-match>${revealed ? "Refresh research" : "Reveal research"}</button>
      <button type="button" data-handle-match ${handled ? "disabled" : ""}>${handled ? "Intro queued" : "Ask Gigi to handle intro"}</button>
      <button type="button" data-open-match-intros>Open intro queue</button>
    </div>
  `;

  reportContainer.innerHTML = `
    <div class="match-report-header">
      <div>
        <span class="product-kicker">${escapeHtml(revealed ? "Deep research unlocked" : "Private match report")}</span>
        <h3>${escapeHtml(revealed ? report.headline : "Gigi found someone you should probably meet.")}</h3>
      </div>
      <div class="match-score-orb">
        <strong>${escapeHtml(revealed ? report.score : "?")}</strong>
        <span>${escapeHtml(revealed ? "fit score" : "locked")}</span>
      </div>
    </div>
    <div class="match-pair">
      <article>
        ${avatar(report.owner)}
        <div>
          <span>Profile</span>
          <h4>${escapeHtml(report.owner)}</h4>
          <p>${escapeHtml(report.ownerRole)}</p>
        </div>
      </article>
      <i></i>
      <article>
        ${avatar(report.match)}
        <div>
          <span>Match</span>
          <h4>${escapeHtml(revealed ? report.match : "Hidden until reveal")}</h4>
          <p>${escapeHtml(revealed ? report.matchRole : "Gigi keeps the proposed person private until the report is opened.")}</p>
        </div>
      </article>
    </div>
    <div class="match-axis-grid">
      ${report.axes
        .map(
          (axis) => `
            <article>
              <span>${escapeHtml(axis.label)}</span>
              <strong>${escapeHtml(revealed ? axis.value : "--")}</strong>
              <p>${escapeHtml(revealed ? axis.detail : "Signal locked until you reveal the report.")}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;

  evidence.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(handled ? "Intro handling" : revealed ? "Research report" : "Waiting for approval")}</span>
      <strong>${escapeHtml(handled ? "Queued" : revealed ? "Unlocked" : "Locked")}</strong>
    </div>
    <div class="match-evidence-grid">
      <article>
        <span>Compliments</span>
        ${report.compliments
          .map((item) => `<p>${escapeHtml(revealed ? item : "Private compliment locked.")}</p>`)
          .join("")}
      </article>
      <article>
        <span>Deep research</span>
        ${report.research
          .map((item) => `<p>${escapeHtml(revealed ? item : "Research source locked.")}</p>`)
          .join("")}
      </article>
      <article>
        <span>Next move</span>
        <h4>${escapeHtml(handled ? "Gigi is handling the double opt-in." : revealed ? report.outcome : "Reveal before asking Gigi to move.")}</h4>
        <p>${escapeHtml(handled ? `Intro queued via ${report.connector}. Nothing external was sent from this local prototype.` : "The product keeps the recommendation private until the user approves the next step.")}</p>
      </article>
    </div>
  `;
}

function renderNudges() {
  const list = document.querySelector("[data-nudge-list]");
  const preview = document.querySelector("[data-nudge-preview]");
  const status = document.querySelector("[data-nudge-status]");
  if (!list || !preview || !status) return;

  const nudge = connectorNudgeById(state.activeNudgeId);
  const built = state.builtNudges.includes(nudge.id);
  const sent = state.sentNudges.includes(nudge.id);

  list.innerHTML = connectorNudges
    .map((item) => {
      const itemBuilt = state.builtNudges.includes(item.id);
      const itemSent = state.sentNudges.includes(item.id);
      return `
        <button class="nudge-list-item ${item.id === nudge.id ? "is-selected" : ""}" type="button" data-select-nudge="${item.id}">
          <span>${escapeHtml(item.connector)}</span>
          <strong>${escapeHtml(`${item.seeker} -> ${item.target}`)}</strong>
          <small>${escapeHtml(itemSent ? "Nudge sent" : itemBuilt ? "Prompt ready" : item.timing)}</small>
        </button>
      `;
    })
    .join("");

  preview.innerHTML = `
    <span class="product-kicker">Gigi to connector</span>
    <div class="nudge-preview-header">
      ${avatar(nudge.connector)}
      <div>
        <h3>${escapeHtml(nudge.connector)}</h3>
        <p>${escapeHtml(nudge.trigger)}</p>
      </div>
      <strong>${nudge.confidence}%</strong>
    </div>
    <div class="nudge-message ${sent ? "is-sent" : ""}">
      <span>${escapeHtml(built ? "Prompt draft" : "Waiting for approval")}</span>
      <p>${escapeHtml(built ? nudge.draft : "Gigi waits until the user approves this connector prompt.")}</p>
    </div>
    <div class="nudge-response">
      <span>${escapeHtml(sent ? "Connector response" : "Response locked")}</span>
      <p>${escapeHtml(sent ? nudge.response : "No connector sees anything in this local prototype.")}</p>
    </div>
    <div class="tag-row">
      ${nudge.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
    </div>
  `;

  status.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(sent ? "Connector accepted" : built ? "Prompt ready" : "Meeting signal")}</span>
      <strong>${escapeHtml(sent ? "Intro queued" : built ? "Draft" : "Detected")}</strong>
    </div>
    <div class="nudge-status-grid">
      <article>
        <span>Fresh context</span>
        <h4>${escapeHtml(nudge.trigger)}</h4>
        <p>${escapeHtml("Calendar-derived timing makes the ask feel natural instead of cold.")}</p>
      </article>
      <article>
        <span>Intent</span>
        <h4>${escapeHtml(nudge.intent)}</h4>
        <p>${escapeHtml(`${nudge.target} is relevant because the ask and recent connector context overlap.`)}</p>
      </article>
      <article>
        <span>Safety</span>
        <h4>${escapeHtml(sent ? "Queued locally" : "Approval required")}</h4>
        <p>${escapeHtml("No external message is sent. Gigi only adds a local double opt-in intro after approval.")}</p>
      </article>
    </div>
  `;
}

function renderProfile() {
  const score = document.querySelector("[data-profile-score]");
  const breakdown = document.querySelector("[data-profile-breakdown]");
  const dynamicProfile = document.querySelector("[data-dynamic-profile]");
  const signals = document.querySelector("[data-profile-signals]");
  if (!score || !breakdown || !dynamicProfile || !signals) return;

  score.textContent = String(state.socialCapital);

  const lens = dynamicProfileLensById(state.activeProfileLens);
  const built = state.builtDynamicProfiles.includes(lens.id);
  const published = state.publishedDynamicProfiles.includes(lens.id);

  breakdown.innerHTML = lens.breakdown
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

  dynamicProfile.innerHTML = `
    <span class="product-kicker">Dynamic profile</span>
    <div class="dynamic-profile-tabs" aria-label="Profile intent">
      ${dynamicProfileLenses
        .map(
          (item) => `
            <button class="${item.id === lens.id ? "is-selected" : ""}" type="button" data-profile-lens="${item.id}">
              ${escapeHtml(item.label)}
            </button>
          `,
        )
        .join("")}
    </div>
    <article class="dynamic-profile-preview ${published ? "is-published" : built ? "is-built" : ""}">
      <div>
        <span>${escapeHtml(lens.title)}</span>
        <h4>${escapeHtml(lens.headline)}</h4>
        <p>${escapeHtml(built || published ? lens.visibleProof : "Build the profile lens before Gigi decides which proof should lead for this intent.")}</p>
      </div>
      <div class="dynamic-profile-state">
        <strong>${escapeHtml(published ? "Live" : built ? "Ready" : "Draft")}</strong>
        <span>${escapeHtml(lens.graphDelta)}</span>
      </div>
    </article>
    <div class="dynamic-profile-grid">
      <article>
        <span>Intent</span>
        <strong>${escapeHtml(lens.intent)}</strong>
        <p>${escapeHtml(`Audience: ${lens.audience}.`)}</p>
      </article>
      <article>
        <span>Visible proof</span>
        <strong>${escapeHtml(built || published ? lens.receipts[0] : "Waiting")}</strong>
        <p>${escapeHtml(built || published ? lens.receipts.slice(1).join(" · ") : "Gigi has not assembled this intent lens yet.")}</p>
      </article>
      <article>
        <span>Private boundary</span>
        <strong>${escapeHtml(published ? "Scoped and live" : built ? "Ready to publish" : "Hidden by default")}</strong>
        <p>${escapeHtml(lens.hiddenProof)}</p>
      </article>
    </div>
    <div class="dynamic-profile-actions">
      <button type="button" data-build-dynamic-profile ${built || published ? "disabled" : ""}>
        ${escapeHtml(built || published ? "Profile built" : "Build dynamic profile")}
      </button>
      <button type="button" data-publish-dynamic-profile ${(!built && !published) || published ? "disabled" : ""}>
        ${escapeHtml(published ? "Published to graph" : "Publish to graph")}
      </button>
      <button type="button" data-open-dynamic-profile-link ${published ? "" : "disabled"}>
        Open smart link
      </button>
    </div>
  `;

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

function renderBriefings() {
  const agenda = document.querySelector("[data-briefing-agenda]");
  const card = document.querySelector("[data-briefing-card]");
  const dossier = document.querySelector("[data-briefing-dossier]");
  if (!agenda || !card || !dossier) return;

  const briefing = briefingById(state.activeBriefingId);
  const person = personById(briefing.personId);
  const generated = state.generatedBriefings.includes(briefing.id);
  const sent = state.sentBriefings.includes(briefing.id);
  const generateButton = document.querySelector("[data-generate-briefing]");
  const sendButton = document.querySelector("[data-send-briefing]");
  const signals = briefing.signalIds
    .map((id) => contextSignals.find((signal) => signal.id === id))
    .filter(Boolean);

  if (generateButton) {
    generateButton.textContent = generated || sent ? "Briefing ready" : "Generate briefing";
    generateButton.disabled = generated || sent;
  }
  if (sendButton) {
    sendButton.textContent = sent ? "Delivered to DM" : "Send to DM";
    sendButton.disabled = (!generated && !sent) || sent;
  }

  agenda.innerHTML = meetingBriefings
    .map((item) => {
      const itemPerson = personById(item.personId);
      const itemGenerated = state.generatedBriefings.includes(item.id);
      const itemSent = state.sentBriefings.includes(item.id);
      return `
        <button class="briefing-agenda-item ${item.id === briefing.id ? "is-selected" : ""}" type="button" data-select-briefing="${item.id}">
          <span>${escapeHtml(item.time)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <small>${escapeHtml(itemSent ? "Sent" : itemGenerated ? "Generated" : itemPerson.connector)}</small>
        </button>
      `;
    })
    .join("");

  card.innerHTML = `
    <span class="product-kicker">Briefing status</span>
    <h3>${escapeHtml(sent ? "DM delivered." : generated ? "Briefing ready." : "Calendar context queued.")}</h3>
    <p>${escapeHtml(briefing.objective)}</p>
    <div class="goal-score">
      <div><strong>${signals.length}</strong><span>signals</span></div>
      <div><strong>${person.trust}%</strong><span>trust</span></div>
      <div><strong>${sent ? "Sent" : generated ? "Ready" : "Draft"}</strong><span>DM state</span></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(person.path)}</strong>
      <p>${escapeHtml(person.lastSignal)}. Gigi keeps the private angle local until you send it.</p>
    </div>
    <button type="button" data-open-briefing-person="${person.id}">Open person context</button>
  `;

  dossier.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(briefing.room)}</span>
      <strong>${escapeHtml(sent ? "Delivered briefing" : generated ? "Ready to send" : "Not generated")}</strong>
    </div>
    <div class="briefing-dossier-grid">
      <article class="briefing-dossier-card is-primary">
        <span>Opening line</span>
        <h4>${escapeHtml(briefing.opener)}</h4>
        <p>${escapeHtml(generated ? "Use this in the first 60 seconds, then pivot to the ask." : "Generate the briefing to unlock the live meeting angle.")}</p>
      </article>
      <article class="briefing-dossier-card">
        <span>Pitch angle</span>
        <h4>${escapeHtml(generated ? briefing.pitchAngle : "Waiting on calendar context")}</h4>
        <p>${escapeHtml(briefing.objective)}</p>
      </article>
      <article class="briefing-dossier-card">
        <span>Common ground</span>
        <div class="tag-row">${briefing.commonGround.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        <p>${escapeHtml(briefing.sensitive)}</p>
      </article>
      <article class="briefing-dossier-card is-questions">
        <span>Smart questions</span>
        ${briefing.questions.map((question) => `<p>${escapeHtml(question)}</p>`).join("")}
      </article>
    </div>
  `;
}

function renderDossier() {
  const list = document.querySelector("[data-dossier-list]");
  const panel = document.querySelector("[data-dossier-panel]");
  const evidence = document.querySelector("[data-dossier-evidence]");
  if (!list || !panel || !evidence) return;

  const active = profileDossierById(state.activeDossierId);
  const person = personById(active.targetId);
  const briefing = briefingById(active.briefingId);
  const loaded = state.loadedDossiers.includes(active.id);
  const built = state.builtDossiers.includes(active.id);
  const sent = state.sentDossiers.includes(active.id);
  const loadButton = document.querySelector("[data-load-dossier]");
  const buildButton = document.querySelector("[data-build-dossier]");
  const sendButton = document.querySelector("[data-send-dossier]");

  if (loadButton) {
    loadButton.textContent = loaded || built || sent ? "Profile loaded" : "Load profile";
    loadButton.disabled = loaded || built || sent;
  }
  if (buildButton) {
    buildButton.textContent = built || sent ? "Briefing ready" : "Build briefing";
    buildButton.disabled = (!loaded && !built && !sent) || built || sent;
  }
  if (sendButton) {
    sendButton.textContent = sent ? "Open Briefs" : "Send to Briefs";
    sendButton.disabled = !built && !sent;
  }

  list.innerHTML = profileDossiers
    .map((dossier) => {
      const target = personById(dossier.targetId);
      const dossierLoaded = state.loadedDossiers.includes(dossier.id);
      const dossierBuilt = state.builtDossiers.includes(dossier.id);
      const dossierSent = state.sentDossiers.includes(dossier.id);
      return `
        <button class="dossier-card ${dossier.id === active.id ? "is-selected" : ""} ${dossierSent ? "is-sent" : dossierBuilt ? "is-built" : dossierLoaded ? "is-loaded" : ""}" type="button" data-select-dossier="${dossier.id}">
          <span>${escapeHtml(dossier.label)}</span>
          <strong>${escapeHtml(target.name)}</strong>
          <small>${escapeHtml(dossierSent ? "Sent to Briefs" : dossierBuilt ? "Briefing ready" : dossierLoaded ? `${dossier.score}% profile` : `via ${dossier.connector}`)}</small>
        </button>
      `;
    })
    .join("");

  panel.innerHTML = loaded || built || sent
    ? `
      <span class="product-kicker">Person dossier</span>
      <div class="dossier-person">
        ${avatar(person.name)}
        <div>
          <h3>${escapeHtml(person.name)}</h3>
          <p>${escapeHtml(person.role)} · ${escapeHtml(person.location)}</p>
        </div>
        <strong>${active.score}%</strong>
      </div>
      <div class="dossier-note ${built || sent ? "is-live" : ""}">
        <span>${escapeHtml(built || sent ? "Opening line" : "Profile loaded")}</span>
        <p>${escapeHtml(active.opener)}</p>
      </div>
      <div class="dossier-note">
        <span>Why now</span>
        <p>${escapeHtml(active.whyNow)}</p>
      </div>
      <div class="dossier-note">
        <span>${escapeHtml(sent ? "Sent to Briefs" : built ? "Briefing ready" : "Build next")}</span>
        <p>${escapeHtml(sent ? `${briefing.title} is now the active delivered briefing.` : built ? active.angle : "Build the briefing to turn this profile into a meeting-ready opener, angle, and questions.")}</p>
      </div>
      <div class="tag-row">
        ${active.commonGround.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    `
    : `
      <span class="product-kicker">Profile locked</span>
      <h3>Profile hidden until lookup.</h3>
      <p>Choose a person and load the dossier before Gigi combines public profile context with private relationship memory.</p>
      <div class="dossier-locked">
        <strong>${escapeHtml(person.name)}</strong>
        <span>${escapeHtml(active.meeting)}</span>
      </div>
      <div class="path-box">
        <strong>${escapeHtml(active.connector)} can open the warm path.</strong>
        <p>Private context, opener, and common ground stay hidden until you run the local lookup.</p>
      </div>
    `;

  evidence.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(sent ? "Briefing delivered" : built ? "Profile turned into brief" : loaded ? "Profile intelligence" : "Lookup waiting")}</span>
      <strong>${escapeHtml(sent ? "Open Briefs" : built ? "Ready" : loaded ? "Loaded" : "Private")}</strong>
    </div>
    <div class="dossier-evidence-grid">
      <article class="${loaded || built || sent ? "is-live" : ""}">
        <span>Profile</span>
        <h4>${escapeHtml(loaded || built || sent ? `${person.name} · ${person.role}` : "Not loaded")}</h4>
        <p>${escapeHtml(loaded || built || sent ? `Sources: ${active.sources.join(", ")}. ${person.lastSignal}.` : "The dossier waits for a local lookup before showing profile intelligence.")}</p>
      </article>
      <article class="${loaded || built || sent ? "is-live" : ""}">
        <span>Common ground</span>
        <h4>${escapeHtml(loaded || built || sent ? active.commonGround.join(" / ") : "Hidden")}</h4>
        <p>${escapeHtml(loaded || built || sent ? active.objective : "Gigi only exposes common ground after the person is looked up.")}</p>
      </article>
      <article class="${sent ? "is-live" : built ? "is-ready" : ""}">
        <span>Briefing</span>
        <h4>${escapeHtml(sent ? "Delivered briefing" : built ? "Meeting brief ready" : "No brief yet")}</h4>
        <p>${escapeHtml(built || sent ? active.privateBoundary : "Build the briefing before any opener, angle, or private boundary is routed to Briefs.")}</p>
      </article>
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

function renderReferences() {
  const inbox = document.querySelector("[data-reference-inbox]");
  const summary = document.querySelector("[data-reference-summary]");
  const candidates = document.querySelector("[data-reference-candidates]");
  const brief = document.querySelector("[data-reference-brief]");
  if (!inbox || !summary || !candidates) return;

  const check = referenceById(state.activeReferenceId);
  const targetPerson = personById(check.targetId);
  const requestedCount = check.candidates.filter((candidate) =>
    state.referenceRequests.includes(referenceRequestKey(check.id, candidate.name)),
  ).length;
  if (brief && brief.value !== state.referenceBrief) {
    brief.value = state.referenceBrief;
  }

  inbox.innerHTML = referenceChecks
    .map(
      (item) => {
        const person = personById(item.targetId);
        return `
          <button class="reference-inbox-item ${item.id === check.id ? "is-selected" : ""}" type="button" data-select-reference="${item.id}">
            <span>${escapeHtml(item.from)}</span>
            <strong>${escapeHtml(person.name)}</strong>
            <small>${escapeHtml(item.status)}</small>
          </button>
        `;
      },
    )
    .join("");

  summary.innerHTML = `
    <span class="product-kicker">Gigi confidence</span>
    <h3>${escapeHtml(requestedCount ? "Reference request live." : "Strong references found.")}</h3>
    <p>${escapeHtml(check.summary)}</p>
    <div class="goal-score">
      <div><strong>${check.candidates.length}</strong><span>vouch paths</span></div>
      <div><strong>${Math.round(check.candidates.reduce((sum, candidate) => sum + candidate.strength, 0) / check.candidates.length)}%</strong><span>avg strength</span></div>
      <div><strong>${requestedCount}</strong><span>requested</span></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(targetPerson.path)}</strong>
      <p>${escapeHtml(targetPerson.lastSignal)}. Gigi keeps each reference scoped to the ask and hides private notes by default.</p>
    </div>
    <div class="reference-actions">
      <button type="button" data-request-top-reference>Request strongest vouch</button>
      <button type="button" data-open-reference-target="${targetPerson.id}">Open target profile</button>
    </div>
  `;

  candidates.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(check.role)}</span>
      <strong>${escapeHtml(check.from)} needs confidence</strong>
    </div>
    <div class="reference-candidate-grid">
      ${check.candidates
        .map((candidate, index) => {
          const key = referenceRequestKey(check.id, candidate.name);
          const requested = state.referenceRequests.includes(key);
          return `
            <article class="reference-candidate-card ${requested ? "is-requested" : ""}">
              <div class="reference-rank">0${index + 1}</div>
              <div class="reference-score">
                <strong>${candidate.strength}%</strong>
                <span>reference strength</span>
              </div>
              <h4>${escapeHtml(candidate.name)}</h4>
              <p>${escapeHtml(candidate.relation)}</p>
              <div class="tag-row">${candidate.evidence.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <div class="path-box">
                <strong>${escapeHtml(targetPerson.name)} · ${escapeHtml(targetPerson.role)}</strong>
                <p>${escapeHtml(candidate.detail)}</p>
              </div>
              <button type="button" data-request-reference="${index}" ${requested ? "disabled" : ""}>
                ${requested ? "Vouch requested" : "Request vouch"}
              </button>
            </article>
          `;
        })
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

function renderRadar() {
  const list = document.querySelector("[data-radar-list]");
  const predictionPanel = document.querySelector("[data-radar-prediction]");
  const evidence = document.querySelector("[data-radar-evidence]");
  if (!list || !predictionPanel || !evidence) return;

  const active = radarById(state.activeRadarId);
  const person = personById(active.targetId);
  const scanned = state.scannedRadar.includes(active.id);
  const activated = state.activatedRadar.includes(active.id);
  const runButton = document.querySelector("[data-run-radar]");
  const activateButton = document.querySelector("[data-activate-radar]");

  if (runButton) {
    runButton.textContent = scanned || activated ? "Radar live" : "Run radar";
    runButton.disabled = scanned || activated;
  }
  if (activateButton) {
    activateButton.textContent = activated ? "Open Access route" : "Activate match";
  }

  list.innerHTML = radarPredictions
    .map((prediction) => {
      const predictionPerson = personById(prediction.targetId);
      const predictionScanned = state.scannedRadar.includes(prediction.id);
      const predictionActivated = state.activatedRadar.includes(prediction.id);
      return `
        <button class="radar-card ${prediction.id === active.id ? "is-selected" : ""} ${predictionActivated ? "is-activated" : predictionScanned ? "is-scanned" : ""}" type="button" data-select-radar="${prediction.id}">
          <span>${escapeHtml(prediction.label)}</span>
          <strong>${escapeHtml(predictionPerson.name)}</strong>
          <small>${escapeHtml(predictionActivated ? "Activated" : predictionScanned ? `${prediction.score}% fit` : prediction.connector)}</small>
        </button>
      `;
    })
    .join("");

  predictionPanel.innerHTML = `
    <span class="product-kicker">Next person</span>
    <div class="radar-person">
      ${avatar(person.name)}
      <div>
        <h3>${escapeHtml(scanned ? person.name : "Hidden until scan")}</h3>
        <p>${escapeHtml(scanned ? person.role : "Run Radar to combine intent, memory, and fresh context.")}</p>
      </div>
      <strong>${escapeHtml(scanned ? `${active.score}%` : "--")}</strong>
    </div>
    <div class="radar-brief ${activated ? "is-activated" : ""}">
      <span>${escapeHtml(scanned ? "Why now" : "Network memory")}</span>
      <p>${escapeHtml(scanned ? active.whyNow : "The next useful person is already in a trusted path, but Gigi has not activated the graph yet.")}</p>
    </div>
    <div class="radar-brief">
      <span>${escapeHtml(activated ? "Activated route" : scanned ? "Suggested action" : "Next step")}</span>
      <p>${escapeHtml(activated ? `Sent to Access through ${active.connector}. Nothing external was sent.` : scanned ? active.action : "Run the proactive search first.")}</p>
    </div>
    <div class="tag-row">
      ${active.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
    </div>
  `;

  evidence.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(activated ? "Match activated" : scanned ? "Prediction ready" : "Proactive radar")}</span>
      <strong>${escapeHtml(activated ? "Sent to Access" : scanned ? "Before you ask" : "Waiting")}</strong>
    </div>
    <div class="radar-evidence-grid">
      <article>
        <span>Need</span>
        <h4>${escapeHtml(scanned ? active.need : "Infer the need before it becomes a query")}</h4>
        <p>${escapeHtml(scanned ? active.hiddenSignal : "Gigi watches goals, asks, calendar memory, and close-circle signals for useful next people.")}</p>
      </article>
      <article>
        <span>Trusted path</span>
        <h4>${escapeHtml(scanned ? `${active.connector} → ${person.name}` : "Private until scan")}</h4>
        <p>${escapeHtml(scanned ? `Connector: ${active.connector}. Strongest action: ${active.action}` : "The local prototype keeps people and private context hidden until Radar runs.")}</p>
      </article>
      <article>
        <span>Safety</span>
        <h4>${escapeHtml(activated ? "Approval route queued" : scanned ? "Access required" : "No action yet")}</h4>
        <p>${escapeHtml(activated ? "The match opens in Access for a permissioned check before any intro leaves the local queue." : "Predictions can only draft or route locally. Sharing still requires approval.")}</p>
      </article>
    </div>
  `;
}

function renderCall() {
  const transcript = document.querySelector("[data-call-transcript]");
  const panel = document.querySelector("[data-call-panel]");
  const summary = document.querySelector("[data-call-summary]");
  if (!transcript || !panel || !summary) return;

  const started = state.callStarted;
  const extracted = state.callExtracted;
  const activated = state.callActivated;
  const startButton = document.querySelector("[data-start-call]");
  const extractButton = document.querySelector("[data-extract-call]");
  const activateButton = document.querySelector("[data-activate-call-plan]");

  if (startButton) {
    startButton.textContent = started ? "Call recorded" : "Start call";
    startButton.disabled = started;
  }
  if (extractButton) {
    extractButton.textContent = extracted ? "Intent extracted" : "Extract intent";
    extractButton.disabled = !started || extracted;
  }
  if (activateButton) {
    activateButton.textContent = activated ? "Open Goals" : "Activate plan";
    activateButton.disabled = !extracted && !activated;
  }

  transcript.innerHTML = started
    ? intakeCall.transcript
        .map(
          (line) => `
            <article class="call-line ${line.speaker === "Gigi" ? "is-gigi" : "is-user"}">
              <span>${escapeHtml(line.speaker)}</span>
              <p>${escapeHtml(line.text)}</p>
            </article>
          `,
        )
        .join("")
    : `
      <article class="call-line is-empty">
        <span>Waiting</span>
        <p>Start the intake call so Gigi can learn the real objective before using your network.</p>
      </article>
    `;

  panel.innerHTML = `
    <span class="product-kicker">Agent memory</span>
    <h3>${escapeHtml(extracted ? intakeCall.objective : "No static form fields.")}</h3>
    <p>${escapeHtml(extracted ? "Gigi has enough context to turn the conversation into ranked paths, privacy boundaries, and next actions." : "The call captures what matters, who already has context, and what must stay private.")}</p>
    <div class="call-meter">
      <strong>${escapeHtml(activated ? "Live" : extracted ? "3" : started ? "6" : "--")}</strong>
      <span>${escapeHtml(activated ? "plan active" : extracted ? "insights" : started ? "turns captured" : "waiting")}</span>
    </div>
    <div class="call-plan-list">
      ${(extracted ? intakeCall.plan : ["Ask the right questions", "Capture privacy boundaries", "Activate warm-path goals"])
        .map((step, index) => `<div><span>${index + 1}</span><p>${escapeHtml(step)}</p></div>`)
        .join("")}
    </div>
  `;

  summary.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(activated ? "Plan activated" : extracted ? "Intent extracted" : started ? "Call recorded" : "Voice intake")}</span>
      <strong>${escapeHtml(activated ? "Goals ready" : extracted ? "Ready to activate" : started ? "Needs extraction" : "Start call")}</strong>
    </div>
    <div class="call-summary-grid">
      ${intakeCall.insights
        .map(
          (insight) => `
            <article class="${activated ? "is-live" : extracted ? "is-ready" : ""}">
              <span>${escapeHtml(insight.label)}</span>
              <h4>${escapeHtml(extracted ? insight.title : "Hidden until intent extraction")}</h4>
              <p>${escapeHtml(extracted ? insight.detail : "Gigi waits for the conversation before creating network actions.")}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
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
  const reconnect = reconnectPlans[person.id] ?? reconnectPlans.adrian;
  const reconnectDrafted = state.reconnectDrafts.includes(person.id);
  const reconnectSent = state.sentReconnects.includes(person.id);
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
    <div class="reconnect-plan ${reconnectSent ? "is-sent" : reconnectDrafted ? "is-ready" : ""}">
      <span>${escapeHtml(reconnectSent ? "Reconnect sent" : reconnectDrafted ? "Reconnect ready" : "How to reconnect")}</span>
      <strong>${escapeHtml(reconnect.opener)}</strong>
      <p>${escapeHtml(reconnect.reason)}</p>
      <small>${escapeHtml(reconnect.lastTouch)} · ${escapeHtml(reconnect.channel)}</small>
    </div>
    <div class="detail-actions">
      <button type="button" data-ask-gigi>Ask Gigi</button>
      <button type="button" data-request-intro="${person.id}">Request intro</button>
      <button type="button" data-reconnect-person="${person.id}">${escapeHtml(reconnectSent ? "Reconnect sent" : reconnectDrafted ? "Send reconnect" : "Plan reconnect")}</button>
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

function renderIntroEmail() {
  const list = document.querySelector("[data-intro-email-list]");
  const draftPanel = document.querySelector("[data-intro-email-draft]");
  const ledger = document.querySelector("[data-intro-email-ledger]");
  if (!list || !draftPanel || !ledger) return;

  const active = introEmailById(state.activeEmailId);
  const person = personById(active.targetId);
  const generated = state.generatedEmailDrafts.includes(active.id);
  const approved = state.approvedEmailDrafts.includes(active.id);
  const sent = state.sentEmailDrafts.includes(active.id);
  const generateButton = document.querySelector("[data-generate-intro-email]");
  const approveButton = document.querySelector("[data-approve-intro-email]");
  const sendButton = document.querySelector("[data-send-intro-email]");

  if (generateButton) {
    generateButton.textContent = generated || approved || sent ? "Draft ready" : "Generate email";
    generateButton.disabled = generated || approved || sent;
  }
  if (approveButton) {
    approveButton.textContent = approved || sent ? "Consent approved" : "Approve consent";
    approveButton.disabled = (!generated && !approved && !sent) || approved || sent;
  }
  if (sendButton) {
    sendButton.textContent = sent ? "Open intro queue" : "Send locally";
    sendButton.disabled = !approved && !sent;
  }

  list.innerHTML = introEmailDrafts
    .map((draft) => {
      const target = personById(draft.targetId);
      const draftGenerated = state.generatedEmailDrafts.includes(draft.id);
      const draftApproved = state.approvedEmailDrafts.includes(draft.id);
      const draftSent = state.sentEmailDrafts.includes(draft.id);
      return `
        <button class="intro-email-card ${draft.id === active.id ? "is-selected" : ""} ${draftSent ? "is-sent" : draftApproved ? "is-approved" : draftGenerated ? "is-generated" : ""}" type="button" data-select-intro-email="${draft.id}">
          <span>${escapeHtml(draft.label)}</span>
          <strong>${escapeHtml(draft.requester)} → ${escapeHtml(target.name)}</strong>
          <small>${escapeHtml(draftSent ? "Sent locally" : draftApproved ? "Consent approved" : draftGenerated ? `${draft.score}% ready` : `via ${draft.connector}`)}</small>
        </button>
      `;
    })
    .join("");

  draftPanel.innerHTML = `
    <span class="product-kicker">Approval-gated draft</span>
    <h3>${escapeHtml(active.subject)}</h3>
    <p>${escapeHtml(generated ? active.ask : "Generate the Gmail draft from the strongest warm path before exposing any private context.")}</p>
    <div class="intro-email-score">
      <strong>${escapeHtml(generated ? `${active.score}%` : "--")}</strong>
      <span>${escapeHtml(sent ? "sent locally" : approved ? "approved" : generated ? "ready" : "drafting")}</span>
    </div>
    <div class="intro-email-note">
      <span>Private connector context</span>
      <p>${escapeHtml(generated ? active.privateContext : "Hidden until the draft is generated from approved source context.")}</p>
    </div>
    <div class="intro-email-note">
      <span>Forwardable note</span>
      <p>${escapeHtml(generated ? active.forwardable : "Gigi will write a short note the connector can approve before anything is sent.")}</p>
    </div>
    <div class="tag-row">
      ${active.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
    </div>
  `;

  ledger.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(sent ? "Email queued" : approved ? "Consent approved" : generated ? "Draft ready" : "Gmail automation")}</span>
      <strong>${escapeHtml(sent ? "Open intros" : approved ? "Ready to send" : generated ? "Needs approval" : "Local only")}</strong>
    </div>
    <div class="intro-email-ledger-grid">
      <article class="${generated ? "is-live" : ""}">
        <span>Source mix</span>
        <h4>${escapeHtml(generated ? "Gmail + Calendar" : "Waiting for source approval")}</h4>
        <p>${escapeHtml(generated ? `Gigi uses ${active.connector}'s relationship context and the scoped Access route, not the whole graph.` : "No external account is connected here; this prototype simulates local source approval.")}</p>
      </article>
      <article class="${approved ? "is-live" : ""}">
        <span>Consent gate</span>
        <h4>${escapeHtml(approved ? "Connector + recipient scoped" : "Human approval required")}</h4>
        <p>${escapeHtml(approved ? active.boundary : "The connector must approve the forwardable note before the recipient sees the ask.")}</p>
      </article>
      <article class="${sent ? "is-live" : ""}">
        <span>Delivery</span>
        <h4>${escapeHtml(sent ? "Intro board updated" : "Blocked by default")}</h4>
        <p>${escapeHtml(sent ? "The local intro queue now records the email as a double opt-in warm introduction." : "Nothing leaves the local prototype until the send action is approved.")}</p>
      </article>
    </div>
  `;
}

function renderMessages() {
  const threads = document.querySelector("[data-message-threads]");
  const phone = document.querySelector("[data-message-phone]");
  const status = document.querySelector("[data-message-status]");
  if (!threads || !phone || !status) return;

  const thread = messageThreadById(state.activeMessageThreadId);
  const list = smartLists[thread.listIndex] ?? smartLists[0];
  const built = state.builtMessageLinks.includes(thread.id);
  const sent = state.sentMessageLinks.includes(thread.id);
  const featuredPeople = thread.people.map(personById);
  const buildButton = document.querySelector("[data-build-message-link]");
  const sendButton = document.querySelector("[data-send-message-link]");

  if (buildButton) {
    buildButton.textContent = built ? "Link ready" : "Build Gigi link";
    buildButton.disabled = built;
  }
  if (sendButton) {
    sendButton.textContent = sent ? "DM sent" : "Send to DM";
    sendButton.disabled = sent;
  }

  threads.innerHTML = messageThreads
    .map((item) => {
      const itemBuilt = state.builtMessageLinks.includes(item.id);
      const itemSent = state.sentMessageLinks.includes(item.id);
      return `
        <button class="message-thread-item ${item.id === thread.id ? "is-selected" : ""}" type="button" data-select-message-thread="${item.id}">
          <span>${escapeHtml(item.contact)}</span>
          <strong>${escapeHtml(item.cardTitle)}</strong>
          <small>${escapeHtml(itemSent ? "Sent" : itemBuilt ? "Link ready" : "Draft")}</small>
        </button>
      `;
    })
    .join("");

  phone.innerHTML = `
    <div class="message-phone-shell">
      <div class="message-phone-bar">
        <span>‹ Messages</span>
        ${avatar(thread.contact)}
        <strong>${escapeHtml(thread.contact)}</strong>
      </div>
      <div class="message-chat">
        <p class="message-bubble is-incoming">${escapeHtml(thread.incoming)}</p>
        <p class="message-bubble is-outgoing">${escapeHtml(built ? thread.reply : "Gigi is building the right private list before you send.")}</p>
        <button class="message-link-card ${built ? "is-built" : ""}" type="button" data-open-message-link ${built ? "" : "disabled"} style="--list-a: ${list.colors[0]}; --list-b: ${list.colors[1]}">
          <span>${escapeHtml(built ? thread.cardTitle : "Gigi link locked")}</span>
          <div class="message-link-avatars">${featuredPeople.map((person) => avatar(person.name)).join("")}</div>
          <small>Shared on Gigi</small>
          <em>${escapeHtml(thread.linkPath)}</em>
        </button>
        ${sent ? `<p class="message-bubble is-incoming">${escapeHtml(thread.reaction)}</p>` : ""}
      </div>
      <div class="message-input-row">
        <span></span>
        <small>iMessage</small>
        <span></span>
      </div>
    </div>
  `;

  status.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(sent ? "Message delivered" : built ? "Smart link ready" : "Waiting for Gigi")}</span>
      <strong>${escapeHtml(sent ? "DM sent" : built ? "Private link" : "Draft")}</strong>
    </div>
    <div class="message-status-grid">
      <article>
        <span>Ask</span>
        <h4>${escapeHtml(thread.incoming)}</h4>
        <p>${escapeHtml(thread.context)}</p>
      </article>
      <article>
        <span>List</span>
        <h4>${escapeHtml(list.title)}</h4>
        <p>${escapeHtml(`${list.count} people · ${list.context}`)}</p>
      </article>
      <article>
        <span>Safety</span>
        <h4>${escapeHtml(sent ? "Sent locally" : "Approval required")}</h4>
        <p>${escapeHtml("No external message is sent from this local prototype. The link opens the gated recipient view.")}</p>
      </article>
    </div>
  `;
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

function renderStrength() {
  const list = document.querySelector("[data-strength-list]");
  const panel = document.querySelector("[data-strength-panel]");
  const ledger = document.querySelector("[data-strength-ledger]");
  if (!list || !panel || !ledger) return;

  const active = relationshipAuditById(state.activeStrengthId);
  const person = personById(active.targetId);
  const analyzed = state.analyzedStrength.includes(active.id);
  const routed = state.routedStrength.includes(active.id);
  const runButton = document.querySelector("[data-run-strength]");
  const routeButton = document.querySelector("[data-route-strength]");

  if (runButton) {
    runButton.textContent = analyzed || routed ? "Analysis live" : "Analyze relationships";
    runButton.disabled = analyzed || routed;
  }
  if (routeButton) {
    routeButton.textContent = routed ? "Open Access route" : "Open strongest route";
  }

  list.innerHTML = relationshipAudits
    .map((audit) => {
      const target = personById(audit.targetId);
      const auditAnalyzed = state.analyzedStrength.includes(audit.id);
      const auditRouted = state.routedStrength.includes(audit.id);
      return `
        <button class="strength-card ${audit.id === active.id ? "is-selected" : ""} ${auditRouted ? "is-routed" : auditAnalyzed ? "is-analyzed" : ""}" type="button" data-select-strength="${audit.id}">
          <span>${escapeHtml(audit.label)}</span>
          <strong>${escapeHtml(audit.connector)} → ${escapeHtml(target.name)}</strong>
          <small>${escapeHtml(auditRouted ? "Route opened" : auditAnalyzed ? `${audit.score}% strength` : `${audit.meetings} meetings · ${audit.recency}`)}</small>
        </button>
      `;
    })
    .join("");

  panel.innerHTML = `
    <span class="product-kicker">Relationship proof</span>
    <h3>${escapeHtml(active.connector)} → ${escapeHtml(person.name)}</h3>
    <p>${escapeHtml(analyzed ? active.ask : "Analyze Calendar and Gmail context before deciding whether this path can carry an ask.")}</p>
    <div class="strength-score">
      <strong>${escapeHtml(analyzed ? `${active.score}%` : "--")}</strong>
      <span>${escapeHtml(routed ? "sent to Access" : analyzed ? "usable strength" : "waiting")}</span>
    </div>
    <div class="strength-metrics">
      <div><span>Meetings</span><strong>${escapeHtml(analyzed ? String(active.meetings) : "--")}</strong></div>
      <div><span>Threads</span><strong>${escapeHtml(analyzed ? String(active.threads) : "--")}</strong></div>
      <div><span>Recency</span><strong>${escapeHtml(analyzed ? active.recency : "--")}</strong></div>
    </div>
    <div class="path-box">
      <strong>${escapeHtml(analyzed ? "What Gigi can use" : "Private until analyzed")}</strong>
      <p>${escapeHtml(analyzed ? active.proof : "This prototype keeps relationship evidence hidden until the local analysis runs.")}</p>
    </div>
    <div class="tag-row">
      ${active.signals.map((signal) => `<span>${escapeHtml(signal)}</span>`).join("")}
    </div>
  `;

  ledger.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(routed ? "Route opened" : analyzed ? "Strength analyzed" : "Relationship audit")}</span>
      <strong>${escapeHtml(routed ? "Access check queued" : analyzed ? "Ready to route" : "Waiting")}</strong>
    </div>
    <div class="strength-ledger-grid">
      <article>
        <span>Source truth</span>
        <h4>${escapeHtml(analyzed ? "Calendar + Gmail agree" : "Not yet connected")}</h4>
        <p>${escapeHtml(analyzed ? active.proof : "Gigi needs actual interaction history before ranking relationship strength.")}</p>
      </article>
      <article>
        <span>Ask fit</span>
        <h4>${escapeHtml(analyzed ? active.ask : "Need a concrete ask")}</h4>
        <p>${escapeHtml(analyzed ? "The relationship is scored against one narrow request, not generic social proximity." : "Relationship strength stays meaningless until tied to a specific outcome.")}</p>
      </article>
      <article>
        <span>Boundary</span>
        <h4>${escapeHtml(routed ? "Permissioned route only" : analyzed ? "Scope required" : "No sharing")}</h4>
        <p>${escapeHtml(analyzed ? active.risk : "Nothing external is sent from this prototype, and private context remains local.")}</p>
      </article>
    </div>
  `;
}

function renderAccess() {
  const requests = document.querySelector("[data-access-requests]");
  const route = document.querySelector("[data-access-route]");
  const ledger = document.querySelector("[data-access-ledger]");
  if (!requests || !route || !ledger) return;

  const active = accessRequestById(state.activeAccessId);
  const target = personById(active.targetId);
  const checked = state.checkedAccess.includes(active.id);
  const approved = state.approvedAccess.includes(active.id);
  const checkButton = document.querySelector("[data-run-access-check]");
  const approveButton = document.querySelector("[data-approve-access-route]");

  if (checkButton) {
    checkButton.textContent = checked || approved ? "Agent checked" : "Run agent check";
    checkButton.disabled = checked || approved;
  }
  if (approveButton) {
    approveButton.textContent = approved ? "Open intro queue" : "Approve route";
  }

  requests.innerHTML = accessRequests
    .map((request) => {
      const requestChecked = state.checkedAccess.includes(request.id);
      const requestApproved = state.approvedAccess.includes(request.id);
      return `
        <button class="access-request-card ${request.id === active.id ? "is-selected" : ""} ${requestApproved ? "is-approved" : requestChecked ? "is-checked" : ""}" type="button" data-select-access="${request.id}">
          <span>${escapeHtml(request.asker)}</span>
          <strong>${escapeHtml(personById(request.targetId).name)}</strong>
          <small>${escapeHtml(requestApproved ? "Route approved" : requestChecked ? "Agent checked" : request.status)}</small>
        </button>
      `;
    })
    .join("");

  route.innerHTML = `
    <span class="product-kicker">Access route</span>
    <h3>${escapeHtml(active.asker)} → ${escapeHtml(target.name)}</h3>
    <p>${escapeHtml(active.ask)}</p>
    <div class="access-score">
      <strong>${active.score}%</strong>
      <span>${escapeHtml(approved ? "route approved" : checked ? "safe to request" : "needs check")}</span>
    </div>
    <div class="access-route-steps">
      ${active.route
        .map(
          (step, index) => `
            <div>
              <span>${index + 1}</span>
              <strong>${escapeHtml(step)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="path-box">
      <strong>${escapeHtml(active.policy)}</strong>
      <p>${escapeHtml(active.privateContext)}</p>
    </div>
  `;

  const rows = [
    {
      label: "Requesting agent",
      actor: active.requesterAgent,
      detail: active.reason,
      state: checked || approved ? "Intent verified" : "Waiting for graph scan",
    },
    {
      label: "Connector agent",
      actor: active.connectorAgent,
      detail: `${active.connector} can approve the path without exposing unrelated private notes.`,
      state: approved ? "Approved" : checked ? "Needs human approval" : "Permission pending",
    },
    {
      label: "Recipient agent",
      actor: active.recipientAgent,
      detail: `${target.name} receives only the scoped ask and can opt in before any intro is sent.`,
      state: approved ? "Opt-in queued" : "Hidden until approval",
    },
  ];

  ledger.innerHTML = `
    <div class="share-results-heading">
      <span>${escapeHtml(approved ? "Access coordinated" : checked ? "Agent check complete" : "Permission ledger")}</span>
      <strong>${escapeHtml(approved ? "Route approved" : checked ? "Ready for approval" : "Private by default")}</strong>
    </div>
    <div class="access-ledger-grid">
      ${rows
        .map(
          (row) => `
            <article class="${approved ? "is-approved" : checked ? "is-checked" : ""}">
              <span>${escapeHtml(row.label)}</span>
              <h4>${escapeHtml(row.actor)}</h4>
              <p>${escapeHtml(row.detail)}</p>
              <small>${escapeHtml(row.state)}</small>
            </article>
          `,
        )
        .join("")}
    </div>
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
  renderSetup();
  renderMoves();
  renderScore();
  renderMatches();
  renderNudges();
  renderProfile();
  renderSignals();
  renderContext();
  renderBriefings();
  renderDossier();
  renderGoals();
  renderAsks();
  renderReferences();
  renderFeed();
  renderRadar();
  renderCall();
  renderPeople();
  renderGraph();
  renderStrength();
  renderAccess();
  renderLists();
  renderIntroEmail();
  renderMessages();
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

  const radarButton = target.closest("[data-select-radar]");
  if (radarButton) {
    const prediction = radarById(radarButton.dataset.selectRadar);
    state.activeRadarId = prediction.id;
    renderRadar();
    return;
  }

  if (target.closest("[data-run-radar]")) {
    const prediction = radarById(state.activeRadarId);
    const person = personById(prediction.targetId);
    const wasScanned = state.scannedRadar.includes(prediction.id);
    state.connected.calendar = true;
    state.connected.contacts = true;
    state.connected.publicProfile = true;
    if (!wasScanned) {
      state.scannedRadar.push(prediction.id);
      state.socialCapital += prediction.capital;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi Radar",
        text: `found ${person.name} before a direct search by matching ${prediction.need.toLowerCase()} to ${prediction.connector}'s trusted path.`,
        time: "Just now",
        capital: prediction.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-activate-radar]")) {
    const prediction = radarById(state.activeRadarId);
    const person = personById(prediction.targetId);
    const accessRequest = accessRequestById(prediction.accessId);
    if (!state.scannedRadar.includes(prediction.id)) {
      state.scannedRadar.push(prediction.id);
      state.socialCapital += prediction.capital;
    }
    if (!state.activatedRadar.includes(prediction.id)) {
      state.activatedRadar.push(prediction.id);
      state.feed.unshift({
        person: person.name,
        actor: "Gigi Radar",
        text: `activated Radar match to ${person.name} and opened the permissioned access route through ${prediction.connector}.`,
        time: "Just now",
        capital: 4,
      });
    }
    if (!state.checkedAccess.includes(accessRequest.id)) {
      state.checkedAccess.push(accessRequest.id);
    }
    state.connected.calendar = true;
    state.connected.contacts = true;
    state.connected.publicProfile = true;
    state.activeAccessId = accessRequest.id;
    setProductView("access");
    return;
  }

  if (target.closest("[data-start-call]")) {
    if (!state.callStarted) {
      state.callStarted = true;
      state.socialCapital += 2;
      state.feed.unshift({
        person: "Intake call",
        actor: "Gigi",
        text: "recorded a local voice intake and captured the user's network objective.",
        time: "Just now",
        capital: 2,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-extract-call]")) {
    if (!state.callStarted) {
      state.callStarted = true;
    }
    if (!state.callExtracted) {
      state.callExtracted = true;
      state.socialCapital += 4;
      state.feed.unshift({
        person: "Intake call",
        actor: "Gigi",
        text: "extracted seed-round, product-advisor, and privacy-boundary signals from the call.",
        time: "Just now",
        capital: 4,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-activate-call-plan]")) {
    if (state.callActivated) {
      setProductView("goals");
      return;
    }
    state.callStarted = true;
    state.callExtracted = true;
    state.callActivated = true;
    state.connected.calendar = true;
    state.connected.gmail = true;
    state.connected.contacts = true;
    state.connected.publicProfile = true;
    state.goalBrief =
      "I am raising a seed round for an AI infrastructure company and need a trust-heavy product advisor before launch.";
    state.activeGoalId = "raise-seed";
    state.feed.unshift({
      person: "Intake call",
      actor: "Gigi",
      text: "activated the call plan into Goals, Radar, and approval-gated intro workflows.",
      time: "Just now",
      capital: 5,
    });
    setProductView("goals");
    return;
  }

  const setupSourceButton = target.closest("[data-setup-source]");
  if (setupSourceButton) {
    const source = setupSourceById(setupSourceButton.dataset.setupSource);
    const wasConnected = Boolean(state.connected[source.id]);
    state.activeSetupSourceId = source.id;
    state.connected[source.id] = true;
    if (!wasConnected) {
      state.socialCapital += source.capital;
      state.feed.unshift({
        person: source.label,
        actor: "Gigi",
        text: `connected ${source.label.toLowerCase()} context for ${source.unlock.toLowerCase()}.`,
        time: "Just now",
        capital: source.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-run-setup]")) {
    const missingSources = setupSources.filter((source) => !state.connected[source.id]);
    setupSources.forEach((source) => {
      state.connected[source.id] = true;
    });
    state.setupMapped = true;
    if (missingSources.length > 0) {
      state.socialCapital += missingSources.reduce((sum, source) => sum + source.capital, 0);
      state.feed.unshift({
        person: "Source map",
        actor: "Gigi",
        text: `mapped ${setupSources.length} sources into a permissioned trust graph. Recommendations, briefs, and intros can now use approved context.`,
        time: "Just now",
        capital: missingSources.reduce((sum, source) => sum + source.capital, 0),
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-setup-context]")) {
    setProductView("context");
    return;
  }

  const moveButton = target.closest("[data-select-move]");
  if (moveButton) {
    const move = opportunityMoveById(moveButton.dataset.selectMove);
    state.activeMoveId = move.id;
    renderMoves();
    return;
  }

  if (target.closest("[data-scan-moves]")) {
    const newlyScanned = opportunityMoves.filter((move) => !state.scannedMoves.includes(move.id));
    newlyScanned.forEach((move) => {
      state.scannedMoves.push(move.id);
    });
    state.connected.calendar = true;
    state.connected.contacts = true;
    if (newlyScanned.length > 0) {
      state.socialCapital += 5;
      state.feed.unshift({
        person: "Opportunity scan",
        actor: "Gigi",
        text: `detected ${newlyScanned.length} hidden opportunities by matching private signals to active intent.`,
        time: "Just now",
        capital: 5,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-move-opportunity]")) {
    const move = opportunityMoveById(state.activeMoveId);
    const person = personById(move.targetId);
    if (!state.scannedMoves.includes(move.id)) {
      state.scannedMoves.push(move.id);
    }
    if (!state.movedMoves.includes(move.id)) {
      state.movedMoves.push(move.id);
      state.connected.gmail = true;
      state.socialCapital += move.capital;
      const existing = state.intros.find(
        (intro) => intro.target === person.name && intro.reason === `Opportunity: ${move.label}`,
      );
      if (!existing) {
        state.intros.unshift({
          target: person.name,
          connector: move.connector,
          reason: `Opportunity: ${move.label}`,
          status: "Waiting opt-in",
        });
      }
      state.previewListIndex = move.listIndex;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `moved a private ${move.label.toLowerCase()} opportunity through ${move.connector}. It is queued locally for opt-in approval.`,
        time: "Just now",
        capital: move.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-move-intros]")) {
    setProductView("intros");
    return;
  }

  const scoreProfileButton = target.closest("[data-select-score-profile]");
  if (scoreProfileButton) {
    const profile = scoreProfileById(scoreProfileButton.dataset.selectScoreProfile);
    state.activeScoreId = profile.id;
    state.scoreQuery = profile.name;
    renderScore();
    return;
  }

  if (target.closest("[data-reveal-score]")) {
    const query = document.querySelector("[data-score-query]")?.value.trim().toLowerCase() ?? "";
    const profile =
      scoreProfiles.find((item) => item.name.toLowerCase().includes(query) && query) ??
      scoreProfileById(state.activeScoreId);
    state.activeScoreId = profile.id;
    state.scoreQuery = profile.name;
    state.scoreRevealed = true;
    state.connected.calendar = true;
    state.socialCapital = profile.score;
    state.feed.unshift({
      person: profile.name,
      actor: "Gigi",
      text: `revealed ${profile.name}'s Social Capital Score and found ${profile.addedContact} as a new trusted edge. This local prototype did not connect to a real account.`,
      time: "Just now",
      capital: profile.delta,
    });
    renderAll();
    return;
  }

  const matchButton = target.closest("[data-select-match]");
  if (matchButton) {
    const report = matchReportById(matchButton.dataset.selectMatch);
    state.activeMatchId = report.id;
    renderMatches();
    return;
  }

  if (target.closest("[data-reveal-match]")) {
    const report = matchReportById(state.activeMatchId);
    if (!state.revealedMatches.includes(report.id)) {
      state.revealedMatches.push(report.id);
      state.connected.calendar = true;
      state.feed.unshift({
        person: report.owner,
        actor: "Gigi",
        text: `opened a ${report.score} match report between ${report.owner} and ${report.match}, with private compliments and deep research.`,
        time: "Just now",
        capital: 8,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-handle-match]")) {
    const report = matchReportById(state.activeMatchId);
    if (!state.revealedMatches.includes(report.id)) {
      state.revealedMatches.push(report.id);
    }
    if (!state.handledMatches.includes(report.id)) {
      state.handledMatches.push(report.id);
      state.connected.gmail = true;
      const existing = state.intros.find(
        (intro) => intro.target === report.match && intro.reason === `Professional match for ${report.owner}`,
      );
      if (!existing) {
        state.intros.unshift({
          target: report.match,
          connector: report.connector,
          reason: `Professional match for ${report.owner}`,
          status: "Waiting opt-in",
        });
      }
      state.feed.unshift({
        person: report.match,
        actor: "Gigi",
        text: `queued a double opt-in intro for ${report.owner} and ${report.match}. Nothing external was sent from this local prototype.`,
        time: "Just now",
        capital: 6,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-match-intros]")) {
    setProductView("intros");
    return;
  }

  const nudgeButton = target.closest("[data-select-nudge]");
  if (nudgeButton) {
    const nudge = connectorNudgeById(nudgeButton.dataset.selectNudge);
    state.activeNudgeId = nudge.id;
    renderNudges();
    return;
  }

  if (target.closest("[data-build-nudge]")) {
    const nudge = connectorNudgeById(state.activeNudgeId);
    if (!state.builtNudges.includes(nudge.id)) {
      state.builtNudges.push(nudge.id);
      state.connected.calendar = true;
      state.feed.unshift({
        person: nudge.connector,
        actor: "Gigi",
        text: `detected a fresh connector moment: ${nudge.connector} can introduce ${nudge.seeker} to ${nudge.target}.`,
        time: "Just now",
        capital: 6,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-send-nudge]")) {
    const nudge = connectorNudgeById(state.activeNudgeId);
    if (!state.builtNudges.includes(nudge.id)) {
      state.builtNudges.push(nudge.id);
    }
    if (!state.sentNudges.includes(nudge.id)) {
      state.sentNudges.push(nudge.id);
      state.connected.gmail = true;
      const existing = state.intros.find(
        (intro) => intro.target === nudge.target && intro.reason === `Connector nudge for ${nudge.seeker}`,
      );
      if (!existing) {
        state.intros.unshift({
          target: nudge.target,
          connector: nudge.connector,
          reason: `Connector nudge for ${nudge.seeker}`,
          status: "Waiting opt-in",
        });
      }
      state.feed.unshift({
        person: nudge.target,
        actor: "Gigi",
        text: `queued a local connector nudge through ${nudge.connector}. Nothing external was sent.`,
        time: "Just now",
        capital: 5,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-nudge-intros]")) {
    setProductView("intros");
    return;
  }

  const profileLensButton = target.closest("[data-profile-lens]");
  if (profileLensButton) {
    state.activeProfileLens = profileLensButton.dataset.profileLens;
    renderProfile();
    return;
  }

  if (target.closest("[data-build-dynamic-profile]")) {
    const lens = dynamicProfileLensById(state.activeProfileLens);
    if (!state.builtDynamicProfiles.includes(lens.id)) {
      state.builtDynamicProfiles.push(lens.id);
      state.connected.calendar = true;
      state.connected.contacts = true;
      state.connected.publicProfile = true;
      state.socialCapital += lens.capital;
      state.feed.unshift({
        person: lens.title,
        actor: "Gigi",
        text: `built a dynamic ${lens.label.toLowerCase()} profile so the graph leads with ${lens.receipts[0].toLowerCase()} for ${lens.audience.toLowerCase()}.`,
        time: "Just now",
        capital: lens.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-publish-dynamic-profile]")) {
    const lens = dynamicProfileLensById(state.activeProfileLens);
    if (!state.builtDynamicProfiles.includes(lens.id)) {
      state.builtDynamicProfiles.push(lens.id);
      state.socialCapital += lens.capital;
    }
    if (!state.publishedDynamicProfiles.includes(lens.id)) {
      state.publishedDynamicProfiles.push(lens.id);
      state.previewListIndex = lens.shareListIndex;
      state.shareListIndex = lens.shareListIndex;
      state.feed.unshift({
        person: lens.graphDelta,
        actor: "You",
        text: `published the ${lens.label.toLowerCase()} profile lens to the searchable and shareable graph with private proof still gated.`,
        time: "Just now",
        capital: 3,
      });
      state.socialCapital += 3;
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-dynamic-profile-link]")) {
    const lens = dynamicProfileLensById(state.activeProfileLens);
    if (!state.publishedDynamicProfiles.includes(lens.id)) return;
    state.previewListIndex = lens.shareListIndex;
    state.previewLens = lens.id === "hiring" ? "hiring" : "founder";
    renderLinkPreview();
    document.querySelector("[data-link-preview-modal]").hidden = false;
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

  const dossierButton = target.closest("[data-select-dossier]");
  if (dossierButton) {
    const dossier = profileDossierById(dossierButton.dataset.selectDossier);
    state.activeDossierId = dossier.id;
    renderDossier();
    return;
  }

  if (target.closest("[data-load-dossier]")) {
    const dossier = profileDossierById(state.activeDossierId);
    const person = personById(dossier.targetId);
    const wasLoaded = state.loadedDossiers.includes(dossier.id);
    state.connected.calendar = true;
    state.connected.contacts = true;
    state.connected.publicProfile = true;
    state.selectedPersonId = person.id;
    if (!wasLoaded) {
      state.loadedDossiers.push(dossier.id);
      state.socialCapital += dossier.capital;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi Dossier",
        text: `loaded a profile dossier for ${person.name} using ${dossier.sources.join(", ")} and ${dossier.connector}'s warm path.`,
        time: "Just now",
        capital: dossier.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-build-dossier]")) {
    const dossier = profileDossierById(state.activeDossierId);
    const person = personById(dossier.targetId);
    if (!state.loadedDossiers.includes(dossier.id)) {
      state.loadedDossiers.push(dossier.id);
      state.socialCapital += dossier.capital;
    }
    if (!state.builtDossiers.includes(dossier.id)) {
      state.builtDossiers.push(dossier.id);
      if (!state.generatedBriefings.includes(dossier.briefingId)) {
        state.generatedBriefings.push(dossier.briefingId);
      }
      state.connected.calendar = true;
      state.connected.publicProfile = true;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi Dossier",
        text: `built a meeting briefing for ${person.name} with opener, common ground, why-now angle, and privacy boundary.`,
        time: "Just now",
        capital: 3,
      });
      state.socialCapital += 3;
    }
    state.activeBriefingId = dossier.briefingId;
    state.selectedPersonId = person.id;
    renderAll();
    return;
  }

  if (target.closest("[data-send-dossier]")) {
    const dossier = profileDossierById(state.activeDossierId);
    const person = personById(dossier.targetId);
    if (state.sentDossiers.includes(dossier.id)) {
      state.activeBriefingId = dossier.briefingId;
      setProductView("briefings");
      return;
    }
    if (!state.loadedDossiers.includes(dossier.id)) {
      state.loadedDossiers.push(dossier.id);
      state.socialCapital += dossier.capital;
    }
    if (!state.builtDossiers.includes(dossier.id)) {
      state.builtDossiers.push(dossier.id);
    }
    if (!state.generatedBriefings.includes(dossier.briefingId)) {
      state.generatedBriefings.push(dossier.briefingId);
    }
    if (!state.sentBriefings.includes(dossier.briefingId)) {
      state.sentBriefings.push(dossier.briefingId);
    }
    state.sentDossiers.push(dossier.id);
    state.connected.calendar = true;
    state.connected.gmail = true;
    state.connected.contacts = true;
    state.connected.publicProfile = true;
    state.activeBriefingId = dossier.briefingId;
    state.selectedPersonId = person.id;
    state.feed.unshift({
      person: person.name,
      actor: "Gigi Dossier",
      text: `sent ${person.name}'s profile dossier into Meeting briefings. Nothing external was sent from this local prototype.`,
      time: "Just now",
      capital: 2,
    });
    state.socialCapital += 2;
    setProductView("briefings");
    return;
  }

  const briefingButton = target.closest("[data-select-briefing]");
  if (briefingButton) {
    const briefing = briefingById(briefingButton.dataset.selectBriefing);
    state.activeBriefingId = briefing.id;
    state.selectedPersonId = briefing.personId;
    renderBriefings();
    return;
  }

  if (target.closest("[data-generate-briefing]")) {
    const briefing = briefingById(state.activeBriefingId);
    if (!state.generatedBriefings.includes(briefing.id)) {
      state.generatedBriefings.push(briefing.id);
    }
    state.connected.calendar = true;
    state.selectedPersonId = briefing.personId;
    state.feed.unshift({
      person: briefing.title,
      actor: "Gigi",
      text: `generated a pre-meeting briefing for ${personById(briefing.personId).name}, including opener, common ground, pitch angle, and smart questions.`,
      time: "Just now",
      capital: 5,
    });
    renderAll();
    return;
  }

  if (target.closest("[data-send-briefing]")) {
    const briefing = briefingById(state.activeBriefingId);
    if (!state.generatedBriefings.includes(briefing.id)) {
      state.generatedBriefings.push(briefing.id);
    }
    if (!state.sentBriefings.includes(briefing.id)) {
      state.sentBriefings.push(briefing.id);
      state.feed.unshift({
        person: briefing.title,
        actor: "You",
        text: `sent the ${briefing.title} briefing to your private DM queue. Nothing external was sent from this local prototype.`,
        time: "Just now",
        capital: 4,
      });
    }
    renderAll();
    return;
  }

  const openBriefingPerson = target.closest("[data-open-briefing-person]");
  if (openBriefingPerson) {
    state.selectedPersonId = openBriefingPerson.dataset.openBriefingPerson;
    state.answer = "";
    setProductView("search");
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

  const referenceButton = target.closest("[data-select-reference]");
  if (referenceButton) {
    const check = referenceById(referenceButton.dataset.selectReference);
    state.activeReferenceId = check.id;
    state.referenceBrief = check.ask;
    state.selectedPersonId = check.targetId;
    state.filter = check.useCase;
    state.query = check.ask;
    renderAll();
    return;
  }

  if (target.closest("[data-run-reference-check]")) {
    const brief = document.querySelector("[data-reference-brief]")?.value.trim();
    const check = referenceById(state.activeReferenceId);
    if (brief) {
      state.referenceBrief = brief;
    }
    state.connected.calendar = true;
    state.selectedPersonId = check.targetId;
    state.query = state.referenceBrief;
    state.filter = check.useCase;
    state.feed.unshift({
      person: "Reference check",
      actor: "Gigi",
      text: `ranked ${check.candidates.length} vouch paths for ${personById(check.targetId).name}, separating real proof from weak social proximity.`,
      time: "Just now",
      capital: 5,
    });
    renderAll();
    return;
  }

  function requestReference(candidateIndex) {
    const check = referenceById(state.activeReferenceId);
    const candidate = check.candidates[candidateIndex] ?? check.candidates[0];
    const targetPerson = personById(check.targetId);
    const key = referenceRequestKey(check.id, candidate.name);
    if (!state.referenceRequests.includes(key)) {
      state.referenceRequests.push(key);
      state.intros.unshift({
        target: candidate.name,
        connector: "Gigi",
        reason: `Reference check for ${targetPerson.name}`,
        status: "Waiting opt-in",
      });
      state.feed.unshift({
        person: targetPerson.name,
        actor: "Gigi",
        text: `drafted a gated reference request to ${candidate.name} for ${targetPerson.name}. Private notes stay scoped to this check.`,
        time: "Just now",
        capital: 5,
      });
    }
    renderAll();
  }

  if (target.closest("[data-request-top-reference]")) {
    requestReference(0);
    return;
  }

  const requestReferenceButton = target.closest("[data-request-reference]");
  if (requestReferenceButton) {
    requestReference(Number(requestReferenceButton.dataset.requestReference));
    return;
  }

  const openReferenceTarget = target.closest("[data-open-reference-target]");
  if (openReferenceTarget) {
    state.selectedPersonId = openReferenceTarget.dataset.openReferenceTarget;
    state.answer = "";
    setProductView("search");
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

  const reconnectButton = target.closest("[data-reconnect-person]");
  if (reconnectButton) {
    const person = personById(reconnectButton.dataset.reconnectPerson);
    const reconnect = reconnectPlans[person.id] ?? reconnectPlans.adrian;
    if (!state.reconnectDrafts.includes(person.id)) {
      state.reconnectDrafts.push(person.id);
      state.answer = `Gigi reconnect plan: ${reconnect.nextStep}`;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `planned a reconnect with ${person.name}: ${reconnect.nextStep}`,
        time: "Just now",
        capital: reconnect.capital,
      });
      state.socialCapital += reconnect.capital;
      renderAll();
      return;
    }

    if (!state.sentReconnects.includes(person.id)) {
      state.sentReconnects.push(person.id);
      state.connected.gmail = true;
      const threadId = `reconnect-${person.id}`;
      if (!messageThreads.some((thread) => thread.id === threadId)) {
        messageThreads.unshift({
          id: threadId,
          contact: person.name,
          asker: "Gigi",
          incoming: reconnect.lastTouch,
          reply: reconnect.opener,
          reaction: "This is specific enough. Send the context.",
          cardTitle: `Reconnect with ${person.name}`,
          linkPath: `gigi.app/reconnect/${person.id}`,
          listIndex: reconnect.listIndex ?? 0,
          people: [person.id, ...people.filter((item) => item.id !== person.id).slice(0, 2).map((item) => item.id)],
          context: reconnect.reason,
        });
      }
      state.activeMessageThreadId = threadId;
      if (!state.builtMessageLinks.includes(threadId)) {
        state.builtMessageLinks.push(threadId);
      }
      const thread = messageThreadById(threadId);
      state.previewListIndex = thread.listIndex;
      state.shareListIndex = thread.listIndex;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `prepared a local reconnect draft for ${person.name}. Nothing external was sent from this prototype.`,
        time: "Just now",
        capital: 2,
      });
      setProductView("messages");
      return;
    }

    renderPersonDetail();
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

  const strengthButton = target.closest("[data-select-strength]");
  if (strengthButton) {
    const audit = relationshipAuditById(strengthButton.dataset.selectStrength);
    state.activeStrengthId = audit.id;
    renderStrength();
    return;
  }

  if (target.closest("[data-run-strength]")) {
    const audit = relationshipAuditById(state.activeStrengthId);
    const person = personById(audit.targetId);
    const wasAnalyzed = state.analyzedStrength.includes(audit.id);
    state.connected.calendar = true;
    state.connected.gmail = true;
    state.connected.contacts = true;
    if (!wasAnalyzed) {
      state.analyzedStrength.push(audit.id);
      state.socialCapital += audit.capital;
      state.feed.unshift({
        person: audit.connector,
        actor: "Gigi",
        text: `analyzed relationship strength from ${audit.connector} to ${person.name}: ${audit.score}% usable for this scoped ask.`,
        time: "Just now",
        capital: audit.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-route-strength]")) {
    const audit = relationshipAuditById(state.activeStrengthId);
    const person = personById(audit.targetId);
    const accessRequest = accessRequestById(audit.accessId);
    if (!state.analyzedStrength.includes(audit.id)) {
      state.analyzedStrength.push(audit.id);
      state.socialCapital += audit.capital;
    }
    if (!state.routedStrength.includes(audit.id)) {
      state.routedStrength.push(audit.id);
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `opened the strongest permissioned route to ${person.name} after proving ${audit.connector}'s relationship strength.`,
        time: "Just now",
        capital: 3,
      });
    }
    if (!state.checkedAccess.includes(accessRequest.id)) {
      state.checkedAccess.push(accessRequest.id);
    }
    state.connected.calendar = true;
    state.connected.gmail = true;
    state.connected.contacts = true;
    state.activeAccessId = accessRequest.id;
    setProductView("access");
    return;
  }

  const accessRequestButton = target.closest("[data-select-access]");
  if (accessRequestButton) {
    state.activeAccessId = accessRequestButton.dataset.selectAccess;
    renderAccess();
    return;
  }

  if (target.closest("[data-run-access-check]")) {
    const request = accessRequestById(state.activeAccessId);
    if (!state.checkedAccess.includes(request.id)) {
      state.checkedAccess.push(request.id);
      state.connected.calendar = true;
      state.connected.contacts = true;
      state.feed.unshift({
        person: request.asker,
        actor: "Gigi",
        text: `checked the permissioned route to ${personById(request.targetId).name} across requester, connector, and recipient agents.`,
        time: "Just now",
        capital: request.capital,
      });
      state.socialCapital += request.capital;
    }
    renderAll();
    return;
  }

  if (target.closest("[data-approve-access-route]")) {
    const request = accessRequestById(state.activeAccessId);
    const targetPerson = personById(request.targetId);
    if (state.approvedAccess.includes(request.id)) {
      setProductView("intros");
      return;
    }
    if (!state.checkedAccess.includes(request.id)) {
      state.checkedAccess.push(request.id);
    }
    if (!state.approvedAccess.includes(request.id)) {
      state.approvedAccess.push(request.id);
      state.intros.unshift({
        target: targetPerson.name,
        connector: request.connector,
        reason: "Permissioned access route",
        status: "Waiting opt-in",
      });
      state.feed.unshift({
        person: targetPerson.name,
        actor: "You",
        text: `approved the permissioned route from ${request.asker} to ${targetPerson.name}. Gigi queued the double opt-in intro locally.`,
        time: "Just now",
        capital: 5,
      });
    }
    renderAll();
    return;
  }

  const introEmailButton = target.closest("[data-select-intro-email]");
  if (introEmailButton) {
    const draft = introEmailById(introEmailButton.dataset.selectIntroEmail);
    state.activeEmailId = draft.id;
    renderIntroEmail();
    return;
  }

  if (target.closest("[data-generate-intro-email]")) {
    const draft = introEmailById(state.activeEmailId);
    const person = personById(draft.targetId);
    if (!state.generatedEmailDrafts.includes(draft.id)) {
      state.generatedEmailDrafts.push(draft.id);
      state.connected.gmail = true;
      state.connected.calendar = true;
      state.connected.contacts = true;
      state.socialCapital += draft.capital;
      state.feed.unshift({
        person: person.name,
        actor: "Gigi",
        text: `generated an approval-gated Gmail intro draft from ${draft.connector} to ${person.name}.`,
        time: "Just now",
        capital: draft.capital,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-approve-intro-email]")) {
    const draft = introEmailById(state.activeEmailId);
    const person = personById(draft.targetId);
    const accessRequest = accessRequestById(draft.accessId);
    if (!state.generatedEmailDrafts.includes(draft.id)) {
      state.generatedEmailDrafts.push(draft.id);
      state.connected.gmail = true;
      state.connected.calendar = true;
      state.connected.contacts = true;
      state.socialCapital += draft.capital;
    }
    if (!state.approvedEmailDrafts.includes(draft.id)) {
      state.approvedEmailDrafts.push(draft.id);
      if (!state.checkedAccess.includes(accessRequest.id)) {
        state.checkedAccess.push(accessRequest.id);
      }
      state.feed.unshift({
        person: draft.connector,
        actor: "Gigi",
        text: `approved consent boundaries for the warm intro email to ${person.name}.`,
        time: "Just now",
        capital: 3,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-send-intro-email]")) {
    const draft = introEmailById(state.activeEmailId);
    const person = personById(draft.targetId);
    const accessRequest = accessRequestById(draft.accessId);
    if (state.sentEmailDrafts.includes(draft.id)) {
      setProductView("intros");
      return;
    }
    if (!state.generatedEmailDrafts.includes(draft.id)) {
      state.generatedEmailDrafts.push(draft.id);
      state.socialCapital += draft.capital;
    }
    if (!state.approvedEmailDrafts.includes(draft.id)) {
      state.approvedEmailDrafts.push(draft.id);
    }
    if (!state.checkedAccess.includes(accessRequest.id)) {
      state.checkedAccess.push(accessRequest.id);
    }
    if (!state.approvedAccess.includes(accessRequest.id)) {
      state.approvedAccess.push(accessRequest.id);
    }
    state.sentEmailDrafts.push(draft.id);
    state.connected.gmail = true;
    state.connected.calendar = true;
    state.connected.contacts = true;
    if (!state.intros.some((intro) => intro.target === person.name && intro.reason === "Gmail warm intro")) {
      state.intros.unshift({
        target: person.name,
        connector: draft.connector,
        reason: "Gmail warm intro",
        status: "Sent",
      });
    }
    state.feed.unshift({
      person: person.name,
      actor: "You",
      text: `sent the local warm intro email to ${person.name} through ${draft.connector}. Nothing external was transmitted.`,
      time: "Just now",
      capital: 4,
    });
    setProductView("intros");
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

  const messageThreadButton = target.closest("[data-select-message-thread]");
  if (messageThreadButton) {
    const thread = messageThreadById(messageThreadButton.dataset.selectMessageThread);
    state.activeMessageThreadId = thread.id;
    state.previewListIndex = thread.listIndex;
    renderMessages();
    return;
  }

  if (target.closest("[data-build-message-link]")) {
    const thread = messageThreadById(state.activeMessageThreadId);
    if (!state.builtMessageLinks.includes(thread.id)) {
      state.builtMessageLinks.push(thread.id);
    }
    state.previewListIndex = thread.listIndex;
    state.shareListIndex = thread.listIndex;
    state.feed.unshift({
      person: thread.cardTitle,
      actor: "Gigi",
      text: `built a private message card for ${thread.contact} with ${thread.people.length} gated warm paths.`,
      time: "Just now",
      capital: 5,
    });
    renderAll();
    return;
  }

  if (target.closest("[data-send-message-link]")) {
    const thread = messageThreadById(state.activeMessageThreadId);
    if (!state.builtMessageLinks.includes(thread.id)) {
      state.builtMessageLinks.push(thread.id);
    }
    if (!state.sentMessageLinks.includes(thread.id)) {
      state.sentMessageLinks.push(thread.id);
      state.connected.gmail = true;
      state.feed.unshift({
        person: thread.contact,
        actor: "You",
        text: `sent the ${thread.cardTitle} Gigi card to a local DM preview. Nothing external was sent.`,
        time: "Just now",
        capital: 4,
      });
    }
    renderAll();
    return;
  }

  if (target.closest("[data-open-message-link]")) {
    const thread = messageThreadById(state.activeMessageThreadId);
    if (!state.builtMessageLinks.includes(thread.id)) return;
    state.shareListIndex = thread.listIndex;
    state.shareLens = "founder";
    openSharedList(thread.listIndex);
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

document.querySelector("[data-score-query]")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("[data-reveal-score]")?.click();
  }
});

document.querySelector("[data-goal-brief]")?.addEventListener("input", (event) => {
  state.goalBrief = event.currentTarget.value;
});

document.querySelector("[data-ask-brief]")?.addEventListener("input", (event) => {
  state.askBrief = event.currentTarget.value;
});

document.querySelector("[data-reference-brief]")?.addEventListener("input", (event) => {
  state.referenceBrief = event.currentTarget.value;
});

document.addEventListener("input", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (target?.matches("[data-score-query]")) {
    state.scoreQuery = target.value;
    return;
  }
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
