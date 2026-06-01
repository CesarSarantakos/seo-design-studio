import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";

// ===== CONTACT FORM SCHEMA =====
const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(150),
  email: z.string().trim().email("Email inválido").max(255),
  telefone: z.string().trim().min(6, "Telefone inválido").max(30),
  empresa: z.string().max(150).optional().default(""),
  mensagem: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(5000),
  origem: z.enum(["contato", "lead", "outro"]).default("contato"),
});

type ContactResponse = {
  success: boolean;
  message: string;
};

export const submitContact = createServerFn<any, ContactResponse>({ method: "POST" })
  .inputValidator((data: unknown) => {
    console.log("[v0] submitContact validator received:", data);
    try {
      const validated = contactSchema.parse(data);
      console.log("[v0] submitContact validation passed");
      return validated;
    } catch (error) {
      console.error("[v0] submitContact validation error:", error);
      throw error;
    }
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    console.log("[v0] submitContact handler called with:", { nome: data.nome, email: data.email, telefone: data.telefone, empresa: data.empresa, origem: data.origem });
    try {
      const emailBody = `
<h2>Nova Mensagem de Contato</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<p><strong>Origem:</strong> ${data.origem === "lead" ? "Lead" : "Contato Geral"}</p>

<hr />

<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>Empresa:</strong> ${data.empresa || "Não informado"}</p>
<p><strong>Mensagem:</strong></p>
<p>${data.mensagem.replace(/\n/g, "<br />")}</p>
      `;

      console.log("[v0] Sending contact email...");
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "eliahu@gsservicos.com.br",
        subject: "[GS] Nova Mensagem de Contato - " + data.nome,
        html: emailBody,
      });

      console.log("[v0] Contact email sent successfully");
      return { success: true, message: "Mensagem enviada com sucesso! Entraremos em contato em breve." };
    } catch (error) {
      console.error("[v0] submitContact error:", error);
      throw error instanceof Error ? error : new Error("Erro ao enviar mensagem. Tente novamente.");
    }
  });
