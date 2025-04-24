
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ManifestoTitle from '../components/manifesto/ManifestoTitle';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import IntroductionSection from '../components/manifesto/IntroductionSection';
import ProblemWithGCSEs from '../components/manifesto/ProblemWithGCSEs';
import CallToAction from '../components/manifesto/CallToAction';
import QuoteSection from '../components/manifesto/QuoteSection';
import SignatureSection from '../components/manifesto/SignatureSection';
import { manifestoSections, teacherManifestoSections, studentManifestoSections } from '../data/manifestoContent';

const Manifesto = () => {
  const [currentView, setCurrentView] = useState('full');

  const handleViewChange = (view) => {
    setCurrentView(view);
    
    // Update content based on selected view
    switch(view) {
      case 'teachers':
        // Handle teacher view
        break;
      case 'students':
        // Handle student view
        break;
      case 'full':
      default:
        // Handle full manifesto view
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Title Section */}
      <ManifestoTitle />
      
      {/* Navigation Buttons */}
      <div className="w-full flex justify-center py-8">
        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto px-4">
          <motion.button
            onClick={() => handleViewChange('teachers')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg
                      ${currentView === 'teachers' 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black border border-black'}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            For Teachers
          </motion.button>
          
          <motion.button
            onClick={() => handleViewChange('students')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg
                      ${currentView === 'students' 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black border border-black'}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            For Students
          </motion.button>
          
          <motion.button
            onClick={() => handleViewChange('full')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all shadow-lg
                      ${currentView === 'full' 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black border border-black'}`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Manifesto
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <IntroductionSection />
        
        {/* Problems with GCSEs */}
        <ProblemWithGCSEs />
        
        {/* Display appropriate sections based on selected view */}
        {currentView === 'full' && (
          <>
            {/* Render other full manifesto sections here */}
            <CallToAction />
          </>
        )}
        
        {currentView === 'teachers' && (
          <>
            {/* Render teacher-specific content here */}
          </>
        )}
        
        {currentView === 'students' && (
          <>
            {/* Render student-specific content here */}
          </>
        )}
        
        {/* Quote Section */}
        <QuoteSection />
        
        {/* Signature Section */}
        <SignatureSection />
      </div>
    </div>
  );
};

export default Manifesto;
