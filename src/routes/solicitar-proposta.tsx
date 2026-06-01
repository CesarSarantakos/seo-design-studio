import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Users,
  ShieldCheck,
  Headphones,
  Flame,
  Sparkles,
  ShoppingBag,
  Building2,
  Package,
  Wrench,
  Camera,
  MoreHorizontal,
  MessageCircle,
  Target,
  UserX,
  RefreshCw,
  HeadphonesIcon,
  Zap,
  Send,
  ShieldCheck as ShieldIcon,
  Clock,
  Users2,
  Phone,
  Check,
} from "lucide-react";
import { submitProposal } from "@/lib/api/forms.functions";

export const Route = createFileRoute("/solicitar-proposta")({
  head: () => ({
    meta: [
      { title: "Solicitar Proposta — GS" },
      {
        name: "description",
        content:
          "Receba uma proposta personalizada da GS em minutos. Conte sobre sua operação e desafios — montamos a solução ideal para você.",
      },
      { property: "og:title", content: "Solicitar Proposta — GS" },
      { property: "og:description", content: "Receba uma proposta personalizada da GS em minutos." },
      { property: "og:url", content: "/solicitar-proposta" },
    ],
    links: [{ rel: "canonical", href: "/solicitar-proposta" }],
  }),
  component: Page,
});

const SERVICES = [
  { id: "Portaria", label: "Portaria", icon: Users },
  { id: "Controlador de Acesso", label: "Controlador de Acesso", icon: ShieldCheck },
  { id: "Recepção", label: "Recepção", icon: Headphones },
  { id: "Bombeiro Civil", label: "Bombeiro Civil", icon: Flame },
  { id: "Limpeza", label: "Limpeza", icon: Sparkles },
  { id: "Serviços Gerais", label: "Serviços Gerais", icon: ShoppingBag },
  { id: "Zeladoria", label: "Zeladoria", icon: Building2 },
  { id: "Apoio Logístico", label: "Apoio Logístico", icon: Package },
  { id: "Manutenção Predial", label: "Manutenção Predial", icon: Wrench },
  { id: "Monitoramento", label: "Monitoramento", icon: Camera },
  { id: "Outros", label: "Outros", icon: MoreHorizontal },
] as const;

const CHALLENGES = [
  { id: "Falta de funcionários", icon: UserX },
  { id: "Alta rotatividade", icon: RefreshCw },
  { id: "Empresa atual sem suporte", icon: HeadphonesIcon },
  { id: "Preciso iniciar rápido", icon: Zap },
] as const;

const STEPS = [
  { n: 1, label: "Profissionais que você precisa", icon: Users2 },
  { n: 2, label: "Sobre sua operação", icon: MessageCircle },
  { n: 3, label: "Seu principal desafio hoje", icon: Target },
  { n: 4, label: "Dados para envio da proposta", icon: Send },
] as const;

function Page() {
  const submit = useServerFn(submitProposal);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [data, setData] = useState({
    servicos: [] as string[],
    necessidade: "",
    desafio: "",
    nome: "",
    empresa: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  const getStepCompletion = () => {
    const step1 = data.servicos.length > 0 ? 100 : 0;
    const step2 = data.necessidade.length > 0 ? 100 : 0;
    const step3 = data.desafio.length > 0 ? 100 : 0;
    const step4 = data.nome && data.telefone ? 100 : 0;
    return Math.round((step1 + step2 + step3 + step4) / 4);
  };

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      servicos: d.servicos.includes(s) ? d.servicos.filter((x) => x !== s) : [...d.servicos, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (data.servicos.length === 0) {
      toast.error("Selecione pelo menos um profissional.");
      return;
    }
    if (!data.nome.trim()) {
      toast.error("Por favor, informe seu nome.");
      return;
    }
    if (!data.email.trim()) {
      toast.error("Por favor, informe seu e-mail.");
      return;
    }
    if (!data.telefone.trim()) {
      toast.error("Por favor, informe seu telefone.");
      return;
    }

    setLoading(true);
    try {
      const result = await submit(data);
      if (result.success) {
        toast.success(result.message || "Proposta enviada com sucesso!");
        // Reset form
        setData({
          servicos: [],
          necessidade: "",
          desafio: "",
          nome: "",
          empresa: "",
          endereco: "",
          telefone: "",
          email: "",
        });
        // Optionally redirect after success
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Erro ao enviar proposta.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <header className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Receba sua proposta personalizada</h1>
            <p className="mt-4 text-muted-foreground">
              Conte sobre sua operação e desafios. Em poucos minutos, montamos a solução ideal para você.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="relative">
            <div className="space-y-6">
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full transition-all duration-500 ease-out shadow-lg shadow-primary/30"
                    style={{ width: `${getStepCompletion()}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-primary whitespace-nowrap">{getStepCompletion()}%</span>
              </div>

              <div className="relative space-y-6">
                {/* STEP 1 */}
              <StepCard step={STEPS[0]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Quais <span className="text-primary">profissionais</span> sua operação precisa?
                </h2>
                <p className="text-sm text-muted-foreground mb-6">Selecione uma ou mais opções.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {SERVICES.map(({ id, label, icon: Icon }) => {
                    const active = data.servicos.includes(id);
                    return (
                      <button
                        type="button"
                        key={id}
                        onClick={() => toggleService(id)}
                        className={`group relative flex flex-col items-center justify-center gap-2 border-2 rounded-xl px-3 py-4 cursor-pointer transition-all duration-200 ease-out overflow-hidden ${
                          active 
                            ? "border-primary bg-primary/5 shadow-[0_0_0_1px_hsl(var(--primary)/0.2),0_4px_12px_hsl(var(--primary)/0.15)]" 
                            : "border-border/60 hover:border-primary/40 hover:bg-muted/30 hover:shadow-md"
                        }`}
                      >
                        <div className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                          active ? "bg-primary scale-100" : "bg-border/40 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                        }`}>
                          <Check className={`w-3 h-3 transition-all duration-200 ${active ? "text-primary-foreground" : "text-transparent"}`} strokeWidth={3} />
                        </div>
                        <div className={`p-2.5 rounded-xl transition-all duration-200 ${
                          active ? "bg-primary/10" : "bg-muted/50 group-hover:bg-primary/5"
                        }`}>
                          <Icon className={`w-6 h-6 transition-colors duration-200 ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`} strokeWidth={1.5} />
                        </div>
                        <span className={`text-xs md:text-sm font-medium text-center leading-tight transition-colors duration-200 ${
                          active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>{label}</span>
                      </button>
                    );
                  })}
                </div>
                {data.servicos.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-primary">{data.servicos.length}</span> {data.servicos.length === 1 ? "serviço selecionado" : "serviços selecionados"}
                    </p>
                  </div>
                )}
              </StepCard>

              {/* STEP 2 */}
              <StepCard step={STEPS[1]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Fale rapidamente sobre <span className="text-primary">sua necessidade</span>
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Conte sobre sua operação, quantidade de profissionais, escala, horário, tipo de local, rotinas ou
                  qualquer detalhe importante.
                </p>
                <div className="relative group">
                  <Textarea
                    value={data.necessidade}
                    onChange={(e) => setData({ ...data, necessidade: e.target.value })}
                    onFocus={() => setFocusedField("necessidade")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Ex.: Temos um condomínio com 2 torres e precisamos de portaria 24h e limpeza diurna. Escala 12x36. Início desejado para o próximo mês."
                    rows={5}
                    maxLength={600}
                    className="resize-none transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className={`h-1 rounded-full bg-muted overflow-hidden transition-all duration-300 ${data.necessidade.length > 0 ? "w-24" : "w-0"}`}>
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ease-out"
                        style={{ width: `${Math.min((data.necessidade.length / 600) * 100, 100)}%` }}
                      />
                    </div>
                    <p className={`text-xs transition-colors duration-200 ${data.necessidade.length > 500 ? "text-amber-500" : "text-muted-foreground"}`}>
                      {data.necessidade.length}/600
                    </p>
                  </div>
                </div>
              </StepCard>

              {/* STEP 3 */}
              <StepCard step={STEPS[2]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Qual o principal <span className="text-primary">desafio</span> da sua operação hoje?
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Essa informação nos ajuda a entender melhor e trazer a solução ideal.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CHALLENGES.map(({ id, icon: Icon }) => {
                    const active = data.desafio === id;
                    return (
                      <button
                        type="button"
                        key={id}
                        onClick={() => setData({ ...data, desafio: active ? "" : id })}
                        className={`group relative flex items-center gap-4 border-2 rounded-xl px-4 py-4 cursor-pointer transition-all duration-200 ease-out text-left ${
                          active 
                            ? "border-primary bg-primary/5 shadow-[0_0_0_1px_hsl(var(--primary)/0.2),0_4px_12px_hsl(var(--primary)/0.15)]" 
                            : "border-border/60 hover:border-primary/40 hover:bg-muted/30 hover:shadow-md"
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl transition-all duration-200 flex-shrink-0 ${
                          active ? "bg-primary/10" : "bg-muted/50 group-hover:bg-primary/5"
                        }`}>
                          <Icon className={`w-5 h-5 transition-colors duration-200 ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`} strokeWidth={1.5} />
                        </div>
                        <span className={`text-sm font-medium leading-tight transition-colors duration-200 ${
                          active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>{id}</span>
                        <div className={`ml-auto w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                          active ? "bg-primary scale-100" : "bg-border/40 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100"
                        }`}>
                          <Check className={`w-3 h-3 transition-all duration-200 ${active ? "text-primary-foreground" : "text-transparent"}`} strokeWidth={3} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </StepCard>

              {/* STEP 4 */}
              <StepCard step={STEPS[3]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Agora só faltam seus dados para enviarmos <span className="text-primary">sua proposta</span>
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  É rápido, seguro e sua proposta será enviada online.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Seu nome</Label>
                    <Input
                      value={data.nome}
                      onChange={(e) => setData({ ...data, nome: e.target.value })}
                      onFocus={() => setFocusedField("nome")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Digite seu nome"
                      required
                      maxLength={150}
                      className="h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Como se chama sua empresa ou condomínio?</Label>
                    <Input
                      value={data.empresa}
                      onChange={(e) => setData({ ...data, empresa: e.target.value })}
                      onFocus={() => setFocusedField("empresa")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Digite o nome da empresa ou condomínio"
                      maxLength={150}
                      className="h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label className="text-sm font-medium">Endereço da prestação de serviço</Label>
                    <Input
                      value={data.endereco}
                      onChange={(e) => setData({ ...data, endereco: e.target.value })}
                      onFocus={() => setFocusedField("endereco")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Ex.: Brooklin, Moema, Guarulhos ou endereço completo"
                      maxLength={300}
                      className="h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">WhatsApp</Label>
                    <Input
                      value={data.telefone}
                      onChange={(e) => setData({ ...data, telefone: e.target.value })}
                      onFocus={() => setFocusedField("telefone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="(11) 99999-9999"
                      required
                      maxLength={30}
                      className="h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">E-mail</Label>
                    <Input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="seu@email.com"
                      maxLength={255}
                      className="h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50">
                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
                    <span className="p-1.5 rounded-full bg-primary/10">
                      <ShieldIcon className="w-3.5 h-3.5 text-primary" />
                    </span>
                    Suas informações estão seguras. Não compartilhamos seus dados.
                  </p>
                </div>
              </StepCard>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-16 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col gap-0.5 group"
              >
                <span className="flex items-center gap-2">
                  <Send className={`w-5 h-5 transition-transform duration-300 ${loading ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                  {loading ? "ENVIANDO..." : "RECEBER PROPOSTA"}
                </span>
                <span className="text-xs font-normal text-primary-foreground/80">Você receberá sua proposta online.</span>
              </Button>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {[
                  { icon: ShieldIcon, label: "Supervisão operacional" },
                  { icon: Clock, label: "Cobertura rápida" },
                  { icon: Users2, label: "Equipe alinhada" },
                  { icon: Phone, label: "Atendimento consultivo" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StepCard({ step, children }: { step: (typeof STEPS)[number]; children: React.ReactNode }) {
  const Icon = step.icon;
  return (
    <div className="flex gap-4 md:gap-6 group/step">
      <div className="hidden md:flex flex-col items-center w-28 flex-shrink-0 pt-1">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0B1B3D] to-[#1a3a6e] text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-[#0B1B3D]/20 ring-4 ring-background transition-all duration-300 group-hover/step:shadow-xl group-hover/step:scale-105">
          {step.n}
        </div>
        <Icon className="w-6 h-6 text-muted-foreground mt-3 transition-colors duration-300 group-hover/step:text-primary" strokeWidth={1.5} />
        <span className="text-xs text-muted-foreground text-center mt-2 leading-tight">{step.label}</span>
      </div>
      <div className="flex-1 bg-card border-2 border-border/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-border transition-all duration-300">
        <div className="md:hidden flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B1B3D] to-[#1a3a6e] text-white font-bold flex items-center justify-center text-xs shadow-md">
            {step.n}
          </div>
          <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{step.label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
