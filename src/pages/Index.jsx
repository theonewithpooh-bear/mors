import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestoSection from '../components/manifesto/ManifestoSection';
import { manifestoSections } from '../data/manifestoContent';

const Index = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      
      {manifestoSections.map((section, index) => {
        if (section.isHero) {
          return (
            <ManifestoSection
              key={index}
              content={
                <div className="space-y-4 text-center">
                  <h1 className="text-7xl font-serif mb-2">{section.title}</h1>
                  <p className="text-3xl font-serif">{section.subtitle}</p>
                  <p className="text-xl text-gray-400">{section.content}</p>
                </div>
              }
            />
          );
        }

        return (
          <ManifestoSection
            key={index}
            title={section.title}
            content={
              <div className="space-y-12">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex} className="space-y-4">
                    {subsection.subtitle && (
                      <h3 className="text-2xl font-serif">{subsection.subtitle}</h3>
                    )}
                    {subsection.text && subsection.text.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg text-gray-300">
                        {paragraph}
                      </p>
                    ))}
                    {subsection.source && (
                      <p className="text-sm text-gray-500 italic">
                        Source: {subsection.source}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            }
          />
        );
      })}

      {/* Quote Section */}
      <ManifestoSection
        className="text-center"
        content={
          <>
            <blockquote className="text-2xl italic text-gray-300 mb-4">
              "Victory at all costs, victory in spite of all terror, victory however long and hard 
              the road may be; for without victory, there is no survival"
            </blockquote>
            <p className="text-gray-400">— Winston Churchill</p>
          </>
        }
      />

      {/* Signature Section */}
      <ManifestoSection
        className="text-center pb-24"
        content={
          <>
            <p className="text-xl mb-8">Signed,</p>
            <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
            <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
          </>
        }
      />

      <Footer />
    </div>
  );
};

export default Index;