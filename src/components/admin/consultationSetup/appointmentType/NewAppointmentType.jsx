// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const NewAppointmentType = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     duration: '',
//     allowBooking: '',
//     modeOfPayment: '',
//     paidAmount: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
//     storedAppointmentTypes.push(formData);
//     localStorage.setItem('appointmentTypes', JSON.stringify(storedAppointmentTypes));
//     navigate('/appointment-type');
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-[#17469E] w-full max-w-lg p-8 rounded-lg shadow-md">
//         <h2 className="text-white text-2xl mb-6">New Appointment Type</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg w-full"
//             />
//             <input
//               type="text"
//               name="type"
//               placeholder="Type"
//               value={formData.type}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg w-full"
//             />
//           </div>
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (In minutes)"
//             value={formData.duration}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-lg w-full"
//           />
//           <input
//             type="text"
//             name="allowBooking"
//             placeholder="Allow Booking For Practitioner"
//             value={formData.allowBooking}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-lg w-full"
//           />
//           <h3 className="text-white text-lg mt-4">Billing Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="modeOfPayment"
//               placeholder="Mode Of Payment"
//               value={formData.modeOfPayment}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg w-full"
//             />
//             <input
//               type="text"
//               name="paidAmount"
//               placeholder="Paid Amount"
//               value={formData.paidAmount}
//               onChange={handleChange}
//               className="p-3 border border-gray-300 rounded-lg w-full"
//             />
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

// export default NewAppointmentType;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { RiUserReceivedFill } from "react-icons/ri";
// const NewAppointmentType = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     type: '',
//     duration: '',
//     allowBooking: '',
//     modeOfPayment: '',
//     paidAmount: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
//     storedAppointmentTypes.push(formData);
//     localStorage.setItem('appointmentTypes', JSON.stringify(storedAppointmentTypes));
//     navigate('/appointment-type');
//   };

//   const renderInputWithIcon = (name, placeholder) => (
//     <div className="relative w-full">
//       <input
//         type="text"
//         name={name}
//         placeholder={placeholder}
//         value={formData[name]}
//         onChange={handleChange}
//         className="p-3 pl-4 pr-10 border border-gray-300  w-full"
//       />
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex flex-col justify-center w-auto items-center bg-black bg-opacity-20">
//     <div className='bg-white w-[800px]'>

//     <div className=' max-w-[820px] w-full pt-4'>
//       <h2 className="text-[#17469E]  flex  font-medium gap-4 text-3xl mb-8"> <span className=" pt-1"><RiUserReceivedFill/></span>New Appointment Type</h2>
//       </div>
//       <div className="bg-[#17469E] w-full max-w-4xl p-8  shadow-md">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-2 gap-6">
//             {renderInputWithIcon('name', 'Name')}
//             {renderInputWithIcon('type', 'Type')}
//             {renderInputWithIcon('duration', 'Duration (In minutes)')}
//           </div>
//           <h2  className="text-white text-xl mb-6">Allow Booking for practitioner</h2>
//           {renderInputWithIcon('allowBooking', 'Allow Booking For Practitioner')}

//           <h3 className="text-white text-xl mt-4">Billing Details</h3>
//           <div className="grid grid-cols-2 gap-6">
//             {renderInputWithIcon('modeOfPayment', 'Mode Of Payment')}
//             {renderInputWithIcon('paidAmount', 'Paid Amount')}
//           </div>

//           <div className="flex justify-center mt-6">
//             <button type="submit" className="bg-white text-[#17469E] py-3 px-32 rounded-lg text-lg">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default NewAppointmentType;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiUserReceivedFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const NewAppointmentType = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    duration: '',
    allowBooking: '',
    modeOfPayment: '',
    paidAmount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedAppointmentTypes = JSON.parse(localStorage.getItem('appointmentTypes')) || [];
    storedAppointmentTypes.push(formData);
    localStorage.setItem('appointmentTypes', JSON.stringify(storedAppointmentTypes));
    navigate('/appointment-type'); // Redirect to appointment types page
  };

  const renderInputWithIcon = (name, placeholder) => (
    <div className="relative w-full">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        className="p-3 pl-4 pr-10 border border-gray-300 rounded-lg w-full"
      />
    </div>
  );

  // Close button handler
  const handleClose = () => {
    navigate('/appointment-type'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center w-auto items-center bg-black bg-opacity-50">
      <div className='bg-white w-[800px]'>
        <div className='max-w-[820px]  pt-4 flex justify-between items-center'>
          <h2 className="text-[#17469E] flex font-medium gap-4 text-xl mb-8 ml-4">
            <span className="pt-1"><RiUserReceivedFill /></span>New Appointment Type
          </h2>
          <button
            onClick={handleClose}
            className="text-[#17469E]   text-2xl mr-8 mb-4 font-extrabold"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div className="bg-[#17469E] w-full max-w-4xl p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {renderInputWithIcon('name', 'Name')}
              {renderInputWithIcon('type', 'Type')}
              {renderInputWithIcon('duration', 'Duration (In minutes)')}
            </div>
            <h2 className="text-white text-xl mb-6">Allow Booking for Practitioner</h2>
            {renderInputWithIcon('allowBooking', 'Allow Booking For Practitioner')}
            <h3 className="text-white text-xl mt-4">Billing Details</h3>
            <div className="grid grid-cols-2 gap-6">
              {renderInputWithIcon('modeOfPayment', 'Mode Of Payment')}
              {renderInputWithIcon('paidAmount', 'Paid Amount')}
            </div>
            <div className="flex justify-center mt-6">
              <button type="submit" className="bg-white text-[#17469E] py-3 px-32 rounded-lg text-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppointmentType;
