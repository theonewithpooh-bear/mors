import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24"
        >
          <h1 className="text-4xl font-bold mb-8">privacy policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">introduction</h2>
              <p>
                this privacy policy explains how your data is handled when you use the movement of real skills (mors) website. our website is built and hosted by lovable/gpt engineer, who handles all data collection and processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">data collection</h2>
              <p>
                mors does not directly collect or store any personal information. all data collection and processing is handled by lovable/gpt engineer through their platform. when you interact with our website or submit forms:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>form submissions are processed through google forms</li>
                <li>website analytics and hosting is managed by lovable/gpt engineer</li>
                <li>no personal data is stored directly by mors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">third-party services</h2>
              <p>
                we use the following third-party services:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>lovable/gpt engineer for website hosting and analytics</li>
                <li>google forms for collecting user submissions</li>
              </ul>
              <p className="mt-2">
                please refer to these services' respective privacy policies for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">contact</h2>
              <p>
                if you have any questions about how your data is handled, please contact lovable/gpt engineer directly through their platform.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;