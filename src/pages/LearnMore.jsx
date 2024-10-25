import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LearnMore = () => {
  const points = [
    {
      title: "real skills first",
      description: "we prioritize practical, hands-on learning over traditional theoretical approaches"
    },
    {
      title: "project-based learning",
      description: "students learn through real-world projects that demonstrate actual capabilities"
    },
    {
      title: "industry integration",
      description: "direct collaboration with industries to ensure relevant skill development"
    }
  ];

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
          <h1 className="text-5xl font-bold mb-12 text-center">our vision</h1>
          
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
                join the movement
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