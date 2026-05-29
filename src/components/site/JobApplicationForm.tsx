import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Paperclip } from "lucide-react";
import { toast } from "sonner";
import { submitJobApplication } from "@/lib/api/forms.functions";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function JobApplicationForm() {
  const submit = useServerFn(submitJobApplication);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    regiao: "",
    areaInteresse: "",
    temExperiencia: "",
    disponibilidade: "",
  });
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { toast.error("Anexe seu currículo"); return; }
    if (file.size > 5 * 1024 * 1024) { toast.error("Arquivo maior que 5MB"); return; }
    if (!form.regiao || !form.areaInteresse || !form.temExperiencia || !form.disponibilidade) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    setLoading(true);
    try {
      const resumeBase64 = await fileToBase64(file);
      await submit({
        data: {
          nome: form.nome,
          telefone: form.telefone,
          email: form.email,
          mensagem: form.mensagem,
          regiao: form.regiao as "zona_leste" | "zona_sul" | "zona_norte" | "zona_oeste",
          areaInteresse: form.areaInteresse as "portaria" | "recepcao" | "limpeza" | "apoio_operacional" | "zeladoria" | "supervisao" | "outros",
          temExperiencia: form.temExperiencia === "sim",
          disponibilidade: form.disponibilidade as "diurno" | "noturno",
          resumeBase64,
          resumeName: file.name,
          resumeType: file.type,
        },
      });
      toast.success("Currículo enviado! Nossa equipe entrará em contato.");
      setForm({ nome: "", telefone: "", email: "", mensagem: "", regiao: "", areaInteresse: "", temExperiencia: "", disponibilidade: "" });
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err: any) {
      toast.error(err?.message ?? "Erro ao enviar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Nome *</Label>
          <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} placeholder="Digite seu nome completo" required maxLength={150} />
        </div>
        <div>
          <Label>Telefone *</Label>
          <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="Exemplo: (11) 91111-1111" required maxLength={30} />
        </div>
      </div>
      <div>
        <Label>E-mail *</Label>
        <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Digite seu e-mail completo" required maxLength={255} />
      </div>
      <div>
        <Label>Mensagem *</Label>
        <Textarea value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} placeholder="Escreva uma breve mensagem ou apresentação" rows={4} maxLength={2000} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Região onde mora *</Label>
          <Select value={form.regiao} onValueChange={(v) => setForm({ ...form, regiao: v })}>
            <SelectTrigger className="mt-1"><SelectValue placeholder="Selecione a região" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="zona_leste">Zona Leste</SelectItem>
              <SelectItem value="zona_sul">Zona Sul</SelectItem>
              <SelectItem value="zona_norte">Zona Norte</SelectItem>
              <SelectItem value="zona_oeste">Zona Oeste</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Área de interesse *</Label>
          <Select value={form.areaInteresse} onValueChange={(v) => setForm({ ...form, areaInteresse: v })}>
            <SelectTrigger className="mt-1"><SelectValue placeholder="Selecione a área" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="portaria">Portaria</SelectItem>
              <SelectItem value="recepcao">Recepção</SelectItem>
              <SelectItem value="limpeza">Limpeza</SelectItem>
              <SelectItem value="apoio_operacional">Apoio Operacional</SelectItem>
              <SelectItem value="zeladoria">Zeladoria</SelectItem>
              <SelectItem value="supervisao">Supervisão</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Tem experiência? *</Label>
          <RadioGroup value={form.temExperiencia} onValueChange={(v) => setForm({ ...form, temExperiencia: v })} className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem value="sim" id="exp-sim" /> <span className="text-sm">Sim</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem value="nao" id="exp-nao" /> <span className="text-sm">Não</span>
            </label>
          </RadioGroup>
        </div>
        <div>
          <Label>Disponibilidade *</Label>
          <RadioGroup value={form.disponibilidade} onValueChange={(v) => setForm({ ...form, disponibilidade: v })} className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem value="diurno" id="disp-diurno" /> <span className="text-sm">Diurno</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem value="noturno" id="disp-noturno" /> <span className="text-sm">Noturno</span>
            </label>
          </RadioGroup>
        </div>
      </div>
      <div>
        <Label>Anexar Currículo * (máx. 5MB)</Label>
        <label className="mt-1 flex items-center gap-2 border border-dashed border-border rounded-md px-4 py-3 cursor-pointer hover:bg-muted/30 transition-colors">
          <Paperclip className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {file ? file.name : "Clique para anexar arquivo (PDF, DOC)"}
          </span>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="hidden"
          />
        </label>
      </div>
      <Button type="submit" disabled={loading} className="w-full h-12 text-base font-semibold">
        {loading ? "Enviando..." : "Enviar Currículo"}
      </Button>
    </form>
  );
}