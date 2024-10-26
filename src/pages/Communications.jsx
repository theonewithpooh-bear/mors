import React from 'react';
import { Button } from "@/components/ui/button";
import { Construction } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Communications = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 pt-24">
          <h1 className="text-5xl font-bold mb-8">
            communications
          </h1>
          
          <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <p className="text-xl leading-relaxed text-gray-100">
              mors plans to send open letters at least once a week to various stakeholders in education - from the department of education to influential organisations, political parties and MPs. these open letters, being public and transparent communications, will allow us to openly advocate for change while fostering public dialogue about educational reform.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
                  alt="Department of Education Logo"
                  className="w-16 h-16 object-contain invert"
                />
                <h2 className="text-2xl font-semibold">Department for Education</h2>
              </div>
              <Button
                variant="outline"
                className="px-6 py-2 text-base rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
                disabled
              >
                view this week's letter
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-yellow-300 mt-4">
              <Construction className="h-5 w-5" />
              <span className="text-sm">coming soon!</span>
            </div>
          </div>
        </div>

        <div id="open-letters" className="max-w-3xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">understanding open letters</h2>
            
            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-lg mb-6">
                open letters are formal public communications addressed to specific individuals or organizations but made accessible to the general public. they serve as a transparent medium for addressing important matters while ensuring the wider community remains informed and engaged in the discourse.
              </p>
              
              <p className="text-lg mb-6">
                these communications are instrumental in fostering public dialogue and creating meaningful change in educational policy. by making our correspondence public, we establish a documented record of our reform proposals and enable broader participation in the educational reform discussion.
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
                  as mors is currently in its launch phase, we have not yet sent our first open letter. however, we have established a comprehensive framework for our communication strategy and are preparing to initiate formal dialogue with key stakeholders in the educational sector. our first open letters will be published soon.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Communications;
