
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-3xl mx-auto mt-16 mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        {t('faq.title')}
      </h2>
      
      <Accordion type="single" collapsible className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg">
        <AccordionItem value="item-1" className="border-b border-white/10">
          <AccordionTrigger className="text-white hover:text-gray-200">
            {t('faq.questions.q1.question')}
          </AccordionTrigger>
          <AccordionContent className="text-gray-300">
            {t('faq.questions.q1.answer')}
          </AccordionContent>
        </AccordionItem>
        
        {/* Additional FAQ items can be added here as they are added to the translations */}
      </Accordion>
    </div>
  );
};

export default FAQSection;
