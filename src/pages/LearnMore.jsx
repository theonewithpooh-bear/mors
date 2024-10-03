import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Learn More About MORS</h1>
      <p className="mb-6">Here you can find more detailed information about the Movement of Real Skills and our vision for transforming education.</p>
      <Link to="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};

export default LearnMore;