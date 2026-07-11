"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function TestimonialsSlider({ compact = false }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className={`relative bg-surface ${compact ? "py-20" : "py-24 lg:py-32"}`}>
      <div className="container-px">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by builders who bid to win."
          align="center"
          className="mx-auto mb-14"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-navy-900 p-10 sm:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-blueprint opacity-20" />
            <Quote className="absolute top-8 right-8 h-16 w-16 text-white/5" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-[#004ab1]" />
                  ))}
                </div>
                <p className="font-display text-xl sm:text-2xl leading-relaxed text-white">
                  "{current.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004ab7] text-white font-display font-semibold">
                    {current.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{current.name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{current.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-[18px] w-[18px]" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-6 bg-[#004ab7]" : "w-1.5 bg-navy-900/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
            >
              <ChevronRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
