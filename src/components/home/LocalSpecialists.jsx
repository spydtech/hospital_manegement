import React from "react";
import doctor from "../../assets/home/doctor.png";
import { FaSearch } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { Link } from "react-router-dom";
const LocalSpecialists = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around bg-white py-12 pb-24">
      {/* Left Section: Text Content */}
      <div className="max-w-xl p-4  lg:mr-8 ">
        <h1 className="text-5xl font-bold text-[#17469e] mb-4">
          Find Local Specialists <br />
          <span className="text-[#e53e13]">Best Services</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Our medical clinic provides quality care for the entire family while
          maintaining a personable atmosphere best services.
        </p>
        <Link to = "/bookappointment">
        
        <button className="bg-gradient-to-r from-[#17469e] to-[#e53e13] text-white py-4 px-6 rounded-lg text-lg flex items-center">
          Book an Appointment
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
        </Link>
      </div>

      {/* Right Section: Image and Info Bubbles */}
      <div className="relative flex  items-center justify-center lg:mr-20 mt-24 lg:mt-16 ">
        {/* Circular Background */}
        <div className="w-96 h-96 rounded-full bg-[#17469e] m-2 flex items-center justify-center">
          <div className="p-4 bg-white  rounded-full">
            <div className="w-80 h-80 rounded-full bg-gradient-to-t to-[#f3ecea]   from-[#d36043] p-2 ">
              {/* Placeholder for Image */}
              <img
                src={doctor} // Replace with actual image source
                alt="Doctor"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Top Bubble: Qualified Doctors */}
        <div className="absolute top-8 left-[-100px] bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-2">
          <div className="bg-red-500 text-white p-2 rounded-full">
            <FaSearch />
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold">
              Well Qualified Doctors
            </h3>
            <p className="text-gray-500 text-sm">Treat with care</p>
          </div>
        </div>

        {/* Right Bubble: Contact */}
        <div className="absolute top-8 right-[-50px] bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <IoCallOutline />
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold">Contact no</h3>
            <p className="text-gray-500 text-sm">+9715123871325</p>
          </div>
        </div>

        {/* Bottom Bubble: Book an Appointment */}
        <div className="absolute bottom-10 left-[-120px] bg-white shadow-lg rounded-2xl p-4 flex items-center space-x-2">
          <div className="bg-orange-500 text-white p-2 rounded-full">
            <TiDocumentText />
          </div>
          <div>
          
            
            <h3 className="text-gray-800 font-semibold">Book an appointment</h3>
           
        
         
            <p className="text-gray-500 text-sm">Online appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSpecialists;
