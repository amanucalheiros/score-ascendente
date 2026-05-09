import { Search, TrendingDown, Wallet, Award, CreditCard, Calendar, FileCheck, Target } from "lucide-react";

const items = [
  { icon: Search, t: "Como consultar seu score CORRETAMENTE", d: "Sem cair em pegadinha de site falso ou consulta que derruba pontos." },
  { icon: TrendingDown, t: "O que está derrubando sua pontuação", d: "Os 7 erros silenciosos que travam seu CPF — e como apagar cada um." },
  { icon: Wallet, t: "Como organizar dívidas estrategicamente", d: "Renegociar de forma que conta para o sistema de crédito." },
  { icon: Award, t: "Como construir credibilidade financeira", d: "Mostrar ao banco que você é confiável — mesmo começando do zero." },
  { icon: CreditCard, t: "Uso correto do cartão de crédito", d: "A regra dos 30% e por que 90% das pessoas usa errado." },
  { icon: Calendar, t: "Hábitos que aumentam a análise", d: "Pequenas atitudes diárias que o sistema enxerga e premia." },
  { icon: FileCheck, t: "Como pedir crédito sem ser recusado", d: "A ordem certa, o banco certo, na hora certa." },
  { icon: Target, t: "Plano de 90 dias para destravar tudo", d: "Cronograma simples, semana a semana, até a virada." },
];

export function Learn() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-neon">O que você vai aprender</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            Tudo que ninguém te ensinou sobre <span className="text-gradient">crédito</span>.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card-grad border border-border rounded-2xl p-5 hover:border-primary/40 hover:-translate-y-1 transition">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/15 text-neon mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-foreground leading-tight">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
