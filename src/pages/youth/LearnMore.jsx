import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from "@/components/ui/button";
import { AlertTriangle, BookOpen, GraduationCap, LineChart, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const YouthLearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            what we want to change
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            we want to make school more fun and useful for you by changing how you learn!
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-center">what's wrong with school right now?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">teachers say:</h3>
                <p className="text-gray-300">
                  "the way we teach isn't helping students prepare for their future jobs"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">students say:</h3>
                <p className="text-gray-300">
                  "we want to learn things that will actually help us in real life!"
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">how we want to help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "learn by doing",
                description: "more hands-on projects and less boring tests"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "skills that matter",
                description: "learn things you'll actually use in real life"
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "modern learning",
                description: "use computers and technology in fun ways"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "work together",
                description: "learn with your friends and help each other"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardHeader>
                  <div className="mb-2 text-white">{item.icon}</div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/">
            <Button 
              variant="outline" 
              className="text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              switch to grown-up version
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YouthLearnMore;