import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";
const TO_EMAIL = "rh@gsservicos.com.br";

const jobAppSchema = z.object({
  nome: z.string().min(1),
  telefone: z.string().min(6),
  email: z.string().email(),
  dataNascimento: z.string().optional().default(""),
  mensagem: z.string().optional().default(""),
  regiao: z.enum(["zona_leste", "zona_sul", "zona_norte", "zona_oeste"]),
  areaInteresse: z.enum(["portaria", "recepcao", "limpeza", "apoio_operacional", "zeladoria", "supervisao", "outros"]),
  temExperiencia: z.boolean(),
  disponibilidade: z.enum(["diurno", "noturno"]),
});

const regiaoLabels: Record<string, string> = {
  zona_leste: "Zona Leste",
  zona_sul: "Zona Sul",
  zona_norte: "Zona Norte",
  zona_oeste: "Zona Oeste",
};

const areaLabels: Record<string, string> = {
  portaria: "Portaria",
  recepcao: "Recepção",
  limpeza: "Limpeza",
  apoio_operacional: "Apoio Operacional",
  zeladoria: "Zeladoria",
  supervisao: "Supervisão",
  outros: "Outros",
};

export const APIRoute = createAPIFileRoute("/api/send-job-application")({
  POST: async ({ request }) => {
    try {
      const body = await request.json();
      console.log("[API] send-job-application received:", JSON.stringify(body));

      const data = jobAppSchema.parse(body);
      console.log("[API] send-job-application validation passed");

      const emailHtml = `
<h2>Nova Candidatura - Trabalhe Conosco</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<hr />
<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>Data de Nascimento:</strong> ${data.dataNascimento || "Não informado"}</p>
<p><strong>Região:</strong> ${regiaoLabels[data.regiao] || data.regiao}</p>
<p><strong>Área de Interesse:</strong> ${areaLabels[data.areaInteresse] || data.areaInteresse}</p>
<p><strong>Tem Experiência:</strong> ${data.temExperiencia ? "Sim" : "Não"}</p>
<p><strong>Disponibilidade:</strong> ${data.disponibilidade === "diurno" ? "Diurno" : "Noturno"}</p>
<p><strong>Mensagem:</strong> ${data.mensagem || "Não informado"}</p>
      `;

      console.log("[API] Sending job application email via Resend...");
      const { error } = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `[GS] Nova Candidatura - ${data.nome}`,
        html: emailHtml,
      });

      if (error) {
        console.error("[API] Resend error:", error);
        return new Response(JSON.stringify({ success: false, message: "Erro ao enviar email." }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }

      console.log("[API] Job application email sent successfully");
      return new Response(JSON.stringify({ success: true, message: "Candidatura enviada com sucesso!" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("[API] send-job-application error:", err);
      const message = err instanceof z.ZodError 
        ? "Dados inválidos: " + err.errors.map(e => e.message).join(", ")
        : "Erro ao processar candidatura.";
      return new Response(JSON.stringify({ success: false, message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
});
