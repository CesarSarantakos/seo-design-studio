import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Check,
  CheckCircle,
  MapPin,
  Mail,
  Smartphone,
  Building,
  Heart,
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
  // Segurança e Portaria
  { category: "Segurança e Portaria", id: "Portaria 24h", label: "Portaria 24h", icon: ShieldCheck },
  { category: "Segurança e Portaria", id: "Controlador de Acesso", label: "Controlador de Acesso", icon: Users },
  { category: "Segurança e Portaria", id: "Ronda Patrimonial", label: "Ronda Patrimonial", icon: ShieldCheck },
  { category: "Segurança e Portaria", id: "Bombeiro Civil", label: "Bombeiro Civil", icon: Flame },
  
  // Limpeza e Zeladoria
  { category: "Limpeza e Zeladoria", id: "Auxiliar de Limpeza", label: "Auxiliar de Limpeza", icon: Sparkles },
  { category: "Limpeza e Zeladoria", id: "Auxiliar de Serviços Gerais", label: "Auxiliar de Serviços Gerais", icon: ShoppingBag },
  { category: "Limpeza e Zeladoria", id: "Zeladoria Predial", label: "Zeladoria Predial", icon: Building2 },
  { category: "Limpeza e Zeladoria", id: "Jardinagem", label: "Jardinagem", icon: Sparkles },
  
  // Recepção e Suporte
  { category: "Recepção e Suporte", id: "Recepcionista", label: "Recepcionista", icon: Headphones },
  { category: "Recepção e Suporte", id: "Copeira", label: "Copeira", icon: Package },
  { category: "Recepção e Suporte", id: "Apoio Logístico", label: "Apoio Logístico", icon: Package },
  
  // Infraestrutura
  { category: "Infraestrutura", id: "Manutenção Predial", label: "Manutenção Predial", icon: Wrench },
  { category: "Infraestrutura", id: "Monitoramento", label: "Monitoramento", icon: Camera },
  { category: "Infraestrutura", id: "Outros", label: "Outros", icon: MoreHorizontal },
] as const;

const CHALLENGES = [
  { id: "Empresa atual sem suporte", label: "Empresa atual sem suporte", icon: HeadphonesIcon },
  { id: "Busco melhorar a qualidade", label: "Busco melhorar a qualidade dos serviços", icon: Sparkles },
  { id: "Contrato próximo do vencimento", label: "Contrato atual próximo do vencimento", icon: Clock },
  { id: "Alta rotatividade", label: "Alta rotatividade de funcionários", icon: RefreshCw },
  { id: "Falta de funcionários", label: "Falta de funcionários", icon: UserX },
  { id: "Reduzir custos", label: "Busco reduzir custos", icon: Zap },
  { id: "Ainda não terceirizamos", label: "Ainda não terceirizamos", icon: MessageCircle },
] as const;

function Page() {
  const submit = useServerFn(submitProposal);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState({
    servicos: [] as string[],
    endereco: "",
    necessidade: "",
    desafio: "",
    nomeEmpresa: "",
    seuNome: "",
    email: "",
    telefone: "",
  });

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      servicos: d.servicos.includes(s) ? d.servicos.filter((x) => x !== s) : [...d.servicos, s],
    }));

  const canGoToStep2 = data.servicos.length > 0;
  const canGoToStep3 = data.endereco.trim().length > 0 && data.necessidade.trim().length > 0;
  const canSubmit = data.nomeEmpresa.trim() && data.seuNome.trim() && data.email.trim() && data.telefone.trim() && data.desafio;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (data.servicos.length === 0) {
      toast.error("Selecione pelo menos um profissional.");
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
    if (!data.telefone.trim()) {
      toast.error("Por favor, informe seu telefone.");
      return;
    }

    setLoading(true);
    try {
      const result = await submit({
        servicos: data.servicos,
        necessidade: data.necessidade,
        desafio: data.desafio,
        nome: data.seuNome,
        empresa: data.nomeEmpresa,
        endereco: data.endereco,
        telefone: data.telefone,
        email: data.email,
      });
      if (result.success) {
        toast.success("Proposta enviada com sucesso! Você receberá retorno em até 1 hora.");
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

  const groupedProfessionals = PROFESSIONALS.reduce((acc, prof) => {
    const existing = acc.find(g => g.category === prof.category);
    if (existing) {
      existing.items.push(prof);
    } else {
      acc.push({ category: prof.category, items: [prof] });
    }
    return acc;
  }, [] as Array<{ category: string; items: typeof PROFESSIONALS }> );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-background/95">
      <Header />
      <main className="flex-1 pt-20 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Receba sua proposta <span className="text-primary">personalizada</span>
            </h1>
            <p className="text-neutral-300 text-lg">
              Conte sobre sua operação e montamos a solução ideal para você.
            </p>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <button
                  onClick={() => {
                    if (step === 1 || (step === 2 && canGoToStep2) || (step === 3 && canGoToStep3)) {
                      setCurrentStep(step);
                    }
                  }}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-primary text-white shadow-lg shadow-primary/40"
                      : "bg-neutral-800 text-neutral-400 cursor-not-allowed"
                  }`}
                  disabled={step > currentStep}
                >
                  {step < currentStep ? <Check className="w-6 h-6" /> : step}
                </button>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-3 rounded-full transition-all duration-300 ${step < currentStep ? "bg-primary" : "bg-neutral-800"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Etapa 1: Quais profissionais sua operação precisa?
                  </h2>
                  <p className="text-neutral-400">Selecione uma ou mais opções</p>
                </div>

                {groupedProfessionals.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{group.category}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {group.items.map(({ id, label, icon: Icon }) => {
                        const active = data.servicos.includes(id);
                        return (
                          <button
                            type="button"
                            key={id}
                            onClick={() => toggleService(id)}
                            className={`group relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                              active
                                ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                                : "border-neutral-700 hover:border-primary/50 bg-neutral-900/50 hover:bg-neutral-800/50"
                            }`}
                          >
                            <div className={`p-2 rounded-lg transition-all duration-200 ${
                              active ? "bg-primary/20" : "bg-neutral-800"
                            }`}>
                              <Icon className={`w-5 h-5 transition-colors ${active ? "text-primary" : "text-neutral-400 group-hover:text-primary/70"}`} strokeWidth={1.5} />
                            </div>
                            <span className={`text-xs md:text-sm font-medium text-center leading-tight transition-colors ${
                              active ? "text-white" : "text-neutral-300 group-hover:text-white"
                            }`}>
                              {label}
                            </span>
                            {active && (
                              <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {data.servicos.length > 0 && (
                  <div className="pt-4 border-t border-neutral-700">
                    <p className="text-sm text-neutral-300">
                      <span className="font-bold text-primary">{data.servicos.length}</span> profissional(is) selecionado(s)
                    </p>
                  </div>
                )}

                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!canGoToStep2}
                  className="w-full h-14 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próxima Etapa
                </Button>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Etapa 2: Informações do serviço
                  </h2>
                  <p className="text-neutral-400">Nos conte sobre sua necessidade e localização</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Endereço da prestação do serviço
                    </Label>
                    <Input
                      value={data.endereco}
                      onChange={(e) => setData({ ...data, endereco: e.target.value })}
                      placeholder="Ex.: Brooklin, Moema, Guarulhos ou endereço completo"
                      className="h-12 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-white mb-2">Descreva sua necessidade</Label>
                    <Textarea
                      value={data.necessidade}
                      onChange={(e) => setData({ ...data, necessidade: e.target.value })}
                      placeholder="Ex: Quantidade de colaboradores, Escala desejada, Horários, Início previsto, Detalhes importantes..."
                      rows={5}
                      maxLength={600}
                      className="bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500 resize-none"
                    />
                    <div className="mt-2 flex justify-between">
                      <span></span>
                      <p className={`text-xs transition-colors ${data.necessidade.length > 500 ? "text-amber-500" : "text-neutral-500"}`}>
                        {data.necessidade.length}/600
                      </p>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-white mb-2">Qual o principal desafio da sua operação hoje?</Label>
                    <select
                      value={data.desafio}
                      onChange={(e) => setData({ ...data, desafio: e.target.value })}
                      className="w-full h-12 bg-neutral-900/50 border border-neutral-700 text-white rounded-lg px-4 cursor-pointer"
                    >
                      <option value="">Selecione uma opção</option>
                      {CHALLENGES.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="flex-1 h-12 bg-transparent border-neutral-700 text-white hover:bg-neutral-900"
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    disabled={!canGoToStep3}
                    className="flex-1 h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Próxima Etapa
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Etapa 3: Seus dados
                  </h2>
                  <p className="text-neutral-400">Suas informações para enviarmos a proposta</p>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                        <Building className="w-4 h-4 text-primary" />
                        Nome da sua Empresa ou Condomínio
                      </Label>
                      <Input
                        value={data.nomeEmpresa}
                        onChange={(e) => setData({ ...data, nomeEmpresa: e.target.value })}
                        placeholder="Digite o nome"
                        className="h-12 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-white mb-2">Seu nome</Label>
                      <Input
                        value={data.seuNome}
                        onChange={(e) => setData({ ...data, seuNome: e.target.value })}
                        placeholder="Digite seu nome"
                        className="h-12 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        E-mail
                      </Label>
                      <Input
                        type="email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="h-12 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-primary" />
                        WhatsApp
                      </Label>
                      <Input
                        value={data.telefone}
                        onChange={(e) => setData({ ...data, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="h-12 bg-neutral-900/50 border-neutral-700 text-white placeholder:text-neutral-500"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || !canSubmit}
                  className="w-full h-14 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-base flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  {loading ? "ENVIANDO..." : "RECEBER ORÇAMENTO PERSONALIZADO"}
                </Button>

                <div className="space-y-2 pt-4 border-t border-neutral-700">
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Retorno em até 1 hora útil</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Proposta sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Atendimento direto com a gestão GS</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                    className="flex-1 h-12 bg-transparent border-neutral-700 text-white hover:bg-neutral-900"
                  >
                    Voltar
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
