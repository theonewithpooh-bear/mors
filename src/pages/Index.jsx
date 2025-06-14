
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '@fontsource/cormorant';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 animate-gradient-x"></div>
      
      {/* Floating glass orbs for depth */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full liquid-glass animate-glow-dance opacity-20"></div>
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full liquid-glass animate-glow-dance opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full liquid-glass animate-glow-dance opacity-15" style={{animationDelay: '4s'}}></div>
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section with Liquid Glass panel */}
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <div className="liquid-glass p-12 mx-4 specular-highlight">
            <p className="text-white/80 tracking-[0.2em] uppercase text-sm mb-4">introducing</p>
            <h1 
              style={{
                fontFamily: '"Times New Roman", serif',
                fontWeight: 'bold'
              }} 
              className="text-6xl mb-4 tracking-normal leading-none md:text-9xl text-white drop-shadow-lg"
            >
              mors
            </h1>
            <p className="text-base text-white/90 tracking-wider mb-4 font-medium">The Movement of Real Skills</p>
            <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              revolutionizing education through practical, skills-based learning that prepares students for the real world
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="liquid-glass-button text-white border-white/30 hover:bg-white/20 hover:text-white text-sm px-6 py-3 h-auto font-medium specular-highlight backdrop-blur-md"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="liquid-glass-button bg-white/20 text-white hover:bg-white/30 hover:text-white text-sm px-6 py-3 h-auto font-medium specular-highlight backdrop-blur-md">
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster Image with glass frame */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <div className="liquid-glass p-4">
            <img 
              src="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0.png" 
              alt="Education Shouldn't Burst Under Pressure" 
              className="w-full h-auto rounded-2xl shadow-2xl" 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
