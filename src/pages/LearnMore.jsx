import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Learn More About MORS
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-4xl font-semibold mb-6 text-blue-600">Our Vision</h2>
          <p className="text-xl leading-relaxed mb-6">
            The Movement of Real Skills (MORS) is dedicated to transforming education by prioritizing practical, real-world skills. We believe in preparing students for the challenges of tomorrow through hands-on learning experiences and innovative teaching methods.
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-4xl font-semibold mb-6 text-purple-600">Our Approach</h2>
          <p className="text-xl leading-relaxed mb-6">
            We focus on developing critical thinking, problem-solving, and adaptability skills that are essential in today's rapidly changing world. Our curriculum integrates project-based learning, internships, and mentorship programs to provide a well-rounded educational experience.
          </p>
        </motion.section>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-block">
            <Button variant="outline" className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;