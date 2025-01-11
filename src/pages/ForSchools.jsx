import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ForSchools = () => {
  const location = useLocation();
  const isResourcesPage = location.pathname === '/for-schools/resources';

  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-4">
          {isResourcesPage ? 'Educational Resources' : 'For Schools'}
        </h1>
        
        {isResourcesPage ? (
          <div className="space-y-8">
            <p className="text-gray-400 max-w-2xl text-lg">
              MORS has put together and is still actively developing a wide variety of resources for schools to adopt and use as they wish, completely free of charge.
            </p>

            <Alert variant="default" className="bg-black/30 border-yellow-500/50">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <AlertDescription className="text-gray-300">
                Currently, these resources are available by invitation only and are being tested with select partner schools. All tools are in beta phase.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 mt-8">
              <div className="p-6 rounded-lg bg-black/30 border border-white/10">
                <h3 className="text-xl font-semibold mb-2 text-white">Beta Program Access</h3>
                <p className="text-gray-400">
                  If you're interested in becoming a partner school and gaining early access to our educational resources, please visit our "Become a Partner" section.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 max-w-2xl mb-12">
            Empowering educational institutions with innovative solutions and support.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ForSchools;