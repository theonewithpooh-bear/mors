
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import '@fontsource/cormorant';

const Index = () => {
  return <div className="min-h-screen bg-white">
      <SEOHead canonical="/" />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <article className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <p className="text-gray-600 tracking-[0.2em] uppercase text-sm">introducing</p>
          <h1 style={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: 'bold'
          }} className="text-6xl mb-4 tracking-normal leading-none md:text-9xl">mors</h1>
          <h2 className="text-base text-gray-600 tracking-wider mb-4">The Movement of Real Skills</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link 
              to="/learn-more" 
              aria-label="learn more about MORS movement and education reform"
            >
              <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white text-sm px-5 py-3 h-auto rounded-full transition-all">
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="bg-black text-white hover:bg-gray-900 text-sm px-5 py-3 h-auto rounded-full transition-all">
                get involved
              </Button>
            </Link>
          </div>
        </article>

        {/* Poster Image */}
        <section className="w-full max-w-4xl mx-auto mb-24">
          <picture>
            <source 
              srcSet="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-896w.webp 896w, /lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-optimized.webp 1536w" 
              sizes="(max-width: 896px) 100vw, 896px"
              type="image/webp" 
            />
            <img 
              src="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-896w.webp" 
              alt="Education Shouldn't Burst Under Pressure - MORS campaign poster" 
              className="w-full h-auto rounded-2xl"
              fetchpriority="high"
              width="896"
              height="597"
            />
          </picture>
        </section>
      </main>
    </div>;
};
export default Index;
