
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import ArticleDetail from '@/components/newsroom/ArticleDetail';
import FeaturedArticle from '@/components/newsroom/FeaturedArticle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, FileText, Newspaper, Quote, ArrowRight, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { newsData } from '@/data/newsData';
import { useToast } from "@/components/ui/use-toast";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  shareViaWebAPI, 
  copyToClipboard, 
  openMailShare, 
  openMessageShare, 
  shareTo 
} from "@/utils/shareUtils";

const PressOffice = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFullStatement, setShowFullStatement] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { toast } = useToast();

  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the most recent article for featured spot
  const featuredArticle = sortedNews[0];

  // The rest of the articles
  const regularArticles = sortedNews.slice(1);
  
  // Custom share data for the Brian Smith statement
  const shareStatement = async () => {
    const statementShareData = {
      title: 'MORS: Statement on the Passing of Brian Smith',
      text: 'MORS acknowledges the recent passing of TikTok creator and remarkable individual, Brian Smith.',
      url: window.location.href
    };
    
    if (navigator.share && navigator.canShare(statementShareData)) {
      try {
        await navigator.share(statementShareData);
        toast({
          title: "Shared successfully",
          description: "Thank you for sharing this statement.",
          duration: 3000,
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          showShareOptions();
        }
      }
    } else {
      showShareOptions();
    }
  };
  
  const showShareOptions = () => {
    // This is handled by the dropdown opening
  };
  
  const copyStatementToClipboard = () => {
    const statement = `Statement on the Passing of Brian Smith

It is with immense sadness that MORS acknowledges the recent passing of TikTok creator and remarkable individual, Brian Smith.

Brian was a voice of reason, humour, and compassion for countless young people navigating the pressures of education. His words resonated deeply with our founder, Monty, and with so many others who felt seen, understood, and encouraged by his calm defiance of a broken system.

Just days before his passing, Brian became the first TikToker to share MORS with his community. That small gesture meant everything to us. For his support, his belief, and his voice—we will be forever grateful.

MORS will honour Brian permanently in an upcoming initiative, ensuring his contribution is never forgotten.`;

    navigator.clipboard.writeText(statement).then(() => {
      toast({
        title: "Statement copied!",
        description: "The statement has been copied to your clipboard.",
        duration: 2000,
      });
    }).catch(() => {
      toast({
        title: "Failed to copy statement",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 2000,
      });
    });
  };
  
  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };
  
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
              {!showFullStatement ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="mb-8 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setShowFullStatement(true)}>
                    <CardHeader className="pb-2">
                      <Badge className="bg-gray-800 text-white mb-2 w-fit">April 13, 2025</Badge>
                      <CardTitle className="text-2xl font-bold flex items-center justify-between group">
                        Statement on the Passing of Brian Smith
                        <ChevronRight className="h-6 w-6 text-gray-500 group-hover:translate-x-1 transition-transform" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-2">
                        It is with immense sadness that MORS acknowledges the recent passing of TikTok creator and remarkable individual, Brian Smith.
                      </p>
                      <Button 
                        variant="ghost" 
                        className="mt-4 text-gray-700 p-0 hover:bg-transparent hover:text-black"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowFullStatement(true);
                        }}
                      >
                        Read full statement <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-16 p-8 rounded-xl border border-gray-500/30 bg-white/30 backdrop-blur-sm"
                >
                  <div className="max-w-3xl mx-auto">
                    <Button 
                      variant="ghost" 
                      className="mb-4 text-gray-600 hover:text-black"
                      onClick={() => setShowFullStatement(false)}
                    >
                      &larr; Back to press releases
                    </Button>
                    
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
                    
                    <div className="mt-8 flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="flex items-center gap-2">
                            <Quote className="h-4 w-4" />
                            <span>Share Statement</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-56 bg-white text-black">
                          <DropdownMenuItem onClick={copyStatementToClipboard} className="cursor-pointer hover:bg-gray-100">
                            Copy statement
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={shareTo.x} className="cursor-pointer hover:bg-gray-100">
                            Share to X
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={shareTo.linkedin} className="cursor-pointer hover:bg-gray-100">
                            Share to LinkedIn
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={shareTo.facebook} className="cursor-pointer hover:bg-gray-100">
                            Share to Facebook
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={openMailShare} className="cursor-pointer hover:bg-gray-100">
                            Share via Email
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </motion.div>
              )}
            </TabsContent>
            
            <TabsContent value="articles" className="focus-visible:outline-none focus-visible:ring-0">
              {selectedArticle ? (
                <ArticleDetail 
                  article={selectedArticle} 
                  onBack={() => setSelectedArticle(null)}
                />
              ) : (
                <div>
                  <FeaturedArticle 
                    article={featuredArticle} 
                    onClick={() => handleSelectArticle(featuredArticle)}
                  />
                  
                  <div className="mt-12 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h2 className="text-2xl font-bold text-black mb-4 sm:mb-0">Latest Articles</h2>
                    
                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                      <div className="relative flex-grow sm:flex-grow-0">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                          type="text"
                          placeholder="Search articles..."
                          className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 w-full"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {regularArticles.map((article, index) => (
                      <div 
                        key={article.id} 
                        onClick={() => handleSelectArticle(article)}
                        className="cursor-pointer"
                      >
                        <NewsCard {...article} index={index} />
                      </div>
                    ))}
                  </div>
                  
                  <Pagination className="mt-8">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default PressOffice;
