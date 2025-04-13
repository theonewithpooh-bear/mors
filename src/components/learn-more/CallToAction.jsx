
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const CallToAction = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-center"
    >
      <Separator className="my-8 bg-black/10" />
      <h2 className="text-2xl font-bold mb-4">ready to make a difference?</h2>
      <Link to="/get-involved">
        <Button 
          variant="default" 
          className="group text-lg px-6 py-3 rounded-full bg-black text-white hover:bg-black/90"
        >
          join our movement
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default CallToAction;
