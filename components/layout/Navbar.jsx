"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/estimating-services", label: "Estimating" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) return; // throttle to one check per frame
    rafId.current = requestAnimationFrame(() => {
      setScrolled((prev) => {
        // hysteresis: different thresholds for entering vs exiting
        // stops the state flip-flopping when scrollY hovers near the edge
        if (prev) return window.scrollY > 16; // stay "scrolled" until below 16
        return window.scrollY > 32; // only become "scrolled" past 32
      });
      rafId.current = null;
    });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled
          ? "navbar-blur border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sigma Estimations home">
          <Logo className="h-10 w-10 sm:h-15 sm:w-36" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-500 hover:text-[#004AB7]
                  ${!active && !scrolled ? "text-slate-200" : ""}
                  ${active && !scrolled ? "text-[#C2C0C1]" : ""} 
                  
                  ${active && scrolled ? "text-[#001d49]" : ""
                  } ${!active && scrolled ? "text-[#001d49] " : ""
                  }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-4 right-4 -bottom-0.5 h-px bg-[#05408C]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18135550199"
            className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-white transition-colors"
          >
            <Phone className={`h-4 w-4 ${scrolled ? "text-[#004AB7]" : "text-white "
              }`} />
            <p className={`${scrolled ? "text-[#004AB7]" : "text-white "
              }`}>
              +1 (813) 555-0199
            </p>
          </a>
          <Button href="/contact" variant="primary" className="!py-3 !text-white !bg-[#004AB7] hover:!bg-[#05408C]">
            Get Free Estimate
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${
            scrolled?"text-black":"text-white"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden navbar-blur border-t border-white/10 mt-3"
          >
            <div className="container-px py-6 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-base font-medium border-b border-white/5 ${pathname === link.href ? "text-[#004ab7]" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-5 w-full justify-center !text-white !bg-[#004AB7] hover:!bg-[#05408C]">
                Get Free Estimate
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}