import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto space-y-8" style={{ animation: 'fade-in 1s ease-out' }}>
          <p className="text-gray-400 tracking-[0.2em] uppercase text-lg">introducing</p>
          <h1 className="text-8xl md:text-9xl font-light text-white mb-4 tracking-normal leading-none">
            movement of real skills
          </h1>
          <p className="text-xl text-gray-400 tracking-wider mb-4">M.O.R.S.</p>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-6 h-auto rounded-full transition-all"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button 
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 h-auto rounded-full transition-all"
              >
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster Image */}
        <div className="w-full max-w-4xl mx-auto mt-16">
          <img 
            src="/lovable-uploads/4722914f-5717-4fa6-a9f2-ade90e377a30.png" 
            alt="MORS Poster" 
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Features Section */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4 mt-32 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">practical skills</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              focus on real-world applications and hands-on experience
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">modern approach</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              education that evolves with the demands of today's world
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight">future ready</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              preparing students for success in their careers and life
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
