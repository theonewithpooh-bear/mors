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
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <img 
            src="https://lh7-rt.googleusercontent.com/slidesz/AGV_vUfiGCG7PgVn1wL1lkE9YfnenZ7aOiOrn6qstBzuNwfRWfNwQXLg7dHHKkcpSvslfz1ZiFK2KjTjlF-FH6lkY-EwxwQF9SMvnePa-z4hsexph5S9TlKTRnJ1GeeYweOzVCKozy10qXWrJkF_hkTMq2MK9sUGUNk=s2048?key=eKQKisBXqXxItxT7ctiz3A"
            alt="Communications Header"
            className="w-96 h-auto object-contain invert"
          />
        </motion.div>
        
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
            alt="Department of Education Logo"
            className="w-48 h-auto object-contain mb-6 invert"
          />
          <h2 className="text-2xl font-semibold">Department for Education</h2>
        </div>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mb-16 bg-white/20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">open letters</h2>
            <p className="text-xl leading-relaxed mb-8 text-gray-100">
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
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Communications;