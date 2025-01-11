import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-white" />
            <h1 className="text-4xl font-bold text-white">cookies policy</h1>
          </div>
          
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-8">
            <CardHeader className="flex flex-row items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              <h2 className="text-xl font-semibold text-white">our approach</h2>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                at movement of real skills (mors), we prioritize your privacy and data protection. 
                unlike many websites, we have made the conscious decision not to use cookies or 
                similar tracking technologies on our website.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">what this means for you</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>we do not track your browsing behavior</li>
                <li>we do not store any personal information through cookies</li>
                <li>we do not use any analytics cookies</li>
                <li>we do not use any advertising or marketing cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">our commitment</h2>
              <p className="text-gray-300">
                our commitment to a cookie-free experience aligns with our values of transparency 
                and respect for user privacy. you can browse our website with confidence, knowing 
                that your online activity is not being tracked or stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">questions?</h2>
              <p className="text-gray-300">
                if you have any questions about our cookies policy or privacy practices, please contact us at{' '}
                <a href="mailto:info@mors.org.uk" className="text-blue-400 hover:text-blue-300">
                  info@mors.org.uk
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPolicy;