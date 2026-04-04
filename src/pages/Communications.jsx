import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Communications = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center mb-16 pt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">communications</h1>
          
          <div className="max-w-3xl w-full modern-card p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              mors plans to send open letters at least once a week to various stakeholders in education - from the department of education to influential organisations, political parties and MPs. these open letters, being public and transparent communications, will allow us to openly advocate for change while fostering public dialogue about educational reform.
            </p>
            
            <div className="flex justify-center mt-6">
              <Button
                variant="outline"
                className="px-6 py-4 text-base rounded-full border-border hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.location.href = '/file-store'}
              >
                view all documents
              </Button>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="modern-card p-10 w-full max-w-4xl">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-8">
                <img 
                  src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
                  alt="Department of Education Logo"
                  className="w-24 h-24 object-contain opacity-80"
                />
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Department for Education</h2>
              </div>
              
              <Button
                variant="outline"
                className="px-8 py-5 text-base rounded-full border-border hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('/open-letter-dfe', '_blank')}
              >
                view this week's letter
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="modern-card p-8">
            <h2 className="text-2xl font-bold mb-8 text-center text-foreground">understanding our communications</h2>
            
            <div className="prose max-w-none mb-10">
              <p className="text-base mb-5 text-muted-foreground leading-relaxed">
                open letters are formal public communications addressed to specific individuals or organizations but made accessible to the general public. they serve as a transparent medium for addressing important matters while ensuring the wider community remains informed and engaged in the discourse.
              </p>
              <p className="text-base mb-5 text-muted-foreground leading-relaxed">
                these communications are instrumental in fostering public dialogue and creating meaningful change in educational policy. by making our correspondence public, we establish a documented record of our reform proposals and enable broader participation in the educational reform discussion.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border">
                <AccordionTrigger className="text-foreground hover:no-underline">what is the purpose of our open letters?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  our open letters serve as formal communications to present educational reform proposals to key stakeholders. this approach ensures transparency in our advocacy while facilitating public discourse on educational reform. each letter documents our positions and recommendations while maintaining accountability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border">
                <AccordionTrigger className="text-foreground hover:no-underline">how often do we send open letters?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  we aim to send open letters at least once a week to various stakeholders in education. this regular communication helps maintain momentum in our reform efforts and ensures consistent engagement with decision-makers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border">
                <AccordionTrigger className="text-foreground hover:no-underline">who receives our open letters?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  our letters are addressed to various stakeholders including the department for education, influential organizations, political parties, and MPs. while directed at specific recipients, these letters remain publicly accessible to ensure transparency.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-border">
                <AccordionTrigger className="text-foreground hover:no-underline">how can i stay updated about new letters?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  all our open letters will be published on this website as soon as they are sent. you can also subscribe to our newsletter or follow our social media channels for immediate updates when new letters are published.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-border">
                <AccordionTrigger className="text-foreground hover:no-underline">can i suggest topics for future letters?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  yes! we welcome community input on important educational issues that should be addressed. you can submit your suggestions through our contact form or during our regular community engagement sessions.
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
