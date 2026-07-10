"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/lib/data";

export default function FAQAccordion({ limit, showHeading = true }) {
  const [open, setOpen] = useState(0);
  const list = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="relative bg-surface py-24 lg:py-32 bg-dot-grid-light">
      <div className="container-px max-w-3xl mx-auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Answers before you ask."
            description="Can't find what you're looking for? Reach out and our team will respond within one business day."
            align="center"
            className="mx-auto mb-14"
          />
        )}

        <div className="flex flex-col gap-3">
          {list.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div
                  className={`rounded-2xl border transition-colors duration-500 overflow-hidden ${
                    isOpen ? "border-gold-500/50 bg-white" : "border-navy-900/8 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-navy-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-gold-500 text-navy-900" : "bg-navy-900/5 text-navy-900"
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
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
