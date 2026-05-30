import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/segmentos/condominios")({
  head: () => ({
    meta: [
      { title: "Condomínios — GS" },
      { name: "description", content: "Soluções de terceirização para condomínios residenciais e comerciais: portaria, limpeza, recepção e manutenção com tranquilidade para moradores." },
      { property: "og:title", content: "Condomínios — GS" },
      { property: "og:description", content: "Serviços de terceirização para condomínios com presença e compromisso." },
      { property: "og:url", content: "/segmentos/condominios" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/condominios" }],
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Condomínios</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Terceirização completa para condomínios residenciais e comerciais: portaria 24h, limpeza, recepção e manutenção com tranquilidade e qualidade de vida.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Portaria 24h",
                desc: "Segurança e controle de acesso para moradores e visitantes, com atendimento acolhedor e profissional.",
                to: "/solucoes/portaria-24h",
              },
              {
                title: "Limpeza Profissional",
                desc: "Áreas comuns sempre limpas e bem cuidadas, valorizando o patrimônio e o bem-estar dos moradores.",
                to: "/solucoes/limpeza-profissional",
              },
              {
                title: "Recepção e Atendimento",
                desc: "Atendimento na portaria e administração com cordialidade e eficiência para o dia a dia do condomínio.",
                to: "/solucoes/recepcao-e-atendimento",
              },
              {
                title: "Manutenção Predial",
                desc: "Conservação das áreas comuns, jardins e infraestrutura para manter tudo funcionando perfeitamente.",
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
