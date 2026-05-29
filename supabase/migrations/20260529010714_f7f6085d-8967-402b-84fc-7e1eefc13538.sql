ALTER TABLE public.job_applications
  ADD COLUMN IF NOT EXISTS regiao text,
  ADD COLUMN IF NOT EXISTS area_interesse text,
  ADD COLUMN IF NOT EXISTS tem_experiencia boolean,
  ADD COLUMN IF NOT EXISTS disponibilidade text;