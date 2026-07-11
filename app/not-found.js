import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden pt-24">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="relative container-px text-center max-w-lg">
        <div className="inline-flex mb-8">
          <Logo className="h-16 w-16" />
        </div>
        <div className="eyebrow text-[#004ab7] mb-4">Error 404</div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">
          This page hasn't been surveyed yet.
        </h1>
        <p className="text-slate-400 mt-4 text-sm sm:text-base">
          The page you're looking for may have moved or no longer exists.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
