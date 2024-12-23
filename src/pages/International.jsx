import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollArea } from "@/components/ui/scroll-area";
import DirectorInfo from '../components/international/DirectorInfo';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const International = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <Globe2 className="w-16 h-16 mx-auto text-blue-500 mb-8" />
            <h1 className="text-5xl font-serif">MORS International</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join our global movement to revolutionize education, one country at a time.
            </p>
          </section>

          {/* Current Status */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Current Status</h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, we have no money</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, we are a one man band</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">✓</span>
                  <span>Yes, Not many know about us</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">×</span>
                  <span>No, we haven't made any changes yet</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">But Here's the Thing...</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We don't care. MORS is fighting for educational changes across the globe, not just here in the UK.
              </p>
            </div>
          </section>

          {/* Director Information */}
          <DirectorInfo />

          {/* Global Education Issues */}
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold">Global Education Challenges</h2>
              
              {/* Developed Nations */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">Developed Nations with Education Issues</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">United States</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Heavy reliance on standardized testing (e.g., SAT, ACT)</li>
                      <li>Significant inequality in education quality between wealthy and underprivileged areas</li>
                      <li>Overcrowded classrooms and underpaid teachers in many districts</li>
                      <li>High college tuition costs leading to crippling student debt</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Australia</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Growing reliance on testing systems like NAPLAN</li>
                      <li>Rural and Indigenous communities face stark disparities in access to quality education</li>
                      <li>Increasing privatization leading to a widening gap between public and private schools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">India</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Intense focus on rote learning and exam scores</li>
                      <li>Overemphasis on STEM fields, neglecting arts and holistic development</li>
                      <li>Vast disparities between urban and rural schools, with underfunded rural schools</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">South Korea & Japan</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Hypercompetitive exam culture</li>
                      <li>Excessive pressure on students leading to mental health crises</li>
                      <li>Lack of focus on creativity and individuality</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">France</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>High-stakes testing like the Baccalauréat</li>
                      <li>Teachers often underpaid and overburdened</li>
                      <li>Growing disparity between urban and suburban/rural areas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Developing Nations */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">Developing Nations with Systemic Problems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">Nigeria</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Widespread lack of infrastructure, with many schools lacking basic facilities</li>
                      <li>Teacher shortages and unqualified educators</li>
                      <li>Gender disparity, especially in rural areas</li>
                      <li>Inadequate funding and corruption in education budgets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Pakistan</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Overemphasis on rote learning and exam-based evaluation</li>
                      <li>High dropout rates, particularly among girls</li>
                      <li>Parallel education systems (elite private vs. struggling public schools)</li>
                      <li>Poor teacher training and resources</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Somalia</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Extreme lack of infrastructure and teaching staff</li>
                      <li>Persistent conflict disrupting education systems</li>
                      <li>Reliance on outdated curricula with no real-world application</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Haiti</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Poor access to education due to widespread poverty</li>
                      <li>Schools are underfunded, overcrowded, and lacking in materials</li>
                      <li>Teachers often underpaid and undertrained</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Afghanistan</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Political instability and gender restrictions harm education access</li>
                      <li>Limited infrastructure, particularly in rural areas</li>
                      <li>Reliance on outdated, exam-heavy curricula</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">South Sudan</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Lowest literacy rates globally due to persistent conflict</li>
                      <li>Lack of qualified teachers and resources</li>
                      <li>Schools often inaccessible due to remote locations and conflict zones</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Unique Problems */}
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-400">Countries with Unique Problems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white">Brazil</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Public schools are underfunded compared to private institutions</li>
                      <li>High dropout rates due to economic hardship</li>
                      <li>Exam-heavy systems discourage creative learning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Indonesia</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Poor teacher training and high absenteeism among educators</li>
                      <li>Overcrowded schools with inadequate resources</li>
                      <li>Overemphasis on national exams like Ujian Nasional</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Yemen</h4>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Education has been devastated by war and political instability</li>
                      <li>Many schools destroyed or used for military purposes</li>
                      <li>Millions of children out of school, with girls disproportionately affected</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default International;
