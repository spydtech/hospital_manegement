import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom"
import img from "../../../assets/img.png"
import Navbar from '../../home/Navbar';
const FacilityManagement = () => {
  const facilitybuttonData = [
    { label: 'Healthcare Service Unit Type', path: '/healthcare-service-unit-type' },
    { label: 'Healthcare Service Unit', path: '/healthcare-service-unit' },
    { label: 'Medical Code Standard', path: '/medical-code-standard' },
    { label: 'Medical Code', path: '/medical-code' },

  ];
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-start max-w-7xl items-center py-10">
        {/* Heading */}
        <div className="flex justify-start items-start gap-4">
          <div>
            <img src={img} alt="Facility Management" className='mt-2' /> {/* Added alt attribute for accessibility */}
          </div>
          <div>
            <h1 className="text-4xl lg:w-full lg:max-w-[940px] mb-8">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]">
                Facility Management
              </span>
            </h1>
          </div>
        </div>


        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilitybuttonData.map((button, index) => (
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
    </>
  )
}

export default FacilityManagement
