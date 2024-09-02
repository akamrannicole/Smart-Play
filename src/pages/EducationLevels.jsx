import React from 'react';
import { Card } from "@/components/ui/card";

const educationLevels = [
  {
    title: "Early Years Education",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Lower Primary Education",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Middle School Education",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Senior School Education",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Tertiary and University Education",
    image: "/placeholder.svg?height=200&width=300"
  }
];

const EducationLevelCard = ({ title, image }) => (
  <Card className="overflow-hidden">
    <div className="relative h-48">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-xl font-semibold text-center px-4">{title}</h2>
      </div>
    </div>
  </Card>
);

const EducationLevels = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Education Levels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationLevels.map((level, index) => (
          <EducationLevelCard key={index} title={level.title} image={level.image} />
        ))}
      </div>
    </div>
  );
};

export default EducationLevels;