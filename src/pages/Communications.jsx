import React from 'react';
import { Button } from "@/components/ui/button";
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Communications = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-12 text-center"
        >
          communications
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-300">open letters</h2>
          <p className="text-xl leading-relaxed mb-8">
            every week, mors sends an open letter to the department of education, highlighting the need for real skills in education and proposing practical solutions.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <Button
              variant="outline"
              className="group relative px-8 py-6 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 hover:scale-105"
              disabled
            >
              view this week's open letter
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-yellow-300 animate-bounce">
                <Construction className="h-5 w-5" />
                <span className="text-sm">coming soon!</span>
              </span>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Communications;