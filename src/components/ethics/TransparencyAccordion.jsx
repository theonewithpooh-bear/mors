import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TransparencyAccordion = () => (
  <Accordion type="single" collapsible className="w-full mt-4">
    <AccordionItem value="privacy-levels" className="border-white/10">
      <AccordionTrigger className="text-white hover:text-white/90 text-base font-normal">
        examples of communication privacy levels
      </AccordionTrigger>
      <AccordionContent className="text-gray-400">
        <div className="space-y-6 py-2">
          <div>
            <h4 className="font-normal text-base text-white/90 mb-2">strictly private communications:</h4>
            <ul className="space-y-1 text-sm">
              <li>personal information of members and supporters</li>
              <li>internal strategic planning documents</li>
              <li>confidential correspondence with educational institutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-base text-white/90 mb-2">temporarily private communications:</h4>
            <ul className="space-y-1 text-sm">
              <li>draft proposals under review</li>
              <li>ongoing negotiations with stakeholders</li>
              <li>research findings pending verification</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-base text-white/90 mb-2">immediately public communications:</h4>
            <ul className="space-y-1 text-sm">
              <li>open letters to government bodies</li>
              <li>published reform proposals</li>
              <li>public statements and position papers</li>
            </ul>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default TransparencyAccordion;