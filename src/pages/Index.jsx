import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeatureBox = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-800/50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="flex items-center mb-6">
      <div className="bg-black p-4 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white transition-colors duration-500">
      <Header />
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
            className="text-8xl font-bold mb-6 leading-tight faint-glow"
          >
            movement of real skills
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-3xl mb-10 max-w-3xl mx-auto font-light"
          >
            transforming education to prioritize practical, real-world skills for a brighter future
          </motion.p>
          <Link to="/learn-more">
            <Button variant="outline" size="lg" className="group text-xl px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300">
              learn more
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-20 text-center"
          >
            our vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
              title="practical learning"
              description="emphasizing real-world skills over traditional exam-based assessments to prepare students for the challenges of tomorrow."
            />
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="inclusive education"
              description="recognizing and nurturing diverse talents and learning styles, ensuring every student can thrive and reach their full potential."
            />
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
              title="foundation skills certificates"
              description="introducing fscs as a comprehensive way to assess and showcase student capabilities in practical, real-world scenarios."
            />
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-black text-white py-24"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-8">join the movement</h2>
          <p className="mb-12 text-2xl max-w-3xl mx-auto">help us reshape education for a better, more skilled future. together, we can create a world where every student's potential is fully realized.</p>
          <Link to="/get-involved">
            <Button size="lg" variant="secondary" className="group text-xl px-10 py-6 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300">
              get involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
