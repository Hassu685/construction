"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const heroSlides = [
    { image: "/sample-headings/Sample Estimates & Takeoffs 1.webp", label: "Remodel Estimate" },
    { image: "/sample-headings/Sample Estimates & Takeoffs 2.webp", label: "Xactimate Report" },
    { image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1200&q=80", label: "Concrete Takeoff" },
    { image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1200&q=80", label: "Masonry Estimate" },
];

function HeroSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (i) => setIndex(i);
    const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
    const next = () => setIndex((i) => (i + 1) % heroSlides.length);

    return (
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden hidden lg:flex">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    <Image
                        src={heroSlides[index].image}
                        alt={heroSlides[index].label}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001d49]/70 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {heroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Show slide ${i + 1}`}
                        data-cursor-hover
                        className="relative h-1.5 rounded-full bg-white/30 overflow-hidden transition-all duration-500"
                        style={{ width: i === index ? 28 : 6 }}
                    >
                        {i === index && (
                            <motion.span
                                layoutId="slider-dot"
                                className="absolute inset-0 bg-[#004ab7] rounded-full"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

// NOTE: file paths below mirror the EXACT folder + file structure from your
// uploaded "Samples" zip (Samples/<FOLDER>/<file>). Just copy the whole
// "Samples" folder into /public/ and rename it to "samples" (lowercase) —
// the links below will then work as-is, no renaming of files needed.
const samples = [
    {
        title: "Concrete",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80",
        file: "/samples/CONCRETE/ESTIMATE - STORAGE BUILDING AT GADSDEN CITY HS ATHLETIC FIELDS -V1.xlsx",
    },
    {
        title: "Drywall & Studs",
        image: "/Samples-pic/DRYWALL & STUDS.webp",
        file: "/samples/DRYWALL, STUDS/ESTIMATE - MAVIS TIRES & BRAKES -V1.xlsx",
    },
    {
        title: "Earthworks",
        image: "/Samples-pic/EARTHWORKS.webp",
        file: "/samples/EARTHWORKS/HOWARD KNOB GRADING (Earthworks Estimation).pdf",
    },
    {
        title: "Electrical",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
        file: "/samples/ELECTRICAL/ESTIMATE - RAVI PATEL CONVENIENCE STORE -V1.xlsx",
    },
    {
        title: "Finishes",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        file: "/samples/FINISHES/ESTIMATE - NEW CUSTOM HOME -V1.xlsx",
    },
    {
        title: "Fireproofing",
        image: "/Samples-pic/Fireprofing.webp",
        file: "/samples/FIREPROOFING/ESTIMATE - RICKENBACKER ARC FULL FACILITY RENOVATION -V1.xlsx",
    },
    {
        title: "General Contractor",
        image: "/Samples-pic/General contracting.webp",
        file: "/samples/GENERAL CONTRACTOR (GC)/ESTIMATE - TENANT IMPROVEMENT FOR MARINATED MASALA MEATS -V1.xlsx",
    },
    {
        title: "Lumber Framing",
        image: "/Samples-pic/Lumber framing.webp",
        file: "/samples/LUMBER FRAMING/ESTIMATE - A NEW SINGLE FAMILY HOME -V1.xlsx",
    },
    {
        title: "Mechanical (HVAC)",
        image: "/Samples-pic/Mechinical (HVAC).webp",
        file: "/samples/MECHANICAL (HVAC)/ESTIMATE - AMAZING EXPLORERS YULEE -V1.xlsx",
    },
    {
        title: "Painting",
        image: "/Samples-pic/Painting.webp",
        file: "/samples/PAINTING/ESTIMATE - DAVID T. CARDENAS SENIOR CENTER & POLICE HEADQUARTERS.xlsx",
    },
    {
        title: "Plumbing",
        image: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?w=800&q=80",
        file: "/samples/PLUMBING/ESTIMATE - MERCED CONVENIENCE STORE -V1.xlsx",
    },
    {
        title: "Roofing",
        image: "https://images.unsplash.com/photo-1635424824800-692767998d07?w=800&q=80",
        file: "/samples/ROOFING/ESTIMATE - ALTUS PUBLIC SCHOOLS L. MENDEL RIVERS ELEMENTARY -V1.xlsx",
    },
    {
        title: "Structure",
        image: "/Samples-pic/Structure.webp",
        file: "/samples/STRUCTURE/ESTIMATE - OC BITHLO COMMUNITY PARK FITNESS CENTER EXPANSION -V1.xlsx",
    },
    {
        title: "Renovation",
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800&q=80",
        file: "/samples/structures/ESTIMATE- HOWARD KNOB -V1.xlsx",
    },
];

export default function SamplesPage() {
    return (
        <>
            {/* Page header — matches Home hero style */}
            <section className="relative bg-navy-950 overflow-hidden h-screen flex items-center justify-center lg:pt-12">
                <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
                <div className="relative container-px grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[#004AB7] mb-4">
                            <span>ESTIMATING</span>
                            <span className="h-px w-5 sm:w-8 bg-[#004AB7]" />
                            <span>TAKEOFF</span>
                            <span className="h-px w-5 sm:w-8 bg-[#004AB7]" />
                            <span>CONSTRUCTION</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
                            Sample <span className="text-[#004AB7]">Estimates</span> &amp; Takeoffs
                        </h1>
                        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                            Download real, code-compliant sample reports across our core trades —
                            see the level of detail your project team can expect on bid day.
                        </p>
                    </div>

                    <HeroSlider />
                </div>
            </section>

            {/* Sample cards grid */}
            <section className="relative bg-white py-20">
                <div className="absolute inset-0 bg-blueprint opacity-[0.15] pointer-events-none" />
                <div className="relative container-px">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
                        {samples.map((sample, i) => (
                            <motion.div
                                key={sample.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="group"
                            >
                                <a
                                    href={encodeURI(sample.file)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor-hover
                                    className="relative inline-block w-full text-center mb-4"
                                >
                                    <h3 className="relative inline-block text-xl sm:text-2xl font-bold text-[#001d49] tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#004AB7] after:transition-all after:duration-300 hover:after:w-full">
                                        {sample.title.toUpperCase()}
                                    </h3>
                                </a>

                                <a
                                    href={encodeURI(sample.file)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor-hover
                                    className="group/img relative block aspect-[4/3] rounded-xl overflow-hidden border border-black/5 shadow-sm"
                                >
                                    <Image
                                        src={sample.image}
                                        alt={`${sample.title} estimate sample`}
                                        fill
                                        sizes="(max-width: 640px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#004AB7]/0 group-hover/img:bg-[#004AB7]/75 transition-colors duration-500 flex items-center justify-center">
                                        <span className="opacity-0 translate-y-3 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-500 flex items-center gap-2 rounded-full bg-white text-[#001d49] px-5 py-2.5 text-xs font-semibold">
                                            <Eye className="h-3.5 w-3.5" />
                                            View File
                                        </span>
                                    </div>
                                </a>

                                <a
                                    href={encodeURI(sample.file)}
                                    target="_blank"
                                    data-cursor-hover
                                    className="group mt-4 w-full inline-flex justify-center items-center gap-2 rounded-md bg-[#0b1220] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#001d49] transition-colors duration-300"
                                >
                                    <span className="relative h-3.5 w-3.5 overflow-hidden">
                                        <FileText className="h-3.5 w-3.5 absolute inset-0 transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0" />
                                        <Download className="h-3.5 w-3.5 absolute inset-0 transition-all duration-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" />
                                    </span>
                                    Download Sample
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}