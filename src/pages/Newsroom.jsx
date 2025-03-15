
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NewsletterSignup from '@/components/newsroom/NewsletterSignup';
import FeaturedArticle from '@/components/newsroom/FeaturedArticle';
import { newsData } from '@/data/newsData';

const Newsroom = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Get the most recent article for featured spot
  const featuredArticle = sortedNews[0];
  
  // The rest of the articles
  const regularArticles = sortedNews.slice(1);

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-24 relative">
        <div className="max-w-6xl mx-auto">
          <NewsHeader />
          
          {/* Featured Article */}
          <section className="mb-16">
            <FeaturedArticle article={featuredArticle} />
          </section>
          
          {/* Search and filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-black/30 border border-white/10 rounded-full py-2 pl-10 pr-4 text-white w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-black/30 border-white/10 text-white hover:bg-purple-950/50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
          
          {/* News Categories Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-black/30 border border-white/10 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-900/40 text-white data-[state=active]:text-white rounded-md">All</TabsTrigger>
              <TabsTrigger value="educational-reform" className="data-[state=active]:bg-purple-900/40 text-white data-[state=active]:text-white rounded-md">Educational Reform</TabsTrigger>
              <TabsTrigger value="ai-education" className="data-[state=active]:bg-purple-900/40 text-white data-[state=active]:text-white rounded-md">AI in Education</TabsTrigger>
              <TabsTrigger value="mors-updates" className="data-[state=active]:bg-purple-900/40 text-white data-[state=active]:text-white rounded-md">MORS Updates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article, index) => (
                  <NewsCard
                    key={article.id}
                    {...article}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="educational-reform" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles
                  .filter(article => article.category === 'Educational Reform')
                  .map((article, index) => (
                    <NewsCard
                      key={article.id}
                      {...article}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ai-education" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles
                  .filter(article => article.category === 'AI in Education')
                  .map((article, index) => (
                    <NewsCard
                      key={article.id}
                      {...article}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mors-updates" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles
                  .filter(article => article.category === 'MORS Updates')
                  .map((article, index) => (
                    <NewsCard
                      key={article.id}
                      {...article}
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Pagination */}
          <Pagination className="my-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="bg-black/30 border-white/10 text-gray-300 hover:text-white hover:bg-purple-950/50" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-purple-900/40 text-white border-white/10">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="bg-black/30 border-white/10 text-gray-300 hover:text-white hover:bg-purple-950/50">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="bg-black/30 border-white/10 text-gray-300 hover:text-white hover:bg-purple-950/50">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="bg-black/30 border-white/10 text-gray-300 hover:text-white hover:bg-purple-950/50" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          
          {/* Newsletter signup */}
          <NewsletterSignup />
        </div>
      </main>
    </div>
  );
};

export default Newsroom;
