import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIUsageFAQ from '../components/home/AIUsageFAQ';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-8">Welcome to MORS</h1>
            <p className="text-gray-400 text-lg mb-4">
              At MORS, we are dedicated to revolutionizing education and advocating for meaningful change.
            </p>
            <p className="text-gray-400 text-lg">
              Join us in our mission to create a better future for students everywhere.
            </p>
          </div>
        </section>
        <AIUsageFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
