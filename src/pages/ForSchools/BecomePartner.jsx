import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const BecomePartner = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thank you for your interest. We will review your application and contact you soon.",
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
          Become a Partner
        </h1>

        <Alert className="bg-black/30 border-purple-500/50 max-w-2xl">
          <AlertCircle className="h-4 w-4 text-purple-500" />
          <AlertDescription className="text-gray-300">
            Partners are currently limited to invitation only until MORS' infrastructure grows. 
            To apply for an invitation, please fill out the form below. 
            Note: You must be a member of your school's Leadership team to submit this application.
          </AlertDescription>
        </Alert>

        <Card className="p-6 bg-black/30 border-white/10 max-w-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6">Benefits of Partnership</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-8">
            <li>Access to comprehensive revision resources for students</li>
            <li>Early access to new educational tools and features</li>
            <li>Direct support from the MORS team</li>
            <li>Opportunity to shape future educational resources</li>
            <li>Collaboration with other partner schools</li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                <Input
                  id="name"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-gray-300">Position at School</Label>
                <Input
                  id="position"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="e.g. Head Teacher, Deputy Head"
                />
              </div>

              <div>
                <Label htmlFor="school" className="text-gray-300">School Name</Label>
                <Input
                  id="school"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Your school's name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">School Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="your.email@school.edu"
                />
              </div>

              <div>
                <Label htmlFor="reason" className="text-gray-300">Why would you like to partner with MORS?</Label>
                <Textarea
                  id="reason"
                  required
                  className="bg-white/5 border-white/10 text-white min-h-[100px]"
                  placeholder="Please tell us about your school and why you're interested in partnering with MORS"
                />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit Application
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default BecomePartner;