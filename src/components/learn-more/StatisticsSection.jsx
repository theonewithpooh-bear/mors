import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ value, description, source, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="modern-card p-8 accent-border-left flex flex-col items-center justify-center text-center"
  >
    <h3 className="text-5xl md:text-6xl font-bold text-foreground mb-3 leading-none tracking-tight">{value}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    {source && <p className="text-xs text-muted-foreground/60 mt-3 italic">{source}</p>}
  </motion.div>
);

const StatisticsSection = () => {
  return (
    <div className="mb-20 space-y-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">shocking state of UK education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <StatCard value="58%" description="58% of teachers say the current system is failing to prepare students for a digital future." source="Source: Microsoft UK, 2019" delay={0.1} />
          <StatCard value="49%" description="49% of teachers in England say GCSEs are out-of-date and no longer fit for purpose." source="Source: OCR, 2024" delay={0.2} />
          <StatCard value="80%" description="80% of teachers support adding more digital and AI skills to the curriculum." source="Source: OCR, 2024" delay={0.3} />
          <StatCard value="Trapped" description="The Times Education Commission reveals: UK teachers are shackled by outdated curricula, stifling creativity and real-world skills" delay={0.4} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-foreground">the future of work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StatCard value="70%" description="Over 70% of employers now prioritise skills over degrees when hiring." source="Source: LinkedIn/World Economic Forum, 2025" delay={0} />
          <StatCard value="85%" description="Experts predict 85% of the jobs that will exist in 2030 haven't been invented yet." source="Source: Dell Technologies & Institute for the Future, 2017" delay={0.1} />
          <StatCard value="92%" description="92% of students say they want education to include practical, real-world experience." source="Source: NCUB Student Employability Index, 2014" delay={0.2} />
        </div>
      </motion.div>
    </div>
  );
};

export default StatisticsSection;
