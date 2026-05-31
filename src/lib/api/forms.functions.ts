import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { render } from "@react-email/components";
import * as React from "react";
import { template as formNotification } from "@/lib/email-templates/form-notification";

const NOTIFY_TO = "cesarsarantakos@gmail.com";
const SITE_NAME = "GS";
const SENDER_DOMAIN = "notify.gs.stktecnologia.com";
const FROM_DOMAIN = "gs.stktecnologia.com";

async function notifyFormSubmission(
  formType: string,
  fields: Array<{ label: string; value: string }>,
) {
  try {
    const submittedAt = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const element = React.createElement(formNotification.component, {
      formType,
      submittedAt,
      fields,
    });
    const html = await render(element);
    const text = await render(element, { plainText: true });
    const subject = typeof formNotification.subject === "function"
      ? formNotification.subject({ formType })
      : formNotification.subject;
    const messageId = crypto.randomUUID();

    await (supabaseAdmin as any).from("email_send_log").insert({
      message_id: messageId,
      template_name: "form-notification",
      recipient_email: NOTIFY_TO,
      status: "pending",
    });

    const { error } = await (supabaseAdmin as any).rpc("enqueue_email", {
      queue_name: "transactional_emails",
      payload: {
        message_id: messageId,
        to: NOTIFY_TO,
        from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
        sender_domain: SENDER_DOMAIN,
        subject,
        html,
        text,
        purpose: "transactional",
        label: "form-notification",
        idempotency_key: messageId,
        queued_at: new Date().toISOString(),
      },
    });
    if (error) console.error("notifyFormSubmission enqueue error:", error);
  } catch (e) {
    console.error("notifyFormSubmission error:", e);
  }
}

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

export const submitProposal = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => proposalSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("proposal_requests").insert({
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
    if (error) {
      console.error("submitProposal error:", error);
      throw new Error("Não foi possível enviar a solicitação. Tente novamente.");
    }
    await notifyFormSubmission("Solicitar Proposta", [
      { label: "Nome", value: data.nome },
      { label: "Empresa", value: data.empresa },
      { label: "E-mail", value: data.email },
      { label: "Telefone", value: data.telefone },
      { label: "Serviços", value: data.servicos.join(", ") },
      { label: "CEP", value: data.cep },
      { label: "Cidade", value: data.cidade },
      { label: "Estado", value: data.estado },
      { label: "Endereço", value: data.endereco },
      { label: "Necessidade", value: data.necessidade },
      { label: "Principal desafio", value: data.desafio },
    ]);
    return { success: true };
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
  resumeBase64: z.string().min(1).max(8_000_000), // ~6MB base64
  resumeName: z.string().min(1).max(200),
  resumeType: z.string().min(1).max(100),
});

export const submitJobApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => jobAppSchema.parse(data))
  .handler(async ({ data }) => {
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
    const safeName = data.resumeName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
    const { error: upErr } = await supabaseAdmin.storage
      .from("resumes")
      .upload(path, buf, { contentType: data.resumeType, upsert: false });
    if (upErr) {
      console.error("storage upload error:", upErr);
      throw new Error("Falha ao enviar o currículo.");
    }
    const { error } = await supabaseAdmin.from("job_applications").insert({
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
    if (error) {
      console.error("job_applications insert error:", error);
      throw new Error("Falha ao registrar candidatura.");
    }
    await notifyFormSubmission("Trabalhe Conosco", [
      { label: "Nome", value: data.nome },
      { label: "E-mail", value: data.email },
      { label: "Telefone", value: data.telefone },
      { label: "Data de Nascimento", value: data.dataNascimento || "Não informado" },
      { label: "Região", value: data.regiao },
      { label: "Área de interesse", value: data.areaInteresse },
      { label: "Tem experiência?", value: data.temExperiencia ? "Sim" : "Não" },
      { label: "Disponibilidade", value: data.disponibilidade },
      { label: "Mensagem", value: data.mensagem ?? "" },
      { label: "Currículo (arquivo)", value: path },
    ]);
    return { success: true };
  });
