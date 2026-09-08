import Image from "next/image";
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
          </div>
          <div className="about-links">
            <a className="text-link" href="https://github.com/harshitduttshukla" target="_blank" rel="noopener noreferrer">
              Explore my GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link" href="mailto:harshitshukla6388@gmail.com?subject=Resume%20request">
              Request my résumé <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="about-panel">
          <figure className="about-portrait">
            <Image
              src="/harshit-shukla-portrait.png"
              alt="Portrait of Harshit Shukla"
              fill
              sizes="(max-width: 860px) calc(100vw - 2rem), 42vw"
              className="about-portrait-image"
              unoptimized
            />
            <figcaption className="about-portrait-caption">
              <span>Profile / 01</span>
              <strong>Harshit Shukla</strong>
              <small>Full-Stack Developer &amp; AI Engineer</small>
            </figcaption>
          </figure>
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
              <span>Based in</span>
              <strong>Lucknow, India</strong>
              <p>Open to remote and relocation opportunities</p>
            </div>
          </div>
          <div className="about-focus">
            <span>Current focus</span>
            <div>
              <strong>Full-stack products</strong>
              <strong>SaaS architecture</strong>
              <strong>Backend engineering</strong>
              <strong>AI workflows</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
