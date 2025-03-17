
import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ActionCard from "@/components/get-involved/ActionCard";
import ShareDropdown from "@/components/get-involved/ShareDropdown";

const GetInvolved = () => {
  const { toast } = useToast();

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
                <ActionCard 
                  title="become a volunteer"
                  description="contribute your skills and expertise to our various initiatives and working groups."
                  buttonText="apply now"
                  buttonLink="/positions"
                />

                <ActionCard 
                  title="spread the word"
                  description="share our mission with your network and help us grow the movement."
                >
                  <ShareDropdown toast={toast} />
                </ActionCard>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default GetInvolved;
