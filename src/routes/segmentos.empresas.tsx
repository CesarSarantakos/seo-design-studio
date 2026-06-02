import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Users,
  ShieldCheck,
  Handshake,
  CalendarClock,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Building2,
  Clock,
  TrendingUp,
  Headphones,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20terceiriza%C3%A7%C3%A3o%20de%20empresas.%20Pode%20me%20ajudar%3F";

const DESTAQUES = [
  { icon: Users, label: "Profissionais alinhados à sua cultura" },
  { icon: ShieldCheck, label: "Supervisão constante da operação" },
  { icon: CalendarClock, label: "Continuidade operacional garantida" },
  { icon: TrendingUp, label: "Foco no crescimento do seu negócio" },
];

const IMPACTOS = [
  { icon: Clock, title: "Mais tempo", desc: "para gestão e crescimento." },
  { icon: BarChart3, title: "Mais eficiência", desc: "menos retrabalho e falhas." },
  { icon: ShieldCheck, title: "Mais segurança", desc: "operacional e continuidade." },
  { icon: Handshake, title: "Mais resultados", desc: "com parceria de verdade." },
];

const HERO_IMG = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-01%20at%2019.09.55-PcOAEpuKKTfamQzf7SGyndRGK9bJBn.jpeg";

export const Route = createFileRoute("/segmentos/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas — Soluções de Terceirização GS" },
      {
        name: "description",
        content:
          "Terceirização de serviços para empresas: portaria, limpeza, recepção e manutenção com profissionais qualificados, supervisão constante e resultados comprovados.",
      },
      { property: "og:title", content: "Empresas — GS Serviços Terceirizados" },
      {
        property: "og:description",
        content:
          "Mais tempo para sua gestão. Mais organização na operação. Terceirização que gera resultados.",
      },
      { property: "og:url", content: "/segmentos/empresas" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
    links: [{ rel: "canonical", href: "/segmentos/empresas" }],
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
            src={HERO_IMG}
            alt="Executivo profissional em escritório corporativo moderno com logo GS"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
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
                Segmentos · Empresas
              </span>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Seu tempo
                <br />
                <span className="text-primary">importa.</span>
              </h1>
              <div className="h-[3px] w-24 bg-primary mt-10 mb-7" />
              <p
                className="text-xl md:text-2xl text-white/95 max-w-xl leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                <span className="text-primary font-medium">Terceirize com a GS.</span> Você cuida do crescimento, nós cuidamos da operação.
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg mt-6 leading-relaxed">
                Profissionais qualificados, supervisão constante e continuidade operacional. Mais organização, menos preocupação.
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 md:divide-x md:divide-border">
              {DESTAQUES.map(({ icon: Icon, label }) => (
                <div key={label} className="md:px-4 text-center">
                  <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPERAÇÃO QUE FUNCIONA. GESTÃO QUE CRESCE. */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-29%20at%2010.55.29-6916ubgJxoHY2XRwM1M1CWxFL2lyVe.jpeg"
                alt="Equipe GS em ação: recepcionista, colaboradora de limpeza, cliente e executivo em ambiente corporativo profissional"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Operação que
                <br />
                <span className="text-primary">funciona.</span>
                <br />
                Gestão que
                <br />
                <span className="text-primary">cresce.</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
                Enquanto você concentra esforços no crescimento do negócio, nós garantimos que a operação funcione com qualidade, consistência e profissionalismo.
              </p>

              <div className="mt-10 h-px w-full bg-border" />

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                {IMPACTOS.map(({ icon: Icon, title, desc }) => (
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
            </div>
          </div>
        </section>

        {/* QUANDO FUNCIONA BEM, NINGUÉM PERCEBE */}
        <section className="pt-0 pb-24 bg-background-deep relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-6">
              {/* Left column - Title & Content */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                  Quando a operação
                  <br />
                  funciona bem,
                  <br />
                  <span className="text-primary">ninguém percebe.</span>
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
                
                <div className="space-y-6">
                  <p className="text-lg text-white/85 leading-relaxed font-light">
                    E esse é exatamente o ponto. O cuidado profissional não chama atenção — ele sustenta o dia a dia silenciosamente.
                  </p>
                  <p className="text-base text-white/70 leading-relaxed">
                    Para que você possa focar no que realmente importa: fazer seu negócio crescer.
                  </p>
                </div>
              </div>

              {/* Right column - Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="mb-6 inline-block p-4 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <Clock className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Você foca no que é importante.
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Deixe a operação com a GS e concentre seus esforços no crescimento do seu negócio.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="mb-6 inline-block p-4 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <CheckCircle2 className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Nós garantimos continuidade.
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Profissionais qualificados, supervisão constante e reposição rápida em qualquer situação.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="mb-6 inline-block p-4 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <Users className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Equipe comprometida.
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Seleção rigorosa, treinamento contínuo e alinhamento com sua cultura organizacional.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/60 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="mb-6 inline-block p-4 bg-primary/15 rounded-xl group-hover:bg-primary/25 transition-colors">
                    <Headphones className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    Suporte próximo.
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Comunicação transparente, relatórios detalhados e gestão proativa de demandas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
