import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import { Clock, Share2, Bookmark } from 'lucide-react';

const NewsCard = ({ title, description, source, date, readTime, image }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    {image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
        <span>{source}</span> • <span>{date}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> {readTime} min read
        </span>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
    <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
      <div className="flex gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Bookmark className="w-4 h-4" />
        </button>
      </div>
    </CardFooter>
  </Card>
);

const Newsroom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1a1f2d] to-[#0f172a]">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8">Newsroom</h1>
        
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="mors">MORS Updates</TabsTrigger>
            <TabsTrigger value="ai">AI News</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="tech">Tech & Society</TabsTrigger>
          </TabsList>

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
                />
              </div>
              <div className="space-y-6">
                <NewsCard 
                  title="Latest Developments in Educational Reform"
                  description="Key updates on policy changes and their impact on modern education systems."
                  source="Education Weekly"
                  date="Mar 14, 2024"
                  readTime={5}
                />
                <NewsCard 
                  title="AI Ethics in Educational Technology"
                  description="Understanding the ethical implications of AI implementation in educational tools."
                  source="Tech Insights"
                  date="Mar 13, 2024"
                  readTime={6}
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
        </Tabs>
      </main>
    </div>
  );
};

export default Newsroom;