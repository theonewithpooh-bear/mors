import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OpenLetterDfE = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="pt-24 mb-8">
          <Link 
            to="/communications" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            back to communications
          </Link>
        </div>

        {/* Open Letter Content */}
        <main className="max-w-4xl mx-auto">
          <div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-8 lg:p-12 shadow-lg">
            <section className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-8 text-center">Open Letter to the Department for Education</h1>
              
              <div className="mb-8 space-y-2">
                <p><strong>To:</strong> The Rt Hon Gillian Keegan MP<br/>
                Secretary of State for Education<br/>
                Department for Education<br/>
                Sanctuary Buildings, Great Smith Street, London SW1P 3BT</p>

                <p><strong>Date:</strong> Thursday 25 July 2025</p>
                <p><strong>From:</strong> Monty Middleton-Burn, Director General of MORS</p>
                <p><strong>Subject:</strong> The Failure of GCSEs to Deliver Real Skills – and the Case for a National Transition to the Foundation Skills Certificate (FSC)</p>
              </div>

              <p><strong>Dear Secretary of State,</strong></p>

              <p className="text-xl leading-relaxed">The GCSE system is no longer fit for purpose.</p>

              <p>This is not a radical claim. It's a quiet reality recognised by thousands of teachers, students, and parents across the country — including many who feel powerless to act. I'm writing to offer an alternative.</p>

              <p>MORS — the Movement of Real Skills — is a youth-led initiative I've launched to begin reshaping our national approach to assessment. Though still in its early stages, MORS proposes the Foundation Skills Certificate (FSC): a modern, open-book, coursework-based alternative to GCSEs, grounded in long-term understanding, adaptability, and relevant life skills.</p>

              <div className="my-8 border-l-4 border-black/20 pl-6">
                <h2 className="text-2xl font-bold mt-8 mb-4">What's wrong with GCSEs:</h2>
                <ul className="space-y-2 mb-6">
                  <li>They assess <strong>short-term memory</strong>, not long-term understanding.</li>
                  <li>They <strong>penalise creativity</strong>, adaptability, and deep thinking.</li>
                  <li>They encourage <strong>rote learning under pressure</strong>, not knowledge that lasts.</li>
                  <li>They <strong>harm mental health</strong>, especially for neurodivergent students.</li>
                </ul>
              </div>

              <div className="my-8 border-l-4 border-black/20 pl-6">
                <h2 className="text-2xl font-bold mt-8 mb-4">What the FSC offers instead:</h2>
                <ul className="space-y-2 mb-6">
                  <li>Real-life application of knowledge</li>
                  <li>Open-book exams, like the real world</li>
                  <li>Emphasis on collaboration, leadership, and problem-solving</li>
                  <li>Project-based learning with meaningful outcomes</li>
                  <li>Classroom-based assessment — not pressure-cooker exam halls</li>
                  <li>Flexibility for teachers, consistency for the nation</li>
                </ul>
              </div>

              <p>The FSC is not a fantasy. It's a workable framework, shaped from student and teacher perspectives, informed by cognitive science (like Ebbinghaus' forgetting curve), and structured around real-life relevance. It's ready for discussion, consultation, and — one day — trial.</p>

              <p><strong>I'm not asking for revolution.<br/>
              I'm asking for evolution</strong> — and for the Department to meet with me, to review the early framework and explore how young people can be meaningfully involved in shaping what replaces a broken system.</p>

              <p>This is the first in a series of weekly open letters I'll be publishing — addressed to officials, educators, unions, and exam bodies — through <a href="https://mors.org.uk" className="text-blue-600 hover:text-blue-800 underline">mors.org.uk</a>. My aim is not to criticise for criticism's sake, but to build momentum toward change.</p>

              <p>I hope you or your team will respond — publicly or privately. I am ready to listen, learn, and lead.</p>

              <div className="mt-8 pt-6 border-t border-black/10">
                <p><strong>Yours sincerely,</strong><br/>
                Monty Middleton-Burn<br/>
                Founder, MORS (Movement of Real Skills)<br/>
                <a href="https://www.mors.org.uk" className="text-blue-600 hover:text-blue-800 underline">🌐 www.mors.org.uk</a></p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OpenLetterDfE;