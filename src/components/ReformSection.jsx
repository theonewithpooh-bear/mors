import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ReformSection = ({ title, description, onViewReforms, onGradingSystemClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8"
  >
    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
    <p className="mb-4 text-gray-600 dark:text-gray-400">{description}</p>
    <div className="flex space-x-4">
      <Button 
        onClick={onViewReforms}
        className="flex-grow"
      >
        View Reforms
      </Button>
      <Button
        variant="outline"
        className="flex items-center space-x-2"
        onClick={onGradingSystemClick}
      >
        <Star className="w-4 h-4" />
        <span>Grading System</span>
      </Button>
    </div>
  </motion.div>
);

export default ReformSection;