import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    company: "Pajasa Stay Solutions Pvt. Ltd.",
    role: "Associate Software Developer (Full-Time)",
    period: "Apr 2026 – Present",
    summary:
      "Building a multi-tenant apartment booking, reservation, and billing platform across Host, Admin, and Client roles.",
    contributions: [
      "Architected the multi-tenant SaaS backend and secure JWT-based role access.",
      "Engineered idempotent room-availability logic to prevent double bookings under concurrent requests.",
      "Integrated a UPI payment gateway with dynamic QR codes.",
      "Scaled the backend on AWS EC2 with PostgreSQL on AWS RDS.",
      "Delivered the responsive booking interface with React, TypeScript, and Tailwind CSS.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT / RBAC",
      "AWS EC2/RDS",
      "UPI payments",
    ],
    links: [
      {
        label: "Project source",
        href: "https://github.com/harshitduttshukla/pajasa_website_dashbord_frontend",
      },
    ],
  },
  {
    company: "Aaizel International Technologies Pvt. Ltd.",
    role: "Full Stack Web Developer Intern",
    period: "Nov 2025 – Feb 2026",
    summary:
      "Delivered production web applications for Aaizel Tech and Cyber Shield Pro using modern React and Next.js architecture.",
    contributions: [
      "Built live applications with Next.js, React, TypeScript, SSR, and SSG.",
      "Optimized performance, accessibility, and cross-browser compatibility across production deployments.",
      "Integrated REST APIs with cross-functional teams to deliver end-to-end frontend solutions.",
    ],
    tech: ["Next.js", "React", "TypeScript", "REST APIs", "SSR / SSG"],
    links: [
      { label: "Aaizel Tech", href: "https://aaizeltech.com" },
      { label: "Cyber Shield Pro", href: "https://cyber-shieldpro.com" },
    ],
  },
  {
    company: "OBDSmart",
    role: "Full Stack Developer Intern (3rd Employee)",
    period: "Apr 2025 – Nov 2025",
    summary:
      "Worked as an early engineer on an automotive diagnostics platform, spanning the admin dashboard, backend APIs, and delivery infrastructure.",
    contributions: [
      "Architected a React admin dashboard managing 1,000+ real-time diagnostic records.",
      "Engineered Node.js and Express APIs for bulk Excel ingestion into PostgreSQL.",
      "Automated environment provisioning with GitHub Actions CI/CD, reducing setup to approximately five minutes.",
      "Implemented API-level rate limiting to support growth from 0 to 500+ users.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "GitHub Actions",
      "CI/CD",
    ],
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
            description="Full-time product engineering and production internships across SaaS, cybersecurity, and automotive software."
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
