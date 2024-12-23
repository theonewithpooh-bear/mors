import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto mt-32 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how does MORS use AI in its operations?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we use AI to assist with content creation, research analysis, and communication materials. all AI-generated content is reviewed and refined by our human team to ensure accuracy and alignment with our mission.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what safeguards does MORS have in place for AI usage?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we have implemented strict oversight protocols where all AI-generated content undergoes human review. our team ensures that all content aligns with our educational values and maintains accuracy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how does MORS ensure transparency about its AI usage?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we maintain complete transparency about our AI usage through clear documentation and open communication with our community. we believe in being upfront about which aspects of our work involve AI assistance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what types of content does MORS create using AI?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we use AI to assist in creating educational content, research summaries, and communication materials. this includes initial drafts of documents, data analysis, and content organization.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how does MORS balance AI usage with human expertise?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we view AI as a tool to enhance our human team's capabilities, not replace them. our experts provide critical thinking, context, and final approval for all AI-assisted work.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what are MORS' ethical guidelines for AI usage?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            our ethical guidelines prioritize transparency, accuracy, and responsible use of AI technology. we ensure all AI usage aligns with our educational mission and values.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how does MORS plan to evolve its AI usage in the future?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we continuously evaluate new AI technologies and their potential benefits for our mission. our focus is on finding ways to leverage AI to create more effective and accessible educational resources.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what AI models does MORS use?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we primarily use GPT-4 for content generation and analysis, along with specialized models for specific tasks like data analysis and research synthesis. all models are carefully selected based on their reliability and alignment with our educational goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;