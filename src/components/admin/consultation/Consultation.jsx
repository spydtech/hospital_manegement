// import React from 'react'
// import { MdArrowOutward } from "react-icons/md";


// const Consultation = () => {
//   return (
//     <div className='py-8 px-12'>
//         <span class="text-[28px] font-serif">
//     <span class="bg-gradient-to-r bg-clip-text from-[#17469E] to-[#E63E13] text-transparent">
//     Consultation
//     </span>
//   </span>
//       <div className='grid grid-cols-2 font-serif w-1/2'>
//         <div className='bg-[#17469E] text-white gap-x-4 mt-6 flex justify-start px-6 items-center w-[240px] h-[50px]'>Patient Appointment<MdArrowOutward /></div>
//         <div className='bg-[#17469E] text-white gap-x-4 mt-6 flex justify-start px-6 items-center w-[240px] h-[50px]'>Clinical Procedure <MdArrowOutward /></div>
//         <div className='bg-[#17469E] text-white gap-x-4 mt-6 flex justify-start px-6 items-center w-[240px] h-[50px]'>Patient Encounter <MdArrowOutward /></div>
//         <div className='bg-[#17469E] text-white gap-x-4 mt-6 flex justify-start px-6 items-center w-[240px] h-[50px]'>Vital Signs <MdArrowOutward /></div>
//         <div className='bg-[#17469E] text-white gap-x-4 mt-6 flex justify-start px-6 items-center w-[240px] h-[50px]'>Fee Validity<MdArrowOutward /></div>

//       </div>
//     </div>
//   )
// }

// export default Consultation
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import {Link} from "react-router-dom"
import img from "../../../assets/img.png"
const Consultation = () => {
  const facilitybuttonData = [
    { label: 'Patient Appointment', path: '/patient-appointment' },
    { label: 'Clinical Procedure', path: '/clinical-procedure' },
    { label: 'Patient Encounter', path: '/patient-encounter' },
    { label: 'Vital Signs', path: '/vital-signs' },
    { label: 'Fee Validity', path: '/fee-validity' },
  
  ];
  return (

  <div className="min-h-screen flex flex-col justify-start max-w-7xl items-center py-10">
      {/* Heading */}
      {/* <h1 className="text-4xl lg:w-full lg:max-w-[940px]   mb-8">
       <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]"> Consultation</span>
      </h1> */}
      <div className="flex justify-start items-start gap-4">
    <div>
        <img src={img} alt="Consultation" className='mt-2' /> {/* Added alt attribute for accessibility */}
    </div>
    <div>
        <h1 className="text-4xl lg:w-full lg:max-w-[940px] mb-8">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]">
            Consultation
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
  )
}

export default Consultation
