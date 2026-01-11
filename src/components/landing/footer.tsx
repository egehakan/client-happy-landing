"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
// import { Twitter, Github, Linkedin } from "lucide-react"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants"

// const socialIconMap: Record<string, React.ElementType> = {
//   Twitter,
//   Github,
//   Linkedin,
// }

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark"
    ? "/logo/logo-white.png"
    : "/logo/logo.png"

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              {mounted ? (
                <Image
                  src={logoSrc}
                  alt={SITE_CONFIG.name}
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : (
                <div className="h-8 w-[140px] animate-pulse rounded bg-muted" />
              )}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Gather structured feedback from clients with visual voting and
              custom questionnaires.
            </p>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Get Started</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={SITE_CONFIG.ctaLink}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  href={SITE_CONFIG.appUrl}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links - commented out for now */}
          {/* <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Social links - commented out for now */}
          {/* <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <div className="flex gap-4">
              {FOOTER_LINKS.social.map((link) => {
                const Icon = socialIconMap[link.icon] || Twitter
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/50 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
