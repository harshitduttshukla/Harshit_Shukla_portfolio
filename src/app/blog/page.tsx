import type { Metadata } from "next";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { posts, readingTime } from "@/content/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog — Web Development, SaaS & SEO Guides | Harshit Shukla",
  description:
    "Practical guides on website costs, Next.js vs WordPress, building SaaS MVPs and local SEO — written by a freelance developer and SEO specialist.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      eyebrow="Blog"
      title="Guides on building and growing websites"
      intro={["Straightforward advice on web development, SaaS and SEO for founders and business owners."]}
    >
      <Section title="Latest articles" label="Articles">
        <div className="card-grid">
          {posts.map((p) => (
            <LinkCard key={p.slug} href={`/blog/${p.slug}`} title={p.title} text={p.description} meta={`${readingTime(p)} min read`} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
