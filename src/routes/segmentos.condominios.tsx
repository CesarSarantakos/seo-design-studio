import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
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
import heroImg from "@/assets/condominio-hero.jpg";
import entregaImg from "@/assets/condominio-entrega.jpg";

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
        <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Portaria de condomínio premium"
              className="w-full h-full object-cover opacity-40 md:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          </div>
          <div className="relative container mx-auto px-6 max-w-6xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                FAZEMOS O<br />
                <span className="text-primary">SIMPLES</span>
                <br />
                BEM FEITO.
              </h1>
              <div className="mt-6 h-1 w-16 bg-primary rounded-full" />
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg">
                Gestão terceirizada com presença, cobertura e suporte de verdade para o seu condomínio.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/solicitar-proposta">Solicitar proposta</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-card">
                  <Link to="/solucoes">Conheça as soluções</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="container mx-auto px-6 max-w-6xl -mt-2 md:-mt-6">
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 md:divide-x md:divide-border">
              {[
                { icon: Headphones, title: "Cobertura de pronta resposta", desc: "Reposição ágil para não deixar a operação na mão." },
                { icon: CalendarClock, title: "Escalas organizadas", desc: "Planejamento inteligente para evitar falhas e sobrecargas." },
                { icon: MessageSquare, title: "Comunicação direta com a gestão", desc: "Fale com quem decide. Mais agilidade, menos burocracia." },
                { icon: BadgeCheck, title: "Menos rotatividade operacional", desc: "Processos de seleção e acompanhamento que fazem a diferença." },
                { icon: HeartHandshake, title: "Suporte próximo ao síndico", desc: "Acompanhamento constante para trazer tranquilidade." },
              ].map((d) => (
                <div key={d.title} className="md:px-4 text-center">
                  <d.icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{d.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A PRESENÇA FAZ A DIFERENÇA */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[460px]">
              <img
                src={entregaImg}
                alt="Entrega em condomínio"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
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

        {/* PILARES */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="bg-card/60 rounded-2xl p-6 md:p-10 grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Handshake, title: "Parceria de verdade", desc: "Relacionamento baseado em confiança, transparência e diálogo." },
              { icon: Users, title: "Gestão presente", desc: "Liderança próxima, acompanhando e apoiando a operação diariamente." },
              { icon: Target, title: "Foco em resultado", desc: "Nosso compromisso é com a eficiência e a qualidade do serviço." },
              { icon: Shield, title: "Tranquilidade para você e seu condomínio", desc: "Menos dor de cabeça, mais segurança e qualidade no dia a dia." },
            ].map((p) => (
              <div key={p.title}>
                <p.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24 mb-16">
          <div className="rounded-2xl bg-[color:var(--background-deep)] border border-border p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="h-16 w-16 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Seu condomínio merece o <span className="text-primary">melhor.</span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  Profissionais comprometidos, processos organizados e suporte que você pode contar.
                </p>
              </div>
              <div className="flex flex-col items-stretch md:items-end gap-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/solicitar-proposta">Solicitar proposta</Link>
                </Button>
                <p className="text-xs text-muted-foreground text-center md:text-right">
                  Atendimento rápido e direto com a gestão.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {[
                { icon: ShieldCheck, label: "EMPRESA REGULARIZADA E EM CONFORMIDADE" },
                { icon: Users, label: "SELEÇÃO RIGOROSA E TREINAMENTO" },
                { icon: ClipboardCheck, label: "SUPERVISÃO CONSTANTE" },
                { icon: Award, label: "COMPROMISSO COM SEU CONDOMÍNIO" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <t.icon className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[11px] md:text-xs font-semibold text-foreground tracking-wide leading-tight">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
