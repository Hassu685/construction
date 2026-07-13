"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import HeroColorReveal from "@/components/ui/HeroColorReveal";


export default function Hero() {
  return (
    <section className="relative flex items-end overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop"
          alt="Steel-frame high-rise construction site at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-blueprint opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[8%] h-64 w-64 rounded-full bg-[#004ab7]/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-[6%] h-52 w-52 rounded-full bg-[#004ab7]/10 blur-3xl animate-float-delayed pointer-events-none" />

      {/* Dimension line ornament */}
      <div className="hidden lg:block absolute top-32 left-16 right-16 dimension-line" />

      <div className="relative container-px w-full min-h-screen flex items-center justify-between">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-10 lg:py-24 items-center w-full">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-10 bg-[#004AB7]" />
              <span className="eyebrow text-[#004AB7]">Estimating · Takeoff · Construction</span>
            </motion.div>

            <h1 className="font-display font-semibold text-white leading-[1.1] tracking-tight text-[2.4rem] sm:text-6xl lg:text-[3.8rem]">
              {["Building Tomorrow", "with Precision", "and Excellence."].map((line, i) => (
                <span key={i} className="block overflow-hidden pb-2">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.2 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className={`block ${i === 1
                        ? "bg-gradient-to-r from-[#004AB7] via-[#05408C] to-[#05408C] bg-clip-text text-transparent"
                        : ""
                      }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
            >
              Sigma Estimations provides accurate construction estimating, quantity takeoffs and project
              management solutions for residential, commercial and industrial developments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/contact" variant="primary" className="!text-white !bg-[#004AB7] hover:!bg-[#05408C]">
                Get Free Estimate
              </Button>
              <Button href="/projects" variant="outline" icon={false}>
                <span className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  View Projects
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Hover color-reveal visual column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block h-[560px]"
          >
            <HeroColorReveal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
