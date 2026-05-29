ALTER TABLE public.proposal_requests
  ADD COLUMN IF NOT EXISTS necessidade text,
  ADD COLUMN IF NOT EXISTS desafio text;