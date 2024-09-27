// import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { MdArrowOutward } from "react-icons/md";
const Master = () => {
  // Define button data dynamically
  const buttonData = [
    { label: 'Patient', path: '/patient' },
    { label: 'Healthcare Practitioner', path: '/HealthcarePractitioner' },
    { label: 'Practitioner Schedule', path: '/practitioner-schedule' },
    { label: 'Medical Department', path: '/medical-department' },
    // Add more buttons if needed
  ];

  return (
    <div className="min-h-screen flex flex-col justify-start max-w-7xl items-center py-10">
      {/* Heading */}
      <h1 className="text-4xl lg:w-full lg:max-w-[940px]   mb-8">
       <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]"> Masters</span>
      </h1>

      {/* Button Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buttonData.map((button, index) => (
          <Link
            key={index}
            to={button.path}
            className="bg-[#17469E] text-white py-4 px-8 lg:w-[458px] lg:h-[100px] flex justify-between items-center rounded-md shadow-lg "
          >
            <span>{button.label}</span>
            <MdArrowOutward size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Master;

