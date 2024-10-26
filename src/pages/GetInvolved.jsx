import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const involvementOptions = [
  {
    title: "become a skill superhero",
    description: "mentor students and share your real-world expertise.",
    icon: "★"
  },
  {
    title: "offer mind-blowing internships",
    description: "provide hands-on learning experiences in your organization.",
    icon: "☁️"
  },
  {
    title: "join our epic workshops",
    description: "participate in or lead skill-building workshops.",
    icon: "⚙"
  },
  {
    title: "spread the mors magic",
    description: "share our mission on social media and in your networks.",
    icon: "✦"
  },
  {
    title: "fuel the revolution",
    description: "donate to support our programs and initiatives.",
    icon: "⬢"
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
          <h2 className="text-4xl font-bold mb-6 text-gray-300">embark on the quest</h2>
          <p className="text-xl leading-relaxed mb-6">
            ready to be part of something extraordinary? whether you're a wisdom-wielding educator, a curious student, a supportive parent, or an industry guru, your unique abilities can help us reshape the future of education!
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-300">choose your superpower</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvementOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <span className="text-4xl text-gray-400">{option.icon}</span>
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