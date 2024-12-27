import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2A2F4E] via-[#1F2437] to-[#151827]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#E5DEFF] mix-blend-screen"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Education Icons */}
          <div className="flex justify-center gap-8 mb-8">
            {[GraduationCap, BookOpen, Users].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm"
              >
                <Icon className="w-8 h-8 text-[#E5DEFF]" />
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#E5DEFF] tracking-[0.2em] uppercase text-sm font-medium"
            >
              introducing
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight leading-tight"
            >
              movement of <span className="text-[#D3E4FD]">real skills</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-base text-[#D3E4FD]/80 mb-4 font-medium"
            >
              M.O.R.S.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              transforming education through practical, skills-based learning that prepares students for success in the modern world
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <Link to="/learn-more">
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10 text-sm px-6 py-6 h-auto rounded-lg transition-all backdrop-blur-sm"
                >
                  discover our vision →
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button 
                  className="bg-[#E5DEFF] text-[#1F2437] hover:bg-[#D3E4FD] text-sm px-6 py-6 h-auto rounded-lg transition-all"
                >
                  join the movement
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </div>
  );
};

export default HeroSection;