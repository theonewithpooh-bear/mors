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

              <p>This is not a radical statement — it is a consensus quietly held by thousands of teachers, students, parents, and even Department officials. The MORS movement, led by students and supported by educators across the UK, has now documented the deep failure of current assessments to cultivate real-world skills, critical thinking, or psychological well-being.</p>

              <p>The purpose of this open letter is not to complain. It is to <strong>offer a path forward</strong>.</p>

              <p>We are calling on the Department for Education to <strong>publicly engage with and review the Foundation Skills Certificate (FSC)</strong> — a modern, open-book, project-led, coursework-based alternative to GCSEs, structured by MORS after extensive consultation with teachers, employers, young people, and existing cognitive science research (including Hermann Ebbinghaus' forgetting curve and the findings of Ofqual and YoungMinds).</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What's wrong with GCSEs:</h2>
              <ul className="space-y-2 mb-6">
                <li>They assess <strong>short-term memory</strong>, not long-term understanding.</li>
                <li>They <strong>penalise creativity</strong>, adaptability, and deep thinking.</li>
                <li>They encourage <strong>rote learning under pressure</strong>, not knowledge that lasts.</li>
                <li>They <strong>disproportionately harm</strong> mental health, especially for neurodivergent pupils.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">What the FSC offers instead:</h2>
              <ul className="space-y-2 mb-6">
                <li>Real-life application of knowledge</li>
                <li>Open-book exams to mimic how the real world works</li>
                <li>Emphasis on collaboration, leadership, problem-solving, and media literacy</li>
                <li>Project-based learning with public showcases</li>
                <li>Classroom-led assessments, removing the need for high-pressure exam halls</li>
                <li>Teacher and student freedom — with <strong>national consistency</strong> through a centralised framework</li>
              </ul>

              <p><strong>MORS</strong> exists to give young people a voice in their own education.<br/>
              We have not simply protested. We have <em>built</em>. The Foundation Skills Certificate is ready to pilot. We invite the Department to meet with our leadership team, review the framework, and consider our offer to trial FSC across a small number of state schools in 2026.</p>

              <p>We are not asking you to endorse revolution.<br/>
              We are asking you to acknowledge evolution.</p>

              <p>The FSC does not replace rigour. It replaces <strong>outdated rituals</strong> with credible, flexible assessment.</p>

              <p>In the coming weeks, we will be releasing open letters every Thursday — to you, to other officials, to headteachers, to unions, to political parties. We will not stop until educational reform becomes more than a footnote in a press release. You'll find the full public record at <a href="https://mors.org.uk" className="text-blue-600 hover:text-blue-800 underline">mors.org.uk</a>.</p>

              <p>Please let your office respond to this letter, either publicly or privately.<br/>
              We are ready to talk — and to lead.</p>

              <div className="mt-8 pt-6 border-t border-black/10">
                <p><strong>Yours sincerely,</strong><br/>
                Monty Middleton-Burn<br/>
                Director General, MORS (Movement of Real Skills)<br/>
                <a href="https://www.mors.org.uk" className="text-blue-600 hover:text-blue-800 underline">www.mors.org.uk</a></p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OpenLetterDfE;