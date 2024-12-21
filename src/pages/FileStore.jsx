import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const FileStore = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-7xl font-serif mb-2">mors</h1>
            <p className="text-3xl font-serif">a future for education</p>
            <p className="text-xl text-gray-400">manifesto</p>
          </motion.div>

          <ScrollArea className="h-[60vh] w-full rounded-md">
            <div className="w-full space-y-24 pb-24">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <Card className="bg-black border-white/10">
                    <CardContent className="p-8">
                      <h2 className="text-4xl font-serif mb-8">{section.title}</h2>
                      <div className="space-y-12">
                        {section.content.map((content, idx) => (
                          <div key={idx} className="space-y-4">
                            {content.subtitle && (
                              <h3 className="text-2xl font-serif mb-4">{content.subtitle}</h3>
                            )}
                            {content.paragraphs && content.paragraphs.map((paragraph, pIdx) => (
                              <p key={pIdx} className="text-lg text-gray-300 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                            {content.source && (
                              <p className="text-sm text-gray-500 italic mt-2">
                                Source: {content.source}
                              </p>
                            )}
                            {content.list && (
                              <ul className="list-disc pl-6 space-y-2">
                                {content.list.map((item, lIdx) => (
                                  <li key={lIdx} className="text-lg text-gray-300">{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-black border-white/10">
                  <CardContent className="p-8 text-center">
                    <blockquote className="text-xl italic text-gray-300 mb-4">
                      "Victory at all costs, victory in spite of all terror, victory however long and hard the road may be; for without victory, there is no survival"
                    </blockquote>
                    <p className="text-gray-400">— Winston Churchill</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Signature Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-black border-white/10">
                  <CardContent className="p-8 text-center">
                    <p className="text-xl mb-8">Signed,</p>
                    <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
                    <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </ScrollArea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const sections = [
  {
    title: "Section One: Introduction & Vision",
    content: [
      {
        subtitle: "What is MORS?",
        paragraphs: [
          "M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul the current outdated exam and education system in the UK, by advocating for change.",
          "MORS hopes to achieve this by acting as a central hub for all major supporters of educational reform to speak from.",
          "We are stronger as one."
        ]
      },
      {
        subtitle: "Vision Statement",
        paragraphs: [
          "MORS is advocating for a future where British students are prepared for the real world by being taught in a way that will equip them for working life.",
          "Studies have shown that the majority of information you gain during GCSEs is lost within a year.",
          "At MORS, we don't believe this is right. We believe that students deserve better, the right to a better education—one that is actually worthwhile."
        ],
        source: "Herman Ebbinghaus' \"forgetting curve\""
      },
      {
        subtitle: "Why Overhaul the System?",
        paragraphs: [
          "Exams, specifically GCSEs, do not measure your skills and only provide you with a qualification, something that only 30% of employers value. The majority (70%) of employers much prefer staff with real skills.",
          "The education system needs to evolve in order to prevent getting even more stuck in the past than it already is.",
          "System overhaul is the only way to fix this gimmick, which has become, we feel, too mature to be reformed."
        ],
        source: "PwC UK"
      }
    ]
  },
  {
    title: "Section Two: The Problem with GCSEs",
    content: [
      {
        subtitle: "Outdated Exam-Based Learning",
        paragraphs: [
          "GCSEs and A-levels, as well as other types of further education, demand for you to understand and memorise an overwhelming amount of information, all for you to forget it all just a year after leaving that exam hall.",
          "MORS sees this as an extreme flaw. If up to us, students would be given exams in a controlled classroom environment, where you are able to communicate with classmates and use your resources to complete the paper."
        ]
      },
      {
        subtitle: "Narrow Skill Assessment",
        paragraphs: [
          "The current GCSE system has been developed to rigorously test your memorisation and exam technique ability.",
          "At MORS, we don't dispute that memory retention is obsolete. We do, however, believe that memorisation is far too excessive, and deprives the individual of the ability to truly grasp each concept.",
          "MORS believes that we need to prepare students early on, with skills such as creative problem-solving, teamwork, and practical knowledge."
        ]
      },
      {
        subtitle: "Mental Health Impact",
        paragraphs: [
          "Not only are GCSEs lacking in their ability to prepare students for the real world, but they are actively damaging over 50% of participants.",
          "A survey conducted by the Association of School and College Leaders (ASCL) in June 2024 revealed that over 77% of secondary school teachers observed exam-related anxiety symptoms. Additionally, 58% of teachers reported that they have had concerns from parents about exam-related stress, showing that this anxiety follows them home, becoming a noticeable burden.",
          "As well as this, 74% of teachers had to implement 'alternative arrangements' to support affected students."
        ],
        source: "The Times Huge: number of GCSE pupils suffering from 'exam anxiety'"
      }
    ]
  },
  // ... Additional sections would continue with the same structure
  {
    title: "Section Ten: Call to Action",
    content: [
      {
        subtitle: "Join MORS' Movement",
        paragraphs: [
          "We can't do this alone. We need the support of the British people, and those in charge to make this change happen.",
          "MORS is actively working to raise awareness against the issue.",
          "If you want to help, please visit mors.org.uk to register your interest. If you would like to donate towards our cause, it would be very much appreciated! But what MORS need more than money, is support.",
          "If you would like to get involved, please say so when you are registering your interest, and we will endeavour to get back to you."
        ]
      },
      {
        subtitle: "How You Can Help",
        paragraphs: ["You are the ones that will make this change happen.", "We need you all to chip in to make MORS' mission a reality."],
        list: [
          "Contacting your local MP",
          "Telling your friends and family",
          "Informing your teachers (or students)",
          "Asking your parents to contact us to volunteer",
          "Contacting MORS to offer your support."
        ]
      },
      {
        subtitle: "Our Promise",
        paragraphs: [
          "MORS is committed to delivering this change. We promise to do our utmost to do our part in ensuring the education system gets the TLC is so desperately needs.",
          "This, I promise to you."
        ]
      }
    ]
  }
];

export default FileStore;