import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { 
  BookOpen, 
  GraduationCap, 
  LineChart, 
  Users,
  ArrowRight
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              transforming education
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
            </p>
          </div>

          {/* New Statistics Showcase */}
          <div className="mb-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-8 text-center">the current state of education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-5xl font-bold text-white mb-4">58%</h3>
                <p className="text-gray-300">of UK teachers believe the current education system does not adequately prepare students for the future</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-5xl font-bold text-white mb-4">49%</h3>
                <p className="text-gray-300">of teachers found GCSEs to be outdated according to OCR survey</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <h3 className="text-5xl font-bold text-white mb-4">80%</h3>
                <p className="text-gray-300">of teachers advocate for more content on digital skills and AI in the curriculum</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <LineChart className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-300">Teachers feel restricted by outdated resources and a curriculum that doesn't focus enough on digital and practical skills</p>
              </motion.div>
            </div>
          </div>

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
            <a href="https://forms.gle/uV182TrQxVq8GwTc6" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="group text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                join our movement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;