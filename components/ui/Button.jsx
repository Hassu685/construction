import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary:
    "bg-gold-500 text-navy-900 hover:bg-gold-400 shadow-gold hover:shadow-gold-hover",
  outline:
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm",
  outlineDark:
    "border border-navy-900/15 text-navy-900 hover:bg-navy-900 hover:text-white",
  ghost: "text-navy-900 hover:text-gold-600",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
  onClick,
  type = "button",
  ...props
}) {
  const classes = `group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-out ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
