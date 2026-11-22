import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { getLocation, locations } from "@/content/locations";
import { services } from "@/content/services";
import { BUSINESS_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  return pageMetadata({ title: loc.metaTitle, description: loc.metaDescription, path: `/hire/${slug}` });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();
  const path = `/hire/${slug}`;

  const schema = {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: loc.h1,
    description: loc.metaDescription,
    url: absoluteUrl(path),
    serviceType: "Web development, AI app development and SEO",
    provider: { "@id": BUSINESS_ID },
    areaServed: loc.areaServed.map((a) => ({ "@type": a.type, name: a.name })),
  };

  return (
    <PageShell
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Hire", path: "/hire" },
        { name: loc.region, path },
      ]}
      eyebrow={`Clients in ${loc.region}`}
      title={loc.h1}
      intro={loc.intro}
      faqs={loc.faqs}
      schema={[schema]}
    >
      <Section title={loc.timeZone.heading} label="Time zone">
        <p>{loc.timeZone.text}</p>
        <ul className="tag-row" style={{ marginTop: "1.25rem" }}>
          <li>{loc.timeZone.overlap}</li>
        </ul>
      </Section>
      <Section title={loc.payment.heading} label="Pricing & payment" surface>
        <p>{loc.payment.text}</p>
        <ul className="tag-row" style={{ margin: "1.25rem 0" }}>
          {loc.payment.methods.map((m) => <li key={m}>{m}</li>)}
        </ul>
        <Link className="text-link" href="/pricing">See starting prices</Link>
      </Section>
      <Section title="Why work with me" label="Benefits">
        <div className="card-grid">
          {loc.reasons.map((r) => (
            <article className="info-card" key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="How it works" label="Steps" surface>
        <ol className="step-list">
          {loc.steps.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="Services available" label="Services">
        <div className="card-grid">
          {services.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} text={s.short} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
