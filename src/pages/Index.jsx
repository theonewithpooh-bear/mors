import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const FeatureBox = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
  >
    <div className="flex items-center mb-6">
      <div className="bg-black dark:bg-white p-4 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-8 h-8 text-white dark:text-black" })}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{description}</p>
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-8xl font-bold mb-6 leading-tight"
          >
            A great deal to love.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-3xl mb-10 max-w-3xl mx-auto font-light"
          >
            Easy ways to stay connected. Motivating fitness metrics.
            Innovative health and safety features. Fresh band colors.
            MORS is packed with features at a feel-good price.
          </motion.p>
          <Link to="/learn-more">
            <Button size="lg" className="group text-xl px-8 py-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-20 text-center"
          >
            Styles for smiles.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
              title="Get a closer look at your shut-eye."
              description="Track your sleep stages and get insights to improve your rest."
            />
            <FeatureBox
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
              title="Track your heart health without missing a beat."
              description="Monitor your heart rate and receive notifications for irregularities."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-8">Join the Movement</h2>
          <p className="mb-12 text-2xl max-w-3xl mx-auto">Help us reshape education for a better, more skilled future. Together, we can create a world where every student's potential is fully realized.</p>
          <Link to="/get-involved">
            <Button size="lg" variant="secondary" className="group text-xl px-10 py-6 rounded-full bg-white text-blue-500 hover:bg-gray-100 transition-all duration-300">
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; {new Date().getFullYear()} Movement of Real Skills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;