import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PremiumCTA } from "@/components/site/PremiumCTA";
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
  Clock,
  HeartHandshake,
  Lock,
} from "lucide-react";
import heroImg from "@/assets/portaria-24h-hero.jpg";
import presencaImg from "@/assets/presenca-faz-diferenca.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20portaria%2024h.%20Pode%20me%20ajudar%3F";

const ROTINA = [
  { icon: Package, label: "Recebimento de encomendas" },
  { icon: Lock, label: "Controle de acesso" },
  { icon: Users, label: "Fluxo de visitantes" },
  { icon: Bike, label: "Controle de entregas por aplicativo" },
  { icon: Truck, label: "Controle de Prestadores de serviço" },
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
        <section className="relative w-full min-h-screen md:min-h-[92vh] overflow-hidden bg-background-deep">
          <img
            src={heroImg}
            alt="Profissionais de portaria GS interagindo com cliente em cadeira de rodas no saguão corporativo"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background-deep from-10% via-background-deep/80 via-50% to-background-deep/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-background-deep/30 via-background-deep/40 to-background-deep/80"
          />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen md:min-h-[92vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <div className="max-w-2xl w-full">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 sm:mb-6">
                <span className="h-px w-6 sm:w-8 bg-primary" />
                Soluções GS · Portaria
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] sm:leading-[1.05] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Portaria 24h
                <br />
                <span className="text-primary">Nosso cuidado garante</span>
                <br />
                <span className="text-primary/90">A sua segurança.</span>
              </h1>
              <div className="h-[2px] sm:h-[3px] w-16 sm:w-24 bg-primary mt-6 sm:mt-10 mb-5 sm:mb-7" />
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-xl leading-snug sm:leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                A tecnologia ajuda. Mas presença de verdade tem
                <span className="text-primary font-medium"> rosto, voz e atenção</span> no dia a dia.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/75 max-w-lg mt-4 sm:mt-6 leading-relaxed">
                Hoje, condomínios, empresas e transportadoras precisam de muito mais do que alguém sentado na portaria. Precisam de presença operacional, organização e apoio real na rotina.
              </p>
              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/solicitar-proposta"
                  className="group inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 w-full sm:w-auto"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform hidden sm:inline" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/20 hover:border-primary/60 text-white hover:text-primary transition-colors rounded-full px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider backdrop-blur-sm w-full sm:w-auto"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rotina strip */}
        <section className="relative z-10 container mx-auto px-6 lg:px-12 -mt-8 md:-mt-16">
          <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 md:p-10 shadow-xl shadow-black/10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-0 gap-y-6 md:gap-y-8 md:divide-x md:divide-border">
              {ROTINA.map(({ icon: Icon, label }, index) => (
                <div key={label} className="md:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                  <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A PRESENÇA FAZ DIFERENÇA */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={presencaImg}
                alt="Profissional de portaria GS com rádio comunicador interagindo com cliente em carro"
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

        {/* CTA PARA PROPOSTA */}
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  );
}
