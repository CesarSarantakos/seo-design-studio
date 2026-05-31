import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  ShieldCheck,
  Eye,
  Users,
  Package,
  Bike,
  Truck,
  Building2,
  ClipboardCheck,
  MessageSquare,
  Settings2,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Clock,
  HeartHandshake,
  Lock,
} from "lucide-react";
import heroImg from "@/assets/portaria-hero.jpg";
import conciergeImg from "@/assets/portaria-concierge.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20portaria%2024h.%20Pode%20me%20ajudar%3F";

const ROTINA = [
  { icon: Package, label: "Recebimento de encomendas" },
  { icon: Lock, label: "Controle de acesso" },
  { icon: Users, label: "Fluxo de visitantes" },
  { icon: Bike, label: "Entregas por aplicativo" },
  { icon: Truck, label: "Prestadores de serviço" },
  { icon: Building2, label: "Movimentação constante" },
];

const PILARES = [
  {
    icon: Settings2,
    title: "É organização",
    desc: "Rotina estruturada, processos claros e registros consistentes do que entra e sai.",
  },
  {
    icon: HeartHandshake,
    title: "É apoio",
    desc: "Profissionais presentes, prontos para atender moradores, clientes e fornecedores.",
  },
  {
    icon: MessageSquare,
    title: "É comunicação",
    desc: "Canal direto com a supervisão e resposta rápida quando algo precisa de atenção.",
  },
  {
    icon: ShieldCheck,
    title: "É funcionamento",
    desc: "Operação que não para — turnos cobertos, escalas firmes e tudo em ordem.",
  },
];

const ENTREGAS = [
  "Portaria 24h",
  "Controle de acesso",
  "Controle de visitantes",
  "Apoio operacional",
  "Recebimento de encomendas",
  "Cobertura organizada",
  "Comunicação direta com a supervisão",
  "Profissionais uniformizados",
];

const ATENDIMENTO = [
  { icon: Building2, label: "Condomínios" },
  { icon: Building2, label: "Empresas" },
  { icon: Truck, label: "Transportadoras" },
  { icon: Package, label: "Centros logísticos" },
  { icon: Users, label: "Ambientes corporativos" },
];

export const Route = createFileRoute("/solucoes/portaria-24h")({
  head: () => ({
    meta: [
      { title: "Portaria 24h — GS Serviços Terceirizados" },
      {
        name: "description",
        content:
          "Portaria 24h com presença real: controle de acesso, recebimento de encomendas, fluxo de visitantes e apoio operacional para condomínios e empresas em São Paulo.",
      },
      { property: "og:title", content: "Portaria 24h — GS" },
      {
        property: "og:description",
        content:
          "Seu apoio está aqui. Sempre. Portaria 24h com profissionais preparados, organização e presença operacional.",
      },
      { property: "og:url", content: "/solucoes/portaria-24h" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/solucoes/portaria-24h" }],
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
            alt="Profissional de portaria GS monitorando câmeras em lobby premium"
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
            className="absolute inset-0 bg-gradient-to-t from-background-deep/85 via-transparent to-transparent"
          />

          <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] flex items-center pt-32 pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Soluções GS · Portaria
              </span>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Portaria 24h
                <br />
                <span className="text-primary">Seu apoio está aqui.</span>
                <br />
                <span className="text-primary/90">Sempre.</span>
              </h1>
              <div className="h-[3px] w-24 bg-primary mt-10 mb-7" />
              <p
                className="text-xl md:text-2xl text-white/95 max-w-xl leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                A tecnologia ajuda. Mas presença de verdade tem
                <span className="text-primary font-medium"> rosto, voz e atenção</span> no dia a dia.
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg mt-6 leading-relaxed">
                Hoje, condomínios, empresas e transportadoras precisam de muito mais do que alguém sentado na portaria. Precisam de presença operacional, organização e apoio real na rotina.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/solicitar-proposta"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 hover:border-primary/60 text-white hover:text-primary transition-colors rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Rotina strip */}
          <div className="relative container mx-auto px-6 lg:px-12 -mt-4 pb-12">
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 md:divide-x md:divide-border">
                {ROTINA.map(({ icon: Icon, label }) => (
                  <div key={label} className="md:px-4 text-center">
                    <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                    <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* A PRESENÇA FAZ DIFERENÇA */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={conciergeImg}
                alt="Profissional de portaria GS uniformizado em lobby"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                A presença faz <span className="text-primary">diferença.</span>
              </h2>
              <p className="mt-4 text-lg text-primary/90 font-medium">
                Controle de acesso não é apenas abrir portão.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {PILARES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-1.5">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-base text-muted-foreground leading-relaxed border-l-2 border-primary pl-5">
                Tudo isso exige atenção e presença operacional. É por isso que nossos profissionais estão preparados para atuar com postura, responsabilidade e foco no que realmente importa:
                <span className="text-foreground font-medium"> o bom funcionamento da sua operação.</span>
              </p>
            </div>
          </div>
        </section>

        {/* FAZEMOS O SIMPLES BEM FEITO */}
        <section className="py-24 bg-background-deep relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
            <div className="bg-background/40 border border-border rounded-2xl p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Fazemos o simples
                <br />
                <span className="text-primary">bem feito.</span>
              </h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {ENTREGAS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-white/85 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background/40 border border-border rounded-2xl p-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
                Você não precisa
                <br />
                de mais uma empresa terceirizada.
              </h3>
              <p className="mt-6 text-primary font-semibold uppercase text-sm tracking-wide leading-relaxed">
                Precisa de funcionamento, suporte e presença quando a operação realmente precisa.
              </p>
              <div className="mt-auto pt-8 text-white/80 leading-relaxed">
                <p>Empresas prometem.</p>
                <p className="text-white font-medium">A operação precisa funcionar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ATENDIMENTO PARA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Atendimento para:
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
              {ATENDIMENTO.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-transparent hover:border-primary/30 hover:bg-foreground/[0.03] transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary" strokeWidth={1.2} />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY GS — premium values */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Por que GS
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Uma portaria que sustenta a sua operação.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Cobertura 24/7", desc: "Escalas firmes, turnos sempre cobertos e zero buraco operacional." },
                { icon: Eye, title: "Atenção real", desc: "Profissionais treinados para observar, registrar e agir com critério." },
                { icon: Headphones, title: "Supervisão próxima", desc: "Canal direto entre equipe, supervisão e cliente — sem ruído." },
              ].map(({ icon: Icon, title, desc }) => (
                <article key={title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <Icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </article>
              ))}
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
                  Precisa de uma operação organizada?
                </h3>
                <p className="text-primary-foreground/85 mt-1 text-sm md:text-base">
                  Fale com a GS e solicite uma proposta alinhada à necessidade da sua operação.
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