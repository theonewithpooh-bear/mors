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
          <div className="bg-[#111]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-12 w-full max-w-4xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-8">
                <img 
                  src="https://www.education.ox.ac.uk/wp-content/uploads/2024/10/dfe-e1645782405638.png" 
                  alt="Department of Education Logo"
                  className="w-24 h-24 object-contain invert opacity-90"
                />
                <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Department for Education</h2>
              </div>
              
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-full bg-[#222]/50 hover:bg-[#333]/50 text-white/90 border-white/10 hover:border-white/20 transition-all duration-300"
                disabled
              >
                view this week's letter
              </Button>

              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-yellow-300/10 text-yellow-300/90">
                  <Construction className="h-6 w-6" />
                  <span className="text-base font-medium">coming soon!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
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
                <AccordionTrigger>How will the system ensure fairness in coursework grading when different teachers have varying expectations and standards?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for standardized rubrics and regular moderation processes. We support establishing clear assessment criteria, comprehensive teacher training programs, and regular cross-marking sessions. Additionally, we propose external moderation systems to review work samples across different schools to maintain consistency.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What measures will be taken to prevent plagiarism and ensure the authenticity of students' coursework submissions?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for implementing advanced plagiarism detection systems, regular progress monitoring, and supervised work sessions. We support the use of digital portfolios for documenting work processes and regular teacher-student discussions about project development.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How will this approach avoid disadvantaging students from schools with fewer resources or less experienced teachers?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for establishing national resource sharing platforms, comprehensive teacher support networks, and mentoring programs. We support additional funding allocation to schools in need and partnerships between schools to share expertise and resources.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Without the clear structure of GCSEs, how will students know what they need to learn for higher education and employment?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for detailed skill frameworks aligned with higher education and industry requirements. We support frameworks that clearly outline core competencies, essential knowledge areas, and practical skills needed for various career paths and academic progression.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How will the system handle subjectivity in assessing soft skills and practical abilities?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for detailed assessment matrices for soft skills, multiple evaluator systems, and peer and self-assessment components. We support regular standardization meetings to ensure consistent interpretation of assessment criteria across all schools.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>What strategies will prevent students from becoming overly reliant on external help?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for supervised in-class work periods, detailed work logs, and regular progress interviews. We support assessment systems that emphasize process documentation and include individual reflection components to demonstrate personal understanding and growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>How will the system manage student workload and mental health with continuous assessment?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  M.O.R.S advocates for flexible deadlines, balanced assessment schedules, and regular workload reviews. We support integrating mental health support into the system, with dedicated counselors and stress management resources, and coordination between teachers to prevent overwhelming deadlines.
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
