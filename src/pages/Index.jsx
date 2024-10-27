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
            <Footer />
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-3xl mx-auto mt-32 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              But don't GCSEs teach critical thinking?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for a shift away from the current GCSE system that primarily rewards memorization and standardized answers. We advocate for an education system that emphasizes analyzing real-world problems, developing innovative solutions, and applying knowledge in practical contexts - essential skills currently overlooked in the GCSE format.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              Isn't memory retention an important skill taught by GCSEs?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for an education system that reflects how modern technology has transformed information access and usage. We support prioritizing concept understanding, practical application, and effective information utilization over pure memorization, advocating for the development of skills more relevant to today's world.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              How will students prove their abilities without GCSEs?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for a comprehensive skill certification system, incorporating practical assessments and portfolio development. We believe these methods would better demonstrate students' actual capabilities and readiness for further education or employment than traditional GCSE grades.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              Won't this make education less standardized?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for maintaining high educational standards while enabling personalized learning paths. We support a framework that ensures consistency in skill assessment while providing flexibility in how students demonstrate their competencies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              How will universities evaluate students?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for universities to have access to more meaningful data about students' capabilities. We support the inclusion of practical skills assessments, project portfolios, and demonstrated competencies in specific areas - providing a more complete picture than traditional GCSE grades.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              What about international recognition?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for alignment with modern international educational trends that emphasize practical skills and competency-based assessment. We point to many countries already moving away from traditional examination-based systems as evidence of this approach's viability.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              How will this prepare students for the workplace?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              M.O.R.S advocates for education reform focused on practical skills, real-world problem solving, and project-based learning. We believe these changes would develop the exact competencies that employers seek, including technical skills, teamwork, communication, and adaptability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Index;
