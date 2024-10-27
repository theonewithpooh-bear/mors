import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (hasVisited) {
      setShouldAnimate(false);
    } else {
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        className="relative"
      >
        <motion.div
          initial={shouldAnimate ? { scale: 4, y: "40vh" } : false}
          animate={shouldAnimate ? { scale: 1, y: 0 } : false}
          transition={{ 
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
          className="relative"
        >
          <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
            <Header />
          </div>
          
          <div className="container mx-auto px-4 py-32 relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-white/5 to-gray-900/10 blur-3xl opacity-0 animate-[fade-in_1s_ease-in-out_3s_forwards]" />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="relative">
                  <motion.div
                    initial={shouldAnimate ? { opacity: 1, scale: 2 } : false}
                    animate={shouldAnimate ? { 
                      opacity: 1, 
                      scale: [2, 1, 0.5],
                      fontSize: ["4rem", "4rem", "1rem"]
                    } : false}
                    transition={{ 
                      duration: 3.5,
                      times: [0, 0.7, 1],
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.5 
                    }}
                    className="mb-6"
                  >
                    <span className="text-4xl tracking-[0.3em] text-white uppercase font-light">
                      introducing
                    </span>
                  </motion.div>
                  
                  <motion.div
                    initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                  >
                    <h1 className="text-7xl sm:text-8xl font-bold mb-2 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white/70 via-white to-white/70">
                      movement of real skills
                    </h1>
                    <p className="text-lg text-white/50 mb-8">M.O.R.S.</p>
                    <div className="w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />
                    <p className={`text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light ${shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_3.5s_forwards]" : ""}`}>
                      our mission is to revolutionize the educational landscape by introducing practical, skills-based learning that prepares students for the real world.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
            <div className="max-w-3xl mx-auto mt-32 px-4">
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
          </div>

          <div className={shouldAnimate ? "opacity-0 animate-[fade-in_0.5s_ease-in-out_4s_forwards]" : ""}>
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
