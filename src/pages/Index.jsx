import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto space-y-8" style={{ animation: 'fade-in 1s ease-out' }}>
          <p className="text-gray-400 tracking-widest uppercase">introducing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            movement of real skills
          </h1>
          <p className="text-xl text-gray-400 tracking-wider">M.O.R.S.</p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning 
            that prepares students for the real world
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/learn-more">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                learn more
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="bg-white text-black hover:bg-gray-200">
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 mt-32 mb-32">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-white">practical skills</h2>
            <p className="text-gray-400">
              focus on real-world applications and hands-on experience
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-white">modern approach</h2>
            <p className="text-gray-400">
              education that evolves with the demands of today's world
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-white">future ready</h2>
            <p className="text-gray-400">
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