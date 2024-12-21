import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection = ({ title, subtitle, content, source, className = "" }) => {
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
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="mb-64" // Doubled from mb-32 to mb-64
          >
            {title.includes(":") ? (
              <>
                <h2 className="text-5xl font-serif mb-4">
                  {title.split(":")[0]}:
                </h2>
                <h2 className="text-6xl font-serif">
                  {title.split(":")[1]}
                </h2>
              </>
            ) : (
              <h2 className="text-6xl font-serif">{title}</h2>
            )}
          </motion.div>
        )}
        
        {subtitle && (
          <motion.h3 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-4xl font-serif mb-32" // Doubled from mb-16 to mb-32
          >
            {subtitle}
          </motion.h3>
        )}
        
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="space-y-8 text-xl text-gray-300"
        >
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div key={index} className="space-y-4">
                {item}
              </div>
            ))
          ) : (
            <div className="space-y-4">{content}</div>
          )}
          
          {source && (
            <p className="text-sm text-gray-500 italic mt-32"> // Doubled from mt-16 to mt-32
              Source: {source}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ManifestoSection;