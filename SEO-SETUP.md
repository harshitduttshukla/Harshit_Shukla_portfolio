# SEO setup

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Variable | Purpose | Where to get it |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form sends enquiries straight to your inbox. Without it, the form falls back to opening the visitor's email app (mailto). | https://web3forms.com → create an access key for your email |
| `NEXT_PUBLIC_GA_ID` | Loads Google Analytics 4 (e.g. `G-XXXXXXXXXX`). Omitted = no analytics script. | GA4 → Admin → Data streams → Web |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Adds the `google-site-verification` meta tag. | Search Console → Add property → HTML tag method (copy only the `content` value) |

All three are `NEXT_PUBLIC_*`, so they're baked in at build time — redeploy after changing them.

## Where content lives

- `src/lib/site.ts` — site URL, contact details, `CONTENT_UPDATED` (date used in the sitemap — bump it when you make content changes).
- `src/lib/seo.ts` — metadata helper and JSON-LD schema builders.
- `src/content/services.ts` — the 8 service pages (`/services/[slug]`).
- `src/content/caseStudies.ts` — case studies (`/work/[slug]`).
- `src/content/locations.ts` — region pages (`/hire/[slug]`).
- `src/content/posts.ts` — blog posts (`/blog/[slug]`). Update `updated` when you edit a post.
- `src/app/pricing/page.tsx` — pricing packages (**prices are placeholders — review them**).

Adding an item to any content array automatically creates the page, adds it to the sitemap and (for services/regions) the footer.

## After deploying

1. **Search Console**: verify `https://harshitshukla.dev`, then submit `https://harshitshukla.dev/sitemap.xml`. Use URL Inspection → "Request indexing" for the home page and key service pages.
2. **Google Business Profile**: create it as a **service-area business** (hide the street address; set service areas such as India and target cities). Category: "Website designer" or "Software company"; add services, website link and photos. Keep name/phone identical to the site.
3. **Reviews & testimonials**: ask every happy client for an honest Google review and a short written testimonial (with permission to publish name/company). Add real testimonials to the site only once you have them — never invent them.
4. **Check rich results**: test a few URLs at https://search.google.com/test/rich-results.
5. **Monitor**: review Search Console Performance and Pages reports monthly; publish new blog posts regularly.
