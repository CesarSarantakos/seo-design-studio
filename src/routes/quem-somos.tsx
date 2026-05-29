import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SignificadoG } from "@/components/site/SignificadoG";
import { MissionVisionValues } from "@/components/site/MissionVisionValues";

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
      <main className="flex-1 pt-32">
        <section className="container mx-auto px-6 py-16 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Quem Somos</h1>
          <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
            A GS nasceu para representar mais do que terceirização. Representa pessoas comprometidas,
            operações organizadas e a responsabilidade de servir com presença.
          </p>
        </section>
        <MissionVisionValues />
        <SignificadoG />
      </main>
      <Footer />
    </div>
  );
}