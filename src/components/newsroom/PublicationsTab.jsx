
import React from 'react';
import { FileText, Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { publications } from '@/data/publicationsData';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";

const PublicationsTab = () => {
  const { toast } = useToast();

  const handleDownload = (publication) => {
    try {
      window.open(publication.downloadUrl, '_blank');
      toast({
        title: "Download started",
        description: `${publication.title} is now downloading.`,
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Download failed",
        description: "There was an issue downloading the file. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
      console.error("Download error:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">Publications Archive</h2>
        <p className="text-gray-600">
          Access our official publications, including meeting minutes, manifestos, open letters, and policy documents.
        </p>
      </div>

      <Alert variant="info" className="mb-6">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Some information in our public documents may be redacted for security and privacy purposes.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4">
        {publications.map((pub) => (
          <Card key={pub.id} className="transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FileText className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <CardTitle className="text-lg">{pub.title}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">{pub.type}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{pub.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pub.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {pub.fileSize} • {pub.format}
                </div>
                <Button 
                  variant="outline"
                  className="text-blue-600 hover:text-blue-700"
                  onClick={() => handleDownload(pub)}
                >
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {publications.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No publications have been uploaded yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicationsTab;
