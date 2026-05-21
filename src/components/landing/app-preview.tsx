"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export function AppPreview() {
  return (
    <section id="preview" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              § 04 / Preview
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              What your client
              <br />
              <span className="italic font-normal">actually sees.</span>
            </h2>
          </div>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground md:text-lg">
            One screenshot at a time. Three buttons. A comment box. A thumbnail strip at the bottom so they can jump back. That's the whole interface.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <div className="hidden overflow-hidden rounded-lg border border-border sm:block">
            <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>app.clienthappy.com / projects / acme</span>
              <span>Voter · jane@acme.com</span>
            </div>
            <Image
              src="/screenshots/voting-page.png"
              alt="ClientHappy voting interface"
              width={1920}
              height={1200}
              className="block h-auto w-full"
            />
          </div>

          <div className="overflow-hidden rounded-lg border border-border sm:hidden">
            <div className="border-b border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              jane@acme.com
            </div>
            <Image
              src="/screenshots/voting-mobile.png"
              alt="ClientHappy voting interface on mobile"
              width={800}
              height={600}
              className="block h-auto w-full"
            />
          </div>

          <figcaption className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">Fig. 01</span>
            <span className="h-px flex-1 max-w-12 bg-border" />
            <span>Voting screen, mid-session</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
