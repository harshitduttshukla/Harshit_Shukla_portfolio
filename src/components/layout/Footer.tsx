export const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-brand">
        Harshit Shukla<span>.</span>
      </div>
      <div className="footer-note">
        Full-Stack Developer · B.Tech CSE 2026 · Lucknow, India
      </div>
      <div className="footer-note" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
        <a
          href="https://github.com/harshitduttshukla"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harshitshukla2/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/Harshitshukla63"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
        >
          X (Twitter)
        </a>
        <a
          href="https://leetcode.com/u/harshitshukla6388/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
        >
          LeetCode
        </a>
        <a
          href="https://codeforces.com/profile/shukla.ji"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
        >
          Codeforces
        </a>
      </div>
    </footer>
  );
};
