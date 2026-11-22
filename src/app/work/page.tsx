import type { Metadata } from "next";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { caseStudies } from "@/content/caseStudies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work & Case Studies — SaaS, Dashboards, AI Apps | Harshit Shukla",
  description:
    "Case studies from Harshit Shukla: multi-tenant SaaS, booking platforms, data dashboards, AI agents, production Next.js websites and mobile apps.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }]}
      eyebrow="Work"
      title="Case studies: products and systems I've built"
      intro={[
        "Production applications, client work and my own products spanning SaaS, backend systems, dashboards, AI workflows and mobile.",
        "Each case study covers the problem, what I built, my role and the technology used.",
      ]}
    >
      <Section title="Selected case studies" label="Portfolio">
        <div className="card-grid">
          {caseStudies.map((c) => (
            <LinkCard key={c.slug} href={`/work/${c.slug}`} title={c.name} text={c.summary} meta={c.category} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
