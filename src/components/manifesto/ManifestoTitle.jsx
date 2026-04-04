import React from 'react';
import { motion } from 'framer-motion';

const ManifestoTitle = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center space-y-6"
      >
        <h1 className="text-7xl md:text-8xl font-display font-bold">
          <span className="font-bold text-primary-foreground bg-foreground px-3 py-1 inline-block">MORS</span>
        </h1>
        <p className="text-3xl font-display text-foreground">a future for education</p>
        <p className="text-lg text-muted-foreground mt-2 tracking-wide">manifesto</p>
      </motion.div>
    </div>
  );
};

export default ManifestoTitle;
