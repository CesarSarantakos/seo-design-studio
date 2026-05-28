import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const SEGMENTOS = [
  "Condomínios Residenciais", "Condomínios Comerciais", "Indústrias",
  "Escritórios Corporativos", "Instituições de Ensino", "Saúde e Hospitais",
  "Varejo", "Logística e Galpões",
];

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — GS" },
      { name: "description", content: "A GS atende condomínios, indústrias, escritórios, instituições de ensino, saúde e varejo." },
      { property: "og:title", content: "Clientes — GS" },
      { property: "og:description", content: "Segmentos atendidos pela GS." },
      { property: "og:url", content: "/clientes" },
    ],
    links: [{ rel: "canonical", href: "/clientes" }],
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Nossos Clientes</h1>
            <p className="mt-4 text-muted-foreground">Segmentos que atendemos com presença e compromisso.</p>
          </header>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SEGMENTOS.map((s) => (
              <div key={s} className="bg-card border border-border rounded-lg p-5 text-center text-foreground/90 hover:border-primary/50 transition-colors">
                {s}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}