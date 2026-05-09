import specialist from "@/assets/specialist.jpg";
import { Award, Users, BookOpen } from "lucide-react";

export function Authority() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 -z-10 blur-3xl bg-accent/30 rounded-full" />
          <img src={specialist} alt="Especialista" loading="lazy" width={768} height={768} className="rounded-3xl border border-border shadow-2xl w-full max-w-md mx-auto" />
        </div>
        <div className="animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-glow">Quem está por trás</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl">
            Material criado por quem <span className="text-gradient">vive disso</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Mais de 7 anos atuando com educação financeira e análise de crédito. O método deste guia foi
            testado e refinado com milhares de alunos reais — pessoas comuns, com nomes sujos, sem cartão,
            sem esperança. E que hoje têm crédito aprovado.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
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
