import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { Resend } from "resend";
import { render } from "@react-email/components";
import * as React from "react";
import { template as formNotification } from "@/lib/email-templates/form-notification";

const resend = new Resend(process.env.RESEND_API_KEY);
const SITE_NAME = "GS";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@gsservicos.com.br";

const proposalSchema = z.object({
  servicos: z.array(z.string().min(1).max(100)).min(1).max(20),
  cep: z.string().max(20).optional().default(""),
  cidade: z.string().max(120).optional().default(""),
  estado: z.string().max(60).optional().default(""),
  endereco: z.string().max(300).optional().default(""),
  nome: z.string().trim().min(1).max(150),
  empresa: z.string().max(150).optional().default(""),
  email: z.string().trim().email().max(255),
  telefone: z.string().trim().min(6).max(30),
  necessidade: z.string().max(2000).optional().default(""),
  desafio: z.string().max(200).optional().default(""),
});

type ProposalResponse = {
  success: boolean;
  message: string;
};

export const submitProposal = createServerFn<any, ProposalResponse>({ method: "POST" })
  .inputValidator((data: unknown) => {
    console.log("[v0] submitProposal inputValidator received:", data);
    try {
      const validated = proposalSchema.parse(data);
      console.log("[v0] submitProposal validation passed");
      return validated;
    } catch (validationError) {
      console.error("[v0] submitProposal validation failed:", validationError);
      throw validationError;
    }
  })
  .handler(async ({ data }): Promise<ProposalResponse> => {
    console.log("[v0] submitProposal handler called with data:", data);
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
<p><strong>Página:</strong> Solicitar Proposta</p>

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

      console.log("[v0] Sending email to:", "eliahu@gsservicos.com.br");
      await resend.emails.send({
        from: FROM_EMAIL,
        to: "eliahu@gsservicos.com.br",
        subject: "[GS] Nova Proposta - " + data.nome,
        html: emailBody,
      });
      
      console.log("[v0] Email sent successfully");

      return { success: true, message: "Proposta enviada com sucesso! Você receberá sua proposta em breve." };
    } catch (error) {
      console.error("[v0] submitProposal error:", error);
      throw error instanceof Error ? error : new Error("Erro desconhecido ao enviar proposta.");
    }
  });

const jobAppSchema = z.object({
  nome: z.string().trim().min(1).max(150),
  telefone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
  dataNascimento: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Data inválida").optional().default(""),
  mensagem: z.string().max(2000).optional().default(""),
  regiao: z.enum(["zona_leste", "zona_sul", "zona_norte", "zona_oeste"]),
  areaInteresse: z.enum(["portaria", "recepcao", "limpeza", "apoio_operacional", "zeladoria", "supervisao", "outros"]),
  temExperiencia: z.boolean(),
  disponibilidade: z.enum(["diurno", "noturno"]),
  resumeBase64: z.string().min(1).max(8_000_000),
  resumeName: z.string().min(1).max(200),
  resumeType: z.string().min(1).max(100),
});

export const submitJobApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => jobAppSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(data.resumeType)) {
        throw new Error("Formato inválido. Envie PDF ou DOC/DOCX.");
      }

      const buf = Buffer.from(data.resumeBase64, "base64");
      if (buf.byteLength > 5 * 1024 * 1024) {
        throw new Error("Arquivo maior que 5MB.");
      }

      // Upload resume to storage
      const safeName = data.resumeName.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
      const { error: upErr } = await supabaseAdmin.storage
        .from("resumes")
        .upload(path, buf, { contentType: data.resumeType, upsert: false });

      if (upErr) {
        console.error("storage upload error:", upErr);
        throw new Error("Falha ao enviar o currículo.");
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
        console.error("job_applications insert error:", dbError);
        throw new Error("Falha ao registrar candidatura.");
      }

      // Send email notification with attachment
      const resumeUrl = supabaseAdmin.storage.from("resumes").getPublicUrl(path).data.publicUrl;

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

      await resend.emails.send({
        from: FROM_EMAIL,
        to: "rh@gsservicos.com.br",
        subject: "[GS] Nova Candidatura - " + data.nome,
        html: emailBody,
      });

      return { success: true, message: "Candidatura enviada com sucesso! Entraremos em contato em breve." };
    } catch (error) {
      console.error("submitJobApplication error:", error);
      throw new Error(error instanceof Error ? error.message : "Erro ao enviar candidatura. Tente novamente.");
    }
  });

// Generic contact form for general inquiries
const contactSchema = z.object({
  nome: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  telefone: z.string().trim().min(6).max(30),
  empresa: z.string().max(150).optional().default(""),
  assunto: z.string().trim().min(3).max(200),
  mensagem: z.string().trim().min(10).max(5000),
  origem: z.enum(["contato", "lead", "outro"]).default("contato"),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const emailBody = `
<h2>Nova Mensagem de Contato</h2>
<p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
<p><strong>Origem:</strong> ${data.origem === "lead" ? "Lead" : "Contato Geral"}</p>
<p><strong>Página:</strong> ${data.origem === "lead" ? "Página Lead/Contato" : "Formulário de Contato"}</p>

<hr />

<p><strong>Nome:</strong> ${data.nome}</p>
<p><strong>E-mail:</strong> ${data.email}</p>
<p><strong>Telefone:</strong> ${data.telefone}</p>
<p><strong>Empresa:</strong> ${data.empresa || "Não informado"}</p>
<p><strong>Assunto:</strong> ${data.assunto}</p>
<p><strong>Mensagem:</strong></p>
<p>${data.mensagem.replace(/\n/g, "<br />")}</p>
      `;

      await resend.emails.send({
        from: FROM_EMAIL,
        to: "eliahu@gsservicos.com.br",
        subject: "[GS] " + data.assunto,
        html: emailBody,
      });

      return { success: true, message: "Mensagem enviada com sucesso! Entraremos em contato em breve." };
    } catch (error) {
      console.error("submitContact error:", error);
      throw new Error("Erro ao enviar mensagem. Tente novamente.");
    }
  });
