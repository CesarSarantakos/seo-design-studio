import { useState, useRef } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { toast.error("Anexe seu currículo"); return; }
    if (file.size > 5 * 1024 * 1024) { toast.error("Arquivo maior que 5MB"); return; }
    setLoading(true);
    try {
      const resumeBase64 = await fileToBase64(file);
      await submit({ data: { ...form, resumeBase64, resumeName: file.name, resumeType: file.type } });
      toast.success("Currículo enviado! Nossa equipe entrará em contato.");
      setForm({ nome: "", telefone: "", email: "", mensagem: "" });
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