import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  const listItems = [
    "Volunteer as a mentor",
    "Offer internship opportunities",
    "Participate in workshops and events",
    "Spread awareness on social media",
    "Donate to support our programs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
        >
          Get Involved with MORS
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-4xl font-semibold mb-6 text-green-600">Join the Movement</h2>
          <p className="text-xl leading-relaxed mb-6">
            There are many ways to contribute to the Movement of Real Skills. Whether you're an educator, student, parent, or industry professional, your involvement can make a significant impact on reshaping education for a better future.
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-4xl font-semibold mb-6 text-blue-600">Ways to Contribute</h2>
          <ul className="text-xl leading-relaxed mb-6 space-y-4">
            {listItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                className="flex items-center"
              >
                <span className="mr-4 text-green-500">✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-block">
            <Button variant="outline" className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;