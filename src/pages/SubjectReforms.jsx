import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, Languages, Microscope, Palette, Globe, Music, Activity, Brain, PieChart, Film, Mountain } from 'lucide-react';

const subjects = [
  { name: "Mathematics", description: "Develop problem-solving skills and numerical literacy", icon: <Calculator className="w-6 h-6" /> },
  { name: "English Language", description: "Master communication through reading, writing, and speaking", icon: <BookOpen className="w-6 h-6" /> },
  { name: "English Literature", description: "Explore classic and contemporary texts", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Combined Science", description: "Study core concepts in biology, chemistry, and physics", icon: <Microscope className="w-6 h-6" /> },
  { name: "Art and Design", description: "Express creativity through various artistic mediums", icon: <Palette className="w-6 h-6" /> },
  { name: "Geography", description: "Understand physical and human geographical processes", icon: <Globe className="w-6 h-6" /> },
  { name: "History", description: "Analyze past events and their impact on society", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Modern Languages", description: "Learn to communicate in a foreign language", icon: <Languages className="w-6 h-6" /> },
  { name: "Music", description: "Develop musical skills and appreciate various genres", icon: <Music className="w-6 h-6" /> },
  { name: "Physical Education", description: "Improve physical fitness and sports knowledge", icon: <Activity className="w-6 h-6" /> },
  { name: "Psychology", description: "Study human behavior and mental processes", icon: <Brain className="w-6 h-6" /> },
  { name: "Computer Science", description: "Learn programming and computational thinking", icon: <PieChart className="w-6 h-6" /> },
  { name: "Film Studies", description: "Analyze cinematic techniques and film history", icon: <Film className="w-6 h-6" /> },
  { name: "Geology", description: "Study Earth's structure, composition, and processes", icon: <Mountain className="w-6 h-6" /> },
];

const SubjectCard = ({ subject }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center mb-4">
      {subject.icon}
      <h3 className="text-xl font-semibold ml-2">{subject.name}</h3>
    </div>
    <p className="text-gray-600 mb-4">{subject.description}</p>
    <Button variant="outline" className="w-full">
      View Reforms
    </Button>
  </motion.div>
);

const SubjectReforms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Subject Reforms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectReforms;
