import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ManifestoSection = ({ title, subtitle, content, className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex items-center justify-center p-4 ${className}`}
    >
      <Card className="bg-black border-white/10 w-full max-w-4xl">
        <CardContent className="p-8">
          {title && <h2 className="text-4xl font-serif mb-8">{title}</h2>}
          {subtitle && <h3 className="text-2xl font-serif mb-4">{subtitle}</h3>}
          <div className="space-y-4">
            {content}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ManifestoSection;