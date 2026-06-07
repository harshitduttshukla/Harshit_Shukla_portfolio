"use client";

import { useEffect, useRef } from "react";

const GithubSvg = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const Experience = () => {
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
    <section id="experience" className="portfolio-section" ref={sectionRef}>
      <div className="section-label">Work History</div>
      <h2 className="section-title fade-up">Where I&apos;ve shipped</h2>
      <p className="section-sub fade-up">
        3 internships across product companies — all resulting in live,
        production deployments.
      </p>

      <div className="exp-timeline">
        {/* Aaizel */}
        <div className="exp-item fade-up">
          <div className="exp-meta">
            <div className="exp-company">Aaizel International Technologies</div>
            <span className="exp-date">Nov 2025 – Feb 2026</span>
          </div>
          <div className="exp-role">Full-Stack Developer Intern</div>
          <ul className="exp-bullets">
            <li>
              Engineered 2 production web apps —{" "}
              <strong style={{ color: "var(--text)" }}>aaizeltech.com</strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text)" }}>
                cyber-shieldpro.com
              </strong>{" "}
              — using Next.js, React.js, and TypeScript.
            </li>
            <li>
              Boosted Core Web Vitals by implementing SSR and SSG in Next.js,
              improving LCP and SEO signals.
            </li>
            <li>
              Integrated 5+ REST APIs and resolved cross-browser compatibility
              issues before production deployments.
            </li>
          </ul>
        </div>

        {/* Pajasa */}
        <div className="exp-item fade-up">
          <div className="exp-meta">
            <div className="exp-company">
              Pajasa Stay Solutions Pvt. Ltd
            </div>
            <span className="exp-date">Sep 2025 – Nov 2025</span>
          </div>
          <div className="exp-role">Full-Stack Developer Intern</div>
          <div className="exp-project">
            📦 Project: Apartment Booking &amp; Reservation Management System
          </div>
          <div className="exp-links">
            <a
              href="https://github.com/Pajassa/PAFrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-link"
            >
              <GithubSvg />
              GitHub (Frontend)
            </a>
            <a
              href="https://github.com/Pajassa/PAbackend"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-link"
            >
              <GithubSvg />
              GitHub (Backend)
            </a>
          </div>
          <ul className="exp-bullets">
            <li>
              Architected full-stack SaaS platform with Host, Property &amp;
              Client Management, Reservation Workflows, Invoice Generation,
              Pincode Management, and Admin Dashboards.
            </li>
            <li>
              Developed 10+ RESTful API endpoints with JWT auth, RBAC, and
              end-to-end booking management workflows.
            </li>
            <li>
              Deployed backend and PostgreSQL on AWS (EC2/RDS); engineered
              real-time room availability with date-based booking validation.
            </li>
          </ul>
        </div>

        {/* OBDSmart */}
        <div className="exp-item fade-up">
          <div className="exp-meta">
            <div className="exp-company">OBDSmart</div>
            <span className="exp-date">Apr 2025 – Nov 2025</span>
          </div>
          <div className="exp-role">Full-Stack Developer Intern</div>
          <div className="exp-links">
            <a
              href="https://github.com/ashishdev3355/Dashboard-1"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-link"
            >
              <GithubSvg />
              GitHub (Frontend)
            </a>
            <a
              href="https://github.com/ashishdev3355/dashbordbackend"
              target="_blank"
              rel="noopener noreferrer"
              className="exp-link"
            >
              <GithubSvg />
              GitHub (Backend)
            </a>
          </div>
          <ul className="exp-bullets">
            <li>
              Built React.js admin dashboard rendering 1,000+ rows of dynamic
              automotive diagnostic data with optimized client-side state
              management.
            </li>
            <li>
              Developed Node.js/Express backend with Multer &amp; PostgreSQL
              for bulk Excel file uploads and structured data processing.
            </li>
            <li>
              Containerized full database stack (PostgreSQL, PostgREST, pgweb,
              SQLPad) via Docker Compose. Shipped live Android app to Play
              Store.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
