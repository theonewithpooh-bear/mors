import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Positions = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Open Positions</h1>
        <div className="space-y-8">
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Currently Available Roles</h2>
            <p className="text-gray-300 mb-6">
              We're looking for passionate individuals to join our mission of reforming education.
              While we're a volunteer-based organization, these positions offer valuable experience
              and the opportunity to make real change in education.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Content Writers</h3>
                <p className="text-gray-300 mb-4">
                  Help us create compelling content about educational reform and our initiatives.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Write articles about educational issues</li>
                  <li>Create social media content</li>
                  <li>Develop educational resources</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Social Media Managers</h3>
                <p className="text-gray-300 mb-4">
                  Help us grow our online presence and engage with our community.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Manage social media accounts</li>
                  <li>Create engaging content</li>
                  <li>Interact with followers and supporters</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Research Volunteers</h3>
                <p className="text-gray-300 mb-4">
                  Help us gather and analyze data about educational systems and reform initiatives.
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Conduct research on educational topics</li>
                  <li>Analyze education policies</li>
                  <li>Compile reports and presentations</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Positions;