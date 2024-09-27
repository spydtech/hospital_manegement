import React, { useState } from "react";
import professional1 from "../../assets/home/professionals/professional1.jpg";
import professional2 from "../../assets/home/professionals/professional2.jpg";
import professional3 from "../../assets/home/professionals/professional3.jpg";
import professional4 from "../../assets/home/professionals/professional4.jpg";
import professional5 from "../../assets/home/professionals/professional5.jpg";

// Extended doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Robert Henry",
    specialty: "Cardiologist",
    imgSrc: professional2,
  },
  {
    id: 2,
    name: "Dr. Susan Richards",
    specialty: "Neurologist",
    imgSrc: professional1,
  },
  {
    id: 3,
    name: "Dr. Emily James",
    specialty: "Dermatologist",
    imgSrc: professional5,
  },
  {
    id: 4,
    name: "Dr. Don Lee",
    specialty: "Pediatrician",
    imgSrc: professional3,
  },
  {
    id: 5,
    name: "Dr. Mark Oliver",
    specialty: "Surgeon",
    imgSrc: professional4,
  },
];

const HealthCareProfessionals = () => {
  const [startIndex, setStartIndex] = useState(0); // Start index of visible cards
  const visibleCards = 3; // Number of cards visible at a time

  // Calculate the cards to display based on the start index
  const displayedDoctors = () => {
    let doctorsToDisplay = [];

    // Ensure exactly 3 doctors are displayed, wrapping around if necessary
    for (let i = 0; i < visibleCards; i++) {
      doctorsToDisplay.push(doctors[(startIndex + i) % doctors.length]);
    }

    return doctorsToDisplay;
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#17469e] from-[#e53e13] mb-8 text-center">
        We are Experienced Healthcare Professionals
      </span>

      {/* Slider container */}
      <div className="flex justify-center my-4">
        <div className="flex space-x-6">
          {displayedDoctors().map((doctor, index) => (
            <div
              key={doctor.id}
              className={`transform transition-transform duration-300 ${
                index === 1 ? "scale-110" : "scale-90"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={doctor.imgSrc}
                  alt={doctor.name}
                  className="w-64 h-64 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-blue-700 mt-4">
                  {doctor.name}
                </h3>
                <p className="text-red-500">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows at the bottom-right of the screen */}
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <button
          className="text-4xl text-red-500 p-2 bg-white rounded-full shadow-lg"
          onClick={handlePrev}
        >
          &#x2190;
        </button>
        <button
          className="text-4xl text-red-500 p-2 bg-white rounded-full shadow-lg"
          onClick={handleNext}
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default HealthCareProfessionals;
