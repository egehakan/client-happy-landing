"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-16 md:min-h-screen">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Streamline Your Client Feedback
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
              Client Feedback,
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Simplified
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg md:text-xl"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href={SITE_CONFIG.ctaLink}>
                {SITE_CONFIG.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 w-full max-w-5xl sm:mt-16"
          >
            <div className="relative rounded-xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <div className="flex gap-1.5 pl-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80 sm:h-3 sm:w-3" />
                </div>
                <div className="mx-auto flex-1 max-w-md hidden sm:block">
                  <div className="rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground text-center">
                    app.clienthappy.com/projects/your-project
                  </div>
                </div>
                <div className="w-4 sm:w-16" />
              </div>

              {/* Screenshot */}
              <div className="relative rounded-lg overflow-hidden">
                {/* Mobile screenshot */}
                <div className="block sm:hidden">
                  <Image
                    src="/screenshots/voting-mobile.png"
                    alt="ClientHappy voting interface on mobile"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Desktop screenshot */}
                <div className="hidden sm:block">
                  <Image
                    src="/screenshots/voting-page.png"
                    alt="ClientHappy voting interface"
                    width={1920}
                    height={1200}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
