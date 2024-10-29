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
    <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border-white/10 p-8 shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500">
      <div className="flex items-center space-x-2 mb-8">
        <Lock className="w-6 h-6 text-emerald-400" />
        <h2 className="text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-500">support our mission</h2>
      </div>
      
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        your donation helps us advocate for better education and implement real change in the UK's education system.
      </p>
      
      <form onSubmit={handleDonationSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white/90">first name</Label>
            <Input
              id="firstName"
              type="text"
              required
              className="bg-black/50 border-white/10 text-white focus:border-emerald-500/50 transition-colors"
              placeholder="john"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white/90">last name</Label>
            <Input
              id="lastName"
              type="text"
              required
              className="bg-black/50 border-white/10 text-white focus:border-emerald-500/50 transition-colors"
              placeholder="doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white/90">email address</Label>
          <Input
            id="email"
            type="email"
            required
            className="bg-black/50 border-white/10 text-white focus:border-emerald-500/50 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount" className="text-white/90">donation amount (£)</Label>
          <Input
            id="amount"
            type="number"
            min="1"
            step="1"
            required
            className="bg-black/50 border-white/10 text-white focus:border-emerald-500/50 transition-colors"
            placeholder="50"
          />
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-semibold text-white/90">payment details</h3>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber" className="text-white/90">card number</Label>
            <Input
              id="cardNumber"
              type="text"
              required
              maxLength="19"
              className="bg-black/50 border-white/10 text-white font-mono focus:border-emerald-500/50 transition-colors"
              placeholder="4242 4242 4242 4242"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="expiry" className="text-white/90">expiry date</Label>
              <Input
                id="expiry"
                type="text"
                required
                maxLength="5"
                className="bg-black/50 border-white/10 text-white font-mono focus:border-emerald-500/50 transition-colors"
                placeholder="MM/YY"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc" className="text-white/90">security code</Label>
              <Input
                id="cvc"
                type="text"
                required
                maxLength="3"
                className="bg-black/50 border-white/10 text-white font-mono focus:border-emerald-500/50 transition-colors"
                placeholder="123"
              />
            </div>
          </div>
        </div>

        <Button 
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            donate securely now
          </span>
        </Button>

        <p className="text-sm text-gray-400 text-center mt-4">
          Your payment is secured with SSL encryption. This is a demo - no real payments will be processed.
        </p>
      </form>
    </Card>
  );
};

export default DonationForm;