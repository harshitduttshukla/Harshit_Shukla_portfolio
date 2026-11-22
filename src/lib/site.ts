// Site-wide constants: URL, contact details and social profiles.
export const SITE_URL = "https://harshitshukla.dev";

/** Fixed content date used for sitemap lastModified (do not use new Date()). */
export const CONTENT_UPDATED = "2026-11-22";

const whatsappText = encodeURIComponent("Hi Harshit, I would like to discuss a project.");

export const site = {
  name: "Harshit Shukla",
  jobTitle: "Freelance Full-Stack Developer, AI Engineer & SEO Specialist",
  shortTitle: "Freelance Full-Stack Developer & SEO Expert",
  email: "harshitshukla6388@gmail.com",
  phone: "+91-6388293612",
  whatsapp: `https://wa.me/916388293612?text=${whatsappText}`,
  city: "Lucknow",
  region: "Uttar Pradesh",
  country: "IN",
  ogImage: "/og-image.png",
  twitter: "@Harshitshukla63",
  sameAs: [
    "https://github.com/harshitduttshukla",
    "https://www.linkedin.com/in/harshitshukla2/",
    "https://x.com/Harshitshukla63",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean === "/" ? SITE_URL : `${SITE_URL}${clean}`;
}
