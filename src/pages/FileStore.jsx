import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const FileStore = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-7xl font-serif mb-2">mors</h1>
            <p className="text-3xl font-serif">a future for education</p>
            <p className="text-xl text-gray-400">manifesto</p>
          </div>

          {/* Sections */}
          <div className="w-full space-y-16">
            {sections.map((section, index) => (
              <Card key={index} className="bg-black border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-4xl font-serif mb-8">{section.title}</h2>
                  <div className="space-y-6">
                    {section.content.map((content, idx) => (
                      <div key={idx} className="space-y-4">
                        {content.subtitle && (
                          <h3 className="text-2xl font-serif mb-4">{content.subtitle}</h3>
                        )}
                        {content.paragraphs.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-lg text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        {content.source && (
                          <p className="text-sm text-gray-500 italic mt-2">
                            Source: {content.source}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Signature Section */}
            <Card className="bg-black border-white/10">
              <CardContent className="p-8 text-center">
                <p className="text-xl mb-8">Signed,</p>
                <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
                <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const sections = [
  {
    title: "Section One: Introduction & Vision",
    content: [
      {
        subtitle: "What is MORS?",
        paragraphs: [
          "M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul the current outdated exam and education system in the UK, by advocating for change.",
          "MORS hopes to achieve this by acting as a central hub for all major supporters of educational reform to speak from.",
          "We are stronger as one."
        ]
      }
      // ... Additional content sections would be structured similarly
    ]
  }
  // ... Additional sections would be structured similarly
];

export default FileStore;