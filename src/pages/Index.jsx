import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-32">
        {/* Empty container to maintain spacing between header and footer */}
      </div>
      <Footer />
    </div>
  );
};

export default Index;