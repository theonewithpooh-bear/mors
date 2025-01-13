import React from 'react';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections } from '../data/manifestoContent';

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
    </div>
  );
};

export default Manifesto;