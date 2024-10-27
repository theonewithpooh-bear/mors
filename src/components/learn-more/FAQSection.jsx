import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto mt-32 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how will the system ensure fairness in coursework grading when different teachers have varying expectations and standards?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we are advocating for the implementation of standardized rubrics and regular moderation processes. this would include clear assessment criteria, comprehensive teacher training programs, and regular cross-marking sessions. external moderation would also play a crucial role in maintaining consistency across different schools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what measures could be taken to prevent plagiarism and ensure the authenticity of students' coursework submissions?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose the use of advanced plagiarism detection software, combined with regular progress updates and in-class supervised work sessions. students would maintain digital portfolios documenting their work process, and teachers would conduct periodic one-on-one discussions about project development.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how could this approach avoid disadvantaging students from schools with fewer resources or less experienced teachers?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we advocate for the establishment of a national resource sharing platform, comprehensive teacher support networks, and mentoring programs. our proposal includes recommendations for additional funding allocation to schools in need and the facilitation of partnerships between schools to share expertise and resources.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            without the clear structure of GCSEs, how would students know what they need to learn for higher education and employment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we are proposing detailed skill frameworks that would align with higher education and industry requirements. these frameworks would outline core competencies, essential knowledge areas, and practical skills needed for various career paths and academic progression.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how could the system handle subjectivity in assessing soft skills and practical abilities?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            our proposal includes detailed assessment matrices for soft skills, with multiple evaluators for each assessment, and incorporation of peer and self-assessment components. we advocate for regular standardization meetings to ensure consistent interpretation of assessment criteria across all schools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what strategies could prevent students from becoming overly reliant on external help?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose implementing supervised in-class work periods, detailed work logs, and regular progress interviews. the assessment system we advocate for would emphasize process documentation and include individual reflection components that demonstrate personal understanding and growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how would the system manage student workload and mental health with continuous assessment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we advocate for flexible deadlines, balanced assessment schedules, and regular workload reviews. our proposal includes integration of mental health support, with dedicated counselors and stress management resources. teachers would coordinate assignments to prevent overwhelming deadlines.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;