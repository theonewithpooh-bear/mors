import React, { useState, useEffect } from 'react';
import { Upload, FileText, Download, Trash2, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const FileStore = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    file: null
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const { data, error } = await supabase
        .from('file_metadata')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setFiles(data || []);
    } catch (error) {
      console.error('Error fetching files:', error);
      toast({
        title: 'Error',
        description: 'Failed to load files',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

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
      const fileExt = uploadForm.file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, uploadForm.file);

      if (uploadError) throw uploadError;

      // Save metadata
      const { error: metadataError } = await supabase
        .from('file_metadata')
        .insert({
          title: uploadForm.title,
          description: uploadForm.description,
          filename: uploadForm.file.name,
          file_path: filePath,
          file_size: uploadForm.file.size,
          file_type: uploadForm.file.type
        });

      if (metadataError) throw metadataError;

      toast({
        title: 'Success',
        description: 'File uploaded successfully'
      });

      setUploadForm({ title: '', description: '', file: null });
      fetchFiles();
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

  const handleDownload = async (file) => {
    try {
      const { data, error } = await supabase.storage
        .from('documents')
        .download(file.file_path);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: 'Download started',
        description: file.filename
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: 'Download failed',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const filteredFiles = files.filter(file =>
    file.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.filename.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEOHead 
        title="File Store - MORS"
        description="Access and download documents, reports, and resources from MORS"
      />
      <div className="min-h-screen bg-white text-black">
        <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <header className="mb-12">
              <h1 className="text-5xl font-bold mb-4">file store</h1>
              <p className="text-xl text-gray-700">
                access documents, reports, and resources
              </p>
            </header>

            {/* Upload Section */}
            <section className="mb-12 p-8 border-2 border-black rounded-lg bg-gray-50">
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
                      selected: {uploadForm.file.name} ({formatFileSize(uploadForm.file.size)})
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

            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 border-gray-300 focus:border-black text-black bg-white"
                />
              </div>
            </div>

            {/* Files List */}
            <section className="space-y-4">
              {loading ? (
                <div className="py-16 text-center text-gray-600 border-2 border-gray-200 rounded-lg">
                  loading files...
                </div>
              ) : filteredFiles.length === 0 ? (
                <div className="py-16 text-center text-gray-600 border-2 border-gray-200 rounded-lg">
                  {searchQuery ? 'no files match your search' : 'no files uploaded yet'}
                </div>
              ) : (
                filteredFiles.map((file) => (
                  <div 
                    key={file.id} 
                    className="p-6 border-2 border-gray-300 rounded-lg hover:border-black hover:shadow-lg transition-all bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg border-2 border-gray-300">
                        <FileText className="h-6 w-6 text-black" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-2 text-black">{file.title}</h3>
                        {file.description && (
                          <p className="text-gray-700 mb-3">
                            {file.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="font-medium">{file.filename}</span>
                          <span>•</span>
                          <span>{formatFileSize(file.file_size)}</span>
                          <span>•</span>
                          <span>{new Date(file.uploaded_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => handleDownload(file)}
                        className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        download
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FileStore;