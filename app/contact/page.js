import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with BuildNova Estimating & Construction for a free construction estimate or quantity takeoff quote.",
};

const quickActions = [
  { icon: Phone, label: "Call Us", value: "+1 (813) 555-0199", href: "tel:+18135550199" },
  { icon: Mail, label: "Email Us", value: "estimates@buildnova-estimating.com", href: "mailto:estimates@buildnova-estimating.com" },
  { icon: MessageCircle, label: "Live Chat", value: "Available during business hours", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your next project."
        description="Whether you need a full estimate or just a quick question answered, our team responds within one business day."
        sliderImages={[
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
            alt: "Modern office building exterior",
          },
          {
            src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1400&auto=format&fit=crop",
            alt: "Office reception and workspace",
          },
          {
            src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop",
            alt: "Team collaborating in a meeting room",
          },
        ]}
      />

      <section className="bg-navy-950 py-14">
        <div className="container-px grid sm:grid-cols-3 gap-5">
          {quickActions.map((action, i) => (
            <Reveal key={action.label} delay={i * 0.08}>
              <a
                href={action.href}
                className="flex items-center gap-4 rounded-2xl glass p-6 hover:border-gold-500/40 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
                  <action.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-slate-400">{action.label}</div>
                  <div className="text-sm text-white font-medium mt-0.5">{action.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
