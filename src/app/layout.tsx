import "./globals.css";
import "./pages.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LinkClickTracker } from "@/components/analytics/LinkClickTracker";
import { Navbar } from "@/components/layout/Navbar";
import { UIEnhancements } from "@/components/ui/UIEnhancements";
import { JsonLd } from "@/components/seo/JsonLd";
import { businessSchema, personSchema, websiteSchema } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const title = "Website Development, SEO & AI App Services | Harshit Shukla";
const description =
  "Website development, SEO services, SaaS and AI app development for businesses in India and worldwide. Fast, SEO-ready websites from ₹15,000. Call +91 6388293612 for a free quote.";

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s" },
  description,
  keywords: [
    "freelance full-stack developer",
    "hire Next.js developer",
    "remote web developer India",
    "SaaS MVP development",
    "AI app developer",
    "LLM developer",
    "technical SEO services",
    "SEO expert",
    "business website development",
    "Node.js FastAPI developer",
  ],
  alternates: { canonical: SITE_URL },
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.shortTitle}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: site.twitter,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(gscVerification ? { verification: { google: gscVerification } } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <UIEnhancements />
        <JsonLd data={[businessSchema, personSchema, websiteSchema]} />
        {gaId ? <LinkClickTracker /> : null}
      </body>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </html>
  );
}
