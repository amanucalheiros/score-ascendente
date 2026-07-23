import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Guia Score Alto" },
      { name: "description", content: "Política de privacidade e tratamento de dados do Guia Score Alto." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4">
      <article className="max-w-3xl mx-auto">
        <Link to="/" className="text-neon text-sm">← Voltar</Link>
        <h1 className="mt-4 text-3xl sm:text-4xl font-black">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Dados coletados</h2>
            <p>Coletamos apenas os dados necessários para processar sua compra e entregar o produto: nome, e-mail e informações fornecidas voluntariamente. O pagamento é processado pela Kiwify — dados financeiros não passam por nossos servidores.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">2. Uso das informações</h2>
            <p>Usamos seus dados para: entregar o produto, enviar atualizações do material, prestar suporte e cumprir obrigações legais.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">3. Compartilhamento</h2>
            <p>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Utilizamos apenas parceiros essenciais à operação (processador de pagamento, provedor de e-mail), sempre em conformidade com a LGPD.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">4. Cookies</h2>
            <p>Utilizamos cookies para análise de uso e melhoria da experiência. Você pode desativá-los nas configurações do seu navegador.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">5. Seus direitos (LGPD)</h2>
            <p>Você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <a className="text-neon" href="mailto:suporte@guiascorealto.com.br">suporte@guiascorealto.com.br</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">6. Segurança</h2>
            <p>Adotamos criptografia SSL e boas práticas de segurança para proteger suas informações contra acesso não autorizado.</p>
          </div>
        </section>
      </article>
    </div>
  );
}
