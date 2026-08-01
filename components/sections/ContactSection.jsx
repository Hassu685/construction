"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

export default function ContactSection({ showMap = true, showHeading = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential",
    message: "",
    hpField: "", // honeypot, must stay empty
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
            title="Talk to us about your project."
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
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#001D49] text-white">
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
                  <Clock className="h-4 w-4 text-[#004ab7]" />
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
                  {/* Honeypot field — hidden from real users, bots tend to fill it */}
                  <input
                    type="text"
                    name="hpField"
                    value={form.hpField}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  {error && (
                    <div className="sm:col-span-2 flex items-start gap-2.5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

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
                      disabled={submitting}
                      className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#05408C] text-white px-8 py-4 text-sm font-semibold hover:bg-[#004AB7] transition-colors shadow-gold disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {/* Shine effect */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" />
                      </span>

                      <span className="relative z-10">
                        {submitting ? "Sending..." : "Submit Request"}
                      </span>
                      <Send className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}