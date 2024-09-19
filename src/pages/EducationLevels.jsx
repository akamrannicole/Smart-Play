import React from 'react';
import { Link } from 'react-router-dom';

const educationLevels = [
  {
    title: "Early Years Education",
    image: "https://i.pinimg.com/474x/f3/4b/35/f34b3538f5b55c37425452f5a01f7602.jpg",
    slug: "early-years-education",
  },
  {
    title: "Lower Primary Education",
    image: "/placeholder.svg",
    slug: "lower-primary-education",
  },
  {
    title: "Middle School Education",
    image: "/placeholder.svg",
    slug: "middle-school-education",
  },
  {
    title: "Senior School Education",
    image: "/placeholder.svg",
    slug: "senior-school-education",
  },
  {
    title: "Tertiary and University Education",
    image: "/placeholder.svg",
    slug: "tertiary-and-university-education",
  }
];

const EducationLevelCard = ({ title, image, slug }) => (
  <Link to={`/education/${slug}`} className="block">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-xl font-semibold text-center px-4">{title}</h2>
        </div>
      </div>
    </div>
  </Link>
);

const EducationLevels = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Education Levels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationLevels.map((level, index) => (
          <EducationLevelCard key={index} title={level.title} image={level.image} slug={level.slug} />
        ))}
      </div>
    </div>
  );
};

export default EducationLevels;