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
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 4, y: "40vh" }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
          className="relative"
        >
          <Header className="opacity-0 animate-[fade-in_0.5s_ease-in-out_3s_forwards]" />
          
          <div className="container mx-auto px-4 py-32 relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl opacity-0 animate-[fade-in_1s_ease-in-out_3s_forwards]" />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 1, scale: 2 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [2, 1, 0.5],
                      fontSize: ["4rem", "4rem", "1rem"]
                    }}
                    transition={{ 
                      duration: 3.5,
                      times: [0, 0.7, 1],
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.5 
                    }}
                    className="mb-6"
                  >
                    <span className="text-4xl tracking-[0.3em] text-white uppercase font-light">
                      introducing
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
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
                transition={{ delay: 4, duration: 1 }}
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
          <Footer className="opacity-0 animate-[fade-in_0.5s_ease-in-out_3s_forwards]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;