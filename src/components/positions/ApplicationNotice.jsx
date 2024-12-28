import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export const ApplicationNotice = () => {
  return (
    <Alert variant="destructive" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Applications Currently Closed</AlertTitle>
      <AlertDescription>
        We are currently setting up our application infrastructure. Applications for all positions will open in late 2025, with roles commencing September 2026. Please check back later for updates.
      </AlertDescription>
    </Alert>
  );
};