import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  GitBranch,
} from "lucide-react";

const proofPoints = [
  "Production SaaS",
  "Full-stack development",
  "Backend & APIs",
  "AI / LLM applications",
  "AWS & Docker",
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-container hero-layout">
        <div className="hero-copy">
          <Image
            className="hero-avatar"
            src="/harshit-shukla-portrait.png"
            alt="Portrait of Harshit Shukla"
            width={72}
            height={72}
            priority
            unoptimized
          />
          <div className="hero-kicker">
            <span>Harshit Shukla</span>
            <span className="kicker-line" aria-hidden="true" />
            <span>Product-minded engineer</span>
          </div>
          <h1 aria-label="Full-Stack Developer and AI Engineer">
            <span>Full-Stack</span>
            <span>Developer</span>
            <span className="hero-accent-line"><em>&amp; AI</em></span>
            <span>Engineer</span>
          </h1>
          <p className="hero-desc">
            I build production-ready web applications, SaaS products, backend
            systems, dashboards, and AI-powered applications — from idea to
            deployment.
          </p>
          <div className="hero-actions">
            <Link href="#project-enquiry" className="btn btn-primary">
              Start a Project <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="#projects" className="btn btn-secondary">
              View My Work <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-availability">
            <span className="status-dot" aria-hidden="true" />
            <span>Available for freelance projects</span>
            <span className="availability-separator" aria-hidden="true">/</span>
            <span>Open to full-time opportunities</span>
          </div>
          <div className="hero-socials" aria-label="Professional profiles">
            <a
              href="https://github.com/harshitduttshukla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={16} aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harshitshukla2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BriefcaseBusiness size={16} aria-hidden="true" /> LinkedIn
            </a>
            <a href="/Harshit_Shukla_Resume.pdf" download="Harshit_Shukla_Resume.pdf">
              Download résumé <Download size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-engineering" aria-label="Product engineering architecture">
          <div className="engineering-topbar">
            <div className="window-controls" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="engineering-file">product-system.ts</span>
            <span className="engineering-state">
              <span className="status-dot" aria-hidden="true" /> live
            </span>
          </div>

          <div className="engineering-editor" aria-label="Product build configuration">
            <div className="code-line">
              <span className="line-number">01</span>
              <code><b>const</b> product = <em>await</em> build&#40;&#123;</code>
            </div>
            <div className="code-line code-indent">
              <span className="line-number">02</span>
              <code>interface: <strong>&quot;Next.js&quot;</strong>,</code>
            </div>
            <div className="code-line code-indent">
              <span className="line-number">03</span>
              <code>backend: <strong>[&quot;Node&quot;, &quot;FastAPI&quot;]</strong>,</code>
            </div>
            <div className="code-line code-indent">
              <span className="line-number">04</span>
              <code>intelligence: <strong>&quot;AI&quot;</strong>,</code>
            </div>
            <div className="code-line">
              <span className="line-number">05</span>
              <code>&#125;&#41;;</code>
            </div>
          </div>

          <div className="architecture-map">
            <div className="architecture-label">
              <span>Runtime architecture</span>
              <span>01 — 05</span>
            </div>
            <div className="architecture-flow">
              <div className="architecture-node">
                <Braces size={17} aria-hidden="true" />
                <span>Interface</span>
                <small>Next.js + TS</small>
              </div>
              <ArrowRight className="architecture-arrow" size={16} aria-hidden="true" />
              <div className="architecture-node architecture-node-core">
                <GitBranch size={17} aria-hidden="true" />
                <span>API layer</span>
                <small>Node / FastAPI</small>
              </div>
              <ArrowRight className="architecture-arrow" size={16} aria-hidden="true" />
              <div className="architecture-node">
                <Database size={17} aria-hidden="true" />
                <span>Data</span>
                <small>PostgreSQL</small>
              </div>
            </div>
            <div className="architecture-services">
              <div>
                <Cpu size={16} aria-hidden="true" />
                <span>AI services</span>
              </div>
              <span className="service-connector" aria-hidden="true" />
              <div>
                <Cloud size={16} aria-hidden="true" />
                <span>Docker → Cloud</span>
              </div>
            </div>
          </div>

          <div className="engineering-footer">
            <span>Design</span>
            <span>Build</span>
            <span>Integrate</span>
            <span>Deploy</span>
          </div>
        </div>
      </div>

      <div className="section-container credibility-strip" aria-label="Core experience">
        <span className="credibility-label">Built for real-world use</span>
        <div className="credibility-items">
          {proofPoints.map((point) => <span key={point}>{point}</span>)}
        </div>
      </div>
    </section>
  );
}
