import { CreditCard, Ban, Frown, Lock, AlertTriangle, HeartCrack } from "lucide-react";

const pains = [
  { icon: CreditCard, t: "Cartão negado de novo", d: "Aquela vergonha silenciosa de tentar comprar e ouvir 'não autorizado'." },
  { icon: Ban, t: "Empréstimo recusado", d: "Você precisa, está disposto a pagar, mas o sistema te trata como invisível." },
  { icon: Lock, t: "Score travado há meses", d: "Você paga em dia, faz tudo certo… e a pontuação simplesmente não sobe." },
  { icon: AlertTriangle, t: "Nome bagunçado", d: "Dívidas espalhadas, datas confusas e a sensação de nunca sair do buraco." },
  { icon: HeartCrack, t: "Medo de financiar", d: "A casa, o carro, o sonho — tudo travado por causa de um número." },
  { icon: Frown, t: "Ansiedade financeira", d: "Você evita olhar o app do banco. Cada notificação é um soco no estômago." },
];

export function Pain() {
  return (
    <section id="dor" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-destructive">⚠️ Você reconhece isso?</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            Se um desses te <span className="text-destructive">acertou no peito</span>,<br className="hidden sm:block" /> esta página é pra você.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card-grad border border-border rounded-2xl p-6 hover:border-destructive/50 transition">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-destructive/15 text-destructive mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-lg text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
