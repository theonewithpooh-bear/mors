
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Lightbulb, Users, BookOpen, Target, Shield } from 'lucide-react';

const AI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <Brain className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI in Education
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Exploring the transformative potential of artificial intelligence in modern education
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6">The Future of Learning</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Artificial Intelligence is revolutionizing education by personalizing learning experiences, 
                enhancing teacher capabilities, and making quality education more accessible to everyone.
              </p>
            </motion.div>

            {/* Key Areas */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Personalized Learning</h3>
                <p className="text-gray-600">
                  AI adapts to individual learning styles and paces, providing customized content 
                  and feedback to help every student reach their full potential.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <Users className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Teacher Enhancement</h3>
                <p className="text-gray-600">
                  AI tools assist educators with grading, lesson planning, and identifying 
                  students who need additional support, freeing up time for meaningful interaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Accessible Education</h3>
                <p className="text-gray-600">
                  AI breaks down barriers by providing instant language translation, 
                  accessibility features, and 24/7 learning support for all students.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <Target className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Skills Assessment</h3>
                <p className="text-gray-600">
                  Advanced analytics provide real-time insights into learning progress, 
                  helping identify strengths and areas for improvement.
                </p>
              </motion.div>
            </div>

            {/* Ethics Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Ethical AI in Education</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                As we embrace AI in education, we must prioritize:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Student privacy and data protection</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Transparency in AI decision-making processes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Equity and inclusion in AI-powered education tools</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Maintaining human connection in the learning process</span>
                </li>
              </ul>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center bg-blue-600 text-white p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
              <p className="text-lg mb-6">
                Help shape the future of AI in education. Share your thoughts and experiences.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Involved
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AI;
