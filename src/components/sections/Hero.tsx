"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export const Hero = () => {
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
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Open to full-time roles
        </div>
        <h1>
          Harshit<br />
          <span className="line2">Shukla</span>
        </h1>
        <p className="hero-desc">
          Full-Stack Developer &amp; SaaS Builder. I craft production-grade web applications, RESTful APIs, and mobile experiences — from concept to deployment.
        </p>
        <div className="hero-actions">
          <Link href="#projects" className="btn btn-primary">
            View My Work →
          </Link>
          <a
            href="https://github.com/harshitduttshukla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub Profile
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Internships</div>
          </div>
          <div>
            <div className="stat-num">650+</div>
            <div className="stat-label">DSA Problems</div>
          </div>
          <div>
            <div className="stat-num">5+</div>
            <div className="stat-label">Production Apps</div>
          </div>
          <div>
            <div className="stat-num">2026</div>
            <div className="stat-label">B.Tech CSE</div>
          </div>
        </div>
      </div>
    </section>
  );
};
