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

const state = {
  view: "feed",
  query: "AI founders in SF who raised with Tier 1 VCs",
  filter: "all",
  selectedPersonId: "adrian",
  answer: "",
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
  activeMatchId: "buckhouse-belsky",
  revealedMatches: [],
  handledMatches: [],
  activeNudgeId: "clara-scott",
  builtNudges: [],
  sentNudges: [],
  activeMessageThreadId: "andrea-seed",
  builtMessageLinks: [],
  sentMessageLinks: [],
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

function scoreProfileById(id) {
  return scoreProfiles.find((profile) => profile.id === id) ?? scoreProfiles[0];
}

function messageThreadById(id) {
  return messageThreads.find((thread) => thread.id === id) ?? messageThreads[0];
}

function matchReportById(id) {
  return matchReports.find((report) => report.id === id) ?? matchReports[0];
}

function connectorNudgeById(id) {
  return connectorNudges.find((nudge) => nudge.id === id) ?? connectorNudges[0];
}

function setupSourceById(id) {
  return setupSources.find((source) => source.id === id) ?? setupSources[0];
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
      setup: "Trust setup",
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
      graph: "Trust graph",
      lists: "Smart links",
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

function renderBriefings() {
  const agenda = document.querySelector("[data-briefing-agenda]");
  const card = document.querySelector("[data-briefing-card]");
  const dossier = document.querySelector("[data-briefing-dossier]");
  if (!agenda || !card || !dossier) return;

  const briefing = briefingById(state.activeBriefingId);
  const person = personById(briefing.personId);
  const generated = state.generatedBriefings.includes(briefing.id);
  const sent = state.sentBriefings.includes(briefing.id);
  const signals = briefing.signalIds
    .map((id) => contextSignals.find((signal) => signal.id === id))
    .filter(Boolean);

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
  renderScore();
  renderMatches();
  renderNudges();
  renderProfile();
  renderSignals();
  renderContext();
  renderBriefings();
  renderGoals();
  renderAsks();
  renderReferences();
  renderFeed();
  renderPeople();
  renderGraph();
  renderLists();
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
