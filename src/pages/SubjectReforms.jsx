import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const gcseSubjects = [
  "Mathematics", "English Language", "English Literature", "Combined Science",
  "Art and Design", "Business Studies", "Computer Science", "Dance",
  "Design and Technology", "Drama", "Economics", "Engineering",
  "Food Preparation and Nutrition", "French", "Geography", "German",
  "History", "Latin", "Media Studies", "Music", "Physical Education",
  "Psychology", "Religious Studies", "Sociology", "Spanish", "Statistics",
  "Astronomy", "Film Studies", "Geology"
];

const aLevelSubjects = [
  "Maths", "Further Maths", "Biology", "Chemistry", "Physics",
  "English Literature", "History", "Geography", "Economics",
  "Business Studies", "Psychology", "Sociology", "Politics",
  "Philosophy", "French", "Spanish", "German", "Art and Design",
  "Computer Science", "Drama and Theatre", "Music", "Physical Education"
];

const SubjectReforms = () => {
  const [isALevel, setIsALevel] = useState(false);
  const subjects = isALevel ? aLevelSubjects : gcseSubjects;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Subject Reforms</h1>
        
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Label htmlFor="level-switch">GCSE</Label>
          <Switch
            id="level-switch"
            checked={isALevel}
            onCheckedChange={setIsALevel}
          />
          <Label htmlFor="level-switch">A-Level</Label>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isALevel ? "A-Level" : "GCSE"} Subjects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{subject}</h3>
              <Button variant="outline" className="w-full">
                View Reforms
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectReforms;