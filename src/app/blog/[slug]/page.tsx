import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkCard, PageShell, Section } from "@/components/pages/PageParts";
import { getPost, posts, readingTime } from "@/content/posts";
import { getService } from "@/content/services";
import { PERSON_ID, WEBSITE_ID, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.metaTitle,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.published,
  });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${slug}`;
  const related = post.relatedServices.map(getService).filter((s) => s !== undefined);

  const schema = {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(site.ogImage),
    keywords: post.tags.join(", "),
    inLanguage: "en",
  };

  return (
    <PageShell
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path },
      ]}
      eyebrow={post.tags[0]}
      title={post.title}
      intro={[post.intro]}
      schema={[schema]}
      heroExtra={
        <div className="post-meta">
          <span>By {site.name}</span>
          <time dateTime={post.published}>Published {formatDate(post.published)}</time>
          {post.updated !== post.published ? <time dateTime={post.updated}>Updated {formatDate(post.updated)}</time> : null}
          <span>{readingTime(post)} min read</span>
        </div>
      }
    >
      <section className="page-section">
        <div className="section-container">
          <article className="prose-article">
            {post.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
                {s.list ? (
                  <ul>
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                ) : null}
              </div>
            ))}
          </article>
        </div>
      </section>
      <Section title="Related services" label="Need help?" surface>
        <div className="card-grid">
          {related.map((s) => (
            <LinkCard key={s.slug} href={`/services/${s.slug}`} title={s.name} text={s.short} />
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
