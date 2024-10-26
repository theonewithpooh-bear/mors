import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Star, Cloud, Cog, Sparkles, Hexagon } from 'lucide-react';

const involvementOptions = [
  {
    title: "mentor the next generation",
    description: "share your expertise and guide students through real-world challenges.",
    icon: Star
  },
  {
    title: "create learning opportunities",
    description: "open your workplace doors to innovative internship programs.",
    icon: Cloud
  },
  {
    title: "lead skill workshops",
    description: "bring your industry knowledge to interactive learning sessions.",
    icon: Cog
  },
  {
    title: "amplify our message",
    description: "help us reach more people who believe in practical education.",
    icon: Sparkles
  },
  {
    title: "support our mission",
    description: "contribute to building the future of skills-based education.",
    icon: Hexagon
  }
];

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-12 mt-24 text-center"
        >
          join the mors adventure!
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-300">shape the future of education</h2>
          <p className="text-xl leading-relaxed mb-6">
            we're looking for passionate individuals who want to revolutionize education. whether you're an educator, professional, or supporter, your unique perspective can help transform how we learn.
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-300">ways to contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvementOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <option.icon className="w-8 h-8 text-gray-400" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-lg text-gray-300">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center"
        >
          <Link to="/" className="inline-block">
            <Button variant="outline" className="text-xl px-10 py-6 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
              return to home base
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;