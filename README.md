# ClientHappy — Landing Page

Marketing landing page for [ClientHappy](https://github.com/egehakan/client-happy) — a structured client feedback tool. Built with Next.js 16, React 19, and shadcn/ui.

> **License:** Source-available under [PolyForm Noncommercial 1.0.0](./LICENSE.md). You can read, fork, run, and modify this for personal, research, educational, and non-profit use. **Commercial use — including using this page or its components as part of a commercial offering — is not permitted.** See the LICENSE for full terms.

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Theming:** `next-themes` with system preference detection

## Sections

The page is composed of small, focused components under `src/components/landing/`:

- `header.tsx`, `hero.tsx`
- `problem-solution.tsx`, `how-it-works.tsx`
- `features-bento.tsx`, `app-preview.tsx`, `stats.tsx`
- `testimonials.tsx`, `social-proof.tsx`
- `faq.tsx`, `cta-section.tsx`, `footer.tsx`

A cookie banner lives at `src/components/cookie-banner.tsx`.

## Getting started

```bash
git clone https://github.com/egehakan/client-happy-landing.git
cd client-happy-landing
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables are required for the base landing page to run locally.

## Build

```bash
pnpm build
pnpm start
```

## Contributing

Contributions are welcome under the same noncommercial license. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR and review the [Code of Conduct](./CODE_OF_CONDUCT.md). Security issues: see [SECURITY.md](./SECURITY.md).

## License

[PolyForm Noncommercial 1.0.0](./LICENSE.md). This is a source-available license, not OSI-approved "open source." Commercial use requires a separate license from the author.

For commercial licensing inquiries: **hakan@egehakankaraagac.com**
