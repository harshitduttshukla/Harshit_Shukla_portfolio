import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const credentials = [
  {
    icon: Award,
    title: "Full Stack Web Development",
    issuer: "100xDevs by Harkirat Singh",
    date: "Aug 2025",
  },
  {
    icon: Award,
    title: "Complete DevOps",
    issuer: "100xDevs by Harkirat Singh",
    date: "May 2025",
  },
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science",
    issuer: "Lovely Professional University",
    date: "2022–2026",
  },
];

export function Certifications() {
  return (
    <section className="portfolio-section">
      <div className="section-container">
        <SectionHeading eyebrow="Credentials" title="Education & certifications" />
        <div className="credentials-grid">
          {credentials.map(({ icon: Icon, title, issuer, date }) => (
            <article className="credential-card" key={title}>
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{issuer}</p>
              </div>
              <span>{date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
