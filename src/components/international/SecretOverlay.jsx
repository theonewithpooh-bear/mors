import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecretOverlay = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 backdrop-blur-xl bg-black/50 flex items-center justify-center"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg p-8 rounded-xl bg-black/40 border border-white/10 text-center space-y-6"
      >
        <div className="flex justify-center space-x-4">
          <Globe2 className="w-12 h-12 text-blue-400 animate-pulse" />
          <Lock className="w-12 h-12 text-purple-400 animate-pulse" />
        </div>
        
        <h2 className="text-3xl font-bold text-white">
          🤫 MORS International is currently in stealth mode
        </h2>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          We're working on something big behind the scenes. While we're not ready to reveal our international plans just yet, 
          we can tell you this: education needs reform everywhere, not just in the UK.
        </p>
        
        <p className="text-xl font-semibold text-blue-400">
          Watch this space. Something exciting is coming.
        </p>
        
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-200"
        >
          Return to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SecretOverlay;