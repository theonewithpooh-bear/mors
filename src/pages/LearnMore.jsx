import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const concepts = [
    "learn by doing",
    "create with purpose",
    "grow together"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-xl mx-auto space-y-24 text-center"
        >
          <h1 className="text-3xl font-light">why we exist</h1>
          
          <div className="space-y-16">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.5 }}
                className="text-xl text-gray-400 font-light"
              >
                {concept}
              </motion.div>
            ))}
          </div>

          <Link to="/get-involved">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-500"
            >
              join us
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;