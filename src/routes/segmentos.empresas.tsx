import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Clock,
  ShieldCheck,
  TrendingUp,
  Settings,
  Handshake,
  XCircle,
  CalendarClock,
  Cog,
  BarChart3,
  ShieldHalf,
  Users,
  ClipboardCheck,
  Award,
  UserRound,
  Brush,
  Headphones,
  Fingerprint,
  Leaf,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/empresa-hero.jpg";

export const Route = createFileRoute("/segmentos/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas — GS" },
      { name: "description", content: "Soluções de terceirização para empresas: portaria, limpeza, recepção e manutenção com presença e compromisso." },
      { property: "og:title", content: "Empresas — GS" },
      { property: "og:description", content: "Serviços de terceirização para empresas com presença e compromisso." },
      { property: "og:url", content: "/segmentos/empresas" },
    ],
    links: [{ rel: "canonical", href: "/segmentos/empresas" }],
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
              alt="Reunião corporativa premium"
              className="w-full h-full object-cover opacity-40 md:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          </div>
          <div className="relative container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                Seu tempo importa.
                <br />
                <span className="text-primary">Terceirize.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl font-semibold text-foreground max-w-2xl">
                Mais gestão fica com a GS.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Enquanto você cuida do crescimento do negócio, nós cuidamos das pessoas, da rotina operacional e da continuidade dos serviços.
              </p>
              <p className="mt-6 text-lg md:text-xl font-bold text-primary max-w-2xl leading-relaxed">
                Mais organização. Mais presença. Menos preocupação.
              </p>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/solucoes">Conheça nossas soluções para empresas</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex absolute right-6 bottom-6 items-center gap-3 bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-3">
              <Handshake className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <div className="text-sm">
                <p className="text-foreground font-semibold">Parceria que gera <span className="text-primary">confiança.</span></p>
                <p className="text-muted-foreground text-xs">Soluções que geram <span className="text-primary">resultados.</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS PRINCIPAIS */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Profissionais alinhados à sua cultura
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Selecionados, treinados e preparados para representar sua empresa com profissionalismo e responsabilidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Supervisão constante
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Acompanhamento próximo da operação para manter o padrão, a organização e a continuidade dos serviços.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Parceria que gera resultados
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Mais do que fornecer mão de obra, atuamos como parceiros na construção de uma operação eficiente e confiável.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <CalendarClock className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                    Continuidade operacional
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                    Cobertura rápida de faltas, férias e afastamentos para que sua rotina nunca pare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - Full width */}
          <div className="bg-[color:var(--background-deep)] rounded-2xl p-6 md:p-8 border border-primary/30">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  Mais tempo para sua gestão
                </h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  Deixe a operação com a GS e concentre seus esforços no crescimento do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* PAIN */}
            <div className="bg-card rounded-2xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                Está difícil encontrar profissionais{" "}
                <span className="text-primary">com vontade e comprometimento?</span>
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Alta rotatividade e falta de profissionais",
                  "Dificuldade de encontrar pessoas com vontade de trabalhar",
                  "Chegam, não se adaptam e pedem para sair",
                  "Faltas sem aviso e sem reposição",
                  "Retrabalho, desorganização e perda de produtividade",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
                Enquanto você perde tempo resolvendo problemas, a{" "}
                <span className="text-foreground font-semibold">GS cuida da sua operação com seriedade, presença e continuidade.</span>
              </p>
            </div>

            {/* SOLUTION */}
            <div className="bg-[color:var(--background-deep)] border border-border rounded-2xl p-6 md:p-10">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                    Tempo é o ativo<br />mais precioso.
                  </h3>
                  <p className="mt-3 text-lg md:text-xl font-bold text-primary leading-tight">
                    Valorize seu tempo.<br />Terceirize com a GS.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
                {[
                  { icon: CalendarClock, title: "Você foca no que faz sua empresa crescer." },
                  { icon: Cog, title: "A GS cuida da operação para você." },
                  { icon: BarChart3, title: "Mais produtividade, menos problemas, mais resultados." },
                  { icon: ShieldHalf, title: "Tranquilidade para tomar decisões." },
                ].map((b) => (
                  <div key={b.title}>
                    <b.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                    <p className="mt-3 text-xs text-muted-foreground leading-snug">{b.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <div className="bg-card/60 rounded-2xl p-6 md:p-10">
            <div className="flex items-start md:items-center gap-4 mb-8">
              <Clock className="h-10 w-10 text-primary flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                  Tempo perdido com problemas operacionais custa caro.
                </h2>
                <p className="text-lg md:text-xl font-bold text-primary">
                  A GS garante que sua operação funcione.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-6 border-t border-border">
              {[
                { icon: Users, title: "Profissionais qualificados", desc: "Selecionamos e treinamos os melhores para entregar desempenho e confiança." },
                { icon: ClipboardCheck, title: "Processos padronizados", desc: "Rotinas e procedimentos definidos para garantir qualidade todos os dias." },
                { icon: ShieldCheck, title: "Supervisão constante", desc: "Acompanhamento próximo para manter o padrão e corrigir rapidamente." },
                { icon: BarChart3, title: "Resultados comprovados", desc: "Menos falhas, mais eficiência e indicadores que mostram a diferença." },
              ].map((g) => (
                <div key={g.title}>
                  <g.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-3 text-sm font-bold text-foreground">{g.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-10">
            Soluções completas <span className="text-primary">para sua empresa</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: UserRound, label: "Portaria Empresarial", to: "/solucoes/portaria-24h" },
              { icon: Brush, label: "Limpeza Corporativa", to: "/solucoes/limpeza-profissional" },
              { icon: Headphones, label: "Recepção e Apoio", to: "/solucoes/recepcao-e-atendimento" },
              { icon: Fingerprint, label: "Controle de Acesso", to: "/solucoes" },
              { icon: Leaf, label: "Zeladoria Operacional", to: "/solucoes" },
              { icon: ClipboardList, label: "Apoio Administrativo", to: "/solucoes" },
              { icon: Cog, label: "Manutenção", to: "/solucoes" },
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
        </section>

        {/* BENEFÍCIOS */}
        <section className="container mx-auto px-6 max-w-6xl mt-16 md:mt-24 mb-16">
          <div className="rounded-2xl bg-[color:var(--background-deep)] border border-border p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Benefícios para <span className="text-primary">sua empresa</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Mais organização operacional", desc: "Processos alinhados e rotina funcionando como deve ser." },
                { title: "Redução de falhas e retrabalho", desc: "Mais eficiência e menos prejuízos no dia a dia." },
                { title: "Continuidade operacional", desc: "Reposição rápida e operação sem interrupções." },
                { title: "Profissionais alinhados à cultura da empresa", desc: "Selecionados, treinados e preparados para representar sua empresa." },
                { title: "Supervisão constante", desc: "Acompanhamento próximo para manter o padrão e corrigir rapidamente." },
                { title: "Parceria que gera resultados", desc: "Relacionamento de longo prazo com foco em eficiência e qualidade." },
              ].map((b) => (
                <div key={b.title} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Award className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <p className="text-sm md:text-base text-foreground font-semibold">
                  Pronto para terceirizar com quem entrega de verdade?
                </p>
              </div>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/solicitar-proposta">Solicitar proposta</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
