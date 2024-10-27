import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Eye, Users, Brain } from 'lucide-react';

const Ethics = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            ethical principles
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            our commitment to maintaining the highest standards of integrity and transparency in educational reform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Scale className="h-8 w-8 mb-2 text-white" />
              <CardTitle className="text-white text-2xl">non-partisan commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                mors maintains a strictly non-partisan stance, working independently of any political party affiliations or ideological biases. our focus is solely on evidence-based educational reform that benefits all students.
              </p>
              <p>
                while we engage with political organizations across the spectrum, our commitment remains to educational improvement rather than political alignment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Eye className="h-8 w-8 mb-2 text-white" />
              <CardTitle className="text-white text-2xl">complete transparency</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                we believe in absolute transparency in all our operations. all our communications, including those with educational authorities and political entities, are made public through our open letters system.
              </p>
              <p className="mb-4">
                our funding sources, partnerships, and decision-making processes are openly documented and accessible to all stakeholders.
              </p>
              <p>
                however, mors reserves the right to its privacy in particular operations, and privacy of our donors, members, and staff. not all communications can be made public for <i>obvious</i> reasons.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-white" />
              <CardTitle className="text-white text-2xl">inclusive dialogue</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                we actively seek and value diverse perspectives from all stakeholders in education - students, teachers, parents, administrators, and policymakers.
              </p>
              <p>
                our reform proposals are developed through extensive consultation and collaborative dialogue, ensuring all voices are heard and considered.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Brain className="h-8 w-8 mb-2 text-white" />
              <CardTitle className="text-white text-2xl">evidence-based approach</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p className="mb-4">
                all our reform proposals are grounded in rigorous research and empirical evidence. we commit to regular evaluation and adjustment of our approaches based on outcomes and feedback.
              </p>
              <p>
                we maintain partnerships with educational researchers and institutions to ensure our proposals are supported by current academic understanding.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">our ethical framework</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              at mors, our ethical framework is built on four key pillars: non-partisan advocacy, transparency, inclusivity, and evidence-based decision-making. these principles guide every aspect of our operations and ensure we maintain the highest standards of integrity in our mission to reform education.
            </p>
            <p>
              we believe that meaningful educational reform can only be achieved through honest, open dialogue and collaboration across political and ideological boundaries. our commitment to these principles ensures that our work remains focused on what truly matters: improving educational outcomes for all students.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ethics;
