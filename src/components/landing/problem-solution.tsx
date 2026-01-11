"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"
import { PROBLEMS, SOLUTIONS } from "@/lib/constants"

export function ProblemSolution() {
  return (
    <section id="why-clienthappy" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Old Way vs. The ClientHappy Way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop chasing feedback through scattered channels
          </p>
        </motion.div>

        {/* Two column comparison */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Problems column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8"
          >
            <h3 className="mb-6 text-xl font-semibold text-destructive">
              The Old Way
            </h3>
            <ul className="space-y-4">
              {PROBLEMS.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 sm:p-8"
          >
            <h3 className="mb-6 text-xl font-semibold text-green-600 dark:text-green-400">
              The ClientHappy Way
            </h3>
            <ul className="space-y-4">
              {SOLUTIONS.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-muted-foreground">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
