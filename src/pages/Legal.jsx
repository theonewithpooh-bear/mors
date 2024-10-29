import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
          <h1 className="text-4xl font-bold mb-12">Legal Information</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Cookie Policy</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300 mb-4">
                At Movement of Real Skills (MORS), we prioritize your privacy and data protection. Unlike many websites, we have made the conscious decision not to use cookies or similar tracking technologies on our website.
              </p>
              <p className="text-gray-300 mb-4">
                This means:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-4">
                <li>We do not track your browsing behavior</li>
                <li>We do not store any personal information through cookies</li>
                <li>We do not use any analytics cookies</li>
                <li>We do not use any advertising or marketing cookies</li>
              </ul>
              <p className="text-gray-300">
                Our commitment to a cookie-free experience aligns with our values of transparency and respect for user privacy. You can browse our website with confidence, knowing that your online activity is not being tracked or stored.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <p className="text-gray-300">
              For any questions about our legal policies or privacy practices, please contact us at{' '}
              <a href="mailto:info@mors.org.uk" className="text-blue-400 hover:text-blue-300">
                info@mors.org.uk
              </a>
            </p>
          </section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Legal;