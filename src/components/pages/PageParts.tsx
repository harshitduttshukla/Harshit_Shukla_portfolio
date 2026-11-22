import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, type Crumb, type Faq } from "@/lib/seo";
import { site } from "@/lib/site";

export function CtaButtons() {
  return (
    <div className="hero-actions">
      <Link href="/contact" className="btn btn-primary">
        Get a free quote <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
      <a href={site.whatsapp} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={17} aria-hidden="true" /> WhatsApp me
      </a>
    </div>
  );
}

type SectionProps = { title: string; label?: string; children: ReactNode; surface?: boolean; id?: string };

export function Section({ title, label, children, surface, id }: SectionProps) {
  return (
    <section className={`page-section${surface ? " section-surface" : ""}`} id={id}>
      <div className="section-container">
        {label ? <p className="section-label">{label}</p> : null}
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function FaqSection({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <Section title={title} label="FAQ">
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell me what you're building. I reply within one working day with next steps — wherever you are in the world.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="section-container">
        <h2>{title}</h2>
        <p>{text}</p>
        <CtaButtons />
      </div>
    </section>
  );
}

export function LinkCard({ href, title, text, meta }: { href: string; title: string; text: string; meta?: string }) {
  return (
    <article className="info-card service-card">
      {meta ? <span className="badge">{meta}</span> : null}
      <h3>
        <Link href={href}>{title}</Link>
      </h3>
      <p>{text}</p>
      <Link href={href} className="text-link" aria-hidden="true" tabIndex={-1}>
        Read more <ArrowRight size={15} />
      </Link>
    </article>
  );
}

type PageShellProps = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro: string[];
  children?: ReactNode;
  faqs?: Faq[];
  schema?: Record<string, unknown>[];
  cta?: { title?: string; text?: string };
  heroExtra?: ReactNode;
};

export function PageShell({ crumbs, eyebrow, title, intro, children, faqs, schema = [], cta, heroExtra }: PageShellProps) {
  const graph = [breadcrumbSchema(crumbs), ...schema, ...(faqs && faqs.length ? [faqSchema(faqs)] : [])];
  return (
    <main>
      <header className="page-hero">
        <div className="section-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb, index) => (
                <li key={crumb.path}>
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.path}>{crumb.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="section-label">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="page-lead">
            {intro.map((p) => <p key={p}>{p}</p>)}
          </div>
          {heroExtra}
          <CtaButtons />
        </div>
      </header>
      {children}
      {faqs && faqs.length ? <FaqSection faqs={faqs} /> : null}
      <CtaBand {...cta} />
      <Footer />
      <JsonLd data={graph} />
    </main>
  );
}
