import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/caseStudies";
import { locations } from "@/content/locations";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

type Entry = MetadataRoute.Sitemap[number];

const entry = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly", lastModified = CONTENT_UPDATED): Entry => ({
  url: absoluteUrl(path),
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1),
    entry("/services", 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    entry("/work", 0.8),
    ...caseStudies.map((c) => entry(`/work/${c.slug}`, 0.7)),
    entry("/hire", 0.8),
    ...locations.map((l) => entry(`/hire/${l.slug}`, 0.8)),
    entry("/pricing", 0.8),
    entry("/blog", 0.7, "weekly"),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, "yearly", p.updated)),
    entry("/about", 0.6),
    entry("/contact", 0.7),
  ];
}
