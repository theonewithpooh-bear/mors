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
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">File Store</h1>
            <p className="text-muted-foreground mb-8">
              Access documents, reports, and resources
            </p>

            {/* Upload Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload New File
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={uploadForm.title}
                      onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                      placeholder="Document title"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={uploadForm.description}
                      onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                      placeholder="Brief description of the document"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="file">File * (Max 50MB)</Label>
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileSelect}
                      required
                    />
                    {uploadForm.file && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Selected: {uploadForm.file.name} ({formatFileSize(uploadForm.file.size)})
                      </p>
                    )}
                  </div>

                  <Button type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload File'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search files..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Files List */}
            <div className="space-y-4">
              {loading ? (
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    Loading files...
                  </CardContent>
                </Card>
              ) : filteredFiles.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center text-muted-foreground">
                    {searchQuery ? 'No files match your search' : 'No files uploaded yet'}
                  </CardContent>
                </Card>
              ) : (
                filteredFiles.map((file) => (
                  <Card key={file.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-muted rounded-lg">
                          <FileText className="h-6 w-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg mb-1">{file.title}</h3>
                          {file.description && (
                            <p className="text-muted-foreground text-sm mb-2">
                              {file.description}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>{file.filename}</span>
                            <span>•</span>
                            <span>{formatFileSize(file.file_size)}</span>
                            <span>•</span>
                            <span>{new Date(file.uploaded_at).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(file)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FileStore;