import { morePosts } from "./morePosts";

export type PostSection = { heading: string; paragraphs: string[]; list?: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  tags: string[];
  intro: string;
  sections: PostSection[];
  relatedServices: string[];
};

const basePosts: Post[] = [
  {
    slug: "website-development-cost-india",
    title: "How much does website development cost in India?",
    metaTitle: "Website Development Cost in India (2026 Guide) | Harshit Shukla",
    description:
      "A practical guide to website development costs in India: what drives the price, typical ranges by website type, and how to avoid paying for the wrong things.",
    published: "2026-11-22",
    updated: "2026-11-22",
    tags: ["Website cost", "India", "Business websites"],
    intro:
      "“How much will my website cost?” is the first question almost every client asks. The honest answer is “it depends” — but it depends on a handful of predictable things. Here's how I think about pricing as a freelance developer, so you can budget sensibly.",
    sections: [
      {
        heading: "What actually drives the cost",
        paragraphs: ["The price of a website is mostly the time it takes to plan, build and test it. These factors move that time up or down:"],
        list: [
          "Number of unique page designs (not just number of pages)",
          "Custom functionality: bookings, payments, logins, dashboards",
          "Content: whether you provide copy and images or need help",
          "SEO setup: metadata, schema, speed and analytics",
          "Integrations: CRM, WhatsApp, email tools, payment gateways",
        ],
      },
      {
        heading: "Typical ranges by type of website",
        paragraphs: [
          "These are realistic starting points for freelance work, not agency rates. A simple starter website for a small business often begins around ₹15,000. A business website with proper service pages and SEO setup commonly starts around ₹30,000.",
          "Once you need logins, dashboards or payments, you're building a web application, and budgets typically start around ₹75,000. SaaS products with multiple user roles and subscriptions are a bigger investment again.",
        ],
      },
      {
        heading: "Where cheap websites cost more later",
        paragraphs: ["Very low quotes often skip the things that make a website useful for business:"],
        list: [
          "No mobile optimisation, so most Indian visitors get a poor experience",
          "Heavy themes and plugins that make the site slow",
          "No SEO groundwork, so the site never appears in search",
          "The domain or hosting registered in the developer's name, not yours",
        ],
      },
      {
        heading: "How to get an accurate quote",
        paragraphs: [
          "Write down the pages you need, three websites you like, the actions you want visitors to take (call, WhatsApp, form, purchase), and your launch date. With that, any developer can give you a fixed, meaningful quote instead of a guess.",
        ],
      },
    ],
    relatedServices: ["website-development", "seo-services"],
  },
  {
    slug: "nextjs-vs-wordpress-business-website",
    title: "Next.js vs WordPress for a business website",
    metaTitle: "Next.js vs WordPress for a Business Website | Harshit Shukla",
    description:
      "Should your business website be built with Next.js or WordPress? A developer's comparison of speed, SEO, security, editing and cost.",
    published: "2026-11-22",
    updated: "2026-11-22",
    tags: ["Next.js", "WordPress", "SEO"],
    intro:
      "WordPress powers a huge share of the web, and Next.js has become the default for modern React websites. Both can work well. The right choice depends on how your business will actually use the site.",
    sections: [
      {
        heading: "Speed and Core Web Vitals",
        paragraphs: [
          "Next.js sites can be pre-rendered to static HTML and served from a CDN, which makes them very fast by default. WordPress can be fast too, but it usually needs caching plugins, careful theme choice and regular maintenance to stay that way.",
        ],
      },
      {
        heading: "SEO",
        paragraphs: [
          "Both can rank well. WordPress makes basic SEO easy with plugins. Next.js gives developers precise control over metadata, structured data, rendering and performance — which matters most on competitive keywords.",
        ],
      },
      {
        heading: "Security and maintenance",
        paragraphs: ["WordPress sites need ongoing updates to core, themes and plugins. A statically exported Next.js site has a much smaller attack surface because there's no database or admin panel exposed publicly."],
      },
      {
        heading: "Editing content",
        paragraphs: ["WordPress wins on out-of-the-box editing for non-technical teams. With Next.js you either connect a headless CMS or have a developer update content."],
      },
      {
        heading: "My recommendation",
        paragraphs: ["Choose WordPress if you publish frequently, have non-technical editors, and need many plugins. Choose Next.js if speed, security and SEO control matter most, or if the site will grow into a web application."],
        list: ["Blog-heavy, many editors → WordPress (or headless CMS + Next.js)", "Lead-generation business site → Next.js", "Site that will grow into an app → Next.js"],
      },
    ],
    relatedServices: ["nextjs-development", "website-development", "seo-services"],
  },
  {
    slug: "how-to-build-saas-mvp",
    title: "How to build a SaaS MVP without wasting months",
    metaTitle: "How to Build a SaaS MVP (Step-by-Step) | Harshit Shukla",
    description:
      "A practical, step-by-step approach to building a SaaS MVP: scoping, multi-tenant foundations, auth, billing and launching to real users quickly.",
    published: "2026-11-22",
    updated: "2026-11-22",
    tags: ["SaaS", "MVP", "Startups"],
    intro:
      "The point of an MVP is to learn whether people will use and pay for your product — as quickly and cheaply as possible. Here's the approach I use with founders.",
    sections: [
      {
        heading: "1. Define the one job",
        paragraphs: ["Write a single sentence: “[User] uses [product] to [do job] instead of [current workaround].” Every feature in the MVP must serve that sentence."],
      },
      {
        heading: "2. Cut the feature list in half — twice",
        paragraphs: ["List everything you want, then keep only what a user needs to complete the core job once. Settings pages, advanced reports and integrations can usually wait."],
      },
      {
        heading: "3. Get the foundations right",
        paragraphs: ["Some things are expensive to change later, so it's worth doing them properly from day one:"],
        list: ["A relational database such as PostgreSQL", "Tenant-aware data so customers never see each other's records", "Authentication and roles", "A clean API boundary between frontend and backend"],
      },
      {
        heading: "4. Charge early",
        paragraphs: ["Add billing (Stripe or Razorpay) as soon as the core workflow works. Willingness to pay is the most honest feedback you'll get."],
      },
      {
        heading: "5. Launch, measure, iterate",
        paragraphs: ["Put the MVP in front of real users, add basic analytics, talk to them weekly, and plan version two from what they do — not what they say they might do."],
      },
    ],
    relatedServices: ["saas-development", "full-stack-development", "backend-api-development"],
  },
  {
    slug: "local-seo-checklist-small-business",
    title: "Local SEO checklist for small businesses",
    metaTitle: "Local SEO Checklist for Small Businesses | Harshit Shukla",
    description:
      "A practical local SEO checklist: Google Business Profile, consistent NAP details, local landing pages, schema markup, reviews and tracking.",
    published: "2026-11-22",
    updated: "2026-11-22",
    tags: ["Local SEO", "Google Business Profile", "Small business"],
    intro:
      "If customers search for “[service] near me” or “[service] in [city]”, local SEO decides whether they find you or a competitor. Work through this checklist in order.",
    sections: [
      {
        heading: "Google Business Profile",
        paragraphs: ["This is the most important local ranking asset you have."],
        list: ["Claim and verify your profile", "Choose the most accurate primary category", "Set service areas if you visit customers", "Add real photos, hours and services", "Post updates regularly"],
      },
      {
        heading: "Consistent NAP details",
        paragraphs: ["Your business Name, Address and Phone number should be identical on your website, Google profile, social profiles and directories."],
      },
      {
        heading: "Local landing pages",
        paragraphs: ["Create a page for each city or area you genuinely serve, with unique content about how you serve it. Avoid copying the same page with the city name swapped — Google treats that as thin content."],
      },
      {
        heading: "Schema markup",
        paragraphs: ["Add LocalBusiness or ProfessionalService JSON-LD with your address, phone, opening hours and service area so search engines understand your business."],
      },
      {
        heading: "Reviews",
        paragraphs: ["Ask happy customers for honest Google reviews and reply to every review. Never buy or fake reviews — it violates Google's policies and can get your profile suspended."],
      },
      {
        heading: "Track progress",
        paragraphs: ["Use Google Search Console for search queries and Google Business Profile insights for calls, direction requests and website clicks."],
      },
    ],
    relatedServices: ["seo-services", "website-development"],
  },
];

export const posts: Post[] = [...basePosts, ...morePosts];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export function readingTime(post: Post): number {
  const text = [post.intro, ...post.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])])].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
