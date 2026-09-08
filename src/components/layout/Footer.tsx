import { ArrowUp, BriefcaseBusiness, Code2, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="section-container">
        <div className="footer-main">
          <div>
            <a className="footer-brand" href="#home">Harshit Shukla<span>.</span></a>
            <p>Full-Stack Developer &amp; AI Engineer</p>
            <span className="footer-availability">Available for freelance projects &amp; full-time opportunities.</span>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
          </nav>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://github.com/harshitduttshukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Code2 size={18} />
            </a>
            <a href="https://www.linkedin.com/in/harshitshukla2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BriefcaseBusiness size={18} />
            </a>
            <a href="mailto:harshitshukla6388@gmail.com" aria-label="Email Harshit">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Harshit Shukla</span>
          <a href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
