import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-8">Learn More About MORS</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-xl leading-relaxed mb-6">
            The Movement of Real Skills (MORS) is dedicated to transforming education by prioritizing practical, real-world skills. We believe in preparing students for the challenges of tomorrow through hands-on learning experiences and innovative teaching methods.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="text-xl leading-relaxed mb-6">
            We focus on developing critical thinking, problem-solving, and adaptability skills that are essential in today's rapidly changing world. Our curriculum integrates project-based learning, internships, and mentorship programs to provide a well-rounded educational experience.
          </p>
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

export default LearnMore;