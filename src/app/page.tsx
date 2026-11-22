import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { Process } from "@/components/sections/Process";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, type Faq } from "@/lib/seo";

const homeFaqs: Faq[] = [
  {
    q: "Do you work with clients outside Lucknow and India?",
    a: "Yes. Lucknow is just my home base — I work remotely with clients across India and in the USA, UK, UAE, Europe and Australia, with overlap hours planned around your time zone.",
  },
  {
    q: "What services do you offer?",
    a: "Full-stack and Next.js development, backend APIs, SaaS and MVP development, AI and LLM apps, business websites, deployment and DevOps, and SEO services including technical audits, on-page SEO and schema markup.",
  },
  {
    q: "How much does a project cost?",
    a: "Starter websites begin from around ₹15,000, business websites with SEO from ₹30,000, and web apps or MVPs from ₹75,000. International projects are quoted in USD, GBP or AED. You get a fixed quote after a short call.",
  },
  {
    q: "Can you help my website rank on Google?",
    a: "Yes. I fix technical SEO issues directly in the code, optimise pages for the right keywords and add structured data. No honest SEO can guarantee a #1 ranking, but I remove the barriers and track progress in Search Console.",
  },
  {
    q: "How do we get started?",
    a: "Send a message through the contact form, email or WhatsApp with a few details about your project. I'll reply within one working day to set up a free call.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <WorkWithMe />
      <Process />
      <Certifications />
      <section className="page-section home-faq" id="faq">
        <div className="section-container">
          <p className="section-label">FAQ</p>
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {homeFaqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      <JsonLd data={[faqSchema(homeFaqs)]} />
    </main>
  );
}
