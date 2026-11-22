import type { Faq } from "@/lib/seo";

export type Location = {
  slug: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: [string, string];
  timeZone: { heading: string; text: string; overlap: string };
  payment: { heading: string; text: string; methods: string[] };
  reasons: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: Faq[];
  areaServed: { type: "Country" | "City" | "State" | "Place"; name: string }[];
};

export const locations: Location[] = [
  {
    slug: "freelance-web-developer-india",
    region: "India",
    metaTitle: "Freelance Web Developer in India — Remote, Pan-India | Harshit Shukla",
    metaDescription:
      "Hire a freelance web developer in India for websites, web apps, SaaS and SEO. Remote across Bengaluru, Delhi NCR, Mumbai, Pune, Hyderabad and beyond. INR pricing.",
    h1: "Freelance web developer in India, working remotely with businesses nationwide",
    intro: [
      "I work with startups, agencies and businesses across India — Bengaluru, Delhi NCR, Mumbai, Pune, Hyderabad, Chennai and smaller cities alike. Everything is done remotely, so where you're based doesn't matter.",
      "You get transparent INR pricing, GST-friendly invoicing on request, communication in English or Hindi, and a developer who understands Indian payment flows like UPI and Razorpay.",
    ],
    timeZone: {
      heading: "Same time zone, full working day",
      text: "We share IST, so meetings, quick WhatsApp questions and same-day fixes are easy. There's no waiting overnight for answers.",
      overlap: "Full IST working-day overlap",
    },
    payment: {
      heading: "INR pricing and Indian payment methods",
      text: "Projects are quoted in Indian Rupees and paid in milestones, usually an advance followed by payments on delivery of agreed stages.",
      methods: ["UPI", "Bank transfer (NEFT/IMPS)", "Razorpay payment link"],
    },
    reasons: [
      { title: "Built for Indian users", text: "UPI payments, phone-number logins and mobile-first layouts for India's mobile-heavy traffic." },
      { title: "Production experience", text: "I've shipped production booking, dashboard and website projects for Indian companies." },
      { title: "SEO included", text: "Sites are structured to rank on Google India from day one, including local SEO." },
      { title: "Fair, clear pricing", text: "Starting prices are published on the pricing page — no surprise invoices." },
    ],
    steps: [
      { title: "Free call", text: "A 20–30 minute call or WhatsApp chat to understand your goals." },
      { title: "Quote in INR", text: "A written scope, milestones and fixed price." },
      { title: "Build with weekly demos", text: "You see progress every week and give feedback early." },
      { title: "Launch & support", text: "Go-live, handover and optional monthly support." },
    ],
    faqs: [
      { q: "Do you only work with clients in Lucknow?", a: "No. Lucknow is my home base, but I work remotely with clients all over India." },
      { q: "Can you provide a GST invoice?", a: "Please mention it during scoping and we'll agree the invoicing details before the project starts." },
      { q: "Can we meet in person?", a: "Most work is remote, which keeps costs down. For clients in or near Lucknow, an in-person meeting can be arranged." },
    ],
    areaServed: [{ type: "Country", name: "India" }],
  },
  {
    slug: "remote-developer-for-usa",
    region: "USA",
    metaTitle: "Remote Full-Stack Developer for US Startups & Businesses | Harshit Shukla",
    metaDescription:
      "Hire a remote full-stack, Next.js and AI developer from India for US startups. Overlap with EST/PST mornings, USD pricing, async-first communication.",
    h1: "Remote full-stack developer for US startups and businesses",
    intro: [
      "US founders and agencies hire me for Next.js products, SaaS MVPs, backends, AI features and technical SEO — delivered remotely from India with an async-first workflow that fits US schedules.",
      "You get senior-level ownership of the build, written daily or weekly updates, and a time-zone difference that works in your favour: work moves forward while you sleep.",
    ],
    timeZone: {
      heading: "Overlap with your morning, progress overnight",
      text: "IST is 9.5–12.5 hours ahead of US time zones. I keep a regular overlap window with your morning for calls, then build during your night so you wake up to progress.",
      overlap: "Early-morning EST / late-evening IST overlap; PST by arrangement",
    },
    payment: {
      heading: "USD pricing, international payments",
      text: "Projects are quoted in US dollars, fixed-price per milestone or as a monthly retainer.",
      methods: ["Wise", "PayPal", "International bank transfer"],
    },
    reasons: [
      { title: "Async-first", text: "Clear written updates, Loom-style walkthroughs and documented decisions, so you're never chasing status." },
      { title: "Modern US-standard stack", text: "Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, Stripe, AWS and Vercel." },
      { title: "AI-ready", text: "Experience building with Claude, OpenAI, Gemini and OpenRouter for AI-powered features." },
      { title: "Cost-effective ownership", text: "One developer owning the full stack, priced competitively for US budgets." },
    ],
    steps: [
      { title: "Intro call", text: "A short video call scheduled in your time zone." },
      { title: "Scope & USD quote", text: "A written proposal with milestones and deliverables." },
      { title: "Async build", text: "Daily or weekly written updates and preview deployments." },
      { title: "Launch & handover", text: "Deployment, documentation and optional retainer." },
    ],
    faqs: [
      { q: "How do we handle the time difference?", a: "We agree a fixed overlap window for live calls — typically your early morning — and everything else happens asynchronously with written updates." },
      { q: "Can you sign an NDA or contractor agreement?", a: "Yes. I'm happy to sign an NDA and a standard independent contractor agreement before work starts." },
      { q: "Can you work with Stripe and US payment flows?", a: "Yes. I can integrate Stripe for subscriptions and one-off payments." },
      { q: "How much does it cost to hire you from the US?", a: "Projects are quoted as a fixed USD price per milestone after a short scoping call. Because I work independently from India, the cost is typically well below US agency rates for the same scope." },
      { q: "Which US clients do you work with?", a: "Startups, founders, small businesses and agencies across the United States, including New York, San Francisco, Austin, Seattle, Chicago and remote-first companies." },
      { q: "Can you join our existing team as a contractor?", a: "Yes. I can work inside your GitHub, Jira or Linear and Slack, follow your code review process and ship features alongside your in-house developers." },
      { q: "Do you build sites that rank on Google in the US?", a: "Yes. Every site includes technical SEO, structured data and fast Core Web Vitals, and content can be targeted at US search terms and cities." },
    ],
    areaServed: [{ type: "Country", name: "United States" }],
  },
  {
    slug: "remote-developer-for-uk",
    region: "UK",
    metaTitle: "Remote Web & SaaS Developer for UK Businesses | Harshit Shukla",
    metaDescription:
      "Remote full-stack and Next.js developer for UK businesses and agencies. Strong GMT/BST overlap, GBP pricing, GDPR-aware builds and technical SEO.",
    h1: "Remote web & SaaS developer for UK businesses and agencies",
    intro: [
      "UK businesses and agencies work with me for websites, web applications, SaaS products and technical SEO. India's time zone overlaps comfortably with the UK working day, so collaboration feels close to having someone in-house.",
      "I build with privacy in mind — collecting only the data you need, making cookie and analytics choices deliberately — and I'm comfortable working as a white-label developer for UK agencies.",
    ],
    timeZone: {
      heading: "A shared working morning every day",
      text: "IST is 4.5–5.5 hours ahead of the UK, which gives us your entire morning and early afternoon for real-time collaboration.",
      overlap: "UK 9am–1pm ≈ IST afternoon/evening",
    },
    payment: {
      heading: "GBP pricing",
      text: "Projects are quoted in pounds sterling, fixed-price per milestone or monthly for ongoing work.",
      methods: ["Wise", "PayPal", "International bank transfer"],
    },
    reasons: [
      { title: "Generous overlap", text: "Daily live overlap with UK hours — no 3am calls on either side." },
      { title: "Agency-friendly", text: "White-label delivery, your branding on handover, and clean code your team can maintain." },
      { title: "Privacy-aware", text: "Builds that minimise personal data and make analytics and cookie use deliberate." },
      { title: "SEO built in", text: "Technical SEO for Google UK, including structured data and fast mobile pages." },
    ],
    steps: [
      { title: "Discovery call", text: "Scheduled during UK working hours." },
      { title: "Proposal in GBP", text: "Scope, milestones and fixed price." },
      { title: "Build in sprints", text: "Regular check-ins during our overlap window." },
      { title: "Launch & support", text: "Go-live and optional monthly retainer." },
    ],
    faqs: [
      { q: "Can you work under our agency's brand?", a: "Yes. I regularly work as a white-label developer and won't contact your clients directly unless you want me to." },
      { q: "Do you build GDPR-compliant websites?", a: "I build with privacy-by-design practices such as data minimisation and consent-aware analytics. Final legal compliance is your responsibility, so I recommend reviewing policies with a qualified advisor." },
      { q: "What hours are you available?", a: "I'm available for live calls during UK mornings and early afternoons on weekdays." },
    ],
    areaServed: [{ type: "Country", name: "United Kingdom" }],
  },
  {
    slug: "remote-developer-for-uae",
    region: "UAE",
    metaTitle: "Remote Web Developer for Dubai & UAE Businesses | Harshit Shukla",
    metaDescription:
      "Remote web, app and SEO developer for businesses in Dubai, Abu Dhabi and the UAE. Near-identical time zone to India, AED pricing, WhatsApp-first communication.",
    h1: "Remote web developer for businesses in Dubai, Abu Dhabi and the UAE",
    intro: [
      "Businesses in Dubai, Abu Dhabi, Sharjah and across the UAE work with me for business websites, booking and property platforms, web apps and SEO — fully remote, with almost no time-zone gap.",
      "Communication is WhatsApp-first if you prefer, pricing is in AED, and builds are designed for a multilingual, mobile-first audience.",
    ],
    timeZone: {
      heading: "Only 1.5 hours apart",
      text: "Gulf Standard Time is just 1.5 hours behind IST, so our working days overlap almost entirely. Same-day replies are the norm.",
      overlap: "Near-complete working-day overlap",
    },
    payment: {
      heading: "AED pricing",
      text: "Projects are quoted in UAE dirhams, paid per milestone.",
      methods: ["International bank transfer", "Wise", "PayPal"],
    },
    reasons: [
      { title: "Practically the same time zone", text: "Collaborate in real time throughout your working day." },
      { title: "Booking & property experience", text: "I've built a multi-tenant apartment booking and reservation platform — relevant for UAE hospitality and real estate." },
      { title: "WhatsApp-first", text: "Quick questions and approvals over WhatsApp, with written records of decisions." },
      { title: "Rank in the UAE", text: "Technical and local SEO for Google searches in Dubai and the wider UAE." },
    ],
    steps: [
      { title: "WhatsApp or call", text: "Tell me about the project in a quick chat." },
      { title: "AED quote", text: "Scope, timeline and fixed milestone pricing." },
      { title: "Build with frequent previews", text: "Live preview links so you see progress as it happens." },
      { title: "Launch", text: "Go-live, handover and optional ongoing support." },
    ],
    faqs: [
      { q: "Can you build bilingual English/Arabic websites?", a: "Yes, the site structure can support English and Arabic, including right-to-left layouts. Arabic copy and translation should come from a qualified translator." },
      { q: "Do you work with real estate and hospitality businesses?", a: "Yes. My booking and reservation platform experience covers properties, availability, reservations and invoicing." },
      { q: "Can we pay in AED?", a: "Yes, projects for UAE clients are quoted in AED." },
    ],
    areaServed: [{ type: "Country", name: "United Arab Emirates" }],
  },
  {
    slug: "web-developer-lucknow",
    region: "Lucknow",
    metaTitle: "Web Developer in Lucknow — Websites, Apps & SEO | Harshit Shukla",
    metaDescription:
      "Freelance web developer based in Lucknow, Uttar Pradesh. Business websites, web apps and local SEO for Lucknow businesses — with in-person meetings available.",
    h1: "Web developer in Lucknow for websites, apps and local SEO",
    intro: [
      "Lucknow is my home base. While most of my clients are remote — across India and abroad — local businesses in Lucknow and Uttar Pradesh can also meet me in person to plan their website or app.",
      "I build fast business websites, booking and management systems, and help Lucknow businesses show up in Google Maps and local searches through local SEO and Google Business Profile optimisation.",
    ],
    timeZone: {
      heading: "Local and available",
      text: "Same city, same hours. We can meet in person for kick-off and review sessions, and handle everything else over WhatsApp or calls.",
      overlap: "In-person meetings available in Lucknow",
    },
    payment: {
      heading: "INR pricing",
      text: "Clear INR quotes with milestone-based payments.",
      methods: ["UPI", "Bank transfer", "Razorpay payment link"],
    },
    reasons: [
      { title: "Meet face to face", text: "Plan your project in person, then let the build run remotely." },
      { title: "Local SEO focus", text: "Google Business Profile, local landing pages and consistent NAP details to rank in Lucknow searches." },
      { title: "National-standard quality", text: "The same production standards I deliver for clients across India and abroad." },
      { title: "Long-term support", text: "A local developer you can call when something needs changing." },
    ],
    steps: [
      { title: "Meet or call", text: "In person in Lucknow, or over a call." },
      { title: "Quote", text: "Fixed INR price and milestones." },
      { title: "Build", text: "Regular previews and feedback rounds." },
      { title: "Launch & local SEO", text: "Go-live plus Google Business Profile setup." },
    ],
    faqs: [
      { q: "Do you only work with Lucknow businesses?", a: "No — most of my clients are remote across India and internationally. Lucknow clients simply get the option of meeting in person." },
      { q: "Can you help my business appear on Google Maps?", a: "Yes. I can set up or optimise your Google Business Profile, add local business schema to your site and advise on collecting genuine reviews." },
      { q: "Which areas of Lucknow do you cover?", a: "All of Lucknow — Gomti Nagar, Hazratganj, Aliganj, Indira Nagar and beyond — plus nearby cities in Uttar Pradesh remotely." },
    ],
    areaServed: [
      { type: "City", name: "Lucknow" },
      { type: "State", name: "Uttar Pradesh" },
    ],
  },
  {
    slug: "remote-developer-for-australia",
    region: "Australia",
    metaTitle: "Remote Web Developer for Australian Businesses | Harshit Shukla",
    metaDescription:
      "Hire a remote freelance web developer for Australian businesses: websites, web apps, SaaS MVPs and SEO, with working-hour overlap for Sydney, Melbourne, Brisbane and Perth.",
    h1: "Remote web developer for Australian startups and businesses",
    intro: [
      "I work remotely with businesses across Australia, including Sydney, Melbourne, Brisbane, Perth and Adelaide, building websites, web apps, SaaS MVPs and AI-powered tools.",
      "You get one senior developer from planning to launch, quotes in AUD, and SEO built in so your site is ready to rank on Google Australia.",
    ],
    timeZone: {
      heading: "Afternoon overlap with Australia",
      text: "IST is 4.5 to 5.5 hours behind Australian eastern time, so your afternoon is my morning. That leaves a comfortable window for calls every working day.",
      overlap: "3–5 hours daily overlap with AEST/AEDT",
    },
    payment: {
      heading: "AUD quotes and simple payments",
      text: "Projects are quoted in AUD and paid in milestones linked to delivered work.",
      methods: ["Wise", "International bank transfer", "PayPal"],
    },
    reasons: [
      { title: "Senior skills, sensible cost", text: "Production-grade full-stack and AI work without agency overheads." },
      { title: "Working-hour overlap", text: "Daily overlap for calls, plus progress while you're offline." },
      { title: "SEO built in", text: "Technical SEO, schema and fast Core Web Vitals from day one." },
      { title: "You own everything", text: "Domain, hosting and code are set up in your name." },
    ],
    steps: [
      { title: "Discovery call", text: "A short video call at a time that suits you." },
      { title: "Fixed AUD quote", text: "Written scope, milestones and timeline." },
      { title: "Weekly demos", text: "See progress every week and give feedback early." },
      { title: "Launch & handover", text: "Deployment, documentation and optional support." },
    ],
    faqs: [
      { q: "Can you work Australian business hours?", a: "I schedule calls in the overlap window, usually your afternoon, and keep you updated in writing every day." },
      { q: "Do you build sites that rank on Google Australia?", a: "Yes. Pages are structured with the right metadata, schema and local signals for Australian searches." },
      { q: "How do payments work?", a: "Milestone-based payments in AUD via Wise, bank transfer or PayPal." },
    ],
    areaServed: [{ type: "Country", name: "Australia" }],
  },
  {
    slug: "remote-developer-for-canada",
    region: "Canada",
    metaTitle: "Remote Web Developer for Canadian Businesses | Harshit Shukla",
    metaDescription:
      "Remote freelance web developer for Canadian startups and businesses in Toronto, Vancouver, Montreal and beyond: websites, web apps, SaaS MVPs, AI apps and SEO.",
    h1: "Remote web developer for Canadian startups and businesses",
    intro: [
      "I work remotely with founders and businesses across Canada, including Toronto, Vancouver, Montreal, Calgary and Ottawa, on websites, SaaS products and AI applications.",
      "You work directly with the developer, get quotes in CAD or USD, and receive a site that's fast, secure and set up for search from launch.",
    ],
    timeZone: {
      heading: "Morning and evening overlap",
      text: "I keep a regular overlap window for early-morning or evening calls with Eastern and Pacific time, and work progresses overnight while you're offline.",
      overlap: "Scheduled overlap with ET and PT",
    },
    payment: {
      heading: "CAD or USD quotes",
      text: "Fixed quotes in CAD or USD with milestone-based payments.",
      methods: ["Wise", "International bank transfer", "PayPal"],
    },
    reasons: [
      { title: "Startup-ready", text: "Experience shipping SaaS dashboards, booking systems and AI tools to production." },
      { title: "Overnight progress", text: "Work continues while you sleep, so you wake up to updates." },
      { title: "Clear communication", text: "Weekly demos and written progress notes." },
      { title: "Search-ready", text: "Technical SEO and structured data included." },
    ],
    steps: [
      { title: "Discovery call", text: "A video call in your morning or evening." },
      { title: "Fixed quote", text: "Scope, milestones and timeline in writing." },
      { title: "Build & demo", text: "Weekly previews of working software." },
      { title: "Launch & support", text: "Deployment, handover and optional maintenance." },
    ],
    faqs: [
      { q: "Do you sign NDAs and IP agreements?", a: "Yes. You own the code and intellectual property, and I'm happy to sign an NDA before discussing details." },
      { q: "Which time zones can you cover?", a: "I schedule calls in an agreed overlap window with Eastern or Pacific time and send written daily or weekly updates." },
      { q: "Can you work with my existing team?", a: "Yes. I can join your repository, tools and sprint process as an extra developer." },
    ],
    areaServed: [{ type: "Country", name: "Canada" }],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
