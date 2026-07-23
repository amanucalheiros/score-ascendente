import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Guia Score Alto" },
      { name: "description", content: "Termos de uso do produto Guia Score Alto." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4">
      <article className="max-w-3xl mx-auto prose prose-invert">
        <Link to="/" className="text-neon text-sm">← Voltar</Link>
        <h1 className="mt-4 text-3xl sm:text-4xl font-black">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Aceitação</h2>
            <p>Ao adquirir o produto Guia Score Alto, você concorda integralmente com estes Termos de Uso. Se não concordar, não realize a compra.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">2. Sobre o produto</h2>
            <p>O Guia Score Alto é um material educacional em formato digital (ebook e bônus), com conteúdo informativo sobre score de crédito, organização financeira e boas práticas. Não constitui aconselhamento financeiro individualizado.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">3. Licença de uso</h2>
            <p>A compra concede licença pessoal, intransferível e não exclusiva de acesso ao conteúdo. É proibida a reprodução, redistribuição ou revenda, no todo ou em parte.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">4. Pagamento e entrega</h2>
            <p>Os pagamentos são processados pela plataforma Kiwify. O acesso é liberado por e-mail em até alguns minutos após a confirmação.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">5. Garantia e reembolso</h2>
            <p>Oferecemos garantia incondicional de 7 dias corridos a partir da data da compra. Basta solicitar por e-mail para receber 100% do valor de volta.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">6. Isenção de resultados</h2>
            <p>Não garantimos resultados financeiros específicos. Depoimentos são experiências individuais. Não somos parceiros oficiais do Serasa, SPC ou Boa Vista.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">7. Contato</h2>
            <p>Dúvidas: <a className="text-neon" href="mailto:suporte@guiascorealto.com.br">suporte@guiascorealto.com.br</a>.</p>
          </div>
        </section>
      </article>
    </div>
  );
}
