import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestoSection from '../components/manifesto/ManifestoSection';

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <ManifestoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;