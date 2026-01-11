"use client"

import { motion } from "framer-motion"
import {
  ThumbsUp,
  ClipboardList,
  Link,
  Layers,
  BarChart3,
  Upload,
} from "lucide-react"
import { FEATURES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ElementType> = {
  ThumbsUp,
  ClipboardList,
  Link,
  Layers,
  BarChart3,
  Upload,
}

export function FeaturesBento() {
  return (
    <section id="features" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to collect feedback
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete toolkit for gathering structured client feedback on your
            web and app projects
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || ThumbsUp
            const isLarge = feature.size === "large"
            const isWide = feature.size === "wide"

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-border hover:shadow-lg",
                  isLarge && "md:row-span-2",
                  isWide && "lg:col-span-2"
                )}
              >
                {/* Gradient hover effect */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className={cn("flex flex-col", isLarge && "h-full justify-between")}>
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>

                  {isLarge && (
                    <div className="mt-6 rounded-lg border border-border/50 bg-muted/30 p-4">
                      <div className="flex justify-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                          <span className="text-lg">👍</span>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20">
                          <span className="text-lg">🤔</span>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                          <span className="text-lg">👎</span>
                        </div>
                      </div>
                      <p className="mt-3 text-center text-sm text-muted-foreground">
                        Yes • Maybe • No
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
