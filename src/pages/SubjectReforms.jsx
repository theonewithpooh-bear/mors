import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gcseSubjects, aLevelSubjects } from '../data/subjectData';
import { Star } from 'lucide-react'; // Import the Star icon

const SubjectReforms = () => {
  const [activeReform, setActiveReform] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleViewReforms = (reformType) => {
    setActiveReform(reformType);
    setSelectedSubject(null);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const renderSubjects = (subjects) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer flex items-center"
            onClick={() => handleSubjectClick(subject.name)}
          >
            <div className="mr-3 text-gray-600 dark:text-gray-400">
              {subject.icon && <subject.icon className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click to view reforms
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderEnglishLanguageReforms = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">M.O.R.S. proposes the following reforms to the GCSE English Language course:</h3>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Shift to coursework-focused assessment:</strong>
          <p>Replace final exams with ongoing coursework, mirroring real-world writing processes.</p>
        </li>
        <li>
          <strong>Textual analysis through continuous coursework:</strong>
          <p>Evolve reading assessments to ongoing coursework, analyzing texts throughout the year.</p>
        </li>
        <li>
          <strong>Integration of spoken language endorsement:</strong>
          <p>Make spoken language an integral part of coursework with multiple presentations.</p>
        </li>
        <li>
          <strong>Ongoing reform flexibility:</strong>
          <p>Regular review and adjustment of reforms to ensure relevance and effectiveness.</p>
        </li>
      </ol>
      <h3 className="text-xl font-semibold mt-6">Critical Questions:</h3>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Will continuous coursework assessments put undue pressure on students?</strong>
          <p>M.O.R.S. proposes a flexible deadline system to manage workload and stress.</p>
        </li>
        <li>
          <strong>Could removing exams undermine assessment of working under pressure?</strong>
          <p>Timed, in-class assessments would be incorporated to simulate pressure scenarios.</p>
        </li>
        <li>
          <strong>How to ensure consistency in grading with coursework?</strong>
          <p>Clear, standardized marking criteria and regular external moderation would be implemented.</p>
        </li>
      </ol>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
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
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-3xl w-full mt-16"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Reforms for {selectedSubject}
              </h2>
              {selectedSubject === "English Language" && activeReform === 'gcse' ? (
                renderEnglishLanguageReforms()
              ) : (
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No specific reforms have been uploaded for {selectedSubject} yet. Check back later for updates.
                </p>
              )}
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setSelectedSubject(null)}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Subject Reforms</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">GCSE Reforms</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Our proposed reforms for GCSE subjects focus on integrating practical skills and project-based learning.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleViewReforms('gcse')}
                    className="flex-grow"
                  >
                    View GCSE Reforms
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => {/* Add grading system logic here */}}
                  >
                    <Star className="w-4 h-4" />
                    <span>Grading System</span>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">A-Level Reforms</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  For A-Levels, we're emphasizing interdisciplinary approaches and real-world applications of knowledge.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    onClick={() => handleViewReforms('alevel')}
                    className="flex-grow"
                  >
                    View A-Level Reforms
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2"
                    onClick={() => {/* Add grading system logic here */}}
                  >
                    <Star className="w-4 h-4" />
                    <span>Grading System</span>
                  </Button>
                </div>
              </div>
            </div>

            {activeReform === 'gcse' && (
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">GCSE Subject Reforms</h2>
                {renderSubjects(gcseSubjects)}
              </div>
            )}

            {activeReform === 'alevel' && (
              <div className="mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">A-Level Subject Reforms</h2>
                {renderSubjects(aLevelSubjects)}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubjectReforms;