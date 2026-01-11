"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

// Stats data (component currently not in use)
const STATS = [
  { value: "10,000+", label: "Screenshots Reviewed" },
  { value: "500+", label: "Happy Teams" },
  { value: "95%", label: "Faster Feedback" },
]

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState("0")
  const numericPart = value.replace(/[^0-9]/g, "")
  const suffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!inView) return

    const target = parseInt(numericPart, 10)
    const duration = 2000
    const steps = 60
    const stepValue = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= target) {
        setDisplayValue(numericPart)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current).toString())
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, numericPart])

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                <AnimatedNumber value={stat.value} inView={isInView} />
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
