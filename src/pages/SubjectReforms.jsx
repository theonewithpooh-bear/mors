import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SubjectReforms = () => {
  const [activeReform, setActiveReform] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const gcseSubjects = [
    "Mathematics", "English Language", "English Literature", "Combined Science",
    "Art and Design", "Business Studies", "Computer Science", "Dance",
    "Design and Technology", "Drama", "Economics", "Engineering",
    "Food Preparation and Nutrition", "French", "Geography", "German",
    "History", "Latin", "Media Studies", "Music", "Physical Education",
    "Psychology", "Religious Studies", "Sociology", "Spanish", "Statistics",
    "Astronomy", "Film Studies", "Geology"
  ];

  const aLevelSubjects = [
    "Mathematics", "Further Mathematics", "Biology", "Chemistry", "Physics",
    "English Literature", "History", "Geography", "Economics", "Business Studies",
    "Psychology", "Sociology", "Politics", "Philosophy", "French", "Spanish",
    "German", "Art and Design", "Computer Science", "Drama and Theatre", "Music",
    "Physical Education"
  ];

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
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer"
            onClick={() => handleSubjectClick(subject)}
          >
            <h3 className="text-lg font-semibold mb-2">{subject}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Click to view reforms for {subject}.
            </p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <AnimatePresence>
        {selectedSubject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 p-4"
          >
            <motion.h2
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="text-2xl sm:text-4xl font-bold text-white mb-8 text-center"
            >
              No reforms uploaded for {selectedSubject}
            </motion.h2>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
            >
              <Link to="/">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  Return Home
                </Button>
              </Link>
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
                <Button 
                  onClick={() => handleViewReforms('gcse')}
                  className="w-full"
                >
                  View GCSE Reforms
                </Button>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">A-Level Reforms</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  For A-Levels, we're emphasizing interdisciplinary approaches and real-world applications of knowledge.
                </p>
                <Button 
                  onClick={() => handleViewReforms('alevel')}
                  className="w-full"
                >
                  View A-Level Reforms
                </Button>
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