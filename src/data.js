export const profile = {
  name: "Karan Sandhu",
  role: "Software Engineer",
  company: "Weeha",
  location: "Queensland, Australia",
  timeZone: "Australia/Brisbane",
  email: "sandhukaran2821@gmail.com",
  github: "https://github.com/sandhukaran28",
  linkedin: "https://www.linkedin.com/in/karan-sandhu28/",
};

// Words wrapped in *asterisks* are highlighted with the accent gradient.
export const statement =
  "I do my best work end to end: the backend, the interface, and shipping it on web and mobile. Right now that's checkout at *Weeha.*";

export const stats = [
  { to: 50000, suffix: "+", label: "Documents processed by an AI pipeline I designed" },
  { to: 20000, suffix: "+", label: "Shipments a week through a frontend I led" },
  { to: 80, suffix: "%+", label: "Beta users who stuck with an AI health app I built" },
  { to: 35, suffix: "%", label: "Faster API responses after my performance work" },
];

// Each principle is backed by something real from the experience list.
export const principles = [
  {
    title: "I own it end to end",
    proof: "I designed, built and shipped Weeha's promo codes system, from first design to live in production.",
  },
  {
    title: "Security and speed first",
    proof: "I moved checkout pricing to the server at Weeha, and cut API response times by 35% at ESGAgent.",
  },
  {
    title: "I get up to speed fast",
    proof: "I shipped several major features across NestJS, Next.js and React Native in my first three months at Weeha.",
  },
  {
    title: "I talk to the people using it",
    proof: "At ESGAgent I ran client site visits and weekly enterprise demos, and turned what I heard into shipped features.",
  },
];

export const experience = [
  {
    company: "Weeha",
    role: "Software Engineer",
    period: "Jul 2026 - Present",
    place: "Sunshine Coast · Hybrid",
    highlights: [
      "Led the V2 server rebuild. Pricing and booking logic used to run on the client, so I moved it into a NestJS backend. Checkout is now faster, safer and works the same on web and mobile.",
      "Designed and shipped promo codes from start to finish. Businesses on the platform use them to run discounts and campaigns.",
      "Built the Resources feature so services can have bookable resources, which meant reworking booking and availability across NestJS, Next.js and React Native.",
      "Shipped several major features across the whole stack within my first three months, including a redesigned booking calendar.",
    ],
    tags: ["Next.js", "NestJS", "React Native", "TypeScript"],
  },
  {
    company: "ESGAgent.ai",
    role: "Full Stack Engineer, AI & Compliance",
    period: "Sep 2025 - Jul 2026",
    place: "Brisbane · Hybrid",
    highlights: [
      "Designed the document pipeline on async Lambdas so it could get through 50,000+ files without timing out. Claude reads each one and pulls out the carbon figures. Work that took months now takes 2 to 3 hours.",
      "Ran client site visits and weekly demos for enterprise customers, turning their real pain points into shipped features and explaining the AI in plain language.",
      "Connected Enphase, iSolarCloud and SolarEdge so clients could watch 10+ solar assets around Australia in real time.",
      "Built the platform's foundations for enterprise clients: multi-org accounts with role-based access, document versioning, AI invoice scanning and climate risk reports.",
      "Made the API 35% faster and cut the initial page load by 40%.",
    ],
    tags: ["Claude API", "AWS Lambda", "S3", "Node.js"],
  },
  {
    company: "TrueDream.ai",
    role: "Full Stack Developer, Contract",
    period: "Mar 2025 - Aug 2025",
    place: "Remote",
    highlights: [
      "Took an AI health app from idea to MVP. 120 beta users tried it, more than 80% kept using it, and over 80% signed up for early access to the launch.",
      "Built daily check-ins and a chat that uses OpenAI to turn people's answers into personal health insights.",
      "Brought 3D body models into the browser with Three.js so people could show exactly where it hurts.",
    ],
    tags: ["OpenAI", "Three.js", "GraphQL", "Supabase"],
  },
  {
    company: "RMgX Technologies",
    role: "Frontend Developer, then Associate",
    period: "May 2022 - Jan 2024",
    place: "Gurugram, India · Remote",
    highlights: [
      "Built BeFIQR, a flood management platform for the Bihar State Government. It was showcased at India Water Week 2024 and is used to coordinate disaster response.",
      "Led the frontend for eShipper, which handles 20,000+ shipments a week, and Rivo MSS, which held 97% accuracy through the Christmas rush.",
      "Built cuLive, a creator and fan platform with live chat, audio and video calls, and Stripe payments.",
      "Got promoted to Associate, mentored two interns, and won the Best Learner and Rising Star of the Year awards.",
    ],
    tags: ["React", "Angular", "Redux", "React Native"],
  },
];

export const education = [
  {
    school: "Queensland University of Technology",
    degree: "Master of Information Technology, Computer Science",
    period: "2024 - 2025",
    grade: "GPA 6.2 / 7",
    detail: "Focused on software engineering, cloud, security, and web and mobile apps.",
  },
  {
    school: "Chitkara University",
    degree: "Bachelor's, Computer Science",
    period: "2019 - 2023",
    grade: "CGPA 9.92 / 10",
    detail: "Ran events with the ACM student chapter and built apps in Flutter.",
  },
];

// The kicker leads with context (contract, client, side project) so the scale of each is clear.
export const projects = [
  {
    title: "TrueDream.ai",
    kicker: "Contract · AI health tech",
    description:
      "An AI health companion. You check in each day, chat about how you're feeling, and see your pain points on a 3D model of your body.",
    highlights: [
      "120 beta users with 80%+ retention",
      "3D body models in the browser with Three.js",
    ],
    tags: ["React", "OpenAI", "Three.js", "GraphQL", "Supabase"],
    flow: ["Daily check-in", "AI analysis", "Health insights"],
    icon: "activity",
    gradient: "linear-gradient(135deg, #7b5cff 0%, #b06ef5 45%, #ff8fb1 100%)",
  },
  {
    title: "CisoZen AI",
    kicker: "Client project · Cybersecurity risk",
    description:
      "Hands messy compliance documents to an LLM and gets back clean, structured cybersecurity risk records.",
    highlights: [
      "Built on the Claude API",
      "Validation and logging so every record can be audited",
    ],
    tags: ["Python", "LLM", "Claude API", "REST"],
    flow: ["Raw compliance data", "LLM analysis", "Risk records"],
    icon: "shield",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #6d5cf6 40%, #22b8e6 100%)",
    github: "https://github.com/sandhukaran28/Cisozen-AI",
  },
  {
    title: "BeFIQR",
    kicker: "Government · Flood management",
    description:
      "Real-time flood monitoring for the Bihar State Government. It reads live data from dams and embankments, raises flood alerts and notifies officials.",
    highlights: [
      "Showcased at India Water Week 2024",
      "Used for disaster response across Bihar",
    ],
    tags: ["React", "React Native", "Node.js", "MongoDB"],
    flow: ["Live sensor data", "Flood alerts", "Emergency comms"],
    icon: "droplet",
    gradient: "linear-gradient(135deg, #0b84f3 0%, #13a9d6 50%, #2fd29b 100%)",
    demo: "https://www.befiqr.in/app/",
  },
  {
    title: "NoteFlix",
    kicker: "Side project · AI video",
    description:
      "Upload a PDF and get a narrated video back. AI writes the script, records the voiceover and keeps it in sync with the pages.",
    highlights: [
      "Runs on an async AWS Lambda pipeline",
      "Tracks every job, retries failures and shows live progress",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "AWS Lambda", "LLM"],
    flow: ["PDF", "Script", "Narration", "Video"],
    icon: "play",
    gradient: "linear-gradient(135deg, #ff6a5c 0%, #ff9a5a 45%, #ffcf6e 100%)",
    demo: "https://noteflix-app.vercel.app/",
    github: "https://github.com/sandhukaran28/Noteflix-App",
  },
  {
    title: "ContextBridge",
    kicker: "Open source · In progress",
    description:
      "An MCP server that lets several Claude Code sessions share context, so the agent in your frontend repo knows what the one in your backend repo just did.",
    highlights: [
      "Built on the Anthropic MCP SDK",
      "Made for split frontend and backend repos",
    ],
    tags: ["Node.js", "TypeScript", "MCP SDK"],
    flow: ["Frontend agent", "ContextBridge", "Backend agent"],
    icon: "link",
    gradient: "linear-gradient(135deg, #2b2b3d 0%, #4b3f8f 50%, #8b6cf6 100%)",
  },
];

export const interests = [
  "Strategy and adventure games",
  "Travelling and exploring new cultures",
  "Playing with creative tech and AI tools",
];
