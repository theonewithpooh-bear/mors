
import React from 'react';
import ManifestoSection from './ManifestoSection';

const IntroductionSection = () => {
  return (
    <ManifestoSection
      title="Section One: Introduction & Vision"
      content={
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">What is MORS?</h3>
            <p className="text-lg text-gray-300">
              M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul 
              the current outdated exam and education system in the UK, by advocating for change.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              MORS hopes to achieve this by acting as a central hub for all major supporters of 
              educational reform to speak from.
            </p>
            <p className="text-lg text-gray-300 mt-4">We are stronger as one.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Vision Statement</h3>
            <p className="text-lg text-gray-300">
              MORS is advocating for a future where British students are prepared for the real world 
              by being taught in a way that will equip them for working life.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              Studies have shown that the majority of information you gain during GCSEs is lost within a year.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              At MORS, we don't believe this is right. We believe that students deserve better, 
              the right to a better education—one that is actually worthwhile.
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              Source: Herman Ebbinghaus' "forgetting curve"
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-4">Why Overhaul the System?</h3>
            <p className="text-lg text-gray-300">
              Exams, specifically GCSEs, do not measure your skills and only provide you with a qualification, 
              something that only 30% of employers value. The majority (70%) of employers much prefer staff with real skills.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              The education system needs to evolve in order to prevent getting even more stuck in the past than it already is.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              System overhaul is the only way to fix this gimmick, which has become, we feel, too mature to be reformed.
            </p>
            <p className="text-sm text-gray-500 italic mt-2">Source: PwC UK</p>
          </div>
        </div>
      }
    />
  );
};

export default IntroductionSection;
