import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Mail } from 'lucide-react';

const Positions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us transform education in the UK. We're building our volunteer program and will announce specific opportunities soon.
            </p>
          </div>

          {/* Main Notice */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-blue-900">Volunteer Program in Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-800 text-base">
                We're currently finalizing our volunteer program structure and specific role descriptions. 
                Our team is working to create meaningful opportunities that will make a real impact in education reform.
              </CardDescription>
            </CardContent>
          </Card>

          {/* What We're Looking For */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-gray-900">What We're Looking For</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>We're seeking passionate individuals who share our vision for education reform, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Education professionals (teachers, administrators, researchers)</li>
                  <li>Students who want to advocate for change</li>
                  <li>Parents concerned about the current education system</li>
                  <li>Policy experts and researchers</li>
                  <li>Communications and outreach specialists</li>
                  <li>Anyone passionate about improving education</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-lg border border-gray-200 p-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Register Your Interest
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Be the first to know when volunteer opportunities become available. 
              We'll contact you with details about how you can contribute to our mission.
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
                Learn About Our Mission
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <Mail className="h-4 w-4" />
              <span>Questions? Contact us at info@mors.org.uk</span>
            </div>
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