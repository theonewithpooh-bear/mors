import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Shield, CircleInfo, Computer, Globe, MessageSquare, Rocket } from "lucide-react";

const FAQItem = ({ value, icon: Icon, trigger, children }) => (
  <AccordionItem value={value} className="border-white/10">
    <AccordionTrigger className="text-white hover:text-white/90">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {trigger}
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-gray-400">
      {children}
    </AccordionContent>
  </AccordionItem>
);

const AIUsageFAQ = () => {
  return (
    <section className="py-16 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">AI Usage at MORS</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <FAQItem 
            value="operations" 
            icon={Brain}
            trigger="how does MORS use AI in its operations?"
          >
            we use AI for website building/updates (including Lovable for web development), 
            producing text, images, and videos, and conducting research using ChatGPT's web browsing capabilities.
          </FAQItem>

          <FAQItem 
            value="safeguards" 
            icon={Shield}
            trigger="what safeguards does MORS have in place?"
          >
            our founder Monty Middleton-Burn personally checks all AI output. text is written in small chunks 
            for easier fact-checking. we use OpenAI o1 to remove human error, and non-AI software like Canva 
            for graphic refinement.
          </FAQItem>

          <FAQItem 
            value="transparency" 
            icon={CircleInfo}
            trigger="how does MORS ensure transparency?"
          >
            we maintain dedicated sections explaining our AI usage, provide open communication via info@mors.org.uk, 
            and are always willing to answer questions about our AI implementation.
          </FAQItem>

          <FAQItem 
            value="content" 
            icon={Computer}
            trigger="what types of content does MORS create using AI?"
          >
            we use AI to create poster images, advertising videos, and text content. not everything is AI-made, 
            for example, our manifesto is primarily human-written.
          </FAQItem>

          <FAQItem 
            value="balance" 
            icon={Globe}
            trigger="how does MORS balance AI usage with human expertise?"
          >
            we maintain a careful balance between AI and human input. our simple principle is that "AI is here to help humans," 
            not replace them.
          </FAQItem>

          <FAQItem 
            value="ethics" 
            icon={MessageSquare}
            trigger="what are MORS' ethical guidelines for AI usage?"
          >
            our core principle is simple: "AI is here to help humans." we believe in using AI as a tool to enhance 
            human capabilities while maintaining strong ethical standards.
          </FAQItem>

          <FAQItem 
            value="future" 
            icon={Rocket}
            trigger="how does MORS plan to evolve its AI usage?"
          >
            we plan to maximize AI usage while maintaining a good balance. we view AI as a force for good and believe 
            that education and society should evolve together with AI technology.
          </FAQItem>
        </Accordion>
      </div>
    </section>
  );
};

export default AIUsageFAQ;