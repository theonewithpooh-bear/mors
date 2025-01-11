import { Card, CardContent } from "@/components/ui/card";

const EthicsPrinciple = ({ icon: Icon, title, children, accordion }) => (
  <Card className="bg-black/80 border border-white/10 backdrop-blur-sm hover:bg-black/90 transition-colors duration-300">
    <CardContent className="p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Icon className="h-5 w-5 text-white/80 mt-1" />
        <div className="space-y-2">
          <h3 className="text-lg font-normal text-white">{title}</h3>
          <p className="text-gray-400 text-base">{children}</p>
          {accordion}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default EthicsPrinciple;