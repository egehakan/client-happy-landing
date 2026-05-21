"use client"

import { motion } from "framer-motion"
import { FEATURES } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function FeaturesBento() {
  return (
    <section id="features" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:mb-20 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              § 02 / Features
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Six things,
              <br />
              <span className="italic font-normal">done well.</span>
            </h2>
          </div>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground md:text-lg">
            ClientHappy is small on purpose. There's a voting screen, a questionnaire, and a place to read the answers. Nothing else gets in the way.
          </p>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {FEATURES.map((feature, i) => (
            <FeatureRow
              key={feature.title}
              index={i}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeatureRow({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.04 }}
      className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[80px_1fr_1.4fr] md:gap-10 md:py-10"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        F·{String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-xl font-medium tracking-tight md:text-2xl">{title}</h3>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </motion.li>
  )
}
