import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const SubjectReforms = () => {
  const [activeReform, setActiveReform] = useState(null);

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
  };

  const renderSubjects = (subjects) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{subject}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proposed reforms for {subject} focus on practical skills and real-world applications.
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Subject Reforms</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">GCSE Reforms</h2>
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
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">A-Level Reforms</h2>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">GCSE Subject Reforms</h2>
            {renderSubjects(gcseSubjects)}
          </div>
        )}

        {activeReform === 'alevel' && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">A-Level Subject Reforms</h2>
            {renderSubjects(aLevelSubjects)}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectReforms;