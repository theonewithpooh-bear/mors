import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text leading-tight py-1">
        fighting for better education
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
        MORS was established to challenge the UK's outdated education system, which relies too heavily on standardised testing and memorisation at the expense of developing practical, real-world skills.
      </p>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        We believe students deserve an education that prepares them for life beyond exams, one that nurtures creativity, critical thinking, and practical abilities that employers actually value.
      </p>
    </motion.div>
  );
};
export default HeroSection;
