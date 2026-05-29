import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { submitProposal } from "@/lib/api/forms.functions";

const SERVICES = [
  "Controlador de Acesso",
  "Manutenção Predial",
  "Portaria Física",
  "Ronda Patrimonial",
  "Posto de Monitoramento",
  "Copeira",
  "Limpeza (44h semanais)",
  "Recepcionista",
  "Portaria 24Hrs",
  "Zeladoria Predial",
  "Outros",
];

export function ProposalSimulator() {
  const submit = useServerFn(submitProposal);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    servicos: [] as string[],
    cep: "",
    cidade: "",
    estado: "",
    endereco: "",
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
  });

  const toggleService = (s: string) => {
    setData((d) => ({
      ...d,
      servicos: d.servicos.includes(s) ? d.servicos.filter((x) => x !== s) : [...d.servicos, s],
    }));
  };

  const next = () => {
    if (step === 0 && data.servicos.length === 0) {
      toast.error("Selecione ao menos um serviço");
      return;
    }
    if (step === 1 && !data.cidade.trim()) {
      toast.error("Informe ao menos a cidade");
      return;
    }
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.nome || !data.email || !data.telefone) {
      toast.error("Preencha nome, e-mail e telefone");
      return;
    }
    setLoading(true);
    try {
      await submit({ data });
      toast.success("Recebemos sua solicitação! Em breve entraremos em contato.");
      setStep(0);
      setData({
        servicos: [],
        cep: "",
        cidade: "",
        estado: "",
        endereco: "",
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
      });
    } catch (err: any) {
      toast.error(err?.message ?? "Erro ao enviar");
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step + 1) / 3) * 100;

  return (
    <section className="bg-background py-20" aria-labelledby="simulador">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 id="simulador" className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Se você chegou até aqui, é porque isso importa para você.
        </h2>
        <p className="text-lg text-foreground/90 font-semibold mt-6">Vamos simular uma proposta?</p>
        <p className="text-sm text-muted-foreground mb-8">Leva menos de 2 minutos.</p>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-left shadow-xl">
          <Progress value={progress} className="mb-6" />
          <div className="grid grid-cols-3 gap-2 mb-8 text-sm font-medium text-center">
            {["Serviços", "Localização", "Contato"].map((label, i) => (
              <div key={label} className={i === step ? "text-primary" : "text-muted-foreground"}>
                {label}
              </div>
            ))}
          </div>

          {step === 0 && (
            <>
              <h3 className="font-semibold text-foreground mb-4 text-lg">Escolha os serviços que você precisa</h3>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {SERVICES.map((s) => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer text-foreground/90">
                    <Checkbox checked={data.servicos.includes(s)} onCheckedChange={() => toggleService(s)} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
              <Button onClick={next} className="w-full mt-8 h-12 text-base font-semibold">
                Próximo
              </Button>
            </>
          )}

          {step === 1 && (
            <>
              <h3 className="font-semibold text-foreground mb-4 text-lg">Onde será o atendimento?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>CEP</Label>
                  <Input value={data.cep} onChange={(e) => setData({ ...data, cep: e.target.value })} maxLength={20} />
                </div>
                <div>
                  <Label>Cidade *</Label>
                  <Input
                    value={data.cidade}
                    onChange={(e) => setData({ ...data, cidade: e.target.value })}
                    maxLength={120}
                  />
                </div>
                <div>
                  <Label>Estado</Label>
                  <Input
                    value={data.estado}
                    onChange={(e) => setData({ ...data, estado: e.target.value })}
                    maxLength={60}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label>Endereço</Label>
                  <Input
                    value={data.endereco}
                    onChange={(e) => setData({ ...data, endereco: e.target.value })}
                    maxLength={300}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <Button variant="outline" onClick={() => setStep(0)} className="flex-1 h-12">
                  Voltar
                </Button>
                <Button onClick={next} className="flex-1 h-12 font-semibold">
                  Próximo
                </Button>
              </div>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-semibold text-foreground mb-4 text-lg">Como falamos com você?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Nome *</Label>
                  <Input
                    value={data.nome}
                    onChange={(e) => setData({ ...data, nome: e.target.value })}
                    required
                    maxLength={150}
                  />
                </div>
                <div>
                  <Label>Empresa</Label>
                  <Input
                    value={data.empresa}
                    onChange={(e) => setData({ ...data, empresa: e.target.value })}
                    maxLength={150}
                  />
                </div>
                <div>
                  <Label>E-mail *</Label>
                  <Input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
                <div>
                  <Label>Telefone *</Label>
                  <Input
                    value={data.telefone}
                    onChange={(e) => setData({ ...data, telefone: e.target.value })}
                    required
                    maxLength={30}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1 h-12">
                  Voltar
                </Button>
                <Button type="submit" disabled={loading} className="flex-1 h-12 font-semibold">
                  {loading ? "Enviando..." : "Enviar solicitação"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <p className="text-sm text-muted-foreground mt-6">Fique tranquilo, seus dados estão seguros!</p>
        <p className="text-sm text-foreground font-semibold">LGPD – Lei Geral de Proteção de Dados Pessoais</p>
      </div>
    </section>
  );
}
