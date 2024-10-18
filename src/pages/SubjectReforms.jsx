import React, { useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import ReformSection from '../components/ReformSection';
import SubjectModal from '../components/SubjectModal';
import GradingSystemModal from '../components/GradingSystemModal';

const SubjectReforms = () => {
  const [activeReform, setActiveReform] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isGradingModalOpen, setIsGradingModalOpen] = useState(false);
  const [gradingType, setGradingType] = useState('');

  const handleViewReforms = (reformType) => {
    setActiveReform(reformType);
    setSelectedSubject(null);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleGradingSystemClick = (type) => {
    setGradingType(type);
    setIsGradingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Subject Reforms
      </motion.h1>
      
      <ReformSection
        title="GCSE Reforms"
        description="Our proposed reforms for GCSE subjects focus on integrating practical skills and project-based learning."
        onViewReforms={() => handleViewReforms('gcse')}
        onGradingSystemClick={() => handleGradingSystemClick('GCSE')}
      />
      
      <ReformSection
        title="A-Level Reforms"
        description="For A-Levels, we're emphasizing interdisciplinary approaches and real-world applications of knowledge."
        onViewReforms={() => handleViewReforms('alevel')}
        onGradingSystemClick={() => handleGradingSystemClick('A-Level')}
      />

      {activeReform && (
        <SubjectModal
          reformType={activeReform}
          selectedSubject={selectedSubject}
          onSubjectClick={handleSubjectClick}
          onClose={() => setSelectedSubject(null)}
        />
      )}

      <GradingSystemModal
        isOpen={isGradingModalOpen}
        onClose={() => setIsGradingModalOpen(false)}
        gradingType={gradingType}
      />
    </div>
  );
};

export default SubjectReforms;