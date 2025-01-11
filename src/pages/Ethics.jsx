import React from 'react';
import { Scale, Eye, Users, Brain, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import EthicsPrinciple from '@/components/ethics/EthicsPrinciple';
import TransparencyAccordion from '@/components/ethics/TransparencyAccordion';

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
      content: "we believe in absolute transparency in all our operations.",
      hasAccordion: true
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
          className="max-w-4xl mx-auto space-y-6"
        >
          {principles.map((principle) => (
            <div key={principle.title} className="space-y-4">
              <EthicsPrinciple 
                icon={principle.icon} 
                title={principle.title}
              >
                {principle.content}
              </EthicsPrinciple>
              {principle.hasAccordion && <TransparencyAccordion />}
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Ethics;