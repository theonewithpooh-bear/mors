import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AlertCircle } from 'lucide-react';

const Positions = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Open Positions</h1>
        
        {/* Eligibility Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">Eligibility & Important Notice</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>All positions are <span className="font-semibold text-yellow-500">unpaid volunteer roles</span></li>
                <li>Must be in Year 10 or Year 11 (Exceptions: Year 12-13 students may apply)</li>
                <li>University students may apply but are not preferred</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Managerial Roles */}
        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Managerial Roles</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">National Director for Wales</h3>
              <p className="text-gray-300 mb-2">Positions Available: 1</p>
              <p className="text-gray-300 mb-4">Oversee activities of Regional Directors in Wales, manage relationships with schools and local governments.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Must reside in Wales</li>
                  <li>Strong leadership, organisational, and communication skills</li>
                  <li>Passion for education reform</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Regional Directors</h3>
              <p className="text-gray-300 mb-2">Positions Available: 12 (9 for England, 3 for Wales)</p>
              <p className="text-gray-300 mb-4">Build and maintain relationships with schools and local authorities in your assigned region.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Must reside in the region you are applying to oversee</li>
                  <li>Excellent interpersonal and organisational skills</li>
                  <li>Ability to manage local teams and work independently</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Board Members</h3>
              <p className="text-gray-300 mb-2">Positions Available: Varies</p>
              <p className="text-gray-300 mb-4">Join the MORS Board of Directors to provide governance and strategic oversight.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Expertise in education, governance, finance, or public relations</li>
                  <li>Proven track record of leadership or advocacy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Non-Managerial Roles */}
        <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-blue-400">Non-Managerial Roles</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Youth Advisory Panel Members (YAPM)</h3>
              <p className="text-gray-300 mb-2">Positions Available: 12 (including 5 focused on survey and research)</p>
              <p className="text-gray-300 mb-4">Provide valuable feedback and insights to shape MORS's initiatives.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Strong communication and analytical skills</li>
                  <li>Interest in contributing to education reform</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Social Media Representatives</h3>
              <p className="text-gray-300 mb-2">Positions Available: 2</p>
              <p className="text-gray-300 mb-4">Manage MORS's online presence across various platforms.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Experience with Instagram, Twitter, and TikTok</li>
                  <li>Creative skills in digital storytelling and content creation</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Content Creators</h3>
              <p className="text-gray-300 mb-2">Positions Available: 2</p>
              <p className="text-gray-300 mb-4">Develop written and multimedia content for MORS campaigns.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Strong writing and/or multimedia production skills</li>
                  <li>Ability to collaborate with other teams and meet deadlines</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Graphics and Design Volunteers</h3>
              <p className="text-gray-300 mb-2">Positions Available: 10</p>
              <p className="text-gray-300 mb-4">Create visually compelling assets for MORS campaigns.</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Proficiency in graphic design tools (e.g., Canva, Adobe Photoshop)</li>
                  <li>Strong attention to detail and visual aesthetics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Positions;