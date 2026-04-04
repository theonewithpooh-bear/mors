import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEOHead canonical="/" />

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] animate-orb-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] animate-orb-drift" style={{ animationDelay: '-7s' }} />
      </div>

      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <motion.article 
          className="max-w-4xl mx-auto space-y-6 mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p 
            className="text-muted-foreground tracking-[0.3em] uppercase text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            introducing
          </motion.p>

          <motion.h1 
            className="font-display text-7xl md:text-9xl font-bold tracking-tight leading-none text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            mors
          </motion.h1>

          <motion.h2 
            className="text-sm md:text-base text-muted-foreground tracking-[0.15em] uppercase font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            The Movement of Real Skills
          </motion.h2>

          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link to="/learn-more" aria-label="learn more about MORS movement and education reform">
              <Button 
                variant="outline" 
                className="text-foreground border-border hover:bg-foreground hover:text-primary-foreground text-sm px-6 py-3 h-auto rounded-full transition-all duration-300 hover:shadow-md"
              >
                learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="bg-foreground text-primary-foreground hover:bg-foreground/90 text-sm px-6 py-3 h-auto rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                get involved
              </Button>
            </Link>
          </motion.div>
        </motion.article>

        {/* Divider */}
        <motion.div 
          className="w-16 h-px bg-border mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />

        {/* Poster Image */}
        <motion.section 
          className="w-full max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <picture>
            <source 
              srcSet="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-896w.webp 896w, /lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-optimized.webp 1536w" 
              sizes="(max-width: 896px) 100vw, 896px"
              type="image/webp" 
            />
            <img 
              src="/lovable-uploads/b093febb-5554-48ca-8abb-15f73ed785a0-896w.webp" 
              alt="Education Shouldn't Burst Under Pressure - MORS campaign poster" 
              className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              fetchpriority="high"
              width="896"
              height="597"
            />
          </picture>
        </motion.section>
      </main>
    </div>
  );
};
export default Index;
