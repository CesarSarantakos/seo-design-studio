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

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    console.log("[v0] submitContact validator received:", JSON.stringify(data));
    const validated = contactSchema.parse(data);
    console.log("[v0] submitContact validation passed");
    return validated;
  })
  .handler(async ({ data }): Promise<ContactResponse> => {
    console.log("[v0] submitContact handler called");
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

// ===== JOB APPLICATION SCHEMA =====
const jobAppSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(150),
  telefone: z.string().trim().min(6, "Telefone inválido").max(30),
  email: z.string().trim().email("Email inválido").max(255),
  dataNascimento: z.string().max(20).optional().default(""),
  mensagem: z.string().max(2000).optional().default(""),
  regiao: z.enum(["zona_leste", "zona_sul", "zona_norte", "zona_oeste"]),
  areaInteresse: z.enum(["portaria", "recepcao", "limpeza", "apoio_operacional", "zeladoria", "supervisao", "outros"]),
  temExperiencia: z.boolean(),
  disponibilidade: z.enum(["diurno", "noturno"]),
  resumeBase64: z.string().min(1).max(8_000_000),
  resumeName: z.string().min(1).max(200),
  resumeType: z.string().min(1).max(100),
});

type JobAppResponse = {
  success: boolean;
  message: string;
};

export const submitJobApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    console.log("[v0] submitJobApplication validator received");
    const validated = jobAppSchema.parse(data);
    console.log("[v0] submitJobApplication validation passed");
    return validated;
  })
  .handler(async ({ data }): Promise<JobAppResponse> => {
    console.log("[v0] submitJobApplication handler called");
    try {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(data.resumeType)) {
        return { success: false, message: "Formato inválido. Envie PDF ou DOC/DOCX." };
      }

      const buf = Buffer.from(data.resumeBase64, "base64");
      if (buf.byteLength > 5 * 1024 * 1024) {
        return { success: false, message: "Arquivo maior que 5MB." };
      }

      // Upload resume to storage
      const safeName = data.resumeName.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
      const { error: upErr } = await supabaseAdmin.storage
        .from("resumes")
        .upload(path, buf, { contentType: data.resumeType, upsert: false });

      if (upErr) {
        console.error("[v0] storage upload error:", upErr);
        return { success: false, message: "Falha ao enviar o currículo." };
      }

      // Save to database
      const { error: dbError } = await supabaseAdmin.from("job_applications").insert({
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        data_nascimento: data.dataNascimento || null,
        mensagem: data.mensagem || null,
        resume_path: path,
        regiao: data.regiao,
        area_interesse: data.areaInteresse,
        tem_experiencia: data.temExperiencia,
        disponibilidade: data.disponibilidade,
      });

      if (dbError) {
        console.error("[v0] job_applications insert error:", dbError);
        return { success: false, message: "Falha ao registrar candidatura." };
      }

      // Get public URL for the resume
      const resumeUrl = supabaseAdmin.storage.from("resumes").getPublicUrl(path).data.publicUrl;

      // Prepare attachment buffer for Resend
      const attachmentBuffer = Buffer.from(data.resumeBase64, "base64");

      const emailBody = `
<h2>Nova Candidatura Recebida</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<p><strong>Página:</strong> Trabalhe Conosco</p>

<hr />

<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>Data de Nascimento:</strong> ${data.dataNascimento || "Não informado"}</p>
<p><strong>Região:</strong> ${data.regiao}</p>
<p><strong>Área de Interesse:</strong> ${data.areaInteresse}</p>
<p><strong>Tem Experiência?:</strong> ${data.temExperiencia ? "Sim" : "Não"}</p>
<p><strong>Disponibilidade:</strong> ${data.disponibilidade}</p>
<p><strong>Mensagem:</strong> ${data.mensagem || "Não informado"}</p>
<p><strong>Currículo:</strong> <a href="${resumeUrl}">Baixar currículo</a></p>
      `;

      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: "rh@gsservicos.com.br",
          subject: "[GS] Nova Candidatura - " + data.nome,
          html: emailBody,
          attachments: [
            {
              filename: data.resumeName,
              content: attachmentBuffer,
            },
          ],
        });
        console.log("[v0] Job application email sent successfully");
      } catch (emailError) {
        console.warn("[v0] Email send failed but candidate saved:", emailError);
      }

      return { success: true, message: "Candidatura enviada com sucesso! Entraremos em contato em breve." };
    } catch (error) {
      console.error("[v0] submitJobApplication error:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Erro ao enviar candidatura. Tente novamente."
      };
    }
  });

// ===== PROPOSAL/ORÇAMENTO SCHEMA =====
const proposalSchema = z.object({
  servicos: z.array(z.string().min(1).max(100)).min(1).max(20),
  cep: z.string().max(20).optional().default(""),
  cidade: z.string().max(120).optional().default(""),
  estado: z.string().max(60).optional().default(""),
  endereco: z.string().max(300).optional().default(""),
  nome: z.string().trim().min(1, "Nome é obrigatório").max(150),
  empresa: z.string().max(150).optional().default(""),
  email: z.string().trim().email("Email inválido").max(255),
  telefone: z.string().trim().min(6, "Telefone inválido").max(30),
  necessidade: z.string().max(2000).optional().default(""),
  desafio: z.string().max(200).optional().default(""),
});

type ProposalResponse = {
  success: boolean;
  message: string;
};

export const submitProposal = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    console.log("[v0] submitProposal validator received:", JSON.stringify(data));
    console.log("[v0] submitProposal validator type:", typeof data);
    const validated = proposalSchema.parse(data);
    console.log("[v0] submitProposal validation passed");
    return validated;
  })
  .handler(async ({ data }): Promise<ProposalResponse> => {
    console.log("[v0] submitProposal handler called");
    try {
      // Save to database
      const { error: dbError } = await supabaseAdmin.from("proposal_requests").insert({
        servicos: data.servicos,
        cep: data.cep || null,
        cidade: data.cidade || null,
        estado: data.estado || null,
        endereco: data.endereco || null,
        nome: data.nome,
        empresa: data.empresa || null,
        email: data.email,
        telefone: data.telefone,
        necessidade: data.necessidade || null,
        desafio: data.desafio || null,
      });

      if (dbError) {
        console.error("[v0] submitProposal db error:", dbError);
        throw new Error("Erro ao salvar proposta no banco de dados.");
      }

      console.log("[v0] Database insert successful");

      // Send email notification
      const emailBody = `
<h2>Nova Proposta Recebida</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<p><strong>Página:</strong> Solicitar Orçamento</p>

<hr />

<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>Empresa:</strong> ${data.empresa || "Não informado"}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>CEP:</strong> ${data.cep || "Não informado"}</p>
<p><strong>Cidade:</strong> ${data.cidade || "Não informado"}</p>
<p><strong>Estado:</strong> ${data.estado || "Não informado"}</p>
<p><strong>Endereço:</strong> ${data.endereco || "Não informado"}</p>
<p><strong>Serviços:</strong> ${data.servicos.join(", ")}</p>
<p><strong>Necessidade:</strong> ${data.necessidade || "Não informado"}</p>
<p><strong>Principal Desafio:</strong> ${data.desafio || "Não informado"}</p>
      `;

      console.log("[v0] Sending proposal email...");
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "eliahu@gsservicos.com.br",
        subject: "[GS] Nova Proposta - " + data.nome,
        html: emailBody,
      });

      console.log("[v0] Proposal email sent successfully");
      return { success: true, message: "Proposta enviada com sucesso! Você receberá sua proposta em breve." };
    } catch (error) {
      console.error("[v0] submitProposal error:", error);
      throw error instanceof Error ? error : new Error("Erro ao enviar proposta. Tente novamente.");
    }
  });
