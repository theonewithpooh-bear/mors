import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const DonationForm = () => {
  const { toast } = useToast();

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Processing payment...",
      description: "Please wait...",
    });

    setTimeout(() => {
      toast({
        title: "Thank you for your support!",
        description: "Your donation has been processed successfully.",
      });
    }, 2000);
  };

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/20" />
      
      <div className="relative backdrop-blur-sm bg-black/40 p-8 sm:p-12 border border-white/10 rounded-xl">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative flex items-center gap-4 mb-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              support our mission
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              help shape the future of education
            </p>
          </div>
        </div>
        
        <form onSubmit={handleDonationSubmit} className="relative space-y-8">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-300">first name</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  className="h-11 bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                  placeholder=""
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-300">last name</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  className="h-11 bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                  placeholder=""
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">email address</Label>
              <Input
                id="email"
                type="email"
                required
                className="h-11 bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-sm font-medium text-gray-300">donation amount (£)</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                step="1"
                required
                className="h-11 bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                placeholder=""
              />
            </div>
          </div>

          <Separator className="bg-white/10" />

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white">payment details</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-300">card number</Label>
                <Input
                  id="cardNumber"
                  type="text"
                  required
                  maxLength="19"
                  className="h-11 font-mono bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-sm font-medium text-gray-300">expiry date</Label>
                  <Input
                    id="expiry"
                    type="text"
                    required
                    maxLength="5"
                    className="h-11 font-mono bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc" className="text-sm font-medium text-gray-300">security code</Label>
                  <Input
                    id="cvc"
                    type="text"
                    required
                    maxLength="3"
                    className="h-11 font-mono bg-white/5 border-white/10 text-white focus:border-white/50 focus:ring-white/20 transition-all duration-300"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full h-12 bg-white hover:bg-gray-100 text-black text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              donate securely now
            </span>
          </Button>

          <p className="text-sm text-gray-400 text-center">
            Your payment is secured with SSL encryption. This is a demo - no real payments will be processed.
          </p>
        </form>
      </div>
    </Card>
  );
};

export default DonationForm;