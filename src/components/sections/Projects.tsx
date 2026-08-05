"use client";

import { useEffect, useRef } from "react";

const GithubSvg = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const fadeElements = sectionRef.current?.querySelectorAll(".fade-up");
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="portfolio-section" ref={sectionRef}>
      <div className="section-label">Featured Work</div>
      <h2 className="section-title fade-up">Projects I&apos;ve built</h2>
      <p className="section-sub fade-up">
        Client systems, agentic AI tools &amp; SaaS products — shipping real value end-to-end.
      </p>

      <div className="projects-grid">
        {/* Project 01 - Homeland Investment */}
        <div className="project-card featured fade-up">
          <div style={{ flex: 1 }}>
            <div className="project-number">01</div>
            <div className="project-name">
              Homeland Investment – Wealth Management Platform
            </div>
            <p className="project-desc">
              Developed a full-stack Wealth Management Platform featuring role-based
              Admin and Client portals for investment management, portfolio tracking,
              investor onboarding, document management, and analytics. Rebuilt an existing
              production Java Spring Boot application into a modern React + FastAPI
              architecture while maintaining existing business workflows and database compatibility.
            </p>
            <div className="project-tech">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>FastAPI</span>
              <span>Python</span>
              <span>PostgreSQL</span>
              <span>SQLAlchemy</span>
              <span>JWT</span>
              <span>RBAC</span>
            </div>
            <div className="project-links" style={{ marginTop: "1rem" }}>
              <a
                href="https://github.com/harshitduttshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GithubSvg />
                View Code
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "1rem",
              minWidth: "220px",
              background: "var(--bg3)",
              padding: "1.25rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="project-status status-client">💼 Client Project</span>
              <span style={{ fontSize: "0.75rem", color: "var(--dim)" }}>Jul 2026 – Present</span>
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <div
                style={{
                  color: "var(--text)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                }}
              >
                Key Highlights
              </div>
              <div>✓ Role-based Admin &amp; Client portals</div>
              <div>✓ Java Spring Boot → React + FastAPI migration</div>
              <div>✓ Interactive financial analytics dashboards</div>
              <div>✓ Secure REST APIs with JWT &amp; RBAC</div>
            </div>
          </div>
        </div>

        {/* Project 02 - Job Outreach Agent */}
        <div className="project-card featured fade-up" style={{ transitionDelay: "0.1s" }}>
          <div style={{ flex: 1 }}>
            <div className="project-number">02</div>
            <div className="project-name">Job Outreach Agent</div>
            <p className="project-desc">
              Built an agentic AI application automating job outreach workflows end-to-end,
              from resume parsing to personalized email delivery. Engineered a GenAI
              pipeline integrating Anthropic Claude API prompt engineering with IMAP/SMTP
              automation and multi-provider LLM API support via OpenRouter for flexible,
              cost-efficient model routing.
            </p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Anthropic Claude API</span>
              <span>OpenRouter</span>
              <span>GenAI Pipeline</span>
              <span>IMAP / SMTP</span>
            </div>
            <div className="project-links" style={{ marginTop: "1rem" }}>
              <a
                href="https://github.com/harshitduttshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GithubSvg />
                View Code
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "1rem",
              minWidth: "220px",
              background: "var(--bg3)",
              padding: "1.25rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="project-status status-ai">🤖 Agentic AI Product</span>
              <span style={{ fontSize: "0.75rem", color: "var(--dim)" }}>Apr 2026 – Present</span>
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <div
                style={{
                  color: "var(--text)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                }}
              >
                Key Highlights
              </div>
              <div>✓ Resume parsing to automated email outreach</div>
              <div>✓ Claude API prompt engineering pipeline</div>
              <div>✓ IMAP / SMTP automated email delivery</div>
              <div>✓ OpenRouter multi-LLM routing</div>
            </div>
          </div>
        </div>

        {/* Project 03 - BrainFry */}
        <div className="project-card featured fade-up" style={{ transitionDelay: "0.2s" }}>
          <div style={{ flex: 1 }}>
            <div className="project-number">03</div>
            <div className="project-name">BrainFry</div>
            <p className="project-desc">
              A full-stack digital wellness &amp; productivity SaaS app for
              Android. Blocks YouTube Shorts and Instagram Reels at the OS level
              using native Android Accessibility Service &amp; Kotlin modules.
              Features streak system, wallet/fine mechanics, screen-time
              analytics, focus sessions, and subscription management.
            </p>
            <div className="project-tech">
              <span>React Native</span>
              <span>Expo</span>
              <span>Node.js</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>Kotlin</span>
              <span>Android Accessibility API</span>
            </div>
            <div className="project-links" style={{ marginTop: "1rem" }}>
              <a
                href="https://github.com/harshitduttshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <GithubSvg />
                View Code
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "1rem",
              minWidth: "220px",
              background: "var(--bg3)",
              padding: "1.25rem",
              borderRadius: "10px",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span className="project-status status-wip">🚧 In Progress</span>
              <span style={{ fontSize: "0.75rem", color: "var(--dim)" }}>SaaS App</span>
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.65,
              }}
            >
              <div
                style={{
                  color: "var(--text)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                }}
              >
                Key Highlights
              </div>
              <div>✓ Native OS Shorts &amp; Reels blocker</div>
              <div>✓ Kotlin Accessibility Service API</div>
              <div>✓ Gamified streaks &amp; fines system</div>
              <div>✓ SaaS subscription management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

