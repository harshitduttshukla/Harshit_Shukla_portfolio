import type { Metadata } from "next";
import { SITE_URL, absoluteUrl, site } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function pageMetadata({ title, description, path, type = "website", publishedTime }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const images = [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.shortTitle}` }];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      images,
      ...(type === "article"
        ? { type: "article", publishedTime, modifiedTime: publishedTime, authors: [SITE_URL] }
        : { type: "website" }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: site.twitter,
      images: [site.ogImage],
    },
  };
}

type Schema = Record<string, unknown>;

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const businessSchema: Schema = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: `${site.name} — ${site.shortTitle}`,
  url: SITE_URL,
  image: absoluteUrl(site.ogImage),
  logo: absoluteUrl("/harshit-shukla-portrait.png"),
  description:
    "Freelance full-stack development, AI app development and technical SEO for startups and businesses in India and worldwide, delivered remotely.",
  email: `mailto:${site.email}`,
  telephone: site.phone,
  priceRange: "₹₹",
  founder: { "@id": PERSON_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  areaServed: [
    { "@type": "City", name: "Lucknow" },
    { "@type": "Country", name: "India" },
    "Worldwide (remote)",
  ],
  sameAs: [...site.sameAs],
};

export const personSchema: Schema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: site.name,
  url: SITE_URL,
  image: absoluteUrl("/harshit-shukla-portrait.png"),
  jobTitle: site.jobTitle,
  email: `mailto:${site.email}`,
  worksFor: { "@id": BUSINESS_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
  knowsAbout: [
    "Full-stack web development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "SaaS development",
    "LLM application development",
    "Technical SEO",
    "Docker",
    "AWS",
  ],
  sameAs: [...site.sameAs],
};

export const websiteSchema: Schema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: site.name,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(items: Crumb[]): Schema {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]): Schema {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
