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
                open letters are formal public communications addressed to specific individuals or organizations but made accessible to the general public. they serve as a transparent medium for addressing important matters while ensuring the wider community remains informed and engaged in the discourse.
              </p>
              
              <p className="text-lg mb-6">
                these communications are instrumental in fostering public dialogue and creating meaningful change in educational policy. by making our correspondence public, we establish a documented record of our reform proposals and enable broader participation in the educational reform discussion.
              </p>
              
              <p className="text-lg">
                open letters function as both documentation of our reform initiatives and catalysts for systemic change. they provide a formal platform for presenting well-researched proposals while maintaining transparency in our communication with key decision-makers in the educational sector.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>what is the purpose of mors' open letters?</AccordionTrigger>
                <AccordionContent>
                  mors utilizes open letters as a formal communication channel to present educational reform proposals to key stakeholders. this approach ensures transparency in our advocacy while facilitating public discourse on educational reform. our letters serve to document our positions and recommendations while maintaining accountability in the reform process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>how do open letters facilitate change?</AccordionTrigger>
                <AccordionContent>
                  open letters function as formal instruments of change by establishing clear documentation of reform proposals and enabling public scrutiny of the dialogue between stakeholders. this transparency creates accountability and allows for broader participation in the reform process, leading to more comprehensive and well-considered educational policies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>who are the intended audiences for these letters?</AccordionTrigger>
                <AccordionContent>
                  our open letters are directed primarily at policy makers and educational authorities, while remaining accessible to all stakeholders in education. this includes teachers, administrators, parents, students, and the general public. the letters are structured to be comprehensible and relevant to this diverse audience while maintaining their formal nature.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>what outcomes have been achieved through these letters?</AccordionTrigger>
                <AccordionContent>
                  our open letters have initiated formal discussions regarding skills-based education reform and have established a documented foundation for ongoing policy dialogue. they have successfully engaged various stakeholders in the educational sector and created a formal record of proposed reforms and their supporting rationales.
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