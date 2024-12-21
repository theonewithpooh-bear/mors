import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection = ({ title, subtitle, content, className = "", source }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex items-center justify-center p-4 ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {title && (
          <motion.h2 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-5xl font-serif mb-8"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.h3 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-3xl font-serif mb-4"
          >
            {subtitle}
          </motion.h3>
        )}
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="space-y-6 text-lg text-gray-300"
        >
          {content}
          {source && (
            <p className="text-sm text-gray-500 italic mt-4">
              Source: {source}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ManifestoSection;