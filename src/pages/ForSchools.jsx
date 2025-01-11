import React from 'react';
import { motion } from 'framer-motion';

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
        <p className="text-gray-400 max-w-2xl mb-12">
          Empowering educational institutions with innovative solutions and support.
        </p>
      </motion.div>
    </div>
  );
};

export default ForSchools;