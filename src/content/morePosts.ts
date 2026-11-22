import type { Post } from "./posts";

const d = "2026-11-22";

export const morePosts: Post[] = [
  {
    slug: "cost-to-hire-web-developer-usa-vs-offshore",
    title: "Cost to hire a web developer in the US vs a remote developer from India",
    metaTitle: "Cost to Hire a Web Developer: US vs Remote India (2026 Guide)",
    description:
      "Compare the real cost of hiring a US-based web developer, a US agency or a remote freelance developer from India, and how US startups get senior work for less.",
    published: d,
    updated: d,
    tags: ["USA", "Hiring", "Remote work", "Cost"],
    intro:
      "Short answer: a remote senior freelancer from India usually costs a fraction of a US agency for the same scope. Hiring in-house in the US is the most expensive option once salary, benefits and recruiting are included. What matters is choosing the option that gives you reliable, accountable delivery.",
    sections: [
      {
        heading: "The three main options for US businesses",
        paragraphs: [],
        list: [
          "In-house US developer: highest cost (salary, benefits, taxes, recruiting), full-time availability",
          "US agency: high hourly rates, a full team and formal process",
          "Remote freelance developer from India: lower rates, direct communication, one person owning the build",
        ],
      },
      {
        heading: "What you actually pay for",
        paragraphs: [
          "With an agency, part of the price covers sales, account management and office overheads. With a freelancer, almost all of it goes into design, development and testing. The quality depends on the person, not the country, which is why reviewing live work matters more than location.",
        ],
      },
      {
        heading: "Making the time difference work",
        paragraphs: [
          "India is 9.5 to 12.5 hours ahead of the US. A short overlap call in your morning plus written updates means work moves forward while you sleep. Many US startups find this speeds projects up rather than slowing them down.",
        ],
      },
      {
        heading: "How to hire safely",
        paragraphs: [],
        list: [
          "Review live projects and ask about the developer's exact role",
          "Agree a fixed USD price per milestone, paid via Wise, PayPal or bank transfer",
          "Sign an NDA and contractor agreement with IP assigned to you",
          "Keep the domain, hosting and code repository under your accounts",
        ],
      },
      {
        heading: "Get a quote",
        paragraphs: [
          "If you're a US founder or business, I can scope your website, SaaS MVP or AI feature on a short call and send a fixed USD quote.",
        ],
      },
    ],
    relatedServices: ["full-stack-development", "saas-development"],
  },
  {
    slug: "why-website-not-showing-on-google",
    title: "Why is my website not showing on Google? 9 common reasons and fixes",
    metaTitle: "Website Not Showing on Google? 9 Reasons & Fixes | Harshit Shukla",
    description:
      "Your new website isn't appearing in Google search? Here are the nine most common causes, from noindex tags to missing sitemaps, and exactly how to fix each one.",
    published: d,
    updated: d,
    tags: ["SEO", "Google Search Console", "Indexing"],
    intro:
      "It's one of the most common messages I get: “My website is live, but I can't find it on Google.” In most cases the cause is one of a short list of technical problems, and almost all of them can be fixed in an afternoon. Here's how to work through them.",
    sections: [
      {
        heading: "1. Google simply hasn't found it yet",
        paragraphs: [
          "A brand-new domain can take anywhere from a few days to a few weeks to be crawled. Search “site:yourdomain.com” on Google. If nothing appears, Google hasn't indexed any page yet.",
          "Fix: add the site to Google Search Console, submit your sitemap and use the URL Inspection tool to request indexing for your homepage and key service pages.",
        ],
      },
      {
        heading: "2. A noindex tag is blocking it",
        paragraphs: [
          "Many website builders and WordPress themes have a “discourage search engines” option that is switched on during development and forgotten at launch. It adds a noindex tag that tells Google not to list the page.",
          "Fix: view the page source and search for “noindex”. Remove it, then request indexing again in Search Console.",
        ],
      },
      {
        heading: "3. robots.txt is blocking Google",
        paragraphs: [
          "A single line in robots.txt, “Disallow: /”, blocks crawlers from the whole site. Open yourdomain.com/robots.txt and check what it says.",
        ],
      },
      {
        heading: "4–6. Sitemap, duplicate URLs and canonicals",
        paragraphs: ["These three problems often appear together:"],
        list: [
          "No XML sitemap, or one that lists old or broken URLs",
          "The same page reachable at www and non-www, or http and https, without redirects",
          "Canonical tags pointing to the wrong page, so Google ignores the one you want",
        ],
      },
      {
        heading: "7. The content is too thin to rank",
        paragraphs: [
          "A homepage with a logo, a slogan and a contact form gives Google almost nothing to understand. Each service you offer should have its own page that explains what you do, who it's for, where you work and how much it roughly costs.",
        ],
      },
      {
        heading: "8. The site is very slow or broken on mobile",
        paragraphs: [
          "Google indexes the mobile version of your site. If it loads slowly or the layout breaks on a phone, rankings suffer. Run the page through PageSpeed Insights and fix the biggest issues first, usually oversized images and heavy scripts.",
        ],
      },
      {
        heading: "9. You're targeting keywords that are too competitive",
        paragraphs: [
          "A new site will not rank for “web developer” on day one. Start with specific, local or long-tail searches such as “website developer for clinics in Lucknow”, then build authority over time with helpful content and real backlinks.",
        ],
      },
      {
        heading: "When to get help",
        paragraphs: [
          "If you've checked all of this and still don't appear, a technical SEO audit will find the cause. I fix these issues directly in the code rather than just sending a report.",
        ],
      },
    ],
    relatedServices: ["seo-services", "website-development"],
  },
  {
    slug: "freelance-developer-vs-agency",
    title: "Freelance developer vs agency: which should you hire?",
    metaTitle: "Freelance Developer vs Agency: Which to Hire? (Honest Guide)",
    description:
      "Comparing a freelance web developer with a development agency on cost, speed, communication, risk and quality, so you can choose the right fit for your project.",
    published: d,
    updated: d,
    tags: ["Hiring", "Freelancing", "Business websites"],
    intro:
      "Both freelancers and agencies can build great websites and apps. The right choice depends on your project size, budget and how involved you want to be. As a freelancer I'm obviously biased, so I've tried to be fair about where agencies are the better choice.",
    sections: [
      {
        heading: "Cost",
        paragraphs: [
          "Freelancers usually cost less because there are no account managers, sales teams or office overheads built into the price. For the same budget, you often get more senior hands-on work.",
        ],
      },
      {
        heading: "Communication",
        paragraphs: [
          "With a freelancer you talk directly to the person writing the code. Questions get answered quickly and nothing is lost between a project manager and a developer. With an agency, you get a structured process but more layers.",
        ],
      },
      {
        heading: "When an agency is the better choice",
        paragraphs: ["Choose an agency if:"],
        list: [
          "You need a large team working in parallel (design, mobile, backend, QA) on a tight deadline",
          "Your company requires formal vendor contracts, SLAs and 24/7 support",
          "The project is large enough that one person would become a bottleneck",
        ],
      },
      {
        heading: "When a freelancer is the better choice",
        paragraphs: ["Choose a freelancer if:"],
        list: [
          "You're building a business website, MVP or a focused web app",
          "You want one accountable person from planning to launch",
          "Budget matters and you'd rather pay for development than overheads",
          "You value speed and direct communication",
        ],
      },
      {
        heading: "How to reduce risk with either option",
        paragraphs: [
          "Ask to see live projects, not just screenshots. Agree milestones and pay in stages. Make sure the domain, hosting and code repository are in your name, and get a written scope before work starts.",
        ],
      },
    ],
    relatedServices: ["full-stack-development", "website-development"],
  },
  {
    slug: "questions-to-ask-before-hiring-web-developer",
    title: "12 questions to ask before hiring a web developer",
    metaTitle: "12 Questions to Ask Before Hiring a Web Developer | Harshit Shukla",
    description:
      "A practical checklist of questions to ask any web developer before you hire them, covering portfolio, ownership, SEO, timelines, payments and support.",
    published: d,
    updated: d,
    tags: ["Hiring", "Checklist", "Business websites"],
    intro:
      "Hiring the wrong developer is expensive: missed deadlines, a site you can't edit, or code nobody else can maintain. These twelve questions will quickly separate professionals from people who will leave you stuck.",
    sections: [
      {
        heading: "About their experience",
        paragraphs: [],
        list: [
          "Can you show me live websites or apps you've built, and what exactly you did on each?",
          "Have you built something similar to my project before?",
          "Which technologies will you use, and why are they right for my project?",
        ],
      },
      {
        heading: "About ownership and access",
        paragraphs: [],
        list: [
          "Will the domain, hosting and code be registered in my name?",
          "Will I get access to the code repository?",
          "Can I edit content myself after launch, and how?",
        ],
      },
      {
        heading: "About SEO and performance",
        paragraphs: [],
        list: [
          "What SEO setup is included (titles, meta descriptions, sitemap, schema)?",
          "How will you make sure the site is fast on mobile?",
          "Will you set up Google Search Console and Analytics?",
        ],
      },
      {
        heading: "About the process",
        paragraphs: [],
        list: [
          "What's the timeline, and how will I see progress along the way?",
          "How are payments split into milestones?",
          "What support do you offer after launch, and what does it cost?",
        ],
      },
      {
        heading: "Red flags to watch for",
        paragraphs: [
          "Be careful if a developer won't show live work, asks for 100% payment upfront, refuses to put the domain in your name, or promises a guaranteed #1 ranking on Google. Nobody honest can promise that.",
        ],
      },
    ],
    relatedServices: ["website-development", "full-stack-development"],
  },
  {
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals explained for business owners",
    metaTitle: "Core Web Vitals Explained (LCP, INP, CLS) for Business Owners",
    description:
      "A plain-English guide to Google's Core Web Vitals (LCP, INP and CLS): what they measure, why they affect SEO and conversions, and the most common fixes.",
    published: d,
    updated: d,
    tags: ["Performance", "Technical SEO", "Core Web Vitals"],
    intro:
      "Core Web Vitals are Google's way of measuring whether a page feels fast and stable to real visitors. They're a ranking factor, but more importantly, slow pages lose customers. Here's what the three metrics mean without the jargon.",
    sections: [
      {
        heading: "LCP: how quickly the main content appears",
        paragraphs: [
          "Largest Contentful Paint measures how long it takes for the biggest visible element, usually a hero image or headline, to load. Google considers under 2.5 seconds good.",
          "Common fixes: compress and resize images, serve modern formats like WebP or AVIF, preload the hero image and use a fast host or CDN.",
        ],
      },
      {
        heading: "INP: how quickly the page responds",
        paragraphs: [
          "Interaction to Next Paint measures the delay between a tap or click and the page visibly responding. Under 200 milliseconds is good.",
          "Common fixes: remove unnecessary third-party scripts, split large JavaScript bundles and avoid heavy work on the main thread.",
        ],
      },
      {
        heading: "CLS: whether the layout jumps around",
        paragraphs: [
          "Cumulative Layout Shift measures unexpected movement, like a button moving just as you try to tap it. A score under 0.1 is good.",
          "Common fixes: set width and height on images and embeds, reserve space for ads and banners, and load fonts properly.",
        ],
      },
      {
        heading: "How to check your own site",
        paragraphs: [
          "Open PageSpeed Insights and enter your URL. The “field data” section shows real-user results; the lab section shows suggestions. Google Search Console also has a Core Web Vitals report for the whole site.",
        ],
      },
      {
        heading: "Why framework choice matters",
        paragraphs: [
          "Sites built with modern frameworks like Next.js can pre-render pages, optimise images automatically and ship less JavaScript, which makes good Core Web Vitals much easier to achieve than on plugin-heavy themes.",
        ],
      },
    ],
    relatedServices: ["seo-services", "nextjs-development"],
  },
  {
    slug: "ai-chatbot-for-business-website",
    title: "Should you add an AI chatbot to your business website?",
    metaTitle: "AI Chatbot for Business Website: Benefits, Costs & Setup",
    description:
      "When an AI chatbot actually helps a business website, what it can and can't do, how it's built with your own data, and what to consider before adding one.",
    published: d,
    updated: d,
    tags: ["AI", "Chatbots", "LLM apps"],
    intro:
      "AI chatbots have gone from gimmick to genuinely useful, but only when they're set up properly. A chatbot trained on your own services, prices and FAQs can answer visitors at 2 a.m. and hand warm leads to you in the morning.",
    sections: [
      {
        heading: "What a good AI chatbot can do",
        paragraphs: [],
        list: [
          "Answer common questions using your own content (services, pricing, policies)",
          "Qualify leads by asking a few questions and collecting contact details",
          "Book appointments or send enquiries to WhatsApp, email or your CRM",
          "Support multiple languages, including Hindi and Hinglish",
        ],
      },
      {
        heading: "How it works: retrieval-augmented generation",
        paragraphs: [
          "Instead of letting the AI guess, a well-built chatbot first searches your own documents for relevant information, then uses a large language model to write the answer. This approach, called RAG, keeps answers accurate and on-brand.",
        ],
      },
      {
        heading: "When it's not worth it",
        paragraphs: [
          "If your site gets very little traffic or your questions are simple enough for a clear FAQ page, a chatbot may add cost without much benefit. Start with good content and a WhatsApp button, then add AI once volume justifies it.",
        ],
      },
      {
        heading: "Costs to plan for",
        paragraphs: [
          "There's a one-time build cost and a small ongoing cost for the AI model usage, which depends on how many conversations you have. For most small businesses, the running cost is modest compared with the time saved.",
        ],
      },
    ],
    relatedServices: ["ai-app-development", "website-development"],
  },
  {
    slug: "schema-markup-guide-small-business",
    title: "Schema markup for small businesses: a practical guide",
    metaTitle: "Schema Markup Guide for Small Businesses (JSON-LD Examples)",
    description:
      "What schema markup is, which types matter for small business websites (LocalBusiness, Service, FAQ, Review), and how structured data helps search visibility.",
    published: d,
    updated: d,
    tags: ["Schema", "Technical SEO", "Local SEO"],
    intro:
      "Schema markup is extra code that tells search engines exactly what your page is about: your business name, address, services, opening hours and FAQs. It doesn't change how the page looks, but it helps Google and AI assistants understand and present your business.",
    sections: [
      {
        heading: "The schema types most businesses need",
        paragraphs: [],
        list: [
          "Organization or LocalBusiness: name, logo, address, phone, opening hours",
          "Service: each service you offer, with the area you serve",
          "FAQPage: questions and answers on your service pages",
          "BreadcrumbList: helps Google show your site structure",
          "Article: for blog posts, with author and dates",
        ],
      },
      {
        heading: "Why it matters now",
        paragraphs: [
          "Structured data can make your listings eligible for rich results and helps AI search tools like Google's AI Overviews, ChatGPT and Perplexity understand who you are. Consistent business details across your site and Google Business Profile build trust.",
        ],
      },
      {
        heading: "How to add it",
        paragraphs: [
          "The recommended format is JSON-LD, a small script block in the page. On WordPress, SEO plugins can generate basic schema; on custom sites like Next.js, it's added directly in the code so it can be generated from your real content.",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [],
        list: [
          "Marking up reviews or ratings that aren't visible on the page",
          "Different phone numbers or addresses in schema and on the page",
          "Copy-pasted schema from another site that still has their details",
        ],
      },
      {
        heading: "Test before you publish",
        paragraphs: ["Use Google's Rich Results Test and the Schema.org validator to check for errors before going live."],
      },
    ],
    relatedServices: ["seo-services"],
  },
  {
    slug: "website-maintenance-checklist",
    title: "Website maintenance checklist: what to check every month",
    metaTitle: "Website Maintenance Checklist (Monthly & Yearly) | Harshit Shukla",
    description:
      "A simple monthly and yearly website maintenance checklist covering backups, security updates, speed, SEO, broken links and forms, so your site keeps working.",
    published: d,
    updated: d,
    tags: ["Maintenance", "Security", "Business websites"],
    intro:
      "A website isn't a one-time project. Without basic maintenance, forms quietly stop working, plugins become security risks and rankings slip. Here's the checklist I use for client sites.",
    sections: [
      {
        heading: "Every month",
        paragraphs: [],
        list: [
          "Test every contact form, WhatsApp link and phone link",
          "Check Google Search Console for errors and coverage issues",
          "Apply security updates to CMS, plugins and dependencies",
          "Confirm backups are running and can actually be restored",
          "Look for broken links and 404 errors",
        ],
      },
      {
        heading: "Every quarter",
        paragraphs: [],
        list: [
          "Run PageSpeed Insights on your key pages",
          "Update prices, services, team and opening hours",
          "Review analytics: which pages bring enquiries, which don't",
          "Refresh or expand your best-performing blog posts",
        ],
      },
      {
        heading: "Every year",
        paragraphs: [],
        list: [
          "Renew your domain and SSL (or enable auto-renew)",
          "Review hosting costs and performance",
          "Check accessibility and mobile layout on new devices",
          "Decide whether the design still represents your business",
        ],
      },
      {
        heading: "DIY or monthly support?",
        paragraphs: [
          "If you're comfortable with the checklist, you can handle most of it yourself. If not, a small monthly support plan is usually cheaper than fixing a hacked or broken site later.",
        ],
      },
    ],
    relatedServices: ["deployment-devops", "website-development"],
  },
  {
    slug: "saas-mvp-development-cost",
    title: "How much does it cost to build a SaaS MVP?",
    metaTitle: "SaaS MVP Development Cost in 2026 (India & Remote) | Harshit Shukla",
    description:
      "What determines the cost of building a SaaS MVP: features, user roles, payments, integrations and AI. Typical budget ranges and how to keep the first version lean.",
    published: d,
    updated: d,
    tags: ["SaaS", "MVP", "Startup"],
    intro:
      "Founders often ask what an MVP costs before they've decided what the MVP is. The cost depends far more on scope than on technology, so the best way to control the budget is to control the feature list.",
    sections: [
      {
        heading: "What every SaaS MVP needs",
        paragraphs: [],
        list: [
          "Sign-up, login and password reset",
          "The one core workflow that solves your customer's problem",
          "A simple dashboard",
          "Payments or subscriptions (often Stripe or Razorpay)",
          "Basic admin tools so you can support users",
        ],
      },
      {
        heading: "What drives cost up",
        paragraphs: [],
        list: [
          "Multiple user roles and permissions",
          "Third-party integrations (CRMs, calendars, accounting tools)",
          "AI features such as document processing or chat",
          "Real-time features: chat, notifications, live updates",
          "Mobile apps in addition to the web app",
        ],
      },
      {
        heading: "Typical budget ranges",
        paragraphs: [
          "With a freelance developer, focused web apps and MVPs typically start from around ₹75,000 in India, and grow with roles, integrations and AI. International projects are quoted in USD, GBP or AED. A short scoping call turns your idea into a fixed quote.",
        ],
      },
      {
        heading: "How to keep the MVP lean",
        paragraphs: [
          "Write down the single outcome a user should achieve in their first session. Anything that doesn't support that outcome can wait for version two. Launching sooner means learning sooner.",
        ],
      },
    ],
    relatedServices: ["saas-development", "full-stack-development"],
  },
  {
    slug: "hire-remote-developer-from-india",
    title: "Hiring a remote developer from India: a guide for US, UK and UAE businesses",
    metaTitle: "Hire a Remote Developer from India: Guide for US, UK & UAE Clients",
    description:
      "How businesses in the USA, UK, UAE and Europe can hire a remote freelance developer in India: time zones, payments, contracts, communication and avoiding common risks.",
    published: d,
    updated: d,
    tags: ["Remote work", "Hiring", "International"],
    intro:
      "Hiring a developer in India can give you senior-level skills at a sensible cost, but only if the working arrangement is set up well. Here's what international clients should know.",
    sections: [
      {
        heading: "Time zones are an advantage",
        paragraphs: [
          "India (IST) overlaps with UK mornings, the full UAE working day and US early mornings or evenings. A few hours of overlap is enough for calls, and work progresses while you sleep.",
        ],
      },
      {
        heading: "Payments and contracts",
        paragraphs: [
          "Most freelancers accept international bank transfers, Wise or PayPal. Agree a written scope, milestones and intellectual-property ownership before starting. Pay in stages linked to delivered work.",
        ],
      },
      {
        heading: "Communication that works",
        paragraphs: [],
        list: [
          "A weekly demo call with a short written update",
          "One shared channel (Slack, WhatsApp or email) for quick questions",
          "A shared board or document listing tasks and status",
        ],
      },
      {
        heading: "How to evaluate a developer",
        paragraphs: [
          "Look at live projects and code samples, ask how they handled a past problem, and start with a small paid task if you're unsure. Clear written English and proactive updates matter as much as technical skill.",
        ],
      },
    ],
    relatedServices: ["full-stack-development", "saas-development"],
  },
  {
    slug: "landing-page-that-converts",
    title: "How to build a landing page that converts visitors into enquiries",
    metaTitle: "How to Build a High-Converting Landing Page (Checklist)",
    description:
      "The essential elements of a landing page that converts: clear headline, proof, a single call to action, speed and mobile design, with a practical checklist.",
    published: d,
    updated: d,
    tags: ["Conversion", "Landing pages", "Marketing"],
    intro:
      "Traffic is only useful if visitors take action. A good landing page makes it obvious what you offer, why someone should trust you, and what to do next. Here's the structure I use.",
    sections: [
      {
        heading: "Above the fold",
        paragraphs: [],
        list: [
          "A headline that states the result the customer wants, not your company name",
          "One sentence explaining what you do and for whom",
          "One primary action: call, WhatsApp or a short form",
        ],
      },
      {
        heading: "Build trust",
        paragraphs: [],
        list: [
          "Real testimonials with names and photos where possible",
          "Examples of past work or results",
          "Clear pricing or a starting price",
          "Answers to the objections people actually have (FAQ)",
        ],
      },
      {
        heading: "Remove friction",
        paragraphs: [
          "Ask for as little information as possible. A name and phone number converts better than a ten-field form. On mobile, a tap-to-call or WhatsApp button often outperforms forms entirely.",
        ],
      },
      {
        heading: "Speed and mobile",
        paragraphs: [
          "Most visitors arrive on a phone. A page that takes more than a few seconds to load loses a large share of them before they see anything. Keep images optimised and scripts minimal.",
        ],
      },
      {
        heading: "Measure and improve",
        paragraphs: [
          "Track calls, form submissions and WhatsApp clicks as conversions in Google Analytics. Change one thing at a time, such as the headline or button text, and compare results.",
        ],
      },
    ],
    relatedServices: ["website-development", "seo-services"],
  },
  {
    slug: "wordpress-to-nextjs-migration-seo",
    title: "Migrating from WordPress to Next.js without losing SEO",
    metaTitle: "WordPress to Next.js Migration Without Losing SEO (Checklist)",
    description:
      "A step-by-step checklist for moving a WordPress site to Next.js while keeping rankings: URL mapping, 301 redirects, metadata, schema, sitemaps and post-launch monitoring.",
    published: d,
    updated: d,
    tags: ["Next.js", "WordPress", "Migration", "Technical SEO"],
    intro:
      "Moving from WordPress to Next.js can make a site dramatically faster and easier to maintain. The risk is losing rankings if URLs and metadata aren't carried over carefully. This checklist prevents that.",
    sections: [
      {
        heading: "Before the migration",
        paragraphs: [],
        list: [
          "Export every indexed URL from Search Console and your sitemap",
          "Record titles, meta descriptions and H1s for each page",
          "Note which pages bring the most traffic and backlinks",
          "Benchmark current rankings and Core Web Vitals",
        ],
      },
      {
        heading: "During the build",
        paragraphs: [],
        list: [
          "Keep existing URL slugs wherever possible",
          "Create 301 redirects for any URL that changes",
          "Recreate metadata, canonical tags and structured data",
          "Migrate images with proper alt text",
          "Generate a new XML sitemap and robots.txt",
        ],
      },
      {
        heading: "Launch day",
        paragraphs: [
          "Test redirects with a crawler, submit the new sitemap in Search Console and check that no page accidentally has a noindex tag.",
        ],
      },
      {
        heading: "After launch",
        paragraphs: [
          "Watch Search Console for crawl errors and traffic changes over the following weeks. Small fluctuations are normal; large drops usually point to a missed redirect or metadata problem that can be fixed quickly.",
        ],
      },
    ],
    relatedServices: ["nextjs-development", "seo-services"],
  },
  {
    slug: "google-business-profile-optimization",
    title: "How to optimise your Google Business Profile to get more calls",
    metaTitle: "Google Business Profile Optimisation Guide (More Calls & Visits)",
    description:
      "Step-by-step tips to optimise your Google Business Profile: categories, services, photos, reviews, posts and consistency with your website for better local rankings.",
    published: d,
    updated: d,
    tags: ["Local SEO", "Google Business Profile"],
    intro:
      "For local businesses, the Google Business Profile often brings more calls than the website itself. It's free, and a well-maintained profile can make you stand out in the map results.",
    sections: [
      {
        heading: "Get the basics exactly right",
        paragraphs: [],
        list: [
          "Choose the most specific primary category, then relevant secondary ones",
          "Use your real business name, with no added keywords",
          "Keep name, address and phone identical to your website",
          "Add accurate opening hours, including holidays",
        ],
      },
      {
        heading: "Fill every section",
        paragraphs: [
          "Add your services with short descriptions, upload real photos of your work, team and premises, and write a clear business description. Complete profiles tend to perform better.",
        ],
      },
      {
        heading: "Reviews matter",
        paragraphs: [
          "Ask happy customers for reviews with a direct link, and reply to every review, positive or negative, politely and specifically. Never buy or fake reviews; it can get your profile suspended.",
        ],
      },
      {
        heading: "Connect it to your website",
        paragraphs: [
          "Link to a relevant page on your site, not just the homepage, and make sure that page has matching LocalBusiness schema and your service area. The profile and website reinforce each other.",
        ],
      },
    ],
    relatedServices: ["seo-services", "website-development"],
  },
];
