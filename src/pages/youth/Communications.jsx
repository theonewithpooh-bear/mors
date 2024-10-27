import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const YouthCommunications = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-8">let's talk!</h1>
        <p className="text-xl text-center text-gray-400 mb-16">
          want to share your ideas about making school better? we'd love to hear from you!
        </p>
        
        <div className="text-center">
          <Link to="/">
            <Button 
              variant="outline" 
              className="text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              switch to grown-up version
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YouthCommunications;