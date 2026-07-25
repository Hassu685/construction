import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icons";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTABand from "@/components/sections/CTABand";
import Image from "next/image";
import { serviceImages } from "@/lib/data";

export async function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: service.title,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const Icon = getIcon(service.icon);
    const related = services.filter((s) => s.slug !== slug).slice(0, 3);

    return (
        <>
            <section className="relative bg-navy-950 h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={serviceImages[service.slug]}
                        alt={service.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/80 to-navy-950" />
                <div className="absolute inset-0 bg-blueprint opacity-20" />

                <div className="container-px relative max-w-3xl">
                    <Reveal>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#4C86EA] transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Services
                        </Link>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#004ab7] text-white mb-6">
                            <Icon className="h-6 w-6" strokeWidth={1.8} />
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="font-display font-semibold text-white text-4xl sm:text-5xl leading-[1.15] tracking-tight">
                            {service.title}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <div className="mt-5 flex items-center gap-2 text-sm">
                            <Link href="/" className="text-white hover:text-[#4C86EA] transition-colors font-medium">
                                Home
                            </Link>
                            <span className="text-slate-500">/</span>
                            <span className="text-[#4C86EA] font-medium">{service.title}</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.22}>
                        <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                            {service.description}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-surface py-20 lg:py-28">
                <div className="container-px grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <Reveal>
                            <h2 className="font-display text-2xl font-semibold text-navy-900 mb-6">What's Included</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-start gap-3 rounded-xl bg-white border border-navy-900/8 p-4"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-[#004ab7] shrink-0 mt-0.5" />
                                        <span className="text-sm text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <Reveal direction="left">
                        <div className="rounded-2xl bg-navy-900 p-7 sticky top-28">
                            <h3 className="font-display text-white font-semibold mb-3">Ready to get started?</h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Send us your drawing set and get a detailed {service.title.toLowerCase()} estimate,
                                most projects delivered within 72 hours.
                            </p>
                            <Button href="/contact" variant="primary" className="w-full justify-center text-white">
                                Get Free Estimate
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-navy-950 py-20 lg:py-28">
                <div className="container-px">
                    <h2 className="font-display text-2xl font-semibold text-white mb-10">Other Services</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {related.map((s) => {
                            const RelatedIcon = getIcon(s.icon);
                            return (
                                <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-[#004ab7]/40 transition-colors duration-500"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-[#4C86EA] group-hover:bg-[#004ab7] group-hover:text-white transition-colors duration-300">
                                        <RelatedIcon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="font-display text-white font-semibold mt-5">{s.title}</h3>
                                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{s.short}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    );
}