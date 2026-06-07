"use client";

import { useEffect, useRef } from "react";

export const Certifications = () => {
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
    <section className="portfolio-section" ref={sectionRef}>
      <div className="section-label">Credentials</div>
      <h2 className="section-title fade-up">Certifications</h2>
      <div className="certs-grid" style={{ marginTop: "2rem" }}>
        <div className="cert-card fade-up">
          <div className="cert-logo">100x</div>
          <div>
            <div className="cert-name">Full Stack Web Development</div>
            <div className="cert-issuer">100xDevs by Harkirat Singh</div>
            <div className="cert-date">Aug 2025</div>
          </div>
        </div>
        <div
          className="cert-card fade-up"
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="cert-logo">100x</div>
          <div>
            <div className="cert-name">Complete DevOps</div>
            <div className="cert-issuer">100xDevs by Harkirat Singh</div>
            <div className="cert-date">May 2025</div>
          </div>
        </div>
        <div
          className="cert-card fade-up"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="cert-logo" style={{ fontSize: "0.65rem" }}>
            B.Tech
          </div>
          <div>
            <div className="cert-name">B.Tech Computer Science</div>
            <div className="cert-issuer">Lovely Professional University</div>
            <div className="cert-date">2022 – 2026 · Graduated</div>
          </div>
        </div>
      </div>
    </section>
  );
};
