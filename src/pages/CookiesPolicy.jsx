import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-12">cookies policy</h1>
          
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-8">
              at movement of real skills (mors), we prioritize your privacy and data protection. unlike many websites, we have made the conscious decision not to use cookies or similar tracking technologies on our website.
            </p>
            
            <h2 className="text-2xl font-semibold mb-6">what this means for you</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-8">
              <li>we do not track your browsing behavior</li>
              <li>we do not store any personal information through cookies</li>
              <li>we do not use any analytics cookies</li>
              <li>we do not use any advertising or marketing cookies</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">our commitment</h2>
            <p className="text-gray-300 mb-8">
              our commitment to a cookie-free experience aligns with our values of transparency and respect for user privacy. you can browse our website with confidence, knowing that your online activity is not being tracked or stored.
            </p>

            <h2 className="text-2xl font-semibold mb-6">questions?</h2>
            <p className="text-gray-300">
              if you have any questions about our cookies policy or privacy practices, please contact us at{' '}
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

export default CookiesPolicy;