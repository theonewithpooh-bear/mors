import { motion } from 'framer-motion';

const SubjectCard = ({ subject, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow cursor-pointer flex items-center"
    onClick={() => onClick(subject.name)}
  >
    <div className="mr-3 text-gray-400">
      {subject.icon && <subject.icon className="w-5 h-5" />}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-1 text-white">{subject.name}</h3>
      <p className="text-sm text-gray-400">
        Click to view reforms
      </p>
    </div>
  </motion.div>
);

export default SubjectCard;