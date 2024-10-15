import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LearnMore = () => {
  const morsFeatures = [
    {
      title: "Real-World Skills Focus",
      description: "We prioritize practical, hands-on learning that directly translates to career success.",
      icon: "◆"
    },
    {
      title: "Innovative Curriculum",
      description: "Our programs blend traditional education with cutting-edge industry practices.",
      icon: "▲"
    },
    {
      title: "Mentor Network",
      description: "Connect with industry professionals who provide guidance and real-world insights.",
      icon: "◯"
    },
    {
      title: "Project-Based Learning",
      description: "Tackle real projects and build a portfolio that showcases your skills to employers.",
      icon: "□"
    },
    {
      title: "Adaptive Learning Paths",
      description: "Personalized education journeys that adapt to your unique strengths and goals.",
      icon: "↗"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-12 text-center"
        >
          Discover MORS
        </motion.h1>
        
        <motion.section 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 bg-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Vision</h2>
          <p className="text-xl leading-relaxed mb-6 text-gray-600">
            MORS is revolutionizing education by prioritizing real-world skills. We're crafting a future where every student is equipped to tackle tomorrow's challenges head-on, bridging the gap between traditional education and the rapidly evolving job market.
          </p>
        </motion.section>
        
        <motion.section 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16 bg-gray-100 rounded-3xl shadow-2xl p-8 border border-gray-200"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">The MORS Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {morsFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <span className="text-4xl text-gray-400">{feature.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-lg text-gray-600">{feature.description}</p>
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
            <Button variant="outline" className="text-xl px-10 py-6 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg">
              Back to Mission Control
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;