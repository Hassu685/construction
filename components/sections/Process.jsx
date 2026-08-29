"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const total = processSteps.length;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % total); // 1→2→3→4→5→6→1→2...
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Process"
          title="Six steps from drawing set to bid-ready estimate."
          description="A repeatable, transparent process so you always know where your project stands."
          align="center"
          light
          className="mx-auto mb-20"
        />

        <div className="relative">
          {/* Base line */}
          <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-gold-400/40" />

          {/* Progress line: 6 ke baad reset hoke phir 1 se fill hogi */}
          <motion.div
            className="hidden lg:block absolute top-[26px] left-0 h-px bg-gold-400"
            animate={{
              width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
            }}
            transition={{
              duration: activeStep === 0 ? 0.15 : 0.6, // reset jump ko fast rakho, baaki normal
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = getIcon(step.icon);
              const isActive = i === activeStep;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col"
                >
                  <motion.div
                    className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border text-black"
                    animate={{
                      backgroundColor: isActive ? "#fbbf24" : "#1a1a1a",
                      borderColor: isActive ? "rgba(251,191,36,0.9)" : "rgba(251,191,36,0.3)",
                      scale: isActive ? 1.12 : 1,
                      boxShadow: isActive
                        ? "0 0 0 6px rgba(251,191,36,0.15)"
                        : "0 0 0 0px rgba(251,191,36,0)",
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                      style={{ color: isActive ? "#000" : "#fbbf24" }}
                    />
                  </motion.div>

                  <span
                    className={`tick-number text-xs mt-4 transition-colors duration-500 ${isActive ? "text-gold-400" : "text-gold-500/70"
                      }`}
                  >
                    {step.number}
                  </span>

                  <h3
                    className={`font-display text-base font-semibold mt-1.5 transition-colors duration-500 ${isActive ? "text-white" : "text-slate-300"
                      }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}