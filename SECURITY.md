# Security Policy

## Supported versions

This project is maintained as a single rolling `main` branch. Only the latest commit on `main` receives security fixes.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Email: **hakan@egehakankaraagac.com**

Include:

- A description of the vulnerability and its potential impact
- Steps to reproduce
- The affected file(s) or route(s)
- Your name and disclosure preferences

You should receive an acknowledgement within **5 business days**.

## Scope

This is a marketing landing page, so the realistic security surface is narrow. In scope:

- Cross-site scripting (XSS) in any rendered content
- Open redirects or unsafe link handling
- Sensitive data leaks in client-side bundles
- Supply-chain issues in the published `package.json` (e.g. a malicious dependency we should drop)

Out of scope:

- Cookie banner UX preferences
- Missing security headers on static assets that pose no real risk
- Issues in third-party platforms (Vercel, analytics) — report directly to the vendor
- Denial-of-service via volumetric attacks

## Disclosure

We will coordinate public disclosure with you and credit you (with permission) once a fix has shipped.
