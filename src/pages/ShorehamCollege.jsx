
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import '@fontsource/cormorant';

const ShorehamCollege = () => {
  const [passkey, setPasskey] = useState('');
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [error, setError] = useState('');
  
  // Security: Remove hardcoded passkey - this should be handled server-side
  // For demonstration purposes only - in production, use proper authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('Authentication temporarily disabled for security reasons. Please contact the administrator.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 text-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-24"
        >
          {!isAuthorised ? (
            <div className="bg-black/10 backdrop-blur-md p-8 rounded-xl border border-black/20 shadow-xl">
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/b9da7e47-b85f-49bb-9759-848048f982ed.png" 
                  alt="Shoreham College Logo" 
                  className="h-64 md:h-72 w-auto"
                  style={{ filter: 'invert(1)' }}
                />
              </div>
              
              <h1 className="font-serif text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-800">
                Shoreham College Portal
              </h1>
              <p className="text-center text-sm font-['Cormorant'] mb-8 opacity-80">By mors</p>
              
              {error && (
                <Alert variant="destructive" className="mb-6 bg-red-100/50 border-red-500">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="passkey" className="text-black">Enter Passkey</Label>
                  <Input 
                    id="passkey"
                    type="password" 
                    value={passkey} 
                    onChange={(e) => setPasskey(e.target.value)}
                    className="bg-black/5 border-black/20 text-black"
                    placeholder="Enter your access code"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-purple-400 hover:bg-purple-300 text-black border-none"
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
              <div className="bg-black/10 backdrop-blur-md p-8 rounded-xl border border-black/20 shadow-xl">
                <div className="flex justify-center mb-8">
                  <img 
                    src="/lovable-uploads/b9da7e47-b85f-49bb-9759-848048f982ed.png" 
                    alt="Shoreham College Logo" 
                    className="h-56 w-auto"
                    style={{ filter: 'invert(1)' }}
                  />
                </div>
                
                <h1 className="font-serif text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-purple-800">
                  Shoreham College Resources
                </h1>
                <p className="text-center text-sm font-['Cormorant'] mb-8 opacity-80">By mors</p>
                
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Submit Your Information</h2>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="bg-black/5 border-black/20 text-black"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="bg-black/5 border-black/20 text-black"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year">Year Group</Label>
                      <Input 
                        id="year" 
                        placeholder="Enter your year group" 
                        className="bg-black/5 border-black/20 text-black"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Enter any additional information or requirements" 
                        className="bg-black/5 border-black/20 text-black"
                        rows={4}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-purple-400 hover:bg-purple-300 text-black border-none"
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
