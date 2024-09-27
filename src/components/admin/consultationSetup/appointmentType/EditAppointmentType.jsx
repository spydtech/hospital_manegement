// import React, { useEffect, useState } from 'react';
// import { FiEdit } from 'react-icons/fi';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditAppointmentType = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     duration: '',
//     allowBooking: '',
//     modeOfPayment: '',
//     paidAmount: '',
//   });

//   useEffect(() => {
//     const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
//     const appointment = storedAppointmentTypes[id];
//     if (appointment) {
//       setFormData(appointment);
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
//     storedAppointmentTypes[id] = formData;
//     localStorage.setItem('appointmentTypes', JSON.stringify(storedAppointmentTypes));
//     navigate('/appointment-type');
//   };

//   // Function to render input fields with the edit icon
//   const renderInputWithIcon = (name, placeholder) => (
//     <div className="relative w-full">
//       <input
//         type="text"
//         name={name}
//         placeholder={placeholder}
//         value={formData[name]}
//         onChange={handleChange}
//         className="p-3 pl-4 pr-10 border border-gray-300 rounded-lg w-full" // Adjust padding to leave space for the icon
//       />
//       <FiEdit className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#17469E]" />
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-[#17469E]  w-full max-w-lg  p-8 rounded-lg shadow-md">
//         <h2 className="text-white text-2xl mb-6">Edit Appointment Type</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             {renderInputWithIcon('name', 'Name')}
//             {renderInputWithIcon('type', 'Type')}
//           </div>

//           {renderInputWithIcon('duration', 'Duration (In minutes)')}
//           {renderInputWithIcon('allowBooking', 'Allow Booking For Practitioner')}

//           <h3 className="text-white text-lg mt-4">Billing Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {renderInputWithIcon('modeOfPayment', 'Mode Of Payment')}
//             {renderInputWithIcon('paidAmount', 'Paid Amount')}
//           </div>

//           <div className="flex justify-center mt-6">
//             <button type="submit" className="bg-white text-[#17469E] py-2 px-8 rounded-lg text-lg">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditAppointmentType;


import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiUserReceivedFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';

import { IoCloseSharp } from "react-icons/io5";
const EditAppointmentType = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    allowBooking: '',
    modeOfPayment: '',
    paidAmount: '',
  });

  useEffect(() => {
    const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
    const appointment = storedAppointmentTypes[id];
    if (appointment) {
      setFormData(appointment);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
    storedAppointmentTypes[id] = formData;
    localStorage.setItem('appointmentTypes', JSON.stringify(storedAppointmentTypes));
    navigate('/appointment-type');
  };
// Close button handler
const handleClose = () => {
  navigate('/appointment-type'); // Navigate to the home page
};
  const renderInputWithIcon = (name, placeholder) => (
    <div className="relative w-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="p-3 pl-4 pr-10 border border-gray-300  w-full"
      />
      <FiEdit className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#17469E]" />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black bg-opacity-20">
<div className='bg-white w-[800px]'>
<div className=' max-w-[820px] pt-4 flex justify-between items-center '>
      <h2 className="text-[#17469E]  flex  font-medium gap-4 text-3xl mb-8"> <span className=" pt-1"><RiUserReceivedFill/></span>Edit Appointment Type</h2>
      <button 
            onClick={handleClose}
            className="bg-[#17469E] font-semibold text-white text-4xl mr-8 mb-4"
          >
            <IoCloseSharp />
          </button>
      </div>
      <div className="bg-[#17469E] p-8 w-full max-w-4xl  shadow-md">

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {renderInputWithIcon('name', 'Name')}
            {renderInputWithIcon('type', 'Type')}
            {renderInputWithIcon('duration', 'Duration (In minutes)')}
          </div>
          <h2  className="text-white text-xl mb-6">Allow Booking for practitioner</h2>
          {renderInputWithIcon('allowBooking', 'Allow Booking For Practitioner')}

          <h3 className="text-white text-lg mt-4">Billing Details</h3>
          <div className="grid grid-cols-2 gap-6">
            {renderInputWithIcon('modeOfPayment', 'Mode Of Payment')}
            {renderInputWithIcon('paidAmount', 'Paid Amount')}
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-white text-[#17469E] py-3 px-32 rounded-lg text-lg">
              Save Changes
            </button>
          </div>
        </form>
      </div>
</div>
    </div>
  );
};

export default EditAppointmentType;
