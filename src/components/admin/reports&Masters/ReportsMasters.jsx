// // import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const ReportsMasters = () => {
//   const navigate = useNavigate(); // Initialize navigation

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       {/* Heading with Linear Gradient */}

//         <h1 className="text-4xl w-full max-w-[1220px] pb-8  pt-8 ">
//           <span className="font-bold   px-20 bg-clip-text text-transparent bg-gradient-to-r from-[#E53E13] to-[#17469E]">Reports & Masters</span>
//         </h1>

//       {/* Grid of Boxes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-16">
//         {/* Card Components with onClick */}
//         {[
//           { name: "Masters", path: "/masters" },
//           { name: "Consultation Setup", path: "/consultation-setup" },
//           { name: "Consultation", path: "/consultation" },
//           { name: "Facility Management", path: "/facility-management" },
//           { name: "Settings", path: "/settings" },
//           { name: "Inpatient", path: "/inpatient" },
//           { name: "Laboratory Setup", path: "/laboratory-setup" },
//           { name: "Laboratory", path: "/laboratory" },
//           { name: "Rehabilitation & Physiotherapy", path: "/rehabilitation" },
//           { name: "Nursing", path: "/nursing" },
//           { name: "Records and History", path: "/records-history" },
//           { name: "Reports", path: "/reports" },
//         ].map((item, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(item.path)} // Navigate to the respective path
//             className="bg-[#17469E] text-white text-lg font-semibold p-6  flex items-center justify-center h-[145px] lg:w-[3655px] xl:w-[330px]  hover:bg-[#153c80] transition"
//           >
//             {item.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReportsMasters;




// import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../home/Navbar";

const ReportsMasters = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <>
      <Navbar />
      <div className="max-h-[768px] flex flex-col items-center p-6 justify-center bg-gray-100">
      
        <h1 className="text-4xl w-full max-w-[1220px] pb-8 text-center ">
          <span className="font-bold  py-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E53E13] to-[#17469E]">Reports & Masters</span>
        </h1>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card Components with onClick */}
          {[
            { name: "Masters", path: "/masters" },
            { name: "Consultation Setup", path: "/consultation-setup" },
            { name: "Consultation", path: "/consultation" },
            { name: "Facility Management", path: "/facility-management" },
            { name: "Settings", path: "/settings" },
            { name: "Inpatient", path: "/inpatient" },
            { name: "Laboratory Setup", path: "/laboratory-setup" },
            { name: "Laboratory", path: "/laboratory" },
            { name: "Rehabilitation & Physiotherapy", path: "/rehabilitation" },
            { name: "Nursing", path: "/nursing" },
            { name: "Records and History", path: "/records-history" },
            { name: "Reports", path: "/reports" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)} // Navigate to the respective path
              className="bg-[#17469E] text-white text-lg font-semibold p-4  flex items-center justify-center h-[125px] lg:w-[325px] xl:w-[390px]  hover:bg-[#153c80] transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReportsMasters;