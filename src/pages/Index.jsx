import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionBox = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
    <div className="flex items-center mb-4">
      <div className="bg-[#1E40AF] p-3 rounded-full mr-4">
        {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
      </div>
      <h3 className="text-xl font-semibold text-[#1E40AF]">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
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
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#1E40AF]">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <VisionBox
              icon={<BookOpen />}
              title="Practical Learning"
              description="Emphasizing real-world skills over traditional exam-based assessments."
            />
            <VisionBox
              icon={<Users />}
              title="Inclusive Education"
              description="Recognizing and nurturing diverse talents and learning styles."
            />
            <VisionBox
              icon={<Award />}
              title="Foundation Skills Certificates"
              description="Introducing FSCs as a more comprehensive way to assess student capabilities."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#1E40AF]">Join the Movement</h2>
          <p className="mb-8 text-gray-600">Help us reshape education for a better future.</p>
          <Link to="/get-involved">
            <Button size="lg">Get Involved</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E40AF] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Movement of Real Skills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;