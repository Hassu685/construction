"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/samples", label: "Samples" },
    { href: "/services", label: "Services" },
    { href: "/estimating-services", label: "Estimating" }
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
            className="fixed top-2 left-0 right-0 z-50 py-3 sm:py-4"
        >
            <div className="container-px">
                <div className="mx-auto max-w-7xl rounded-full bg-white/50 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/40 pl-4 pr-2 sm:pl-6 sm:pr-3 overflow-visible">
                    <div className="flex items-center justify-between h-14 sm:h-16">
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Sigma Estimations home">
                            <Logo className="h-20 w-20 sm:h-24 sm:w-24" variant="color" />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-4 py-2 text-[16px] font-medium transition-colors duration-500 hover:text-[#004AB7] text-[#001d49]`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center gap-4">
                            <Button href="/contact" variant="primary" className="!py-2.5 !rounded-full !text-white !bg-[#004AB7] hover:!bg-[#05408C]">
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
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:hidden overflow-hidden bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] mt-3"
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
            </div>
        </motion.header>
    );
}