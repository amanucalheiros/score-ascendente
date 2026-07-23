import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Funciona mesmo? Não é mais um curso furado?", a: "O método é o que milhares de alunos já aplicaram com resultado real. Não prometemos milagre — prometemos um caminho claro. Se você aplicar, funciona." },
  { q: "Como sei que isso não é golpe?", a: "Sua compra é protegida por garantia incondicional de 7 dias — se não gostar, devolvemos 100% do valor sem perguntas. O pagamento é processado pela Kiwify, plataforma oficial usada por milhares de produtores, com criptografia SSL. Os dados completos da empresa responsável (razão social e CNPJ) estão no rodapé desta página." },
  { q: "Em quanto tempo vejo resultado?", a: "Os primeiros sinais aparecem em 30 a 60 dias. Resultados maiores (saltos grandes de score) costumam acontecer entre 60 e 120 dias seguindo o passo a passo." },
  { q: "Serve para quem está negativado?", a: "Sim. Existem capítulos específicos para quem está negativado, com a ordem certa de ações para limpar o nome de forma estratégica." },
  { q: "Preciso entender de finanças para acompanhar?", a: "Não. O guia foi escrito justamente para quem nunca entendeu nada de finanças. Linguagem simples, exemplos do dia a dia, sem economês." },
  { q: "Como recebo o material?", a: "Em até 5 minutos após a compra você recebe um e-mail com o link de acesso. Pode ler no celular, tablet ou computador, quando e onde quiser." },
  { q: "Se eu não gostar, consigo o reembolso?", a: "Sim, sem perguntas. Você tem 7 dias de garantia incondicional. Pediu, devolvemos 100% do valor. O risco é todo nosso." },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center animate-fade-up">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-glow">Perguntas frequentes</span>
          <h2 className="mt-3 font-black tracking-tight leading-[1.05] text-3xl sm:text-4xl">Ainda em dúvida? <span className="text-gradient">Respondemos.</span></h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="bg-card-grad border border-border rounded-2xl px-5 last:border-b">
              <AccordionTrigger className="text-left font-bold text-foreground hover:text-neon hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
