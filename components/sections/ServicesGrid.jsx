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
    <section className="relative bg-surface py-24 lg:py-32 bg-dot-grid-light">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Estimating services engineered around your bid deadline."
            description="From first takeoff to final bid package, every service is designed to give your project team accurate numbers, fast."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.slug}
                id={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-navy-900/8 bg-white p-7 lift-hover shadow-sm hover:shadow-premium"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#001D49] text-white group-hover:bg-[#004AB7] group-hover:text-white transition-colors duration-500">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{service.short}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-[#004AB7] transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
