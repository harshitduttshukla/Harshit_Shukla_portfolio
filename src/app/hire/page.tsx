import type { Metadata } from "next";
import Link from "next/link";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { locations } from "@/content/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hire a Remote Developer — India, USA, UK, UAE | Harshit Shukla",
  description:
    "Hire Harshit Shukla as a remote freelance developer and SEO specialist. Working with clients in India, the USA, the UK, the UAE, Europe and Australia.",
  path: "/hire",
});

export default function HirePage() {
  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "Hire", path: "/hire" }]}
      eyebrow="Hire remotely"
      title="Hire a remote developer, wherever you are"
      intro={[
        "I work remotely with clients across India and around the world. Lucknow is my home base; the internet is my office.",
        "Choose your region to see time-zone overlap, payment options and how we'd work together.",
      ]}
    >
      <Section title="Regions I work with" label="Regions">
        <div className="card-grid">
          {locations.map((l) => (
            <LinkCard key={l.slug} href={`/hire/${l.slug}`} title={l.h1} text={l.timeZone.overlap} meta={l.region} />
          ))}
        </div>
        <p style={{ marginTop: "1.5rem" }}>
          Based in Europe, Australia or elsewhere? I work with you too — <Link className="text-link" href="/contact">get in touch</Link>.
        </p>
      </Section>
    </PageShell>
  );
}
