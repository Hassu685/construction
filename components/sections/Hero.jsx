"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop"
          alt="Steel-frame high-rise construction site at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />
        <div className="absolute inset-0 bg-blueprint opacity-30" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[8%] h-64 w-64 rounded-full bg-gold-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-[6%] h-52 w-52 rounded-full bg-gold-500/10 blur-3xl animate-float-delayed pointer-events-none" />

      {/* Dimension line ornament */}
      <div className="hidden lg:block absolute top-32 left-16 right-16 dimension-line" />

      <div className="relative container-px w-full pt-40 pb-16 lg:pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="h-px w-10 bg-gold-500" />
            <span className="eyebrow text-gold-400">Estimating · Takeoff · Construction</span>
            <span className="h-px w-10 bg-gold-500" />
          </motion.div>

          <h1 className="font-display font-semibold text-white leading-[1.04] tracking-tight text-[2.6rem] sm:text-6xl lg:text-7xl">
            {["Estimating Future", "with Accuracy", "and Confidence."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`block ${i === 1 ? "text-gold-gradient" : ""}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            We help contractors and developers win more bids with precise estimating,
            comprehensive takeoffs, and end-to-end construction management
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary">
              Free Quote Now
            </Button>
            <Button href="/projects" variant="outline" icon={false}>
              <span className="flex items-center gap-2">
                <PlayCircle className="h-4 w-4" />
                View Projects
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
