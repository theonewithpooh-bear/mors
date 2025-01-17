import React from 'react';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections } from '../data/manifestoContent';
import { motion } from 'framer-motion';

const Manifesto = () => {
  const handleButtonClick = (userType) => {
    console.log(`${userType} button clicked`);
    // Future functionality can be added here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 mt-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-4xl w-full justify-center">
          {['Teachers', 'Students', 'Parents'].map((userType) => (
            <motion.button
              key={userType}
              onClick={() => handleButtonClick(userType)}
              className="relative px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl 
                         text-white text-lg font-medium transition-all duration-300
                         hover:bg-white/20 hover:scale-105 active:scale-95
                         border border-white/20 shadow-lg"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              For {userType}
            </motion.button>
          ))}
        </div>
      </div>
      <main>
        {manifestoSections.map((section, index) => (
          <ManifestoSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            content={section.content}
            source={section.source}
            isHero={section.isHero}
          />
        ))}
      </main>
    </div>
  );
};

export default Manifesto;