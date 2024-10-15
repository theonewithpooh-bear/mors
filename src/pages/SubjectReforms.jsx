import React from 'react';
import { Button } from "@/components/ui/button";

const SubjectReforms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Subject Reforms</h1>
        <p className="text-xl text-center mb-8">
          We are currently working on reforming various subjects to better align with real-world skills and modern educational needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">GCSE Reforms</h2>
            <p className="mb-4">Our proposed reforms for GCSE subjects focus on integrating practical skills and project-based learning.</p>
            <Button variant="outline" className="w-full">
              View GCSE Reforms
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">A-Level Reforms</h2>
            <p className="mb-4">For A-Levels, we're emphasizing interdisciplinary approaches and real-world applications of knowledge.</p>
            <Button variant="outline" className="w-full">
              View A-Level Reforms
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectReforms;