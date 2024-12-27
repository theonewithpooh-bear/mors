import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      
      {/* Features Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4 mt-32 mb-32">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">practical skills</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            focus on real-world applications and hands-on experience
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">modern approach</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            education that evolves with the demands of today's world
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">future ready</h2>
          <p className="text-base text-gray-400 leading-relaxed">
            preparing students for success in their careers and life
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;