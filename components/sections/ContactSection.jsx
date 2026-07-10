"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

export default function ContactSection({ showMap = true, showHeading = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "Residential", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoCards = [
    { icon: MapPin, title: "Office", value: siteConfig.address },
    { icon: Phone, title: "Phone", value: siteConfig.phone },
    { icon: Mail, title: "Email", value: siteConfig.email },
  ];

  return (
    <section className="relative bg-surface py-24 lg:py-32 bg-diagonal">
      <div className="container-px">
        {showHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title="Tell us about your project."
            description="Share your drawings and timeline — we'll follow up with next steps within one business day."
            align="center"
            className="mx-auto mb-16"
          />
        )}

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Info cards + hours */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Reveal>
              <div className="rounded-2xl bg-white border border-navy-900/8 p-6 flex flex-col gap-5">
                {infoCards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`flex items-start gap-4 ${i !== 0 ? "pt-5 border-t border-navy-900/8" : ""
                      }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-400 font-medium">{card.title}</div>
                      <div className="text-navy-900 font-medium mt-1 text-sm leading-relaxed">{card.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-navy-900 p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-gold-400" />
                  <span className="text-sm font-semibold">Working Hours</span>
                </div>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="text-slate-400">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="rounded-3xl bg-white border border-navy-900/8 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy-900">Request received</h3>
                  <p className="text-slate-600 mt-2 max-w-sm text-sm">
                    Thank you, {form.name.split(" ")[0] || "there"}. A member of our estimating team will reach out within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Full Name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors"
                      placeholder="Jordan Reyes"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors"
                      placeholder="jordan@company.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors bg-white"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Project Details</label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm focus:border-gold-500 outline-none transition-colors resize-none"
                      placeholder="Tell us about your project scope, timeline and drawing status..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 text-navy-900 px-8 py-4 text-sm font-semibold hover:bg-gold-400 transition-colors shadow-gold"
                    >
                      Submit Request
                      <Send className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Full-width map */}
        {showMap && (
          <Reveal delay={0.15} className="mt-6">
            <div className="relative rounded-2xl overflow-hidden h-80 sm:h-96 border border-navy-900/8 bg-navy-100">
              <iframe
                title="BuildNova office location map"
                src="https://www.google.com/maps?q=Tampa%20Florida&output=embed"
                className="w-full h-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}