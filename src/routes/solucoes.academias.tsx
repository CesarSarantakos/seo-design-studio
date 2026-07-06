import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PremiumCTA } from "@/components/site/PremiumCTA";
import {
  ArrowRight,
  Bath,
  DoorClosed,
  UserX,
  Dumbbell,
  Trash2,
  SprayCan,
  Settings,
  ShowerHead,
  PackageOpen,
  UserRound,
  RefreshCw,
  Users,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  MessageCircle,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20apoio%20operacional%20para%20academias.%20Pode%20me%20ajudar%3F";

const HERO_IMG = "/images/academias-hero.jpg";

// Seção "Um aluno não cancela apenas pelo treino"
const CANCELA = [
  { icon: Bath, label: "Banheiro sem reposição" },
  { icon: DoorClosed, label: "Vestiário desorganizado" },
  { icon: UserX, label: "Recepção sem suporte" },
  { icon: Dumbbell, label: "Equipamentos sem acompanhamento" },
  { icon: Trash2, label: "Falta de padrão operacional" },
];

// Seção "Apoio operacional para academias"
const APOIO = [
  { image: "/images/academia-limpeza-salas.png", icon: SprayCan, label: "Limpeza de salas e áreas comuns" },
  { image: "/images/academia-organizacao.png", icon: Settings, label: "Organização operacional" },
  { image: "/images/academia-vestiarios.png", icon: ShowerHead, label: "Limpeza de vestiários e banheiros" },
  { image: "/images/academia-insumos.png", icon: PackageOpen, label: "Reposição de insumos" },
  { image: "/images/academia-recepcao.png", icon: UserRound, label: "Recepção e atendimento" },
  { image: "/images/academia-cobertura.png", icon: RefreshCw, label: "Cobertura de ausências" },
];

// Seção "Mais do que mão de obra"
const CONTINUIDADE = [
  { icon: Users, label: "Profissionais uniformizados" },
  { icon: ClipboardCheck, label: "Supervisão constante" },
  { icon: ShieldCheck, label: "Cobertura de faltas" },
  { icon: BarChart3, label: "Baixo turnover" },
  { icon: MessageCircle, label: "Atendimento rápido" },
  { icon: Handshake, label: "Gestão próxima" },
];

// Seção "Sua unidade é avaliada todos os dias"
const IMPACTOS = [
  "Avaliação dos alunos (NPS)",
  "Experiência do aluno",
  "Pontuação em auditorias",
  "Retenção e fidelização",
  "Imagem da unidade e da marca",
  "Resultados da unidade",
];

export const Route = createFileRoute("/solucoes/academias")({
  head: () => ({
    meta: [
      { title: "Soluções para Academias — GS Serviços Terceirizados" },
      {
        name: "description",
        content:
          "Limpeza, recepção e apoio operacional para academias que valorizam a experiência dos alunos. Continuidade operacional com profissionais uniformizados e supervisão constante.",
      },
      { property: "og:title", content: "Soluções para Academias — GS" },
      {
        property: "og:description",
        content:
          "Sua academia vende experiência. Nós ajudamos a mantê-la todos os dias.",
      },
      { property: "og:url", content: "/solucoes/academias" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
    links: [{ rel: "canonical", href: "/solucoes/academias" }],
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
            alt="Alunos treinando em academia moderna com estrutura organizada"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/85 to-background-deep/30"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-background-deep/90 via-transparent to-transparent"
          />

          <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Soluções operacionais para academias
              </span>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.03] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Sua academia vende{" "}
                <span className="text-primary">experiência.</span>
                <br />
                Nós ajudamos a mantê-la todos os dias.
              </h1>
              <p
                className="mt-8 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                Limpeza, recepção e apoio operacional para academias que valorizam a experiência dos alunos.
              </p>
              <p className="mt-8 flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-wide text-white">
                <span className="h-6 w-1 bg-primary" />
                Fazemos o simples <span className="text-primary">bem feito.</span>
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

        {/* UM ALUNO NÃO CANCELA APENAS PELO TREINO */}
        <section className="py-20 md:py-24 bg-background-deep">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Um aluno não cancela{" "}
                  <span className="text-primary">apenas pelo treino.</span>
                </h2>
                <p className="mt-4 text-lg text-white/75 leading-relaxed">
                  Ele cancela pela soma de pequenas experiências.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 lg:divide-x lg:divide-border">
                {CANCELA.map(({ icon: Icon, label }) => (
                  <div key={label} className="lg:px-3 text-center">
                    <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                    <p className="mt-3 text-xs font-medium text-white/80 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-border text-center">
              <p className="text-base md:text-lg text-white/70">
                Quando isso acontece diariamente, o{" "}
                <span className="text-primary font-semibold">impacto aparece na retenção.</span>
              </p>
            </div>
          </div>
        </section>

        {/* APOIO OPERACIONAL PARA ACADEMIAS */}
        <section className="py-20 md:py-28 bg-background" style={{ fontSize: 0 }}>
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Apoio operacional <span className="text-primary">para academias</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mt-5" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {APOIO.map(({ image, icon: Icon, label }) => (
                <article key={label} className="group text-center">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg shadow-black/10">
                    <img
                      src={image}
                      alt={label}
                      width={600}
                      height={450}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-deep/80 via-background-deep/10 to-transparent" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background-deep/85 backdrop-blur-md border border-primary/40 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm md:text-base font-semibold text-foreground leading-tight px-2">
                    {label}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MAIS DO QUE MÃO DE OBRA */}
        <section className="py-20 md:py-24 bg-background-deep relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src="/images/academias-colaboradora.jpg"
                alt="Profissional GS uniformizada higienizando equipamento em academia"
                width={1024}
                height={768}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Mais do que mão de obra.
                <br />
                Entregamos{" "}
                <span className="text-primary">continuidade operacional.</span>
              </h2>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                {CONTINUIDADE.map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center sm:text-left">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-semibold text-white/85 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SUA UNIDADE É AVALIADA TODOS OS DIAS */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
              <div className="w-28 h-28 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-14 h-14 text-primary" strokeWidth={1.3} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                  Sua unidade é avaliada{" "}
                  <span className="text-primary">todos os dias.</span>
                </h2>
                <p className="mt-4 text-lg font-semibold text-foreground/90">
                  Não apenas pela auditoria.
                </p>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-md">
                  Mas por cada aluno que utiliza o vestiário, os equipamentos, os banheiros e as áreas comuns.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
              <p className="text-base md:text-lg font-semibold text-foreground mb-6">
                A limpeza e a organização impactam diretamente:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {IMPACTOS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                    </span>
                    <span className="text-sm md:text-base text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="relative overflow-hidden bg-background-deep">
          <img
            src={HERO_IMG}
            alt=""
            aria-hidden="true"
            width={1920}
            height={600}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-background-deep via-background-deep/90 to-background-deep/50"
          />
          <div className="relative container mx-auto px-6 lg:px-12 py-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Sua academia está preparada para crescer sem perder{" "}
                <span className="text-primary">qualidade operacional?</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-white/80">
                Fale com a GS e descubra como podemos ajudar.
              </p>
              <p className="mt-4 flex items-center justify-center lg:justify-start gap-3 text-sm md:text-base font-bold uppercase tracking-wide text-white">
                <span className="h-5 w-1 bg-primary" />
                Fazemos o simples <span className="text-primary">bem feito.</span>
              </p>
            </div>
            <Link
              to="/solicitar-proposta"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 shrink-0"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* FORMULÁRIO DE ORÇAMENTO */}
        <section className="pt-0 pb-24 bg-background-deep">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <PremiumCTA />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
