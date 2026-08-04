import Image from "next/image";

const sources = {
  color: "/New-logo.png",
  white: "/logo-mark-white.png",
};

export default function Logo({ className = "h-9 w-9", variant = "color" }) {
  return (
    <span className={`relative shrink-0 inline-block ${className}`}>
      <Image
        src={sources[variant] || sources.color}
        alt="Sigma Estimations logo"
        fill
        className="object-contain"
        sizes="200px"
        priority
      />
    </span>
  );
}