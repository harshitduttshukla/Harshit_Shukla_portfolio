import type { Faq } from "@/lib/seo";

export type Service = {
  slug: string;
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: [string, string];
  problems: string[];
  deliverables: { title: string; text: string }[];
  stack: string[];
  idealFor: string[];
  caseStudies: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "full-stack-development",
    name: "Full-Stack Development",
    short: "One developer for the interface, the API and the database — built, shipped and handed over properly.",
    metaTitle: "Hire a Freelance Full-Stack Developer (Remote, Worldwide) | Harshit Shukla",
    metaDescription:
      "Hire a freelance full-stack developer for React, Next.js, Node.js, FastAPI and PostgreSQL projects. Remote work with clients in India, USA, UK, UAE and Europe.",
    h1: "Hire a freelance full-stack developer who owns the whole build",
    intro: [
      "I'm Harshit Shukla, a freelance full-stack developer. I design and build web applications end to end: the React or Next.js interface, the Node.js or FastAPI backend, the PostgreSQL data model, and the deployment that keeps it running.",
      "I work remotely with founders, agencies and businesses across India and abroad. You get one accountable developer, clear written updates, and code you actually own — not a black box you're locked into.",
    ],
    problems: [
      "You've been passed between a frontend freelancer and a backend freelancer, and nothing quite connects.",
      "Your product idea is clear but you don't have an in-house engineering team to build it.",
      "An existing app is slow, buggy or hard to change, and the original developer is gone.",
      "You need someone who can talk to business stakeholders and still write production code.",
    ],
    deliverables: [
      { title: "Product & data planning", text: "User flows, roles, data model and API contract agreed before code is written." },
      { title: "Responsive frontend", text: "React / Next.js interfaces in TypeScript that work on phones, tablets and desktops." },
      { title: "Secure backend & APIs", text: "REST APIs with validation, JWT authentication and role-based access control." },
      { title: "Database design", text: "PostgreSQL schemas, migrations and queries designed for the way your data grows." },
      { title: "Deployment", text: "Production setup on Vercel, AWS or Docker, with environment variables and backups handled." },
      { title: "Handover", text: "Source code in your repository, setup notes and a walkthrough so your team can continue." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS"],
    idealFor: ["Startups building a first product", "Businesses replacing spreadsheets with software", "Agencies needing a reliable white-label developer"],
    caseStudies: ["apartment-booking-system", "vrumo-vehicle-care", "homeland-investment-platform", "obd-smart-dashboard"],
    faqs: [
      { q: "Do you work with clients outside India?", a: "Yes. I work remotely with clients in India, the USA, the UK, the UAE, Europe and Australia. Communication happens over email, Slack, WhatsApp or video calls, and I plan overlap hours around your time zone." },
      { q: "Can you take over an existing codebase?", a: "Yes. I start with a short code review to understand the architecture and risks, then agree a plan for fixes and new features before changing anything significant." },
      { q: "How do you charge for full-stack projects?", a: "Most projects are fixed-price per milestone after a scoping call. Ongoing work can be billed monthly. See the pricing page for typical starting points." },
      { q: "Who owns the code?", a: "You do. The code lives in your repository and full ownership transfers to you on payment." },
    ],
  },
  {
    slug: "nextjs-development",
    name: "Next.js Development",
    short: "Fast, SEO-friendly Next.js sites and apps with the right mix of SSR, SSG and client rendering.",
    metaTitle: "Next.js Developer for Hire — SSR, SSG & Migrations | Harshit Shukla",
    metaDescription:
      "Freelance Next.js developer for hire. App Router, SSR/SSG, Core Web Vitals and WordPress to Next.js migration. Remote for clients in India and worldwide.",
    h1: "Next.js developer for hire — fast pages that search engines can read",
    intro: [
      "Next.js is my default framework for marketing sites, product websites and web apps. I've shipped live production sites with it, including SSR and SSG rendering strategies, REST API integrations and Core Web Vitals work.",
      "Whether you're starting fresh, moving off WordPress, or untangling a slow React app, I'll pick the rendering strategy page by page so it's fast for users and fully crawlable for Google.",
    ],
    problems: [
      "Your WordPress site is slow, plugin-heavy and hard to secure.",
      "Your React single-page app looks fine to users but Google barely indexes it.",
      "Lighthouse and Core Web Vitals scores are holding back your rankings.",
      "You've started on the App Router but data fetching, caching and metadata are confusing.",
    ],
    deliverables: [
      { title: "App Router architecture", text: "Layouts, route groups, server components and client islands organised sensibly." },
      { title: "Rendering strategy", text: "SSG, SSR or static export chosen per route for speed and freshness." },
      { title: "SEO foundations", text: "Metadata API, canonical URLs, sitemap, robots, Open Graph and JSON-LD built in." },
      { title: "Performance work", text: "Image optimisation, font loading, bundle trimming and Core Web Vitals fixes." },
      { title: "WordPress → Next.js migration", text: "Content moved, URLs preserved or redirected, and rankings protected." },
      { title: "Deployment", text: "Vercel or self-hosted deployment with preview environments." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Headless CMS", "REST APIs"],
    idealFor: ["Businesses leaving WordPress", "SaaS marketing sites", "Content sites that depend on organic traffic"],
    caseStudies: ["cyber-shield-pro-website", "job-outreach-agent", "seo-content-intelligence"],
    faqs: [
      { q: "Will migrating from WordPress to Next.js hurt my SEO?", a: "Not if it's planned. I map every existing URL, keep slugs where possible, add 301 redirects where they change, and carry over titles, descriptions and structured data. Traffic should be monitored in Search Console for a few weeks after launch." },
      { q: "Can my team still edit content after the move?", a: "Yes. We can connect a headless CMS or a simple Markdown/MDX workflow, depending on how often you publish and who edits." },
      { q: "Do you work with the Pages Router too?", a: "Yes. I can maintain Pages Router projects or migrate them gradually to the App Router." },
    ],
  },
  {
    slug: "backend-api-development",
    name: "Backend & API Development",
    short: "Node.js and FastAPI backends with secure auth, clean REST APIs and payment integrations.",
    metaTitle: "Node.js & FastAPI Backend Developer — REST APIs, Auth, Payments | Harshit Shukla",
    metaDescription:
      "Freelance Node.js and FastAPI backend developer. REST APIs, JWT/RBAC auth, PostgreSQL, UPI, Razorpay and Stripe integrations. Remote, India and worldwide.",
    h1: "Node.js & FastAPI backend developer for APIs that hold up in production",
    intro: [
      "I build backends in Node.js/Express and Python/FastAPI: REST APIs, authentication, role-based permissions, background jobs and integrations with payment gateways and third-party services.",
      "My production work includes 10+ REST API endpoints for a booking platform, bulk Excel ingestion into PostgreSQL, idempotent availability logic to prevent double bookings, and a UPI payment integration with dynamic QR codes.",
    ],
    problems: [
      "Your frontend is ready but there's no reliable API behind it.",
      "Users can see or change data they shouldn't — permissions were bolted on late.",
      "Payments, webhooks or third-party integrations fail silently.",
      "The API slows down or breaks as usage grows.",
    ],
    deliverables: [
      { title: "API design", text: "Resource-oriented REST endpoints with validation, error formats and documentation." },
      { title: "Authentication & RBAC", text: "JWT sessions, password flows and granular role-based access control." },
      { title: "Payment integration", text: "UPI, Razorpay or Stripe checkout, webhooks and reconciliation logic." },
      { title: "Data layer", text: "PostgreSQL schemas, SQLAlchemy or SQL queries, migrations and indexing." },
      { title: "Reliability", text: "Rate limiting, idempotent operations, logging and sensible error handling." },
    ],
    stack: ["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "MongoDB", "JWT", "Razorpay", "Stripe", "UPI"],
    idealFor: ["Mobile apps that need a backend", "Teams with a frontend but no backend developer", "Businesses adding payments or integrations"],
    caseStudies: ["apartment-booking-system", "obd-smart-dashboard", "homeland-investment-platform", "vrumo-vehicle-care"],
    faqs: [
      { q: "Node.js or FastAPI — which should I choose?", a: "Node.js is a natural fit when your team already writes TypeScript. FastAPI is excellent when the backend works closely with Python data or AI tooling. I'll recommend one based on your team and roadmap, not habit." },
      { q: "Can you integrate Indian and international payment gateways?", a: "Yes. I've integrated UPI with dynamic QR codes, and I can work with Razorpay for Indian customers and Stripe for international ones." },
      { q: "Do you write API documentation?", a: "Yes. FastAPI generates OpenAPI docs automatically, and for Node.js I provide an OpenAPI spec or a clear endpoint reference." },
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS & MVP Development",
    short: "Multi-tenant SaaS products and MVPs scoped to launch quickly without painting you into a corner.",
    metaTitle: "SaaS & MVP Development for Startups (Remote) | Harshit Shukla",
    metaDescription:
      "Freelance SaaS and MVP developer for startups. Multi-tenant architecture, subscriptions, admin dashboards and role-based access. Remote, India and worldwide.",
    h1: "SaaS & MVP development for startups that need to launch, then grow",
    intro: [
      "I help founders turn a SaaS idea into a working product: multi-tenant data model, authentication, roles, billing-ready flows, admin dashboards and the core feature that makes customers pay.",
      "I've architected a multi-tenant booking and billing platform across Host, Admin and Client roles, and built an AI SaaS MVP with multi-tenant workspaces. An MVP should be small, but its foundations shouldn't need rewriting at your first hundred customers.",
    ],
    problems: [
      "You have a validated idea but no technical co-founder.",
      "Agency quotes are large and timelines are vague.",
      "A no-code prototype has hit its limits.",
      "You're unsure how to separate data between customers safely.",
    ],
    deliverables: [
      { title: "MVP scoping", text: "A prioritised feature list that fits your budget and gets you to real users fast." },
      { title: "Multi-tenant architecture", text: "Tenant-aware data model and access rules so customers never see each other's data." },
      { title: "Auth, roles & onboarding", text: "Sign-up, invites, role-based dashboards and account settings." },
      { title: "Subscription-ready flows", text: "Plans, trials and payment provider integration when you're ready to charge." },
      { title: "Admin dashboard", text: "Internal tools to manage users, data and support requests." },
      { title: "Launch & iteration", text: "Production deployment, analytics hooks and a roadmap for version two." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "Stripe", "Razorpay", "AWS", "Docker"],
    idealFor: ["Non-technical founders", "Startups replacing a no-code prototype", "Businesses productising an internal tool"],
    caseStudies: ["apartment-booking-system", "seo-content-intelligence", "homeland-investment-platform"],
    faqs: [
      { q: "How long does an MVP take?", a: "It depends on scope. A focused MVP with authentication, a core workflow and an admin view commonly takes several weeks. I'll give you a milestone plan after a scoping call." },
      { q: "Can the MVP scale later?", a: "Yes. I keep the MVP small but use solid foundations — a proper relational database, clean API boundaries and tenant-aware data — so scaling means extending rather than rewriting." },
      { q: "Do you sign NDAs?", a: "Yes, happily, before we discuss the details of your idea." },
      { q: "Can you help after launch?", a: "Yes. Many clients keep me on a monthly arrangement for features, fixes and infrastructure." },
    ],
  },
  {
    slug: "ai-app-development",
    name: "AI App Development",
    short: "LLM-powered chatbots, agents and document workflows using Claude, OpenAI, Gemini and OpenRouter.",
    metaTitle: "AI App & LLM Developer for Hire — Chatbots, Agents, Automation | Harshit Shukla",
    metaDescription:
      "Freelance AI and LLM app developer. Chatbots, AI agents, document processing and automation with Claude, OpenAI, Gemini and OpenRouter. Remote, worldwide.",
    h1: "AI app & LLM developer for features your users will actually use",
    intro: [
      "I build practical AI features into real products: chatbots grounded in your content, agentic workflows that call tools, document parsing, and content generation with human approval built in.",
      "I've built a job outreach agent with resume parsing, lead research, personalised email generation and IMAP/SMTP delivery, and an AI SEO platform with a governed orchestrator using typed tools and approval gates. I work with Anthropic Claude, OpenAI, Google Gemini and OpenRouter.",
    ],
    problems: [
      "You want to add AI to your product but aren't sure which use case is worth it.",
      "A ChatGPT prototype works in a demo but is unreliable with real data.",
      "LLM costs or latency are unpredictable.",
      "You need AI output reviewed by a human before it reaches customers.",
    ],
    deliverables: [
      { title: "Use-case scoping", text: "Pick the AI feature with the clearest value and a measurable success check." },
      { title: "LLM integration", text: "Claude, OpenAI, Gemini or OpenRouter wired in with prompts, retries and cost controls." },
      { title: "Agents & tools", text: "Agentic workflows with typed tools, guardrails and human-in-the-loop approval." },
      { title: "Document & data workflows", text: "Parsing, extraction and summarisation of PDFs, resumes, emails and records." },
      { title: "Chatbots", text: "Assistants grounded in your own content, embedded in your site or app." },
    ],
    stack: ["Anthropic Claude", "OpenAI", "Google Gemini", "OpenRouter", "Next.js", "FastAPI", "Python", "TypeScript", "PostgreSQL"],
    idealFor: ["SaaS products adding AI features", "Teams automating repetitive document work", "Founders building AI-first products"],
    caseStudies: ["job-outreach-agent", "seo-content-intelligence"],
    faqs: [
      { q: "Which AI model should I use?", a: "It depends on the task, budget and data sensitivity. I often prototype with two providers through OpenRouter, compare quality and cost on your real examples, then commit to one." },
      { q: "Is my data safe when using LLM APIs?", a: "I send only the data a task needs, avoid logging sensitive content, and use providers' API terms that exclude training on your data where available. We'll review this together for your use case." },
      { q: "Can AI output be checked before it's sent?", a: "Yes. I design approval steps so people review AI-generated content or actions before anything goes to customers." },
    ],
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    short: "Technical SEO audits, on-page optimisation, schema and reporting — from a developer who fixes the code.",
    metaTitle: "SEO Services by a Developer — Technical SEO Audit & Fixes | Harshit Shukla",
    metaDescription:
      "SEO services from a developer who fixes the code: technical SEO audits, on-page SEO, schema markup, keyword research, local SEO and GSC/GA4 reporting.",
    h1: "SEO services by a developer who fixes the code, not just the report",
    intro: [
      "Most SEO audits end with a PDF of problems someone else must fix. I'm a full-stack developer as well as an SEO specialist, so I find the technical issues holding your site back and then fix them directly — rendering, speed, crawlability, metadata, internal links and structured data.",
      "I also handle the content side: keyword research, search intent mapping, on-page optimisation and local SEO. I built an AI SEO content platform with keyword clustering and content maps, so I think about SEO as a system, not a checklist.",
    ],
    problems: [
      "Pages aren't indexed, or Google shows the wrong page for your main keyword.",
      "Your site is slow on mobile and Core Web Vitals are failing.",
      "You publish content but traffic doesn't grow.",
      "Your agency sends reports, but nothing in the code changes.",
    ],
    deliverables: [
      { title: "Technical SEO audit", text: "Crawlability, indexation, rendering, redirects, canonicals, sitemaps and Core Web Vitals." },
      { title: "Fixes implemented", text: "I change the code myself — metadata, performance, structure and broken links." },
      { title: "Keyword research & mapping", text: "Search terms grouped by intent and mapped to the right page to avoid cannibalisation." },
      { title: "On-page optimisation", text: "Titles, headings, copy structure, internal linking and image optimisation." },
      { title: "Schema markup", text: "JSON-LD for organisation, services, articles, FAQs and breadcrumbs." },
      { title: "Local SEO & reporting", text: "Google Business Profile guidance plus Search Console and GA4 reporting." },
    ],
    stack: ["Google Search Console", "Google Analytics 4", "Lighthouse", "PageSpeed Insights", "Schema.org / JSON-LD", "Next.js", "WordPress"],
    idealFor: ["Business websites that should bring enquiries", "SaaS sites dependent on organic signups", "Sites recovering from a migration"],
    caseStudies: ["seo-content-intelligence", "cyber-shield-pro-website"],
    faqs: [
      { q: "Can you guarantee a #1 ranking on Google?", a: "No — and no honest SEO can. Google's rankings depend on competition, algorithm updates and factors nobody controls. What I can do is remove technical barriers, improve relevance and track progress transparently in Search Console." },
      { q: "How long does SEO take to show results?", a: "Technical fixes can be picked up within weeks of re-crawling. Ranking growth from content and authority usually takes several months, depending on competition." },
      { q: "Do you work on WordPress sites as well as Next.js?", a: "Yes. I can audit and fix WordPress, Next.js and most custom-built sites." },
      { q: "What's included in monthly SEO?", a: "Ongoing technical monitoring, on-page improvements, content recommendations or briefs, schema updates and a monthly report from Search Console and GA4." },
      { q: "Do you do local SEO?", a: "Yes — Google Business Profile optimisation, local landing pages, consistent business details and review strategy." },
    ],
  },
  {
    slug: "website-development",
    name: "Business Website Development",
    short: "Fast, SEO-ready business websites with forms and WhatsApp built in to turn visitors into enquiries.",
    metaTitle: "Business Website Development — Fast & SEO-Ready | Harshit Shukla",
    metaDescription:
      "Business website development that's fast, mobile-friendly and SEO-ready, with enquiry forms and WhatsApp built in. Remote for clients in India and worldwide.",
    h1: "Business website development that brings in enquiries",
    intro: [
      "Your website should do one job well: turn the right visitors into enquiries. I build fast, mobile-first business websites with clear service pages, contact forms, click-to-WhatsApp and the SEO groundwork done properly from day one.",
      "No bloated themes or plugin stacks. You get a clean, modern site that loads quickly, is easy to update, and is structured so Google understands what you do and where you serve.",
    ],
    problems: [
      "Your current site looks dated and doesn't work well on phones.",
      "Visitors arrive but don't contact you.",
      "Nobody can find you on Google for your own services.",
      "Small changes require calling a developer every time.",
    ],
    deliverables: [
      { title: "Page structure & copy guidance", text: "Home, services, about, contact and supporting pages planned around what customers search for." },
      { title: "Responsive design", text: "Mobile-first layouts that look professional on every screen size." },
      { title: "Lead capture", text: "Enquiry forms, click-to-call and WhatsApp buttons wired to reach you instantly." },
      { title: "SEO-ready build", text: "Metadata, sitemap, schema markup, fast loading and clean URLs." },
      { title: "Analytics", text: "Google Analytics 4 and Search Console set up so you can see what works." },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel", "Web3Forms", "Google Analytics 4", "Search Console"],
    idealFor: ["Service businesses and consultants", "Clinics, agencies and local firms", "Startups needing a credible first website"],
    caseStudies: ["cyber-shield-pro-website", "vrumo-vehicle-care"],
    faqs: [
      { q: "How much does a business website cost?", a: "Simple starter websites begin from around ₹15,000 and business websites with SEO setup from around ₹30,000. International projects are quoted in USD, GBP or AED. Final price depends on pages and features." },
      { q: "Will I be able to edit the website myself?", a: "Yes. If you need to update content regularly, I'll set up an editing workflow that suits your team." },
      { q: "Do you provide hosting and a domain?", a: "I'll help you buy the domain in your own name and set up hosting (often Vercel), so you keep full control." },
    ],
  },
  {
    slug: "deployment-devops",
    name: "Deployment & DevOps",
    short: "Docker, AWS EC2/RDS, CI/CD pipelines, domains and SSL — so your app ships reliably.",
    metaTitle: "Deployment & DevOps — Docker, AWS, CI/CD Setup | Harshit Shukla",
    metaDescription:
      "Freelance deployment and DevOps help: Docker, AWS EC2 and RDS, GitHub Actions CI/CD, domains and SSL. Get your app to production reliably. Remote, worldwide.",
    h1: "Deployment & DevOps that gets your app to production — and keeps it there",
    intro: [
      "Code on a laptop isn't a product. I set up production environments with Docker, AWS EC2 and RDS, CI/CD pipelines on GitHub Actions, and the domain, DNS and SSL details that are easy to get wrong.",
      "In production work I've scaled a backend on AWS EC2 with PostgreSQL on RDS, and automated environment provisioning with GitHub Actions to cut setup to around five minutes.",
    ],
    problems: [
      "Deployments are manual, scary and occasionally break production.",
      "New developers take days to get the project running locally.",
      "You're not sure your database is backed up.",
      "Your domain, email or SSL setup is a mess.",
    ],
    deliverables: [
      { title: "Containerisation", text: "Dockerfiles and Docker Compose for consistent local and production environments." },
      { title: "Cloud setup", text: "AWS EC2, RDS PostgreSQL, security groups and environment configuration." },
      { title: "CI/CD pipelines", text: "GitHub Actions for tests, builds and automatic deployments." },
      { title: "Domain, DNS & SSL", text: "Domains, DNS records, HTTPS and redirects configured correctly." },
      { title: "Runbook", text: "Written notes on how to deploy, roll back and restore — so it isn't all in my head." },
    ],
    stack: ["Docker", "Docker Compose", "AWS EC2", "AWS RDS", "GitHub Actions", "Vercel", "Nginx", "PostgreSQL"],
    idealFor: ["Teams shipping manually", "Apps moving from shared hosting to the cloud", "Projects onboarding new developers"],
    caseStudies: ["obd-smart-dashboard", "apartment-booking-system"],
    faqs: [
      { q: "Should I use AWS or Vercel?", a: "Vercel is ideal for Next.js frontends and simple APIs. AWS suits long-running backends, databases and custom infrastructure. Many projects use both." },
      { q: "Can you work with my existing server?", a: "Yes. I can audit your current setup and improve it gradually rather than starting over." },
      { q: "Do you provide ongoing server maintenance?", a: "Yes, on a monthly basis for updates, monitoring and incident support." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
