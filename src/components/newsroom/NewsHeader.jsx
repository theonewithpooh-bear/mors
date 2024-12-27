import React from 'react';
import { motion } from 'framer-motion';

const NewsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
    >
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-4">
        Newsroom
      </h1>
      <p className="text-gray-400 max-w-2xl mb-12">
        Explore the latest updates, insights, and stories about education reform and technological innovation.
      </p>
    </motion.div>
  );
};

export default NewsHeader;