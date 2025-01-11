import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Lock } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ForSchools = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-4">
          For Schools
        </h1>
        
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

          <div className="text-center space-y-6 max-w-2xl">
            <p className="text-gray-300">
              MORS is aiming to provide schools across the county with comprehensive educational resources.
            </p>
            <div className="text-left space-y-4">
              <p className="text-gray-300 font-semibold">Currently available:</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Revision websites for students</li>
              </ul>
              <p className="text-purple-400 font-semibold italic">MORE COMING SOON</p>
            </div>
            <p className="text-gray-400 mt-6">
              Resources are currently limited to our partnered schools, by invitation only. To gain access to these resources,{' '}
              <Link 
                to="/for-schools/become-partner" 
                className="text-purple-400 hover:text-purple-300 underline"
              >
                visit our Become a Partner page
              </Link>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForSchools;