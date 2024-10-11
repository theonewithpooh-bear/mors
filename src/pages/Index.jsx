import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VisionBox = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-br from-white to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
  >
    <div className="flex items-center mb-6">
      <div className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] p-4 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
      </div>
      <h3 className="text-2xl font-bold text-[#1E40AF]">{title}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl font-extrabold mb-6 leading-tight"
          >
            Movement of Real Skills
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl mb-10 max-w-2xl font-light"
          >
            Transforming education to prioritize practical, real-world skills for a brighter future
          </motion.p>
          <Link to="/learn-more">
            <Button variant="secondary" size="lg" className="group text-xl px-8 py-4">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute inset-0 bg-[url('/placeholder.svg')] bg-repeat opacity-10"
        />
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="flex justify-center -mt-8"
      >
        <ChevronDown className="w-12 h-12 text-[#1E40AF]" />
      </motion.div>

      {/* Main Content */}
      <section className="py-24 flex-grow">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-20 text-center text-[#1E40AF]"
          >
            Our Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <VisionBox
              icon={<BookOpen />}
              title="Practical Learning"
              description="Emphasizing real-world skills over traditional exam-based assessments to prepare students for the challenges of tomorrow."
            />
            <VisionBox
              icon={<Users />}
              title="Inclusive Education"
              description="Recognizing and nurturing diverse talents and learning styles, ensuring every student can thrive and reach their full potential."
            />
            <VisionBox
              icon={<Award />}
              title="Foundation Skills Certificates"
              description="Introducing FSCs as a comprehensive way to assess and showcase student capabilities in practical, real-world scenarios."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">Join the Movement</h2>
          <p className="mb-12 text-2xl text-blue-100 max-w-3xl mx-auto">Help us reshape education for a better, more skilled future. Together, we can create a world where every student's potential is fully realized.</p>
          <Link to="/get-involved">
            <Button size="lg" variant="secondary" className="group text-xl px-10 py-6 rounded-full hover:bg-white hover:text-[#1E40AF] transition-all duration-300">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Movement of Real Skills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;