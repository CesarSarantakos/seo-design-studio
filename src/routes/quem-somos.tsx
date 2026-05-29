import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Gem,
  Handshake,
  Users,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Compass,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-team.jpg";
import handshakeImg from "@/assets/handshake.jpg";
import gimelImg from "@/assets/gimel-hands.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20melhor%20a%20GS.%20Pode%20me%20ajudar%3F";

const PRINCIPIOS = [
  { icon: HeartHandshake, label: "Integridade nas relações" },
  { icon: Users, label: "Servir com presença" },
  { icon: Sparkles, label: "Fazer o simples bem feito" },
  { icon: ShieldCheck, label: "Respeito pelas pessoas" },
  { icon: CheckCircle2, label: "Compromisso com resultados" },
];

const PILARES = [
  { icon: ShieldCheck, title: "Proteção", desc: "Que gera tranquilidade no dia a dia da operação." },
  { icon: Users, title: "Pessoas", desc: "Profissionais preparados, presentes e comprometidos." },
  { icon: Compass, title: "Processos", desc: "Organização que garante excelência e consistência." },
  { icon: Handshake, title: "Parcerias", desc: "Relações de confiança que constroem resultados." },
];

const COMPROMISSOS = [
  "Empresa regularizada e em conformidade",
  "Seleção rigorosa e treinamento contínuo",
  "Supervisão de campo constante",
  "Comunicação direta com a gestão",
  "Profissionais uniformizados",
  "Compromisso com cada cliente",
];

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — GS Serviços Terceirizados" },
      {
        name: "description",
        content:
          "Conheça a GS: pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença. Missão, visão, valores e a essência do nosso G.",
      },
      { property: "og:title", content: "Quem Somos — GS" },
      {
        property: "og:description",
        content: "Pessoas comprometidas, operações organizadas, presença verdadeira.",
      },
      { property: "og:url", content: "/quem-somos" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative w-full min-h-[92vh] overflow-hidden bg-background-deep">
          <img
            src={heroImg}
            alt="Equipe GS — pessoas que cuidam do que importa"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/85 to-background-deep/30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-background-deep via-background-deep/20 to-transparent"
          />

          <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] flex items-center pt-32 pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Quem Somos
              </span>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Nossa marca
                <br />
                <span className="text-primary">é o que somos.</span>
              </h1>
              <div className="h-[3px] w-24 bg-primary mt-10 mb-7" />
              <p
                className="text-xl md:text-2xl text-white/95 max-w-xl leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                Presença, proteção e compromisso com o
                <span className="text-primary font-medium"> que realmente importa.</span>
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg mt-6 leading-relaxed">
                A GS nasceu para representar mais do que terceirização. Representa pessoas comprometidas, operações organizadas e a responsabilidade de servir com presença.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/solucoes"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
                >
                  Nossas Soluções
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 hover:border-primary/60 text-white hover:text-primary transition-colors rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm"
                >
                  Falar com a GS
                </a>
              </div>
            </div>
          </div>

          {/* Princípios strip */}
          <div className="relative container mx-auto px-6 lg:px-12 -mt-4 pb-12">
            <div className="bg-background-deep/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {PRINCIPIOS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3 group">
                  <Icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-white/85 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* fade to next section */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
        </section>

        {/* MISSÃO / VISÃO / VALORES */}
        <section className="relative py-24 bg-background" aria-labelledby="mvv-heading">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Nosso Propósito
              </span>
              <h2 id="mvv-heading" className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                O que nos move todos os dias.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  tag: "Missão",
                  text: "Protegemos pessoas, patrimônio e cuidamos do que realmente importa.",
                },
                {
                  icon: Eye,
                  tag: "Visão",
                  text: "Unir colaboradores e clientes para construir resultados sólidos.",
                },
                {
                  icon: Gem,
                  tag: "Valores",
                  text: "Integridade, presença, respeito e compromisso com cada operação.",
                },
              ].map(({ icon: Icon, tag, text }) => (
                <article
                  key={tag}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-3">{tag}</h3>
                  <p className="text-foreground/90 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background-deep" />
        </section>

        {/* SIGNIFICADO DO G */}
        <section className="relative py-24 bg-background-deep overflow-hidden" aria-labelledby="significado-g">
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-[color:var(--gold)]/25 to-transparent rounded-3xl blur-2xl" />
              <img
                src={gimelImg}
                alt="Letra hebraica Gimel — o princípio de servir"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-square shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--gold)] mb-6">
                <span className="h-px w-8 bg-[color:var(--gold)]" />
                A essência do nome
              </span>
              <h2 id="significado-g" className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                O significado do <span className="text-[color:var(--gold)]">"G"</span>
                <br />
                que nos inspira.
              </h2>
              <p className="mt-8 text-lg text-white/85 leading-relaxed">
                No hebraico, a letra "G" (Gimel) se conecta ao princípio do servir, do ajudar, do estender a mão a quem precisa.
              </p>
              <p className="mt-4 text-lg text-white/85 leading-relaxed">
                É a essência de quem vai ao encontro do outro para fazer a diferença.
              </p>
              <div className="mt-10 border-l-2 border-primary pl-6">
                <p className="text-2xl md:text-3xl font-bold text-primary leading-snug">
                  Servir é o que nos move.
                  <br />
                  Cuidar é o que nos define.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
        </section>

        {/* 4 PILARES */}
        <section className="relative py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Pilares GS
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                A base de tudo o que entregamos.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Grandes operações são construídas por pessoas comprometidas, processos organizados e presença verdadeira no dia a dia.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILARES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background-deep" />
        </section>

        {/* PARCERIA DE VERDADE */}
        <section className="relative py-24 bg-background-deep overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Como trabalhamos
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Parceria de <span className="text-primary">verdade.</span>
              </h2>
              <p className="mt-6 text-lg text-white/85 leading-relaxed">
                Mais do que prestadora de serviços, somos extensão da sua operação. Relacionamento baseado em confiança, transparência e diálogo.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {COMPROMISSOS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-white/85 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 to-transparent rounded-3xl blur-2xl" />
              <img
                src={handshakeImg}
                alt="Aperto de mãos representando parceria GS"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/5] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl max-w-[220px] hidden md:block">
                <Star className="w-5 h-5 text-primary mb-2" strokeWidth={1.5} />
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 leading-snug">
                  Nossa marca é o que somos. E o que somos, <span className="text-primary">transforma.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <Headphones className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-tight">
                  Vamos conversar sobre a sua operação?
                </h3>
                <p className="text-primary-foreground/85 mt-1 text-sm md:text-base">
                  Conheça as soluções GS e descubra como podemos servir o seu dia a dia.
                </p>
              </div>
            </div>
            <Link
              to="/solicitar-proposta"
              className="group inline-flex items-center gap-3 bg-background-deep text-white hover:bg-background-deep/90 transition-colors rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shrink-0"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}