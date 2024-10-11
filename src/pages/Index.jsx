import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureBox = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="flex items-center mb-6">
      <div className="bg-black p-4 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-8xl font-bold mb-6 leading-tight"
          >
            Movement of Real Skills
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-3xl mb-10 max-w-3xl mx-auto font-light"
          >
            Transforming education to prioritize practical, real-world skills for a brighter future
          </motion.p>
          <Link to="/learn-more">
            <Button variant="outline" size="lg" className="group text-xl px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-12 h-12 text-white" />
      </motion.div>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-20 text-center"
          >
            Our Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
              title="Practical Learning"
              description="Emphasizing real-world skills over traditional exam-based assessments to prepare students for the challenges of tomorrow."
            />
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Inclusive Education"
              description="Recognizing and nurturing diverse talents and learning styles, ensuring every student can thrive and reach their full potential."
            />
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
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
        className="bg-black text-white py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-8">Join the Movement</h2>
          <p className="mb-12 text-2xl max-w-3xl mx-auto">Help us reshape education for a better, more skilled future. Together, we can create a world where every student's potential is fully realized.</p>
          <Link to="/get-involved">
            <Button size="lg" variant="secondary" className="group text-xl px-10 py-6 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Movement of Real Skills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;