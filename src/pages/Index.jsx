import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8" style={{ animation: 'fade-in 1s ease-out' }}>
          <p className="text-gray-400 tracking-widest uppercase">introducing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            movement of real skills
          </h1>
          <p className="text-xl text-gray-400 tracking-wider">M.O.R.S.</p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-16">
            our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-32 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Practical Education</h3>
            <p className="text-gray-400">
              Learn skills that matter in the real world through hands-on experience and practical applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="h-6 w-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Community Driven</h3>
            <p className="text-gray-400">
              Join a growing community of learners and educators committed to meaningful education reform.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="h-12 w-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Future Focused</h3>
            <p className="text-gray-400">
              Prepare for tomorrow's challenges with a curriculum designed for the modern world.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;