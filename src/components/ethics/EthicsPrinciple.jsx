import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EthicsPrinciple = ({ icon: Icon, title, children }) => (
  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
    <CardHeader>
      <Icon className="h-8 w-8 mb-2 text-white/80" />
      <CardTitle className="text-white text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-300">
      {children}
    </CardContent>
  </Card>
);

export default EthicsPrinciple;