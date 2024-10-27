import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Articles = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-b-2 border-gray-200 mb-12 pb-6">
            <h1 className="font-serif text-5xl text-center mb-4">The Daily Reform</h1>
            <p className="text-center text-gray-400">Archive of Publications</p>
          </div>

          <div className="space-y-12">
            {/* Featured Article */}
            <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-sm text-gray-400">Volume 1, Issue 1 - Education Reform Special Edition</span>
              </div>
              
              <h2 className="font-serif text-4xl mb-6">The Case Against GCSEs</h2>
              
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span>By Monty Middleton-Burn</span>
                <span className="mx-2">|</span>
                <span>Founder, MORS</span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">
                I have noticed, through my studying of my GCSEs, that they are seriously flawed. The current system demands an unrealistic memorization of vast amounts of information across multiple subjects...
              </p>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                {isExpanded ? 'Show less' : 'Show more'} <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 space-y-6 text-gray-300 text-lg">
                      <p>
                        This scenario is entirely unrealistic and places unnecessary stress on our young people while wasting valuable time. Time that could be better invested in core knowledge acquisition and practical application of skills relevant to future careers.
                      </p>

                      <h3 className="text-2xl font-bold mt-8 mb-4">The Alarming Statistics</h3>
                      <p>
                        Research reveals that within months, 60% to 70% of GCSE knowledge dissipates, escalating to 90% within a year. More concerning still, only 30% of employers value these qualifications, with the majority prioritizing practical skills that GCSEs fail to measure.
                      </p>

                      <h3 className="text-2xl font-bold mt-8 mb-4">A Revolutionary Proposal</h3>
                      <p>
                        I propose a revolutionary system that assesses real-world abilities through coursework. This would introduce two tiers of Foundation Skills Certificates (FSCs) as replacements for GCSE and A-Level qualifications, with an optional higher-level qualification available for those who prefer it over FSC Level 2.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>

            {/* Placeholder for future articles */}
            <div className="text-center py-8 text-gray-400">
              More articles coming soon...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;