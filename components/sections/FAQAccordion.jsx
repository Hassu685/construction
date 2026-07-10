"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { faqs } from "@/lib/data";

export default function FAQAccordion({ limit, showHeading = true, showCTA = true }) {
  const [open, setOpen] = useState(0);
  const list = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="relative bg-surface py-24 lg:py-32 bg-dot-grid-light overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="container-px max-w-3xl mx-auto relative">
        {showHeading && (
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Answers before you ask."
            description="Can't find what you're looking for? Reach out and our team will respond within one business day."
            align="center"
            className="mx-auto mb-14"
          />
        )}

        <div className="flex flex-col gap-4">
          {list.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div
                  data-cursor-hover
                  className={`group rounded-2xl border bg-white overflow-hidden transition-all duration-500 ${isOpen
                      ? "border-gold-500/50 shadow-premium"
                      : "border-navy-900/8 hover:border-gold-500/30 hover:shadow-sm"
                    }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-5 px-6 sm:px-7 py-5 sm:py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                      <span
                        className={`tick-number hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-medium transition-colors duration-500 ${isOpen ? "bg-navy-900 text-gold-400" : "bg-navy-900/5 text-navy-400 group-hover:text-gold-600"
                          }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display font-semibold text-base sm:text-lg leading-snug transition-colors duration-500 ${isOpen ? "text-navy-900" : "text-navy-900/90"
                          }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${isOpen ? "bg-gold-500 text-navy-900" : "bg-navy-900/5 text-navy-900 group-hover:bg-gold-500/15"
                        }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                          <div className="sm:pl-[52px] border-t border-navy-900/6 pt-5">
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {showCTA && (
          <Reveal delay={0.1} className="mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-navy-900 px-7 py-7 sm:px-9">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                  <MessageCircleQuestion className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-white font-display font-semibold text-base">Still have questions?</div>
                  <div className="text-slate-400 text-sm mt-0.5">Our estimating team responds within one business day.</div>
                </div>
              </div>
              <Button href="/contact" variant="primary" className="shrink-0 w-full sm:w-auto justify-center">
                Contact Us
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}