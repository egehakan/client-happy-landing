"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/logo/logo-white.png" : "/logo/logo.png"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background"
          : "border-b border-transparent bg-background"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {mounted ? (
            <Image
              src={logoSrc}
              alt={SITE_CONFIG.name}
              width={140}
              height={32}
              className="h-7 w-auto"
              priority
            />
          ) : (
            <div className="h-7 w-[120px] animate-pulse rounded bg-muted" />
          )}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="h-9 px-4 text-sm">
            <Link href={SITE_CONFIG.ctaLink}>{SITE_CONFIG.ctaText}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "absolute left-0 right-0 top-16 border-b border-border bg-background transition-all duration-200 md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-3">
            <Link href={SITE_CONFIG.ctaLink}>{SITE_CONFIG.ctaText}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
