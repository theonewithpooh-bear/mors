import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const CookiesPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = () => {
    setOpen(false);
    navigate('/cookies-policy');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="bg-black/95 border border-white/10">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-white">No cookies here!</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            Unlike most websites, we don't use any cookies or tracking technologies. Your privacy matters to us.
          </AlertDialogDescription>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <img 
              src="https://i.ibb.co/8sjLJdJ/bob.jpg" 
              alt="Bob" 
              className="w-24 h-24 object-cover rounded-full"
            />
            <p className="text-xs text-gray-400" style={{ fontFamily: 'Times New Roman' }}>
              BOB IS ENSURING YOUR PRIVACY
            </p>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-4">
          <Button
            variant="outline"
            onClick={handleLearnMore}
            className="bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20 text-white"
          >
            learn more
          </Button>
          <AlertDialogAction
            className="bg-white text-black hover:bg-white/90"
          >
            cool!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CookiesPopup;