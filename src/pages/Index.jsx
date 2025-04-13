import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '@fontsource/cormorant';
const Index = () => {
  return <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <p className="text-gray-600 tracking-[0.2em] uppercase text-sm">introducing</p>
          <h1 style={{
          fontFamily: 'Times New Roman, serif'
        }} className="text-6xl font-bold text-black mb-4 tracking-normal leading-none md:text-9xl">mors</h1>
          <p className="text-base text-gray-600 tracking-wider mb-4">The Movement of Real Skills</p>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white text-sm px-5 py-3 h-auto rounded-full transition-all">
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="bg-black text-white hover:bg-gray-900 text-sm px-5 py-3 h-auto rounded-full transition-all">
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Poster Image */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <img src="/lovable-uploads/8164cac9-73ee-4f69-8c50-372a0c23bd5e.png" alt="Education Shouldn't Burst Under Pressure" className="w-full h-auto rounded-2xl" />
        </div>
      </main>
    </div>;
};
export default Index;