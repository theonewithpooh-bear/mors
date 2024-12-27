import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import NewsCard from '@/components/newsroom/NewsCard';
import NewsHeader from '@/components/newsroom/NewsHeader';

const Newsroom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      container.style.setProperty('--mouse-x', x);
      container.style.setProperty('--mouse-y', y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tabContentVariants = {
    initial: { 
      opacity: 0,
      y: 10,
      scale: 0.98
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]">
      <Header />
      <main ref={containerRef} className="container mx-auto px-4 pt-24 pb-12 relative">
        <NewsHeader />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-purple-500/10 rounded-full blur-3xl" />
        
        <Tabs defaultValue="featured" className="w-full relative z-10">
          <TabsList className="mb-8 bg-black/20 backdrop-blur-xl border border-white/10">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="mors">MORS Updates</TabsTrigger>
            <TabsTrigger value="ai">AI News</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="tech">Tech & Society</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={tabContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
                <TabsContent value="featured" className="space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <NewsCard 
                        title="The Future of Education: AI-Powered Learning Environments"
                        description="Exploring how artificial intelligence is reshaping traditional classroom experiences and creating personalized learning paths for students."
                        source="MORS Editorial"
                        date="Mar 15, 2024"
                        readTime={8}
                        image="/placeholder.svg"
                        index={0}
                      />
                    </div>
                    <div className="space-y-6">
                      <NewsCard 
                        title="Latest Developments in Educational Reform"
                        description="Key updates on policy changes and their impact on modern education systems."
                        source="Education Weekly"
                        date="Mar 14, 2024"
                        readTime={5}
                        index={1}
                      />
                      <NewsCard 
                        title="AI Ethics in Educational Technology"
                        description="Understanding the ethical implications of AI implementation in educational tools."
                        source="Tech Insights"
                        date="Mar 13, 2024"
                        readTime={6}
                        index={2}
                      />
                    </div>
                  </div>
                </TabsContent>

              <TabsContent value="mors" className="space-y-6">
                <NewsCard 
                  title="MORS Launches New Initiative"
                  description="Announcing our latest program to support educational innovation."
                  source="MORS Team"
                  date="Mar 12, 2024"
                  readTime={4}
                />
              </TabsContent>

              <TabsContent value="ai" className="space-y-6">
                <NewsCard 
                  title="Breakthrough in AI Language Models"
                  description="New developments in AI technology show promising applications for education."
                  source="AI Today"
                  date="Mar 11, 2024"
                  readTime={7}
                />
              </TabsContent>

              <TabsContent value="education" className="space-y-6">
                <NewsCard 
                  title="Global Education Trends 2024"
                  description="Analysis of emerging patterns in educational systems worldwide."
                  source="Education Observer"
                  date="Mar 10, 2024"
                  readTime={6}
                />
              </TabsContent>

              <TabsContent value="tech" className="space-y-6">
                <NewsCard 
                  title="Technology's Impact on Learning"
                  description="How modern tech is changing the way we think about education."
                  source="Tech Review"
                  date="Mar 9, 2024"
                  readTime={5}
                />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </main>
    </div>
  );
};

export default Newsroom;
