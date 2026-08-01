import Reveal from "@/components/ui/Reveal";
import {
    Database,
    Settings2,
    Cookie,
    Share2,
    ShieldCheck,
    UserCheck,
    Baby,
    RefreshCw,
    Mail,
    Info,
} from "lucide-react";

export const metadata = {
    title: "Privacy Policy",
    description: "How Sigma Estimations collects, uses and protects your information.",
};

const sections = [
    {
        id: "information-we-collect",
        icon: Database,
        heading: "Information We Collect",
        body: [
            "When you request an estimate, contact us, or use our website, we may collect information you provide directly, including your name, email address, phone number, company name, project address, and details about your project such as drawings, quantities, or scope of work.",
            "We may also automatically collect certain technical information when you visit our site, such as your IP address, browser type, device information, pages viewed, and the date and time of your visit, through standard web server logs and analytics tools.",
        ],
    },
    {
        id: "how-we-use",
        icon: Settings2,
        heading: "How We Use Your Information",
        body: [
            "We use the information we collect to prepare and deliver construction estimates and quantity takeoffs, respond to inquiries, communicate with you about your project, improve our website and services, and comply with legal obligations.",
            "We do not sell your personal information to third parties. Project drawings and specifications you share with us are used solely to prepare your estimate and are treated as confidential.",
        ],
    },
    {
        id: "cookies",
        icon: Cookie,
        heading: "Cookies & Tracking",
        body: [
            "Our website may use cookies and similar technologies to remember your preferences, understand how visitors use our site, and improve overall performance. You can disable cookies through your browser settings, though some features of the site may not function properly without them.",
        ],
    },
    {
        id: "how-we-share",
        icon: Share2,
        heading: "How We Share Information",
        body: [
            "We may share information with trusted service providers who help us operate our business, such as email delivery, hosting, and analytics providers, under obligations to keep it confidential. We may also disclose information if required by law or to protect our legal rights.",
            "We do not share your project drawings, quantities, or estimate details with any third party for marketing or unrelated business purposes.",
        ],
    },
    {
        id: "data-security",
        icon: ShieldCheck,
        heading: "Data Security",
        body: [
            "We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
        ],
    },
    {
        id: "your-rights",
        icon: UserCheck,
        heading: "Your Rights",
        body: [
            "Depending on your location, you may have the right to request access to, correction of, or deletion of the personal information we hold about you. To make such a request, please contact us using the details below and we will respond within a reasonable timeframe.",
        ],
    },
    {
        id: "childrens-privacy",
        icon: Baby,
        heading: "Children's Privacy",
        body: [
            "Our website and services are intended for business use and are not directed at children under the age of 16. We do not knowingly collect personal information from children.",
        ],
    },
    {
        id: "changes",
        icon: RefreshCw,
        heading: "Changes to This Policy",
        body: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any updates will be posted on this page with a revised effective date.",
        ],
    },
    {
        id: "contact",
        icon: Mail,
        heading: "Contact Us",
        body: [
            "If you have any questions about this Privacy Policy or how we handle your information, please contact us at estimates@sigmaestimations.com.",
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <section className="relative bg-navy-950 pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-blueprint opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/70 to-navy-950" />
                <div className="absolute top-1/3 right-[10%] h-56 w-56 rounded-full bg-[#004ab7]/10 blur-3xl pointer-events-none" />
                <div className="container-px relative max-w-3xl">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-5">
                            <span className="h-px w-8 bg-[#004ab7]" />
                            <span className="eyebrow text-[#004AB7]">Legal</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl leading-[1.18] tracking-tight">
                            Privacy Policy
                        </h1>
                    </Reveal>
                    <Reveal delay={0.14}>
                        <p className="mt-5 text-slate-300 text-base leading-relaxed">
                            Last updated: August 2, 2026
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="relative bg-surface py-20 lg:py-24 bg-dot-grid-light">
                <div className="container-px">
                    <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
                        {/* Sidebar table of contents */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-28">
                                <div className="text-xs font-semibold tracking-wide text-slate-400 uppercase mb-4">
                                    On this page
                                </div>
                                <nav className="flex flex-col gap-1 border-l border-navy-900/10">
                                    {sections.map((section, i) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            data-cursor-hover
                                            className="group flex items-center gap-3 -ml-px pl-4 py-2 border-l-2 border-transparent hover:border-[#004ab7] transition-colors duration-300"
                                        >
                                            <span className="tick-number text-[11px] text-slate-400 group-hover:text-[#004ab7] transition-colors duration-300">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm text-slate-600 group-hover:text-navy-900 transition-colors duration-300">
                                                {section.heading}
                                            </span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <div>
                            <Reveal>
                                <div className="flex items-start gap-3 rounded-2xl bg-[#EEF3FE] border border-[#004ab7]/15 px-5 py-4 mb-14">
                                    <Info className="h-4 w-4 text-[#004ab7] shrink-0 mt-0.5" />
                                    <p className="text-sm text-navy-900 leading-relaxed">
                                        <span className="font-semibold">In short:</span> we collect only what's needed
                                        to prepare your estimate and run our business, we never sell your data, and your
                                        project drawings stay confidential. Full details below.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.04}>
                                <p className="text-slate-600 leading-relaxed mb-12">
                                    Sigma Estimations ("we," "us," or "our") respects your privacy and is committed to
                                    protecting the personal information you share with us. This Privacy Policy explains
                                    what information we collect, how we use it, and the choices you have.
                                </p>
                            </Reveal>

                            <div className="flex flex-col gap-6">
                                {sections.map((section, i) => {
                                    const Icon = section.icon;
                                    return (
                                        <Reveal key={section.id} delay={Math.min(i * 0.03, 0.2)}>
                                            <div
                                                id={section.id}
                                                className="scroll-mt-28 rounded-2xl bg-white border border-navy-900/8 p-6 sm:p-8"
                                            >
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-[#4C86EA]">
                                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="tick-number text-xs text-[#004ab7]/60">
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>
                                                        <h2 className="font-display text-lg sm:text-xl font-semibold text-navy-900">
                                                            {section.heading}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4 sm:pl-[60px]">
                                                    {section.body.map((para, j) => (
                                                        <p key={j} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                                            {para}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}