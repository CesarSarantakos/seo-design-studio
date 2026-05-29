import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  Users, ShieldCheck, Headphones, Flame, Sparkles, ShoppingBag, Building2, Leaf,
  Package, Wrench, Camera, MoreHorizontal, MessageCircle, Target, UserX, RefreshCw,
  HeadphonesIcon, Zap, Send, ShieldCheck as ShieldIcon, Clock, Users2, Phone,
} from "lucide-react";
import { submitProposal } from "@/lib/api/forms.functions";

export const Route = createFileRoute("/solicitar-proposta")({
  head: () => ({
    meta: [
      { title: "Solicitar Proposta — GS" },
      { name: "description", content: "Receba uma proposta personalizada da GS em minutos. Conte sobre sua operação e desafios — montamos a solução ideal para você." },
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
  { id: "Jardinagem", label: "Jardinagem", icon: Leaf },
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

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      servicos: d.servicos.includes(s) ? d.servicos.filter((x) => x !== s) : [...d.servicos, s],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.servicos.length === 0) { toast.error("Selecione ao menos um serviço"); return; }
    if (!data.nome || !data.telefone) { toast.error("Preencha nome e WhatsApp"); return; }
    setLoading(true);
    try {
      await submit({
        data: {
          servicos: data.servicos,
          cep: "", cidade: "", estado: "",
          endereco: data.endereco,
          nome: data.nome,
          empresa: data.empresa,
          email: data.email || `${data.telefone.replace(/\D/g, "")}@sem-email.local`,
          telefone: data.telefone,
          necessidade: data.necessidade,
          desafio: data.desafio,
        },
      });
      toast.success("Recebemos sua solicitação! Em breve entraremos em contato.");
      setData({ servicos: [], necessidade: "", desafio: "", nome: "", empresa: "", endereco: "", telefone: "", email: "" });
    } catch (err: any) {
      toast.error(err?.message ?? "Erro ao enviar");
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
              {/* STEP 1 */}
              <StepCard step={STEPS[0]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Quais <span className="text-primary">profissionais</span> sua operação precisa?
                </h2>
                <p className="text-sm text-muted-foreground mb-5">Selecione uma ou mais opções.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {SERVICES.map(({ id, label, icon: Icon }) => {
                    const active = data.servicos.includes(id);
                    return (
                      <label
                        key={id}
                        className={`flex items-center gap-2 border rounded-lg px-3 py-3 cursor-pointer transition-all ${
                          active ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Checkbox checked={active} onCheckedChange={() => toggleService(id)} />
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-xs md:text-sm font-medium text-foreground leading-tight">{label}</span>
                      </label>
                    );
                  })}
                </div>
              </StepCard>

              {/* STEP 2 */}
              <StepCard step={STEPS[1]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Fale rapidamente sobre <span className="text-primary">sua necessidade</span>
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Conte sobre sua operação, quantidade de profissionais, escala, horário, tipo de local, rotinas ou qualquer detalhe importante.
                </p>
                <Textarea
                  value={data.necessidade}
                  onChange={(e) => setData({ ...data, necessidade: e.target.value })}
                  placeholder="Ex.: Temos um condomínio com 2 torres e precisamos de portaria 24h e limpeza diurna. Escala 12x36. Início desejado para o próximo mês."
                  rows={5}
                  maxLength={600}
                />
                <p className="text-right text-xs text-muted-foreground mt-1">{data.necessidade.length}/600</p>
              </StepCard>

              {/* STEP 3 */}
              <StepCard step={STEPS[2]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Qual o principal <span className="text-primary">desafio</span> da sua operação hoje?
                </h2>
                <p className="text-sm text-muted-foreground mb-5">Essa informação nos ajuda a entender melhor e trazer a solução ideal.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {CHALLENGES.map(({ id, icon: Icon }) => {
                    const active = data.desafio === id;
                    return (
                      <label
                        key={id}
                        className={`flex items-center gap-2 border rounded-lg px-3 py-3 cursor-pointer transition-all ${
                          active ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Checkbox checked={active} onCheckedChange={() => setData({ ...data, desafio: active ? "" : id })} />
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-xs md:text-sm font-medium text-foreground leading-tight">{id}</span>
                      </label>
                    );
                  })}
                </div>
              </StepCard>

              {/* STEP 4 */}
              <StepCard step={STEPS[3]}>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Agora só faltam seus dados para enviarmos <span className="text-primary">sua proposta</span>
                </h2>
                <p className="text-sm text-muted-foreground mb-5">É rápido, seguro e sua proposta será enviada online.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Seu nome</Label>
                    <Input value={data.nome} onChange={(e) => setData({ ...data, nome: e.target.value })} placeholder="Digite seu nome" required maxLength={150} />
                  </div>
                  <div>
                    <Label>Como se chama sua empresa ou condomínio?</Label>
                    <Input value={data.empresa} onChange={(e) => setData({ ...data, empresa: e.target.value })} placeholder="Digite o nome da empresa ou condomínio" maxLength={150} />
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Endereço da prestação de serviço</Label>
                    <Input value={data.endereco} onChange={(e) => setData({ ...data, endereco: e.target.value })} placeholder="Ex.: Brooklin, Moema, Guarulhos ou endereço completo" maxLength={300} />
                  </div>
                  <div>
                    <Label>WhatsApp</Label>
                    <Input value={data.telefone} onChange={(e) => setData({ ...data, telefone: e.target.value })} placeholder="(11) 99999-9999" required maxLength={30} />
                  </div>
                  <div>
                    <Label>E-mail</Label>
                    <Input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="seu@email.com" maxLength={255} />
                  </div>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  <ShieldIcon className="w-3 h-3" /> Suas informações estão seguras. Não compartilhamos seus dados.
                </p>
              </StepCard>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-16 text-base font-bold bg-[#0B1B3D] hover:bg-[#0B1B3D]/90 text-white rounded-xl shadow-xl flex flex-col gap-0.5"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  {loading ? "ENVIANDO..." : "RECEBER PROPOSTA"}
                </span>
                <span className="text-xs font-normal text-white/70">Você receberá sua proposta online.</span>
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

function StepCard({ step, children }: { step: typeof STEPS[number]; children: React.ReactNode }) {
  const Icon = step.icon;
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="hidden md:flex flex-col items-center w-28 flex-shrink-0 pt-1">
        <div className="w-10 h-10 rounded-full bg-[#0B1B3D] text-white font-bold flex items-center justify-center text-sm shadow-md">
          {step.n}
        </div>
        <Icon className="w-6 h-6 text-muted-foreground mt-3" strokeWidth={1.5} />
        <span className="text-xs text-muted-foreground text-center mt-2 leading-tight">{step.label}</span>
      </div>
      <div className="flex-1 bg-card border border-border rounded-2xl p-6 md:p-7 shadow-sm">
        <div className="md:hidden flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-[#0B1B3D] text-white font-bold flex items-center justify-center text-xs">
            {step.n}
          </div>
          <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">{step.label}</span>
        </div>
        {children}
      </div>
    </div>
  );
}