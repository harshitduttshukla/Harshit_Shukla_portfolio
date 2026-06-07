"use client";

import { useEffect, useRef } from "react";

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
      <div className="contact-wrap">
        <div className="contact-left fade-up">
          <h2 className="section-title">
            Let&apos;s build<br />
            <span style={{ color: "var(--amber)" }}>something great.</span>
          </h2>
          <p>
            I&apos;m actively looking for full-time roles in Full-Stack
            Development, Backend Engineering, or SaaS Product teams. Open to
            relocation and remote opportunities.
          </p>
          <div className="contact-links-list">
            <a
              href="mailto:harshitshukla6388@gmail.com"
              className="contact-link"
            >
              <div className="contact-link-icon">✉</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">
                  harshitshukla6388@gmail.com
                </div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
            <a
              href="https://github.com/harshitduttshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <div className="contact-link-info">
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">
                  github.com/harshitduttshukla
                </div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/harshitshukla2/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">in</div>
              <div className="contact-link-info">
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">
                  linkedin.com/in/harshitshukla2
                </div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
            <a href="tel:+916388293612" className="contact-link">
              <div className="contact-link-icon">☎</div>
              <div className="contact-link-info">
                <div className="contact-link-label">Phone</div>
                <div className="contact-link-value">+91-6388293612</div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          </div>
        </div>
        <div
          className="contact-right fade-up"
          style={{ transitionDelay: "0.15s" }}
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
