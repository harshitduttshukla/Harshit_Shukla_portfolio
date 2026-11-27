import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "source";
};

type Project = {
  number: string;
  slug: string;
  name: string;
  type: string;
  state: string;
  purpose: string;
  built: string;
  features: string[];
  contribution: string;
  tech: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    number: "01",
    slug: "reelsave-instagram-reels-downloader",
    name: "ReelSave – Instagram Reels Downloader",
    type: "SaaS web app",
    state: "Live in 11 languages",
    purpose:
      "A free Instagram Reels downloader that saves public Reels as MP4 in original quality, with audio and no watermark – no app or login.",
    built:
      "A Next.js web app with a server-side media API, rate limiting, and 50+ SEO landing pages localized for English, Hindi, Spanish, German, Japanese, French, Portuguese, Russian, Italian, Dutch and Polish.",
    features: [
      "Paste-a-link Reel download (MP4, HD, with audio)",
      "Localized UI and guides in 11 languages with hreflang",
      "Structured data (HowTo, FAQ, Breadcrumb) and sitemap",
      "Works on iPhone, Android, PC and Mac – no install",
    ],
    contribution:
      "Designed and built the product end to end: downloader, API, multilingual SEO architecture and content.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "SEO"],
    links: [
      {
        label: "Live website",
        href: "https://reelsave.vrumo.in",
        kind: "live",
      },
    ],
  },
  {
    number: "02",
    slug: "brainfry-app",
    name: "BrainFry",
    type: "Product build",
    state: "In development",
    purpose:
      "A digital wellness product designed to reduce compulsive short-form video use on Android.",
    built:
      "A React Native application with native Kotlin modules and Android Accessibility Service integration for OS-level blocking.",
    features: [
      "YouTube Shorts and Instagram Reels blocking",
      "Focus sessions and screen-time analytics",
      "Gamified streak, wallet, and fine mechanics",
      "Subscription-ready product flows",
    ],
    contribution:
      "End-to-end mobile product architecture, application UI, native Android integration, and supporting backend design.",
    tech: ["React Native", "Expo", "TypeScript", "Kotlin", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/harshitduttshukla/BrainFrymobile",
        kind: "source",
      },
    ],
  },
  {
    number: "03",
    slug: "apartment-booking-system",
    name: "Apartment Booking & Reservation Management System",
    type: "Internship project",
    state: "Production application",
    purpose:
      "A SaaS system for managing properties, clients, reservations, invoices, and room availability in one operational workflow.",
    built:
      "Role-based dashboards and booking workflows backed by secure APIs and date-aware availability validation.",
    features: [
      "Host, property, and client management",
      "Reservation and invoice workflows",
      "JWT authentication and RBAC",
      "Real-time room availability validation",
    ],
    contribution:
      "Full-stack architecture, 10+ REST API endpoints, frontend workflows, PostgreSQL deployment, and AWS EC2/RDS setup.",
    tech: ["Next.js", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "AWS"],
    links: [
      {
        label: "Frontend source",
        href: "https://github.com/harshitduttshukla/pajasa_website_dashbord_frontend",
        kind: "source",
      },
    ],
  },
  {
    number: "04",
    slug: "obd-smart-dashboard",
    name: "OBD Smart",
    type: "Internship project",
    state: "Production dashboard",
    purpose:
      "An automotive diagnostics platform for managing large technical datasets, vehicle commands, products, and uploaded records.",
    built:
      "A data-heavy React dashboard plus Node.js services for bulk Excel uploads, structured processing, and database operations.",
    features: [
      "1,000+ row diagnostic data views",
      "Excel upload and structured processing",
      "Automotive command and fault-code tools",
      "Containerized database tooling",
    ],
    contribution:
      "Frontend dashboard development, backend APIs, upload workflows, PostgreSQL integration, and Docker Compose environments.",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    links: [
      {
        label: "Frontend source",
        href: "https://github.com/ashishdev3355/Dashboard-1",
        kind: "source",
      },
      {
        label: "Backend source",
        href: "https://github.com/ashishdev3355/dashbordbackend",
        kind: "source",
      },
    ],
  },
  {
    number: "05",
    slug: "cyber-shield-pro-website",
    name: "Cyber Shield Pro",
    type: "Internship project",
    state: "Live production website",
    purpose:
      "A production web presence for a cybersecurity and internet exposure management product.",
    built:
      "A responsive Next.js interface with server-rendered content, integrated APIs, and production-focused performance improvements.",
    features: [
      "Responsive product experience",
      "SSR and SSG implementation",
      "REST API integrations",
      "Cross-browser production QA",
    ],
    contribution:
      "Frontend engineering, rendering strategy, API integration, Core Web Vitals work, and production release support.",
    tech: ["Next.js", "React", "TypeScript", "SSR", "SSG", "REST APIs"],
    links: [
      {
        label: "Live website",
        href: "https://cyber-shieldpro.com",
        kind: "live",
      },
    ],
  },
  {
    number: "06",
    slug: "vrumo-vehicle-care",
    name: "Vrumo",
    type: "Full-stack product",
    state: "Multi-platform build",
    purpose:
      "A doorstep vehicle-care platform connecting customers with wash, maintenance, insurance, and buy/sell services.",
    built:
      "Customer booking experiences across web and mobile, a service backend, and an admin dashboard for bookings, users, and services.",
    features: [
      "Service discovery and booking",
      "Phone and email authentication flows",
      "Customer mobile application",
      "Admin booking and service management",
    ],
    contribution:
      "Full-stack development across customer web, React Native app, FastAPI service layer, and operational dashboard.",
    tech: ["React", "React Native", "TypeScript", "FastAPI", "Python", "REST APIs"],
    links: [
      {
        label: "Live website",
        href: "https://vrumo-website.vercel.app",
        kind: "live",
      },
      {
        label: "GitHub",
        href: "https://github.com/harshitduttshukla/Vrumo_Website",
        kind: "source",
      },
    ],
  },
  {
    number: "07",
    slug: "job-outreach-agent",
    name: "Job Outreach Agent",
    type: "AI application",
    state: "Agentic workflow",
    purpose:
      "An AI-assisted workspace for turning resume context and lead research into structured, personalized outreach.",
    built:
      "An end-to-end workflow covering resume parsing, lead discovery, email generation, delivery, follow-ups, and application tracking.",
    features: [
      "Resume parsing and lead discovery",
      "Personalized email generation",
      "IMAP/SMTP delivery and inbox checks",
      "Application CRM and follow-up workflows",
    ],
    contribution:
      "Product architecture, Next.js interface and APIs, LLM integration, prompt workflows, and email automation.",
    tech: ["Next.js", "TypeScript", "Claude API", "OpenRouter", "IMAP", "SMTP"],
    links: [
      {
        label: "Live application",
        href: "https://job-outreach-agent-self.vercel.app",
        kind: "live",
      },
      {
        label: "GitHub",
        href: "https://github.com/harshitduttshukla/Job-Outreach-Agent",
        kind: "source",
      },
    ],
  },
  {
    number: "08",
    slug: "homeland-investment-platform",
    name: "Homeland Investment",
    type: "Client project",
    state: "Jul 2026 — Present",
    purpose:
      "A production wealth-management platform that gives administrators and investors clear, role-specific views of onboarding, portfolios, documents, and financial activity.",
    built:
      "A full-stack rebuild across admin and client portals, preserving established workflows and database compatibility through a backend migration.",
    features: [
      "Role-based admin and investor experiences",
      "Portfolio tracking and financial analytics dashboards",
      "Investor onboarding and document management",
      "JWT authentication and granular access control",
    ],
    contribution:
      "Full-stack rebuild and system migration, focused on reliable financial workflows and a clean separation between administrator and client capabilities.",
    tech: [
      "React.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "RBAC",
    ],
    links: [],
  },
  {
    number: "09",
    slug: "seo-content-intelligence",
    name: "SEO Content Intelligence",
    type: "AI SaaS platform",
    state: "MVP platform",
    purpose:
      "A multi-tenant content operating system that connects business strategy, keyword intelligence, SEO rules, content architecture, and governed AI workflows.",
    built:
      "A full-stack platform with structured SEO strategy, keyword clustering, content maps, versioned briefs, a block-based editor, deterministic quality checks, and approval-gated AI actions.",
    features: [
      "Keyword intent, clustering, and cannibalization controls",
      "Pillar, topic, page, and internal-link content maps",
      "Versioned content briefs and structured document editing",
      "Governed AI orchestrator with typed tools and human approval",
    ],
    contribution:
      "Product architecture and full-stack implementation across the Next.js workspace, FastAPI service layer, PostgreSQL data model, SEO algorithms, AI tooling, authorization, and automated tests.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Gemini",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/harshitduttshukla/seo_content_agent",
        kind: "source",
      },
    ],
  },
];

function ProjectLink({ link }: { link: ProjectLink }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className="project-link">
      {link.kind === "source" ? <Code2 size={15} aria-hidden="true" /> : null}
      {link.label}
      {link.kind === "live" ? <ArrowUpRight size={15} aria-hidden="true" /> : null}
    </a>
  );
}

function ProjectShowcase({ project }: { project: Project }) {
  return (
    <article className="project-showcase">
      <div className="project-main">
        <div className="project-meta">
          <span className="project-number">{project.number}</span>
          <span className="badge">{project.type}</span>
          <span className="project-state">{project.state}</span>
        </div>
        <h3>{project.name}</h3>
        <div className="project-story">
          <div>
            <span>Purpose</span>
            <p>{project.purpose}</p>
          </div>
          <div>
            <span>What I built</span>
            <p>{project.built}</p>
          </div>
        </div>
        <div className="project-tech" aria-label={`${project.name} technology stack`}>
          {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-links">
          <Link href={`/work/${project.slug}`} className="project-link">
            Case study <ArrowRight size={15} aria-hidden="true" />
          </Link>
          {project.links.map((link) => <ProjectLink key={`${project.name}-${link.label}`} link={link} />)}
        </div>
      </div>

      <div className="project-scope">
        <p className="scope-label">Key features</p>
        <ul>
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <div className="project-contribution">
          <span>My contribution</span>
          <p>{project.contribution}</p>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-container">
        <SectionHeading
          eyebrow="Selected work"
          title="Products and systems I’ve built"
          description="Production applications, internship work, and personal products spanning web, mobile, backend systems, dashboards, and AI workflows."
        />
        <div className="projects-list">
          {projects.map((project) => <ProjectShowcase key={project.name} project={project} />)}
        </div>
      </div>
    </section>
  );
}
