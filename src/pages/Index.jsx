import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionBox = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-[#1E40AF] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Movement of Real Skills</h1>
          <p className="text-xl mb-8">Transforming education to prioritize practical, real-world skills</p>
          <Link to="/learn-more">
            <Button variant="secondary" size="lg">Learn More</Button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VisionBox
              icon={<BookOpen className="w-12 h-12 text-[#1E40AF]" />}
              title="Practical Learning"
              description="Emphasizing real-world skills over traditional exam-based assessments."
            />
            <VisionBox
              icon={<Users className="w-12 h-12 text-[#1E40AF]" />}
              title="Inclusive Education"
              description="Recognizing and nurturing diverse talents and learning styles."
            />
            <VisionBox
              icon={<Award className="w-12 h-12 text-[#1E40AF]" />}
              title="Foundation Skills Certificates"
              description="Introducing FSCs as a more comprehensive way to assess student capabilities."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
          <p className="mb-8">Help us reshape education for a better future.</p>
          <Link to="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;