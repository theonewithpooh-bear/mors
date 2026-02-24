import React from 'react';

const RetirementOverlay = () => {
  return (
    <div className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center">
      <h1 className="text-7xl md:text-8xl font-serif font-bold mb-6">
        <span className="font-bold text-white bg-black px-2 py-1">MORS</span>
      </h1>
      <p className="text-2xl md:text-3xl font-serif text-foreground">has been wound down.</p>
    </div>
  );
};

export default RetirementOverlay;
