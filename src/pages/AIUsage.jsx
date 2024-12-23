import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Shield, BookOpen, DollarSign, Zap, Target, Cpu, Binary, Network } from 'lucide-react';
import { Card } from '@/components/ui/card';
import AIUsageFAQ from '../components/home/AIUsageFAQ';

const AIUsage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-24"
        >
          {/* Hero Section with Floating Icons */}
          <section className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="grid grid-cols-3 gap-8">
                <Binary className="w-24 h-24" />
                <Cpu className="w-24 h-24" />
                <Network className="w-24 h-24" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-white relative z-10">why we use AI</h1>
            <p className="text-gray-400 text-xl leading-relaxed relative z-10">
              at mors, we embrace artificial intelligence as a powerful tool to amplify our impact in educational reform. our approach combines innovative technology with human oversight to create meaningful change.
            </p>
          </section>

          {/* Rest of the sections */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-white">our principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <Brain className="w-32 h-32" />
                </div>
                <Brain className="w-8 h-8 text-green-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">human oversight</h3>
                <p className="text-gray-400 relative z-10">
                  while we use AI for content generation, every piece of content is reviewed and refined by our team to ensure accuracy and alignment with our mission.
                </p>
              </Card>

              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <Shield className="w-32 h-32" />
                </div>
                <Shield className="w-8 h-8 text-green-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">ethical considerations</h3>
                <p className="text-gray-400 relative z-10">
                  we carefully consider the ethical implications of AI usage and ensure transparency about which content is AI-assisted.
                </p>
              </Card>

              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <BookOpen className="w-32 h-32" />
                </div>
                <BookOpen className="w-8 h-8 text-green-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">continuous learning</h3>
                <p className="text-gray-400 relative z-10">
                  we stay updated with the latest AI developments to ensure we're using these tools responsibly and effectively.
                </p>
              </Card>
            </div>
          </section>

          {/* Keep the existing benefits section but add background icons */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-white">key benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <DollarSign className="w-32 h-32" />
                </div>
                <DollarSign className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">cost-effective</h3>
                <p className="text-gray-400 relative z-10">
                  as a grassroots movement, we operate on minimal resources. AI tools allow us to create professional-quality content at a fraction of traditional costs.
                </p>
              </Card>

              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <Zap className="w-32 h-32" />
                </div>
                <Zap className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">rapid iteration</h3>
                <p className="text-gray-400 relative z-10">
                  AI enables us to quickly generate and refine our materials, helping us respond promptly to the evolving educational landscape.
                </p>
              </Card>

              <Card className="bg-[#111] border-gray-800 p-6 relative overflow-hidden group">
                <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <Target className="w-32 h-32" />
                </div>
                <Target className="w-8 h-8 text-blue-400 mb-4 relative z-10" />
                <h3 className="text-xl font-semibold text-white mb-3">quality results</h3>
                <p className="text-gray-400 relative z-10">
                  modern AI tools produce high-quality visual and written content that effectively communicates our message.
                </p>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <p className="text-gray-400 text-xl italic leading-relaxed">
              by leveraging AI technology, we can focus our limited resources on what matters most: advocating for meaningful educational reform and building our community. we believe that embracing innovation responsibly is key to creating lasting change in education.
            </p>
          </section>

          <AIUsageFAQ />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AIUsage;
