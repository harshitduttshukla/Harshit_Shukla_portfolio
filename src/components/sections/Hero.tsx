import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Globe,
  Layers,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Server,
} from "lucide-react";
import { site } from "@/lib/site";

const heroServices = [
  { href: "/services/website-development", name: "Business Websites", note: "Fast, SEO-ready sites that bring enquiries", Icon: Globe },
  { href: "/services/seo-services", name: "SEO Services", note: "Technical audits, on-page SEO, local SEO", Icon: Search },
  { href: "/services/saas-development", name: "SaaS & MVP Development", note: "From idea to launched product", Icon: Rocket },
  { href: "/services/ai-app-development", name: "AI App Development", note: "Chatbots, LLM tools, automation", Icon: Bot },
  { href: "/services/full-stack-development", name: "Full-Stack Web Apps", note: "Dashboards, portals, booking systems", Icon: Layers },
  { href: "/services/backend-api-development", name: "Backend & APIs", note: "Node.js, FastAPI, PostgreSQL", Icon: Server },
];

const proofPoints = [
  "8+ shipped projects",
  "Next.js & React",
  "Technical SEO built in",
  "Fixed-price quotes",
  "Remote: India, USA, UK, UAE",
];

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-container hero-layout">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Web Development · SEO · AI</span>
            <span className="kicker-line" aria-hidden="true" />
            <span>India &amp; worldwide</span>
          </div>
          <h1>
            <span>Websites &amp; Web Apps</span>
            <span>That <em className="hero-accent-line">Rank</em> and</span>
            <span>Bring Customers</span>
          </h1>
          <p className="hero-desc">
            Business websites, SaaS products, AI apps and SEO services, designed,
            built and launched for you. Fast, mobile-first and set up to rank on
            Google, with fixed quotes and a reply within one working day.
          </p>
          <div className="hero-actions">
            <a href={`tel:${site.phone.replace(/-/g, "")}`} className="btn btn-primary">
              <Phone size={17} aria-hidden="true" /> Call {site.phone.replace("+91-", "+91 ")}
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <MessageCircle size={17} aria-hidden="true" /> WhatsApp
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Get a Free Quote <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-availability">
            <span className="status-dot" aria-hidden="true" />
            <span>Taking new projects</span>
            <span className="availability-separator" aria-hidden="true">/</span>
            <span>Websites from ₹15,000</span>
          </div>
        </div>

        <div className="hs-panel" aria-label="Services">
          <div className="hs-head">
            <div>
              <p className="hs-eyebrow">Services</p>
              <p className="hs-title">What I can build for you</p>
            </div>
            <Link href="/services" className="hs-all">
              View all <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <ul className="hs-grid">
            {heroServices.map(({ href, name, note, Icon }) => (
              <li key={href}>
                <Link href={href} className="hs-card">
                  <span className="hs-icon"><Icon size={19} aria-hidden="true" /></span>
                  <span className="hs-name">{name}</span>
                  <span className="hs-note">{note}</span>
                  <ArrowUpRight className="hs-arrow" size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${site.phone.replace(/-/g, "")}`} className="hs-call">
            <span className="hs-call-icon"><Phone size={16} aria-hidden="true" /></span>
            <span>
              <small>Not sure what you need?</small>
              <strong>Free call · {site.phone.replace("+91-", "+91 ")}</strong>
            </span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="section-container credibility-strip" aria-label="Core experience">
        <span className="credibility-label">Why clients hire me</span>
        <div className="credibility-items">
          {proofPoints.map((point) => <span key={point}>{point}</span>)}
        </div>
      </div>
    </section>
  );
}
