import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIUsage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12">AI usage policy</h1>
          
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-8">
              at movement of real skills (mors), we believe in the responsible and ethical use of artificial intelligence to enhance educational experiences and operational efficiency.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6">our approach to AI</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-8">
              <li>we use AI to assist in content creation and educational resource development</li>
              <li>all AI-generated content undergoes human review and verification</li>
              <li>we prioritize transparency in our AI usage</li>
              <li>we maintain strict data privacy and security standards</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">benefits and safeguards</h2>
            <p className="text-gray-300 mb-8">
              while AI helps us improve efficiency and scalability, we maintain robust safeguards to ensure quality, accuracy, and ethical compliance. human oversight remains central to our operations.
            </p>

            <h2 className="text-2xl font-semibold mb-6">continuous improvement</h2>
            <p className="text-gray-300">
              we regularly review and update our AI usage policies to reflect best practices and emerging ethical guidelines. for questions about our AI usage, contact us at{' '}
              <a href="mailto:info@mors.org.uk" className="text-blue-400 hover:text-blue-300">
                info@mors.org.uk
              </a>
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AIUsage;