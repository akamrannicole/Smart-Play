import React from 'react';
import { Link } from 'react-router-dom';

const middleSchoolLevels = [
  { name: "Grade 4", ageRange: "Age 9-10 years", category: "Upper Primary" },
  { name: "Grade 5", ageRange: "Age 10-11 years", category: "Upper Primary" },
  { name: "Grade 6", ageRange: "Age 11-12 years", category: "Upper Primary" },
  { name: "Grade 7", ageRange: "Age 12-13 years", category: "Junior Secondary School (JSS)" },
  { name: "Grade 8", ageRange: "Age 13-14 years", category: "Junior Secondary School (JSS)" },
  { name: "Grade 9", ageRange: "Age 14-15 years", category: "Junior Secondary School (JSS)" }
];

const MiddleSchoolEducation = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Middle School Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {middleSchoolLevels.map((level, index) => (
          <button
            key={index}
            className="bg-white border-2 border-purple-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <span className="block text-lg font-semibold">{level.name}</span>
            <span className="block text-sm mt-2">{level.ageRange}</span>
            <span className="block text-xs mt-1 italic">{level.category}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/education-levels" className="text-purple-500 hover:underline">
          Back to Education Levels
        </Link>
      </div>
    </div>
  );
};

export default MiddleSchoolEducation;