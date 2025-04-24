
import React from 'react';
import { motion } from 'framer-motion';

const ManifestoSection = ({
  title,
  subtitle,
  content,
  source,
  className = "",
  isHero
}) => {
  const renderContent = content => {
    // Handle JSX content directly
    if (React.isValidElement(content)) {
      return content;
    }
    
    // Handle array of sections
    if (Array.isArray(content)) {
      return content.map((section, index) => (
        <div key={index} className="mb-16">
          {section.subtitle && <h3 className="text-3xl font-serif mb-6">{section.subtitle}</h3>}
          {Array.isArray(section.text) ? (
            <div className="space-y-4">
              {section.text.map((paragraph, idx) => <p key={idx} className="text-gray-800">{paragraph}</p>)}
            </div>
          ) : (
            <p className="text-gray-800">{section.text}</p>
          )}
          {section.source && (
            <p className="text-sm text-gray-500 italic mt-4">Source: {section.source}</p>
          )}
        </div>
      ));
    }
    
    // Handle simple string content
    return <p className="text-gray-800">{content}</p>;
  };
  
  // Hero section style
  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="min-h-[80vh] flex flex-col items-center justify-center space-y-16 p-8"
      >
        <motion.h2
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif text-center"
        >
          {subtitle}
        </motion.h2>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl text-gray-700 text-center max-w-3xl"
        >
          {content}
        </motion.p>
      </motion.div>
    );
  }
  
  // Standard section style
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4">
        {title && (
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {title.includes(":") ? (
              <>
                <h2 className="text-4xl md:text-5xl font-serif mb-2 text-center">
                  {title.split(":")[0]}:
                </h2>
                <h2 className="text-4xl md:text-5xl font-serif text-center">
                  {title.split(":")[1]}
                </h2>
              </>
            ) : (
              <h2 className="text-4xl md:text-5xl font-serif text-center">{title}</h2>
            )}
          </motion.div>
        )}
        
        {subtitle && (
          <motion.h3
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif mb-12 text-center"
          >
            {subtitle}
          </motion.h3>
        )}
        
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-lg"
        >
          {renderContent(content)}
          
          {source && (
            <p className="text-sm text-gray-500 italic mt-8 text-center">
              Source: {source}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ManifestoSection;
