// import React, { useState } from "react";
// import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';

// const PatientApointment = () => {
//   const [patients, setPatients] = useState([]);
//   const [formData, setFormData] = useState({
//     date: "",
//     name: "",
//     serius: "",
//     appointmenttype: "",
//     duration: "",
//     modeofpayment: "",
//     paidamount: "",
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
//       date: "",
//       name: "",
//       serius: "",
//       appointmenttype: "",
//       duration: "",
//       modeofpayment: "",
//       paidamount: "",
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
//     patient.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="p-4">

//       {/* Add Patient Button */}
//       <div className="flex justify-between items-center mt-10 mb-4">
//         {/* Search Box */}
//         <div className="w-full max-w-lg">
//           <input
//             type="text"
//             placeholder="Search by patient name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="border-2 focus:outline-[#17469E] focus:border-[#17469E] focus:ri placeholder:text-[#17469E] text-[#17469E] rounded-md border-[#17469E] p-3 w-full shadow-lg"
//           />
//         </div>

//         {/* Add Patient Button */}
//         <button
//           className="bg-[#17469E] text-white py-3 px-6 rounded-md shadow-lg font-semibold transition-all duration-300 ease-in-out ml-4 flex items-center space-x-2"
//           onClick={() => {
//             setShowModal(true);
//             setIsEditing(false);
//           }}
//         >
//           <FiPlus />
//           <span>Patient Appointment</span>
//         </button>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-[#17469E] p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl text-white font-bold mb-4">
//               {isEditing ? "Edit Patient" : "Add Patient"}
//             </h2>

//             {/* Patient Form */}
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
//                   <input
//                     type="date"
//                     id="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none  border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="serius" className="block text-sm font-medium text-white">Series</label>
//                   <input
//                     type="text"
//                     id="serius"
//                     name="serius"
//                     value={formData.serius}
//                     onChange={handleChange}
//                     className="mt-1 block w-full border focus:outline-none border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="appointmenttype" className="block text-sm font-medium text-white">Appointment Type</label>
//                   <input
//                     type="text"
//                     id="appointmenttype"
//                     name="appointmenttype"
//                     value={formData.appointmenttype}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none  border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* <h3 className="text-lg font-semibold  mt-6 text-white"></h3> */}

//               <div className="grid grid-cols-1 gap-4">
//                 <div>
//                   <label htmlFor="duration" className="block text-sm font-medium text-white">Duration</label>
//                   <input
//                     type="text"
//                     id="duration"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="modeofpayment" className="block text-sm font-medium text-white">Mode Of Payment</label>
//                   <input
//                     type="text"
//                     id="modeofpayment"
//                     name="modeofpayment"
//                     value={formData.modeofpayment}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none  border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="paidamount" className="block text-sm font-medium text-white">Paid Amount</label>
//                   <input
//                     type="text"
//                     id="paidamount"
//                     name="paidamount"
//                     value={formData.paidamount}
//                     onChange={handleChange}
//                     className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-center mt-6">
//                 <button type="submit" className="bg-white text-[#17469E] px-4 py-2 rounded-md">Save</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Patient Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-[#17469E] text-white">
//               <th className="border font-serif py-4 text-center">Date</th>
//               <th className="border font-serif py-4 text-center">Name</th>
//               <th className="border font-serif py-4 text-center">Serious</th>
//               <th className="border font-serif py-4 text-center">Appointment Type</th>
//               <th className="border font-serif py-4 text-center">Duration</th>
//               <th className="border font-serif py-4 text-center">Mode of Payment</th>
//               <th className="border font-serif py-4 text-center">Paid Amount</th>
//               <th className="border font-serif py-4 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPatients.length > 0 ? (
//               filteredPatients.map((patient, index) => (
//                 <tr key={index}>
//                   {/* <td className="border text-center p-2">
//                     <input type="checkbox" />
//                   </td> */}
//                   <td className="border text-center p-2">{patient.date}</td>
//                   <td className="border text-center p-2">{patient.name}</td>
//                   <td className="border text-center p-2">{patient.serius}</td>
//                   <td className="border text-center p-2">{patient.appointmenttype}</td>
//                   <td className="border text-center p-2">{patient.duration}</td>
//                   <td className="border text-center p-2">{patient.modeofpayment}</td>
//                   <td className="border text-center p-2">{patient.paidamount}</td>
//                   <td className="border text-center p-2">
//                     <button className="text-blue-500" onClick={() => handleEdit(index)}><FiEdit /></button>
//                     {/* <button className="text-red-500" onClick={() => handleDelete(index)}><FiTrash /></button> */}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="9" className="border text-center p-4">No patients found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PatientApointment;
import React, { useState } from "react";
import { FiPlus, FiEdit } from 'react-icons/fi';

const PatientAppointment = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    serius: "",
    appointmenttype: "",
    duration: "",
    modeofpayment: "",
    paidamount: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedPatients = [...patients];
      updatedPatients[editIndex] = formData;
      setPatients(updatedPatients);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setPatients([...patients, formData]);
    }
    resetForm();
  };

  const handleDelete = (index) => {
    const updatedPatients = patients.filter((_, i) => i !== index);
    setPatients(updatedPatients);
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setIsEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      date: "",
      name: "",
      serius: "",
      appointmenttype: "",
      duration: "",
      modeofpayment: "",
      paidamount: "",
    });
    setShowModal(false);
  };

  const handleCloseModal = () => {
    resetForm();
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Add Patient Button */}
      <div className="flex justify-between items-center mt-10 mb-4">
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by patient name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-2 focus:outline-[#17469E] focus:border-[#17469E] text-[#17469E] rounded-md border-[#17469E] p-3 w-full shadow-lg"
          />
        </div>

        <button
          className="bg-[#17469E] text-white py-3 px-6 rounded-md shadow-lg font-semibold transition-all duration-300 ease-in-out ml-4 flex items-center space-x-2"
          onClick={() => {
            setShowModal(true);
            setIsEditing(false);
          }}
        >
          <FiPlus />
          <span>Patient Appointment</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#17469E] p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="relative mb-4">
              <h2 className="text-xl text-white font-bold">
                {isEditing ? "Edit Patient" : "Add Patient"}
              </h2>
              <button
                className="absolute top-2 right-2 text-white"
                onClick={handleCloseModal}
              >
                X
              </button>
            </div>

            {/* Patient Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="serius" className="block text-sm font-medium text-white">Series</label>
                  <input
                    type="text"
                    id="serius"
                    name="serius"
                    value={formData.serius}
                    onChange={handleChange}
                    className="mt-1 block w-full border focus:outline-none border-border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="appointmenttype" className="block text-sm font-medium text-white">Appointment Type</label>
                  <input
                    type="text"
                    id="appointmenttype"
                    name="appointmenttype"
                    value={formData.appointmenttype}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-white">Duration</label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modeofpayment" className="block text-sm font-medium text-white">Mode Of Payment</label>
                  <input
                    type="text"
                    id="modeofpayment"
                    name="modeofpayment"
                    value={formData.modeofpayment}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="paidamount" className="block text-sm font-medium text-white">Paid Amount</label>
                  <input
                    type="text"
                    id="paidamount"
                    name="paidamount"
                    value={formData.paidamount}
                    onChange={handleChange}
                    className="mt-1 block w-full focus:outline-none border border-border rounded-md p-2"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button type="submit" className="bg-white text-[#17469E] px-4 py-2 rounded-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Patient Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#17469E] text-white">
              <th className="border font-serif py-4 text-center">Date</th>
              <th className="border font-serif py-4 text-center">Name</th>
              <th className="border font-serif py-4 text-center">Serious</th>
              <th className="border font-serif py-4 text-center">Appointment Type</th>
              <th className="border font-serif py-4 text-center">Duration</th>
              <th className="border font-serif py-4 text-center">Mode of Payment</th>
              <th className="border font-serif py-4 text-center">Paid Amount</th>
              <th className="border font-serif py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={index}>
                  <td className="border text-center p-2">{patient.date}</td>
                  <td className="border text-center p-2">{patient.name}</td>
                  <td className="border text-center p-2">{patient.serius}</td>
                  <td className="border text-center p-2">{patient.appointmenttype}</td>
                  <td className="border text-center p-2">{patient.duration}</td>
                  <td className="border text-center p-2">{patient.modeofpayment}</td>
                  <td className="border text-center p-2">{patient.paidamount}</td>
                  <td className="border text-center p-2">
                    <button className="text-blue-500" onClick={() => handleEdit(index)}><FiEdit /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="border text-center p-4">No patients found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAppointment;
