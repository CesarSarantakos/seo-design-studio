import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HomeHero } from "@/components/site/HomeHero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { MarketChange } from "@/components/site/MarketChange";
import { OperationImpact } from "@/components/site/OperationImpact";
import { HomeBenefits } from "@/components/site/HomeBenefits";
import { TeamShowcase } from "@/components/site/TeamShowcase";
import { HomeTestimonials } from "@/components/site/HomeTestimonials";
import { PremiumCTA } from "@/components/site/PremiumCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GS — Terceirização com presença, proteção e compromisso" },
      { name: "description", content: "GS oferece portaria, limpeza, controle de acesso e zeladoria com pessoas comprometidas e operações organizadas. Solicite sua proposta." },
      { property: "og:title", content: "GS — O que importa, cuidamos." },
      { property: "og:description", content: "Terceirização com presença, proteção e compromisso. Solicite sua proposta em 2 minutos." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomeHero />
        <TrustStrip />
        <MarketChange />
        <OperationImpact />
        <HomeBenefits />
        <TeamShowcase />
        <HomeTestimonials />
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  );
}
