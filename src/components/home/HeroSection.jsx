import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/307f3e9e-d309-4572-a4b1-2a9d5186496f.png"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-[300px] h-[300px] left-1/4 top-1/4 bg-[radial-gradient(circle_at_center,#1EAEDB20_0%,transparent_70%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute w-[400px] h-[400px] right-1/4 bottom-1/4 bg-[radial-gradient(circle_at_center,#1EAEDB15_0%,transparent_70%)]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">
            introducing
          </p>
          
          <h1 className="text-6xl md:text-7xl font-normal text-white mb-4 tracking-normal leading-none font-['Cormorant']">
            movement of real skills
          </h1>
          
          <p className="text-base text-gray-400 tracking-wider mb-4">
            M.O.R.S.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button 
                className="bg-white text-black hover:bg-gray-100 text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                get involved
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </div>
  );
};

export default HeroSection;