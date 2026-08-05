"use client";

import { useEffect, useRef } from "react";

const contactItems = [
  {
    label: "Email",
    value: "harshitshukla6388@gmail.com",
    href: "mailto:harshitshukla6388@gmail.com",
    accent: "#f5a623",
    glow: "rgba(245, 166, 35, 0.15)",
    shadow: "rgba(245, 166, 35, 0.25)",
    bgHover: "rgba(245, 166, 35, 0.12)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/harshitshukla2",
    href: "https://www.linkedin.com/in/harshitshukla2/",
    external: true,
    accent: "#0a66c2",
    glow: "rgba(10, 102, 194, 0.18)",
    shadow: "rgba(10, 102, 194, 0.3)",
    bgHover: "rgba(10, 102, 194, 0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "harshitduttshukla",
    href: "https://github.com/harshitduttshukla",
    external: true,
    accent: "#e6edf3",
    glow: "rgba(255, 255, 255, 0.12)",
    shadow: "rgba(255, 255, 255, 0.2)",
    bgHover: "rgba(255, 255, 255, 0.12)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    value: "@Harshitshukla63",
    href: "https://x.com/Harshitshukla63",
    external: true,
    accent: "#1d9bf0",
    glow: "rgba(29, 155, 240, 0.18)",
    shadow: "rgba(29, 155, 240, 0.28)",
    bgHover: "rgba(29, 155, 240, 0.15)",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    value: "harshitshukla6388",
    href: "https://leetcode.com/u/harshitshukla6388/",
    external: true,
    accent: "#ffa116",
    glow: "rgba(255, 161, 22, 0.18)",
    shadow: "rgba(255, 161, 22, 0.28)",
    bgHover: "rgba(255, 161, 22, 0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.515 1.879 0 .514-.515.514-1.365 0-1.879l-2.697-2.607c-1.001-1.002-2.335-1.504-3.702-1.504s-2.701.502-3.702 1.504l-4.319 4.38c-1.001 1.002-1.504 2.336-1.504 3.703s.503 2.701 1.504 3.703l4.332 4.363c1.001 1.002 2.335 1.504 3.702 1.504s2.701-.502 3.702-1.504l2.697-2.607c.514-.515.514-1.365 0-1.879-.514-.514-1.365-.514-1.879 0zM20.811 13.01H10.666c-.727 0-1.316.589-1.316 1.316s.589 1.316 1.316 1.316h10.145c.727 0 1.316-.589 1.316-1.316s-.589-1.316-1.316-1.316z" />
      </svg>
    ),
  },
  {
    label: "Codeforces",
    value: "shukla.ji",
    href: "https://codeforces.com/profile/shukla.ji",
    external: true,
    accent: "#3182ce",
    glow: "rgba(49, 130, 206, 0.18)",
    shadow: "rgba(49, 130, 206, 0.28)",
    bgHover: "rgba(49, 130, 206, 0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91-6388293612",
    href: "tel:+916388293612",
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.15)",
    shadow: "rgba(74, 222, 128, 0.25)",
    bgHover: "rgba(74, 222, 128, 0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export const Contact = () => {
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

  const handleSend = () => {
    const nameInput = document.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    const emailInput = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    const messageInput = document.querySelector(
      "textarea"
    ) as HTMLTextAreaElement;

    const name = nameInput?.value;
    const email = emailInput?.value;
    const msg = messageInput?.value;

    if (!name || !email || !msg) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent("Opportunity for Harshit Shukla");
    const body = encodeURIComponent(
      `Hi Harshit,\n\nMy name is ${name} (${email}).\n\n${msg}\n\nBest regards,\n${name}`
    );
    window.location.href = `mailto:harshitshukla6388@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="portfolio-section" ref={sectionRef}>
      <div className="section-label">Get In Touch</div>
      
      <div className="contact-header-block fade-up">
        <h2 className="section-title">
          Let&apos;s build <span style={{ color: "var(--amber)" }}>something great.</span>
        </h2>
        <p>
          I&apos;m actively looking for full-time roles in Full-Stack
          Development, Backend Engineering, or SaaS Product teams. Open to
          relocation and remote opportunities.
        </p>
      </div>

      <div className="contact-row-container">
        {/* Animated 1-Row Contact Cards */}
        <div className="contact-cards-row">
          {contactItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="contact-card-item fade-up"
              style={{
                transitionDelay: `${idx * 0.06}s`,
                ["--card-accent" as string]: item.accent,
                ["--card-glow" as string]: item.glow,
                ["--card-shadow" as string]: item.shadow,
                ["--card-bg-hover" as string]: item.bgHover,
              }}
            >
              <div className="contact-card-icon">{item.icon}</div>
              <div className="contact-card-details">
                <div className="contact-card-type">{item.label}</div>
                <div className="contact-card-val" title={item.value}>
                  {item.value}
                </div>
              </div>
              <span className="contact-card-arrow-icon">→</span>
            </a>
          ))}
        </div>

        {/* Message Form */}
        <div
          className="contact-right fade-up"
          style={{ transitionDelay: "0.45s", maxWidth: "700px" }}
        >
          <h3>Send a message</h3>
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@company.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about the role or project..."></textarea>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={handleSend}
          >
            Send Message →
          </button>
          <p className="form-note">
            This opens your email client with the message pre-filled.
          </p>
        </div>
      </div>
    </section>
  );
};

