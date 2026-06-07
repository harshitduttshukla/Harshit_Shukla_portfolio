"use client";

import { useEffect, useRef } from "react";

export const Skills = () => {
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
    <section id="skills" className="portfolio-section" ref={sectionRef}>
      <div className="section-label">Tech Stack</div>
      <h2 className="section-title fade-up">What I work with</h2>
      <p className="section-sub fade-up">
        Technologies I&apos;ve used in production — not just tutorials.
      </p>
      <div className="skills-wrap">
        {/* Frontend */}
        <div className="skill-card fade-up">
          <div className="skill-card-head">
            <div className="skill-icon amber">FE</div>
            <h3>Frontend</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">React Native</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Expo</span>
            <span className="skill-tag">HTML / CSS</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card fade-up" style={{ transitionDelay: "0.1s" }}>
          <div className="skill-card-head">
            <div className="skill-icon blue">BE</div>
            <h3>Backend</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">FastAPI</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">JWT</span>
            <span className="skill-tag">RBAC</span>
          </div>
        </div>

        {/* Database & DevOps */}
        <div className="skill-card fade-up" style={{ transitionDelay: "0.2s" }}>
          <div className="skill-card-head">
            <div className="skill-icon green">DB</div>
            <h3>Database &amp; DevOps</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">AWS EC2/RDS</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-card fade-up" style={{ transitionDelay: "0.3s" }}>
          <div className="skill-card-head">
            <div className="skill-icon amber">{"{ }"}</div>
            <h3>Languages</h3>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Kotlin (Native)</span>
          </div>
        </div>
      </div>

      {/* DSA Bar */}
      <div className="dsa-bar fade-up">
        <div className="dsa-bar-left">
          <div className="dsa-bar-icon">⚡</div>
          <div className="dsa-bar-text">
            <h4>Data Structures &amp; Algorithms</h4>
            <p>
              Striver&apos;s A2Z DSA Sheet · LeetCode · C++ · Strong
              problem-solving foundation
            </p>
          </div>
        </div>
        <div className="dsa-bar-num">
          650+ <span>problems solved</span>
        </div>
      </div>
    </section>
  );
};
