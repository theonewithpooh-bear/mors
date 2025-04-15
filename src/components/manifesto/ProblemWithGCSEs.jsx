
import React from 'react';
import ManifestoSection from './ManifestoSection';

const ProblemWithGCSEs = () => {
  return (
    <ManifestoSection
      title="Section Two: The Problem with GCSEs"
      content={
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Outdated Exam-Based Learning</h3>
            <p className="text-lg text-gray-300">
              GCSEs and A-levels, as well as other types of further education, demand for you to understand 
              and memorise an overwhelming amount of information, all for you to forget it all just a year 
              after leaving that exam hall.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              MORS sees this as an extreme flaw. If up to us, students would be given exams in a controlled 
              classroom environment, where you are able to communicate with classmates and use your resources 
              to complete the paper.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Narrow Skill Assessment</h3>
            <p className="text-lg text-gray-300">
              The current GCSE system has been developed to rigorously test your memorisation and exam 
              technique ability.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              At MORS, we don't dispute that memory retention is obsolete. We do, however, believe that 
              memorisation is far too excessive, and deprives the individual of the ability to truly grasp 
              each concept.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              MORS believes that we need to prepare students early on, with skills such as creative 
              problem-solving, teamwork, and practical knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Mental Health Impact</h3>
            <p className="text-lg text-gray-300">
              Not only are GCSEs lacking in their ability to prepare students for the real world, but they 
              are actively damaging over 50% of participants.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              A survey conducted by the Association of School and College Leaders (ASCL) in June 2024 revealed 
              that over 77% of secondary school teachers observed exam-related anxiety symptoms. Additionally, 
              58% of teachers reported that they have had concerns from parents about exam-related stress, 
              showing that this anxiety follows them home, becoming a noticeable burden.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              As well as this, 74% of teachers had to implement 'alternative arrangements' to support affected students.
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Source: The Times Huge: number of GCSE pupils suffering from 'exam anxiety'
            </p>
          </div>
        </div>
      }
    />
  );
};

export default ProblemWithGCSEs;
