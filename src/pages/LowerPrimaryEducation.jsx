import React from 'react';
import { Link } from 'react-router-dom';

const lowerPrimaryLevels = [
  { name: "Grade 1", ageRange: "Age 6-7 years" },
  { name: "Grade 2", ageRange: "Age 7-8 years" },
  { name: "Grade 3", ageRange: "Age 8-9 years" }
];

const LowerPrimaryEducation = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Lower Primary Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {lowerPrimaryLevels.map((level, index) => (
          <button
            key={index}
            className="bg-white border-2 border-green-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <span className="block text-lg font-semibold">{level.name}</span>
            <span className="block text-sm mt-2">{level.ageRange}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/education-levels" className="text-green-500 hover:underline">
          Back to Education Levels
        </Link>
      </div>
    </div>
  );
};

export default LowerPrimaryEducation;