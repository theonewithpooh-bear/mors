-- Create storage bucket for documents
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'documents',
  'documents',
  true,
  52428800, -- 50MB limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'image/jpeg', 'image/png', 'image/gif', 'application/zip']
);

-- Create table for file metadata
CREATE TABLE public.file_metadata (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  file_type TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.file_metadata ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public can view all files
CREATE POLICY "Anyone can view file metadata"
ON public.file_metadata
FOR SELECT
USING (true);

-- Storage policies - Public can view files
CREATE POLICY "Public can view documents"
ON storage.objects
FOR SELECT
USING (bucket_id = 'documents');

-- Create trigger for updated_at
CREATE TRIGGER update_file_metadata_updated_at
BEFORE UPDATE ON public.file_metadata
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();