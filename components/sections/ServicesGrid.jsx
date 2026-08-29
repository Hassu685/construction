"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesGrid({ limit }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative bg-[#F8F7F3] py-24 lg:py-32 overflow-hidden">
      <div className="container-px relative">
        <div className="mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Estimating services engineered around your bid deadline."
            description="From first takeoff to final bid package, every service is designed to give your project team accurate numbers, fast."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative flex h-full flex-col rounded-xl bg-white border border-black/[0.06] p-8 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-500"
              >
                <span className="absolute -top-2 -right-3 font-display text- font-bold leading-none text-black/[0.03] select-none">
                  0{i + 1}
                </span>
                <div className="absolute top-0 left-8 right-8 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* BLACK BG ICON */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>

                <h3 className="relative mt-7 font-display text- font-semibold text-black">
                  {service.title}
                </h3>
                <p className="relative mt-3 text- text-slate-600 leading-relaxed flex-1">
                  {service.short}
                </p>

                <Link href={`/services#${service.slug}`} className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black mt-auto">
                  Learn more
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 group-hover:bg-gold-500 transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}