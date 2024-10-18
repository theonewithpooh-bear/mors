import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-gray-900 dark:text-white text-center"
        >
          Learn More
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8 text-lg text-gray-700 dark:text-gray-300"
        >
          <p>
            Discover the mission and vision of the Movement of Real Skills. We aim to transform education by prioritizing practical skills and real-world applications.
          </p>
          <p>
            Our approach focuses on inclusivity, ensuring that every student has the opportunity to thrive and reach their full potential.
          </p>
          <p>
            Join us in reshaping the future of education and empowering the next generation with the skills they need to succeed.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;