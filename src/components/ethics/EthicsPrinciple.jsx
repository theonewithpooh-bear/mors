import { Card, CardContent } from "@/components/ui/card";

const EthicsPrinciple = ({ icon: Icon, title, children }) => (
  <Card className="bg-black/80 border border-white/10 backdrop-blur-sm hover:bg-black/90 transition-colors duration-300">
    <CardContent className="p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Icon className="h-6 w-6 text-white/80" />
        <div className="space-y-2">
          <h3 className="text-2xl font-normal text-white">{title}</h3>
          <p className="text-gray-400 text-lg">{children}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default EthicsPrinciple;