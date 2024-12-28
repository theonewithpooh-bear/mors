import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const ApplicationNotice = () => {
  return (
    <Alert variant="destructive" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Applications Currently Closed</AlertTitle>
      <AlertDescription>
        We are currently setting up our application infrastructure. Applications for all positions are temporarily unavailable. Please check back later.
      </AlertDescription>
    </Alert>
  );
};