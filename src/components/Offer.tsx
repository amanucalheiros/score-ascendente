import { useEffect, useState } from "react";
import { Check, Shield, Clock, Gift, Lock, CreditCard } from "lucide-react";
import ebook from "@/assets/ebook-mockup.png";
import { CTAButton } from "./CTAButton";

const items = [
  "Ebook completo Guia Score Alto (PDF + acesso online)",
  "🎁 BÔNUS 1: Checklist CPF Forte em 7 dias",
  "🎁 BÔNUS 2: Planilha de Controle Financeiro",
  "🎁 BÔNUS 3: Calendário de Pagamentos Estratégico",
  "🎁 BÔNUS 4: Guia dos 7 erros que destroem o score",
  "🎁 BÔNUS 5: Roteiro de renegociação de dívidas",
  "Acesso vitalício e atualizações gratuitas",
  "Suporte por e-mail",
];

const STORAGE_KEY = "gsa_deadline_v1";
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24h evergreen

function useEvergreenCountdown() {
  const [remaining, setRemaining] = useState<number>(WINDOW_MS);

  useEffect(() => {
    let deadline: number;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? parseInt(stored, 10) : NaN;
      if (Number.isFinite(parsed) && parsed > Date.now()) {
        deadline = parsed;
      } else {
        deadline = Date.now() + WINDOW_MS;
        localStorage.setItem(STORAGE_KEY, String(deadline));
      }
    } catch {
      deadline = Date.now() + WINDOW_MS;
    }

    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const totalSecs = Math.floor(remaining / 1000);
  const h = String(Math.floor(totalSecs / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, "0");
  const s = String(totalSecs % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export function Offer() {
  const time = useEvergreenCountdown();
  return (
    <section id="oferta" className="relative py-16 sm:py-24 px-4 bg-hero overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <div className="rounded-2xl bg-destructive/15 border border-destructive/40 px-4 py-3 flex items-center justify-center gap-3 text-center text-sm sm:text-base font-bold text-foreground animate-fade-up">
          <Clock className="h-5 w-5 text-destructive shrink-0" />
          <span>⚠️ Sua oferta expira em <span className="text-destructive font-black tabular-nums">{time}</span></span>
        </div>

        <div className="relative mt-8 rounded-3xl bg-card-grad border border-primary/30 shadow-neon p-6 sm:p-10 animate-fade-up">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-primary-foreground font-black text-sm uppercase tracking-wider px-4 py-1.5 rounded-full shadow-cta">
            ⚡ 70% OFF — Hoje
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/40" />
              </div>
              <img src={ebook} alt="Guia Score Alto" loading="lazy" width={1024} height={1536} className="w-[220px] sm:w-[280px] animate-float" />
            </div>

            <div>
              <h2 className="font-black tracking-tight leading-[1.05] text-2xl sm:text-3xl text-foreground">
                Guia Score Alto + <span className="text-gradient">5 Bônus</span> Exclusivos
              </h2>
              <ul className="mt-5 space-y-2.5">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 shrink-0 rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6 text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">De <span className="line-through">R$ 97,00</span> por apenas</div>
            <div className="mt-2 flex items-end justify-center gap-1">
              <span className="text-2xl sm:text-3xl font-black text-foreground mb-2">R$</span>
              <span className="text-6xl sm:text-7xl font-black text-gradient leading-none">14</span>
              <span className="text-3xl sm:text-4xl font-black text-gradient leading-none mb-1">,99</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">à vista no Pix • ou 2x de R$ 7,89 no cartão</div>

            <div className="mt-6">
              <CTAButton size="xl" fullWidth>
                QUERO GARANTIR MEU ACESSO AGORA
              </CTAButton>
            </div>

            {/* Trust seals */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-7 px-2 rounded-md bg-foreground/10 border border-border flex items-center gap-1.5 font-black text-foreground">
                  <CreditCard className="h-3.5 w-3.5 text-neon" />
                  <span className="tracking-tight">Kiwify</span>
                </div>
                <span>Pagamento processado por Kiwify</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-neon" /> SSL 256-bit
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-neon" /> Garantia de 7 dias
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Acesso liberado em até 5 minutos no seu e-mail.</p>
          </div>

          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5 flex items-start gap-4">
            <div className="shrink-0 h-12 w-12 grid place-items-center rounded-xl bg-primary/20 text-neon">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <div className="font-extrabold text-foreground">Garantia incondicional de 7 dias</div>
              <p className="text-sm text-muted-foreground mt-1">Se em 7 dias você achar que não vale, devolvemos 100% do valor. Zero burocracia, zero pergunta. O risco é todo nosso.</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Gift className="h-4 w-4 text-neon" /> Bônus liberados imediatamente após a compra
          </div>
        </div>
      </div>
    </section>
  );
}
