import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto mt-32 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will the system ensure fairness in coursework grading when different teachers have varying expectations and standards?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Our system implements standardized rubrics and regular moderation processes. We'll establish clear assessment criteria, provide comprehensive teacher training, and conduct regular cross-marking sessions. Additionally, external moderators will review samples of work across different schools to maintain consistency.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            What measures will be taken to prevent plagiarism and ensure the authenticity of students' coursework submissions?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement advanced plagiarism detection software, require regular progress updates, and incorporate in-class supervised work sessions. Students will maintain digital portfolios documenting their work process, and teachers will conduct periodic one-on-one discussions about project development.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will this approach avoid disadvantaging students from schools with fewer resources or less experienced teachers?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll establish a national resource sharing platform, provide comprehensive teacher support networks, and implement mentoring programs. Additional funding and resources will be allocated to schools in need, and we'll facilitate partnerships between schools to share expertise and resources.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            Without the clear structure of GCSEs, how will students know what they need to learn for higher education and employment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We're developing detailed skill frameworks aligned with higher education and industry requirements. These frameworks will clearly outline core competencies, essential knowledge areas, and practical skills needed for various career paths and academic progression.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will the system handle subjectivity in assessing soft skills and practical abilities?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement detailed assessment matrices for soft skills, use multiple evaluators for each assessment, and incorporate peer and self-assessment components. Regular standardization meetings will ensure consistent interpretation of assessment criteria across all schools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            What strategies will prevent students from becoming overly reliant on external help?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement supervised in-class work periods, require detailed work logs, and conduct regular progress interviews. The assessment system will emphasize process documentation and include individual reflection components that demonstrate personal understanding and growth.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will the system manage student workload and mental health with continuous assessment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement flexible deadlines, balanced assessment schedules, and regular workload reviews. Mental health support will be integrated into the system, with dedicated counselors and stress management resources. Teachers will coordinate assignments to prevent overwhelming deadlines.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
