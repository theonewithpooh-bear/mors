import React from 'react';
import Header from '@/components/Header';
import NewsHeader from '@/components/newsroom/NewsHeader';
import NewsCard from '@/components/newsroom/NewsCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';

const Newsroom = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f172a] to-[#0f172a]">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <NewsHeader />
          
          <Alert variant="default" className="bg-purple-950/50 border-purple-500/50">
            <AlertCircle className="h-4 w-4 text-purple-500" />
            <AlertTitle className="text-white">Under Construction</AlertTitle>
            <AlertDescription className="text-gray-300">
              Our newsroom is currently being developed. When complete, it will feature:
            </AlertDescription>
          </Alert>

          <div className="space-y-6 text-gray-300">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Featured Articles</h3>
              <p>Curated stories about educational reform, highlighting key developments and breakthroughs in our mission.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">MORS Updates</h3>
              <p>Latest news about our organization's activities, campaigns, and progress towards educational reform.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">AI in Education</h3>
              <p>Coverage of artificial intelligence developments in education and their implications for learning.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Education News</h3>
              <p>Important updates about educational policies, research findings, and system changes.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Tech & Society</h3>
              <p>Analysis of how technology is reshaping education and society at large.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Newsroom;