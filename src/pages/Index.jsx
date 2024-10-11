import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VisionBox = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-white to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
  >
    <div className="flex items-center mb-4">
      <div className="bg-[#1E40AF] p-3 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
      </div>
      <h3 className="text-xl font-semibold text-[#1E40AF]">{title}</h3>
    </div>
    <p className="text-gray-700 leading-relaxed">{description}</p>
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
        className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white py-24"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 leading-tight">Movement of Real Skills</h1>
          <p className="text-2xl mb-8 max-w-2xl">Transforming education to prioritize practical, real-world skills for a brighter future</p>
          <Link to="/learn-more">
            <Button variant="secondary" size="lg" className="group">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-16 text-center text-[#1E40AF]">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-white">Join the Movement</h2>
          <p className="mb-10 text-xl text-blue-100">Help us reshape education for a better, more skilled future.</p>
          <Link to="/get-involved">
            <Button size="lg" variant="secondary" className="group text-lg px-8 py-4">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Movement of Real Skills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;