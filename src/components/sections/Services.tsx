import {
  Bot,
  CloudCog,
  Code2,
  LayoutDashboard,
  PanelsTopLeft,
  Search,
  ServerCog,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Code2,
    slug: "full-stack-development",
    title: "Full-Stack Web Development",
    description:
      "Responsive products built across the interface, application layer, and data model.",
    capabilities: [
      "React",
      "Next.js",
      "TypeScript",
      "SaaS applications",
      "Custom business apps",
    ],
  },
  {
    icon: ServerCog,
    slug: "backend-api-development",
    title: "Backend & API Development",
    description:
      "Secure application backends, integrations, and well-structured data workflows.",
    capabilities: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "JWT & RBAC",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: LayoutDashboard,
    slug: "saas-development",
    title: "SaaS & Admin Dashboards",
    description:
      "Operational tools that make complex data and business workflows easier to manage.",
    capabilities: [
      "Admin panels",
      "Client portals",
      "Role-based dashboards",
      "CRUD systems",
      "Analytics interfaces",
    ],
  },
  {
    icon: Bot,
    slug: "ai-app-development",
    title: "AI & LLM Applications",
    description:
      "Practical AI workflows connected to real application and communication systems.",
    capabilities: [
      "LLM integrations",
      "Anthropic Claude",
      "OpenRouter",
      "Agentic workflows",
      "Document processing",
    ],
  },
  {
    icon: Search,
    slug: "seo-services",
    title: "SEO Optimization",
    description:
      "Technical SEO audits and fixes, on-page optimisation, schema and reporting so customers find you on Google.",
    capabilities: [
      "Technical SEO audit",
      "On-page SEO",
      "Schema markup",
      "Keyword research",
      "Local SEO",
      "GSC & GA4",
    ],
  },
  {
    icon: PanelsTopLeft,
    slug: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive websites with clear content architecture and production-ready polish.",
    capabilities: [
      "Business websites",
      "Product websites",
      "Responsive UI",
      "SEO architecture",
      "Performance optimization",
    ],
  },
  {
    icon: CloudCog,
    slug: "deployment-devops",
    title: "Deployment & DevOps",
    description:
      "From local development to a maintainable production environment and release workflow.",
    capabilities: [
      "Docker",
      "AWS EC2/RDS",
      "PostgreSQL deployment",
      "CI/CD",
      "Domain & hosting setup",
    ],
  },
];

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        <Icon size={21} strokeWidth={1.8} />
      </div>
      <h3>
        <Link href={`/services/${service.slug}`}>{service.title}</Link>
      </h3>
      <p>{service.description}</p>
      <ul className="capability-list" aria-label={`${service.title} capabilities`}>
        {service.capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="portfolio-section section-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          description="From idea to production — I design, build, deploy and optimise web products for search."
        />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <p style={{ marginTop: "2rem" }}>
          <Link href="/services" className="text-link">
            See all services <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
