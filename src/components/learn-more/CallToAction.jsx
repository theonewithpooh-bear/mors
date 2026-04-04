import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="w-16 h-px bg-border mx-auto mb-8" />
      <h2 className="text-2xl font-bold mb-4 text-foreground">ready to make a difference?</h2>
      <Link to="/get-involved">
        <Button className="group text-base px-6 py-3 rounded-full bg-foreground text-primary-foreground hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          join our movement
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default CallToAction;
