# Contributing to ClientHappy Landing

Thanks for your interest. A few things to know before you start.

## License of contributions

This project is released under [PolyForm Noncommercial 1.0.0](./LICENSE.md) — a source-available, noncommercial license. By submitting a pull request, you agree that your contribution will be made available under the same license.

If you are unwilling or unable to license your contribution under these terms, please do not open a pull request.

## Before you start

- For non-trivial changes (new sections, layout overhauls), please **open an issue first** so we can discuss direction.
- Small fixes (typos, copy tweaks, broken links, accessibility fixes) are fine to send as a PR directly.

## Development setup

```bash
pnpm install
pnpm dev
```

No environment variables are required.

## Code style

This codebase follows the conventions described in [`CLAUDE.md`](./CLAUDE.md):

- TypeScript everywhere; prefer interfaces over type aliases.
- Functional components, server-first — minimize `'use client'`.
- shadcn/ui first; fall back to Radix primitives if not available.
- Tailwind for styling. Use the `cn()` utility for conditional classes.
- Mobile-first responsive design.

Run before submitting:

```bash
pnpm lint
pnpm build
```

## Pull request checklist

- [ ] My change is small enough to review, or I opened an issue first.
- [ ] `pnpm lint` and `pnpm build` pass.
- [ ] I tested in both light and dark themes.
- [ ] I tested on mobile and desktop widths.
- [ ] I have not committed secrets or third-party brand assets without permission.
- [ ] I agree to license my contribution under PolyForm Noncommercial 1.0.0.

## Reporting bugs

Open a GitHub issue with a clear description and ideally a screenshot.

## Security vulnerabilities

See [SECURITY.md](./SECURITY.md).
