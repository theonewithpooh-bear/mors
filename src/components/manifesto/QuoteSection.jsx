
import React from 'react';
import ManifestoSection from './ManifestoSection';

const QuoteSection = () => {
  return (
    <ManifestoSection
      className="text-center"
      content={
        <>
          <blockquote className="text-xl italic text-gray-300 mb-4">
            "Victory at all costs, victory in spite of all terror, victory however long and hard 
            the road may be; for without victory, there is no survival"
          </blockquote>
          <p className="text-gray-400">— Winston Churchill</p>
        </>
      }
    />
  );
};

export default QuoteSection;
