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
      <motion.div 
        initial={{ scale: 4, y: "40vh" }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative"
      >
        <Header className="opacity-0 animate-[fade-in_0.5s_ease-in-out_2s_forwards]" />
        
        <div className="container mx-auto px-4 py-32 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl opacity-0 animate-[fade-in_1s_ease-in-out_2s_forwards]" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 2 }}
              className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 2.5 }}
              className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative">
                <div className="mb-6">
                  <span className="text-sm tracking-[0.2em] text-white uppercase font-light">
                    introducing
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  <h1 className="text-7xl sm:text-8xl font-bold mb-2 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white/70 via-white to-white/70">
                    movement of real skills
                  </h1>
                  <p className="text-lg text-white/50 mb-8">(MORS)</p>
                  <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />
                  <p className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                    our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
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
          </div>
        </div>
        <Footer className="opacity-0 animate-[fade-in_0.5s_ease-in-out_2s_forwards]" />
      </motion.div>
    </div>
  );
};

export default Index;