import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
          >
            <h2 className="text-6xl font-bold mb-8 text-white">join the movement</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              we're building a community of change-makers who believe in transforming education. 
              your voice, your ideas, and your passion can help shape the future of learning.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">join our discord</h3>
              <p className="text-gray-300 mb-6">connect with other educators and students who are passionate about change</p>
              <Button variant="outline" className="w-full">
                join community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">attend events</h3>
              <p className="text-gray-300 mb-6">participate in workshops, hackathons, and discussions about the future of education</p>
              <Button variant="outline" className="w-full">
                view calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4">contribute</h3>
              <p className="text-gray-300 mb-6">share your ideas and help develop new approaches to learning</p>
              <Button variant="outline" className="w-full">
                get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <Link to="/">
              <Button 
                variant="outline" 
                className="text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                return to home
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;