import React from 'react';
import { motion } from 'framer-motion';

const StatisticsSection = () => {
  return (
    <div className="mb-16">
      <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-center">shocking state of UK education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">58%</h3>
            <p className="text-gray-300">
              <span className="font-bold">371,884 UK teachers</span> warn: our education system is failing to prepare students for their future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">49%</h3>
            <p className="text-gray-300">
              <span className="font-bold">314,178 teachers</span> declare GCSEs obsolete and unfit for purpose
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[5rem] md:text-[6rem] font-black text-white mb-2 leading-none">80%</h3>
            <p className="text-gray-300">
              <span className="font-bold">512,944 educators</span> demand urgent digital skills & AI curriculum reform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col items-center justify-center text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-[4.5rem] md:text-[5.5rem] font-black text-white mb-2 leading-none">Trapped</h3>
            </div>
            <p className="text-gray-300">
              According to The Times Education Commission, teachers in the UK are trapped by an outdated curriculum, limiting their ability to foster creativity and practical skills
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold mb-8 text-center">the future of work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-white/20 transition-colors"
          >
            <h3 className="text-4xl font-bold text-white mb-2">70%</h3>
            <p className="text-gray-400">of employers value skills over degrees</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-white/20 transition-colors"
          >
            <h3 className="text-4xl font-bold text-white mb-2">85%</h3>
            <p className="text-gray-400">of jobs in 2030 don't exist yet</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:border-white/20 transition-colors"
          >
            <h3 className="text-4xl font-bold text-white mb-2">92%</h3>
            <p className="text-gray-400">of students want practical education</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
