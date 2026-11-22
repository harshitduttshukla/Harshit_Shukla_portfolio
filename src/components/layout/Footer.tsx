import Link from "next/link";
import { ArrowUp, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { site } from "@/lib/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="section-container">
        <div className="footer-main">
          <div>
            <Link className="footer-brand" href="/">Harshit Shukla<span>.</span></Link>
            <p>{site.jobTitle}</p>
            <span className="footer-availability">Working remotely with clients across India and worldwide.</span>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
          </nav>
          <div className="footer-socials" aria-label="Social links">
            <a href="https://github.com/harshitduttshukla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Code2 size={18} />
            </a>
            <a href="https://www.linkedin.com/in/harshitshukla2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BriefcaseBusiness size={18} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Harshit">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer-directory">
          <nav aria-label="Services">
            <p>Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Regions">
            <p>Hire remotely</p>
            <ul>
              {locations.map((l) => (
                <li key={l.slug}><Link href={`/hire/${l.slug}`}>{l.region === "Lucknow" ? "Web developer in Lucknow" : `Developer for ${l.region}`}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Harshit Shukla</span>
          <a href="#main-content">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
