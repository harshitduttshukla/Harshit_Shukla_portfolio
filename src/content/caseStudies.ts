export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  status: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  challenge: string[];
  solution: string[];
  features: string[];
  highlights: { value: string; label: string }[];
  role: string;
  tech: string[];
  services: string[];
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "apartment-booking-system",
    name: "Apartment Booking & Reservation Management System",
    category: "SaaS platform",
    status: "Production application",
    metaTitle: "Case Study: Multi-Tenant Apartment Booking SaaS | Harshit Shukla",
    metaDescription:
      "How I built a multi-tenant apartment booking, reservation and billing SaaS with Next.js, Node.js, PostgreSQL, JWT/RBAC, UPI payments and AWS EC2/RDS.",
    summary:
      "A multi-tenant SaaS system for managing properties, clients, reservations, invoices and room availability across Host, Admin and Client roles.",
    challenge: [
      "Property operations were spread across separate tools, making reservations, invoices and availability hard to keep in sync.",
      "Concurrent booking requests risked double-booking the same room.",
      "Three different user roles needed strictly separated access to data.",
    ],
    solution: [
      "Architected a multi-tenant backend with secure JWT-based role access for Host, Admin and Client users.",
      "Engineered idempotent room-availability logic to prevent double bookings under concurrent requests.",
      "Built 10+ REST API endpoints and the role-based dashboards and booking workflows on top of them.",
      "Integrated a UPI payment gateway with dynamic QR codes.",
      "Deployed the backend on AWS EC2 with PostgreSQL on AWS RDS.",
    ],
    features: [
      "Host, property and client management",
      "Reservation and invoice workflows",
      "JWT authentication and RBAC",
      "Real-time room availability validation",
      "UPI payments with dynamic QR codes",
    ],
    highlights: [
      { value: "10+", label: "REST API endpoints" },
      { value: "3", label: "User roles (Host, Admin, Client)" },
      { value: "AWS", label: "EC2 + RDS deployment" },
    ],
    role: "Full-stack architecture, backend APIs, frontend workflows, PostgreSQL deployment and AWS setup.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "JWT / RBAC", "AWS EC2/RDS", "UPI"],
    services: ["saas-development", "backend-api-development", "full-stack-development", "deployment-devops"],
    links: [{ label: "Frontend source", href: "https://github.com/harshitduttshukla/pajasa_website_dashbord_frontend" }],
  },
  {
    slug: "obd-smart-dashboard",
    name: "OBD Smart Diagnostics Dashboard",
    category: "Data dashboard",
    status: "Production dashboard",
    metaTitle: "Case Study: OBD Smart Automotive Diagnostics Dashboard | Harshit Shukla",
    metaDescription:
      "React admin dashboard and Node.js APIs for an automotive diagnostics platform: 1,000+ records, bulk Excel ingestion, Docker and CI/CD supporting 500+ users.",
    summary:
      "An automotive diagnostics platform for managing large technical datasets, vehicle commands, products and uploaded records — built as an early engineer.",
    challenge: [
      "Diagnostic data arrived in large Excel files that had to be processed into a structured database.",
      "The team needed a fast admin view over a large and growing dataset.",
      "Setting up the development environment was slow for each new contributor.",
    ],
    solution: [
      "Architected a React admin dashboard managing 1,000+ real-time diagnostic records.",
      "Engineered Node.js and Express APIs for bulk Excel ingestion into PostgreSQL.",
      "Automated environment provisioning with GitHub Actions CI/CD and Docker Compose, reducing setup to around five minutes.",
      "Implemented API-level rate limiting to support growth from 0 to 500+ users.",
    ],
    features: [
      "1,000+ row diagnostic data views",
      "Excel upload and structured processing",
      "Automotive command and fault-code tools",
      "Containerised database tooling",
    ],
    highlights: [
      { value: "1,000+", label: "Diagnostic records managed" },
      { value: "500+", label: "Users supported" },
      { value: "~5 min", label: "Environment setup" },
    ],
    role: "Frontend dashboard, backend APIs, upload workflows, PostgreSQL integration and Docker/CI environments (3rd employee).",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker", "GitHub Actions"],
    services: ["full-stack-development", "backend-api-development", "deployment-devops"],
    links: [
      { label: "Frontend source", href: "https://github.com/ashishdev3355/Dashboard-1" },
      { label: "Backend source", href: "https://github.com/ashishdev3355/dashbordbackend" },
    ],
  },
  {
    slug: "cyber-shield-pro-website",
    name: "Cyber Shield Pro Website",
    category: "Production website",
    status: "Live production website",
    metaTitle: "Case Study: Cyber Shield Pro Next.js Website | Harshit Shukla",
    metaDescription:
      "A responsive Next.js production website for a cybersecurity product, with SSR/SSG rendering, REST API integrations and Core Web Vitals performance work.",
    summary:
      "A production web presence for a cybersecurity and internet exposure management product, built with Next.js.",
    challenge: [
      "A security product needs a fast, credible website that works across browsers and devices.",
      "Content had to be indexable by search engines while still integrating live API data.",
    ],
    solution: [
      "Built a responsive Next.js interface with server-rendered and statically generated content.",
      "Integrated REST APIs alongside cross-functional teams.",
      "Optimised performance, accessibility and cross-browser compatibility for production releases.",
    ],
    features: ["Responsive product experience", "SSR and SSG implementation", "REST API integrations", "Cross-browser production QA"],
    highlights: [
      { value: "Live", label: "Production website" },
      { value: "SSR + SSG", label: "Rendering strategy" },
    ],
    role: "Frontend engineering, rendering strategy, API integration, Core Web Vitals work and release support (internship at Aaizel Tech).",
    tech: ["Next.js", "React", "TypeScript", "SSR", "SSG", "REST APIs"],
    services: ["nextjs-development", "website-development", "seo-services"],
    links: [{ label: "Live website", href: "https://cyber-shieldpro.com" }],
  },
  {
    slug: "vrumo-vehicle-care",
    name: "Vrumo Vehicle Care Platform",
    category: "Full-stack product",
    status: "Multi-platform build",
    metaTitle: "Case Study: Vrumo Doorstep Vehicle Care Platform | Harshit Shukla",
    metaDescription:
      "A doorstep vehicle-care platform with a React website, React Native app, FastAPI backend and admin dashboard for bookings, users and services.",
    summary:
      "A doorstep vehicle-care platform connecting customers with wash, maintenance, insurance and buy/sell services across web and mobile.",
    challenge: [
      "Customers needed to discover and book services from both the web and a phone app.",
      "Operations staff needed one place to manage bookings, users and services.",
    ],
    solution: [
      "Built customer booking experiences on the web (React) and mobile (React Native).",
      "Developed a FastAPI service layer shared by both clients.",
      "Created an admin dashboard for bookings, users and service management.",
    ],
    features: ["Service discovery and booking", "Phone and email authentication", "Customer mobile application", "Admin booking and service management"],
    highlights: [
      { value: "3", label: "Surfaces: web, mobile, admin" },
      { value: "1", label: "Shared FastAPI backend" },
    ],
    role: "Full-stack development across the customer website, React Native app, FastAPI backend and operations dashboard.",
    tech: ["React", "React Native", "TypeScript", "FastAPI", "Python", "REST APIs"],
    services: ["full-stack-development", "backend-api-development", "website-development"],
    links: [
      { label: "Live website", href: "https://vrumo-website.vercel.app" },
      { label: "GitHub", href: "https://github.com/harshitduttshukla/Vrumo_Website" },
    ],
  },
  {
    slug: "job-outreach-agent",
    name: "Job Outreach Agent",
    category: "AI application",
    status: "Agentic workflow",
    metaTitle: "Case Study: AI Job Outreach Agent with Claude & OpenRouter | Harshit Shukla",
    metaDescription:
      "An AI agent that parses resumes, researches leads, writes personalised emails and sends them via IMAP/SMTP — built with Next.js, Claude API and OpenRouter.",
    summary:
      "An AI-assisted workspace that turns resume context and lead research into structured, personalised outreach with tracking and follow-ups.",
    challenge: [
      "Personalised outreach is slow to do by hand and generic when automated badly.",
      "Sending, inbox checks and follow-ups were split across different tools.",
    ],
    solution: [
      "Designed an end-to-end workflow: resume parsing, lead discovery, email generation, delivery and follow-up.",
      "Integrated LLMs through the Claude API and OpenRouter with structured prompt workflows.",
      "Built IMAP/SMTP delivery and inbox checks plus an application CRM.",
    ],
    features: ["Resume parsing and lead discovery", "Personalised email generation", "IMAP/SMTP delivery and inbox checks", "Application CRM and follow-up workflows"],
    highlights: [
      { value: "End-to-end", label: "Parse → write → send → follow up" },
      { value: "2", label: "LLM providers (Claude, OpenRouter)" },
    ],
    role: "Product architecture, Next.js interface and APIs, LLM integration, prompt workflows and email automation.",
    tech: ["Next.js", "TypeScript", "Claude API", "OpenRouter", "IMAP", "SMTP"],
    services: ["ai-app-development", "nextjs-development"],
    links: [
      { label: "Live application", href: "https://job-outreach-agent-self.vercel.app" },
      { label: "GitHub", href: "https://github.com/harshitduttshukla/Job-Outreach-Agent" },
    ],
  },
  {
    slug: "homeland-investment-platform",
    name: "Homeland Investment Platform",
    category: "Client project",
    status: "Jul 2026 — Present",
    metaTitle: "Case Study: Homeland Investment Wealth-Management Platform | Harshit Shukla",
    metaDescription:
      "Full-stack rebuild of a wealth-management platform with admin and investor portals, React, FastAPI, PostgreSQL, JWT and granular role-based access.",
    summary:
      "A production wealth-management platform giving administrators and investors role-specific views of onboarding, portfolios, documents and financial activity.",
    challenge: [
      "The platform needed a full rebuild without breaking established workflows.",
      "Database compatibility had to be preserved through a backend migration.",
      "Administrators and investors required strictly separated capabilities.",
    ],
    solution: [
      "Rebuilt the admin and client portals in React and TypeScript.",
      "Migrated the backend to FastAPI with SQLAlchemy while preserving database compatibility.",
      "Implemented JWT authentication and granular role-based access control.",
    ],
    features: ["Role-based admin and investor experiences", "Portfolio tracking and financial analytics dashboards", "Investor onboarding and document management", "JWT authentication and granular access control"],
    highlights: [
      { value: "2", label: "Portals: admin & investor" },
      { value: "Preserved", label: "Database compatibility through migration" },
    ],
    role: "Full-stack rebuild and system migration, focused on reliable financial workflows.",
    tech: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "RBAC"],
    services: ["full-stack-development", "backend-api-development", "saas-development"],
    links: [],
  },
  {
    slug: "seo-content-intelligence",
    name: "SEO Content Intelligence",
    category: "AI SaaS platform",
    status: "MVP platform",
    metaTitle: "Case Study: SEO Content Intelligence AI SaaS | Harshit Shukla",
    metaDescription:
      "A multi-tenant AI SEO platform with keyword clustering, cannibalisation controls, content maps, versioned briefs and a governed AI orchestrator.",
    summary:
      "A multi-tenant content operating system that connects business strategy, keyword intelligence, SEO rules, content architecture and governed AI workflows.",
    challenge: [
      "Content teams struggle to connect keyword research, site structure and writing in one place.",
      "Unchecked AI writing creates keyword cannibalisation and quality problems.",
    ],
    solution: [
      "Built keyword intent analysis, clustering and cannibalisation controls.",
      "Modelled pillar, topic, page and internal-link content maps.",
      "Added versioned briefs, a block-based editor and deterministic quality checks.",
      "Designed a governed AI orchestrator with typed tools and human approval gates.",
    ],
    features: ["Keyword intent, clustering and cannibalisation controls", "Pillar, topic, page and internal-link content maps", "Versioned content briefs and structured editing", "Governed AI orchestrator with human approval"],
    highlights: [
      { value: "Multi-tenant", label: "Workspace architecture" },
      { value: "Human-in-loop", label: "Approval-gated AI actions" },
    ],
    role: "Product architecture and full-stack implementation across Next.js, FastAPI, PostgreSQL, SEO algorithms, AI tooling, authorisation and automated tests.",
    tech: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Gemini"],
    services: ["seo-services", "ai-app-development", "saas-development"],
    links: [{ label: "GitHub", href: "https://github.com/harshitduttshukla/seo_content_agent" }],
  },
  {
    slug: "brainfry-app",
    name: "BrainFry",
    category: "Mobile product",
    status: "In development",
    metaTitle: "Case Study: BrainFry Digital Wellness Android App | Harshit Shukla",
    metaDescription:
      "A React Native and Kotlin Android app that blocks YouTube Shorts and Instagram Reels using the Accessibility Service, with focus sessions and streaks.",
    summary:
      "A digital wellness product designed to reduce compulsive short-form video use on Android.",
    challenge: [
      "Blocking short-form video inside other apps requires OS-level integration, not just a regular app screen.",
      "Habit change needs motivation features, not only restrictions.",
    ],
    solution: [
      "Built a React Native app with native Kotlin modules.",
      "Integrated the Android Accessibility Service for OS-level blocking.",
      "Designed gamified streaks, wallet and fine mechanics plus subscription-ready flows.",
    ],
    features: ["YouTube Shorts and Instagram Reels blocking", "Focus sessions and screen-time analytics", "Gamified streak, wallet and fine mechanics", "Subscription-ready product flows"],
    highlights: [
      { value: "Native", label: "Kotlin + Accessibility Service" },
      { value: "2", label: "Platforms blocked (Shorts, Reels)" },
    ],
    role: "End-to-end mobile architecture, app UI, native Android integration and backend design.",
    tech: ["React Native", "Expo", "TypeScript", "Kotlin", "Node.js", "PostgreSQL"],
    services: ["full-stack-development", "saas-development"],
    links: [{ label: "GitHub", href: "https://github.com/harshitduttshukla/BrainFrymobile" }],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
