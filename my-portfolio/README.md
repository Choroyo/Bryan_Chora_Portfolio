## Bryan Chora – Portfolio

Modern portfolio built with the recommended stack:

- **Frontend**: Next.js 16 (App Router) + React 19 + Tailwind CSS 3 + Framer Motion
- **Backend**: Server Actions / API routes, ready for deployment on Vercel or any Node host
- **Data layer**: Optional MongoDB helper via `lib/db.ts`
- **Messaging**: Nodemailer-powered `/api/contact` endpoint (or swap for EmailJS later)

> All legacy HTML/CSS/JS content from the previous static site has been rebuilt as reusable React components with motion, responsive layouts, and page routing (`/`, `/about`, `/projects`, `/projects/[slug]`).

## Prerequisites

- Node.js 18.18+ (or 20+) and npm
- SMTP credentials for the contact form
- (Optional) MongoDB URI if you plan to persist messages or project data

## Environment Variables

Duplicate `.env.example` and populate the values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | Nodemailer credentials (use an app password if your provider requires it). |
| `CONTACT_TO` | Where contact form submissions are delivered (defaults to `SMTP_USER`). |
| `MONGODB_URI` | Connection string for MongoDB Atlas/local (only needed if you wire up persistence). |

## Scripts

```bash
# Start the dev server (http://localhost:3000)
npm run dev

# Type-check & build for production
npm run build

# Run the production server after building
npm run start

# Lint code
npm run lint
```

`dev` and `build` still set `TAILWIND_DISABLE_LIGHTNINGCSS=1` via `cross-env`; with Tailwind 3 it no longer makes a difference, but keeping it in place avoids future regressions if you upgrade the toolchain while remaining on WSL1.

## Contact Endpoint

- Client form lives in `components/ContactForm.tsx`.
- Server route: `app/api/contact/route.ts`.
- Requires the SMTP env vars above. Responses return JSON and the UI provides optimistic feedback.

## Deployment

1. Run `npm run build` locally to ensure the static export succeeds.
2. Push to GitHub; connect the repository to Vercel (frontend) and optionally Render/Railway if you split the backend.
3. Configure the same environment variables in your hosting dashboard before triggering the first deploy.

Feel free to extend the `lib/db.ts` helper, add analytics, or wire up Auth (e.g., NextAuth/Clerk) as your roadmap evolves. Let me know if you’d like guidance for those next steps!***
