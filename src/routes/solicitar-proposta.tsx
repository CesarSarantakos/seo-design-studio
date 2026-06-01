import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { toast } from "sonner";
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

function StepLabel({ number, label }: { number: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
        <span className="text-background text-xs font-bold">{number}</span>
      </div>
      <span className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">{label}</span>
    </div>
  );
}

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
  const submit = useServerFn(submitProposal);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.servicos.length === 0) { toast.error("Selecione pelo menos um profissional."); return; }
    if (!data.seuNome.trim()) { toast.error("Por favor, informe seu nome."); return; }
    if (!data.email.trim()) { toast.error("Por favor, informe seu e-mail."); return; }
    if (!data.telefone.trim()) { toast.error("Por favor, informe seu telefone."); return; }

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
      const result = await submit({ data: payload });
      if (result.success) {
        toast.success("Proposta enviada! Retorno em até 1 hora útil.");
        setTimeout(() => { window.location.href = "/"; }, 2000);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao enviar proposta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Page heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Solicite sua{" "}
              <span className="text-primary">proposta personalizada</span>
            </h1>
            <p className="text-muted-foreground mt-3 text-base max-w-xl mx-auto leading-relaxed">
              Preencha abaixo e um especialista GS entrará em contato em até 1 hora útil.
            </p>
          </div>

          {/* Main card */}
          <form onSubmit={handleSubmit}>
            <div className="relative border border-primary/25 rounded-2xl bg-card shadow-2xl shadow-black/20 overflow-hidden">

              {/* Left vertical step line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />

              <div className="px-6 md:px-12 py-10 space-y-0">

                {/* ── ETAPA 1 ── */}
                <section className="pb-10 border-b border-border">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="hidden md:flex flex-col items-center gap-1 -ml-6 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-[10px] font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Etapa 1</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">
                        Quais <span className="text-primary">profissionais</span> sua operação precisa?
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">Selecione uma ou mais opções.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-6">
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

                {/* ── ETAPA 2 ── */}
                <section className="py-10 border-b border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="hidden md:flex flex-col items-center gap-1 -ml-6 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-[10px] font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Etapa 2</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Informações do serviço</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <FieldInput
                      label="Endereço da prestação do serviço"
                      value={data.endereco}
                      onChange={(v) => setData({ ...data, endereco: v })}
                      placeholder="Bairro, cidade ou endereço completo"
                    />

                    <fieldset className="border border-border rounded-lg px-4 pt-2 pb-3 bg-card hover:border-primary/40 focus-within:border-primary transition-colors duration-200">
                      <legend className="text-xs text-muted-foreground px-1 select-none">Descreva os detalhes da prestação de serviço</legend>
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
                        Qual o principal <span className="text-primary font-semibold">desafio</span> da sua operação hoje?
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

                {/* ── ETAPA 3 ── */}
                <section className="pt-10 pb-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="hidden md:flex flex-col items-center gap-1 -ml-6 mr-2 mt-1">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-primary-foreground text-[10px] font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Etapa 3</p>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">Seus dados</h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <FieldInput
                      label="Nome da sua empresa ou condomínio"
                      value={data.nomeEmpresa}
                      onChange={(v) => setData({ ...data, nomeEmpresa: v })}
                      placeholder="Razão social ou nome do condomínio"
                    />
                    <FieldInput
                      label="Seu nome"
                      value={data.seuNome}
                      onChange={(v) => setData({ ...data, seuNome: v })}
                      placeholder="Digite seu nome..."
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <FieldInput
                        label="E-mail"
                        type="email"
                        value={data.email}
                        onChange={(v) => setData({ ...data, email: v })}
                        placeholder="seu@email.com"
                      />
                      <FieldInput
                        label="WhatsApp"
                        type="tel"
                        value={data.telefone}
                        onChange={(v) => setData({ ...data, telefone: v })}
                        placeholder="(11) 9 0000-0000"
                      />
                    </div>
                  </div>
                </section>

              </div>

              {/* Submit button — inside the card, full width at the bottom */}
              <div className="px-6 md:px-12 pb-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-bold text-sm tracking-widest uppercase text-primary-foreground flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" strokeWidth={2} />
                  {loading ? "Enviando..." : "Receber orçamento personalizado"}
                </button>
              </div>

            </div>
          </form>

          {/* Guarantees — below card */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </main>
      <Footer />
    </div>
  );
}
