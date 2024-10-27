import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="max-w-3xl mx-auto mt-32">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will the system ensure fairness in coursework grading?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We will implement standardized rubrics and regular moderation processes across all schools. Teachers will receive comprehensive training on assessment criteria, and external moderators will regularly review samples of work to ensure consistency. Additionally, we'll establish a digital platform for anonymous cross-school moderation.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            What measures will prevent plagiarism in coursework?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll utilize advanced plagiarism detection software, implement staged submission requirements where students must show their work in progress, and require regular teacher-student consultations. Students will also maintain digital portfolios documenting their creative process and research journey.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will you support schools with fewer resources?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll establish a national resource-sharing platform, provide additional funding for under-resourced schools, and create mentor partnerships between schools. Digital resources and expert teaching materials will be freely available to all schools, ensuring equal access to high-quality educational support.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will students prepare for higher education without GCSEs?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            Our system will provide clear learning pathways aligned with higher education requirements. We'll work closely with universities and employers to develop comprehensive skill frameworks that clearly outline the competencies students need to develop. Regular assessments will track progress against these frameworks.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will you ensure consistency in soft skills assessment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement detailed assessment matrices for soft skills, supported by video evidence and peer reviews. Regular standardization meetings between teachers will ensure consistent interpretation of criteria, and external moderators will review assessments periodically.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will you prevent over-reliance on external help?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            In-class assessments will be balanced with take-home work, and students will need to demonstrate their understanding through presentations and practical applications. We'll implement clear guidelines about acceptable levels of support and require students to document any external assistance received.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            How will you manage student workload and mental health?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            We'll implement flexible deadlines, balanced assessment schedules, and regular workload reviews. Mental health support will be integrated into the system, with dedicated counselors and stress management resources. Teachers will coordinate to prevent assessment clustering and ensure manageable workloads.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;