import React, { useState } from 'react';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections, teacherManifestoSections, studentManifestoSections } from '../data/manifestoContent';
import { motion } from 'framer-motion';

const Manifesto = () => {
  const [currentContent, setCurrentContent] = useState(manifestoSections);

  const handleButtonClick = (userType) => {
    switch(userType) {
      case 'Teachers':
        setCurrentContent(teacherManifestoSections);
        break;
      case 'Students':
        setCurrentContent(studentManifestoSections);
        break;
      default:
        setCurrentContent(manifestoSections);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 mt-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-3xl w-full justify-center">
          {['Teachers', 'Students', 'Parents'].map((userType) => (
            <motion.button
              key={userType}
              onClick={() => handleButtonClick(userType)}
              className="relative px-6 py-3 bg-white backdrop-blur-sm rounded-full 
                         text-black text-lg font-medium transition-all duration-300
                         hover:bg-white/90 hover:scale-105 active:scale-95
                         border border-white shadow-lg w-48"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              For {userType}
            </motion.button>
          ))}
        </div>
      </div>
      <main>
        {currentContent.map((section, index) => (
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