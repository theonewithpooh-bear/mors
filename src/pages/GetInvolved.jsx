import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import ActionCard from "@/components/get-involved/ActionCard";
import ShareDropdown from "@/components/get-involved/ShareDropdown";
import SEOHead from "@/components/SEOHead";

const GetInvolved = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Get Involved - MORS | Join the Education Reform Movement"
        description="Join MORS and help revolutionize education in the UK. Register your interest, volunteer, or spread the word about our education reform movement."
        canonical="/get-involved"
      />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.article 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">get involved</h1>
          </header>
          
          <div className="space-y-12">
            <section className="prose max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                join the movement for real skills and help shape the future of education. there are many ways to get involved and make a difference:
              </p>
              
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <ActionCard 
                  title="register interest"
                  description="add your name to our volunteers waitlist and be notified when opportunities arise."
                  buttonText="apply now"
                  buttonLink="/typeform-volunteer"
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
        </motion.article>
      </main>
      <Toaster />
    </div>
  );
};

export default GetInvolved;
