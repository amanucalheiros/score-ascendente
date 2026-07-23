import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("oferta");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md px-3 py-2.5 flex items-center gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Hoje por</span>
        <span className="text-lg font-black text-gradient">R$ 27,99</span>
      </div>
      <a
        href="#oferta"
        onClick={handleClick}
        className="ml-auto inline-flex items-center justify-center gap-1.5 rounded-lg bg-cta text-primary-foreground font-extrabold uppercase tracking-wide text-xs px-4 py-3 shadow-cta animate-pulse-neon"
      >
        Garantir acesso <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
