
import React, { useState } from 'react';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import ManifestoTitle from '../components/manifesto/ManifestoTitle';
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
      case 'Full Manifesto':
        setCurrentContent(manifestoSections);
        break;
      default:
        setCurrentContent(manifestoSections);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ManifestoTitle />
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 mt-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-3xl w-full justify-center">
          {['Teachers', 'Students', 'Full Manifesto'].map((userType) => (
            <motion.button
              key={userType}
              onClick={() => handleButtonClick(userType)}
              className="relative px-6 py-3 bg-black backdrop-blur-sm rounded-full 
                         text-white text-lg font-medium transition-all duration-300
                         hover:bg-black/90 hover:scale-105 active:scale-95
                         border border-black shadow-lg w-48"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {userType === 'Full Manifesto' ? userType : `For ${userType}`}
            </motion.button>
          ))}
        </div>
      </div>
      <main>
        {currentContent.slice(1).map((section, index) => (
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
