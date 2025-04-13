
import React from 'react';
import { motion } from 'framer-motion';

const PressOfficeHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute -top-20 -left-40 w-80 h-80 bg-gray-600/10 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-20 -right-20 w-60 h-60 bg-gray-600/10 rounded-full filter blur-3xl opacity-50"
      />

      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl xl:text-7xl font-bold text-black mb-4 tracking-tight"
        >
          Press Office
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 max-w-2xl text-lg mb-4"
        >
          Stay informed with the latest news, insights, and stories about education reform and technological innovation that are shaping the future of learning.
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default PressOfficeHeader;
