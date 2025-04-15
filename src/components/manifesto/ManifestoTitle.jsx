
import React from 'react';
import { motion } from 'framer-motion';

const ManifestoTitle = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-2"
      >
        <h1 className="text-7xl font-serif font-bold">
          <span className="font-bold text-white">MORS</span>
        </h1>
        <p className="text-3xl font-serif">a future for education</p>
        <p className="text-xl text-gray-400 mt-2">manifesto</p>
      </motion.div>
    </div>
  );
};

export default ManifestoTitle;
