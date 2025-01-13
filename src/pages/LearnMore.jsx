import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/learn-more/HeroSection';
import StatisticsSection from '../components/learn-more/StatisticsSection';
import FAQSection from '../components/learn-more/FAQSection';
import FounderSpeech from '../components/learn-more/FounderSpeech';
import CallToAction from '../components/learn-more/CallToAction';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-20">
        <HeroSection />
        <StatisticsSection />
        <FounderSpeech />
        <FAQSection />
        <CallToAction />
      </main>
    </div>
  );
};

export default LearnMore;