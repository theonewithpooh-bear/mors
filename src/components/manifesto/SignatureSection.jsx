
import React from 'react';
import ManifestoSection from './ManifestoSection';

const SignatureSection = () => {
  return (
    <ManifestoSection
      className="text-center"
      content={
        <>
          <p className="text-xl mb-8">Signed,</p>
          <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
          <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
        </>
      }
    />
  );
};

export default SignatureSection;
