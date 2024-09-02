import React from 'react';
import { Link } from 'react-router-dom';

const earlyYearsLevels = [
  { name: "Pre-primary 1 (PP1)", ageRange: "Ages 4-5 years" },
  { name: "Pre-primary 2 (PP2)", ageRange: "Ages 5-6 years" }
];

const EarlyYearsEducation = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Early Years Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {earlyYearsLevels.map((level, index) => (
          <button
            key={index}
            className="bg-white border-2 border-blue-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <span className="block text-lg font-semibold">{level.name}</span>
            <span className="block text-sm mt-2">{level.ageRange}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/Education-levels" className="text-blue-500 hover:underline">
          Back to Education Levels
        </Link>
      </div>
    </div>
  );
};

export default EarlyYearsEducation;