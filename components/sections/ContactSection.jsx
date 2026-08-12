"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  UploadCloud,
  FileText,
  X,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

const MAX_FILES = 5;
const MAX_TOTAL_SIZE = 20 * 1024 * 1024; // 20MB
const ACCEPTED_TYPES = ".pdf,.doc,.docx,.xls,.xlsx,.dwg,.jpg,.jpeg,.png";

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactSection({ showMap = true, showHeading = true }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
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

  const addFiles = (incoming) => {
    setError("");
    const incomingArr = Array.from(incoming);
    const combined = [...files, ...incomingArr];

    if (combined.length > MAX_FILES) {
      setError(`You can attach up to ${MAX_FILES} files.`);
      return;
    }

    const totalSize = combined.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_TOTAL_SIZE) {
      setError("Total attachment size can't exceed 20MB.");
      return;
    }

    setFiles(combined);
  };

  const handleFileInput = (e) => {
    if (e.target.files?.length) addFiles(e.target.files);
    e.target.value = ""; // allow re-selecting the same file later
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));
      files.forEach((file) => payload.append("attachments", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
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

                  {/* Document upload */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">
                      Drawings / Documents <span className="text-slate-400 font-normal">(optional)</span>
                    </label>

                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                      }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      data-cursor-hover
                      className={`flex items-center gap-3 rounded-xl border-2 border-dashed px-4 py-3 cursor-pointer transition-colors duration-300 ${dragActive
                          ? "border-gold-500 bg-[#EEF3FE]"
                          : "border-navy-900/15 hover:border-gold-500/60 hover:bg-[#EEF3FE]/40"
                        }`}
                    >
                      <UploadCloud className="h-4 w-4 text-[#004ab7] shrink-0" />
                      <p className="text-sm text-navy-900 flex-1">
                        <span className="font-medium">Click to upload</span>
                        <span className="text-slate-400"> or drag and drop — PDF, Word, Excel, DWG, images</span>
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept={ACCEPTED_TYPES}
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </div>

                    {files.length > 0 && (
                      <ul className="mt-2 flex flex-col gap-1.5">
                        {files.map((file, i) => (
                          <li
                            key={`${file.name}-${i}`}
                            className="flex items-center gap-2.5 rounded-lg border border-navy-900/10 bg-slate-50 px-3 py-2"
                          >
                            <FileText className="h-3.5 w-3.5 text-[#004ab7] shrink-0" />
                            <div className="min-w-0 flex-1 flex items-baseline gap-2">
                              <span className="text-xs text-navy-900 truncate">{file.name}</span>
                              <span className="text-[11px] text-slate-400 shrink-0">{formatSize(file.size)}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              aria-label={`Remove ${file.name}`}
                              data-cursor-hover
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
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