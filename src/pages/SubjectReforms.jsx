import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '../components/Header';
import { gcseSubjects, aLevelSubjects } from '../data/subjectData';
import GradingSystemModal from '../components/subject-reforms/GradingSystemModal';

const SubjectReforms = () => {
  const [activeReform, setActiveReform] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isGradingModalOpen, setIsGradingModalOpen] = useState(false);
  const [gradingType, setGradingType] = useState('');

  const handleViewReforms = (reformType) => {
    setActiveReform(reformType);
    setSelectedSubject(null);
  };

  const handleGradingSystemClick = (type) => {
    setGradingType(type);
    setIsGradingModalOpen(true);
  };

  const handleSubjectClick = (subjectName) => {
    setSelectedSubject(subjectName);
  };

  const handleBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else {
      setActiveReform(null);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <AnimatePresence mode="wait">
          {!activeReform ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-8 text-center">subject reforms</h1>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                exploring practical, skills-based reforms to transform how subjects are taught and assessed
              </p>
              
              <div className="space-y-12">
                <div className="prose max-w-none">
                  <div className="border-l-4 border-black pl-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4">gcse reforms</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      our proposed reforms for gcse subjects focus on integrating practical skills and project-based learning.
                    </p>
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => handleViewReforms('gcse')}
                        variant="outline"
                        className="text-black border-black hover:bg-black hover:text-white"
                      >
                        view gcse reforms →
                      </Button>
                      <Button
                        variant="outline"
                        className="text-black border-black hover:bg-black hover:text-white"
                        onClick={() => handleGradingSystemClick('gcse')}
                      >
                        <Star className="w-4 h-4 mr-2" />
                        grading system
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-black pl-8">
                    <h2 className="text-2xl font-bold mb-4">a-level reforms</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      for a-levels, we're emphasising interdisciplinary approaches and real-world applications of knowledge.
                    </p>
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => handleViewReforms('alevel')}
                        variant="outline"
                        className="text-black border-black hover:bg-black hover:text-white"
                      >
                        view a-level reforms →
                      </Button>
                      <Button
                        variant="outline"
                        className="text-black border-black hover:bg-black hover:text-white"
                        onClick={() => handleGradingSystemClick('a-level')}
                      >
                        <Star className="w-4 h-4 mr-2" />
                        grading system
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : !selectedSubject ? (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <Button
                variant="ghost"
                onClick={handleBack}
                className="mb-8 text-gray-600 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                back to reforms overview
              </Button>
              
              <h1 className="text-4xl font-bold mb-4">
                {activeReform === 'gcse' ? 'gcse' : 'a-level'} subject reforms
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                select a subject to explore our proposed reforms and improvements
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeReform === 'gcse' ? gcseSubjects : aLevelSubjects).map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="border border-gray-200 p-6 hover:border-black transition-colors cursor-pointer group"
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-gray-600 group-hover:text-black transition-colors">
                        {subject.icon && <subject.icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-black capitalize group-hover:underline">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          view reforms
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="subject-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Button
                variant="ghost"
                onClick={handleBack}
                className="mb-8 text-gray-600 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                back to subjects
              </Button>

              <div className="mb-8">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  {activeReform === 'gcse' ? 'gcse' : 'a-level'} reform
                </p>
                <h1 className="text-4xl font-bold mb-4 capitalize">
                  {selectedSubject}
                </h1>
              </div>

              {selectedSubject === "english language" && activeReform === 'gcse' ? (
                <div className="prose max-w-none">
                  <div className="border-l-4 border-black pl-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                      m.o.r.s. proposes the following reforms to the gcse english language course:
                    </h2>
                    
                    <ol className="list-decimal list-inside space-y-6 text-lg">
                      <li>
                        <strong>shift to coursework-focused assessment:</strong>
                        <p className="mt-2 text-gray-700">replace final exams with ongoing coursework, mirroring real-world writing processes.</p>
                      </li>
                      <li>
                        <strong>textual analysis through continuous coursework:</strong>
                        <p className="mt-2 text-gray-700">evolve reading assessments to ongoing coursework, analysing texts throughout the year.</p>
                      </li>
                      <li>
                        <strong>integration of spoken language endorsement:</strong>
                        <p className="mt-2 text-gray-700">make spoken language an integral part of coursework with multiple presentations.</p>
                      </li>
                      <li>
                        <strong>ongoing reform flexibility:</strong>
                        <p className="mt-2 text-gray-700">regular review and adjustment of reforms to ensure relevance and effectiveness.</p>
                      </li>
                    </ol>
                  </div>

                  <div className="border-l-4 border-black pl-8">
                    <h3 className="text-2xl font-bold mb-6">critical questions:</h3>
                    <ol className="list-decimal list-inside space-y-6 text-lg">
                      <li>
                        <strong>will continuous coursework assessments put undue pressure on students?</strong>
                        <p className="mt-2 text-gray-700">m.o.r.s. proposes a flexible deadline system to manage workload and stress.</p>
                      </li>
                      <li>
                        <strong>could removing exams undermine assessment of working under pressure?</strong>
                        <p className="mt-2 text-gray-700">timed, in-class assessments would be incorporated to simulate pressure scenarios.</p>
                      </li>
                      <li>
                        <strong>how to ensure consistency in grading with coursework?</strong>
                        <p className="mt-2 text-gray-700">clear, standardised marking criteria and regular external moderation would be implemented.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              ) : (
                <div className="border-l-4 border-gray-300 pl-8">
                  <p className="text-lg text-gray-600">
                    no specific reforms have been uploaded for {selectedSubject} yet. check back later for updates.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <GradingSystemModal 
        isOpen={isGradingModalOpen}
        onOpenChange={setIsGradingModalOpen}
        gradingType={gradingType}
      />
    </div>
  );
};

export default SubjectReforms;