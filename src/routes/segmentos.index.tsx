import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Building2, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import empresasImg from "@/assets/empresa-hero.jpg";
import condominiosImg from "@/assets/condominio-hero.jpg";

type Segment = {
  icon: typeof Building2;
  title: string;
  tagline: string;
  desc: string;
  to: string;
  image: string;
  highlights: string[];
};

const SEGMENTS: Segment[] = [
  {
    icon: Building2,
    title: "Empresas",
    tagline: "Gestão operacional para seu negócio crescer.",
    desc: "Portaria, limpeza, recepção e manutenção. Profissionais preparados para cuidar da operação enquanto você foca no crescimento.",
    to: "/segmentos/empresas",
    image: empresasImg,
    highlights: ["Portaria 24h", "Limpeza profissional", "Recepção e atendimento", "Supervisão próxima"],
  },
  {
    icon: Home,
    title: "Condomínios",
    tagline: "Segurança e organização para o seu condomínio.",
    desc: "Portaria, limpeza, manutenção e zeladoria. Presença constante para garantir tranquilidade e padrão de qualidade.",
    to: "/segmentos/condominios",
    image: condominiosImg,
    highlights: ["Portaria 24h", "Limpeza especializada", "Manutenção predial", "Atendimento ao síndico"],
  },
];

export const Route = createFileRoute("/segmentos/")({
  head: () => ({
    meta: [
      { title: "Segmentos — GS" },
      { name: "description", content: "Conheça os segmentos atendidos pela GS: empresas e condomínios com soluções de terceirização completas." },
      { property: "og:title", content: "Segmentos — GS" },
      { property: "og:description", content: "Empresas e condomínios com soluções de terceirização completas." },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
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
              Segmentos GS
              <span className="h-px w-8 bg-primary" />
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Soluções completas
              <br />
              <span className="text-primary">para cada segmento.</span>
            </h1>
            <p className="mt-8 text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
              Empresas e condomínios que confiam na GS para terceirização com presença, organização e padrão de cuidado em cada detalhe.
            </p>
          </div>
        </section>

        {/* GRID */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {SEGMENTS.map((segment) => (
                <SegmentCard key={segment.title} segment={segment} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground uppercase tracking-tight">
                Pronto para transformar sua operação?
              </h3>
              <p className="text-primary-foreground/85 mt-1 text-sm md:text-base">
                Conheça as soluções GS e receba uma proposta sob medida.
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

function SegmentCard({ segment }: { segment: Segment }) {
  const { icon: Icon, title, tagline, desc, to, image, highlights } = segment;

  return (
    <Link to={to} className="block h-full">
      <article className="group relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden bg-background-deep">
          <img
            src={image}
            alt={title}
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-deep/90 via-background-deep/30 to-transparent" />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background-deep/80 backdrop-blur-md border border-primary/30 flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
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

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
            Conhecer segmento
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
