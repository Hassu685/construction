"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-14 border-b border-white/10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex justify-start gap-2.5 mb-4">
              <Logo className="h-28 w-16" variant="white" />
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-slate-300 hover:border-gold-500 hover:text-[#004ab7] transition-colors"
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
                  <Link href={href} className="text-slate-400 hover:text-[#004ab7] transition-colors">
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
                  <Link href={`/services#${s.slug}`} className="text-slate-400 hover:text-[#004ab7] transition-colors">
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
                <MapPin className="h-4 w-4 text-[#004ab7] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3 hover:text-[#004ab7]">
                <Mail className="h-4 w-4 text-[#004ab7] shrink-0 mt-0.5" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div>
            <p>
              Crafted by the Revamp 180° team.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-[#004ab7] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#004ab7] transition-colors mr-7">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
