
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const ShorehamCollege = () => {
  const [passkey, setPasskey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  
  const correctPasskey = '729416';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passkey === correctPasskey) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Invalid passkey. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24"
        >
          {!isAuthorized ? (
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl">
              <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                Shoreham College Portal
              </h1>
              
              {error && (
                <Alert variant="destructive" className="mb-6 bg-red-900/50 border-red-500">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="passkey" className="text-white">Enter Passkey</Label>
                  <Input 
                    id="passkey"
                    type="password" 
                    value={passkey} 
                    onChange={(e) => setPasskey(e.target.value)}
                    className="bg-white/5 border-white/20 text-white"
                    placeholder="Enter your access code"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none"
                >
                  Access Portal
                </Button>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl">
                <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  Shoreham College Resources
                </h1>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Submit Your Information</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year">Year Group</Label>
                      <Input 
                        id="year" 
                        placeholder="Enter your year group" 
                        className="bg-white/5 border-white/20 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Enter any additional information or requirements" 
                        className="bg-white/5 border-white/20 text-white"
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ShorehamCollege;
