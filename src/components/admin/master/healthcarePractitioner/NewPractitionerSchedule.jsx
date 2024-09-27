// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const NewPractitionerSchedule = () => {
//   const navigate = useNavigate();
  
//   // Initialize form data state
//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNumber: '',
//     gender: '',
//     officeNumber: '',
//     status: '',  // Changed to dropdown
//     day: '',
//     practitionerType: '',
//     user: '',
//     employee: '',
//     hospital: '',
//     medicalDepartment: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Get current stored data from localStorage or set an empty array if none exists
//     const storedData = JSON.parse(localStorage.getItem('practitionerSchedules')) || [];
    
//     // Add the new formData to the storedData array
//     storedData.push(formData);

//     // Save the updated data array to localStorage
//     localStorage.setItem('practitionerSchedules', JSON.stringify(storedData));

//     alert('Data saved successfully!');
//     navigate('/HealthcarePractitioner');
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-[#17469E] p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto overflow-hidden">
//         <h2 className="text-2xl font-bold mb-4 text-white text-center">New Practitioner Schedule</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           {/* Basic Details */}
//           <h3 className="text-xl mb-2 text-white">Basic Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {['name', 'mobileNumber', 'gender', 'officeNumber', 'day'].map((field, index) => (
//               <div key={index} className="relative">
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   className="p-2 text-blue-900 w-full pr-10"
//                   required
//                 />
//               </div>
//             ))}
//             {/* Status Dropdown */}
//             <div className="relative">
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="p-2 text-blue-900 w-full pr-10"
//                 required
//               >
//                 <option value="">Status</option>
//                 <option value="Active ">Active</option>
//                 <option value="Deactivate" >Inactive</option>
//               </select>
//             </div>
//           </div>

//           {/* Employee and User Details */}
//           <h3 className="text-xl mb-2 text-white">Employee and User Details</h3>
//           <div className="grid grid-cols-2 gap-4">
//             {['practitionerType', 'user', 'employee', 'hospital', 'medicalDepartment'].map((field, index) => (
//               <div key={index} className="relative">
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   placeholder={field.split(/(?=[A-Z])/).join(' ')}
//                   className="p-2 text-blue-900 w-full pr-10"
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Collapsible Sections */}
//           <div className=" grid space-y-2">
//             {['Appointments', 'Charges', 'Account Details'].map((section, index) => (
//               <select key={index} className="bg-[#17469E] py-2 rounded-lg max-w-44 w-full text-white">
//                 <option>{section}</option>
//               </select>
//             ))}
//           </div>

//           {/* Save Button */}
//           <div className="flex w-full justify-center">
//          <button
//             type="submit"
//             className="w-1/2 flex justify-center bg-white text-[#17469E] py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
//           >
//             Save 
//           </button>
//          </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewPractitionerSchedule;
import React, { useState } from 'react';
import { RiUserReceivedFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const NewPractitionerSchedule = () => {
  const navigate = useNavigate();
  
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    gender: '',
    officeNumber: '',
    status: '',  // Changed to dropdown
    day: '',
    practitionerType: '',
    user: '',
    employee: '',
    hospital: '',
    medicalDepartment: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get current stored data from localStorage or set an empty array if none exists
    const storedData = JSON.parse(localStorage.getItem('practitionerSchedules')) || [];
    
    // Add the new formData to the storedData array
    storedData.push(formData);

    // Save the updated data array to localStorage
    localStorage.setItem('practitionerSchedules', JSON.stringify(storedData));

    alert('Data saved successfully!');
    navigate('/HealthcarePractitioner');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className=' max-w-4xl w-full'>
      <h2 className="text-[#17469E]  flex font-medium gap-4 text-3xl mb-4"> <span className=" pt-1"><RiUserReceivedFill/></span>New Practitioner Schedule</h2>
      </div>
      <div className="bg-[#17469E] p-4  shadow-lg w-full max-w-4xl mx-auto overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Basic Details */}
          <h3 className="text-xl mb-2 text-white">Basic Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {['name', 'mobileNumber', 'gender', 'officeNumber', 'day'].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="p-2 text-[#17469E] w-full pr-10"
                  required
                />
              </div>
            ))}
            {/* Status Dropdown */}
            <div className="relative">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="p-2 text-[#17469E] w-full pr-10"
                required
              >
                <option value="">Status</option>
                <option value="Active ">Active</option>
                <option value="Deactivate" >Inactive</option>
              </select>
            </div>
          </div>

          {/* Employee and User Details */}
          <h3 className="text-xl mb-2 text-white">Employee and User Details</h3>
          <div className="grid grid-cols-2 gap-4">
            {['practitionerType', 'user', 'employee', 'hospital', 'medicalDepartment'].map((field, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.split(/(?=[A-Z])/).join(' ')}
                  className="p-2 text-blue-900 w-full pr-10"
                  required
                />
              </div>
            ))}
          </div>

          {/* Collapsible Sections */}
          <div className=" grid space-y-2">
            {['Appointments', 'Charges', 'Account Details'].map((section, index) => (
              <select key={index} className="bg-[#17469E] py-2 rounded-lg max-w-44 w-full text-white">
                <option>{section}</option>
              </select>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex w-full justify-center">
         <button
            type="submit"
            className="w-1/2 flex justify-center bg-white text-[#17469E] py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Save 
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default NewPractitionerSchedule;


