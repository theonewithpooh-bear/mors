
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '@fontsource/cormorant';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 animate-gradient-x"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-glow-dance"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section with Liquid Glass */}
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <div className="liquid-glass glass-shine p-8 mb-8">
            <p className="text-white/90 tracking-[0.2em] uppercase text-sm font-medium">introducing</p>
          </div>
          
          <h1 
            style={{
              fontFamily: '"Times New Roman", serif',
              fontWeight: 'bold'
            }} 
            className="text-6xl mb-4 tracking-normal leading-none md:text-9xl text-white drop-shadow-2xl"
          >
            mors
          </h1>
          
          <div className="liquid-glass-light glass-highlight p-6 max-w-4xl mx-auto">
            <p className="text-white/95 tracking-wider mb-4 text-lg font-medium">The Movement of Real Skills</p>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              revolutionizing education through practical, skills-based learning that prepares students for the real world
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="glass-button text-white border-white/50 hover:bg-white/20 hover:text-white text-sm px-6 py-4 h-auto rounded-2xl backdrop-blur-lg bg-white/10"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="glass-button bg-white/20 text-white hover:bg-white/30 border border-white/30 text-sm px-6 py-4 h-auto rounded-2xl backdrop-blur-lg">
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster Image with Glass Frame */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <div className="glass-card p-4">
            <img 
              src="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0.png" 
              alt="Education Shouldn't Burst Under Pressure" 
              className="w-full h-auto rounded-xl" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
