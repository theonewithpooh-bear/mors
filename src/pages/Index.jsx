import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Clock, Share2, Bookmark, TrendingUp } from 'lucide-react';
import '@fontsource/cormorant';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in mb-24">
          <p className="text-gray-400 tracking-[0.2em] uppercase text-sm">introducing</p>
          <h1 className="text-6xl md:text-7xl font-normal text-white mb-4 tracking-normal leading-none font-['Cormorant']">
            movement of real skills
          </h1>
          <p className="text-base text-gray-400 tracking-wider mb-4">M.O.R.S.</p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            revolutionizing education through practical, skills-based learning that prepares students for the real world
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Link to="/learn-more">
              <Button 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                learn more →
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button 
                className="bg-white text-black hover:bg-gray-100 text-sm px-5 py-3 h-auto rounded-full transition-all"
              >
                get involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Newsroom Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-['Cormorant'] text-white mb-4">Newsroom</h2>
            <p className="text-gray-400">Stay informed about education reform and AI developments</p>
          </div>

          {/* Featured News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="md:col-span-2 bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer group">
              <CardHeader>
                <CardTitle className="text-2xl">The Future of Education: AI Integration in Classrooms</CardTitle>
                <CardDescription className="text-gray-400">
                  How artificial intelligence is reshaping traditional learning environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> 5 min read
                  </span>
                  <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">AI & Education</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle>Latest MORS Initiative Announcement</CardTitle>
                  <CardDescription className="text-gray-400">
                    New partnerships and upcoming events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" /> 3 min read
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle>AI Breakthroughs This Week</CardTitle>
                  <CardDescription className="text-gray-400">
                    Major developments in AI technology
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" /> 4 min read
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* News Categories */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start bg-white/5 border-white/10">
              <TabsTrigger value="all" className="text-white">All News</TabsTrigger>
              <TabsTrigger value="mors" className="text-white">MORS Updates</TabsTrigger>
              <TabsTrigger value="ai" className="text-white">AI News</TabsTrigger>
              <TabsTrigger value="education" className="text-white">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">News Article {item}</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardDescription className="text-gray-400">
                        Brief description of the news article...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> 3 min read
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" /> Trending
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mors" className="mt-6">
              <div className="text-white text-center py-12">
                MORS specific updates will appear here
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-6">
              <div className="text-white text-center py-12">
                AI news and developments will appear here
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="text-white text-center py-12">
                Education reform news will appear here
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Poster Image */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <img 
            src="/lovable-uploads/4722914f-5717-4fa6-a9f2-ade90e377a30.png" 
            alt="MORS Poster" 
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;