import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections } from '../data/manifestoContent';

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {manifestoSections.map((section, index) => (
          <ManifestoSection
            key={index}
            title={section.title}
            subtitle={section.subtitle}
            content={section.content}
            source={section.source}
            isHero={section.isHero}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Manifesto;