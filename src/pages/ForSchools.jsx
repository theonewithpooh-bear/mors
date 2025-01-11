import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { AlertCircle, Lock } from 'lucide-react';
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
          <div className="flex flex-col items-center justify-center space-y-6 mt-12">
            <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center border border-white/10">
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            
            <Alert variant="default" className="max-w-xl bg-black/30 border-purple-500/50">
              <AlertCircle className="h-4 w-4 text-purple-500" />
              <AlertDescription className="text-gray-300">
                This section is restricted to partner schools. Please log in to access our educational resources.
              </AlertDescription>
            </Alert>

            <p className="text-gray-400 text-center max-w-lg">
              If you represent a school and would like to become a partner to access these resources, 
              please visit our "Become a Partner" section.
            </p>
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