import React from 'react';
import { Link } from 'react-router-dom';

const seniorSchoolLevels = [
  { name: "Grade 10", ageRange: "Age 15-16 years" },
  { name: "Grade 11", ageRange: "Age 16-17 years" },
  { name: "Grade 12", ageRange: "Age 17-18 years" }
];

const specializations = [
  "Arts and Sports Science",
  "Social Sciences",
  "STEM (Science, Technology, Engineering, and Mathematics)",
  "Applied Sciences",
  "Technical and Vocational Education and Training (TVET)"
];

const SeniorSchoolEducation = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Senior School Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        {seniorSchoolLevels.map((level, index) => (
          <button
            key={index}
            className="bg-white border-2 border-blue-500 rounded-lg p-4 text-center transition-all duration-200 hover:scale-105 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <span className="block text-lg font-semibold">{level.name}</span>
            <span className="block text-sm mt-2">{level.ageRange}</span>
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Specializations</h2>
        <ul className="list-disc list-inside space-y-2">
          {specializations.map((specialization, index) => (
            <li key={index} className="text-lg">{specialization}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Education Levels
        </Link>
      </div>
    </div>
  );
};

export default SeniorSchoolEducation;