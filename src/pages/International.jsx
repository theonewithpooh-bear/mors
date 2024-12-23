import React, { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SecretOverlay from '../components/international/SecretOverlay';

const International = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <SecretOverlay />
      <Footer />
    </div>
  );
};

export default International;