import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="text-7xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
        >
          Discover MORS
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-yellow-300">Our Vision</h2>
          <p className="text-2xl leading-relaxed mb-6">
            MORS is revolutionizing education by prioritizing real-world skills. We're crafting a future where every student is equipped to tackle tomorrow's challenges head-on!
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-green-300">Our Approach</h2>
          <p className="text-2xl leading-relaxed mb-6">
            We're not just teaching; we're igniting minds! Through cutting-edge project-based learning, real-world internships, and mentorship programs, we're forging the innovators of tomorrow.
          </p>
        </motion.section>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-block">
            <Button variant="outline" className="text-xl px-10 py-6 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:from-yellow-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
              Blast Off to Home!
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;