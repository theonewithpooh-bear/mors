import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import Header from '../components/Header';
import { gcseSubjects, aLevelSubjects } from '../data/subjectData';
import GradingSystemModal from '../components/subject-reforms/GradingSystemModal';
import ReformSection from '../components/subject-reforms/ReformSection';

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <AnimatePresence>
        {selectedSubject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-start z-50 p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-xl max-w-3xl w-full mt-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                reforms for {selectedSubject}
              </h2>
              {selectedSubject === "english language" && activeReform === 'gcse' ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">m.o.r.s. proposes the following reforms to the gcse english language course:</h3>
                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <strong>shift to coursework-focused assessment:</strong>
                      <p>replace final exams with ongoing coursework, mirroring real-world writing processes.</p>
                    </li>
                    <li>
                      <strong>textual analysis through continuous coursework:</strong>
                      <p>evolve reading assessments to ongoing coursework, analyzing texts throughout the year.</p>
                    </li>
                    <li>
                      <strong>integration of spoken language endorsement:</strong>
                      <p>make spoken language an integral part of coursework with multiple presentations.</p>
                    </li>
                    <li>
                      <strong>ongoing reform flexibility:</strong>
                      <p>regular review and adjustment of reforms to ensure relevance and effectiveness.</p>
                    </li>
                  </ol>
                  <h3 className="text-xl font-semibold mt-6">critical questions:</h3>
                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <strong>will continuous coursework assessments put undue pressure on students?</strong>
                      <p>m.o.r.s. proposes a flexible deadline system to manage workload and stress.</p>
                    </li>
                    <li>
                      <strong>could removing exams undermine assessment of working under pressure?</strong>
                      <p>timed, in-class assessments would be incorporated to simulate pressure scenarios.</p>
                    </li>
                    <li>
                      <strong>how to ensure consistency in grading with coursework?</strong>
                      <p>clear, standardized marking criteria and regular external moderation would be implemented.</p>
                    </li>
                  </ol>
                </div>
              ) : (
                <p className="text-lg text-gray-400">
                  no specific reforms have been uploaded for {selectedSubject} yet. check back later for updates.
                </p>
              )}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setSelectedSubject(null)}
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 py-16"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">subject reforms</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">gcse reforms</h2>
                <p className="mb-4 text-gray-400">
                  our proposed reforms for gcse subjects focus on integrating practical skills and project-based learning.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleViewReforms('gcse')}
                    className="flex-grow bg-white/10 hover:bg-white/20 text-white"
                  >
                    view gcse reforms
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => handleGradingSystemClick('gcse')}
                  >
                    <Star className="w-4 h-4" />
                    <span>grading system</span>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">a-level reforms</h2>
                <p className="mb-4 text-gray-400">
                  for a-levels, we're emphasizing interdisciplinary approaches and real-world applications of knowledge.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleViewReforms('alevel')}
                    className="flex-grow bg-white/10 hover:bg-white/20 text-white"
                  >
                    view a-level reforms
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border-white/20"
                    onClick={() => handleGradingSystemClick('a-level')}
                  >
                    <Star className="w-4 h-4" />
                    <span>grading system</span>
                  </Button>
                </div>
              </div>
            </div>

            {activeReform === 'gcse' && (
              <ReformSection 
                title="gcse subject reforms"
                subjects={gcseSubjects}
                onSubjectClick={setSelectedSubject}
              />
            )}

            {activeReform === 'alevel' && (
              <ReformSection 
                title="a-level subject reforms"
                subjects={aLevelSubjects}
                onSubjectClick={setSelectedSubject}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <GradingSystemModal 
        isOpen={isGradingModalOpen}
        onOpenChange={setIsGradingModalOpen}
        gradingType={gradingType}
      />
    </div>
  );
};

export default SubjectReforms;