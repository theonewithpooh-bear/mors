import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Articles = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-b-2 border-gray-200 mb-12 pb-6">
            <h1 className="font-serif text-5xl text-center mb-4">The Daily Reform</h1>
            <p className="text-center text-gray-400">Archive of Publications</p>
          </div>

          <div className="space-y-12">
            {/* Featured Article */}
            <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="mb-4">
                <span className="text-sm text-gray-400">Volume 1, Issue 1 - Education Reform Special Edition</span>
              </div>
              
              <h2 className="font-serif text-3xl mb-4">
                <Link 
                  to="/learn-more#founder-speech" 
                  className="hover:text-gray-300 transition-colors"
                >
                  The Case Against GCSEs
                </Link>
              </h2>
              
              <div className="flex items-center text-sm text-gray-400 mb-6">
                <span>By Monty Middleton-Burn</span>
                <span className="mx-2">|</span>
                <span>Founder, MORS</span>
              </div>
              
              <p className="text-gray-300 mb-6 line-clamp-3">
                I have noticed, through my studying of my GCSEs, that they are seriously flawed. The current system demands an unrealistic memorization of vast amounts of information across multiple subjects...
              </p>
              
              <Link 
                to="/learn-more#founder-speech"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Read full article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </article>

            {/* Placeholder for future articles */}
            <div className="text-center py-8 text-gray-400">
              More articles coming soon...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;