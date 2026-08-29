"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import { Menu, X, Compass, Phone } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  const Links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/faq", label: "FAQ" },
  ];
  const cartCount = 2;

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY.current;
      const scrolledEnough = Math.abs(currentScrollY - lastScrollY.current) > 5;

      if (scrolledEnough) {
        // Always show near the top of the page
        if (currentScrollY < 80) {
          setVisible(true);
        } else if (scrolledDown) {
          setVisible(false);
          setMobileOpen(false); // close mobile menu if it's open while scrolling away
        } else {
          setVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (label) => {
    setActive(label);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center py-3 sm:py-4 px-3 sm:px-4 bg-transparent z-50 transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-[130%]"
        }`}
    >
      <div className="relative flex items-center w-full max-w-6xl py-2 rounded-full bg-white shadow-md shadow-black/5 overflow-hidden">
        {/* Amber/gold shape matching the CTA button, with accurate wave curve via SVG */}
        <div className="absolute left-0 top-0 h-full w-[160px] sm:w-[190px] lg:w-[230px]">
          <svg
            viewBox="0 0 230 64"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0,0 H210 C185,0 195,22 215,32 C195,42 185,64 210,64 H0 Z"
              fill="#F5A623"
            />
          </svg>

          {/* Logo content on top of the shape */}
          <div className="relative z-10 flex items-center gap-2 sm:gap-3 h-full pl-4 sm:pl-6 pr-6 sm:pr-8">
            <div className="leading-tight whitespace-nowrap bg-black!">
              <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
                <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md bg-black text-gold-500">
                  <Compass className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.4} />
                </span>
                <span className="font-display text-base sm:text-lg font-semibold text-white tracking-tight">
                  Build<span className="text-black">Nova</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Spacer to push nav links / actions past the shape */}
        <div className="w-[160px] sm:w-[190px] lg:w-[230px] shrink-0" />

        {/* Divider (desktop only) */}
        <span className="hidden lg:block h-8 w-px bg-slate-200 mx-6" />

        {/* Nav links (desktop only) */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`relative text-sm font-medium transition-colors ${active === link.label
                  ? "text-black"
                  : "text-slate-700 hover:text-black"
                }`}
            >
              {link.label}
              {active === link.label && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-4 rounded-full bg-black" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA button (desktop only) */}
        <div className="hidden lg:flex items-center pr-2">
          <Button href="/contact" variant="primary">
            Free Quote Now
          </Button>
        </div>

        {/* Mobile: spacer + hamburger toggle */}
        <div className="flex lg:hidden items-center justify-end flex-1 pr-3 sm:pr-4">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full px-3 sm:px-4 transition-all duration-300 ease-in-out ${mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="mt-2 w-full max-w-6xl mx-auto rounded-3xl bg-white shadow-md shadow-black/5 p-4 flex flex-col gap-1">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${active === link.label
                  ? "bg-slate-100 text-black"
                  : "text-slate-700 hover:bg-slate-50 hover:text-black"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-slate-100">
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Free Quote Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}