import { ShieldCheck } from "lucide-react";

export function Navbar() {
  const scrollToOferta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("oferta");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-black tracking-tight">
          <span className="grid place-items-center h-7 w-7 rounded-md bg-cta text-primary-foreground">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <span className="text-foreground">Score<span className="text-neon">Alto</span></span>
        </a>
        <a
          href="#oferta"
          onClick={scrollToOferta}
          className="text-xs sm:text-sm font-bold uppercase tracking-wide text-primary-foreground bg-cta px-4 py-2 rounded-lg shadow-cta hover:scale-[1.03] transition"
        >
          Garantir Acesso
        </a>
      </div>
    </header>
  );
}
