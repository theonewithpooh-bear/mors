import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TransparencyAccordion = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="privacy-levels" className="border-white/10 bg-black/80 rounded-lg">
      <AccordionTrigger className="text-white hover:text-white/90 px-4 py-3 text-xl font-normal">
        examples of communication privacy levels
      </AccordionTrigger>
      <AccordionContent className="text-gray-400 px-4">
        <div className="space-y-8 py-4">
          <div>
            <h4 className="font-normal text-lg text-white/90 mb-3">strictly private communications:</h4>
            <ul className="space-y-2 text-gray-400">
              <li>personal information of members and supporters</li>
              <li>internal strategic planning documents</li>
              <li>confidential correspondence with educational institutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-lg text-white/90 mb-3">temporarily private communications:</h4>
            <ul className="space-y-2 text-gray-400">
              <li>draft proposals under review</li>
              <li>ongoing negotiations with stakeholders</li>
              <li>research findings pending verification</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-normal text-lg text-white/90 mb-3">immediately public communications:</h4>
            <ul className="space-y-2 text-gray-400">
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