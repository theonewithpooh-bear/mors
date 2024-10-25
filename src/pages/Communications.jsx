import React from 'react';
import { Button } from "@/components/ui/button";
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import "@fontsource/special-elite";

const Communications = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-2 pt-16"
        >
          <div className="relative flex justify-center w-full">
            <h1
              style={{ 
                fontFamily: "Special Elite",
                fontSize: "4rem",
                letterSpacing: "0.1em",
                width: "fit-content",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: ".15em solid white",
                animation: "typing 2s steps(14, end), blink .75s step-end infinite"
              }}
            >
              communications
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <p className="text-xl leading-relaxed text-gray-100">
              mors sends open letters at least once a week to various stakeholders in education - from the department of education to influential organisations, political parties and MPs. open letters, being public and transparent communications, allow us to openly advocate for change while fostering public dialogue about educational reform. through these letters, we articulate our vision for skills-based education and invite others to join the conversation.
            </p>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
            alt="Department of Education Logo"
            className="w-120 h-auto object-contain mb-0.5 invert"
          />
          <h2 className="text-2xl font-semibold">Department for Education</h2>
        </div>
        
        <div className="flex flex-col items-center space-y-4 mt-8">
          <Button
            variant="outline"
            className="group relative px-8 py-6 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 hover:scale-105"
            disabled
          >
            view this week's open letter
            <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-yellow-300 animate-bounce">
              <Construction className="h-5 w-5" />
              <span className="text-sm">coming soon!</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Communications;