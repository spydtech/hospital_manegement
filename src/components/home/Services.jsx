import React from "react";
import neurology from "../../assets/home/improveYourHealth/Neurology.jpg";
import ophthalmology from "../../assets/home/improveYourHealth/opthamology.jpg";
import orthopedics from "../../assets/home/improveYourHealth/orthopedics.jpg";
import cardiology from "../../assets/home/improveYourHealth/cardiology.jpg";
import pulmonology from "../../assets/home/improveYourHealth/pulmonology.jpg";
import dental from "../../assets/home/improveYourHealth/dental.jpg";
import medicine from "../../assets/home/improveYourHealth/medicine.jpg";
import ambulance from "../../assets/home/improveYourHealth/ambulance.jpg";
const services = [
  {
    title: "Neurology",
    description:
      "Expert care for brain health, neurological disorders, and related treatments. Offering advanced diagnostics and therapies.",
    image: neurology, // Replace with the actual image path
  },
  {
    title: "Ophthalmology",
    description:
      "Specialized eye care including comprehensive vision exams, surgeries, and corrective treatments for various conditions.",
    image: ophthalmology,
  },
  {
    title: "Orthopedics",
    description:
      "Focused on musculoskeletal health, providing care for bones, joints, and ligament issues with expert surgical and non-surgical options.",
    image: orthopedics,
  },
  {
    title: "Cardiology",
    description:
      "Heart care specialists dedicated to diagnosing, treating, and managing cardiovascular diseases with cutting-edge technology and compassionate care.",
    image: cardiology,
  },
  {
    title: "Pulmonology",
    description:
      "Expert care for lung and respiratory health, offering diagnostics, treatments, and management for a variety of pulmonary conditions.",
    image: pulmonology,
  },
  {
    title: "Dental Care",
    description:
      "Comprehensive dental services, including preventive care, cleanings, surgeries, and restorative treatments for a healthy smile.",
    image: dental,
  },
  {
    title: "Medicine",
    description:
      "Providing general medical services that address a broad range of health concerns, from routine check-ups to complex illnesses.",
    image: medicine,
  },
  {
    title: "Ambulance",
    description:
      "Emergency medical services offering rapid response and critical care transportation for life-threatening conditions.",
    image: ambulance,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto  py-8">
      <div className="flex justify-center items-center">
        <span className="text-center bg-gradient-to-r inline-block to-[#17469e] from-[#e53e13] text-transparent bg-clip-text  text-3xl font-bold text-gradient mb-8">
          We Offer Different Services To Improve Your Health
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-2 lg:px-4  gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg w-auto h-auto lg:h-96 lg:w-[320px] shadow-md overflow-hidden"
          >
            <img
              className="h-48 w-full object-cover"
              src={service.image}
              alt={service.title}
            />
            <div className="p-4">
              <span className="text-lg font-bold bg-gradient-to-r from-[#17469e] to-[#e53e13] text-transparent bg-clip-text ">
                {service.title}
              </span>
              <p className="text-lg pt-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
