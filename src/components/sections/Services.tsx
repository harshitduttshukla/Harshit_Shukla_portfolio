import {
  Bot,
  CloudCog,
  Code2,
  LayoutDashboard,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Code2,
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
    icon: PanelsTopLeft,
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
      <h3>{service.title}</h3>
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
          description="From idea to production — I can help design, build, and deploy your web product."
        />
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
