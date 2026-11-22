import type { Metadata } from "next";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services — Full-Stack, SaaS, AI Apps & SEO | Harshit Shukla",
  description:
    "Freelance services from Harshit Shukla: full-stack and Next.js development, backend APIs, SaaS and MVPs, AI apps, business websites, DevOps and SEO. Remote, worldwide.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      eyebrow="Services"
      title="Freelance development & SEO services"
      intro={[
        "I help startups and businesses build, launch and grow web products — from a fast business website to a multi-tenant SaaS platform with AI features.",
        "Every engagement is remote-first, with clients across India, the USA, the UK, the UAE, Europe and Australia.",
      ]}
    >
      <Section title="What I can help with" label="All services">
        <div className="card-grid">
          {services.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} text={s.short} />
          ))}
        </div>
      </Section>
      <Section title="Where I work" label="Remote, worldwide" surface>
        <div className="card-grid">
          {locations.map((l) => (
            <LinkCard key={l.slug} href={`/hire/${l.slug}`} title={l.region} text={l.timeZone.overlap} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
