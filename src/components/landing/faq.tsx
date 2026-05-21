"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants"

const ease = [0.22, 1, 0.36, 1] as const

export function FAQ() {
  return (
    <section id="faq" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              § 05 / Questions
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              The honest
              <br />
              <span className="italic font-normal">answers.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Still missing something? Open a project and the rest will be clearer than a paragraph here.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline md:text-lg">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        Q·{String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-[3.25rem] text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
