// import { FiPlus, FiEdit } from 'react-icons/fi';
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const HealthcarePractitioner = () => {
//   const [practitionerData, setPractitionerData] = useState([]); // Holds the practitioners' data
//   const [searchQuery, setSearchQuery] = useState(''); // State for the search input
//   const navigate = useNavigate();

//   // Fetch practitioner schedules from localStorage when component mounts
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('practitionerSchedules')) || [];
//     setPractitionerData(storedData);
//   }, []);

//   // Handle edit action
//   const handleEdit = (index) => {
//     const practitionerToEdit = practitionerData[index];
//     navigate('/editPractitioner-schedule', { state: { practitioner: practitionerToEdit, index } });
//   };

//   // Filter the practitioner data based on search input
//   const filteredPractitioners = practitionerData.filter((practitioner) =>
//     practitioner.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen p-8 bg-gray-100">
//       {/* Search Bar */}
//       <div className="mb-6 flex justify-start">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchQuery} // Controlled input for search query
//           onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
//           className="border border-blue-500 p-3 rounded-lg w-full max-w-lg"
//         />
//       </div>

//       {/* Practitioner Schedule Button */}
//       <div className="flex justify-end mb-6">
//         <button className="bg-[#17469E] text-white flex items-center px-6 py-3 rounded-lg hover:bg-[#153c80] transition">
//           <FiPlus className="mr-2" />
//           <Link to="/newpractitioner-schedule">Practitioner Scheduler</Link>
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto text-center ">
//         <table className="min-w-full bg-white shadow-md border border-gray-300">
//           <thead>
//             <tr className="bg-[#17469E] text-white  ">
//               <th className="p-4  border  border-gray-300">ID</th>
//               <th className="p-4  border border-gray-300">Mobile Number</th>
//               <th className="p-4  border border-gray-300">Full Name</th>
//               <th className="p-4  border  border-gray-300">Status</th>
//               <th className="p-4  border border-gray-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPractitioners.length > 0 ? (
//               filteredPractitioners.map((data, index) => (
//                 <tr key={index} className=' text-center'>
//                   <td className="p-4 border border-gray-300">{index + 1}</td>
//                   <td className="p-4 border border-gray-300">{data.mobileNumber}</td>
//                   <td className="p-4 border border-gray-300">{data.name}</td>
//                   <td className={`text-center border inline-block px-4 mt-4 text-lg rounded-lg text-white border-gray-300 ${data.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>{data.status}</td>

//                   <td className="p-4 border border-gray-300">
//                     <div className="flex justify-center space-x-4 ">
//                       {/* Edit Button */}
//                       <button
//                         onClick={() => handleEdit(index)}
//                         className="bg-[#17469E] p-2 text-white  rounded-lg"
//                       >
//                         <FiEdit />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-4 border border-gray-300">
//                   No practitioner schedules found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HealthcarePractitioner;

import { FiPlus, FiEdit } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HealthcarePractitioner = () => {
  const [practitionerData, setPractitionerData] = useState([]); // Holds the practitioners' data
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const navigate = useNavigate();

  // Fetch practitioner schedules from localStorage when component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('practitionerSchedules')) || [];
    setPractitionerData(storedData);
  }, []);

  // Handle edit action
  const handleEdit = (index) => {
    const practitionerToEdit = practitionerData[index];
    navigate('/editPractitioner-schedule', { state: { practitioner: practitionerToEdit, index } });
  };

  // Filter the practitioner data based on search input
  const filteredPractitioners = practitionerData.filter((practitioner) =>
    practitioner.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Search Bar */}
      <div className="mb-6 flex justify-start">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery} // Controlled input for search query
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          className="border border-blue-500 p-3 rounded-lg w-full max-w-lg"
        />
      </div>

      {/* Practitioner Schedule Button */}
      <div className="flex justify-end mb-6">
        <button className="bg-[#17469E] text-white flex items-center px-6 py-3 rounded-lg hover:bg-[#153c80] transition">
          <FiPlus className="mr-2" />
          <Link to="/newpractitioner-schedule">Practitioner Scheduler</Link>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto text-center ">
        <table className="min-w-full bg-white shadow-md border border-gray-300">
          <thead>
            <tr className="bg-[#17469E] text-white  ">
              <th className="p-4  border  border-gray-300">ID</th>
              <th className="p-4  border border-gray-300">Mobile Number</th>
              <th className="p-4  border border-gray-300">Full Name</th>
              <th className="p-4  border  border-gray-300">Status</th>
              <th className="p-4  border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPractitioners.length > 0 ? (
              filteredPractitioners.map((data, index) => (
                <tr key={index} className=' text-center'>
                  <td className="p-4 border border-gray-300">{index + 1}</td>
                  <td className="p-4 border border-gray-300">{data.mobileNumber}</td>
                  <td className="p-4 border border-gray-300">{data.name}</td>
                  <td className={`text-center border inline-block  w-32 mt-4 text-lg rounded-lg text-white border-gray-300 ${data.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>{data.status}</td>

                  <td className="p-4 border border-gray-300">
                    <div className="flex justify-center space-x-4 ">
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-[#17469E] p-2 text-white  rounded-lg"
                      >
                        <FiEdit />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 border border-gray-300">
                  No practitioner schedules found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthcarePractitioner;

