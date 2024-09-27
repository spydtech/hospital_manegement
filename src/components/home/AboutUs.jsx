import React from "react";
import aboutus from "../../assets/home/aboutus.png";
const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 md:p-12 ">
      {/* Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img
          src={aboutus}
          alt="Medical Team"
          className="w-auto h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#17469e] to-[#e53e13] inline-block text-transparent bg-clip-text ">
          About Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          HMS will teach physicians and nurses from around the world the
          principles of blood management, as well as how to manage their own
          blood conservation programs. The hospital was chosen based on the
          reputation its bloodless program has established in the medical
          community and because of its nationally recognized results.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We are a group of creative nerds making awesome stuff for Web and
          Mobile. We just love to contribute to open-source technologies. We
          always try to build something which helps developers to save their
          time, so they can spend a bit more time with their friends and family.
          Something which helps developers to save their time, so they can spend
          a bit more time with their friends and family.
        </p>

        {/* Button */}
        <button className="bg-gradient-to-r from-[#17469e] to-[#e53e13] text-white px-8 py-3 rounded-md text-lg hover:shadow-lg transition-shadow">
          View more
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
