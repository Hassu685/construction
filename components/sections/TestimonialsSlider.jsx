"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

const AUTOPLAY_DELAY = 6000;

export default function TestimonialsSlider({ compact = false }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next, isPaused, index]);

  const current = testimonials[index];
  const total = testimonials.length;

  return (
    <section
      className={`relative bg-black overflow-hidden ${compact ? "py-20" : "py-24 lg:py-32"}`}
    >
      {/* Background texture + glow */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-black/40 blur-3xl pointer-events-none" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by builders who bid to win."
          align="center"
          light
          className="mx-auto mb-14"
        />

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ===== "Drawing sheet" card ===== */}
          <div className="relative rounded-sm bg-[#FBF9F4] p-9 sm:p-14 shadow-premium border border-black/[0.08]">
            {/* Corner crop marks — blueprint sheet registration marks */}
            <span className="absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-black/20" />
            <span className="absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-black/20" />
            <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-black/20" />
            <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-black/20" />

            {/* Verified stamp */}
            <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 -rotate-6 rounded-sm border-2 border-gold-500 bg-[#FBF9F4] px-3 py-1 shadow-sm">
              <span className="tick-number text-[10px] font-semibold tracking-[0.18em] text-gold-600">
                VERIFIED CLIENT
              </span>
            </div>

            {/* Ghost quote mark */}
            <span className="absolute top-6 right-8 font-display text-[110px] leading-none text-black/[0.04] select-none">
              &rdquo;
            </span>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6 mt-2">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex gap-4">
                  <Quote className="h-6 w-6 shrink-0 text-gold-500/60 mt-1" strokeWidth={2.5} />
                  <p className="font-display text-xl sm:text-2xl leading-relaxed text-black">
                    {current.quote}
                  </p>
                </div>

                {/* Title block — architectural drawing footer */}
                <div className="mt-9 pt-5 border-t border-dashed border-black/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 font-display font-semibold text-sm shadow-sm">
                      {current.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-navy-900 font-semibold text-sm leading-tight">
                        {current.name}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{current.role}</div>
                    </div>
                  </div>

                  <div className="tick-number text-right text-[11px] tracking-[0.15em] text-slate-400 shrink-0">
                    <div>SHEET</div>
                    <div className="text-black/60 font-semibold">
                      {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===== Ruler-tick navigation ===== */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 transition-colors duration-300"
            >
              <ChevronLeft className="h-[18px] w-[18px]" />
            </button>

            <div className="flex items-end gap-3.5 h-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="group relative flex h-8 w-2 items-end justify-center"
                >
                  <span
                    className={`absolute bottom-0 w-px bg-white/20 transition-all duration-300 ${
                      i === index ? "h-8" : "h-3 group-hover:h-4 group-hover:bg-white/40"
                    }`}
                  />
                  {i === index && (
                    <motion.span
                      key={index}
                      initial={{ height: "0%" }}
                      animate={{ height: isPaused ? "100%" : "100%" }}
                      transition={
                        isPaused
                          ? { duration: 0.2 }
                          : { duration: AUTOPLAY_DELAY / 1000, ease: "linear" }
                      }
                      className="absolute bottom-0 w-px bg-gold-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-navy-900 transition-colors duration-300"
            >
              <ChevronRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}