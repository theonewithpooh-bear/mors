import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f640_0%,transparent_70%)] animate-glow-dance" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-serif mb-6">
              movement of real skills
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              revolutionizing education through practical, skills-based learning that prepares students for the real world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn-more">
                <Button variant="outline" size="lg" className="rounded-full group">
                  learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" className="rounded-full">
                  get involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Poster Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="container mx-auto max-w-4xl">
          <figure>
            <img 
              src="/lovable-uploads/4722914f-5717-4fa6-a9f2-ade90e377a30.png"
              alt="Education shouldn't burst under pressure - MORS campaign poster"
              className="w-full rounded-lg shadow-2xl"
            />
            <figcaption className="text-center text-sm text-gray-400 mt-4 italic">
              Created using artificial intelligence technology. <Link to="/ai-usage" className="underline hover:text-gray-300 transition-colors"><em>why</em></Link>
            </figcaption>
          </figure>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50" />
        <div className="container relative mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif">practical skills</h3>
              <p className="text-gray-400">
                focus on real-world applications and hands-on experience
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif">modern approach</h3>
              <p className="text-gray-400">
                education that evolves with the demands of today's world
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif">future ready</h3>
              <p className="text-gray-400">
                preparing students for success in their careers and life
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;