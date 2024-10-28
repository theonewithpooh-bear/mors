import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EthicsPrinciple from '../components/ethics/EthicsPrinciple';
import TransparencyAccordion from '../components/ethics/TransparencyAccordion';
import { Scale, Eye, Users, Brain, BookOpen, Shield, Target, Lightbulb } from 'lucide-react';

const Ethics = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const principles = [
    {
      icon: Scale,
      title: "non-partisan commitment",
      content: "we maintain strict political neutrality, focusing solely on evidence-based educational reform."
    },
    {
      icon: Eye,
      title: "complete transparency",
      content: (
        <div className="space-y-6">
          <p>we believe in absolute transparency in all our operations.</p>
          <TransparencyAccordion />
        </div>
      )
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
      title: "long-term vision",
      content: "our ethical framework emphasizes sustainable, long-term improvements over quick fixes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div className="text-center mb-16" {...fadeIn}>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            ethical principles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            our commitment to strong ethical principles guides every aspect of our mission to transform education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EthicsPrinciple
                icon={principle.icon}
                title={principle.title}
              >
                {principle.content}
              </EthicsPrinciple>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ethics;