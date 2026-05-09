import ebook from "@/assets/ebook-mockup.png";
import { Sparkles, ShieldCheck, Users, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative bg-hero pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-glow">
            <Sparkles className="h-3.5 w-3.5" /> Método atualizado 2026
          </span>
          <h1 className="mt-5 font-black tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Pare de ser <span className="text-destructive">recusado</span>.<br />
            Reconquiste seu <span className="text-gradient">crédito</span> e sua <span className="text-gradient">liberdade</span>.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Descubra o passo a passo que já ajudou milhares de brasileiros a destravar o CPF, voltar a ter cartão aprovado e finalmente respirar sem medo do "negado".
          </p>

          <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
            <Badge icon={<Users className="h-4 w-4" />}>+12.000 alunos</Badge>
            <Badge icon={<ShieldCheck className="h-4 w-4" />}>Compra 100% segura</Badge>
            <Badge icon={<Sparkles className="h-4 w-4 text-warning" />}>4.9 ★ avaliação</Badge>
          </div>

          <a href="#dor" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-neon transition">
            <ArrowDown className="h-4 w-4 animate-bounce" /> Veja o que tem dentro
          </a>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-70">
            <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-accent/40" />
            <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-primary/40" />
          </div>
          <img
            src={ebook}
            alt="Ebook Guia Score Alto"
            width={1024}
            height={1536}
            className="relative w-[260px] sm:w-[340px] lg:w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float"
          />
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs sm:text-sm font-semibold text-foreground">
      {icon} {children}
    </span>
  );
}
