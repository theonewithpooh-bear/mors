import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ManifestoSection from '../components/manifesto/ManifestoSection';

const Index = () => {
  const [shouldAnimate] = React.useState(() => {
    const hasAnimated = localStorage.getItem('indexAnimationPlayed');
    if (!hasAnimated) {
      localStorage.setItem('indexAnimationPlayed', 'true');
      return true;
    }
    return false;
  });

  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Title Section */}
      <ManifestoSection
        content={
          <div className="space-y-4">
            <h1 className="text-7xl font-serif mb-2">mors</h1>
            <p className="text-3xl font-serif">a future for education</p>
            <p className="text-xl text-gray-400">manifesto</p>
          </div>
        }
      />

      {/* Introduction Section */}
      <ManifestoSection
        title="Section One: Introduction & Vision"
        content={
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-serif mb-4">What is MORS?</h3>
              <p>
                M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul 
                the current outdated exam and education system in the UK, by advocating for change.
              </p>
              <p className="mt-4">
                MORS hopes to achieve this by acting as a central hub for all major supporters of 
                educational reform to speak from.
              </p>
              <p className="mt-4">We are stronger as one.</p>
            </div>
          </div>
        }
      />

      {/* Vision Statement Section */}
      <ManifestoSection
        title="Vision Statement"
        content={
          <div className="space-y-6">
            <p>
              MORS is advocating for a future where British students are prepared for the real world 
              by being taught in a way that will equip them for working life.
            </p>
            <p>
              Studies have shown that the majority of information you gain during GCSEs is lost within a year.
            </p>
            <p>
              At MORS, we don't believe this is right. We believe that students deserve better, 
              the right to a better education—one that is actually worthwhile.
            </p>
          </div>
        }
        source="Herman Ebbinghaus' forgetting curve"
      />

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
        className="pb-24"
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