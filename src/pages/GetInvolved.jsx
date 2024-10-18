import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const InvolvementOption = ({ icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
  >
    <span className="text-4xl text-gray-400 mb-4 block">{icon}</span>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-lg text-gray-300">{description}</p>
  </motion.div>
);

const GetInvolved = () => {
  const involvementOptions = [
    {
      title: "Become a Skill Superhero",
      description: "Mentor students and share your real-world expertise.",
      icon: "★"
    },
    {
      title: "Offer Mind-Blowing Internships",
      description: "Provide hands-on learning experiences in your organization.",
      icon: "⚡"
    },
    {
      title: "Join Our Epic Workshops",
      description: "Participate in or lead skill-building workshops.",
      icon: "⚙"
    },
    {
      title: "Spread the MORS Magic",
      description: "Share our mission on social media and in your networks.",
      icon: "✦"
    },
    {
      title: "Fuel the Revolution",
      description: "Donate to support our programs and initiatives.",
      icon: "⬢"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-12 text-center"
        >
          Join the MORS Adventure!
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white border-opacity-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-300">Embark on the Quest</h2>
          <p className="text-xl leading-relaxed mb-6">
            Ready to be part of something extraordinary? Whether you're a wisdom-wielding educator, a curious student, a supportive parent, or an industry guru, your unique powers can help us reshape the future of education!
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-300">Choose Your Superpower</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvementOptions.map((option, index) => (
              <InvolvementOption key={index} {...option} />
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
            <Button variant="secondary" className="text-xl px-10 py-6 rounded-full bg-white text-blue-500 hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
              Return to Home Base
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GetInvolved;