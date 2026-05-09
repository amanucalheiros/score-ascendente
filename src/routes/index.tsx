import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Pain } from "@/components/Pain";
import { BeliefBreak } from "@/components/BeliefBreak";
import { About } from "@/components/About";
import { Learn } from "@/components/Learn";
import { Benefits } from "@/components/Benefits";
import { Authority } from "@/components/Authority";
import { Method } from "@/components/Method";
import { Testimonials } from "@/components/Testimonials";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Score Alto — Destrave seu CPF e volte a ter crédito" },
      { name: "description", content: "Aprenda o método passo a passo para subir o score, organizar o CPF e voltar a ter cartão e financiamento aprovado. Acesso imediato por R$ 14,99." },
      { property: "og:title", content: "Guia Score Alto — Destrave seu CPF" },
      { property: "og:description", content: "Pare de ser recusado. Reconquiste seu crédito com um método simples e prático." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <BeliefBreak />
        <About />
        <Learn />
        <Benefits />
        <Authority />
        <Method />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
