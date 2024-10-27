import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, LineChart, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-32">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                But don't GCSEs teach critical thinking?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                While GCSEs claim to develop critical thinking, they often focus more on memorization and standardized answers. True critical thinking involves analyzing real-world problems, developing innovative solutions, and applying knowledge in practical contexts - skills that are often overlooked in the current GCSE format.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                Isn't memory retention an important skill taught by GCSEs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                While memory retention is valuable, modern technology has transformed how we access and use information. The focus should be on understanding concepts, practical application, and knowing how to find and utilize information effectively rather than pure memorization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                How will students prove their abilities without GCSEs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our proposed system includes comprehensive skill certification, practical assessments, and portfolio development that better demonstrate a student's actual capabilities and readiness for further education or employment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                Won't this make education less standardized?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our approach maintains high standards while allowing for more personalized learning paths. We propose a framework that ensures consistency in skill assessment while providing flexibility in how students demonstrate their competencies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                How will universities evaluate students?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Universities will have access to more meaningful data about students' capabilities, including practical skills assessments, project portfolios, and demonstrated competencies in specific areas - providing a more complete picture than traditional GCSE grades.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                What about international recognition?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our proposed system aligns with modern international educational trends that emphasize practical skills and competency-based assessment. Many countries are already moving away from traditional examination-based systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-white/10">
              <AccordionTrigger className="text-white hover:text-white/90">
                How will this prepare students for the workplace?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                By focusing on practical skills, real-world problem solving, and project-based learning, students will develop the exact competencies that employers seek. This includes technical skills, teamwork, communication, and adaptability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
