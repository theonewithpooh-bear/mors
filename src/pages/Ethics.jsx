import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Eye, Users, Brain, Star, Shield, Heart, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Ethics = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-white/80" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              ethical principles
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-4">
            our commitment to maintaining the highest standards of integrity and transparency in educational reform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: <Scale className="h-8 w-8 mb-2 text-blue-400" />,
              title: "non-partisan commitment",
              content: "mors maintains a strictly non-partisan stance, working independently of any political party affiliations or ideological biases. our focus is solely on evidence-based educational reform that benefits all students."
            },
            {
              icon: <Eye className="h-8 w-8 mb-2 text-purple-400" />,
              title: "complete transparency",
              content: "we believe in absolute transparency in all our operations. our funding sources, partnerships, and decision-making processes are openly documented and accessible to all stakeholders."
            },
            {
              icon: <Users className="h-8 w-8 mb-2 text-green-400" />,
              title: "inclusive dialogue",
              content: "we actively seek and value diverse perspectives from all stakeholders in education - students, teachers, parents, administrators, and policymakers."
            },
            {
              icon: <Brain className="h-8 w-8 mb-2 text-rose-400" />,
              title: "evidence-based approach",
              content: "all our reform proposals are grounded in rigorous research and empirical evidence. we commit to regular evaluation and adjustment of our approaches based on outcomes and feedback."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardHeader>
                  {item.icon}
                  <CardTitle className="text-white text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-center">our ethical framework</h2>
            <Star className="h-6 w-6 text-yellow-400" />
          </div>
          
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <Heart className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
              <p>
                at mors, our ethical framework is built on four key pillars: non-partisan advocacy, transparency, inclusivity, and evidence-based decision-making. these principles guide every aspect of our operations and ensure we maintain the highest standards of integrity in our mission to reform education.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Check className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
              <p>
                we believe that meaningful educational reform can only be achieved through honest, open dialogue and collaboration across political and ideological boundaries. our commitment to these principles ensures that our work remains focused on what truly matters: improving educational outcomes for all students.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Ethics;