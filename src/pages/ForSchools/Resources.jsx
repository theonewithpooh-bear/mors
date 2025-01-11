import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Revision Materials",
      description: "Comprehensive revision guides and practice questions for all subjects",
      comingSoon: false
    },
    {
      title: "Teaching Resources",
      description: "Lesson plans, worksheets, and teaching aids",
      comingSoon: true
    },
    {
      title: "Interactive Learning Tools",
      description: "Digital tools and applications to enhance classroom learning",
      comingSoon: true
    },
    {
      title: "Assessment Tools",
      description: "Tools for tracking and evaluating student progress",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
          Educational Resources
        </h1>

        <Alert className="bg-black/30 border-purple-500/50">
          <AlertCircle className="h-4 w-4 text-purple-500" />
          <AlertDescription className="text-gray-300">
            Access to these resources is limited to partner schools. Please ensure you're logged in to view all available materials.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card 
              key={resource.title}
              className="p-6 bg-black/30 border-white/10 relative overflow-hidden group hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
              {resource.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Resources;