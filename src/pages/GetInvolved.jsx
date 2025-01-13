import React from 'react';
import DonationForm from '../components/get-involved/DonationForm';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">get involved</h1>
          
          <div className="space-y-12">
            <section className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed">
                join the movement for real skills and help shape the future of education. there are many ways to get involved and make a difference:
              </p>
              
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">become a volunteer</h3>
                  <p className="text-gray-300 mb-4">
                    contribute your skills and expertise to our various initiatives and working groups.
                  </p>
                  <a 
                    href="/positions" 
                  >
                    <Button 
                      variant="outline" 
                      className="group text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                    >
                      apply now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">spread the word</h3>
                  <p className="text-gray-300 mb-4">
                    share our mission with your network and help us grow the movement.
                  </p>
                  <Button 
                    variant="outline" 
                    className="group text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border-white/20"
                    onClick={() => {
                      navigator.share({
                        title: 'Movement of Real Skills',
                        text: 'Join the movement for real skills and help shape the future of education.',
                        url: window.location.href,
                      }).catch(() => {
                        // Handle error or unsupported browsers
                      });
                    }}
                  >
                    share now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8">support our mission</h2>
              <DonationForm />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetInvolved;