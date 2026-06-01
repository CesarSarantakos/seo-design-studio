import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitContact } from "@/lib/api/forms.functions";
import { Send } from "lucide-react";

interface ContactFormProps {
  origem?: "contato" | "lead" | "outro";
  className?: string;
}

export function ContactForm({ origem = "contato", className = "" }: ContactFormProps) {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
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
    if (!form.assunto.trim()) {
      toast.error("Por favor, informe o assunto");
      return;
    }
    if (!form.mensagem.trim()) {
      toast.error("Por favor, escreva uma mensagem");
      return;
    }

    setLoading(true);
    try {
      const result = await submit({
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        empresa: form.empresa,
        assunto: form.assunto,
        mensagem: form.mensagem,
        origem,
      });

      toast.success(result.message || "Mensagem enviada com sucesso!");

      // Reset form
      setForm({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        assunto: "",
        mensagem: "",
      });
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Erro ao enviar mensagem";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl space-y-5 ${className}`}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Seu nome *</Label>
          <Input
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            placeholder="Digite seu nome completo"
            maxLength={150}
            required
            className="h-11 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">E-mail *</Label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
            maxLength={255}
            required
            className="h-11 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Telefone/WhatsApp *</Label>
          <Input
            value={form.telefone}
            onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            placeholder="(11) 99999-9999"
            maxLength={30}
            required
            className="h-11 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Empresa/Condomínio</Label>
          <Input
            value={form.empresa}
            onChange={(e) => setForm({ ...form, empresa: e.target.value })}
            placeholder="Empresa Ltda"
            maxLength={150}
            className="h-11 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Assunto *</Label>
        <Input
          value={form.assunto}
          onChange={(e) => setForm({ ...form, assunto: e.target.value })}
          placeholder="Como podemos ajudar?"
          maxLength={200}
          required
          className="h-11 transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">Mensagem *</Label>
        <Textarea
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          placeholder="Descreva sua dúvida ou necessidade em detalhes..."
          rows={5}
          maxLength={5000}
          required
          className="resize-none transition-all duration-200 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.1)] border-2 border-border/60 focus:border-primary/50"
        />
        <p className="text-xs text-muted-foreground text-right">{form.mensagem.length}/5000</p>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        <Send className={`w-5 h-5 transition-transform duration-300 ${loading ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
