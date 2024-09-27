import React from "react";
import besttreatment from "../../assets/home/besttreatment.jpg";
const BestTreatmentSteps = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-4xl font-semibold my-5 pb-1 bg-gradient-to-r from-[#17469e] to-[#e53e13] inline-block text-transparent bg-clip-text ">
        4 Easy Steps to Get the World's Best Treatment
      </h1>

      {/* Steps Container */}
      <div>
        <img src={besttreatment} />
      </div>
    </div>
  );
};

export default BestTreatmentSteps;
