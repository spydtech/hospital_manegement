
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import img from "../../../assets/img.png"
import Navbar from '../../home/Navbar';
const ConsultationSetup = () => {
  // Define button data dynamically
  const consultationSetupbuttonData = [
    { label: 'Appointment Type', path: '/appointment-type' },
    { label: 'Prescription Duration', path: '/prescription-duration' },
    { label: 'Prescription Dosage', path: '/prescription-dosage' },
    { label: 'Complaint', path: '/complaint' },
    { label: 'Antibiotic', path: '/antibiotic' },
    { label: 'Clinical Procedure Template ', path: '/clinical-procedure-template ' },
    { label: 'Diagnosis', path: '/diagnosis' },
    { label: 'Treatment Plan Template', path: '/treatment-plan-template' },
    // Add more buttons if needed
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-start max-w-7xl items-center py-10">
        {/* Heading */}
        {/* <h1 className="text-4xl lg:w-full lg:max-w-[940px]   mb-8">
       <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]"> Masters</span>
      </h1> */}
        <div className="flex justify-start items-start gap-4">
          <div>
            <img src={img} alt="Consultation" className='mt-2' /> {/* Added alt attribute for accessibility */}
          </div>
          <div>
            <h1 className="text-4xl lg:w-full lg:max-w-[940px] mb-8">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#E53E13] to-[#17469E]">
                Consultation Setup
              </span>
            </h1>
          </div>
        </div>
        {/* Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {consultationSetupbuttonData.map((button, index) => (
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
  );
};

export default ConsultationSetup;

