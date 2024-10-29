import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonationForm from '../components/get-involved/DonationForm';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 space-y-8"
        >
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-[32px] shadow-2xl p-12 border border-white/10"
          >
            <h2 className="text-6xl font-bold mb-8 text-white">register interest</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              mors is a new initiative to revolutionize education. before launching our full platform, 
              we're gathering interest to ensure we can provide the best possible experience for our community. 
              join our waitlist to be among the first to know when we launch and help shape the future of education.
            </p>
            <a 
              href="https://forms.gle/uV182TrQxVq8GwTc6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="group text-lg px-8 py-6 rounded-2xl bg-white/10 hover:bg-white/20 border-white/20 transition-all duration-300"
              >
                register your interest
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <DonationForm />
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;