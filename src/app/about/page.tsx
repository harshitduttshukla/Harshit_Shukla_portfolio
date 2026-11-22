import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Section } from "@/components/pages/PageParts";
import { PERSON_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Harshit Shukla — Freelance Developer, AI Engineer & SEO Specialist",
  description:
    "About Harshit Shukla: freelance full-stack developer, AI engineer and SEO specialist with production experience in SaaS, dashboards and websites. Remote, worldwide.",
  path: "/about",
});

const experience = [
  { company: "Pajasa Stay Solutions Pvt. Ltd.", role: "Associate Software Developer (Full-Time)", period: "Apr 2026 – Present", text: "Multi-tenant apartment booking, reservation and billing platform: JWT role access, idempotent availability logic, UPI payments, AWS EC2/RDS." },
  { company: "Aaizel International Technologies Pvt. Ltd.", role: "Full Stack Web Developer Intern", period: "Nov 2025 – Feb 2026", text: "Production Next.js applications for Aaizel Tech and Cyber Shield Pro with SSR/SSG, performance and accessibility work." },
  { company: "OBDSmart", role: "Full Stack Developer Intern (3rd Employee)", period: "Apr 2025 – Nov 2025", text: "React admin dashboard for 1,000+ diagnostic records, Excel ingestion APIs, CI/CD cutting setup to ~5 minutes, rate limiting for 500+ users." },
];

const credentials = [
  { title: "Full Stack Web Development", issuer: "100xDevs by Harkirat Singh", date: "Aug 2025" },
  { title: "Complete DevOps", issuer: "100xDevs by Harkirat Singh", date: "May 2025" },
  { title: "B.Tech Computer Science", issuer: "Lovely Professional University", date: "2022–2026" },
];

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Claude / OpenAI / Gemini", "Technical SEO", "GA4 & Search Console"];

export default function AboutPage() {
  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      eyebrow="About"
      title="I build web products — and make sure people can find them"
      intro={[
        "I'm Harshit Shukla, a freelance full-stack developer, AI engineer and SEO specialist. I build web applications, SaaS products, backends and AI features end to end, and I make sure they're fast, crawlable and structured to rank.",
        "I work remotely with clients across India and worldwide. My home base is Lucknow, India.",
      ]}
      schema={[{ "@type": "AboutPage", url: absoluteUrl("/about"), name: "About Harshit Shukla", mainEntity: { "@id": PERSON_ID } }]}
    >
      <Section title="Experience" label="Production work">
        <div className="card-grid">
          {experience.map((e) => (
            <article className="info-card" key={e.company}>
              <span className="badge">{e.period}</span>
              <h3>{e.company}</h3>
              <p><strong>{e.role}</strong></p>
              <p>{e.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Technology & skills" label="Stack" surface>
        <ul className="tag-row">
          {stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </Section>
      <Section title="Education & certifications" label="Credentials">
        <div className="card-grid">
          {credentials.map((c) => (
            <article className="info-card" key={c.title}>
              <span className="badge">{c.date}</span>
              <h3>{c.title}</h3>
              <p>{c.issuer}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="See the work" label="Next" surface>
        <div className="related-links">
          <Link className="text-link" href="/work">Read case studies</Link>
          <Link className="text-link" href="/services">Explore services</Link>
          <a className="text-link" href="/Harshit_Shukla_Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé</a>
        </div>
      </Section>
    </PageShell>
  );
}
