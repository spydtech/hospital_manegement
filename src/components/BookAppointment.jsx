import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'; // Ensure you import useNavigate
import Navbar from './home/Navbar';

const BookAppointment = () => {
  const [patientName, setPatientName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log('Patient Name:', patientName);
    console.log('Selected Doctor:', selectedDoctor);
    console.log('Selected Date:', selectedDate);
    handleButton(); // Call handleButton after form submission
  };

  const handleButton = () => {
    alert("Congratulations! Your appointment has been booked.");
    navigate("/"); // Use navigate instead of navigator
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-gradient-to-b from-[#17469E] to-[#E63E13] p-8 shadow-lg max-w-[700px] w-full relative">
          <RxCross1 className='absolute text-[30px] top-4 right-4 cursor-pointer bg-white p-2 rounded-full' />
          <h2 className="text-3xl text-white font-serif mb-6 text-center">Book an Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4 px-12">
            <div>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full mx-auto text-white px-4 py-4 placeholder:text-white border border-gray-400 bg-opacity-30 mb-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder="Patient Name"
                required
              />
            </div>
            <div>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full mx-auto text-white px-4 py-4 placeholder:text-white border border-gray-400 bg-opacity-30 mb-2 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              >
                <option value="" className='text-black'>-- Select a Doctor --</option>
                <option value="Dr. Smith" className='text-black'>Dr. Smith</option>
                <option value="Dr. Johnson" className='text-black'>Dr. Johnson</option>
                <option value="Dr. Brown" className='text-black'>Dr. Brown</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full mx-auto text-white px-4 py-4 placeholder:text-white border border-gray-400 bg-opacity-30 mb-4 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full mx-auto text-[#E63E13] font-serif text-[20px] px-4 py-4 placeholder:text-white bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default BookAppointment;
