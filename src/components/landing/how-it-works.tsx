"use client"

import { motion } from "framer-motion"
import {
  FolderPlus,
  Share2,
  MessageSquare,
  CheckCircle,
} from "lucide-react"
import { HOW_IT_WORKS } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  FolderPlus,
  Share2,
  MessageSquare,
  CheckCircle,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get client feedback in 4 simple steps
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = iconMap[step.icon] || FolderPlus

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <div className="relative z-10 mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-background text-sm font-bold shadow-md ring-2 ring-primary">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
