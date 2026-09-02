# JAY L² Repository Rebuild Plan

## Audit baseline

The live production site is a byte-for-byte match for the public `main` branch of `LoftinVentures/Loftin-Ventures-Website`. It was a zero-build static Vercel deployment consisting of `index.html`, `styles.css`, and an extensionless `gym optim` HTML file. A second private repository contains an older, incomplete duplicate and should not be used as a deployment source.

The old implementation had no dependency manifest, build pipeline, test or lint tooling, framework, reusable component system, form backend, analytics, structured data, sitemap, robots policy, favicon, legal pages, or documented deployment configuration. Its primary service link targeted a file that did not exist; the closest file was served as `application/octet-stream` because it had no extension. The desktop navigation disappeared on mobile, focus and reduced-motion behavior were absent, and production returned only HSTS among the tested security headers.

## Architecture decision

Phase 1 is a full replacement on the existing Vercel deployment path:

- Next.js App Router, React, and strict TypeScript
- Static prerendering for every public page
- Plain CSS design system with no runtime styling dependency
- Local, optimized campaign media; no external font or image requests
- First-party conversion event contract through `dataLayer` and the `jayl2:analytics` browser event
- Security headers defined in `next.config.ts`
- No database, authenticated member area, or application API in Phase 1

The V1 conversion is intentionally simple: website → email application → qualified fit call → private enrollment. This produces revenue without pretending that credentials-backed CRM, checkout, scheduling, or coaching integrations already exist.

## Phase 1 — deployable revenue path

### Created

- `app/layout.tsx` — global metadata, structured layout, header, and footer
- `app/page.tsx` — flagship sales experience
- `app/apply/page.tsx` — real email-based qualification path
- `app/privacy/page.tsx` — Phase 1 privacy disclosure
- `app/terms/page.tsx` — website-use terms
- `app/disclaimer/page.tsx` — fitness and results disclaimer
- `app/not-found.tsx` — branded 404
- `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `app/icon.svg` — discovery and install metadata
- `app/globals.css` — responsive, accessible design system
- `components/analytics-link.tsx` — vendor-neutral conversion events
- `components/legal-page.tsx`, `section-heading.tsx`, `site-header.tsx`, `site-footer.tsx`, `structured-data.tsx` — reusable primitives
- `lib/site.ts` — single source for public business details and the application template
- `public/jay-l2-campaign.jpg` — original owned campaign/social-preview asset
- `next.config.ts` — runtime/security configuration
- `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `next-env.d.ts` — reproducible build and quality toolchain

### Removed

- `index.html` and `styles.css` — obsolete monolithic site
- `gym optim` — obsolete, extensionless, incorrectly served service page

## Phase 2 — instrument and automate validated demand

Trigger: meaningful application volume or the first paid cohort, not before.

### Create

- `app/api/applications/route.ts` — validated, rate-limited application submission
- `app/apply/thanks/page.tsx` — confirmation and qualified scheduling handoff
- `components/application-form.tsx` — accessible progressive form with honeypot and Turnstile
- `components/analytics-provider.tsx` — consent-aligned PostHog event delivery
- `lib/env.ts` — typed server environment validation
- `lib/hubspot.ts` — application/contact/deal creation
- `lib/posthog.ts` — server-side conversion events
- `lib/validation/application.ts` — Zod schema and normalization
- `.env.example` — names only; no secrets

### Modify

- `app/apply/page.tsx` — replace the email handoff with the application form
- `app/privacy/page.tsx` — disclose enabled processors and retention
- `next.config.ts` — allow only the exact integration origins required by CSP
- `package.json` — add Zod and the selected integration SDKs only

### External services

- HubSpot: source of truth for leads, applications, pipeline, follow-up, and qualified meeting scheduling
- Stripe Payment Links: private post-call enrollment with terms acceptance; no public cold-traffic checkout
- Everfit: workout delivery, readiness screening, check-ins, and client communication
- PostHog: cookieless funnel and product analytics
- Cloudflare Turnstile: bot protection on the public application form

## Phase 3 — fulfillment, retention, and evidence

Trigger: repeatable delivery and at least three permissioned, well-documented client outcomes.

### Create or modify

- `app/results/page.tsx` and `components/case-study.tsx` — evidence-led case studies
- `app/page.tsx` — replace the founding-cohort evidence statement with verified outcomes
- HubSpot workflows — onboarding, incomplete-enrollment recovery, milestone prompts, referral request, and graduation sequence
- Stripe recurring product — L² Sustain, offered only to qualified graduates
- Everfit templates — standardized 16-week curriculum with personalized training and nutrition layers

Do not build a custom member portal. Everfit remains the member experience until its limitations—not aesthetics—create measurable churn or operational cost.

## Phase 4 — scalable product layer

Trigger: the coaching protocol produces consistent outcomes, recurring retention is proven, and the same support questions repeat.

- Productize the stable protocol into a cohort or self-directed product.
- Add a lead magnet only after actual sales calls identify the highest-converting problem and language.
- Add a small CMS only when publishing cadence and organic acquisition justify it.
- Evaluate software only around a repeated, valuable client workflow that existing tools handle poorly.

## Explicitly deferred

Custom workout/nutrition software, native mobile apps, a member portal, a blog/CMS, free community, affiliate shop, merchandise, AI coaching, public checkout, multiple flagship offers, referral software, and complex marketing automation are outside V1. They add build and maintenance cost before demand and retention are proven.

## Deployment contract

The repository preserves npm and is designed for the existing Vercel connection. Before merging to the production branch:

1. Confirm the Vercel project still deploys `main` from this public repository.
2. Confirm `www.loftinventures.com` is the canonical production domain and apex redirects to it.
3. Preview this branch and complete visual/device review.
4. Merge only after the preview is approved; the old static site is replaced at that point.
