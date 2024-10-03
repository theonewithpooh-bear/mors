import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Movement of Real Skills</h1>
          <p className="text-xl mb-8">Transforming education to prioritize practical, real-world skills</p>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Practical Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Emphasizing real-world skills over traditional exam-based assessments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Inclusive Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Recognizing and nurturing diverse talents and learning styles.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2" />
                  Foundation Skills Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Introducing FSCs as a more comprehensive way to assess student capabilities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join the Movement</h2>
          <p className="mb-8">Help us reshape education for a better future.</p>
          <Button size="lg">Get Involved</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;