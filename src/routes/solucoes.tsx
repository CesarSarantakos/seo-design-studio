import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Shield, Sparkles, KeyRound, Users, Wrench, TreePine } from "lucide-react";

const SERVICES = [
  { icon: Shield, title: "Portaria 24h", desc: "Portaria física e remota com controle rigoroso de acessos." },
  { icon: KeyRound, title: "Controle de Acesso", desc: "Operação e gestão de portarias e controle de visitantes." },
  { icon: Sparkles, title: "Limpeza Profissional", desc: "Equipes de limpeza com escala 44h semanais." },
  { icon: Users, title: "Recepção e Copa", desc: "Recepcionistas, copeiras e zeladoria predial." },
  { icon: Wrench, title: "Manutenção Predial", desc: "Manutenção preventiva e corretiva." },
  { icon: TreePine, title: "Jardinagem", desc: "Cuidado com áreas verdes e paisagismo." },
];

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — GS" },
      { name: "description", content: "Portaria, limpeza, controle de acesso, recepção, manutenção predial e jardinagem com a GS." },
      { property: "og:title", content: "Soluções — GS" },
      { property: "og:description", content: "Conheça nossas soluções de terceirização." },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <header className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Soluções GS</h1>
            <p className="mt-4 text-muted-foreground">Serviços que cuidam do que realmente importa.</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <Icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <h2 className="text-lg font-bold text-foreground mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}