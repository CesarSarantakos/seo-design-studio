
-- Restrict reads/updates/deletes on job_applications to service_role only
CREATE POLICY "Only service role can read job applications"
ON public.job_applications FOR SELECT TO authenticated, anon
USING (auth.role() = 'service_role');

CREATE POLICY "Only service role can update job applications"
ON public.job_applications FOR UPDATE TO authenticated, anon
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Only service role can delete job applications"
ON public.job_applications FOR DELETE TO authenticated, anon
USING (auth.role() = 'service_role');

-- Restrict reads/updates/deletes on proposal_requests to service_role only
CREATE POLICY "Only service role can read proposal requests"
ON public.proposal_requests FOR SELECT TO authenticated, anon
USING (auth.role() = 'service_role');

CREATE POLICY "Only service role can update proposal requests"
ON public.proposal_requests FOR UPDATE TO authenticated, anon
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Only service role can delete proposal requests"
ON public.proposal_requests FOR DELETE TO authenticated, anon
USING (auth.role() = 'service_role');

-- Restrict resumes storage bucket: only service role can read/update/delete
CREATE POLICY "Only service role can read resumes"
ON storage.objects FOR SELECT TO authenticated, anon
USING (bucket_id = 'resumes' AND auth.role() = 'service_role');

CREATE POLICY "Only service role can update resumes"
ON storage.objects FOR UPDATE TO authenticated, anon
USING (bucket_id = 'resumes' AND auth.role() = 'service_role')
WITH CHECK (bucket_id = 'resumes' AND auth.role() = 'service_role');

CREATE POLICY "Only service role can delete resumes"
ON storage.objects FOR DELETE TO authenticated, anon
USING (bucket_id = 'resumes' AND auth.role() = 'service_role');
