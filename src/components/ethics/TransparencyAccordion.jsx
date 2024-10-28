import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TransparencyAccordion = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="privacy-levels" className="border-white/10">
      <AccordionTrigger className="text-white hover:text-white/90">
        examples of communication privacy levels
      </AccordionTrigger>
      <AccordionContent className="text-gray-300 space-y-6">
        <div>
          <h4 className="font-semibold mb-2">strictly private communications:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>personal information of members and supporters</li>
            <li>internal strategic planning documents</li>
            <li>confidential correspondence with educational institutions</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">temporarily private communications:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>draft proposals under review</li>
            <li>ongoing negotiations with stakeholders</li>
            <li>research findings pending verification</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">immediately public communications:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            <li>open letters to government bodies</li>
            <li>published reform proposals</li>
            <li>public statements and position papers</li>
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default TransparencyAccordion;