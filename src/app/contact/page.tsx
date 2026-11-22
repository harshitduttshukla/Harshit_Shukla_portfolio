import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_ID, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Get a Free Quote | Harshit Shukla",
  description:
    "Contact Harshit Shukla for a free quote on websites, web apps, SaaS, AI apps or SEO. Email, WhatsApp or the enquiry form. Working remotely with clients worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Contact asPage />
      <Footer />
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          { "@type": "ContactPage", url: absoluteUrl("/contact"), name: "Contact Harshit Shukla", about: { "@id": BUSINESS_ID } },
        ]}
      />
    </main>
  );
}
