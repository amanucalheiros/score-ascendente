import { X, Check } from "lucide-react";

export function BeliefBreak() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-card/30 border-y border-border">
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-glow">A verdade que ninguém te conta</span>
        <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
          Score <span className="text-destructive">não</span> melhora por mágica.
        </h2>
        <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Você já tentou de tudo: cadastrou no Serasa, pagou contas em dia, ficou meses esperando…
          e nada. A verdade é que <strong className="text-foreground">não existe hack milagroso</strong> — existe estratégia.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive font-bold uppercase text-xs tracking-wider"><X className="h-4 w-4" /> O que NÃO funciona</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Esperar o score subir sozinho</li>
              <li>• Pagar empresa "limpa nome" duvidosa</li>
              <li>• Acreditar em hack do TikTok</li>
              <li>• Pedir crédito em todo banco e ser recusado</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6">
            <div className="flex items-center gap-2 text-neon font-bold uppercase text-xs tracking-wider"><Check className="h-4 w-4" /> O que REALMENTE funciona</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Entender como o sistema te avalia</li>
              <li>• Aplicar hábitos certos na ordem certa</li>
              <li>• Organizar o CPF de forma estratégica</li>
              <li>• Construir credibilidade como o banco enxerga</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
