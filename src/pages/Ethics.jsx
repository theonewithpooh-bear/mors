import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Eye, Users, Brain, BookOpen, Shield, Target, Lightbulb } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
            at mors, we believe that meaningful educational reform must be built on a foundation of strong ethical principles. our commitment to these principles guides every aspect of our work and ensures that we maintain the highest standards of integrity in our mission to transform education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Scale className="h-8 w-8 mb-2 text-blue-400" />
                <CardTitle className="text-white text-2xl">non-partisan commitment</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>we maintain strict political neutrality, focusing solely on evidence-based educational reform. while we engage with organizations across the political spectrum, our commitment remains steadfast to educational improvement rather than political alignment. this independence allows us to advocate effectively for changes that benefit all students, regardless of political context.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Eye className="h-8 w-8 mb-2 text-purple-400" />
                <CardTitle className="text-white text-2xl">complete transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-6">
                <p>
                  we believe in absolute transparency in all our operations. all our communications, including those with educational authorities and political entities, are made public through our open letters system.
                </p>
                <p>
                  our funding sources, partnerships, and decision-making processes are openly documented and accessible to all stakeholders.
                </p>
                <p>
                  however, mors reserves the right to its privacy in particular operations, and privacy of our donors, members, and staff. not all communications can be made public for <span className="italic">obvious</span> reasons.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="privacy-levels" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-white/90">
                      examples of communication privacy levels
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">strictly private communications:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          <li>personal information of members and supporters</li>
                          <li>internal strategic planning documents</li>
                          <li>confidential correspondence with educational institutions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">temporarily private communications:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          <li>draft proposals under review</li>
                          <li>ongoing negotiations with stakeholders</li>
                          <li>research findings pending verification</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">immediately public communications:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          <li>open letters to government bodies</li>
                          <li>published reform proposals</li>
                          <li>public statements and position papers</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-green-400" />
                <CardTitle className="text-white text-2xl">inclusive dialogue</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>we actively seek diverse perspectives from all education stakeholders. our reform proposals are developed through extensive consultation with students, teachers, parents, administrators, and policymakers. this collaborative approach ensures that our initiatives address real needs and concerns across the educational landscape.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Brain className="h-8 w-8 mb-2 text-rose-400" />
                <CardTitle className="text-white text-2xl">evidence-based approach</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>all our reform proposals are grounded in rigorous research and empirical evidence. we maintain partnerships with educational researchers and institutions to ensure our proposals reflect current academic understanding. our commitment to continuous evaluation helps us refine and improve our approaches.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2 text-amber-400" />
                <CardTitle className="text-white text-2xl">educational integrity</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>we advocate for assessment methods that genuinely reflect student capabilities and learning outcomes. our proposals emphasize authentic evaluation over standardized testing, promoting a more holistic and meaningful approach to measuring educational achievement.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Target className="h-8 w-8 mb-2 text-cyan-400" />
                <CardTitle className="text-white text-2xl">long-term vision</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>our ethical framework emphasizes sustainable, long-term improvements over quick fixes. we believe in developing solutions that will stand the test of time and create lasting positive change in the educational system.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-indigo-400" />
                <CardTitle className="text-white text-2xl">student advocacy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>at the heart of our ethical framework is an unwavering commitment to student welfare. we prioritize reforms that enhance learning experiences while supporting mental health and well-being, ensuring that educational advancement never comes at the cost of student welfare.</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <CardHeader>
                <Lightbulb className="h-8 w-8 mb-2 text-yellow-400" />
                <CardTitle className="text-white text-2xl">innovation with responsibility</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>while we champion innovative approaches to education, we do so with careful consideration of potential impacts. our ethical framework ensures that new methodologies are thoroughly evaluated for their effects on all stakeholders before implementation.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6">our commitment to ethical reform</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              the movement of real skills (mors) recognizes that transforming education requires more than just technical solutions—it demands an unwavering commitment to ethical principles. our approach combines innovative thinking with responsible implementation, ensuring that every reform we propose serves the best interests of students and the broader educational community.
            </p>
            <p>
              we believe that meaningful educational reform can only be achieved through honest, open dialogue and collaboration across all boundaries. by maintaining high ethical standards in every aspect of our work, we build trust with stakeholders and create the foundation for lasting positive change in education.
            </p>
            <p>
              as we continue to advocate for educational reform, these ethical principles will remain at the core of our mission, guiding our decisions and actions toward creating a more effective, equitable, and engaging educational system for all.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Ethics;
