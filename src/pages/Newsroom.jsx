import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, Clock } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeaturedArticle from '@/components/newsroom/FeaturedArticle';
import { newsData } from '@/data/newsData';
const Newsroom = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the most recent article for featured spot
  const featuredArticle = sortedNews[0];

  // The rest of the articles
  const regularArticles = sortedNews.slice(1);
  return <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          <NewsHeader />
          
          {/* Coming Soon Message */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-16 p-8 rounded-xl border border-purple-500/30 bg-black/30 backdrop-blur-sm text-center">
            <motion.div initial={{
            scale: 0.9
          }} animate={{
            scale: 1
          }} transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
          }} className="mb-4 inline-flex items-center justify-center">
              <Clock className="h-12 w-12 text-purple-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-3">
              Articles Coming Soon
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're preparing insightful articles about educational reform, AI in education, and the latest MORS updates. Check back soon for fresh content that will help shape the future of education.
            </p>
            <div className="mt-6">
              
            </div>
          </motion.div>
        </div>
      </main>
    </div>;
};
export default Newsroom;