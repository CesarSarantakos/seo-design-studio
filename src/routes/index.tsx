import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { MissionVisionValues } from "@/components/site/MissionVisionValues";
import { SignificadoG } from "@/components/site/SignificadoG";
import { Pillars } from "@/components/site/Pillars";
import { ProposalSimulator } from "@/components/site/ProposalSimulator";

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
        <Hero />
        <MissionVisionValues />
        <SignificadoG />
        <Pillars />
        <ProposalSimulator />
      </main>
      <Footer />
    </div>
  );
}
