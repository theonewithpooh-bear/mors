import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import '@fontsource/cormorant';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">introducing</p>
          <h1 className="text-6xl md:text-7xl font-normal text-white mb-4 tracking-normal leading-none font-['Cormorant']">
            movement of real skills
          </h1>
          <p className="text-base text-gray-400 tracking-wider mb-4">M.O.R.S.</p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button 
                className="bg-white text-black hover:bg-gray-100 text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster Image */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <img 
            src="/lovable-uploads/4722914f-5717-4fa6-a9f2-ade90e377a30.png" 
            alt="MORS Poster" 
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;