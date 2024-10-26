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
                this privacy policy explains how movement of real skills (mors) collects, uses, and protects your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">information we collect</h2>
              <p>we collect information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>register your interest through our online form</li>
                <li>communicate with us via email or other channels</li>
                <li>interact with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">how we use your information</h2>
              <p>we use the collected information to:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>communicate updates about our initiative</li>
                <li>improve our services and website</li>
                <li>send relevant information about educational reforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">data protection</h2>
              <p>
                we implement appropriate security measures to protect your personal information. your data is stored securely and is only accessible to authorized personnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">your rights</h2>
              <p>you have the right to:</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>access your personal information</li>
                <li>request correction of your personal information</li>
                <li>request deletion of your personal information</li>
                <li>opt-out of communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">contact us</h2>
              <p>
                if you have any questions about this privacy policy, please contact us through the provided channels on our website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;