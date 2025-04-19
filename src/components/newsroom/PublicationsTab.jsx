import React from 'react';
import { FileArchive } from 'lucide-react';
import { Card } from "@/components/ui/card";

const publications = [];

const PublicationsTab = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black mb-2">Publications Archive</h2>
        <p className="text-gray-600">
          Access our official publications, including manifestos, open letters, and policy documents.
        </p>
      </div>

      {publications.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No publications have been uploaded yet.
        </div>
      )}

      <div className="grid gap-4">
        {publications.map((pub, index) => {
          const Icon = pub.icon || FileArchive;
          return (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-500" />
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
                  <button className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors">
                    Download
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PublicationsTab;
