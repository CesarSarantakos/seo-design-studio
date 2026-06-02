import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProposalSimulator } from "@/components/site/ProposalSimulator";
import {
  Sparkles,
  Users,
  ShieldCheck,
  ThumbsUp,
  BarChart3,
  Building2,
  Truck,
  GraduationCap,
  Stethoscope,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Leaf,
  HeartHandshake,
  Hotel,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5511930494888?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20limpeza%20profissional.%20Pode%20me%20ajudar%3F";

const DESTAQUES = [
  { icon: Sparkles, label: "Ambientes limpos, higienizados e organizados" },
  { icon: Users, label: "Profissionais qualificados, treinados e alinhados" },
  { icon: Calendar, label: "Rotina que funciona, todo dia, consistentemente" },
  { icon: Leaf, label: "Bem-estar, saúde e qualidade de vida para todos" },
  { icon: Building2, label: "Suporte especializado para condomínios, empresas e instituições" },
];

const IMPACTOS = [
  { icon: HeartHandshake, title: "Mais bem-estar", desc: "para moradores, colaboradores e visitantes." },
  { icon: ShieldCheck, title: "Mais segurança", desc: "sanitária e conformidade no dia a dia." },
  { icon: ThumbsUp, title: "Mais organização", desc: "e ambientes sempre prontos para receber." },
  { icon: BarChart3, title: "Menos preocupação", desc: "mais tranquilidade para síndicos e gestores." },
];

const AMBIENTES = [
  { icon: Building2, label: "Condomínios" },
  { icon: Building2, label: "Empresas" },
  { icon: Truck, label: "Transportadoras" },
  { icon: Stethoscope, label: "Clínicas e consultórios" },
  { icon: GraduationCap, label: "Escolas e instituições" },
  { icon: Hotel, label: "Hotéis e hospedagem" },
];

const COMPROMISSO = [
  "Profissionais selecionados e capacitados",
  "Supervisão e acompanhamento constantes",
  "Produtos e equipamentos adequados para cada ambiente",
  "Flexibilidade para atender sua necessidade",
  "Comunicação rápida e suporte próximo",
];

const HERO_IMG = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-31%20at%2013.39.08-fQYpVse6ceeuleRO7EV3aCznKroatc.jpeg";

export const Route = createFileRoute("/solucoes/limpeza-profissional")({
  head: () => ({
    meta: [
      { title: "Limpeza Profissional — GS Serviços Terceirizados" },
      {
        name: "description",
        content:
          "Limpeza profissional que cuida do ambiente e de quem está nele. Equipes treinadas, supervisão constante e rotina que flui para condomínios, empresas e instituições.",
      },
      { property: "og:title", content: "Limpeza Profissional — GS" },
      {
        property: "og:description",
        content:
          "Mais do que limpeza, entregamos bem-estar, organização e funcionamento para o dia a dia.",
      },
      { property: "og:url", content: "/solucoes/limpeza-profissional" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
    links: [{ rel: "canonical", href: "/solucoes/limpeza-profissional" }],
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
            alt="Equipe profissional GS de limpeza uniformizada em ambiente corporativo moderno"
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
            className="absolute inset-0 bg-gradient-to-t from-background-deep/85 via-transparent to-transparent"
          />

          <div className="relative container mx-auto px-6 lg:px-12 min-h-[92vh] flex items-center pt-28 pb-16 md:pt-32 md:pb-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-8 bg-primary" />
                Soluções GS · Limpeza
              </span>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white tracking-tight"
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Cuidar é
                <br />
                <span className="text-primary">manter tudo</span>
                <br />
                <span className="text-primary">funcionando.</span>
              </h1>
              <div className="h-[3px] w-24 bg-primary mt-10 mb-7" />
              <p
                className="text-xl md:text-2xl text-white/95 max-w-xl leading-snug font-light"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
              >
                Cuidar do ambiente é
                <span className="text-primary font-medium"> cuidar de quem está nele.</span>
              </p>
              <p className="text-base md:text-lg text-white/75 max-w-lg mt-6 leading-relaxed">
                Mais do que limpeza, entregamos bem-estar, organização e funcionamento para o dia a dia de condomínios, empresas e instituições.
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4 md:divide-x md:divide-border">
              {DESTAQUES.map(({ icon: Icon, label }) => (
                <div key={label} className="md:px-4 text-center">
                  <Icon className="mx-auto h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-semibold text-foreground leading-tight">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AMBIENTE LIMPO. ROTINA QUE FLUI. */}
        <section className="py-24 bg-foreground/[0.03]">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src="/limpeza-profissional.jpg"
                alt="Corredor moderno hospitalar limpo e brilhante com iluminação profissional"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Ambiente limpo.
                <br />
                <span className="text-primary">Rotina que flui.</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
                A limpeza profissional vai muito além do que se vê. Ela impacta na produtividade, na saúde, na imagem e na experiência de quem vive e trabalha no espaço.
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

        {/* QUANDO FUNCIONA, NINGUÉM PERCEBE */}
        <section className="py-24 bg-background-deep relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
            <div className="bg-background/40 border border-border rounded-2xl p-10 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Quando o ambiente
                <br />
                funciona bem, quase
                <br />
                ninguém percebe.
              </h2>
              <p className="mt-6 text-primary font-semibold text-lg leading-relaxed">
                E esse é exatamente o ponto.
              </p>
              <p className="mt-6 text-white/75 leading-relaxed">
                O cuidado bem feito não chama atenção — ele sustenta o dia a dia silenciosamente, para que ninguém precise se preocupar com o que deveria estar sempre em ordem.
              </p>
            </div>

            <div className="bg-background/40 border border-border rounded-2xl p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight leading-tight">
                Atuamos em diferentes ambientes
                <br />
                <span className="text-white">com o mesmo padrão de cuidado.</span>
              </h3>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {AMBIENTES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-transparent hover:border-primary/30 hover:bg-foreground/[0.04] transition-colors">
                    <Icon className="w-10 h-10 text-primary" strokeWidth={1.3} />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/85 leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOSSO COMPROMISSO */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Nosso compromisso
                <br />
                <span className="text-primary">é com o que realmente importa.</span>
              </h2>
              <ul className="mt-10 space-y-4">
                {COMPROMISSO.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" strokeWidth={2} />
                    </span>
                    <span className="text-base text-foreground/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 to-transparent rounded-3xl blur-2xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-31%20at%2013.43.31-xWLbGUmLr9xqGzGHAr32sQpiPZ7tpP.jpeg"
                alt="Profissional GS limpando corredor enquanto clientes caminham satisfeitos"
                width={1024}
                height={768}
                loading="lazy"
                className="relative rounded-2xl object-cover w-full aspect-[4/3] shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* FORMULÁRIO DE ORÇAMENTO */}
        <section className="py-24 bg-background-deep">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <ProposalSimulator />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
