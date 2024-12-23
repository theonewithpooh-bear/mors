import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-gray-400 tracking-widest uppercase">introducing</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            movement of real skills
          </h1>
          <p className="text-xl text-gray-400 tracking-wider">M.O.R.S.</p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-16">
            our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;