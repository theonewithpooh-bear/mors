import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, GraduationCap, Star, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {!activeReform ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 py-16"
            >
              {/* Hero Section */}
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-6"
                >
                  <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-6 py-2 text-sm font-medium">
                    Educational Innovation
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
                >
                  subject reforms
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                >
                  Transforming education through practical, skills-based learning that prepares students for the real world
                </motion.p>
              </div>

              {/* Reform Categories */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* GCSE Reforms */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 rounded-xl mr-4">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black">GCSE Reforms</h2>
                        <p className="text-gray-500">Foundation Level Education</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Revolutionizing GCSE education with coursework-focused assessment, practical skills integration, and real-world application of knowledge.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                        Project-based learning approach
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                        Continuous assessment methods
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                        Real-world skill development
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleViewReforms('gcse')}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      >
                        Explore GCSE Reforms
                      </Button>
                      <Button
                        variant="outline"
                        className="px-4"
                        onClick={() => handleGradingSystemClick('gcse')}
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* A-Level Reforms */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-purple-100 rounded-xl mr-4">
                        <GraduationCap className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-black">A-Level Reforms</h2>
                        <p className="text-gray-500">Advanced Level Education</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Advancing A-Level education through interdisciplinary approaches, research-based learning, and preparation for higher education and careers.
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                        Interdisciplinary learning
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                        Research methodologies
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                        Career preparation focus
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleViewReforms('alevel')}
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                      >
                        Explore A-Level Reforms
                      </Button>
                      <Button
                        variant="outline"
                        className="px-4"
                        onClick={() => handleGradingSystemClick('a-level')}
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : !selectedSubject ? (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 py-16"
            >
              <div className="mb-8">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="mb-6 text-gray-600 hover:text-black"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to reforms overview
                </Button>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  {activeReform === 'gcse' ? 'GCSE' : 'A-Level'} Subject Reforms
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl">
                  Select a subject to explore our proposed reforms and improvements
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(activeReform === 'gcse' ? gcseSubjects : aLevelSubjects).map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleSubjectClick(subject.name)}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gray-100 rounded-lg mr-3 group-hover:bg-blue-100 transition-colors">
                        {subject.icon && <subject.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-black capitalize group-hover:text-blue-600 transition-colors">
                          {subject.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          View reforms
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
              className="container mx-auto px-4 py-16"
            >
              <Button
                variant="ghost"
                onClick={handleBack}
                className="mb-6 text-gray-600 hover:text-black"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to subjects
              </Button>

              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                    {activeReform === 'gcse' ? 'GCSE' : 'A-Level'} Reform
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent capitalize">
                    {selectedSubject}
                  </h1>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                  {selectedSubject === "english language" && activeReform === 'gcse' ? (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-black">
                          M.O.R.S. Proposed Reforms for GCSE English Language
                        </h2>
                        
                        <div className="space-y-6">
                          {[
                            {
                              title: "Shift to Coursework-Focused Assessment",
                              description: "Replace final exams with ongoing coursework, mirroring real-world writing processes."
                            },
                            {
                              title: "Textual Analysis Through Continuous Coursework",
                              description: "Evolve reading assessments to ongoing coursework, analysing texts throughout the year."
                            },
                            {
                              title: "Integration of Spoken Language Endorsement",
                              description: "Make spoken language an integral part of coursework with multiple presentations."
                            },
                            {
                              title: "Ongoing Reform Flexibility",
                              description: "Regular review and adjustment of reforms to ensure relevance and effectiveness."
                            }
                          ].map((reform, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl"
                            >
                              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="font-semibold text-black mb-2">{reform.title}</h3>
                                <p className="text-gray-600">{reform.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-8">
                        <h3 className="text-xl font-bold mb-6 text-black">Critical Questions & Solutions</h3>
                        <div className="space-y-6">
                          {[
                            {
                              question: "Will continuous coursework assessments put undue pressure on students?",
                              answer: "M.O.R.S. proposes a flexible deadline system to manage workload and stress."
                            },
                            {
                              question: "Could removing exams undermine assessment of working under pressure?",
                              answer: "Timed, in-class assessments would be incorporated to simulate pressure scenarios."
                            },
                            {
                              question: "How to ensure consistency in grading with coursework?",
                              answer: "Clear, standardised marking criteria and regular external moderation would be implemented."
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: (index + 4) * 0.1, duration: 0.5 }}
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <h4 className="font-semibold text-black mb-3">Q: {item.question}</h4>
                              <p className="text-gray-600">A: {item.answer}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-black">Reforms Coming Soon</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        No specific reforms have been uploaded for {selectedSubject} yet. Check back later for updates on our proposed changes to this subject.
                      </p>
                    </div>
                  )}
                </div>
              </div>
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