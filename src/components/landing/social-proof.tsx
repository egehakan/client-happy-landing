"use client"

import { motion } from "framer-motion"

const PLACEHOLDER_LOGOS = [
  "Acme Corp",
  "TechStart",
  "DesignLab",
  "WebAgency",
  "PixelPro",
  "CodeCraft",
  "CreativeHub",
  "DevStudio",
]

export function SocialProof() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-medium text-muted-foreground"
        >
          Trusted by agencies and freelancers worldwide
        </motion.p>

        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />

          {/* Scrolling logos */}
          <div className="flex animate-marquee gap-12">
            {[...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex h-12 shrink-0 items-center justify-center px-4"
              >
                <span className="whitespace-nowrap text-xl font-semibold text-muted-foreground/50">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
