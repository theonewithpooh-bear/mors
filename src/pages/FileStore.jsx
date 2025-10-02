import React, { useState, useEffect } from 'react';
import { FileText, Download, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const FileStore = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
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
                access documents, reports, and resources from mors
              </p>
            </header>

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