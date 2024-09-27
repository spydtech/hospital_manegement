// import React, { useState } from "react";
// import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';
// const Patient = () => {
//   const [patients, setPatients] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     fullname: "",
//     mobile: "",
//     gender: "",
//     bloodGroup: "",
//     identificationNumber: "",
//     dateOfBirth: "",
//     description: ""
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       const updatedPatients = [...patients];
//       updatedPatients[editIndex] = formData;
//       setPatients(updatedPatients);
//       setIsEditing(false);
//       setEditIndex(null);
//     } else {
//       setPatients([...patients, formData]);
//     }
//     setFormData({
//       id: "",
//       fullname: "",
//       mobile: "",
//       gender: "",
//       bloodGroup: "",
//       identificationNumber: "",
//       dateOfBirth: "",
//       description: ""
//     });
//     setShowModal(false);
//   };

//   const handleDelete = (index) => {
//     const updatedPatients = patients.filter((_, i) => i !== index);
//     setPatients(updatedPatients);
//   };

//   const handleEdit = (index) => {
//     setFormData(patients[index]);
//     setIsEditing(true);
//     setEditIndex(index);
//     setShowModal(true);
//   };

//   // Filter patients based on the search query
//   const filteredPatients = patients.filter((patient) =>
//     patient.fullname.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-4">
//       {/* <h1 className="text-xl font-bold mb-4">Patient Management</h1> */}

//       {/* Add Patient Button */}
//       <div className="flex justify-between items-center mt-10 mb-4">
//   {/* Search Box */}
//   <div className="w-full max-w-lg">
//     <input
//       type="text"
//       placeholder="Search by patient name"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       className="border-2 focus:border-[#17469E] focus:outline-none placeholder:text-[#17469E] rounded-md border-[#17469E] p-3 w-full shadow-lg"
//     />
//   </div>

//   {/* Add Patient Button */}
//   <button
//   className=" bg-[#17469E] text-white py-3 px-6 rounded-md shadow-lg font-semibold  transition-all duration-300 ease-in-out ml-4 flex items-center space-x-2"
//   onClick={() => {
//     setShowModal(true);
//     setIsEditing(false);
//   }}
// >
//   <FiPlus /> 
//   <span>Add Patient</span>
// </button>

// </div>



    

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-[#17469E] p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl text-white font-bold mb-4">
//               {isEditing ? "Edit Patient" : "Add Patient"}
//             </h2>

//             {/* Patient Form */}
         
//             <form onSubmit={handleSubmit} className="space-y-4">
//   {/* Form grid with two columns */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//     {/* Left side inputs */}
//     <div>
//       <input
//         type="text"
//         name="fullname"
//         placeholder="Full Name"
//         value={formData.fullname}
//         onChange={handleChange}
//         className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         name="gender"
//         placeholder="Gender"
//         value={formData.gender}
//         onChange={handleChange}
//         className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         name="mobile"
//         placeholder="Mobile"
//         value={formData.mobile}
//         onChange={handleChange}
//         className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         name="bloodGroup"
//         placeholder="Blood Group"
//         value={formData.bloodGroup}
//         onChange={handleChange}
//         className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//     <div>
//       <input
//         type="date"
//         name="dateOfBirth"
//         placeholder="Date of Birth"
//         value={formData.dateOfBirth}
//         onChange={handleChange}
//         className="border text-[#17469E] placeholder:text-[#17469E]  rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//     <div>
//       <input
//         type="text"
//         name="identificationNumber"
//         placeholder="Identification Number"
//         value={formData.identificationNumber}
//         onChange={handleChange}
//         className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
//       />
//     </div>
//   </div>

//   {/* Description */}
//   <textarea
//     name="description"
//     placeholder="Description"
//     value={formData.description}
//     onChange={handleChange}
//     className="border placeholder:text-[#17469E]  rounded-md focus:outline-none p-2 w-full mt-4"
//   ></textarea>

//   {/* Submit and Close Buttons */}
//   <div className="flex justify-end space-x-4 mt-4">
//     <div className="text-center">
//       <button
//         type="submit"
//         className="bg-white  text-[#17469E] py-2 px-4 rounded"
//       >
//         {isEditing ? "Update Patient" : "Add Patient"}
//       </button>
//     </div>
//   </div>
//           </form>

//           </div>
//         </div>
//       )}

//       {/* Patient Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-[#17469E] text-white ">
//               {/* <th className="border font-serif  text-center   py-4  ">Select</th> */}
//               <th className="border font-serif  py-4 text-center">Full Name</th>
//               <th className="border  font-serif py-4 text-center">Mobile</th>
//               <th className="border font-serif  py-4 text-center">Gender</th>
//               <th className="border  font-serif py-4 text-center">Blood Group</th>
//               <th className="border  font-serif py-4 text-center">Identification Number</th>
//               <th className="border  font-serif py-4 text-center">Date of Birth</th>
//               <th className="border  font-serif py-4 text-center">Description</th>
           
//               <th className="border  font-serif py-4 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPatients.length > 0 ? (
//               filteredPatients.map((patient, index) => (
//                 <tr key={index}>
                
//                   <td className="border text-center p-2">{patient.fullname}</td>
//                   <td className="border text-center p-2">{patient.mobile}</td>
//                   <td className="border  text-center p-2">{patient.gender}</td>
//                   <td className="border text-center p-2">{patient.bloodGroup}</td>
//                   <td className="border text-center p-2">{patient.identificationNumber}</td>
//                   <td className="border text-center  p-2">{patient.dateOfBirth}</td>
//                   <td className="border text-center p-2">{patient.description}</td>
                  

//                   <td className="border text-center p-2">
//                     {/* <button
//                       className="bg-red-500 text-white px-2 py-1 rounded"
//                       onClick={() => handleDelete(index)}
//                     >
//                      <FiTrash/>
//                     </button> */}
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
//                       onClick={() => handleEdit(index)}
//                     >
//                      <FiEdit/>
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="10" className="border p-2 text-center">
//                   No patients found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Patient;


import React, { useState } from "react";
import { FiPlus, FiEdit } from 'react-icons/fi';
import { RiUserReceivedFill } from 'react-icons/ri';

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    fullname: "",
    mobile: "",
    gender: "",
    bloodGroup: "",
    identificationNumber: "",
    dateOfBirth: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.bloodGroup.trim()) newErrors.bloodGroup = "Blood Group is required";
    if (!formData.identificationNumber.trim()) newErrors.identificationNumber = "Identification Number is required";
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (isEditing) {
      const updatedPatients = [...patients];
      updatedPatients[editIndex] = formData;
      setPatients(updatedPatients);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setPatients([...patients, formData]);
    }
    setFormData({
      id: "",
      fullname: "",
      mobile: "",
      gender: "",
      bloodGroup: "",
      identificationNumber: "",
      dateOfBirth: "",
      description: ""
    });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mt-10 mb-4">
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by patient name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 focus:border-[#17469E] focus:outline-none placeholder:text-[#17469E] rounded-md border-[#17469E] p-3 w-full shadow-lg"
          />
        </div>

        <button
          className=" bg-[#17469E] text-white py-3 px-6 rounded-md shadow-lg font-semibold  transition-all duration-300 ease-in-out ml-4 flex items-center space-x-2"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
            setFormData({
              id: "",
              fullname: "",
              mobile: "",
              gender: "",
              bloodGroup: "",
              identificationNumber: "",
              dateOfBirth: "",
              description: ""
            });
            setErrors({});
          }}
        >
          <FiPlus />
          <span>Add Patient</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
        
          <div className="bg-[#17469E] p-6 rounded-lg shadow-lg max-w-2xl w-full">
         
            <h2 className="text-2xl text-white font-bold mb-4">
              {isEditing ? 
             <h2 className="text-[#ffff]  flex font-medium gap-4 text-3xl "> <span className=" pt-1"><RiUserReceivedFill/></span>Edit Patient</h2> : 
             <h2 className="text-[#ffff]  flex font-medium gap-4 text-3xl "> <span className=" pt-1"><RiUserReceivedFill/></span>Add Patient</h2>}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.fullname && (
                    <p className="text-red-500 text-sm">{errors.fullname}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.gender && (
                    <p className="text-red-500 text-sm">{errors.gender}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm">{errors.mobile}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="bloodGroup"
                    placeholder="Blood Group"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.bloodGroup && (
                    <p className="text-red-500 text-sm">{errors.bloodGroup}</p>
                  )}
                </div>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="border text-[#17469E] placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    name="identificationNumber"
                    placeholder="Identification Number"
                    value={formData.identificationNumber}
                    onChange={handleChange}
                    className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full"
                  />
                  {errors.identificationNumber && (
                    <p className="text-red-500 text-sm">{errors.identificationNumber}</p>
                  )}
                </div>
              </div>

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border placeholder:text-[#17469E] rounded-md focus:outline-none p-2 w-full mt-4"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}

              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="button"
                  className="bg-red-500 text-white py-2 px-4 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-white text-[#17469E] py-2 px-4 rounded"
                >
                  {isEditing ? "Update Patient" : "Add Patient"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#17469E] text-white ">
              <th className="border font-serif py-4 text-center">Full Name</th>
              <th className="border font-serif py-4 text-center">Mobile</th>
              <th className="border font-serif py-4 text-center">Gender</th>
              <th className="border font-serif py-4 text-center">Blood Group</th>
              <th className="border font-serif py-4 text-center">Identification Number</th>
              <th className="border font-serif py-4 text-center">Date of Birth</th>
              <th className="border font-serif py-4 text-center">Description</th>
              <th className="border font-serif py-4 text-center">Status</th>
              <th className="border font-serif py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td className="border text-center">{patient.fullname}</td>
                <td className="border text-center">{patient.mobile}</td>
                <td className="border text-center">{patient.gender}</td>
                <td className="border text-center">{patient.bloodGroup}</td>
                <td className="border text-center">{patient.identificationNumber}</td>
                <td className="border text-center">{patient.dateOfBirth}</td>
                <td className="border text-center">{patient.description}</td>
                <td className="border text-center">
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md te">Active</button>
                </td>
                <td className=" flex justify-center items-center mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 text-white py-1 px-2 rounded-md flex items-center"
                  >
                    <FiEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
