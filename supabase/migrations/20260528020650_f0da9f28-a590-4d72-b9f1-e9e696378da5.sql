
-- Tables for proposal requests and job applications
CREATE TABLE public.proposal_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  servicos TEXT[] NOT NULL DEFAULT '{}',
  cep TEXT,
  cidade TEXT,
  estado TEXT,
  endereco TEXT,
  nome TEXT NOT NULL,
  empresa TEXT,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.proposal_requests TO anon, authenticated;
GRANT ALL ON public.proposal_requests TO service_role;
ALTER TABLE public.proposal_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit proposal requests"
  ON public.proposal_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT NOT NULL,
  mensagem TEXT,
  resume_path TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.job_applications TO anon, authenticated;
GRANT ALL ON public.job_applications TO service_role;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON public.job_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Storage bucket for resumes (private)
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload a resume"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'resumes');
