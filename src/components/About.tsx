import ebook from "@/assets/ebook-mockup.png";
import { Zap, BookOpen, Smartphone } from "lucide-react";

export function About() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-primary/40" />
          </div>
          <img src={ebook} alt="Guia Score Alto" loading="lazy" width={1024} height={1536} className="mx-auto w-[260px] sm:w-[340px] animate-float" />
        </div>

        <div className="order-1 lg:order-2 animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-neon">A solução</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Guia Score Alto</span>: o caminho direto.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Um guia prático, direto e sem enrolação. Em poucas horas você entende exatamente o que faz um banco te aprovar
            — e aplica passo a passo, mesmo que você não saiba nada de finanças.
          </p>

          <ul className="mt-8 space-y-4">
            <Item icon={<Zap />} t="Aplicável imediatamente" d="Você lê hoje e já começa a colocar em prática amanhã." />
            <Item icon={<BookOpen />} t="Linguagem simples" d="Sem palavra difícil, sem economês. Direto ao ponto." />
            <Item icon={<Smartphone />} t="Acesso vitalício" d="Leia no celular, tablet ou computador. Onde e quando quiser." />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Item({ icon, t, d }: { icon: React.ReactNode; t: string; d: string }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 h-10 w-10 grid place-items-center rounded-lg bg-primary/15 text-neon">{icon}</div>
      <div>
        <h3 className="font-extrabold text-foreground">{t}</h3>
        <p className="text-sm text-muted-foreground">{d}</p>
      </div>
    </li>
  );
}
