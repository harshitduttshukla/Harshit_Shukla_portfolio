import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { getService } from "@/content/services";
import { PERSON_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({ title: study.metaTitle, description: study.metaDescription, path: `/work/${slug}` });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const path = `/work/${slug}`;
  const related = study.services.map(getService).filter((s) => s !== undefined);

  const schema = {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(path)}#work`,
    name: study.name,
    description: study.metaDescription,
    url: absoluteUrl(path),
    creator: { "@id": PERSON_ID },
    genre: study.category,
    keywords: study.tech.join(", "),
  };

  return (
    <PageShell
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: study.name, path },
      ]}
      eyebrow={`${study.category} · ${study.status}`}
      title={study.name}
      intro={[study.summary]}
      schema={[schema]}
      heroExtra={
        <div className="stat-row">
          {study.highlights.map((h) => (
            <div key={h.label}>
              <strong>{h.value}</strong>
              <span>{h.label}</span>
            </div>
          ))}
        </div>
      }
    >
      <Section title="The challenge" label="Problem">
        <ul className="check-list">
          {study.challenge.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </Section>
      <Section title="What I built" label="Solution" surface>
        <ul className="check-list">
          {study.solution.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <h3 style={{ margin: "2rem 0 1rem" }}>Key features</h3>
        <ul className="tag-row">
          {study.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </Section>
      <Section title="My role & stack" label="Role">
        <p>{study.role}</p>
        <ul className="tag-row" style={{ marginTop: "1.25rem" }}>
          {study.tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        {study.links.length ? (
          <div className="related-links" style={{ marginTop: "1.75rem" }}>
            {study.links.map((l) => (
              <a key={l.href} className="text-link" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </Section>
      <Section title="Need something similar?" label="Related services" surface>
        <div className="card-grid">
          {related.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} text={s.short} />
          ))}
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          <Link className="text-link" href="/work">See all case studies</Link>
        </p>
      </Section>
    </PageShell>
  );
}
