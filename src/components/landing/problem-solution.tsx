"use client"

import { motion } from "framer-motion"
import { PROBLEMS, SOLUTIONS } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function ProblemSolution() {
  const pairs = PROBLEMS.map((problem, i) => ({
    problem,
    solution: SOLUTIONS[i],
  }))

  return (
    <section id="why-clienthappy" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            § 01 / Why
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Feedback rounds <span className="italic font-normal">should not</span> take three weeks.
          </h2>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-10">
            <div className="pb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground" />
            <div className="pb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Before
            </div>
            <div />
            <div className="pb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              With ClientHappy
            </div>

            {pairs.map((pair, i) => (
              <DesktopRow key={i} index={i} problem={pair.problem} solution={pair.solution} />
            ))}
          </div>
        </div>

        <ul className="md:hidden">
          {pairs.map((pair, i) => (
            <MobileRow key={i} index={i} problem={pair.problem} solution={pair.solution} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function DesktopRow({
  index,
  problem,
  solution,
}: {
  index: number
  problem: string
  solution: string
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease, delay: index * 0.05 }}
        className="border-t border-border py-5 font-mono text-xs text-muted-foreground"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease, delay: index * 0.05 + 0.04 }}
        className="border-t border-border py-5 text-base text-muted-foreground line-through decoration-muted-foreground/40"
      >
        {problem}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease, delay: index * 0.05 + 0.08 }}
        className="border-t border-border py-5 font-mono text-xs text-muted-foreground"
      >
        →
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease, delay: index * 0.05 + 0.12 }}
        className="border-t border-border py-5 text-base font-medium text-foreground"
      >
        {solution}
      </motion.div>
    </>
  )
}

function MobileRow({
  index,
  problem,
  solution,
}: {
  index: number
  problem: string
  solution: string
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease, delay: index * 0.04 }}
      className="border-t border-border py-6 last:border-b last:border-border"
    >
      <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <p className="mb-2 text-sm text-muted-foreground line-through decoration-muted-foreground/40">
        {problem}
      </p>
      <p className="text-sm font-medium text-foreground">{solution}</p>
    </motion.li>
  )
}
