import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Section = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`min-h-screen flex items-center justify-center ${className}`}
  >
    <div className="text-center max-w-4xl mx-auto px-4">
      {children}
    </div>
  </motion.div>
);

const Index = () => {
  const [shouldAnimate] = React.useState(() => {
    const hasAnimated = localStorage.getItem('indexAnimationPlayed');
    if (!hasAnimated) {
      localStorage.setItem('indexAnimationPlayed', 'true');
      return true;
    }
    return false;
  });

  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Title Section */}
      <Section>
        <motion.div
          initial={shouldAnimate ? { scale: 4, y: "40vh" } : false}
          animate={shouldAnimate ? { scale: 1, y: 0 } : false}
          transition={{ 
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
        >
          <h1 className="text-7xl font-serif mb-2">mors</h1>
          <p className="text-3xl font-serif">a future for education</p>
          <p className="text-xl text-gray-400 mt-4">manifesto</p>
        </motion.div>
      </Section>

      {/* Introduction Section */}
      <Section>
        <h2 className="text-5xl font-serif mb-12">Introduction & Vision</h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-2xl font-serif mb-4">What is MORS?</h3>
            <p className="text-lg text-gray-300">
              M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul 
              the current outdated exam and education system in the UK, by advocating for change.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              MORS hopes to achieve this by acting as a central hub for all major supporters of 
              educational reform to speak from.
            </p>
            <p className="text-lg text-gray-300 mt-4">We are stronger as one.</p>
          </div>
        </div>
      </Section>

      {/* Vision Statement Section */}
      <Section>
        <h2 className="text-5xl font-serif mb-12">Vision Statement</h2>
        <div className="space-y-8 text-left">
          <p className="text-lg text-gray-300">
            MORS is advocating for a future where British students are prepared for the real world 
            by being taught in a way that will equip them for working life.
          </p>
          <p className="text-lg text-gray-300">
            Studies have shown that the majority of information you gain during GCSEs is lost within a year.
          </p>
          <p className="text-lg text-gray-300">
            At MORS, we don't believe this is right. We believe that students deserve better, 
            the right to a better education—one that is actually worthwhile.
          </p>
          <p className="text-sm text-gray-500 italic">
            Source: Herman Ebbinghaus' "forgetting curve"
          </p>
        </div>
      </Section>

      {/* Quote Section */}
      <Section>
        <blockquote className="text-2xl italic text-gray-300 mb-4">
          "Victory at all costs, victory in spite of all terror, victory however long and hard 
          the road may be; for without victory, there is no survival"
        </blockquote>
        <p className="text-gray-400">— Winston Churchill</p>
      </Section>

      {/* Signature Section */}
      <Section className="pb-24">
        <p className="text-xl mb-8">Signed,</p>
        <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
        <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;