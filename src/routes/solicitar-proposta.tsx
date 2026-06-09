import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Users,
  ShieldCheck,
  Headphones,
  Flame,
  Sparkles,
  ShoppingBag,
  Building2,
  Wrench,
  Camera,
  MoreHorizontal,
  Send,
  Clock,
  Package,
  Coffee,
  Leaf,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Shirt,
  Handshake,
  DollarSign,
  Star,
} from "lucide-react";

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

const PROFESSIONALS = [
  { id: "Portaria 24h", label: "Portaria 24h", icon: ShieldCheck },
  { id: "Controlador de Acesso", label: "Controlador de Acesso", icon: Users },
  { id: "Ronda Patrimonial", label: "Ronda Patrimonial", icon: ShieldAlert },
  { id: "Bombeiro Civil", label: "Bombeiro Civil", icon: Flame },
  { id: "Auxiliar de Limpeza", label: "Auxiliar de Limpeza", icon: Sparkles },
  { id: "Auxiliar de Serviços Gerais", label: "Auxiliar de Serviços Gerais", icon: ShoppingBag },
  { id: "Zeladoria Predial", label: "Zeladoria Predial", icon: Building2 },
  { id: "Jardinagem", label: "Jardinagem", icon: Leaf },
  { id: "Recepcionista", label: "Recepcionista", icon: Headphones },
  { id: "Copeira", label: "Copeira", icon: Coffee },
  { id: "Apoio Logístico", label: "Apoio Logístico", icon: Package },
  { id: "Manutenção Predial", label: "Manutenção Predial", icon: Wrench },
  { id: "Monitoramento", label: "Monitoramento", icon: Camera },
  { id: "Serviços Personalizados", label: "Serviços Personalizados", icon: MoreHorizontal },
] as const;

const CHALLENGES = [
  { value: "", label: "Selecione uma opção" },
  { value: "empresa-sem-suporte", label: "Empresa atual sem suporte" },
  { value: "qualidade", label: "Busco melhorar a qualidade dos serviços" },
  { value: "contrato-vencimento", label: "Contrato atual próximo do vencimento" },
  { value: "rotatividade", label: "Alta rotatividade de funcionários" },
  { value: "falta-funcionarios", label: "Falta de funcionários" },
  { value: "custos", label: "Busco reduzir custos" },
  { value: "nao-terceiriza", label: "Ainda não terceirizamos" },
] as const;

const STEPS = [
  { id: 1, label: "Profissionais" },
  { id: 2, label: "Serviço" },
  { id: 3, label: "Seus Dados" },
];

function FieldInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  name,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  name?: string;
}) {
  return (
    <fieldset className="border border-border rounded-lg px-4 pt-2 pb-3 bg-card hover:border-primary/40 focus-within:border-primary transition-colors duration-200">
      <legend className="text-xs text-muted-foreground px-1 select-none">{label}</legend>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-foreground text-sm placeholder:text-muted-foreground/50 outline-none"
      />
    </fieldset>
  );
}

function Page() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    servicos: [] as string[],
    endereco: "",
    necessidade: "",
    desafio: "",
    nomeEmpresa: "",
    seuNome: "",
    email: "",
    telefone: "",
    cep: "",
    cidade: "",
    estado: "",
  });

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      servicos: d.servicos.includes(s) ? d.servicos.filter((x) => x !== s) : [...d.servicos, s],
    }));

  const progress = (step / STEPS.length) * 100;

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (data.servicos.length === 0) {
        toast.error("Selecione pelo menos um profissional.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!data.endereco.trim()) {
        toast.error("Por favor, informe o endereço da prestação de serviço.");
        return false;
      }
      if (!data.necessidade.trim()) {
        toast.error("Por favor, descreva os detalhes da prestação de serviço.");
        return false;
      }
      if (!data.desafio.trim()) {
        toast.error("Por favor, selecione o principal desafio da sua operação.");
        return false;
      }
    }
    if (currentStep === 3) {
      if (!data.seuNome.trim()) {
        toast.error("Por favor, informe seu nome.");
        return false;
      }
      if (!data.email.trim()) {
        toast.error("Por favor, informe seu e-mail.");
        return false;
      }
      if (!data.telefone.trim()) {
        toast.error("Por favor, informe seu telefone/WhatsApp.");
        return false;
      }
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        toast.error("Por favor, informe um e-mail válido.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, STEPS.length));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation of all required fields
    if (data.servicos.length === 0) {
      toast.error("Selecione pelo menos um profissional.");
      return;
    }
    if (!data.endereco.trim()) {
      toast.error("Por favor, informe o endereço da prestação de serviço.");
      return;
    }
    if (!data.necessidade.trim()) {
      toast.error("Por favor, descreva os detalhes da prestação de serviço.");
      return;
    }
    if (!data.desafio.trim()) {
      toast.error("Por favor, selecione o principal desafio da sua operação.");
      return;
    }
    if (!data.seuNome.trim()) {
      toast.error("Por favor, informe seu nome.");
      return;
    }
    if (!data.email.trim()) {
      toast.error("Por favor, informe seu e-mail.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Por favor, informe um e-mail válido.");
      return;
    }
    if (!data.telefone.trim()) {
      toast.error("Por favor, informe seu telefone/WhatsApp.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        servicos: data.servicos,
        necessidade: data.necessidade,
        desafio: data.desafio,
        nome: data.seuNome,
        empresa: data.nomeEmpresa,
        endereco: data.endereco,
        telefone: data.telefone,
        email: data.email,
        cep: data.cep,
        cidade: data.cidade,
        estado: data.estado,
      };
      
      const response = await fetch("/api/send-proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast.success("Proposta enviada! Retorno em até 1 hora útil.");
        setTimeout(() => { window.location.href = "/"; }, 2000);
      } else {
        toast.error(result.message || "Erro ao enviar proposta.");
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Erro ao enviar proposta.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">

            {/* Left column — form (spans 3 of 5) */}
            <div className="lg:col-span-3">

              {/* Page heading */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Solicite sua{" "}
                  <span className="text-primary">proposta personalizada</span>
                </h1>
                <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                  Preencha abaixo e um especialista GS entrará em contato em até 1 hora útil.
                </p>
              </div>

              {/* Main card */}
              <form onSubmit={handleSubmit}>
            <div className="relative border border-primary/25 rounded-2xl bg-card shadow-2xl shadow-black/20 overflow-hidden">

              {/* Progress bar header */}
              <div className="px-6 md:px-8 pt-8 pb-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  {STEPS.map((s, idx) => (
                    <div key={s.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                            step >= s.id
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {s.id}
                        </div>
                        <span
                          className={`text-xs mt-2 font-medium transition-colors ${
                            step >= s.id ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {idx < STEPS.length - 1 && (
                        <div
                          className={`hidden sm:block w-12 md:w-20 lg:w-16 xl:w-28 h-1 mx-3 lg:mx-2 xl:mx-4 rounded-full transition-colors duration-300 ${
                            step > s.id ? "bg-primary" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="px-6 md:px-8 py-10">

                {/* Step 1: Profissionais */}
                {step === 1 && (
                  <section className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Etapa 1 de 3</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        Quais <span className="text-primary">profissionais</span> sua operação precisa?
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">Selecione uma ou mais opções.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {PROFESSIONALS.map(({ id, label, icon: Icon }) => {
                        const active = data.servicos.includes(id);
                        return (
                          <label
                            key={id}
                            className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-lg border cursor-pointer transition-all duration-150 select-none ${
                              active
                                ? "border-primary bg-primary/10 shadow-sm"
                                : "border-border bg-card hover:border-primary/40 hover:bg-muted/30"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={active}
                              onChange={() => toggleService(id)}
                              className="w-3.5 h-3.5 accent-[oklch(0.66_0.135_70)] flex-shrink-0"
                            />
                            <Icon
                              className={`w-4 h-4 flex-shrink-0 transition-colors ${active ? "text-primary" : "text-muted-foreground group-hover:text-primary/60"}`}
                              strokeWidth={1.75}
                            />
                            <span className={`text-xs font-medium leading-tight transition-colors ${active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                              {label}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    {data.servicos.length > 0 && (
                      <p className="mt-4 text-xs text-muted-foreground">
                        <span className="text-primary font-semibold">{data.servicos.length}</span> selecionado(s): {data.servicos.join(", ")}
                      </p>
                    )}
                  </section>
                )}

                {/* Step 2: Informações do serviço */}
                {step === 2 && (
                  <section className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Etapa 2 de 3</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Informações do serviço</h2>
                      <p className="text-sm text-muted-foreground mt-1">Conte mais sobre sua operação.</p>
                    </div>

                    <div className="space-y-4">
                      <FieldInput
                        label="Endereço da prestação do serviço *"
                        value={data.endereco}
                        onChange={(v) => setData({ ...data, endereco: v })}
                        placeholder="Bairro, cidade ou endereço completo"
                      />

                      <fieldset className="border border-border rounded-lg px-4 pt-2 pb-3 bg-card hover:border-primary/40 focus-within:border-primary transition-colors duration-200">
                        <legend className="text-xs text-muted-foreground px-1 select-none">Descreva os detalhes da prestação de serviço *</legend>
                        <textarea
                          value={data.necessidade}
                          onChange={(e) => setData({ ...data, necessidade: e.target.value })}
                          rows={4}
                          maxLength={600}
                          placeholder={"Ex.: Temos um condomínio com 2 torres e precisamos de portaria 24h e limpeza diurna.\nEscala 12x36. Início desejado para o próximo mês."}
                          className="w-full bg-transparent text-foreground text-sm placeholder:text-muted-foreground/50 outline-none resize-none leading-relaxed"
                        />
                        <p className="text-right text-[10px] text-muted-foreground/60 mt-1">{data.necessidade.length}/600</p>
                      </fieldset>

                      <fieldset className="border border-border rounded-lg px-4 pt-2 pb-3 bg-card hover:border-primary/40 focus-within:border-primary transition-colors duration-200">
                        <legend className="text-xs text-muted-foreground px-1 select-none">
                          Qual o principal <span className="text-primary font-semibold">desafio</span> da sua operação hoje? *
                        </legend>
                        <select
                          value={data.desafio}
                          onChange={(e) => setData({ ...data, desafio: e.target.value })}
                          className="w-full bg-transparent text-foreground text-sm outline-none cursor-pointer py-0.5"
                        >
                          {CHALLENGES.map(({ value, label }) => (
                            <option key={value} value={value} className="bg-card text-foreground">{label}</option>
                          ))}
                        </select>
                      </fieldset>
                    </div>
                  </section>
                )}

                {/* Step 3: Seus dados */}
                {step === 3 && (
                  <section className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Etapa 3 de 3</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Seus dados</h2>
                      <p className="text-sm text-muted-foreground mt-1">Finalize para receber seu orçamento.</p>
                    </div>

                    <div className="space-y-4">
                      <FieldInput
                        label="Nome da sua empresa ou condomínio"
                        value={data.nomeEmpresa}
                        onChange={(v) => setData({ ...data, nomeEmpresa: v })}
                        placeholder="Razão social ou nome do condomínio"
                      />
                      <FieldInput
                        label="Seu nome *"
                        value={data.seuNome}
                        onChange={(v) => setData({ ...data, seuNome: v })}
                        placeholder="Digite seu nome..."
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <FieldInput
                          label="E-mail *"
                          type="email"
                          value={data.email}
                          onChange={(v) => setData({ ...data, email: v })}
                          placeholder="seu@email.com"
                        />
                        <FieldInput
                          label="WhatsApp *"
                          type="tel"
                          value={data.telefone}
                          onChange={(v) => setData({ ...data, telefone: v })}
                          placeholder="(11) 9 0000-0000"
                        />
                      </div>
                    </div>
                  </section>
                )}

              </div>

              {/* Navigation buttons */}
              <div className="px-6 md:px-8 pb-10">
                <div className="flex gap-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="flex-1 h-14 rounded-xl text-sm font-semibold"
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Voltar
                    </Button>
                  )}
                  
                  {step < STEPS.length ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex-1 h-14 rounded-xl bg-primary hover:bg-primary/90 text-sm font-bold tracking-wider uppercase shadow-lg shadow-primary/20"
                    >
                      Continuar
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 h-14 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-bold text-sm tracking-widest uppercase text-primary-foreground flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" strokeWidth={2} />
                      {loading ? "Enviando..." : "Receber orçamento personalizado"}
                    </button>
                  )}
                </div>
              </div>

            </div>
          </form>

          {/* Guarantees — below card */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, title: "Retorno em até 1 hora útil" },
                  { icon: ShieldCheck, title: "Proposta sem compromisso" },
                  { icon: Headphones, title: "Atendimento direto com a gestão GS" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="flex items-center gap-3 px-5 py-4 rounded-xl border border-border bg-card/50">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.75} />
                    <p className="text-sm font-medium text-foreground/80 leading-tight">{title}</p>
                  </div>
                ))}
              </div>

            </div>
            {/* End left column */}

            {/* Right column — sticky premium message panel (spans 2 of 5) */}
            <aside className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden border border-primary/25 shadow-2xl shadow-black/30 bg-[var(--background-deep)]">

                {/* Photo header */}
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <img
                    src="/images/proposta-especialista.jpg"
                    alt="Especialista GS sorrindo e fazendo gesto de aprovação"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-deep)] via-[var(--background-deep)]/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="px-6 md:px-8 py-7 -mt-10 relative">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug text-balance">
                    O que faz uma empresa de terceirização{" "}
                    <span className="text-primary">ser diferente</span> das outras?
                  </h2>

                  {/* Differentiators list */}
                  <ul className="mt-6 space-y-4">
                    {[
                      { icon: Shirt, text: "Não é o ", highlight: "uniforme." },
                      { icon: Handshake, text: "Não é a ", highlight: "promessa." },
                      { icon: DollarSign, text: "Não é o ", highlight: "preço." },
                    ].map(({ icon: Icon, text, highlight }) => (
                      <li key={highlight} className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                          <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                        </div>
                        <p className="text-base md:text-lg text-foreground/90 leading-tight">
                          {text}
                          <span className="text-primary font-semibold">{highlight}</span>
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="my-6 h-px bg-border" />

                  {/* Highlight — star */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                      <Star className="w-5 h-5 text-primary-foreground" strokeWidth={2} fill="currentColor" />
                    </div>
                    <p className="text-base md:text-lg text-foreground font-bold leading-snug">
                      É o que acontece{" "}
                      <span className="text-primary">depois da contratação.</span>
                    </p>
                  </div>

                  {/* Closing line */}
                  <div className="mt-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 border border-border">
                      <Users className="w-5 h-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      Descubra por que empresas e condomínios estão{" "}
                      <span className="text-foreground font-semibold">conhecendo a GS.</span>
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            {/* End right column */}

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
