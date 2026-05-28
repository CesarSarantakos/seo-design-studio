import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JobApplicationForm } from "@/components/site/JobApplicationForm";

export const Route = createFileRoute("/trabalhe-conosco")({
  head: () => ({
    meta: [
      { title: "Trabalhe Conosco — GS" },
      { name: "description", content: "Faça parte da equipe GS. Envie seu currículo e participe de um time comprometido com pessoas e resultados." },
      { property: "og:title", content: "Trabalhe Conosco — GS" },
      { property: "og:description", content: "Envie seu currículo e faça parte da equipe GS." },
      { property: "og:url", content: "/trabalhe-conosco" },
    ],
    links: [{ rel: "canonical", href: "/trabalhe-conosco" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Faça parte da nossa equipe</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Preencha o formulário e envie seu currículo. Nossa equipe entrará em contato.
            </p>
          </header>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Como funciona?</h2>
              <p className="text-muted-foreground mb-8">É simples!</p>
              <ol className="space-y-6">
                {[
                  { t: "Preencha o formulário", d: "Envie seus dados e informações profissionais para que possamos conhecer você melhor." },
                  { t: "Análise do perfil", d: "Nossa equipe avaliará seu envio e verificará as oportunidades compatíveis." },
                  { t: "Entraremos em contato", d: "Se o seu perfil se encaixar, chamaremos você para a próxima etapa." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">{i + 1}</div>
                    <div>
                      <h3 className="font-semibold text-foreground">{s.t}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <JobApplicationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}