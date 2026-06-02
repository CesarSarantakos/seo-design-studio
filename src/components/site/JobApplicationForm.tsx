import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Paperclip, Calendar } from "lucide-react";
import { toast } from "sonner";

export function JobApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    diaNascimento: "",
    meaNascimento: "",
    anoNascimento: "",
    mensagem: "",
    regiao: "",
    areaInteresse: "",
    temExperiencia: "",
    disponibilidade: "",
  });
  const fileRef = useRef<HTMLInputElement>(null);
  const [dateError, setDateError] = useState("");

  const validateDate = () => {
    const dia = parseInt(form.diaNascimento);
    const mes = parseInt(form.meaNascimento);
    const ano = parseInt(form.anoNascimento);

    if (!form.diaNascimento || !form.meaNascimento || !form.anoNascimento) {
      setDateError("");
      return true;
    }

    if (dia < 1 || dia > 31) {
      setDateError("O dia deve estar entre 1 e 31");
      return false;
    }
    if (mes < 1 || mes > 12) {
      setDateError("O mês deve estar entre 1 e 12");
      return false;
    }
    if (ano < 1900 || ano > new Date().getFullYear()) {
      setDateError(`O ano deve estar entre 1900 e ${new Date().getFullYear()}`);
      return false;
    }

    setDateError("");
    return true;
  };

  const getFullDate = () => {
    if (!form.diaNascimento || !form.meaNascimento || !form.anoNascimento) {
      return "";
    }
    const dia = String(form.diaNascimento).padStart(2, "0");
    const mes = String(form.meaNascimento).padStart(2, "0");
    return `${dia}/${mes}/${form.anoNascimento}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!file) {
      toast.error("Anexe seu currículo (PDF ou DOC/DOCX)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Arquivo maior que 5MB");
      return;
    }
    if (!form.nome.trim()) {
      toast.error("Por favor, informe seu nome");
      return;
    }
    if (!form.email.trim()) {
      toast.error("Por favor, informe seu e-mail");
      return;
    }
    if (!form.telefone.trim()) {
      toast.error("Por favor, informe seu telefone");
      return;
    }
    if (!form.regiao) {
      toast.error("Selecione uma região");
      return;
    }
    if (!form.areaInteresse) {
      toast.error("Selecione uma área de interesse");
      return;
    }
    if (!form.temExperiencia) {
      toast.error("Indique se você tem experiência");
      return;
    }
    if (!form.disponibilidade) {
      toast.error("Selecione sua disponibilidade");
      return;
    }
    if (form.diaNascimento || form.meaNascimento || form.anoNascimento) {
      if (!validateDate()) {
        toast.error(dateError);
        return;
      }
    }

    setLoading(true);
    try {
      const payload = {
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        dataNascimento: getFullDate(),
        mensagem: form.mensagem,
        regiao: form.regiao as "zona_leste" | "zona_sul" | "zona_norte" | "zona_oeste",
        areaInteresse: form.areaInteresse as "portaria" | "recepcao" | "limpeza" | "apoio_operacional" | "zeladoria" | "supervisao" | "outros",
        temExperiencia: form.temExperiencia === "sim",
        disponibilidade: form.disponibilidade as "diurno" | "noturno",
      };
      
      console.log("[v0] Submitting job application via fetch:", payload);
      
      const response = await fetch("/api/send-job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();
      console.log("[v0] API response:", result);
      
      if (result.success) {
        toast.success(result.message || "Candidatura enviada com sucesso! Nossa equipe entrará em contato.");
        
        // Reset form
        setForm({
          nome: "",
          telefone: "",
          email: "",
          diaNascimento: "",
          meaNascimento: "",
          anoNascimento: "",
          mensagem: "",
          regiao: "",
          areaInteresse: "",
          temExperiencia: "",
          disponibilidade: "",
        });
        setFile(null);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        toast.error(result.message || "Erro ao enviar candidatura.");
      }
    } catch (err: any) {
      console.error("[v0] Submit error:", err);
      const errorMsg = err?.message || "Erro ao enviar candidatura";
      toast.error(errorMsg);
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
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>E-mail *</Label>
          <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Digite seu e-mail completo" required maxLength={255} />
        </div>
        <div>
          <div>
            <Label className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              Data de nascimento
            </Label>
            <p className="text-xs text-muted-foreground mt-1 mb-3">Exemplo: 25 / 03 / 1998</p>
          </div>
          <div className="flex gap-2 items-end">
            <div className="flex-1">
              <Input
                type="number"
                min="1"
                max="31"
                placeholder="Dia"
                value={form.diaNascimento}
                onChange={(e) => {
                  let val = e.target.value.slice(0, 2);
                  if (val && parseInt(val) > 31) val = "31";
                  setForm({ ...form, diaNascimento: val });
                  if (form.meaNascimento && form.anoNascimento) validateDate();
                }}
                className="text-center"
              />
            </div>
            <span className="text-muted-foreground">/</span>
            <div className="flex-1">
              <Input
                type="number"
                min="1"
                max="12"
                placeholder="Mês"
                value={form.meaNascimento}
                onChange={(e) => {
                  let val = e.target.value.slice(0, 2);
                  if (val && parseInt(val) > 12) val = "12";
                  setForm({ ...form, meaNascimento: val });
                  if (form.diaNascimento && form.anoNascimento) validateDate();
                }}
                className="text-center"
              />
            </div>
            <span className="text-muted-foreground">/</span>
            <div className="flex-1">
              <Input
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="Ano"
                value={form.anoNascimento}
                onChange={(e) => {
                  let val = e.target.value.slice(0, 4);
                  setForm({ ...form, anoNascimento: val });
                  if (form.diaNascimento && form.meaNascimento) validateDate();
                }}
                className="text-center"
              />
            </div>
          </div>
          {dateError && <p className="text-xs text-red-500 mt-2">{dateError}</p>}
        </div>
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
        <Label>Anexar Currículo * (max. 5MB)</Label>
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
