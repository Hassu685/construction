"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { siteConfig, services } from "@/lib/data";


const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.02 2.667c-7.363 0-13.353 5.99-13.353 13.353 0 2.354.615 4.65 1.782 6.671L2.667 29.333l6.79-1.78a13.29 13.29 0 0 0 6.56 1.72h.006c7.362 0 13.353-5.99 13.353-13.353 0-3.567-1.389-6.92-3.91-9.44a13.26 13.26 0 0 0-9.44-3.913Zm0 24.42h-.005a11.08 11.08 0 0 1-5.65-1.548l-.405-.24-4.03 1.057 1.076-3.928-.264-.404a11.05 11.05 0 0 1-1.694-5.905c0-6.11 4.972-11.08 11.078-11.08a11 11 0 0 1 7.834 3.248 11 11 0 0 1 3.24 7.837c0 6.11-4.972 11.078-11.08 11.078v-.115Zm6.077-8.294c-.333-.167-1.97-.972-2.276-1.083-.305-.111-.527-.167-.75.167-.222.333-.86 1.083-1.054 1.305-.194.222-.389.25-.722.083-.333-.167-1.406-.518-2.678-1.652-.99-.883-1.658-1.973-1.852-2.306-.194-.334-.02-.514.146-.68.15-.15.334-.389.5-.583.167-.195.222-.334.333-.556.111-.223.056-.417-.028-.584-.083-.166-.75-1.805-1.027-2.472-.27-.65-.545-.562-.75-.573l-.639-.011c-.222 0-.583.083-.888.417-.306.333-1.166 1.14-1.166 2.778s1.194 3.222 1.36 3.444c.166.223 2.35 3.588 5.694 5.03.795.344 1.415.55 1.899.703.798.254 1.523.218 2.098.132.64-.095 1.97-.805 2.247-1.583.278-.778.278-1.445.194-1.584-.083-.14-.305-.222-.638-.389Z" />
  </svg>
);

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
                { icon: WhatsAppIcon, href: siteConfig.social.whatsApp },
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
                ["Samples", "/samples"],
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
                  <Link href={`/services/${s.slug}`} className="text-slate-400 hover:text-[#004ab7] transition-colors">
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#004ab7] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div>
            <p className="flex">
              Crafted by the <a className="hover:text-[#004ab7] flex px-1"
                href="https://revamp180.com/"
                target="_blank">Revamp 180°</a> team.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#004ab7] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#004ab7] transition-colors mr-7">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
