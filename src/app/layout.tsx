import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { UIEnhancements } from "@/components/ui/UIEnhancements";
import type { Metadata } from "next";

const title = "Harshit Shukla | Full-Stack Developer & AI Engineer";
const description =
  "Harshit Shukla is a Full-Stack Developer & AI Engineer building production-ready web applications, SaaS products, backend systems, dashboards and AI-powered applications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitshukla.dev"),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Harshit Shukla", url: "https://harshitshukla.dev" }],
  openGraph: {
    title,
    description,
    url: "https://harshitshukla.dev",
    siteName: "Harshit Shukla",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@Harshitshukla63",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harshit Shukla",
  url: "https://harshitshukla.dev",
  jobTitle: "Full-Stack Developer & AI Engineer",
  email: "mailto:harshitshukla6388@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
  },
  sameAs: [
    "https://github.com/harshitduttshukla",
    "https://www.linkedin.com/in/harshitshukla2/",
    "https://x.com/Harshitshukla63",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
