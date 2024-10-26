import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-32">
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
              <h1 className="text-8xl font-bold mb-16 tracking-tight leading-none">
                <span className="relative inline-block">
                  movement of real skills
                </span>
              </h1>
              <p className="text-3xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
              </p>
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
                className="group text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                join our movement
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