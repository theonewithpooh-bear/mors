import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const Inquire = () => {
  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600 mb-8">
          Inquire About Our Programs
        </h1>
        
        <Alert className="mb-8 bg-black/30 border-purple-500/50">
          <AlertDescription className="text-gray-300">
            We're here to answer any questions you have about MORS and how we can support your school's educational journey.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>education@mors.example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="h-5 w-5 text-purple-400" />
                <span>www.mors.example.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Common Inquiries</h2>
            <div className="space-y-4 text-gray-300">
              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Program Implementation</h3>
                <p className="text-sm">Learn about how our programs can be integrated into your existing curriculum.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Technical Requirements</h3>
                <p className="text-sm">Understand the technical setup needed to implement MORS in your school.</p>
              </div>
              <div className="p-4 bg-black/30 rounded-lg border border-white/10">
                <h3 className="font-semibold mb-2">Training & Support</h3>
                <p className="text-sm">Information about our training programs and ongoing support for educators.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Inquire;