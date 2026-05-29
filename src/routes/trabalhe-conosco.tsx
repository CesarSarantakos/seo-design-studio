import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JobApplicationForm } from "@/components/site/JobApplicationForm";
import {
  Heart,
  FileText,
  CalendarCheck,
  HandHeart,
  TrendingUp,
  Users,
  Quote,
  Send,
  Sparkles,
} from "lucide-react";
import heroImg from "@/assets/trabalhe-hero.jpg";
import colab1 from "@/assets/colab-1.jpg";
import colab2 from "@/assets/colab-2.jpg";
import colab3 from "@/assets/colab-3.jpg";

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

const BENEFITS = [
  { icon: FileText, label: "Registro em carteira" },
  { icon: CalendarCheck, label: "Pagamento em dia" },
  { icon: HandHeart, label: "Respeito no ambiente de trabalho" },
  { icon: TrendingUp, label: "Oportunidade de crescimento" },
  { icon: Users, label: "Equipe preparada para te apoiar" },
];

const TESTIMONIALS = [
  {
    img: colab1,
    quote: "Fui muito bem recebido desde o primeiro dia. Me senti parte da equipe.",
    name: "Gael Brito",
    role: "Auxiliar de serviços gerais",
  },
  {
    img: colab2,
    quote: "A GS cumpre o que promete e sempre dá o suporte que a gente precisa.",
    name: "Gabriela Luz",
    role: "Auxiliar de Limpeza",
  },
  {
    img: colab3,
    quote: "Aqui tenho respeito e oportunidade de crescer.",
    name: "Ana Lúcia",
    role: "Auxiliar de Serviços",
  },
];

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <img
            src={heroImg}
            alt="Equipe GS sorrindo em ambiente corporativo"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/95 to-background-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/50 to-transparent" />
          <div className="container relative mx-auto px-6 py-32 lg:py-40">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.45)" }}>
                Aqui, você
                <br />
                não é só mais
                <br />
                um{" "}
                <span className="text-primary inline-flex items-baseline gap-3">
                  funcionário.
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary/20 self-center" />
                </span>
              </h1>
              <p className="mt-8 text-lg text-foreground/85 max-w-md leading-relaxed">
                Na GS, seu trabalho é respeitado, você é valorizado e faz parte de uma equipe que cuida de pessoas.
              </p>
              <a
                href="#candidatura"
                className="mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-wide shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Quero fazer parte da equipe
              </a>
            </div>
            <div className="hidden lg:block absolute right-8 bottom-16 max-w-xs bg-background-deep/70 backdrop-blur-md border border-primary/30 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Mais que contratar pessoas. Formamos <span className="text-primary font-semibold">equipes</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12 bg-primary/40" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                Aqui você encontra:
              </h2>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {BENEFITS.map((b) => (
                <div
                  key={b.label}
                  className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <b.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-background-deep relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background-deep to-background pointer-events-none" />
          <div className="container relative mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              O que nossos colaboradores dizem
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.name}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <div className="flex gap-4 p-5">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="w-28 h-32 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <Quote className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm text-foreground/90 leading-relaxed italic">
                        {t.quote}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-primary">{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION */}
        <section id="candidatura" className="py-20 bg-background scroll-mt-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 lg:sticky lg:top-28">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Seu próximo
                  <br />
                  trabalho pode{" "}
                  <span className="text-primary relative">
                    começar aqui.
                    <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none" preserveAspectRatio="none">
                      <path d="M0 3 Q50 0 100 3 T200 3" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </h2>
                <div className="mt-10 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Estamos procurando pessoas que queiram crescer junto com a GS.
                  </p>
                </div>
                <div className="mt-8 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Preencha o formulário ao lado. Nossa equipe analisa cada candidatura com atenção e responde quando há fit com nossas oportunidades.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Faça parte da nossa equipe</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Preencha o formulário e envie seu currículo. Nossa equipe entrará em contato.
                  </p>
                </div>
                <JobApplicationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}