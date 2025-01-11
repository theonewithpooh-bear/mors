import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const PartnerSchools = () => {
  const partnerSchools = [
    {
      name: "Riverside Academy",
      location: "California, USA",
      joinedYear: 2023,
      specialization: "STEM Focus"
    },
    {
      name: "St. Mary's College",
      location: "Ontario, Canada",
      joinedYear: 2023,
      specialization: "Liberal Arts"
    },
    {
      name: "Tech Valley High",
      location: "New York, USA",
      joinedYear: 2023,
      specialization: "Technology & Innovation"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-600 mb-8">
          Our Partner Schools
        </h1>

        <Alert className="mb-8 bg-black/30 border-blue-500/50">
          <AlertDescription className="text-gray-300">
            Meet our growing network of educational institutions committed to innovative learning through MORS.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnerSchools.map((school) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-black/30 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">{school.name}</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2" />
                  Location: {school.location}
                </p>
                <p className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2" />
                  Joined: {school.joinedYear}
                </p>
                <p className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2" />
                  Focus: {school.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-black/30 rounded-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-4">Join Our Network</h2>
          <p className="text-gray-300 mb-4">
            We're always looking to expand our network with schools that share our vision for innovative education. 
            Partner schools gain access to our complete suite of educational resources and become part of a 
            collaborative community of forward-thinking institutions.
          </p>
          <p className="text-gray-400">
            Interested in becoming a partner school? Visit our{' '}
            <a href="/for-schools/become-partner" className="text-blue-400 hover:text-blue-300 underline">
              Become a Partner
            </a>{' '}
            page to learn more about the process.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerSchools;