import Image from "next/image";

export default function Logo({ className = "h-9 w-9" }) {
  return (
    <span className={`relative shrink-0 inline-block ${className}`}>
      <Image
        src="/logo-mark.jpeg"
        alt="Sigma Estimations logo"
        fill
        className="object-contain"
        sizes="64px"
        priority
      />
    </span>
  );
}
