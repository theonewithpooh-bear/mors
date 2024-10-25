import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const points = [
  {
    title: "Real Skills First",
    description: "We prioritize practical, hands-on learning over traditional theoretical approaches"
  },
  {
    title: "Project-Based Learning",
    description: "Students learn through real-world projects that demonstrate actual capabilities"
  },
  {
    title: "Industry Integration",
    description: "Direct collaboration with industries to ensure relevant skill development"
  }
];

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-12 text-center">Our Vision</h1>
          
          <div className="space-y-12">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg"
              >
                <h2 className="text-2xl font-semibold mb-3">{point.title}</h2>
                <p className="text-gray-400 text-lg">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-24 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HudHdVS4plDNtHqo6jTh7iPg8uoPmPd5lQ&s"
                  alt="Monty Middleton-Burn"
                  className="rounded-lg w-full object-cover aspect-square"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Hey, I'm Monty!</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I started m.o.r.s. while taking my GCSEs (yep, you read that right!) and serving as Head Boy at my school. Right now it's just me and my trusty AI assistant running things - we're quite the duo! I'm super passionate about making real change in education, and I spend my time chatting with everyone who'll listen about how we can make learning more practical and meaningful. It's pretty exciting stuff!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Link to="/get-involved">
              <Button 
                variant="outline" 
                className="group text-xl px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                Join The Movement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;