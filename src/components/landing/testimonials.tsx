"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

// Testimonials data (component currently not in use)
const TESTIMONIALS = [
  {
    quote: "ClientHappy transformed how we collect feedback. Our clients love the simple voting system!",
    name: "Sarah Chen",
    role: "Creative Director",
    company: "PixelPerfect Agency",
  },
  {
    quote: "No more endless email chains trying to understand what clients want. This tool is a game-changer.",
    name: "Marcus Johnson",
    role: "Freelance Developer",
    company: "Self-employed",
  },
  {
    quote: "The questionnaire feature is brilliant. We get all the info we need upfront, every time.",
    name: "Emily Rodriguez",
    role: "Project Manager",
    company: "WebCraft Studios",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what agencies and freelancers are saying
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
            >
              {/* Quote icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-muted-foreground/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
