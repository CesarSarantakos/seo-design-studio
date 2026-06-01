import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { z } from "zod";

const proposalSchema = z.object({
  servicos: z.array(z.string()).min(1),
  nome: z.string().min(1),
  email: z.string().email(),
  telefone: z.string().min(6),
  empresa: z.string().optional().default(""),
  endereco: z.string().optional().default(""),
  cep: z.string().optional().default(""),
  cidade: z.string().optional().default(""),
  estado: z.string().optional().default(""),
  necessidade: z.string().optional().default(""),
  desafio: z.string().optional().default(""),
});

export const Route = createFileRoute("/api/send-proposal")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        console.log("[API] send-proposal POST received");
        console.log("[API] RESEND_API_KEY:", process.env.RESEND_API_KEY ? "***SET***" : "MISSING");
        console.log("[API] FROM_EMAIL:", process.env.FROM_EMAIL);

        const resend = new Resend(process.env.RESEND_API_KEY);
        const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";
        const TO_EMAIL = "eliahu@gsservicos.com.br";

        try {
          const body = await request.json();
          console.log("[API] send-proposal received:", JSON.stringify(body));

          const data = proposalSchema.parse(body);
          console.log("[API] send-proposal validation passed");

          const emailHtml = `
<h2>Nova Solicitação de Orçamento</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<hr />
<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>Empresa:</strong> ${data.empresa || "Não informado"}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>CEP:</strong> ${data.cep || "Não informado"}</p>
<p><strong>Cidade:</strong> ${data.cidade || "Não informado"}</p>
<p><strong>Estado:</strong> ${data.estado || "Não informado"}</p>
<p><strong>Endereço:</strong> ${data.endereco || "Não informado"}</p>
<p><strong>Serviços Solicitados:</strong> ${data.servicos.join(", ")}</p>
<p><strong>Necessidade:</strong> ${data.necessidade || "Não informado"}</p>
<p><strong>Principal Desafio:</strong> ${data.desafio || "Não informado"}</p>
          `;

          console.log("[API] Sending email from:", FROM_EMAIL, "to:", TO_EMAIL);
          const result = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: `[GS] Nova Proposta - ${data.nome}`,
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

          console.log("[API] Email sent successfully, id:", result.data?.id);
          return Response.json({ success: true, message: "Proposta enviada com sucesso!" });
        } catch (err) {
          console.error("[API] send-proposal error:", err);
          const message = err instanceof z.ZodError 
            ? "Dados inválidos: " + err.errors.map(e => e.message).join(", ")
            : err instanceof Error ? err.message : "Erro ao processar solicitação.";
          return Response.json({ success: false, message }, { status: 400 });
        }
      },
    },
  },
});
