import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FounderSpeech from '../components/learn-more/FounderSpeech';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            transforming education
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
          </p>
        </div>

        {/* Shocking Statistics Section */}
        <div className="mb-16">
          <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h2 className="text-2xl font-bold text-center">shocking state of UK education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">58%</h3>
                <p className="text-gray-300">
                  <span className="font-bold">58,000 UK teachers</span> warn: our education system is failing to prepare students for their future
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">49%</h3>
                <p className="text-gray-300">
                  <span className="font-bold">49,000 teachers</span> declare GCSEs obsolete and unfit for purpose
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">80%</h3>
                <p className="text-gray-300">
                  <span className="font-bold">80,000 educators</span> demand urgent digital skills & AI curriculum reform
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">Digital Skills Crisis</h3>
                </div>
                <p className="text-gray-300">
                  Teachers trapped by outdated resources & curriculum - digital skills crisis looming
                </p>
              </motion.div>
            </div>
          </div>

          {/* Future of Work Statistics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">the future of work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "70%", text: "of employers value skills over degrees" },
                { number: "85%", text: "of jobs in 2030 don't exist yet" },
                { number: "92%", text: "of students want practical education" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-gray-400">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Opinion Piece */}
        <FounderSpeech />

        {/* Key Principles */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">key principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "experiential learning",
                description: "hands-on experience through real-world projects"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "skill certification",
                description: "recognized credentials for practical abilities"
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "industry alignment",
                description: "curriculum designed with industry partners"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "collaborative growth",
                description: "peer learning and mentorship programs"
              }
            ].map((principle, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="mb-2 text-white">{principle.icon}</div>
                  <CardTitle className="text-white">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Separator className="my-8 bg-white/10" />
          <h2 className="text-2xl font-bold mb-4">ready to make a difference?</h2>
          <Link to="/get-involved">
            <Button 
              variant="outline" 
              className="group text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              join our movement
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LearnMore;
