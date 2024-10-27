import React from 'react';

const FounderSpeech = () => {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <p className="text-sm tracking-wide uppercase text-gray-400 mb-6 text-center">
        Written by our founder · Monty Middleton-Burn
      </p>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-serif text-white mb-8 text-center">The Case Against GCSEs</h2>
        <div className="prose prose-invert max-w-none">
          <div className="font-serif space-y-6 text-gray-300">
            <p className="text-xl leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-1">
              I have noticed, through my studying of my GCSEs, that they are seriously flawed.
            </p>
            <p className="text-xl leading-relaxed">
              You are expected to learn an extremely large amount of information, on a wide variety of subjects, at a time when the brain is not yet fully developed.
            </p>
            <p className="text-xl leading-relaxed">
              In what world, will you again be put in an exam hall, in extreme silence, not allowed to communicate with anyone, or use any of your resources?
            </p>
            <p className="text-xl leading-relaxed">
              Exactly, you won't! Which is why it is entirely unrealistic, and putting not just undue stress on our young people, but wasting their time. Time that could be much better spent on more core knowledge, and learning that core knowledge in a way that will actually help you in the future.
            </p>
            <p className="text-xl leading-relaxed">
              It has been discovered that within a few months, nearly 60% to 70% of knowledge gained through GCSEs can be lost, and up to 90% can be lost within a year. That's 90% of knowledge gone! And to make matters worse, only about 30% of employers even care about the qualifications you acquired. The remaining 70% care more about your skills, which GCSEs can't measure or quantify.
            </p>
            <p className="text-xl leading-relaxed">
              That's why I propose a revolutionary new system that will completely overhaul the current system. I propose a system that assesses real-world abilities through coursework.
            </p>
            <p className="text-xl leading-relaxed">
              In my proposed system, there would be two tiers of Foundation Skills Certificates (FSCs) for GCSE and A-Level replacements, respectively. However, there would still be an optional higher-level qualification available for those who prefer it over FSC Level 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSpeech;