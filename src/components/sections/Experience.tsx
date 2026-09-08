import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    company: "Aaizel International Technologies",
    role: "Full-Stack Developer Intern",
    period: "Nov 2025 – Feb 2026",
    summary:
      "Worked on two production web applications, including Cyber Shield Pro, with a focus on responsive frontend delivery and production performance.",
    contributions: [
      "Built product interfaces with Next.js, React, and TypeScript.",
      "Implemented SSR and SSG to improve Core Web Vitals and SEO signals.",
      "Integrated 5+ REST APIs and resolved cross-browser issues before release.",
    ],
    tech: ["Next.js", "React", "TypeScript", "REST APIs", "SSR / SSG"],
    links: [
      { label: "Aaizel Tech", href: "https://aaizeltech.com" },
      { label: "Cyber Shield Pro", href: "https://cyber-shieldpro.com" },
    ],
  },
  {
    company: "Pajasa Stay Solutions Pvt. Ltd.",
    role: "Full-Stack Developer Intern",
    period: "Sep 2025 – Nov 2025",
    summary:
      "Built an apartment booking and reservation management platform covering operational dashboards, business workflows, and cloud infrastructure.",
    contributions: [
      "Architected host, property, client, reservation, invoice, and pincode workflows.",
      "Developed 10+ REST endpoints with JWT authentication and role-based access.",
      "Deployed the backend and PostgreSQL database on AWS EC2 and RDS.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS EC2/RDS"],
    links: [
      {
        label: "Project source",
        href: "https://github.com/harshitduttshukla/pajasa_website_dashbord_frontend",
      },
    ],
  },
  {
    company: "OBD Smart",
    role: "Full-Stack Developer Intern",
    period: "Apr 2025 – Nov 2025",
    summary:
      "Developed an automotive diagnostics dashboard and backend tooling for managing high-volume, structured vehicle data.",
    contributions: [
      "Built responsive dashboard views handling 1,000+ rows of diagnostic data.",
      "Created Node.js and Express workflows for bulk Excel uploads and processing.",
      "Containerized PostgreSQL, PostgREST, pgweb, and SQLPad with Docker Compose.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Docker"],
    links: [
      { label: "Frontend", href: "https://github.com/ashishdev3355/Dashboard-1" },
      { label: "Backend", href: "https://github.com/ashishdev3355/dashbordbackend" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="portfolio-section section-surface">
      <div className="section-container experience-layout">
        <div className="experience-intro">
          <SectionHeading
            eyebrow="Experience"
            title="Production work, not practice projects."
            description="Three product-focused internships across SaaS, cybersecurity, and automotive software."
          />
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-content">
                <div className="experience-head">
                  <div>
                    <h3>{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                  </div>
                  <span className="experience-period">{experience.period}</span>
                </div>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-bullets">
                  {experience.contributions.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="experience-footer">
                  <div className="skill-tags">
                    {experience.tech.map((tech) => <span className="skill-tag" key={tech}>{tech}</span>)}
                  </div>
                  <div className="experience-links">
                    {experience.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
