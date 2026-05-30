import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/segmentos/")({
  head: () => ({
    meta: [
      { title: "Segmentos — GS" },
      { name: "description", content: "Conheça os segmentos atendidos pela GS: empresas e condomínios com soluções de terceirização completas." },
      { property: "og:title", content: "Segmentos — GS" },
      { property: "og:description", content: "Empresas e condomínios com soluções de terceirização completas." },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Segmentos</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Soluções de terceirização sob medida para empresas e condomínios, com presença, compromisso e qualidade.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="/segmentos/empresas"
              className="group block bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Empresas
              </h2>
              <p className="mt-3 text-muted-foreground text-sm">
                Portaria, limpeza, recepção e manutenção para o seu negócio.
              </p>
            </a>
            <a
              href="/segmentos/condominios"
              className="group block bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Condomínios
              </h2>
              <p className="mt-3 text-muted-foreground text-sm">
                Segurança, limpeza e manutenção para condomínios residenciais e comerciais.
              </p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
