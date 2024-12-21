import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ManifestoSection from '../components/manifesto/ManifestoSection';

const FileStore = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      <Header />
      
      {/* Title Section */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-7xl font-serif mb-2">mors</h1>
          <p className="text-3xl font-serif">a future for education</p>
          <p className="text-xl text-gray-400">manifesto</p>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <ManifestoSection
        title="Section One: Introduction & Vision"
        content={
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">What is MORS?</h3>
              <p className="text-lg text-gray-300">
                M.O.R.S. is an organisation founded by Monty Middleton-Burn, which aims to overhaul 
                the current outdated exam and education system in the UK, by advocating for change.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                MORS hopes to achieve this by acting as a central hub for all major supporters of 
                educational reform to speak from.
              </p>
              <p className="text-lg text-gray-300 mt-4">We are stronger as one.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Vision Statement</h3>
              <p className="text-lg text-gray-300">
                MORS is advocating for a future where British students are prepared for the real world 
                by being taught in a way that will equip them for working life.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                Studies have shown that the majority of information you gain during GCSEs is lost within a year.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                At MORS, we don't believe this is right. We believe that students deserve better, 
                the right to a better education—one that is actually worthwhile.
              </p>
              <p className="text-sm text-gray-500 italic mt-2">
                Source: Herman Ebbinghaus' "forgetting curve"
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Why Overhaul the System?</h3>
              <p className="text-lg text-gray-300">
                Exams, specifically GCSEs, do not measure your skills and only provide you with a qualification, 
                something that only 30% of employers value. The majority (70%) of employers much prefer staff with real skills.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                The education system needs to evolve in order to prevent getting even more stuck in the past than it already is.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                System overhaul is the only way to fix this gimmick, which has become, we feel, too mature to be reformed.
              </p>
              <p className="text-sm text-gray-500 italic mt-2">Source: PwC UK</p>
            </div>
          </div>
        }
      />

      {/* Problem with GCSEs Section */}
      <ManifestoSection
        title="Section Two: The Problem with GCSEs"
        content={
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Outdated Exam-Based Learning</h3>
              <p className="text-lg text-gray-300">
                GCSEs and A-levels, as well as other types of further education, demand for you to understand 
                and memorise an overwhelming amount of information, all for you to forget it all just a year 
                after leaving that exam hall.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                MORS sees this as an extreme flaw. If up to us, students would be given exams in a controlled 
                classroom environment, where you are able to communicate with classmates and use your resources 
                to complete the paper.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Narrow Skill Assessment</h3>
              <p className="text-lg text-gray-300">
                The current GCSE system has been developed to rigorously test your memorisation and exam 
                technique ability.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                At MORS, we don't dispute that memory retention is obsolete. We do, however, believe that 
                memorisation is far too excessive, and deprives the individual of the ability to truly grasp 
                each concept.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                MORS believes that we need to prepare students early on, with skills such as creative 
                problem-solving, teamwork, and practical knowledge.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Mental Health Impact</h3>
              <p className="text-lg text-gray-300">
                Not only are GCSEs lacking in their ability to prepare students for the real world, but they 
                are actively damaging over 50% of participants.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                A survey conducted by the Association of School and College Leaders (ASCL) in June 2024 revealed 
                that over 77% of secondary school teachers observed exam-related anxiety symptoms. Additionally, 
                58% of teachers reported that they have had concerns from parents about exam-related stress, 
                showing that this anxiety follows them home, becoming a noticeable burden.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                As well as this, 74% of teachers had to implement 'alternative arrangements' to support affected students.
              </p>
              <p className="text-sm text-gray-500 italic mt-2">
                Source: The Times Huge: number of GCSE pupils suffering from 'exam anxiety'
              </p>
            </div>
          </div>
        }
      />

      <ManifestoSection
        title="Section Ten: Call to Action"
        content={
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Join MORS' Movement</h3>
              <p className="text-lg text-gray-300">
                We can't do this alone. We need the support of the British people, and those in charge to make 
                this change happen.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                MORS is actively working to raise awareness against the issue.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                If you want to help, please visit mors.org.uk to register your interest. If you would like to 
                donate towards our cause, it would be very much appreciated! But what MORS need more than money, 
                is support.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                If you would like to get involved, please say so when you are registering your interest, and we 
                will endeavour to get back to you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">How You Can Help</h3>
              <p className="text-lg text-gray-300">You are the ones that will make this change happen.</p>
              <p className="text-lg text-gray-300">We need you all to chip in to make MORS' mission a reality.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li className="text-lg text-gray-300">Contacting your local MP</li>
                <li className="text-lg text-gray-300">Telling your friends and family</li>
                <li className="text-lg text-gray-300">Informing your teachers (or students)</li>
                <li className="text-lg text-gray-300">Asking your parents to contact us to volunteer</li>
                <li className="text-lg text-gray-300">Contacting MORS to offer your support.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Our Promise</h3>
              <p className="text-lg text-gray-300">
                MORS is committed to delivering this change. We promise to do our utmost to do our part in 
                ensuring the education system gets the TLC is so desperately needs.
              </p>
              <p className="text-lg text-gray-300 mt-4">This, I promise to you.</p>
            </div>
          </div>
        }
      />

      {/* Quote Section */}
      <ManifestoSection
        className="text-center"
        content={
          <>
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "Victory at all costs, victory in spite of all terror, victory however long and hard 
              the road may be; for without victory, there is no survival"
            </blockquote>
            <p className="text-gray-400">— Winston Churchill</p>
          </>
        }
      />

      {/* Signature Section */}
      <ManifestoSection
        className="text-center"
        content={
          <>
            <p className="text-xl mb-8">Signed,</p>
            <p className="text-2xl font-serif mb-2">Monty Middleton-Burn</p>
            <p className="text-lg text-gray-400">Founder & Director General, MORS</p>
          </>
        }
      />

      <Footer />
    </div>
  );
};

export default FileStore;