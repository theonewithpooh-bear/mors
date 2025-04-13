
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, Clock, FileText, Newspaper, Calendar, Quote } from 'lucide-react';
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
                className="mb-16 p-8 rounded-xl border border-gray-500/30 bg-white/30 backdrop-blur-sm"
              >
                <div className="max-w-3xl mx-auto">
                  <div className="mb-8 text-center">
                    <Badge className="bg-gray-800 text-white mb-4">April 13, 2025</Badge>
                    <h2 className="text-3xl font-bold text-black mb-3">
                      Statement on the Passing of Brian Smith
                    </h2>
                  </div>
                  
                  <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="mb-4">
                      It is with immense sadness that MORS acknowledges the recent passing of TikTok creator and remarkable individual, Brian Smith.
                    </p>
                    
                    <p className="mb-4">
                      Brian was a voice of reason, humour, and compassion for countless young people navigating the pressures of education. His words resonated deeply with our founder, Monty, and with so many others who felt seen, understood, and encouraged by his calm defiance of a broken system.
                    </p>
                    
                    <p className="mb-4">
                      Just days before his passing, Brian became the first TikToker to share MORS with his community. That small gesture meant everything to us. For his support, his belief, and his voice—we will be forever grateful.
                    </p>
                    
                    <p className="mb-4">
                      MORS will honour Brian permanently in an upcoming initiative, ensuring his contribution is never forgotten.
                    </p>
                    
                    <div className="mt-8 text-center">
                      <div className="inline-block border-t border-gray-300 pt-2 text-sm text-gray-500">
                        ENDS
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center space-x-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Add to Calendar</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Quote className="h-4 w-4" />
                      <span>Share Statement</span>
                    </Button>
                  </div>
                </div>
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
