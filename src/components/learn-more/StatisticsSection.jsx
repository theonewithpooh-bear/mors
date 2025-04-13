
import React from 'react';
import { motion } from 'framer-motion';

const StatisticsSection = () => {
  return (
    <div className="mb-16">
      <div className="bg-red-500/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">shocking state of UK education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-md border border-red-500/10 hover:border-red-500/30 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-gray-800 mb-2 leading-none">58%</h3>
            <p className="text-gray-600">
              58% of teachers say the current system is failing to prepare students for a digital future.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: Microsoft UK, 2019</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-8 shadow-md border border-red-500/10 hover:border-red-500/30 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-gray-800 mb-2 leading-none">49%</h3>
            <p className="text-gray-600">
              49% of teachers in England say GCSEs are out-of-date and no longer fit for purpose.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: OCR, 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-md border border-red-500/10 hover:border-red-500/30 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-gray-800 mb-2 leading-none">80%</h3>
            <p className="text-gray-600">
              80% of teachers support adding more digital and AI skills to the curriculum.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: OCR, 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-md border border-red-500/10 hover:border-red-500/30 transition-colors flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-[4.5rem] md:text-[5.5rem] font-black text-gray-800 mb-2 leading-none">Trapped</h3>
            </div>
            <p className="text-gray-600">
              The Times Education Commission reveals: UK teachers are shackled by outdated curricula, stifling creativity and real-world skills
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">the future of work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-2">70%</h3>
            <p className="text-gray-600">Over 70% of employers now prioritise skills over degrees when hiring.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: LinkedIn/World Economic Forum, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-2">85%</h3>
            <p className="text-gray-600">Experts predict 85% of the jobs that will exist in 2030 haven't been invented yet.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: Dell Technologies & Institute for the Future, 2017</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-2">92%</h3>
            <p className="text-gray-600">92% of students say they want education to include practical, real-world experience.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Source: NCUB Student Employability Index, 2014</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
