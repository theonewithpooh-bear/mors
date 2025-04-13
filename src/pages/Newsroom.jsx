
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, Clock, FileText, Newspaper } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeaturedArticle from '@/components/newsroom/FeaturedArticle';
import { newsData } from '@/data/newsData';

const PressOffice = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the most recent article for featured spot
  const featuredArticle = sortedNews[0];

  // The rest of the articles
  const regularArticles = sortedNews.slice(1);

  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100/20 via-white to-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          <NewsHeader />
          
          <Tabs defaultValue="press-releases" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-gray-100 p-1">
                <TabsTrigger value="press-releases" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Press Releases</span>
                </TabsTrigger>
                <TabsTrigger value="articles" className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4" />
                  <span>Articles</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="press-releases" className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 p-8 rounded-xl border border-gray-500/30 bg-white/30 backdrop-blur-sm text-center"
              >
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                  className="mb-4 inline-flex items-center justify-center"
                >
                  <Clock className="h-12 w-12 text-black" />
                </motion.div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-400 mb-3">
                  Press Releases Coming Soon
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Our official press releases about educational reform initiatives, policy changes, and MORS announcements will be available here soon.
                </p>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="articles" className="focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 p-8 rounded-xl border border-gray-500/30 bg-white/30 backdrop-blur-sm text-center"
              >
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                  className="mb-4 inline-flex items-center justify-center"
                >
                  <Clock className="h-12 w-12 text-black" />
                </motion.div>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-400 mb-3">
                  Articles Coming Soon
                </h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  We're preparing insightful articles about educational reform, AI in education, and the latest MORS updates. Check back soon for fresh content that will help shape the future of education.
                </p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default PressOffice;
