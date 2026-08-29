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
    <section className="relative bg-surface py-24 lg:py-32">
      <div className="container-px max-w-3xl mx-auto">
        {showHeading && (
          <SectionHeading
            eyebrow="Frequently Asked"
            title="Answers before you ask."
            description="Can't find what you're looking for? Reach out and our team will respond within one business day."
            align="center"
            className="mx-auto mb-16"
          />
        )}

        <div className="flex flex-col">
          {list.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04}>
                <div className="border-b border-navy-900/8 first:border-t">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="group w-full flex items-start gap-5 sm:gap-8 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Ghost number */}
                    <span
                      className={`font-display text-3xl sm:text-4xl leading-none pt-0.5 shrink-0 w-8 sm:w-10 transition-colors duration-300 ${
                        isOpen ? "text-gold-500" : "text-black/10 group-hover:text-black/20"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question + answer */}
                    <div className="flex-1 min-w-0 pt-1">
                      <span className="font-display font-semibold text-navy-900 text-lg sm:text-xl block leading-snug pr-8">
                        {faq.question}
                      </span>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle */}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full mt-1 transition-colors duration-300 ${
                        isOpen ? "bg-gold-500 text-black" : "bg-black/5 text-black/60 group-hover:bg-black/10"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}