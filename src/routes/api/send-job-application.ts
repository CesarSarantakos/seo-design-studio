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
  resumeBase64: z.string().min(1),
  resumeName: z.string().min(1),
  resumeType: z.string().min(1),
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

        const resend = new Resend(process.env.RESEND_API_KEY);
        const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";
        const TO_EMAIL = "rh@gsservicos.com.br";

        try {
          const body = await request.json();
          console.log("[API] send-job-application received, nome:", body?.nome);

          const data = jobAppSchema.parse(body);
          console.log("[API] send-job-application validation passed");

          // Validate file type
          const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ];
          if (!allowedTypes.includes(data.resumeType)) {
            return Response.json(
              { success: false, message: "Formato inválido. Envie PDF ou DOC/DOCX." },
              { status: 400 }
            );
          }

          // Convert base64 to buffer for attachment
          const attachmentBuffer = Buffer.from(data.resumeBase64, "base64");
          
          // Check file size (5MB max)
          if (attachmentBuffer.byteLength > 5 * 1024 * 1024) {
            return Response.json(
              { success: false, message: "Arquivo maior que 5MB." },
              { status: 400 }
            );
          }

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
<p><strong>Currículo:</strong> Em anexo (${data.resumeName})</p>
          `;

          console.log("[API] Sending job application email with attachment");
          const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: `[GS] Nova Candidatura - ${data.nome}`,
            html: emailHtml,
            attachments: [
              {
                filename: data.resumeName,
                content: attachmentBuffer,
              },
            ],
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
          return Response.json({ success: true, message: "Candidatura enviada com sucesso! Entraremos em contato em breve." });
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
