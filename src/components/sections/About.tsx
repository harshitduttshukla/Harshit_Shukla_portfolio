import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-container about-grid">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I build across the whole product stack."
          />
          <div className="about-copy">
            <p>
              I&apos;m Harshit Shukla, a Computer Science graduate focused on
              full-stack product development and practical AI applications.
            </p>
            <p>
              Across three internships, I&apos;ve worked on production websites,
              booking and reservation software, automotive data dashboards,
              REST APIs, and cloud deployments.
            </p>
            <p>
              My work spans React and Next.js interfaces, Node.js and FastAPI
              services, PostgreSQL and MongoDB data layers, plus Docker and AWS
              deployment workflows.
            </p>
            <p>
              I&apos;m also an SEO specialist: I build sites that are fast, crawlable
              and structured to rank, and I fix technical SEO issues directly in
              the code.
            </p>
          </div>
          <div className="about-links">
            <a className="text-link" href="https://github.com/harshitduttshukla" target="_blank" rel="noopener noreferrer">
              Explore my GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              className="text-link"
              href="/Harshit_Shukla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my résumé <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="about-panel">
          <div className="about-panel-item">
            <GraduationCap size={20} aria-hidden="true" />
            <div>
              <span>Education</span>
              <strong>B.Tech in Computer Science</strong>
              <p>Lovely Professional University · 2022–2026</p>
            </div>
          </div>
          <div className="about-panel-item">
            <MapPin size={20} aria-hidden="true" />
            <div>
              <span>Works with</span>
              <strong>Clients worldwide, remotely</strong>
              <p>Home base Lucknow, India</p>
            </div>
          </div>
          <div className="about-focus">
            <span>Current focus</span>
            <div>
              <strong>Full-stack products</strong>
              <strong>SaaS architecture</strong>
              <strong>Backend engineering</strong>
              <strong>AI workflows</strong>
              <strong>Technical SEO</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
