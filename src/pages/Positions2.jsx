import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Positions = () => {
  const navigate = useNavigate();

  const upcomingPositions = [
    {
      id: 1,
      title: "Education Policy Researcher",
      type: "Volunteer",
      department: "Research & Policy",
      timeCommitment: "5-10 hours/week",
      location: "Remote",
      description: "Research current education policies and help develop evidence-based reform proposals.",
      requirements: [
        "Background in education, policy, or related field",
        "Strong research and writing skills",
        "Passion for education reform"
      ],
      badge: "Research"
    },
    {
      id: 2,
      title: "Student Outreach Coordinator",
      type: "Volunteer", 
      department: "Communications",
      timeCommitment: "3-6 hours/week",
      location: "Hybrid",
      description: "Engage with students across the UK to gather feedback and build support for education reform.",
      requirements: [
        "Strong communication skills",
        "Experience working with young people",
        "Social media proficiency"
      ],
      badge: "Outreach"
    },
    {
      id: 3,
      title: "Teacher Liaison Officer",
      type: "Volunteer",
      department: "Stakeholder Relations", 
      timeCommitment: "4-8 hours/week",
      location: "Remote",
      description: "Build relationships with teachers and education professionals to gather insights and support.",
      requirements: [
        "Teaching experience preferred",
        "Excellent interpersonal skills",
        "Understanding of current education challenges"
      ],
      badge: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join Our Movement
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be part of transforming education in the UK. We're building a team of passionate volunteers 
              to drive real change in our education system.
            </p>
          </div>

          {/* Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Positions Opening Soon</h3>
                <p className="text-blue-800">
                  We're finalizing our volunteer program structure and will be accepting applications 
                  in the coming weeks. Register your interest below to be notified when applications open.
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Positions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Upcoming Volunteer Opportunities
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingPositions.map((position) => (
                <Card key={position.id} className="h-full border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {position.badge}
                      </Badge>
                      <Badge variant="outline">
                        {position.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {position.department}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-700 mb-4 flex-1">
                      {position.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {position.timeCommitment}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {position.location}
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-lg border border-gray-200 p-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Register your interest now and we'll contact you as soon as applications open. 
              Together, we can transform education for the better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/get-involved')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Register Interest
              </Button>
              <Button 
                variant="outline"
                onClick={() => navigate('/learn-more')}
                className="px-8 py-3"
              >
                Learn More About MORS
              </Button>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <Button 
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positions;