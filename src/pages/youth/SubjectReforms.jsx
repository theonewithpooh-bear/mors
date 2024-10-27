import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const YouthSubjectReforms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-8">making subjects better</h1>
        <p className="text-xl text-center text-gray-400 mb-16">
          here's how we want to make your school subjects more fun and useful!
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

export default YouthSubjectReforms;