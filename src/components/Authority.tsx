import mariana from "@/assets/mariana-paiva.png";
import { Award, Users, BookOpen, BadgeCheck } from "lucide-react";

export function Authority() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[auto_1fr] gap-12 items-center">
        <div className="relative animate-fade-up flex justify-center lg:justify-start">
          <div className="absolute -inset-6 -z-10 blur-3xl bg-primary/30 rounded-full" />
          <div className="relative">
            <img
              src={mariana}
              alt="Mariana Paiva"
              loading="lazy"
              width={320}
              height={320}
              className="h-64 w-64 sm:h-72 sm:w-72 rounded-full object-cover border-4 border-primary/40 shadow-neon"
            />
            <div className="absolute -bottom-2 -right-2 bg-cta text-primary-foreground rounded-full px-3 py-1.5 text-xs font-black flex items-center gap-1 shadow-cta">
              <BadgeCheck className="h-4 w-4" /> Especialista
            </div>
          </div>
        </div>
        <div className="animate-fade-up text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-glow">Quem está por trás</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl">
            <span className="text-gradient">Mariana Paiva</span>
          </h2>
          <p className="mt-2 text-sm font-semibold text-neon uppercase tracking-wide">
            Especialista em educação financeira e análise de crédito
          </p>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Mais de 7 anos atuando com educação financeira e análise de crédito. O método deste guia foi
            testado e refinado com milhares de alunos reais — pessoas comuns, com nomes sujos, sem cartão,
            sem esperança. E que hoje têm crédito aprovado.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <Stat icon={<Users />} n="+12k" l="alunos" />
            <Stat icon={<Award />} n="4.9★" l="avaliação" />
            <Stat icon={<BookOpen />} n="7 anos" l="de método" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, n, l }: { icon: React.ReactNode; n: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card-grad p-4 text-center">
      <div className="text-neon flex justify-center mb-1">{icon}</div>
      <div className="font-black text-xl text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide">{l}</div>
    </div>
  );
}
