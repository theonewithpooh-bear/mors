import React from 'react';

const FounderSpeech = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      <div className="border-b-2 border-gray-200 mb-6 pb-4">
        <h1 className="font-serif text-4xl text-center mb-2 text-white">The Daily Reform</h1>
        <p className="text-center text-gray-400 text-sm">Volume 1, Issue 1 - Education Reform Special Edition</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="font-serif text-3xl text-white mb-4 text-center">The Case Against GCSEs</h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            By Monty Middleton-Burn
            <span className="mx-2">|</span>
            Founder, MORS
          </p>
          
          <div className="prose prose-invert max-w-none">
            <div className="font-serif space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                I have noticed, through my studying of my GCSEs, that they are seriously flawed. The current system demands an unrealistic memorization of vast amounts of information across multiple subjects during a crucial developmental period when the brain is still maturing.
              </p>
              
              <div className="my-6 border-l-4 border-gray-500 pl-4 italic">
                "In what world, will you again be put in an exam hall, in extreme silence, not allowed to communicate with anyone, or use any of your resources?"
              </div>
              
              <p className="text-xl leading-relaxed">
                This scenario is entirely unrealistic and places unnecessary stress on our young people while wasting valuable time. Time that could be better invested in core knowledge acquisition and practical application of skills relevant to future careers.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">The Alarming Statistics</h3>
              <p className="text-xl leading-relaxed">
                Research reveals that within months, 60% to 70% of GCSE knowledge dissipates, escalating to 90% within a year. More concerning still, only 30% of employers value these qualifications, with the majority prioritizing practical skills that GCSEs fail to measure.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">A Revolutionary Proposal</h3>
              <p className="text-xl leading-relaxed">
                I propose a revolutionary system that assesses real-world abilities through coursework. This would introduce two tiers of Foundation Skills Certificates (FSCs) as replacements for GCSE and A-Level qualifications, with an optional higher-level qualification available for those who prefer it over FSC Level 2.
              </p>
            </div>
          </div>
        </div>
        
        <aside className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg h-fit">
          <h3 className="font-serif text-xl font-bold mb-4 text-white">Key Points</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">90%</span>
              <span>of GCSE knowledge lost within one year</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">70%</span>
              <span>of employers prioritize skills over qualifications</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-xl">2</span>
              <span>tiers of proposed Foundation Skills Certificates</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default FounderSpeech;