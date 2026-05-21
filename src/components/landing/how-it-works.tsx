"use client"

import { motion } from "framer-motion"
import { HOW_IT_WORKS } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            § 03 / Flow
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            From <span className="italic font-normal">brief</span> to{" "}
            <span className="italic font-normal">answer</span>,
            <br />
            in four moves.
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <Step
              key={step.step}
              index={i}
              number={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

function Step({
  index,
  number,
  title,
  description,
}: {
  index: number
  number: number
  title: string
  description: string
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.08 }}
      className="flex flex-col gap-3 bg-background p-7 md:p-8 lg:p-9"
    >
      <div className="flex items-baseline gap-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span className="font-mono text-2xl text-foreground/90 md:text-3xl">
          {String(number).padStart(2, "0")}
        </span>
        <span>Step</span>
      </div>
      <h3 className="mt-2 text-lg font-medium tracking-tight md:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.li>
  )
}
