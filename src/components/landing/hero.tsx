"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ThumbsUp, Minus, ThumbsDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="font-mono">No 01</span>
            <span className="h-px flex-1 max-w-12 bg-border" />
            <span>A feedback tool for studios</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Client feedback,
            <br />
            <span className="italic font-normal">in writing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {SITE_CONFIG.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Button asChild size="lg" className="h-11 px-6 text-sm">
              <Link href={SITE_CONFIG.ctaLink}>
                {SITE_CONFIG.ctaText}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
            >
              See how it works
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-12 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="font-mono">$0</span>
            <span>·</span>
            <span>No card</span>
            <span>·</span>
            <span>No client logins</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="relative"
        >
          <HeroVoteCard />
        </motion.div>
      </div>
    </section>
  )
}

function HeroVoteCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-3xl bg-muted/40" aria-hidden />

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="font-mono">Homepage · Hero</span>
          <span className="font-mono">03 / 12</span>
        </div>

        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src="/screenshots/voting-page.png"
            alt="Voting on a screenshot"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 480px, 100vw"
            priority
          />
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-2">
            <VoteButton variant="yes" />
            <VoteButton variant="mid" />
            <VoteButton variant="no" />
          </div>
          <div className="rounded-md border border-border bg-background px-3 py-2.5 text-xs text-muted-foreground">
            Love the typography, but the hero feels heavy on the left.
          </div>
        </div>
      </div>

      <FloatingComment />
    </div>
  )
}

function VoteButton({ variant }: { variant: "yes" | "mid" | "no" }) {
  const config = {
    yes: { Icon: ThumbsUp, label: "Yes", active: true },
    mid: { Icon: Minus, label: "Maybe", active: false },
    no: { Icon: ThumbsDown, label: "No", active: false },
  }[variant]

  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-1.5 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
        config.active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground/80 hover:bg-muted"
      }`}
      tabIndex={-1}
      aria-hidden
    >
      <config.Icon className="h-3.5 w-3.5" />
      {config.label}
    </button>
  )
}

function FloatingComment() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, ease, delay: 0.6 }}
      className="absolute -right-4 top-12 hidden w-44 rounded-md border border-border bg-card p-3 shadow-sm md:block"
      aria-hidden
    >
      <div className="mb-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-mono">
        jane @ acme
      </div>
      <p className="text-xs leading-snug text-foreground/85">
        Yes. Same as v2, just less green.
      </p>
    </motion.div>
  )
}
