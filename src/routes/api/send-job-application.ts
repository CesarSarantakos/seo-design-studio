import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { z } from "zod";

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

export const Route = createFileRoute("/api/send-job-application")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        console.log("[API] send-job-application POST received");
        console.log("[API] RESEND_API_KEY:", process.env.RESEND_API_KEY ? "***SET***" : "MISSING");
        console.log("[API] FROM_EMAIL:", process.env.FROM_EMAIL);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";
        const TO_EMAIL = "rh@gsservicos.com.br";

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

          console.log("[API] Sending job application email from:", FROM_EMAIL, "to:", TO_EMAIL);
          const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: `[GS] Nova Candidatura - ${data.nome}`,
            html: emailHtml,
          });

          console.log("[API] Resend result:", JSON.stringify(result));

          if (result.error) {
            console.error("[API] Resend error:", JSON.stringify(result.error));
            return Response.json(
              { success: false, message: `Erro ao enviar email: ${result.error.message || "Erro desconhecido"}` },
              { status: 500 }
            );
          }

          console.log("[API] Job application email sent successfully, id:", result.data?.id);
          return Response.json({ success: true, message: "Candidatura enviada com sucesso!" });
        } catch (err) {
          console.error("[API] send-job-application error:", err);
          const message = err instanceof z.ZodError 
            ? "Dados inválidos: " + err.errors.map(e => e.message).join(", ")
            : err instanceof Error ? err.message : "Erro ao processar candidatura.";
          return Response.json({ success: false, message }, { status: 400 });
        }
      },
    },
  },
});
