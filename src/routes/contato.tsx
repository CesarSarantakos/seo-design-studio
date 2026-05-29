import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { ProposalSimulator } from "@/components/site/ProposalSimulator";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site e gostaria de solicitar um orçamento para serviços de terceirização. Pode me ajudar?"
  );

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
              <h2 className="font-semibold text-foreground">WhatsApp</h2>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground mt-1 inline-block hover:text-primary"
              >
                (11) 93049-4888
              </a>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-foreground">E-mail</h2>
              <p className="text-sm text-muted-foreground mt-1">contato@gs.com.br</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="font-semibold text-foreground">Endereço</h2>
              <p className="text-sm text-muted-foreground mt-1">
                R. Carlos Meira, 32<br />Penha de França, São Paulo – SP
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Mapa - GS - R. Carlos Meira, 32, Penha de França, São Paulo"
              src="https://www.google.com/maps?q=R.%20Carlos%20Meira%2C%2032%20-%20Penha%20de%20Fran%C3%A7a%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </section>
        <ProposalSimulator />
      </main>
      <Footer />
    </div>
  );
}