import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      <div className="container mx-auto px-4 py-32 relative">
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl" />
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-glow-dance" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-glow-dance delay-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/1 rounded-full blur-3xl animate-pulse" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/3 via-white/2 to-white/3 blur-3xl animate-glow-dance" />
                </div>
                <div className="mb-6">
                  <span className="text-sm tracking-[0.2em] text-white/30 uppercase font-light">introducing</span>
                </div>
                <h1 className="text-7xl sm:text-8xl font-bold mb-2 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white/70 via-white to-white/70 animate-gradient-x">
                  movement of real skills
                </h1>
                <p className="text-lg text-white/50 mb-8">(MORS)</p>
                <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8 animate-pulse" />
                <p className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                  our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Separator className="my-8 bg-white/10" />
            <h2 className="text-2xl font-bold mb-4 text-white">ready to make a difference?</h2>
            <Link to="/get-involved">
              <Button 
                variant="outline" 
                className="group text-lg px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border-white/20 hover:scale-105 transition-all duration-300"
              >
                get involved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
