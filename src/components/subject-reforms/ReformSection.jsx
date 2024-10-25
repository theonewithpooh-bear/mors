import SubjectCard from './SubjectCard';

const ReformSection = ({ title, subjects, onSubjectClick }) => (
  <div className="mt-12">
    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {subjects.map((subject, index) => (
        <SubjectCard 
          key={index}
          subject={subject}
          onClick={onSubjectClick}
        />
      ))}
    </div>
  </div>
);

export default ReformSection;