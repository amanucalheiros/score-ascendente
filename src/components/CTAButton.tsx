import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CHECKOUT_URL = "https://pay.kiwify.com.br/faPTikX";

type Props = {
  size?: "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  pulse?: boolean;
  /** If provided, scrolls smoothly to this element id instead of opening checkout */
  scrollTo?: string;
};

export function CTAButton({
  size = "lg",
  fullWidth = true,
  className,
  children = "QUERO MELHORAR MEU SCORE AGORA",
  pulse = true,
  scrollTo,
}: Props) {
  const sizing = size === "xl" ? "px-8 py-6 text-base sm:text-lg" : "px-6 py-5 text-sm sm:text-base";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!scrollTo) return;
    e.preventDefault();
    const el = document.getElementById(scrollTo);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const href = scrollTo ? `#${scrollTo}` : CHECKOUT_URL;
  const targetProps = scrollTo ? {} : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <a
      href={href}
      onClick={handleScroll}
      {...targetProps}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-cta text-primary-foreground font-extrabold uppercase tracking-wide shadow-cta transition-all hover:scale-[1.02] hover:shadow-neon",
        sizing,
        fullWidth && "w-full sm:w-auto",
        pulse && "animate-pulse-neon",
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
      <span className="relative z-10 text-center leading-tight">{children}</span>
      <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
