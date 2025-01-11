import React from 'react';
import { motion } from 'framer-motion';
import EthicsPrinciple from '../components/ethics/EthicsPrinciple';
import TransparencyAccordion from '../components/ethics/TransparencyAccordion';
import { Scale, Heart, Users, Brain, Shield, Target } from 'lucide-react';

const Ethics = () => {
  const principles = [
    {
      icon: Scale,
      title: "fairness and equality",
      content: "we believe in equal access to quality education and fair assessment methods for all students."
    },
    {
      icon: Heart,
      title: "student wellbeing",
      content: "prioritizing mental health and personal development alongside academic achievement."
    },
    {
      icon: Users,
      title: "inclusive education",
      content: "ensuring our reform proposals consider diverse learning needs and backgrounds."
    },
    {
      icon: Brain,
      title: "evidence-based approach",
      content: "all our proposals are grounded in research and empirical evidence."
    },
    {
      icon: Shield,
      title: "data protection",
      content: "maintaining strict standards for protecting student and member data."
    },
    {
      icon: Target,
      title: "transparency",
      content: "being open about our methods, funding, and decision-making processes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <main className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl font-bold text-white mb-8">ethical principles</h1>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            at mors, our ethical framework guides every aspect of our mission to reform education. 
            these principles ensure we maintain the highest standards of integrity while pursuing meaningful change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <EthicsPrinciple 
                key={principle.title}
                icon={principle.icon}
                title={principle.title}
              >
                {principle.content}
              </EthicsPrinciple>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-white mb-6">transparency in communication</h2>
            <TransparencyAccordion />
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Ethics;