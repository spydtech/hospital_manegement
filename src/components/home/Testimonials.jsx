// import React, { useState } from "react";
// import professional from "../../assets/home/professionals/professional1.jpg";
// import { PiLessThan } from "react-icons/pi";
// import { PiGreaterThan } from "react-icons/pi";
// const testimonials = [
//   {
//     name: "Sara Ali Khan",
//     role: "Cardiologist Patient",
//     rating: 5,
//     image: professional,
//     feedback: "Thanks for all the services, no doubt it is the best hospital.",
//   },
//   {
//     name: "Simon Targett",
//     role: "Neurologist Patient",
//     rating: 5,
//     image: professional,
//     feedback: "Thanks for all the services, no doubt it is the best hospital.",
//   },
//   {
//     name: "Sara Ali Khan",
//     role: "Cardiologist Patient",
//     rating: 5,
//     image: professional,
//     feedback: "Thanks for all the services, no doubt it is the best hospital.",
//   },
//   {
//     name: "John Doe",
//     role: "Orthopedic Patient",
//     rating: 5,
//     image: professional,
//     feedback: "The best care I have ever received, very professional.",
//   },
//   {
//     name: "Jane Smith",
//     role: "Pediatric Patient",
//     rating: 4,
//     image: professional,
//     feedback: "Friendly staff, excellent services. Highly recommended!",
//   },
//   {
//     name: "Ali Zafar",
//     role: "Neurologist Patient",
//     rating: 5,
//     image: professional,
//     feedback: "This is the place to go for exceptional medical care.",
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Number of visible cards
//   const visibleCards = 3;

//   // Calculate the maximum index for the carousel (last set of 3 cards)
//   const maxIndex = testimonials.length - visibleCards;

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-3xl font-bold mb-8 pb-1 text-transparent bg-clip-text bg-gradient-to-r to-[#17469e] from-[#e53e13]">
//         What Our Patients Say About Our Medical Treatments
//       </h2>

//       <div className="relative w-full max-w-6xl mx-auto">
//         <div className="overflow-hidden flex items-center justify-between relative">
//           {/* Left Arrow */}
//           <button
//             className={`absolute left-0 z-10 bg-blue-600 rounded-full p-3 text-white focus:outline-none ${
//               currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={prevSlide}
//             disabled={currentIndex === 0}
//           >
//             <PiLessThan />
//           </button>

//           {/* Cards Container */}
//           <div
//             className="flex space-x-6 justify-center py-1 transition-all duration-300"
//             style={{
//               transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
//             }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="w-96 flex-shrink-0 p-6  rounded-lg shadow-lg"
//               >
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-16 h-16 rounded-full overflow-hidden">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-xl">{testimonial.name}</h3>
//                     <p className="text-sm text-gray-500">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center mb-4 pl-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-[#e53e13]">
//                       &#9733;
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-gray-600">{testimonial.feedback}</p>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             className={`absolute right-0 z-10 bg-blue-600 rounded-full p-3 text-white focus:outline-none ${
//               currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={nextSlide}
//             disabled={currentIndex >= maxIndex}
//           >
//             <PiGreaterThan />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React, { useState } from "react";
import professional from "../../assets/home/professionals/professional1.jpg";
import { PiLessThan } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";

const testimonials = [
  {
    name: "Sara Ali Khan",
    role: "Cardiologist Patient",
    rating: 5,
    image: professional,
    feedback:
      "The doctors and nurses provided me with incredible care during my treatment. I’m truly grateful.",
  },
  {
    name: "Simon Targett",
    role: "Neurologist Patient",
    rating: 5,
    image: professional,
    feedback:
      "The level of expertise and kindness shown by the staff made my recovery smooth and stress-free.",
  },
  {
    name: "Sara Ali Khan",
    role: "Cardiologist Patient",
    rating: 5,
    image: professional,
    feedback:
      "The team was always there to answer my concerns and made me feel reassured throughout my stay.",
  },
  {
    name: "John Doe",
    role: "Orthopedic Patient",
    rating: 5,
    image: professional,
    feedback:
      "I was amazed by the professionalism and thoroughness of the orthopedic department. Highly recommended.",
  },
  {
    name: "Jane Smith",
    role: "Pediatric Patient",
    rating: 4,
    image: professional,
    feedback:
      "From the welcoming environment to the gentle care, my child felt safe and well looked after here.",
  },
  {
    name: "Ali Zafar",
    role: "Neurologist Patient",
    rating: 5,
    image: professional,
    feedback:
      "Exceptional care from start to finish. The medical team is outstanding in every way.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of visible cards
  const visibleCards = 3;

  // Calculate the maximum index for the carousel (ensures that the last card is fully visible)
  const maxIndex = testimonials.length - visibleCards;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8 pb-1 text-transparent bg-clip-text bg-gradient-to-r to-[#17469e] from-[#e53e13]">
        What Our Patients Say About Our Medical Treatments
      </h2>

      <div className="relative    max-w-6xl mx-auto">
        <div className="overflow-hidden flex items-center justify-between relative">
          {/* Left Arrow */}
          <button
            className={`absolute left-0 z-10 bg-blue-600 rounded-full p-3 text-white focus:outline-none ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <PiLessThan />
          </button>

          {/* Cards Container */}
          <div
            className="flex space-x-6 pl-1 justify-center pb-1 transition-all duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[365px] flex-shrink-0 p-6  rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 pl-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#e53e13]">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.feedback}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={`absolute right-0 z-10 bg-blue-600 rounded-full p-3 text-white focus:outline-none ${
              currentIndex >= testimonials.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={nextSlide}
            disabled={currentIndex >= testimonials.length - 1}
          >
            <PiGreaterThan />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
