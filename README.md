# JAY L²

The digital headquarters for JAY L²: high-accountability lean-strength coaching for busy fathers who want to lose fat without giving up strength.

## Local development

Requirements: Node.js 20.9 or newer and npm 10 or newer.

```bash
npm install
npm run dev
```

The production build is verified with:

```bash
npm run check
```

## Deployment

The site is designed for Vercel and uses the Next.js App Router. The production domain is `https://www.loftinventures.com` until the JAY L² domain migration is complete.

Pushing to the connected production branch should trigger a Vercel deployment. Confirm the branch and domain mappings in Vercel before merging.

## Environment

Phase 1 has no required environment variables. Future CRM, checkout, scheduling, and product analytics integrations must be configured with server-side environment variables; never commit secrets.
