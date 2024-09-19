import React from 'react';
import { Link } from 'react-router-dom';

const tertiaryEducationLevels = [
  "Diploma Courses",
  "Technical and Vocational Education and Training (TVET) Courses",
  "Undergraduate Degrees",
  "Postgraduate Degrees (Master's, Ph.D.)"
];

const TertiaryEducation = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Tertiary and University Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tertiaryEducationLevels.map((level, index) => (
          <button
            key={index}
            className="bg-white border-2 border-green-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <span className="block text-lg font-semibold">{level}</span>
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

export default TertiaryEducation;