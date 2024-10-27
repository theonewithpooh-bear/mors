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

          <div className="max-w-3xl mx-auto px-4 mb-32">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              what exactly is m.o.r.s?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              m.o.r.s (movement of real skills) is a grassroots educational reform initiative advocating for a shift from traditional examination-based assessment to practical, skills-focused learning. we believe in preparing students for real-world challenges through hands-on experience and continuous assessment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              how does m.o.r.s plan to implement these changes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              we work through democratic channels, engaging with educational authorities, policymakers, and stakeholders. our approach involves presenting detailed reform proposals, building public support, and collaborating with educational institutions to pilot new assessment methods.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              what makes m.o.r.s different from other reform movements?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              our focus is specifically on transforming assessment methods to reflect real-world skills and practical abilities. we maintain political neutrality while advocating for evidence-based reforms that prepare students for both higher education and employment.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              how can i get involved with m.o.r.s?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              there are multiple ways to support our movement: join our community, participate in local advocacy groups, share our message on social media, or contribute to our research and proposal development. visit our "get involved" page to learn more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-white/10">
            <AccordionTrigger className="text-white hover:text-white/90">
              what is the timeline for these proposed changes?
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              educational reform is a gradual process. we're currently in the advocacy and awareness phase, building support and refining our proposals. our goal is to see pilot programs implemented within the next few years, with broader systemic changes following successful trials.
            </AccordionContent>
          </AccordionItem>
            </Accordion>
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
