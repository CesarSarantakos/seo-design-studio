import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { MissionVisionValues } from "@/components/site/MissionVisionValues";
import { SignificadoG } from "@/components/site/SignificadoG";
import { Pillars } from "@/components/site/Pillars";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — GS" },
      { name: "description", content: "Conheça a GS: pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença." },
      { property: "og:title", content: "Quem Somos — GS" },
      { property: "og:description", content: "Pessoas comprometidas, operações organizadas, presença verdadeira." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MissionVisionValues />
        <SignificadoG />
        <Pillars />
      </main>
      <Footer />
    </div>
  );
}
