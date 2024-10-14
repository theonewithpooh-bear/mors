import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GetInvolved = () => {
  const listItems = [
    "Become a Skill Superhero (Mentor)",
    "Offer Mind-Blowing Internships",
    "Join Our Epic Workshops",
    "Spread the MORS Magic on Social Media",
    "Fuel the Revolution (Donate)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-7xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300"
        >
          Join the MORS Adventure!
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-yellow-300">Embark on the Quest</h2>
          <p className="text-2xl leading-relaxed mb-6">
            Ready to be part of something extraordinary? Whether you're a wisdom-wielding educator, a curious student, a supportive parent, or an industry guru, your unique powers can help us reshape the future of education!
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-green-300">Choose Your Superpower</h2>
          <ul className="text-2xl leading-relaxed mb-6 space-y-6">
            {listItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-center"
              >
                <span className="mr-4 text-yellow-300 text-4xl">★</span>
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
            <Button variant="outline" className="text-xl px-10 py-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
              Teleport Back Home!
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;