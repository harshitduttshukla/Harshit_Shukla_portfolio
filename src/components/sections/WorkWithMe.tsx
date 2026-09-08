import {
  Blocks,
  Bot,
  BriefcaseBusiness,
  Cloud,
  CodeXml,
  Database,
  Gauge,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  { icon: BriefcaseBusiness, text: "Production experience" },
  { icon: Layers3, text: "Full-stack ownership" },
  { icon: CodeXml, text: "Modern TypeScript stack" },
  { icon: Server, text: "Backend & API development" },
  { icon: Blocks, text: "SaaS architecture" },
  { icon: Bot, text: "AI & LLM development" },
  { icon: Database, text: "Database experience" },
  { icon: Cloud, text: "Cloud & deployment" },
  { icon: Gauge, text: "Responsive, performance-focused UI" },
  { icon: Workflow, text: "End-to-end development" },
];

const availability = [
  "Freelance Projects",
  "SaaS Development",
  "Web Application Development",
  "Backend/API Development",
  "AI/LLM Applications",
  "Admin Dashboards",
  "Business Websites",
  "MVP Development",
  "Feature Development",
  "Full-Time Opportunities",
];

export function WorkWithMe() {
  return (
    <section className="portfolio-section">
      <div className="section-container work-with-me-grid">
        <div>
          <SectionHeading
            eyebrow="Working together"
            title="Why Work With Me?"
            description="A product-minded engineering approach grounded in production work across frontend, backend, data, and deployment."
          />
          <div className="reason-grid">
            {reasons.map(({ icon: Icon, text }) => (
              <div className="reason-item" key={text}>
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="availability-card" aria-labelledby="available-title">
          <p className="section-label">Engagements</p>
          <h2 id="available-title">Available For</h2>
          <p>
            Focused builds, ongoing product work, or a full-time engineering role.
          </p>
          <div className="availability-list">
            {availability.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a className="text-link" href="#project-enquiry">
            Discuss your requirements <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
