import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Get Involved with MORS</h1>
      <p className="mb-6">Join us in reshaping education for a better future. Here's how you can contribute to the Movement of Real Skills.</p>
      <Link to="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};

export default GetInvolved;