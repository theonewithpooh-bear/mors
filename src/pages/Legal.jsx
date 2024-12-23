import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Legal = () => {
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
          <h1 className="text-4xl font-bold mb-12">legal information</h1>
          
          <div className="grid gap-8">
            <Link 
              to="/cookies-policy"
              className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">cookies policy</h2>
              <p className="text-gray-300">
                learn about our commitment to not using cookies and protecting your privacy.
              </p>
            </Link>

            <Link 
              to="/ai-usage"
              className="p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">AI usage policy</h2>
              <p className="text-gray-300">
                understand how we responsibly use artificial intelligence in our operations.
              </p>
            </Link>

            <section>
              <h2 className="text-2xl font-semibold mb-6">contact</h2>
              <p className="text-gray-300">
                for any questions about our legal policies or privacy practices, please contact us at{' '}
                <a href="mailto:info@mors.org.uk" className="text-blue-400 hover:text-blue-300">
                  info@mors.org.uk
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;