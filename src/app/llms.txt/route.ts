import { services } from "@/content/services";
import { caseStudies } from "@/content/caseStudies";
import { posts } from "@/content/posts";
import { locations } from "@/content/locations";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}: Freelance Web Developer, AI Engineer & SEO Specialist`,
    "",
    `> ${site.name} is a freelance full-stack developer based in ${site.city}, India, working remotely with businesses in India, the USA, UK, UAE, Canada, Australia and Europe. He builds business websites, Next.js web apps, SaaS MVPs, AI/LLM applications and backend APIs, and provides technical SEO services. Websites start from about ₹15,000 in India; international projects are quoted in USD, GBP, AED, AUD or CAD.`,
    "",
    "## Key facts",
    `- Name: ${site.name}`,
    `- Role: ${site.jobTitle}`,
    `- Location: ${site.city}, ${site.region}, India (works remotely worldwide)`,
    `- Phone / WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    "- Stack: Next.js, React, TypeScript, Node.js, FastAPI, PostgreSQL, AWS, Docker, OpenAI/Claude/Gemini APIs",
    `- Profiles: ${site.sameAs.join(", ")}`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short}`),
    "",
    "## Case studies",
    ...caseStudies.map((c) => `- [${c.name}](${absoluteUrl(`/work/${c.slug}`)}): ${c.summary}`),
    "",
    "## Hire by region",
    ...locations.map((l) => `- [${l.region}](${absoluteUrl(`/hire/${l.slug}`)}): ${l.metaDescription}`),
    "",
    "## Guides",
    ...posts.map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`),
    "",
    "## Contact",
    `- [Contact page](${absoluteUrl("/contact")})`,
    `- [Pricing](${absoluteUrl("/pricing")})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
