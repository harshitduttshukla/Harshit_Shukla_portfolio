import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { getService, services } from "@/content/services";
import { getCaseStudy } from "@/content/caseStudies";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/services/${slug}` });
}

const process = [
  { title: "Free discovery call", text: "We talk through goals, users, timeline and budget." },
  { title: "Written proposal", text: "Scope, milestones and a fixed price you can approve." },
  { title: "Build with regular demos", text: "Preview links and updates every week, async or live." },
  { title: "Launch & handover", text: "Deployment, documentation and optional ongoing support." },
];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const path = `/services/${slug}`;
  const related = service.caseStudies.map(getCaseStudy).filter((c) => c !== undefined);
  const others = services.filter((s) => s.slug !== slug);

  const schema = {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: absoluteUrl(path),
    provider: { "@id": BUSINESS_ID },
    areaServed: ["India", "Worldwide (remote)"],
  };

  return (
    <PageShell
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: service.name, path },
      ]}
      eyebrow={service.name}
      title={service.h1}
      intro={service.intro}
      faqs={service.faqs}
      schema={[schema]}
    >
      <Section title="Sound familiar?" label="Common problems">
        <ul className="check-list">
          {service.problems.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </Section>
      <Section title="What you get" label="Deliverables" surface>
        <div className="card-grid">
          {service.deliverables.map((d) => (
            <article className="info-card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Technology I use" label="Stack">
        <ul className="tag-row">
          {service.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p style={{ marginTop: "1.5rem" }}>
          <strong>Ideal for:</strong> {service.idealFor.join(" · ")}
        </p>
      </Section>
      <Section title="How we work together" label="Process" surface>
        <ol className="step-list">
          {process.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      {related.length ? (
        <Section title="Related work" label="Case studies">
          <div className="card-grid">
            {related.map((c) => (
              <LinkCard key={c.slug} href={`/work/${c.slug}`} title={c.name} text={c.summary} meta={c.category} />
            ))}
          </div>
        </Section>
      ) : null}
      <Section title="Other services" label="Explore" surface>
        <div className="card-grid">
          {others.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} text={s.short} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
