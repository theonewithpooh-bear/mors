import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Twitter } from 'lucide-react';

const Positions = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen w-screen">
        {/* Desktop Image */}
        <img 
          src="/lovable-uploads/566b091b-7e85-4965-9b51-03bd0a8f2b22.png" 
          alt="Jobs desk in forest" 
          className="hidden md:block w-full h-full object-contain bg-black"
        />
        
        {/* Mobile Image */}
        <img 
          src="/lovable-uploads/387a4d3f-fd1d-439b-a4e3-1331342235ef.png" 
          alt="Jobs desk in forest mobile" 
          className="md:hidden w-full h-full object-contain bg-black"
        />
          
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <Button 
            onClick={() => navigate('/')}
            className="bg-primary hover:bg-primary/90"
          >
            Back Home
          </Button>
          <a 
            href="https://x.com/mors_uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
        </div>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Coming Soon!</DialogTitle>
              <DialogDescription className="text-lg mt-2">
                We are working on and hoping to announce soon unpaid volunteer positions for young people.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Positions;