import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections } from '../data/manifestoContent';

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        {manifestoSections.map((section, index) => (
          <ManifestoSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            content={section.content}
            source={section.source}
            className={section.isHero ? 'min-h-[90vh]' : ''}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;