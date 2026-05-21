"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants"

export function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/logo/logo-white.png" : "/logo/logo.png"

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <Link href="/" className="inline-block">
              {mounted ? (
                <Image
                  src={logoSrc}
                  alt={SITE_CONFIG.name}
                  width={140}
                  height={32}
                  className="h-7 w-auto"
                />
              ) : (
                <div className="h-7 w-[120px] animate-pulse rounded bg-muted" />
              )}
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A small tool for collecting written client feedback on web and mobile projects.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              MMXXVI · clienthappy.com
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Index
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Start
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={SITE_CONFIG.ctaLink}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Create an account
                </Link>
              </li>
              <li>
                <Link
                  href={SITE_CONFIG.appUrl}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            Made by a small studio that needed it
          </p>
        </div>
      </div>
    </footer>
  )
}
