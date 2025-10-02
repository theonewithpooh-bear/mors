import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';

const AdminUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    file: null
  });
  const { toast } = useToast();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 52428800) { // 50MB
        toast({
          title: 'File too large',
          description: 'Maximum file size is 50MB',
          variant: 'destructive'
        });
        return;
      }
      setUploadForm({ ...uploadForm, file });
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!uploadForm.file || !uploadForm.title) {
      toast({
        title: 'Missing information',
        description: 'Please provide a title and select a file',
        variant: 'destructive'
      });
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('title', uploadForm.title);
      formData.append('description', uploadForm.description || '');

      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/upload-file`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session?.access_token || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
          },
          body: formData
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      toast({
        title: 'Success',
        description: 'File uploaded successfully'
      });

      setUploadForm({ title: '', description: '', file: null });
      
      // Reset file input
      const fileInput = document.getElementById('file');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Admin Upload - MORS"
        description="Upload documents to MORS file store"
      />
      <div className="min-h-screen bg-white text-black">
        <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <header className="mb-12">
              <h1 className="text-5xl font-bold mb-4">admin upload</h1>
              <p className="text-xl text-gray-700">
                upload documents to the file store
              </p>
            </header>

            <section className="p-8 border-2 border-black rounded-lg bg-gray-50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Upload className="h-6 w-6" />
                upload new file
              </h2>
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-base font-semibold text-black">title *</Label>
                  <Input
                    id="title"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    placeholder="document title"
                    className="mt-2 border-2 border-gray-300 focus:border-black text-black bg-white"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-base font-semibold text-black">description</Label>
                  <Textarea
                    id="description"
                    value={uploadForm.description}
                    onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                    placeholder="brief description of the document"
                    rows={3}
                    className="mt-2 border-2 border-gray-300 focus:border-black text-black bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="file" className="text-base font-semibold text-black">file * (max 50mb)</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileSelect}
                    className="mt-2 border-2 border-gray-300 focus:border-black text-black bg-white"
                    required
                  />
                  {uploadForm.file && (
                    <p className="text-sm text-gray-600 mt-2">
                      selected: {uploadForm.file.name}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={uploading}
                  className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3"
                >
                  {uploading ? 'uploading...' : 'upload file'}
                </Button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminUpload;
