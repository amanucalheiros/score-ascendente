import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 px-4 bg-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center animate-fade-up">
        <h2 className="font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl lg:text-5xl">
          Daqui a 90 dias você vai estar <span className="text-gradient">aprovado</span>… ou no <span className="text-destructive">mesmo lugar</span>.
        </h2>
        <p className="mt-5 text-muted-foreground text-base sm:text-lg">
          A diferença é uma decisão. Por menos do que custa um lanche, você pode finalmente destravar o seu CPF, voltar a ter crédito e a viver sem esse peso. Ou pode fechar essa página e continuar do mesmo jeito.
        </p>
        <p className="mt-3 text-foreground font-bold">A escolha é sua. E é agora.</p>
        <div className="mt-8 flex justify-center">
          <CTAButton size="xl">QUERO COMEÇAR HOJE POR R$ 14,99</CTAButton>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">🔒 Pagamento seguro • 7 dias de garantia • Acesso imediato</p>
      </div>
    </section>
  );
}
