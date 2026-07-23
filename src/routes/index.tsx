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
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Score Alto — Destrave seu CPF e volte a ter crédito" },
      { name: "description", content: "Método passo a passo para subir seu score, limpar o CPF e voltar a ter cartão e financiamento aprovado. Acesso imediato, garantia de 7 dias." },
      { property: "og:title", content: "Guia Score Alto — Destrave seu CPF e volte a ter crédito" },
      { property: "og:description", content: "Método passo a passo para subir seu score, limpar o CPF e voltar a ter cartão e financiamento aprovado. Acesso imediato, garantia de 7 dias." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogCover },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guia Score Alto — Destrave seu CPF" },
      { name: "twitter:description", content: "Método passo a passo para subir o score e voltar a ter crédito aprovado." },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <StickyMobileCTA />
    </div>
  );
}
