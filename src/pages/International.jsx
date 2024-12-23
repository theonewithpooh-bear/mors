import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DirectorInfo from '../components/international/DirectorInfo';
import CurrentStatus from '../components/international/CurrentStatus';
import GlobalChallenges from '../components/international/GlobalChallenges';
import SecretOverlay from '../components/international/SecretOverlay';

const International = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <Globe2 className="w-16 h-16 mx-auto text-blue-500 mb-8" />
            <h1 className="text-5xl font-serif">MORS International</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our global movement to revolutionize education, one country at a time.
            </p>
          </section>

          <CurrentStatus />
          <DirectorInfo />
          <GlobalChallenges />
        </motion.div>
      </main>
      
      <Footer />
      <SecretOverlay />
    </div>
  );
};

export default International;