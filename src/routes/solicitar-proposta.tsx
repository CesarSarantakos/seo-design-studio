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
  Wrench,
  Camera,
  MoreHorizontal,
  HeadphonesIcon,
  RefreshCw,
  UserX,
  Zap,
  Send,
  Clock,
  Check,
  CheckCircle,
  MapPin,
  Mail,
  Smartphone,
  Building,
  Heart,
  Package,
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
  { id: "Ronda Patrimonial", label: "Ronda Patrimonial", icon: ShieldCheck },
  { id: "Bombeiro Civil", label: "Bombeiro Civil", icon: Flame },
  { id: "Auxiliar de Limpeza", label: "Auxiliar de Limpeza", icon: Sparkles },
  { id: "Auxiliar de Serviços Gerais", label: "Auxiliar de Serviços Gerais", icon: ShoppingBag },
  { id: "Zeladoria Predial", label: "Zeladoria Predial", icon: Building2 },
  { id: "Jardinagem", label: "Jardinagem", icon: Sparkles },
  { id: "Recepcionista", label: "Recepcionista", icon: Headphones },
  { id: "Copeira", label: "Copeira", icon: Package },
  { id: "Apoio Logístico", label: "Apoio Logístico", icon: Package },
  { id: "Manutenção Predial", label: "Manutenção Predial", icon: Wrench },
  { id: "Monitoramento", label: "Monitoramento", icon: Camera },
  { id: "Serviços Personalizados", label: "Serviços Personalizados", icon: MoreHorizontal },
] as const;

const CHALLENGES = [
  "Seleção uma opção",
  "Empresa atual sem suporte",
  "Busco melhorar a qualidade dos serviços",
  "Falta de funcionários",
  "Alta rotatividade de funcionários",
  "Busco reduzir custos",
  "Contrato atual próximo do vencimento",
  "Ainda não terceirizamos",
  "Há muito tempo tenho funcionários indisponíveis",
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
  const canSubmit = data.nomeEmpresa.trim() && data.seuNome.trim() && data.email.trim() && data.telefone.trim() && data.desafio && data.desafio !== "Seleção uma opção";

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Decorative gradient header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Solicite sua <span className="text-primary">proposta personalizada</span>
            </h1>
            <p className="text-neutral-600 text-base">
              Preencha o formulário abaixo e um especialista GS entrará em contato em até 1 hora
            </p>
          </div>

          {/* Main Form Container */}
          <form onSubmit={handleSubmit} className="relative">
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .fade-in-step {
                animation: fadeIn 0.4s ease-out;
              }
            `}</style>

            <div className="border-2 border-primary/30 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white to-neutral-50/50 shadow-xl shadow-primary/5 relative">
              {/* Vertical step indicator line */}
              <div className="absolute left-8 md:left-12 top-24 bottom-24 w-0.5 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

              {/* Step 1 - Profissionais */}
              {currentStep === 1 && (
                <div className="fade-in-step space-y-6">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <span className="text-primary font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-neutral-900">
                        Quais <span className="text-primary">profissionais</span> sua operação precisa?
                      </h2>
                      <p className="text-sm text-neutral-500 mt-1">Selecione uma ou mais opções.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                    {PROFESSIONALS.map(({ id, label, icon: Icon }) => {
                      const active = data.servicos.includes(id);
                      return (
                        <label
                          key={id}
                          className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            active
                              ? "border-primary/50 bg-primary/5 shadow-sm shadow-primary/10"
                              : "border-neutral-200 hover:border-primary/30 bg-white hover:bg-neutral-50/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={active}
                            onChange={() => toggleService(id)}
                            className="w-4 h-4 accent-primary cursor-pointer"
                          />
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${active ? "text-primary" : "text-neutral-400"}`} strokeWidth={2} />
                            <span className={`text-xs font-medium leading-tight transition-colors ${active ? "text-neutral-900" : "text-neutral-600"}`}>
                              {label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  {data.servicos.length > 0 && (
                    <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-neutral-700">
                        <span className="font-bold text-primary">{data.servicos.length}</span> profissional(is) selecionado(s)
                      </p>
                    </div>
                  )}

                  <Button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    disabled={!canGoToStep2}
                    className="w-full mt-8 h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200"
                  >
                    Continuar
                  </Button>
                </div>
              )}

              {/* Step 2 - Informações do Serviço */}
              {currentStep === 2 && (
                <div className="fade-in-step space-y-6">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <span className="text-primary font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-neutral-900">
                        Informações do <span className="text-primary">serviço</span>
                      </h2>
                      <p className="text-sm text-neutral-500 mt-1">Detalhes sobre sua necessidade.</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                        <MapPin className="w-4 h-4 inline mr-2 text-primary" />
                        Endereço da prestação do serviço
                      </Label>
                      <Input
                        value={data.endereco}
                        onChange={(e) => setData({ ...data, endereco: e.target.value })}
                        placeholder="Ex.: Brooklin, Moema, Guarulhos ou endereço completo"
                        className="h-11 bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                        Descreva os detalhes da prestação de serviço
                      </Label>
                      <Textarea
                        value={data.necessidade}
                        onChange={(e) => setData({ ...data, necessidade: e.target.value })}
                        placeholder="Ex.: Temos um condomínio com 2 torres e precisamos de portaria 24h e limpeza diurna. Escala 12x36. Início desejado para o próximo mês."
                        rows={4}
                        maxLength={600}
                        className="bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg resize-none"
                      />
                      <div className="mt-2 text-right">
                        <p className={`text-xs font-medium transition-colors ${data.necessidade.length > 500 ? "text-amber-500" : "text-neutral-500"}`}>
                          {data.necessidade.length}/600
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                        Qual o principal desafio da sua operação hoje?
                      </Label>
                      <select
                        value={data.desafio}
                        onChange={(e) => setData({ ...data, desafio: e.target.value })}
                        className="w-full h-11 bg-white border-2 border-neutral-200 text-neutral-900 rounded-lg px-4 focus:border-primary/50 focus:outline-none cursor-pointer"
                      >
                        {CHALLENGES.map((challenge) => (
                          <option key={challenge} value={challenge}>{challenge}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      variant="outline"
                      className="flex-1 h-12 border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 rounded-lg font-semibold"
                    >
                      Voltar
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      disabled={!canGoToStep3}
                      className="flex-1 h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200"
                    >
                      Continuar
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3 - Seus Dados */}
              {currentStep === 3 && (
                <div className="fade-in-step space-y-6">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                      <span className="text-primary font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-neutral-900">
                        Seus <span className="text-primary">dados</span>
                      </h2>
                      <p className="text-sm text-neutral-500 mt-1">Para enviarmos sua proposta personalizada.</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                        Nome da sua empresa ou condomínio
                      </Label>
                      <Input
                        value={data.nomeEmpresa}
                        onChange={(e) => setData({ ...data, nomeEmpresa: e.target.value })}
                        placeholder="Digite seu nome"
                        className="h-11 bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                        Seu Nome
                      </Label>
                      <Input
                        value={data.seuNome}
                        onChange={(e) => setData({ ...data, seuNome: e.target.value })}
                        placeholder="Digite seu nome..."
                        className="h-11 bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                          <Mail className="w-4 h-4 inline mr-2 text-primary" />
                          E-mail
                        </Label>
                        <Input
                          type="email"
                          value={data.email}
                          onChange={(e) => setData({ ...data, email: e.target.value })}
                          placeholder="(11) 96666-6666"
                          className="h-11 bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg"
                        />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-neutral-700 block mb-2">
                          <Smartphone className="w-4 h-4 inline mr-2 text-primary" />
                          Telefone
                        </Label>
                        <Input
                          value={data.telefone}
                          onChange={(e) => setData({ ...data, telefone: e.target.value })}
                          placeholder="DD + número"
                          className="h-11 bg-white border-2 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-primary/50 focus:bg-primary/2 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      variant="outline"
                      className="flex-1 h-12 border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 rounded-lg font-semibold"
                    >
                      Voltar
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading || !canSubmit}
                      className="flex-1 h-12 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {loading ? "ENVIANDO..." : "RECEBER ORÇAMENTO PERSONALIZADO"}
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Guarantees - Below Form */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200/50">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Retorno em até</p>
                  <p className="text-xs text-neutral-600">1 hora</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Proposta</p>
                  <p className="text-xs text-neutral-600">sem compromisso</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-50 border border-neutral-200/50">
                <Headphones className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Atendimento direto</p>
                  <p className="text-xs text-neutral-600">com a gestão GS</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
