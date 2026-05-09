import { Heart, Smile, Home, TrendingUp, Shield, Sparkles } from "lucide-react";

const benefits = [
  { icon: Heart, t: "Voltar a ter esperança", d: "A sensação de que sim, é possível sair desse buraco." },
  { icon: Shield, t: "Dormir tranquilo", d: "Sem ansiedade, sem medo da próxima cobrança." },
  { icon: Smile, t: "Recuperar autoestima", d: "Pedir cartão, financiamento, e ouvir 'aprovado'." },
  { icon: Home, t: "Conquistar o que parou", d: "A casa, o carro, a viagem que você adiou." },
  { icon: TrendingUp, t: "Sentir controle", d: "Você na direção da sua vida financeira — não o contrário." },
  { icon: Sparkles, t: "Nova relação com dinheiro", d: "Sem culpa, sem vergonha, com clareza." },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-glow">Não é sobre score. É sobre você.</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            O que muda na <span className="text-gradient">sua vida</span> quando o CPF destrava.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card-grad border border-border rounded-2xl p-6 group hover:border-primary/40 transition">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/15 text-neon mb-4 group-hover:scale-110 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-lg text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
