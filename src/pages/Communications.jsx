import React from 'react';
import { Button } from "@/components/ui/button";
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "@fontsource/special-elite";

const Communications = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-2 pt-16"
        >
          <div className="relative flex justify-center w-full">
            <h1
              style={{ 
                fontFamily: "Special Elite",
                fontSize: "4rem",
                letterSpacing: "0.1em",
                width: "fit-content",
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: ".15em solid white",
                animation: "typing 2s steps(14, end), blink .75s step-end infinite"
              }}
            >
              communications
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <p className="text-xl leading-relaxed text-gray-100">
              mors sends open letters at least once a week to various stakeholders in education - from the department of education to influential organisations, political parties and MPs. open letters, being public and transparent communications, allow us to openly advocate for change while fostering public dialogue about educational reform. through these letters, we articulate our vision for skills-based education and invite others to join the conversation.
            </p>
            <a 
              href="#open-letters" 
              className="inline-block mt-6 text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              learn more about open letters
            </a>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
            alt="Department of Education Logo"
            className="w-120 h-auto object-contain mb-0.5 invert"
          />
          <h2 className="text-2xl font-semibold">Department for Education</h2>
        </div>
        
        <div className="flex flex-col items-center space-y-4 mt-8">
          <Button
            variant="outline"
            className="group relative px-8 py-6 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 hover:scale-105"
            disabled
          >
            view this week's open letter
            <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-yellow-300 animate-bounce">
              <Construction className="h-5 w-5" />
              <span className="text-sm">coming soon!</span>
            </span>
          </Button>
        </div>

        <motion.div 
          id="open-letters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-32 mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">understanding open letters</h2>
            
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg mb-6">
                imagine you're at a town hall meeting, but instead of speaking to just the people in the room, your voice carries to everyone in the city. that's what an open letter does - it transforms a private conversation into a public dialogue that anyone can join.
              </p>
              
              <p className="text-lg mb-6">
                when mors writes an open letter, it's like placing our vision for education on a digital town square. just as martin luther king jr.'s "letter from birmingham jail" became a powerful catalyst for civil rights, our open letters aim to spark a movement for educational reform that everyone can see, share, and support.
              </p>
              
              <p className="text-lg">
                these letters serve as both a mirror and a window - reflecting the current state of education while offering a clear view into what it could become. they're not just words on a page; they're invitations for everyone - from policymakers to parents - to join a transparent conversation about transforming education.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>why does mors choose open letters?</AccordionTrigger>
                <AccordionContent>
                  open letters align perfectly with our commitment to transparency and collective action. they allow us to share our ideas and concerns publicly, creating opportunities for broader community engagement and support. when we address decision-makers through open letters, we're not just speaking to them - we're speaking with the entire educational community.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>how do open letters create change?</AccordionTrigger>
                <AccordionContent>
                  open letters work like ripples in a pond - they start with a single point but spread outward, touching everyone in their path. by making our communication public, we create accountability, gather support, and demonstrate the collective desire for change. when others see these letters, they often realize they're not alone in wanting better education, and this shared awareness becomes a powerful force for reform.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>who can engage with mors' open letters?</AccordionTrigger>
                <AccordionContent>
                  everyone! our open letters are designed to be accessible to all stakeholders in education - from students and teachers to parents and policymakers. you can read them, share them, discuss them, and use them as starting points for your own advocacy. they're tools for community building and collective action.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>what impact have our open letters had?</AccordionTrigger>
                <AccordionContent>
                  while we're just beginning our journey, our open letters have already started important conversations about skills-based education. they've helped connect like-minded educators, parents, and students who share our vision. each letter builds upon the last, creating a documented history of our movement and the changes we seek to achieve.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Communications;