import React from 'react';
import { Scale, Eye, Users, Brain, BookOpen, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Ethics = () => {
  const principles = [
    {
      icon: Scale,
      title: "non-partisan commitment",
      content: "we maintain strict political neutrality, focusing solely on evidence-based educational reform."
    },
    {
      icon: Eye,
      title: "complete transparency",
      content: "we believe in absolute transparency in all our operations."
    },
    {
      icon: Users,
      title: "inclusive dialogue",
      content: "we actively seek diverse perspectives from all education stakeholders to develop comprehensive reform proposals."
    },
    {
      icon: Brain,
      title: "evidence-based approach",
      content: "all our reform proposals are grounded in rigorous research and empirical evidence."
    },
    {
      icon: BookOpen,
      title: "educational integrity",
      content: "we advocate for assessment methods that genuinely reflect student capabilities and learning outcomes."
    },
    {
      icon: Target,
      title: "continuous improvement",
      content: "we constantly evaluate and refine our approaches based on feedback and outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <main className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl font-bold text-white mb-16 text-center">ethical principles</h1>
          
          <div className="space-y-6">
            {principles.map((principle) => (
              <Card 
                key={principle.title}
                className="bg-[#111]/80 border-white/10 backdrop-blur-sm p-6 hover:bg-[#222]/80 transition-colors duration-300"
              >
                <div className="flex flex-col space-y-4">
                  <principle.icon className="h-6 w-6 text-white/80" />
                  <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="text-gray-400">{principle.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Ethics;