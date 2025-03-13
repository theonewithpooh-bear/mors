
import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export const UpdateNotification = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Show toast notification on component mount
    toast({
      title: (
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-400" />
          <span>Project Updated</span>
        </div>
      ),
      description: "Your project has been updated to the latest Lovable version.",
      className: "bg-black border border-white/10 text-white",
    });
  }, [toast]);

  return <Toaster />;
};

export default UpdateNotification;
