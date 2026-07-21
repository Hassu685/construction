"use client";

import { useEffect, useRef, useState } from "react";
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
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 80) {
                setHidden(false);
            } else if (currentScrollY > lastScrollY.current) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 py-1 border-b border-white/10 bg-white shadow-sm"
        >
            <div className="container-px flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 group" aria-label="Sigma Estimations home">
                    <Logo className="h-14 w-14 sm:h-16 sm:w-16" variant="color" />
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {links.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-500 hover:text-[#004AB7] text-[#001d49]`}
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
                        className="flex items-center gap-2 text-sm font-medium text-[#004AB7] hover:text-[#05408C] transition-colors"
                    >
                        <Phone className="h-4 w-4 text-[#004AB7]" />
                        <p>+1 (813) 555-0199</p>
                    </a>
                    <Button href="/contact" variant="primary" className="!py-3 !text-white !bg-[#004AB7] hover:!bg-[#05408C]">
                        Get Free Estimate
                    </Button>
                </div>

                <button
                    className="lg:hidden p-2 text-black"
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
                        className="lg:hidden overflow-hidden bg-white border-t border-black/5 mt-3"
                    >
                        <div className="container-px py-6 flex flex-col gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`py-3 text-base font-medium border-b border-black/5 text-[#001d49] ${pathname === link.href ? "text-[#004ab7]" : ""
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
        </motion.header >
    );
}