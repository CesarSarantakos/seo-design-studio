import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

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
    });
    if (error) {
      console.error("submitProposal error:", error);
      throw new Error("Não foi possível enviar a solicitação. Tente novamente.");
    }
    return { success: true };
  });

const jobAppSchema = z.object({
  nome: z.string().trim().min(1).max(150),
  telefone: z.string().trim().min(6).max(30),
  email: z.string().trim().email().max(255),
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
    return { success: true };
  });