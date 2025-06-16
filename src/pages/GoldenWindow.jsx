
import React from 'react';

const GoldenWindow = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-32"
      style={{
        background: 'linear-gradient(to bottom, #FAF8F3 0%, #F3EEDD 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="flex justify-between items-start w-full mb-16">
          <h1 
            className="text-4xl font-bold text-black"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            MORS
          </h1>
          <h2 className="text-2xl text-black">The Golden Window</h2>
        </div>

        {/* Golden Window Image */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/3cd25777-b091-4f6a-aa7e-366f289a8188.png" 
            alt="Golden Window Grid" 
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-yellow-500 mb-8">
          The Golden<br />Window
        </h1>

        {/* Description */}
        <div className="space-y-6 text-black text-lg md:text-xl max-w-2xl mx-auto">
          <p>A liminal period, free from the expectations of</p>
          <p>both childhood and adulthood.</p>
          <p className="font-medium">A window of opportunity.</p>
        </div>
      </div>
    </div>
  );
};

export default GoldenWindow;
