
import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import ManifestoTitle from '../components/manifesto/ManifestoTitle';
import IntroductionSection from '../components/manifesto/IntroductionSection';
import ProblemWithGCSEs from '../components/manifesto/ProblemWithGCSEs';
import CallToAction from '../components/manifesto/CallToAction';
import QuoteSection from '../components/manifesto/QuoteSection';
import SignatureSection from '../components/manifesto/SignatureSection';

const FileStore = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      {/* Title Section */}
      <ManifestoTitle />

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Problem with GCSEs Section */}
      <ProblemWithGCSEs />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Quote Section */}
      <QuoteSection />

      {/* Signature Section */}
      <SignatureSection />

      <Footer />
    </div>
  );
};

export default FileStore;
