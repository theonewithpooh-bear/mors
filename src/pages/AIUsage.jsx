import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const AIUsage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mt-24"
        >
          <h1 className="text-4xl font-bold mb-8">why we use AI</h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              at mors, we embrace artificial intelligence technology for several practical reasons:
            </p>
            
            <ul className="list-disc list-inside space-y-4 ml-4">
              <li>
                <span className="font-semibold">cost-effective:</span> as a grassroots movement, we operate on minimal resources. AI tools allow us to create professional-quality content at a fraction of traditional costs.
              </li>
              
              <li>
                <span className="font-semibold">rapid iteration:</span> AI enables us to quickly generate and refine our materials, helping us respond promptly to the evolving educational landscape.
              </li>
              
              <li>
                <span className="font-semibold">quality results:</span> modern AI tools produce high-quality visual and written content that effectively communicates our message.
              </li>
            </ul>
            
            <p>
              by leveraging AI technology, we can focus our limited resources on what matters most: advocating for meaningful educational reform and building our community.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIUsage;