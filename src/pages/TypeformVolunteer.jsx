
import React, { useEffect } from 'react';

const TypeformVolunteer = () => {
  useEffect(() => {
    // Load Typeform script with security considerations
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    
    // Add error handling for script loading
    script.onload = () => {
      console.log('Typeform script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load Typeform script');
    };
    
    document.body.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">volunteer registration</h1>
          
          <div className="mt-12">
            <div data-tf-live="01JRRGJKVNB3X6JJ8FV4JXH0FZ"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TypeformVolunteer;
