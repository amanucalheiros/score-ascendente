import { Star } from "lucide-react";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import scoreProof from "@/assets/score-before-after.jpg";

const list = [
  { img: t1, n: "Carlos M., 38", c: "São Paulo", t: "Tava com nome sujo há 4 anos. Em 2 meses aplicando o passo a passo, cartão aprovado. Chorei na frente do computador, juro." },
  { img: t2, n: "Juliana S., 31", c: "Belo Horizonte", t: "Eu achava que score era loteria. Esse guia me mostrou que tem método. Saí de 380 pra 720 sem milagre, só seguindo." },
  { img: t3, n: "Rafael L., 26", c: "Curitiba", t: "Comprei meu primeiro carro financiado. Coisa que eu jamais imaginei. Vale cada centavo — devia custar muito mais." },
  { img: t1, n: "Patrícia R., 44", c: "Recife", t: "Negativada, mãe solo, sem esperança. Hoje tenho cartão, limite de R$ 3.500 e durmo tranquila. Mudou minha vida." },
  { img: t2, n: "André F., 29", c: "Porto Alegre", t: "Linguagem simples, direto ao ponto. Não tem enrolação. Apliquei e funcionou. Recomendo de olhos fechados." },
  { img: t3, n: "Marcos T., 35", c: "Salvador", t: "Em 90 dias subi 280 pontos. Financiei a moto, coisa que tinha desistido. Esse guia é ouro." },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-warning">⭐ Quem já fez</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
            Histórias <span className="text-gradient">reais</span> de quem virou o jogo.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p, i) => (
            <div key={i} className="bg-card-grad border border-border rounded-2xl p-6 flex flex-col">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current text-warning" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{p.t}"</p>

              <div className="mt-4 relative rounded-xl overflow-hidden border border-primary/30 bg-background/50">
                <img
                  src={scoreProof}
                  alt={`Print do score antes e depois — ${p.n}`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-auto"
                />
                <span className="absolute top-2 left-2 text-[10px] font-black uppercase tracking-wider bg-primary/90 text-primary-foreground px-2 py-0.5 rounded-full">
                  Print real
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                <img src={p.img} alt={p.n} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover border border-border" />
                <div>
                  <div className="font-bold text-sm text-foreground">{p.n}</div>
                  <div className="text-xs text-muted-foreground">{p.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
