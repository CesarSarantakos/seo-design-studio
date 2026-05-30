import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/segmentos/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas — GS" },
      { name: "description", content: "Soluções de terceirização para empresas: portaria, limpeza, recepção e manutenção com presença e compromisso." },
      { property: "og:title", content: "Empresas — GS" },
      { property: "og:description", content: "Serviços de terceirização para empresas com presença e compromisso." },
      { property: "og:url", content: "/segmentos/empresas" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/empresas" }],
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Empresas</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Soluções completas de terceirização para o seu negócio: portaria, limpeza profissional, recepção e manutenção predial com supervisão próxima e cobertura rápida.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Portaria 24h",
                desc: "Controle de acesso profissional com segurança e acolhimento para colaboradores e visitantes.",
                to: "/solucoes/portaria-24h",
              },
              {
                title: "Limpeza Profissional",
                desc: "Ambientes limpos e organizados que refletem a qualidade da sua marca.",
                to: "/solucoes/limpeza-profissional",
              },
              {
                title: "Recepção e Atendimento",
                desc: "Primeiro contato da sua empresa feito com profissionalismo e cordialidade.",
                to: "/solucoes/recepcao-e-atendimento",
              },
              {
                title: "Manutenção Predial",
                desc: "Conservação preventiva e corretiva para manter sua infraestrutura sempre em ordem.",
                to: "/solucoes",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.to}
                className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
