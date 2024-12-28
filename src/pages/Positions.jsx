import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentStatus from '../components/international/CurrentStatus';
import GlobalChallenges from '../components/international/GlobalChallenges';
import DirectorInfo from '../components/international/DirectorInfo';

const International = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <CurrentStatus />
        <GlobalChallenges />
        <DirectorInfo />
      </main>
      <Footer />
    </div>
  );
};

export default International;