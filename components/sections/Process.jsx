"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progressPercent = (activeStep / (processSteps.length - 1)) * 100;

  return (
    <section className="relative bg-navy-900 py-24 lg:py-32 overflow-hidden">
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
          {/* base line */}
          <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-white/10" />
          {/* animated progress line, fills as the active step advances */}
          <motion.div
            className="hidden lg:block absolute top-[26px] left-0 h-px bg-gold-500"
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.15 : 1,
                      backgroundColor: isActive ? "#004ab7" : "#0F172A",
                      borderColor: isActive ? "#004ab7" : "rgba(0,74,183,0.5)",
                    }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border"
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-500 ${isActive ? "text-white" : "text-[#004ab7]"
                        }`}
                      strokeWidth={1.8}
                    />
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.6 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border border-[#004ab7]"
                      />
                    )}
                  </motion.div>
                  <span
                    className={`tick-number text-xs mt-4 transition-colors duration-500 ${isActive ? "text-[#004ab7]" : "text-[#004ab7]/70"
                      }`}
                  >
                    {step.number}
                  </span>
                  <h3
                    className={`font-display text-base font-semibold mt-1.5 transition-colors duration-500 ${isActive ? "text-white" : "text-white/80"
                      }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}