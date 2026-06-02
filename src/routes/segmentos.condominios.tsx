import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProposalCTA } from "@/components/site/ProposalCTA";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Headphones,
  CalendarClock,
  MessageSquare,
  BadgeCheck,
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Shield,
  Sparkles,
  Brush,
  Wrench,
  Leaf,
  Fingerprint,
  UserRound,
  Briefcase,
  Handshake,
  Users,
  Target,
  ClipboardCheck,
  Award,
} from "lucide-react";
import heroImg from "@/assets/condominios-hero.jpg";

export const Route = createFileRoute("/segmentos/condominios")({
  head: () => ({
    meta: [
      { title: "Condomínios — GS" },
      { name: "description", content: "Soluções de terceirização para condomínios residenciais e comerciais: portaria, limpeza, recepção e manutenção com tranquilidade para moradores." },
      { property: "og:title", content: "Condomínios — GS" },
      { property: "og:description", content: "Serviços de terceirização para condomínios com presença e compromisso." },
      { property: "og:url", content: "/segmentos/condominios" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/condominios" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* HERO */}
        <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Portaria de condomínio premium"
              className="w-full h-full object-cover opacity-40 md:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          </div>
          <div className="relative container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                Fazemos o <span className="text-primary">simples</span>
                <br />
                bem feito.
              </h1>
              <div className="mt-6 sm:mt-8 h-1 w-16 sm:w-20 bg-primary rounded-full" />
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-lg text-foreground font-semibold max-w-2xl">
                Gestão terceirizada com presença, cobertura e suporte de verdade para seu condomínio.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  <Link to="/solicitar-proposta">Solicitar proposta</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-card w-full sm:w-auto">
                  <Link to="/solucoes">Conheça as soluções</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques strip */}
        <section className="relative z-10 container mx-auto px-6 lg:px-12 -mt-8 md:-mt-16 max-w-6xl">
          <div className="rounded-2xl border border-border bg-card/95 backdrop-blur p-6 md:p-10 shadow-xl shadow-black/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 md:divide-x md:divide-border">
              <div className="md:px-4 text-center">
                <Users className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">Profissionais alinhados à sua cultura</h3>
              </div>
              <div className="md:px-4 text-center">
                <ClipboardCheck className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">Supervisão constante da operação</h3>
              </div>
              <div className="md:px-4 text-center">
                <CalendarClock className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">Continuidade operacional garantida</h3>
              </div>
              <div className="md:px-4 text-center">
                <Target className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">Foco no crescimento do seu negócio</h3>
              </div>
            </div>
          </div>
        </section>

        {/* A PRESENÇA FAZ A DIFERENÇA */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[460px]">
              <img
                src="/condominios-operacao.jpg"
                alt="Profissional GS em portaria de condomínio atendendo entregador"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/50 to-transparent" />
              <div className="relative p-6 md:p-10 max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Você não precisa de mais uma empresa <span className="text-primary">terceirizada.</span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                  Precisa de suporte, organização e uma operação que funcione no dia a dia.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-10 grid sm:grid-cols-2 gap-6">
              <div>
                <div className="h-14 w-14 rounded-full border border-primary/40 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-sm font-bold tracking-wide text-foreground">A PRESENÇA<br />FAZ A DIFERENÇA.</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Seu condomínio recebe cada vez mais entregas, visitantes e demandas operacionais. Sem organização, o desgaste cai no colo do síndico.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Seu condomínio recebe muita encomenda e demanda?",
                  "Controle de acesso eficiente evita transtornos.",
                  "Equipes preparadas fazem toda a diferença.",
                  "Mais organização, menos reclamações.",
                  "Tranquilidade para síndico, moradores e visitantes.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-center text-lg md:text-2xl font-bold tracking-wide text-foreground">
              SERVIÇOS QUE MANTÊM SEU CONDOMÍNIO <span className="text-primary">FUNCIONANDO</span>
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: UserRound, label: "Portaria", to: "/solucoes/portaria-24h" },
              { icon: Fingerprint, label: "Controle de Acesso", to: "/solucoes" },
              { icon: Brush, label: "Limpeza", to: "/solucoes/limpeza-profissional" },
              { icon: Sparkles, label: "Zeladoria", to: "/solucoes" },
              { icon: Wrench, label: "Manutenção", to: "/solucoes" },
              { icon: Leaf, label: "Jardinagem", to: "/solucoes" },
              { icon: ShieldCheck, label: "Ronda Patrimonial", to: "/solucoes" },
            ].map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="group flex flex-col items-center text-center gap-3 p-3 rounded-xl hover:bg-card transition-colors"
              >
                <div className="h-14 w-14 rounded-full border border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
                  <s.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight">{s.label}</span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Profissionais treinados, processos bem definidos e supervisão constante para{" "}
            <span className="text-primary font-medium">reduzir problemas e gerar tranquilidade.</span>
          </p>
        </section>

        {/* CTA PARA PROPOSTA */}
        <section className="py-24 bg-background-deep">
          <div className="container mx-auto px-6 lg:px-12">
            <ProposalCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
