"use client";

import { useEffect, useRef } from "react";

export const About = () => {
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
    <section id="about" className="portfolio-section" ref={sectionRef}>
      <div className="section-label">About Me</div>
      <div className="about-grid">
        <div className="about-text fade-up">
          <h2 className="section-title">
            Building things that<br />
            <span style={{ color: "var(--amber)" }}>actually ship.</span>
          </h2>
          <p>
            I&apos;m <span>Harshit Shukla</span>, a B.Tech CSE graduate from{" "}
            <span>Lovely Professional University (2026)</span> with a deep
            passion for building full-stack web and mobile applications.
          </p>
          <p>
            Over my 3 internships, I&apos;ve built and deployed{" "}
            <span>real production systems</span> — from apartment booking SaaS
            platforms to automotive diagnostics dashboards — not just side
            projects sitting on localhost.
          </p>
          <p>
            I&apos;m fluent across the stack:{" "}
            <span>React.js / Next.js</span> on the frontend,{" "}
            <span>Node.js / Express / FastAPI</span> on the backend,{" "}
            <span>PostgreSQL / MongoDB</span> for data, and{" "}
            <span>Docker / AWS</span> for deployment.
          </p>
          <div className="about-highlight">
            <p>
              &quot;I don&apos;t just write code — I architect systems that
              scale, are maintainable, and solve real problems for real
              users.&quot;
            </p>
          </div>
        </div>
        <div className="about-right fade-up" style={{ transitionDelay: "0.15s" }}>
          <div className="about-card">
            <div className="about-card-head">
              <div className="about-card-icon">🎯</div>
              Career Interests
            </div>
            <div className="interests">
              <span className="tag active">Full-Stack Dev</span>
              <span className="tag active">SaaS Products</span>
              <span className="tag active">React Native</span>
              <span className="tag active">Backend Eng</span>
              <span className="tag">System Design</span>
              <span className="tag">GenAI Apps</span>
              <span className="tag">Data Engineering</span>
              <span className="tag">Product Eng</span>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-head">
              <div className="about-card-icon">🎓</div>
              Education
            </div>
            <div style={{ fontSize: "0.9rem" }}>
              <div style={{ fontWeight: 500, marginBottom: "4px" }}>
                B.Tech in Computer Science
              </div>
              <div style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
                Lovely Professional University, Punjab
              </div>
              <div
                style={{
                  color: "var(--amber)",
                  fontSize: "0.78rem",
                  marginTop: "6px",
                }}
              >
                2022 – 2026 · Graduated
              </div>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-head">
              <div className="about-card-icon">📍</div>
              Details
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "0.85rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--muted)" }}>Location</span>
                <span>Lucknow, UP, India</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--muted)" }}>Email</span>
                <span style={{ color: "var(--blue)" }}>
                  harshitshukla6388@gmail.com
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--muted)" }}>Status</span>
                <span style={{ color: "var(--green)" }}>● Open to Work</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--muted)" }}>Phone</span>
                <span>+91-6388293612</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
