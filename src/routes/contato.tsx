import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { ProposalSimulator } from "@/components/site/ProposalSimulator";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — GS" },
      { name: "description", content: "Entre em contato com a GS. Solicite uma proposta para portaria, limpeza, controle de acesso e mais." },
      { property: "og:title", content: "Contato — GS" },
      { property: "og:description", content: "Fale com a GS e solicite sua proposta." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 bg-background">
        <section className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">Fale com a GS</h1>
          <p className="mt-4 text-center text-muted-foreground">Estamos prontos para cuidar do que importa para você.</p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-foreground">Telefone</h2>
              <p className="text-sm text-muted-foreground mt-1">A definir</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-foreground">E-mail</h2>
              <p className="text-sm text-muted-foreground mt-1">contato@gs.com.br</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-foreground">Endereço</h2>
              <p className="text-sm text-muted-foreground mt-1">A definir</p>
            </div>
          </div>
        </section>
        <ProposalSimulator />
      </main>
      <Footer />
    </div>
  );
}