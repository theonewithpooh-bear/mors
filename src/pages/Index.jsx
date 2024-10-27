import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 pt-24">
          <h1 className="text-5xl font-bold mb-8">Welcome to the Movement</h1>
          <p className="text-xl text-gray-400 max-w-2xl text-center">
            Join us in transforming education for a better future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              We envision an education system that prioritizes practical skills and real-world applications.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
            <p className="text-gray-300">
              Join us in advocating for educational reform and be part of the change.
            </p>
          </motion.div>
        </div>
      </div>
      <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;