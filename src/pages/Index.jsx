import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      <div className="container mx-auto px-4 py-32 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
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
              <div className="flex justify-center mb-8">
                <Crown className="w-16 h-16 text-yellow-500/80" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
                </div>
                <h1 className="text-7xl sm:text-8xl font-bold mb-16 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-white to-yellow-200">
                  movement of real skills
                </h1>
                <div className="w-48 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mb-8" />
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
            <h2 className="text-2xl font-bold mb-4">ready to make a difference?</h2>
            <a href="https://forms.gle/uV182TrQxVq8GwTc6" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="group text-lg px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/10 via-white/10 to-yellow-500/10 hover:from-yellow-500/20 hover:via-white/20 hover:to-yellow-500/20 text-white border-yellow-500/20 hover:scale-105 transition-all duration-300 hover:border-yellow-500/40"
              >
                join waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;