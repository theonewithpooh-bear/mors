import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CreditCard, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Processing payment...",
      description: "Please wait...",
    });

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Thank you for your support!",
        description: "Your donation has been processed successfully.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-24 space-y-8"
        >
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl rounded-[32px] shadow-2xl p-12 border border-white/10"
          >
            <h2 className="text-6xl font-bold mb-8 text-white">register interest</h2>
            <p className="text-xl leading-relaxed mb-12 text-gray-300">
              mors is a new initiative to revolutionize education. before launching our full platform, 
              we're gathering interest to ensure we can provide the best possible experience for our community. 
              join our waitlist to be among the first to know when we launch and help shape the future of education.
            </p>
            <a 
              href="https://forms.gle/uV182TrQxVq8GwTc6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="group text-lg px-8 py-6 rounded-2xl bg-white/10 hover:bg-white/20 border-white/20 transition-all duration-300"
              >
                register your interest
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl border-white/10 p-8">
              <div className="flex items-center space-x-2 mb-8">
                <Lock className="w-5 h-5 text-emerald-500" />
                <h2 className="text-4xl font-bold text-white">support our mission</h2>
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                your donation helps us advocate for better education and implement real change in the UK's education system.
              </p>
              
              <form onSubmit={handleDonationSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">first name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="bg-black/50 border-white/10 text-white"
                      placeholder="john"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">last name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="bg-black/50 border-white/10 text-white"
                      placeholder="doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">email address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">donation amount (£)</Label>
                  <Input
                    id="amount"
                    type="number"
                    min="1"
                    step="1"
                    required
                    className="bg-black/50 border-white/10 text-white"
                    placeholder="50"
                  />
                </div>

                <Separator className="my-8 bg-white/10" />

                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-xl font-semibold">payment details</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">card number</Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      required
                      maxLength="19"
                      className="bg-black/50 border-white/10 text-white font-mono"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">expiry date</Label>
                      <Input
                        id="expiry"
                        type="text"
                        required
                        maxLength="5"
                        className="bg-black/50 border-white/10 text-white font-mono"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">security code</Label>
                      <Input
                        id="cvc"
                        type="text"
                        required
                        maxLength="3"
                        className="bg-black/50 border-white/10 text-white font-mono"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg group relative overflow-hidden"
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
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;