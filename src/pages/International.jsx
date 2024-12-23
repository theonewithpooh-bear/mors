import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Heart, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

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

          {/* Main Content */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Current Status</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, we have no money</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, we are a one man band</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, Not many know about us</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">×</span>
                  <span>No, we haven't made any changes yet</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">But Here's the Thing...</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We don't care. MORS is fighting for educational changes across the globe, not just here in the UK.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-lg space-y-6">
              <h2 className="text-2xl font-semibold">Become a MORS Director</h2>
              <p className="text-gray-300">
                We want YOU to apply to be director of MORS in your country.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 p-4 rounded-lg flex-1">
                  <p className="text-blue-400">MORS USA</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex-1">
                  <p className="text-blue-400">MORS India</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex-1">
                  <p className="text-blue-400">MORS France</p>
                </div>
              </div>
            </div>

            {/* Criteria Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">The Criteria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Currently in School</h3>
                    <p className="text-gray-400">Active participation in the education system</p>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-lg flex items-start space-x-4">
                  <Heart className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Passionate & Driven</h3>
                    <p className="text-gray-400">Committed to educational reform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="text-center space-y-6 pt-8">
              <p className="text-xl text-gray-300">
                While we are not yet opening applications, watch this space.
              </p>
              <Button 
                variant="outline"
                className="group border-white/20 hover:border-white/40"
                disabled
              >
                Applications Coming Soon
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default International;