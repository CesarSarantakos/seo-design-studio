import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Shield,
  Sparkles,
  KeyRound,
  Users,
  Wrench,
  TreePine,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import portariaImg from "@/assets/portaria-hero.jpg";
import limpezaImg from "@/assets/limpeza-hero.jpg";
import recepcaoImg from "@/assets/recepcao-hero.jpg";

type Service = {
  icon: typeof Shield;
  title: string;
  tagline: string;
  desc: string;
  to?: string;
  image?: string;
  highlights: string[];
  available: boolean;
};

const SERVICES: Service[] = [
  {
    icon: Shield,
    title: "Portaria 24h",
    tagline: "Presença que sustenta a operação.",
    desc: "Controle de acesso, recebimento de encomendas e fluxo de visitantes com profissionais preparados, 24 horas por dia.",
    to: "/solucoes/portaria-24h",
    image: portariaImg,
    highlights: ["Cobertura 24/7", "Controle de acesso", "Apoio operacional"],
    available: true,
  },
  {
    icon: Sparkles,
    title: "Limpeza Profissional",
    tagline: "Cuidar é manter tudo funcionando.",
    desc: "Equipes treinadas, supervisão constante e rotina que flui para condomínios, empresas e instituições.",
    to: "/solucoes/limpeza-profissional",
    image: limpezaImg,
    highlights: ["Equipes treinadas", "Supervisão próxima", "Produtos adequados"],
    available: true,
  },
  {
    icon: Users,
    title: "Recepção e Atendimento",
    tagline: "A primeira impressão importa.",
    desc: "Acolhimento, comunicação e postura para representar sua empresa com excelência em cada detalhe.",
    to: "/solucoes/recepcao-e-atendimento",
    image: recepcaoImg,
    highlights: ["Acolhimento", "Atendimento telefônico", "Organização do fluxo"],
    available: true,
  },
  {
    icon: KeyRound,
    title: "Controle de Acesso",
    tagline: "Quem entra, quem sai, sempre sob controle.",
    desc: "Operação e gestão de portarias, controle de visitantes e prestadores com registros consistentes.",
    highlights: ["Registros consistentes", "Gestão de visitantes", "Fluxo organizado"],
    available: false,
  },
  {
    icon: Wrench,
    title: "Manutenção Predial",
    tagline: "Tudo funcionando, sem surpresas.",
    desc: "Manutenção preventiva e corretiva para manter a estrutura do seu ambiente sempre em ordem.",
    highlights: ["Preventiva", "Corretiva", "Equipe multidisciplinar"],
    available: false,
  },
  {
    icon: TreePine,
    title: "Jardinagem",
    tagline: "Áreas verdes que respiram cuidado.",
    desc: "Cuidado com áreas verdes e paisagismo para valorizar e manter o seu espaço sempre acolhedor.",
    highlights: ["Paisagismo", "Áreas verdes", "Manutenção regular"],
    available: false,
  },
];

export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title: "Soluções — GS" },
      { name: "description", content: "Portaria, limpeza, controle de acesso, recepção, manutenção predial e jardinagem com a GS." },
      { property: "og:title", content: "Soluções — GS" },
      { property: "og:description", content: "Conheça nossas soluções de terceirização." },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-40 pb-20 bg-background-deep overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
          />
          <div className="relative container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
              <span className="h-px w-8 bg-primary" />
              Soluções GS
              <span className="h-px w-8 bg-primary" />
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Serviços que cuidam
              <br />
              <span className="text-primary">do que realmente importa.</span>
            </h1>
            <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Da portaria à recepção, da limpeza à manutenção — oferecemos soluções de terceirização com presença, organização e padrão de cuidado em cada detalhe.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-tight">
                Precisa de uma solução sob medida?
              </h3>
              <p className="text-primary-foreground/85 mt-1 text-sm md:text-base">
                Fale com a GS e receba uma proposta alinhada à sua operação.
              </p>
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

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, tagline, desc, to, image, highlights, available } = service;

  const content = (
    <article
      className={`group relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all ${
        available
          ? "hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          : "opacity-90"
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-background-deep">
        {image ? (
          <img
            src={image}
            alt={title}
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background-deep to-foreground/5">
            <Icon className="w-20 h-20 text-primary/30" strokeWidth={1} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background-deep/90 via-background-deep/30 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background-deep/80 backdrop-blur-md border border-primary/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        {!available && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-background-deep/80 backdrop-blur-md border border-border text-white/80">
            Em breve
          </span>
        )}
      </div>

      <div className="p-7">
        <h2 className="text-xl font-bold text-foreground tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-primary font-semibold">{tagline}</p>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{desc}</p>

        <ul className="mt-5 space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-foreground/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={2} />
              {h}
            </li>
          ))}
        </ul>

        {available && (
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
            Conhecer serviço
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </article>
  );

  if (available && to) {
    return (
      <Link to={to} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}