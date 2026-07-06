# SEO Master Plan — Sign Experts IL

**Site:** [signexperts.net](https://www.signexperts.net)  
**Business:** Custom signage, channel letters, LED signs, vehicle wraps, ADA signs — Alsip / Chicago, IL  
**NAP (use everywhere):** Sign Experts IL · 12632 S Kroll Dr, Alsip, IL 60803 · +1 929 392 8337 · sign.eexperts@gmail.com  
**Last updated:** July 2026

---

## Executive summary

| Area | Current (~) | 6-month target |
|------|-------------|----------------|
| Overall SEO health | 58% | 88–92% |
| Technical SEO | 82% | 95% |
| On-page metadata coverage | 48% | 95% (products + core pages; blogs unchanged) |
| Structured data | 5% | 90% |
| Local SEO | 62% | 90% |
| Off-page / authority | — | 30–50 quality referring domains |

**Biggest gaps today**

- ~45 product pages lack per-page `generateMetadata`
- No JSON-LD (LocalBusiness, FAQ, Breadcrumb)
- Home page has duplicate H1s; contact section has off-brand copy (“patients”)
- Social profile URLs are placeholders
- Blog section is live but thin — grow with new posts only (no blog template or visibility code changes)

**Blog approach (no site changes)**

- Keep existing blog pages and layout as-is — **no dev work** on `app/blog/` for SEO (no `generateMetadata`, Article schema, or routing changes).
- Publish **2–4 new posts per month** by adding entries to `lib/data.ts` (existing pattern).
- Blog index (`/blog`) already has metadata; new posts inherit root title template until we optionally revisit later.

**What already works**

- `app/robots.ts`, `app/sitemap.ts`, root `metadata` in `app/layout.tsx`
- Canonical + OG/Twitter on About, Services, Blog index
- `generateMetadata` on project pages
- Internal product links in footer, `next/image` + alt text on most assets
- NAP and Google Maps embed on homepage

---

## Goals & KPIs (6 months)

| KPI | Baseline | Target |
|-----|----------|--------|
| Indexed URLs with unique title + description (excl. blog posts) | ~11 / ~56 | ~56 / ~56 |
| New blog posts published | 2 | 2–4 / month (content only) |
| Google Business reviews | — | 25+ (avg 4.5+) |
| Organic sessions / month | Record in Week 1 | +40–60% |
| Local pack position | Record in Week 1 | Top 3 for “sign company Alsip” |
| Referring domains (quality) | Record in Week 1 | 30–50 |
| Organic leads (calls + form) | Record in Week 1 | +30% |

---

## Phase 0 — Audit & setup (Week 1)

| # | Task | Owner | Deliverable |
|---|------|-------|-------------|
| 0.1 | Claim / verify Google Search Console | SEO | Property verified |
| 0.2 | Set up GA4 + conversion events (form submit, `tel:` clicks) | Dev / SEO | Live tracking |
| 0.3 | Claim Google Business Profile, Bing Places, Apple Business Connect | Owner | Profiles live |
| 0.4 | Export baseline: traffic, rankings, indexed pages, backlinks | SEO | Baseline report |
| 0.5 | Build keyword list (see below) | SEO | 25–40 terms in sheet |
| 0.6 | Competitor audit (5 local sign companies) | SEO | Gap doc |
| 0.7 | Create tracking spreadsheet | SEO | Keywords, pages, citations, links, reviews |

### Priority keyword themes

| Theme | Example keywords |
|-------|------------------|
| Local core | sign company Alsip, signage Chicago, sign shop near me |
| Service | channel letters Chicago, LED signs Illinois, vehicle wraps Chicago |
| Product | monument signs, ADA signs Illinois, halo lit letters, light box signs |
| Intent | custom business signs, sign installation Chicago, storefront signs |

Map each keyword cluster → one primary URL (product page or service page first; blog only when publishing a matching article).

---

## Phase 1 — On-page SEO (Weeks 1–4)

### 1A — Technical foundation

| # | Task | Owner | How |
|---|------|-------|-----|
| 1.1 | Set `NEXT_PUBLIC_SITE_URL` in production | Dev | Must match live domain (no trailing slash) |
| 1.2 | Submit `sitemap.xml` in Search Console | SEO | `app/sitemap.ts` already generates URLs |
| 1.3 | Confirm `robots.txt` allows crawl | Dev | `app/robots.ts` |
| 1.4 | Fix www vs non-www (pick one canonical) | Dev | Redirect in hosting / `next.config.ts` |
| 1.5 | Run PageSpeed Insights on home + 1 product page | Dev | Target LCP &lt; 2.5s on mobile |
| 1.6 | Audit 404s and broken internal links | Dev | Fix or redirect |

### 1B — Metadata (every indexable URL)

| # | Task | Owner | File / scope |
|---|------|-------|--------------|
| 1.7 | Home-specific title + description | Dev | `app/page.tsx` or layout override |
| 1.8 | `generateMetadata` for all product pages (~45) | Dev | `app/products/[slugs]/page.tsx` |
| 1.9 | Add `alternates.canonical` to project pages | Dev | `app/projects/[slug]/page.tsx` |
| 1.10 | `generateStaticParams` for products | Dev | Pre-render at build for crawl speed |
| 1.11 | Title rules: ≤60 chars, unique, `[Topic] \| Sign Experts IL` | Content | Products, core pages, projects |
| 1.12 | Meta descriptions: 150–160 chars, CTA + location | Content | Products, core pages, projects |
| 1.13 | Per-page OG images (product photo or project image) | Content / Dev | Not only `/Logo.webp` |
| — | **Blogs: no code changes** | Content | Add 2–4 posts/month in `lib/data.ts` only |

**Metadata checklist per page**

- [ ] Unique `<title>`
- [ ] Unique `description`
- [ ] `canonical` URL
- [ ] `openGraph` (title, description, url, image, type)
- [ ] `twitter` card
- [ ] Correct `type` (`website` vs `article` for projects)

*Blog posts: out of scope for metadata checklist — publish content only.*

### 1C — Structured data (JSON-LD)

| # | Schema | Where | Owner |
|---|--------|-------|-------|
| 1.15 | `LocalBusiness` / `SignShop` | Site-wide (`app/layout.tsx` or component) | Dev |
| 1.16 | `FAQPage` | Homepage FAQ (`app/components/Faqs.tsx`) | Dev |
| 1.17 | `BreadcrumbList` | Products, projects | Dev |
| 1.18 | `WebSite` + `SearchAction` (optional) | Root layout | Dev |

**LocalBusiness fields (required):** name, url, telephone, email, address, geo, openingHours, image, sameAs (social URLs).

Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) after deploy.

### 1D — Content & HTML structure

| # | Task | Owner | Notes |
|---|------|-------|-------|
| 1.20 | One H1 per page | Dev | Home: keep one in hero/quotation, demote Form heading to H2 |
| 1.21 | Fix contact copy | Content | `mapss.tsx`: replace “patients” with business-appropriate text |
| 1.22 | Unique body copy on top 10 product pages | Content | 300–500 words: benefits, materials, industries, CTA |
| 1.23 | Expand remaining product pages over 8 weeks | Content | 5 pages/week |
| 1.24 | **Blog publishing: 2–4 posts/month** | Content | Add to `lib/data.ts` — no template or routing changes |
| 1.25 | Expand project case studies | Content | Before/after, location, services used, client industry |
| 1.26 | Internal links | Content | Link new blogs → products/services where relevant; products → services |
| 1.27 | Image alt text audit | Content | Descriptive, include service + location where natural |
| 1.28 | Footer phone as `tel:+19293928337` | Dev | `app/components/Footer.tsx` |
| 1.29 | Replace placeholder social URLs | Owner | Real Instagram, Facebook, LinkedIn in footer + schema `sameAs` |

### 1E — Local on-page

| # | Task | Owner |
|---|------|-------|
| 1.30 | NAP identical on site, GBP, and all citations | SEO |
| 1.31 | GBP categories: Sign shop, Vehicle wrapping, Commercial printer | Owner |
| 1.32 | Add service area language (Chicago, Alsip, suburbs) on Services + About | Content |
| 1.33 | Optional: geo landing pages (`/sign-company-chicago`, `/signs-alsip-il`) | Dev / Content — only if unique content |

### Blog content calendar (content only — no dev)

**Cadence:** 2–4 new posts per month. Each post = new entry in `lib/data.ts` (slug, title, body, images). Sitemap picks up new slugs automatically.

| Month | Suggested topics (pick 2–4) |
|-------|----------------------------|
| 1 | ADA signage requirements Illinois · Channel letters vs light boxes |
| 2 | Vehicle wrap ROI for local fleets · Chicago exterior sign permits overview |
| 3 | LED vs neon for storefronts · Monument signs for multi-tenant properties |
| Ongoing | Seasonal promos, completed projects, FAQ-style guides tied to product pages |

---

## Phase 2 — Off-page SEO (Weeks 2–12, ongoing)

### 2A — Google Business & reviews (start Week 2)

| # | Task | Owner | Frequency |
|---|------|-------|-----------|
| 2.1 | Complete GBP: categories, services, description, hours, website | Owner | Once |
| 2.2 | Upload 20+ project photos | Owner | Once, then weekly |
| 2.3 | GBP posts (project spotlight, tip, offer) | Owner | 2×/month |
| 2.4 | Review request campaign (email/SMS past clients) | Owner | Ongoing |
| 2.5 | Respond to every review within 48h | Owner | Ongoing |

**Review target:** 20 reviews in first 60 days.

### 2B — Citations & local directories (Weeks 2–4)

| Tier | Platforms |
|------|-----------|
| **Must have** | Google Business, Bing Places, Apple Business Connect, Yelp, BBB, Facebook |
| **Strong local** | Manta, Yellow Pages, MapQuest, Foursquare, Nextdoor Business |
| **Chamber** | Alsip / Southwest suburban / Chicagoland chambers |

| # | Task | Owner |
|---|------|-------|
| 2.6 | List on Tier 1 + Tier 2 (consistent NAP) | SEO |
| 2.7 | NAP audit & dedupe (BrightLocal / Whitespark) | SEO |
| 2.8 | Fix any wrong addresses or duplicate listings | SEO |

### 2C — Industry & B2B backlinks (Weeks 4–8)

| Platform type | Examples | Action |
|---------------|----------|--------|
| Sign associations | ISA (signs.org) | Join → member directory link |
| Wrap / vinyl brands | 3M, Avery Dennison, ORACAL, Arlon | Apply for installer locator listing |
| B2B directories | Houzz, Angi, Clutch, LinkedIn Company Page | Complete profiles |
| Construction / property | BOMA Chicago, local GC vendor lists | Partnership outreach |

| # | Task | Owner |
|---|------|-------|
| 2.9 | ISA or regional sign association membership | Owner |
| 2.10 | Submit to 2–3 wrap-film installer locators | Owner |
| 2.11 | Complete Houzz + Angi + LinkedIn profiles | SEO |

### 2D — Link earning (Weeks 6–12)

| # | Tactic | Owner | Target |
|---|--------|-------|--------|
| 2.12 | Client credit links | Owner | 1/month — “Signage by Sign Experts IL” on client site |
| 2.13 | Case study PR | Content | 1/month — pitch to Patch, local business blogs |
| 2.14 | Guest posts | Content | 2 in 90 days — signage + small business blogs |
| 2.15 | Partner vendor pages | Owner | 3–5 printers, agencies, architects |
| 2.16 | HARO / Qwoted | SEO | 2 pitches/month as IL signage expert |
| 2.17 | Local sponsorships | Owner | Events → sponsor page link |

**Anchor text mix (safe):** ~60% brand · ~25% naked URL · ~15% generic (“our sign partner”).

**Avoid:** Paid link farms, irrelevant directories, exact-match spam anchors.

### 2E — Social & brand signals (ongoing)

| Platform | Purpose | Cadence |
|----------|---------|---------|
| Instagram | Project photos, reels, before/after | 3×/week |
| Facebook | Community, reviews, shares | 2×/week |
| LinkedIn | B2B case studies, commercial work | 1×/week |
| YouTube (optional) | Install timelapses | 1–2/month |

Social links are mostly nofollow but support brand searches and referrals. Fix placeholder URLs on the website first.

---

## Phase 3 — Monitor & iterate (monthly)

| # | Task | Tool | Owner |
|---|------|------|-------|
| 3.1 | Rank tracking (20 core keywords) | Semrush / Ahrefs / manual | SEO |
| 3.2 | GSC: impressions, clicks, coverage, CWV | Search Console | SEO |
| 3.3 | GBP insights: calls, directions, views | Google Business | SEO |
| 3.4 | Backlink report: new / lost domains | Ahrefs / GSC links | SEO |
| 3.5 | Refresh 2 underperforming pages | Content | Monthly |
| 3.6 | Monthly SEO report to stakeholders | Sheet / doc | SEO |

---

## Execution timeline

```
Week 1     Audit · GSC/GA4 · GBP · keyword sheet · baseline report
Week 1–2   Product generateMetadata · LocalBusiness schema · env URL
Week 2–3   FAQ schema · H1/copy fixes · citations Tier 1 · first new blog posts
Week 3–4   Canonical on projects · static params · review campaign starts
Week 4–6   Top 10 product copy · industry directory applications
Week 6–8   Case studies · guest post #1 · partner outreach
Week 8–12  Guest post #2 · client backlinks · geo/content expansion
Ongoing    2–4 blogs/month (content only) · GBP posts · reviews · monthly report
```

---

## Priority matrix (if time is limited)

| Priority | Task | Impact |
|----------|------|--------|
| **P0** | GBP optimized + 10 reviews | Local visibility |
| **P0** | `generateMetadata` on all product pages | Fixes main URL metadata gap |
| **P0** | LocalBusiness + FAQ JSON-LD | Rich results + local trust |
| **P1** | Search Console sitemap + fix H1/copy | Crawl + relevance |
| **P1** | Tier 1 citations (consistent NAP) | Local pack |
| **P1** | Installer locator listings (3M/Avery/ORACAL) | Niche authority links |
| **P2** | 2–4 blog posts/month (content only) + case studies | Long-tail; no blog code changes |
| **P2** | Partner + client backlinks | Editorial authority |
| **P3** | Geo landing pages, YouTube | Scale after core is solid |

---

## Roles

| Role | Responsibilities |
|------|------------------|
| **Dev** | Metadata, schema, sitemap, static generation, performance, `tel:` links, technical fixes |
| **Content** | Product copy, 2–4 blogs/month (`lib/data.ts`), case studies, meta descriptions, alt text |
| **SEO / PM** | Keywords, citations, outreach, tracking, reporting |
| **Business owner** | GBP, reviews, photos, partnerships, client link asks, association memberships |

---

## Tools

| Tool | Use |
|------|-----|
| Google Search Console | Indexing, queries, sitemap |
| Google Analytics 4 | Traffic, conversions |
| Google Business Profile | Local pack, reviews |
| PageSpeed Insights | Core Web Vitals |
| Rich Results Test | Schema validation |
| BrightLocal / Whitespark | Citations |
| Ahrefs / Semrush | Keywords, backlinks |
| Screaming Frog (optional) | Crawl audit |

---

## Codebase quick reference

| Item | Location | Status |
|------|----------|--------|
| Site URL helper | `lib/site.ts` | ✅ |
| Root metadata | `app/layout.tsx` | ✅ |
| Sitemap | `app/sitemap.ts` | ✅ |
| Robots | `app/robots.ts` | ✅ |
| About / Services / Blog meta | respective `page.tsx` | ✅ |
| Project metadata | `app/projects/[slug]/page.tsx` | ✅ (add canonical) |
| Product metadata | `app/products/[slugs]/page.tsx` | ❌ TODO |
| Blog post pages | `app/blog/[slug]/page.tsx` | ✅ No changes — content-only growth |
| Blog publishing | `lib/data.ts` | Add 2–4 entries/month |
| FAQ content | `app/components/Faqs.tsx` | ✅ (needs FAQ schema) |
| NAP / map | `app/components/mapss.tsx`, `Footer.tsx` | ⚠️ Fix copy + tel link |

---

## Definition of done (SEO launch checklist)

- [ ] All product + core + project URLs have unique title, description, canonical, OG/Twitter
- [ ] Blog: 2–4 new posts/month via `lib/data.ts` (no blog template changes)
- [ ] LocalBusiness + FAQ schema validated
- [ ] Sitemap submitted; no critical coverage errors in GSC
- [ ] One H1 per page; NAP consistent site ↔ GBP ↔ top 10 citations
- [ ] GBP live with 20+ photos and 10+ reviews
- [ ] Tier 1 citations complete
- [ ] GA4 conversions firing for form + phone
- [ ] Monthly reporting cadence established

---

*This document is the single source of truth for Sign Experts IL SEO. Update the “Last updated” date and KPI table when milestones are hit.*
