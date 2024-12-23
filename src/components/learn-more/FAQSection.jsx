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
            we propose integrating AI and machine learning models to support human markers, helping to identify and maintain consistent grading patterns. additionally, teachers would undergo extensive training—both mandatory and optional—focused on standardised assessment criteria. regular spot checks by exam board officials throughout the year would reinforce standardisation, and exam boards would provide detailed mark schemes and resources to guide teachers in aligning with nationally established expectations and criteria.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what measures will be taken to prevent plagiarism and ensure the authenticity of students' coursework submissions?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we don't consider plagiarism an issue unless the content breaches the law. from MORS's perspective, using available resources to complete a given task is simply part of real-world problem-solving. however, we propose that a significant portion of the coursework be completed as classwork, allowing for supervised environments that help maintain authenticity.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how will this approach avoid disadvantaging students from schools with fewer resources or less experienced teachers?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we believe that schools bear the responsibility for providing adequate resources to support all students. as for teachers' abilities, it is up to individual schools to ensure they are employing educators with the necessary skills and expertise to support coursework-based assessment. our focus is on creating a fair and adaptable assessment system, leaving schools to handle staffing and resource provisions accordingly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            without the clear structure of GCSEs, how will students know what they need to learn for higher education and employment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose that students be clearly informed of the requirements needed to achieve specific grades within the Foundation Skills Certificate (FSC) framework, serving as an alternative to GCSEs. as the system develops further, comprehensive expectations and guidelines will be communicated, ensuring students understand what is needed to meet the demands of higher education and employment. given that we are still in the early stages, these details will evolve as the system is fully thought out and implemented.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how will the system handle subjectivity in assessing soft skills and practical abilities?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose implementing regular spot checks and teacher reviews to maintain consistency in assessing soft skills and practical abilities. these measures will help ensure that assessments are fair and standardised across all coursework.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            what strategies will prevent students from becoming overly reliant on external help?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose a blend of coursework and lightly monitored open-book controlled assessments. this approach allows students to demonstrate their understanding independently while still having access to resources, reducing the likelihood of excessive reliance on external help, such as tutoring or parental assistance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how will the system manage student workload and mental health with continuous assessment?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we are developing Foundation Skills Certificates (FSCs) specifically to reduce stress and support mental health. our proposed system will be thoughtfully designed to address these concerns, ensuring that students' workload is manageable and conducive to well-being, rather than creating constant pressure with endless deadlines.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/90">
            how will this new system ensure that students are prepared for the demands and expectations of the modern workplace?
          </AccordionTrigger>
          <AccordionContent className="text-gray-400">
            we propose that the new system prepare students for the modern workplace by mirroring real-world environments. traditional exams often fail to reflect workplace demands, whereas tasks and assignments offer practical, hands-on experiences that better equip students with the skills and adaptability required in a professional setting.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
