import Reveal from "@/components/ui/Reveal";
import {
    FileCheck2,
    Globe,
    AlertTriangle,
    UserCheck,
    Copyright,
    ShieldAlert,
    Link2,
    Scale,
    RefreshCw,
    Mail,
    Info,
} from "lucide-react";

export const metadata = {
    title: "Terms of Service",
    description: "The terms and conditions governing your use of the Sigma Estimations website and services.",
};

const sections = [
    {
        id: "acceptance",
        icon: FileCheck2,
        heading: "Acceptance of Terms",
        body: [
            "By accessing or using the Sigma Estimations website, or by requesting or receiving our estimating services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
        ],
    },
    {
        id: "use-of-website",
        icon: Globe,
        heading: "Use of Our Website",
        body: [
            "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party. You may not attempt to gain unauthorized access to any part of our systems.",
            "All content on this website, including text, graphics, logos, and design, is the property of Sigma Estimations or its licensors and may not be reproduced or distributed without prior written consent.",
        ],
    },
    {
        id: "estimates-disclaimer",
        icon: AlertTriangle,
        heading: "Estimates & Deliverables Disclaimer",
        body: [
            "Estimates, quantity takeoffs, and reports provided by Sigma Estimations are professional opinions of probable cost and quantity based on the drawings, specifications, and information available at the time of preparation. They do not constitute a guarantee of final construction cost, and actual costs may vary due to market conditions, scope changes, site conditions, or other factors beyond our control.",
            "Our deliverables are intended to support your bidding, budgeting, and planning process and should be independently verified before being relied upon for contractual or financial commitments.",
        ],
    },
    {
        id: "client-responsibilities",
        icon: UserCheck,
        heading: "Client Responsibilities",
        body: [
            "You are responsible for providing accurate, complete, and current drawings and project information. Sigma Estimations is not responsible for inaccuracies in an estimate that result from incomplete, outdated, or incorrect information provided by the client.",
        ],
    },
    {
        id: "intellectual-property",
        icon: Copyright,
        heading: "Intellectual Property",
        body: [
            "Any takeoffs, estimates, or reports we prepare remain our work product until full payment has been received for the applicable engagement, after which usage rights are granted to the client for the purposes of the associated project.",
        ],
    },
    {
        id: "limitation-of-liability",
        icon: ShieldAlert,
        heading: "Limitation of Liability",
        body: [
            "To the fullest extent permitted by law, Sigma Estimations shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services, including but not limited to lost profits or project delays, except where such liability cannot be excluded by law.",
        ],
    },
    {
        id: "third-party-links",
        icon: Link2,
        heading: "Third-Party Links",
        body: [
            "Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked third-party sites.",
        ],
    },
    {
        id: "governing-law",
        icon: Scale,
        heading: "Governing Law",
        body: [
            "These Terms of Service are governed by and construed in accordance with the laws of the State of Florida, USA, without regard to its conflict of law principles, unless otherwise required by local regulations applicable to your project location.",
        ],
    },
    {
        id: "changes",
        icon: RefreshCw,
        heading: "Changes to These Terms",
        body: [
            "We may revise these Terms of Service at any time. Updates will be posted on this page with a revised effective date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.",
        ],
    },
    {
        id: "contact",
        icon: Mail,
        heading: "Contact Us",
        body: [
            "If you have any questions about these Terms of Service, please contact us at estimates@sigmaestimations.com.",
        ],
    },
];

export default function TermsOfServicePage() {
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
                            Terms of Service
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
                                        <span className="font-semibold">In short:</span> our estimates are professional
                                        opinions of probable cost, not guarantees — accuracy depends on the drawings you
                                        provide, and final costs can vary. Full details below.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.04}>
                                <p className="text-slate-600 leading-relaxed mb-12">
                                    These Terms of Service govern your access to and use of the Sigma Estimations
                                    website and estimating services. Please read them carefully before using our
                                    website or engaging our services.
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