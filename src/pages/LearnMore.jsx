import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/learn-more/HeroSection';
import StatisticsSection from '../components/learn-more/StatisticsSection';
import FAQSection from '../components/learn-more/FAQSection';
import CallToAction from '../components/learn-more/CallToAction';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <HeroSection />
        <StatisticsSection />
        <FAQSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default LearnMore;