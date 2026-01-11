"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function AppPreview() {
  return (
    <section id="preview" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            See it in action
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            A clean, intuitive interface your clients will love
          </p>
        </motion.div>

        {/* App preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Mobile screenshot */}
          <div className="block sm:hidden">
            <div className="mx-auto max-w-sm rounded-xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                <div className="flex gap-1.5 pl-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* Mobile screenshot */}
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/screenshots/voting-mobile.png"
                  alt="ClientHappy voting interface on mobile"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Desktop browser frame */}
          <div className="hidden sm:block mx-auto max-w-5xl rounded-xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border/50 pb-2">
              <div className="flex gap-1.5 pl-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto flex-1 max-w-md">
                <div className="rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground text-center">
                  app.clienthappy.com/projects/acme-redesign
                </div>
              </div>
              <div className="w-16" />
            </div>

            {/* Desktop screenshot */}
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/screenshots/voting-page.png"
                alt="ClientHappy voting interface"
                width={1920}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Simple, Intuitive, Effective
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
