
import React from 'react';
import ManifestoSection from './ManifestoSection';

const SignatureSection = () => {
  return (
    <ManifestoSection
      className="text-center"
      content={
        <>
          <p className="text-xl mb-8">Signed,</p>
          <div className="mb-6">
            <img 
              src="/monty-signature.jpeg" 
              alt="Monty Middleton-Burn's signature"
              className="mx-auto max-w-xs h-auto filter invert dark:invert-0"
            />
          </div>
          <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
          <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
        </>
      }
    />
  );
};

export default SignatureSection;
