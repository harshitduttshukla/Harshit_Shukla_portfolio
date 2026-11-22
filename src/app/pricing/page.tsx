import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, Section } from "@/components/pages/PageParts";
import { BUSINESS_ID, pageMetadata, type Faq } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Websites, Web Apps, SaaS & SEO Packages | Harshit Shukla",
  description:
    "Starting prices for business websites, web apps, SaaS MVPs, AI features and SEO from freelance developer Harshit Shukla. INR for India; USD, GBP or AED internationally.",
  path: "/pricing",
});

// NOTE: All prices below are PLACEHOLDER starting points — review and update before relying on them.
const packages = [
  { name: "Starter Website", price: "₹15,000", unit: "", forWho: "Small businesses and professionals who need a credible online presence.", items: ["Up to 5 pages", "Mobile-friendly design", "Contact form & WhatsApp button", "Basic on-page SEO"], service: "website-development", amount: 15000 },
  { name: "Business Website + SEO", price: "₹30,000", unit: "", forWho: "Service businesses that want the website to bring in enquiries.", items: ["Service and location pages", "Technical SEO & schema", "GA4 & Search Console setup", "Speed optimisation"], service: "website-development", amount: 30000 },
  { name: "Web App / MVP", price: "₹75,000", unit: "", forWho: "Startups and businesses that need logins, dashboards or workflows.", items: ["Authentication & roles", "Custom backend & database", "Admin dashboard", "Deployment"], service: "full-stack-development", amount: 75000 },
  { name: "SaaS Product", price: "₹1,50,000", unit: "", forWho: "Founders building a multi-tenant subscription product.", items: ["Multi-tenant architecture", "Subscription-ready billing", "Role-based dashboards", "Cloud deployment & CI/CD"], service: "saas-development", amount: 150000 },
  { name: "AI Feature", price: "₹40,000", unit: "", forWho: "Products adding a chatbot, agent or document workflow.", items: ["Use-case scoping", "LLM integration (Claude, OpenAI, Gemini)", "Human-approval steps", "Cost & quality controls"], service: "ai-app-development", amount: 40000 },
  { name: "SEO Audit + Fixes", price: "₹10,000", unit: "", forWho: "Existing websites that aren't ranking or indexing properly.", items: ["Technical SEO audit", "Priority fixes implemented", "Metadata & schema", "Action plan"], service: "seo-services", amount: 10000 },
  { name: "Monthly SEO", price: "₹12,000", unit: "/month", forWho: "Businesses investing in steady organic growth.", items: ["Technical monitoring", "On-page improvements", "Content recommendations", "Monthly GSC/GA4 report"], service: "seo-services", amount: 12000 },
];

const faqs: Faq[] = [
  { q: "Are these fixed prices?", a: "They are starting points. After a short call I send a fixed quote based on your exact scope." },
  { q: "Do you work with international clients?", a: "Yes. International projects are quoted in USD, GBP or AED and paid by international transfer, Wise or PayPal." },
  { q: "How are payments structured?", a: "Usually an advance to start, then payments tied to agreed milestones." },
  { q: "Is hosting included?", a: "Hosting and domains are registered in your name and billed by the provider, so you keep full control. Many small sites run on free or low-cost hosting tiers." },
];

export default function PricingPage() {
  const schema = {
    "@type": "OfferCatalog",
    name: "Development & SEO packages",
    url: absoluteUrl("/pricing"),
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.forWho,
      priceSpecification: { "@type": "PriceSpecification", minPrice: p.amount, priceCurrency: "INR" },
      seller: { "@id": BUSINESS_ID },
    })),
  };

  return (
    <PageShell
      crumbs={[{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }]}
      eyebrow="Pricing"
      title="Transparent starting prices"
      intro={[
        "Every project is different, so these are starting points rather than fixed packages. You'll get a written, fixed quote before any work begins.",
        "Prices shown are in Indian Rupees. International clients are quoted in USD, GBP or AED.",
      ]}
      faqs={faqs}
      schema={[schema]}
    >
      <Section title="Packages" label="Starting from">
        <div className="card-grid">
          {packages.map((p) => (
            <article className="price-card" key={p.name}>
              <h3>{p.name}</h3>
              <div className="price">
                <small>from </small>
                {p.price}
                {p.unit ? <small>{p.unit}</small> : null}
              </div>
              <p>{p.forWho}</p>
              <ul className="check-list">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <Link className="text-link" href={`/services/${p.service}`}>About this service</Link>
              <Link className="btn btn-secondary" href="/contact">Get a quote</Link>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
