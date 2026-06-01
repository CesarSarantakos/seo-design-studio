import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Users,
  MessageCircle,
  UserCheck,
  CalendarCheck,
  Phone,
  Smile,
  Building2,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Heart,
  Stethoscope,
  GraduationCap,
  Truck,
  ClipboardList,
  Eye,
} from "lucide-react";
import heroImg from "@/assets/recepcao-hero.jpg";
import detailImg from "@/assets/recepcao-detail.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20recep%C3%A7%C3%A3o%20e%20atendimento.%20Pode%20me%20ajudar%3F";

const DESTAQUES = [
  { icon: Users, label: "Acolhimento genuíno e cordial" },
  { icon: MessageCircle, label: "Comunicação clara e eficiente" },
  { icon: UserCheck, label: "Profissionalismo e discrição" },
  { icon: CalendarCheck, label: "Organização e controle total" },
  { icon: Phone, label: "Atendimento telefônico preparado" },
];

const PILARES = [
  {
    icon: Smile,
    title: "Receber bem",
    desc: "Cada pessoa que chega é recebida com atenção, respeito e cordialidade.",
  },
  {
    icon: Building2,
    title: "Organizar fluxos",
    desc: "Controle de acesso, visitantes, prestadores e correspondências.",
  },
  {
    icon: Headphones,
    title: "Atender com eficiência",
    desc: "Atendimento telefônico e informações com clareza e agilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Representar sua empresa",
    desc: "Profissionais alinhados à cultura e aos valores do seu negócio.",
  },
];

const AMBIENTES = [
  { icon: Building2, label: "Empresas" },
  { icon: Stethoscope, label: "Clínicas e consultórios" },
  { icon: Building2, label: "Condomínios corporativos" },
  { icon: Truck, label: "Transportadoras e centros logísticos" },
  { icon: Building2, label: "Escritórios e coworkings" },
  { icon: GraduationCap, label: "Instituições e escolas" },
];

const COMPROMISSO = [
  { icon: Users, label: "Profissionais selecionados e treinados" },
  { icon: ShieldCheck, label: "Postura, discrição e responsabilidade" },
  { icon: CalendarCheck, label: "Rotinas e procedimentos bem definidos" },
  { icon: ClipboardList, label: "Suporte e supervisão contínuos" },
  { icon: Eye, label: "Foco na excelência do atendimento" },
];

export const Route = createFileRoute("/solucoes/recepcao-e-atendimento")({
  head: () => ({
    meta: [
      { title: "Recepção e Atendimento — GS Serviços Terceirizados" },
      {
        name: "description",
        content:
          "Recepção e atendimento que representam sua empresa: acolhimento, comunicação, postura e organização para empresas, clínicas, condomínios e instituições.",
      },
      { property: "og:title", content: "Recepção e Atendimento — GS" },
      {
        property: "og:description",
        content:
          "Acolhimento e atendimento para todos. A primeira impressão importa — e a GS está pronta para representar sua empresa.",
      },
      { property: "og:url", content: "/solucoes/recepcao-e-atendimento" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/solucoes/recepcao-e-atendimento" }],
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
            alt="Recepcionista GS uniformizada acolhendo visitantes em lobby corporativo premium"
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

          <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Soluções GS · Recepção
              </span>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Acolher bem
                <br />
                <span className="text-primary">é mais do que atender.</span>
              </h1>
              <div className="h-[3px] w-24 bg-primary mt-10 mb-7" />
              <p
                className="text-xl md:text-2xl text-white/95 max-w-xl leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                Acolhimento e atendimento para todos.{" "}
                <span className="text-primary font-medium">A primeira impressão importa.</span>
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg mt-6 leading-relaxed">
                Mais do que atender, nossa equipe representa sua empresa com cordialidade, postura e atenção em cada detalhe.
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
        </section>

        {/* Destaques strip */}
        <section className="relative z-10 container mx-auto px-6 lg:px-12 -mt-8 md:-mt-16">
          <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 md:p-10 shadow-xl shadow-black/10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-0 gap-y-6 md:gap-y-8 md:divide-x md:divide-border">
              {DESTAQUES.map(({ icon: Icon, label }) => (
                <div key={label} className="md:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                  <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ATENDIMENTO TAMBÉM É PRESENÇA */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Atendimento{" "}
                <span className="text-primary">também é presença.</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Hoje, empresas precisam muito mais do que alguém atrás de um balcão.
              </p>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Precisam de comunicação, postura, organização e direcionamento para que tudo funcione melhor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILARES.map(({ icon: Icon, title, desc }) => (
                <article
                  key={title}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUEM CHEGA, PERCEBE */}
        <section className="py-24 bg-background-deep relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="relative rounded-2xl overflow-hidden min-h-[380px] shadow-2xl">
              <img
                src={detailImg}
                alt="Lobby corporativo organizado com recepção profissional GS"
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="bg-background/40 border border-border rounded-2xl p-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Quem chega,
                <br />
                <span className="text-primary">percebe.</span>
              </h2>
              <p className="mt-6 text-white/85 leading-relaxed">
                Ambientes organizados e profissionais preparados transmitem confiança, cuidado e credibilidade.
              </p>
              <p className="mt-4 text-primary font-semibold">
                E isso faz toda a diferença.
              </p>
            </div>
          </div>
        </section>

        {/* Values and Commitment Section */}
        <section className="py-24 bg-background">
          <style>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(40px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-40px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            .section-title {
              animation: slideInUp 0.7s ease-out;
            }
            
            .card-left {
              animation: slideInLeft 0.6s ease-out both;
            }
            
            .card-right {
              animation: slideInUp 0.6s ease-out both;
            }
            
            .card-left:nth-child(1) { animation-delay: 0.1s; }
            .card-left:nth-child(2) { animation-delay: 0.2s; }
            .card-left:nth-child(3) { animation-delay: 0.3s; }
            .card-left:nth-child(4) { animation-delay: 0.4s; }
            .card-left:nth-child(5) { animation-delay: 0.5s; }
            .card-left:nth-child(6) { animation-delay: 0.6s; }
            
            .card-right:nth-child(1) { animation-delay: 0.15s; }
            .card-right:nth-child(2) { animation-delay: 0.25s; }
            .card-right:nth-child(3) { animation-delay: 0.35s; }
            .card-right:nth-child(4) { animation-delay: 0.45s; }
            .card-right:nth-child(5) { animation-delay: 0.55s; }
          `}</style>
          
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center mb-16 section-title">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Nossa abordagem
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Onde começam
                <br className="hidden sm:block" />
                <span className="text-primary">ambientes acolhedores.</span>
              </h2>
              <p className="mt-6 text-neutral-300 text-lg leading-relaxed max-w-xl mx-auto">
                A recepção é o coração do seu ambiente. Transformamos esse espaço em uma experiência de qualidade e cuidado.
              </p>
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Ambientes */}
              <div className="space-y-4">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Áreas de atuação</p>
                  <h3 className="text-2xl font-bold text-white">Atuamos em diversos segmentos</h3>
                </div>
                
                <div className="space-y-3">
                  {AMBIENTES.map(({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className="card-left group relative flex items-center gap-4 p-4 rounded-lg border border-neutral-700 hover:border-primary/50 bg-neutral-950/40 hover:bg-neutral-900/60 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center group-hover:from-primary/20 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">{label}</p>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-primary/50" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Compromisso */}
              <div className="space-y-4">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Nosso compromisso</p>
                  <h3 className="text-2xl font-bold text-white">Qualidade em cada detalhe</h3>
                </div>

                <div className="space-y-3">
                  {COMPROMISSO.map(({ icon: Icon, label }, index) => (
                    <div
                      key={label}
                      className="card-right group relative flex items-start gap-4 p-4 rounded-lg border border-neutral-700 hover:border-primary/50 bg-neutral-950/40 hover:bg-neutral-900/60 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="relative w-12 h-12 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center group-hover:from-primary/20 transition-colors duration-300">
                          <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                      <p className="text-sm font-medium text-neutral-100 pt-1 group-hover:text-white transition-colors leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Highlight Box */}
                <div className="mt-6 p-6 rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-colors duration-300 group">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="font-semibold text-white mb-1">Acolher bem é mais do que atender.</p>
                      <p className="text-sm text-neutral-300">É cuidar da experiência de cada pessoa que entra no seu ambiente.</p>
                    </div>
                  </div>
                </div>
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
                  Precisa de um atendimento que representa sua empresa?
                </h3>
                <p className="text-primary-foreground/85 mt-1 text-sm md:text-base">
                  Fale com a GS e solicite uma proposta personalizada para a sua necessidade.
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
