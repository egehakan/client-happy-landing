"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function CTASection() {
  return (
    <section id="cta" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            § 06 / Open a project
          </p>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Send the next round
            <br />
            as <span className="italic font-normal">a single link.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Set up your first project, share the URL, and have written answers back before you'd usually be chasing the second email.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg" className="h-12 px-7 text-sm">
              <Link href={SITE_CONFIG.ctaLink}>
                {SITE_CONFIG.ctaText}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Free, no card, no team seats
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
