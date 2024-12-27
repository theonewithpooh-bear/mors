import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import { Clock, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const NewsCard = ({ title, description, source, date, readTime, image, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      z: -100,
      rotateX: -15,
      y: 50 
    },
    visible: { 
      opacity: 1,
      scale: 1,
      z: 0,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.35,
        duration: 0.8,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 2,
      z: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative perspective-1000"
    >
      <Card className="backdrop-blur-sm bg-black/30 border border-white/10 overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/20">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-gray-400">
            <span>{source}</span> • <span>{date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {readTime} min read
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-white/5 pt-4">
          <div className="flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <Bookmark className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
          >
            Read more <ChevronRight className="w-4 h-4" />
          </motion.button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

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

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]">
      <Header />
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <main ref={containerRef} className="container mx-auto px-4 pt-24 pb-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-4">
              Newsroom
            </h1>
            <p className="text-gray-400 max-w-2xl mb-12">
              Explore the latest updates, insights, and stories about education reform and technological innovation.
            </p>
          </motion.div>

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
            </AnimatePresence>
          </Tabs>
        </main>
      </ScrollArea>
    </div>
  );
};

export default Newsroom;
