import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection = ({ title, subtitle, content, source, className = "", isHero }) => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((section, index) => (
        <div key={index} className="mb-8">
          {section.subtitle && (
            <h3 className="text-2xl font-serif mb-4">{section.subtitle}</h3>
          )}
          {Array.isArray(section.text) ? (
            <div className="space-y-4">
              {section.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p>{section.text}</p>
          )}
          {section.source && (
            <p className="text-sm text-gray-500 italic mt-2">
              Source: {section.source}
            </p>
          )}
        </div>
      ));
    }
    return <p>{content}</p>;
  };

  if (isHero) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-[70vh] flex flex-col items-center justify-center space-y-16 p-4"
      >
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-7xl md:text-8xl font-serif"
        >
          {title}
        </motion.h1>
        <motion.h2 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-serif"
        >
          {subtitle}
        </motion.h2>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400"
        >
          {content}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`min-h-[70vh] flex items-center justify-center p-4 ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {title && (
          <motion.div 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="mb-16 flex flex-col items-center justify-center"
          >
            {title.includes(":") ? (
              <>
                <h2 className="text-4xl font-serif mb-2">
                  {title.split(":")[0]}:
                </h2>
                <h2 className="text-5xl font-serif">
                  {title.split(":")[1]}
                </h2>
              </>
            ) : (
              <h2 className="text-5xl font-serif">{title}</h2>
            )}
          </motion.div>
        )}
        
        {subtitle && (
          <motion.h3 
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-3xl font-serif mb-8 flex items-center justify-center"
          >
            {subtitle}
          </motion.h3>
        )}
        
        <motion.div 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="space-y-6 text-lg text-gray-300"
        >
          {renderContent(content)}
          
          {source && (
            <p className="text-sm text-gray-500 italic mt-8">
              Source: {source}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ManifestoSection;