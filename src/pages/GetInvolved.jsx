import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8">Get Involved with MORS</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
          <p className="text-xl leading-relaxed mb-6">
            There are many ways to contribute to the Movement of Real Skills. Whether you're an educator, student, parent, or industry professional, your involvement can make a significant impact on reshaping education for a better future.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Ways to Contribute</h2>
          <ul className="text-xl leading-relaxed mb-6 list-disc list-inside space-y-2">
            <li>Volunteer as a mentor</li>
            <li>Offer internship opportunities</li>
            <li>Participate in workshops and events</li>
            <li>Spread awareness on social media</li>
            <li>Donate to support our programs</li>
          </ul>
        </section>
        
        <Link to="/" className="inline-block">
          <Button variant="outline" className="text-lg px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolved;