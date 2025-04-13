
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <img 
        src="/lovable-uploads/d61adcbf-97c4-420d-93dd-270fbdf20723.png" 
        alt="404 Error - Page Not Found" 
        className="w-auto h-[60vh] max-w-full object-contain animate-fade-in"
        loading="eager"
        fetchpriority="high"
        style={{ filter: 'invert(1)' }} // Inverting the image to match the new light theme
      />
    </div>
  );
};

export default NotFound;
