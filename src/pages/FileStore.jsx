import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Construction } from 'lucide-react';

const FileStore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-5xl font-bold mb-8">file store</h1>
          
          <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Construction className="w-16 h-16 text-yellow-300/90" />
              <p className="text-xl text-center text-gray-300">
                our file store is currently under construction. check back soon to access educational resources and materials.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FileStore;