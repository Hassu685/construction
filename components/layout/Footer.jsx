"use client";

import Link from "next/link";
import { useState } from "react";
import { Compass, Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { siteConfig, services } from "@/lib/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-navy-950 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />

      <div className="relative container-px pt-20 pb-10">
        {/* Newsletter */}
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-lg">
            <span className="eyebrow text-gold-400">Stay Informed</span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mt-3">
              Get estimating insights delivered monthly.
            </h3>
            <p className="text-slate-400 mt-2 text-sm">
              Market pricing trends, code updates and project stories — no spam, unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full sm:w-72 rounded-full bg-white/5 border border-white/15 px-5 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-gold-500 outline-none transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-gold-500 text-navy-900 px-6 py-3.5 text-sm font-semibold hover:bg-gold-400 transition-colors whitespace-nowrap"
            >
              {submitted ? "Subscribed" : "Subscribe"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-500 text-navy-900">
                <Compass className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Build<span className="text-gold-400">Nova</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">{siteConfig.description}</p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin },
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Twitter, href: siteConfig.social.twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 hover:border-gold-500 hover:text-gold-400 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Testimonials", "/testimonials"],
                ["FAQ", "/faq"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-slate-400 hover:text-gold-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
